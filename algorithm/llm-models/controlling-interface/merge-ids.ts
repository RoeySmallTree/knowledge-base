import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parse/sync';

const MODELS_JSON_PATH = path.join(process.cwd(), '../data/models.json');
const CSV_PATH = path.join(process.cwd(), '../llm_models_rows.csv');

interface Model {
    modelName: string;
    vendor: string;
    id?: string;
    [key: string]: any;
}

interface CsvRow {
    id: string;
    display_name: string;
    vendor_id: string;
    api_id: string;
    [key: string]: any;
}

function normalize(str: string): string {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function cleanName(name: string): string {
    return name.trim().replace(/\s+/g, ' ');
}

async function mergeIds() {
    console.log("Reading files...");
    const modelsData = JSON.parse(fs.readFileSync(MODELS_JSON_PATH, 'utf-8'));
    const csvContent = fs.readFileSync(CSV_PATH, 'utf-8');

    const records = csv.parse(csvContent, {
        columns: true,
        skip_empty_lines: true
    }) as CsvRow[];

    console.log(`Loaded ${modelsData.models.length} JSON models and ${records.length} CSV rows.`);

    let matchedCount = 0;
    const unmatched: string[] = [];

    const models = modelsData.models.map((model: Model) => {
        // Reset ID
        delete model.id;

        const cleanModelName = cleanName(model.modelName);
        const normModelName = normalize(model.modelName);

        // 1. Try exact match on name (cleaned)
        let match = records.find(r => cleanName(r.display_name) === cleanModelName);

        // 2. Try normalized match
        if (!match) {
            match = records.find(r => normalize(r.display_name) === normModelName);
        }

        // 3. Try to strip "Vendor: " prefix from CSV display_name (e.g. "Qwen: Qwen2.5...")
        if (!match) {
            match = records.find(r => {
                const parts = r.display_name.split(':');
                if (parts.length > 1) {
                    const namePart = parts[1].trim();
                    if (normalize(namePart) === normModelName) return true;
                    if (cleanName(namePart) === cleanModelName) return true;
                    // Try contains
                    if (normalize(namePart).includes(normModelName) || normModelName.includes(normalize(namePart))) {
                        // Check vendor heuristic
                        if (model.vendor === "Qwen" && r.display_name.includes("Qwen")) return true;
                        if (model.vendor === "Z.AI" && r.display_name.includes("GLM")) return true;
                    }
                }
                return false;
            });
        }

        // 4. Fallback: Check if API ID contains the slugified model name + strict vendor check
        if (!match) {
            match = records.find(r => {
                const normDisplayName = normalize(r.display_name);
                const normVendor = normalize(model.vendor);
                const apiId = r.api_id.toLowerCase();

                let vendorMatch = apiId.includes(normVendor);
                // Aliases
                if (model.vendor === "Alibaba" && apiId.includes("qwen")) vendorMatch = true;
                if (model.vendor === "Qwen" && (apiId.includes("qwen") || r.display_name.includes("Qwen"))) vendorMatch = true;
                if (model.vendor === "Z.AI" && r.display_name.includes("GLM")) vendorMatch = true;
                if (model.vendor === "Meta" && (apiId.includes("llama") || r.display_name.includes("Llama"))) vendorMatch = true;
                if (model.vendor === "Perplexity" && apiId.includes("pplx")) vendorMatch = true;
                if (model.vendor === "Mistral" && (apiId.includes("mistral") || apiId.includes("mixtral"))) vendorMatch = true;
                if (model.vendor === "Nous" && (apiId.includes("hermes"))) vendorMatch = true;

                if (!vendorMatch) return false;

                // Fuzzy name match
                if (normDisplayName.includes(normModelName) || normModelName.includes(normDisplayName)) {
                    // Check length diff to avoid bad matches
                    if (Math.abs(normDisplayName.length - normModelName.length) > 6) return false;
                    return true;
                }
                return false;
            });
        }

        if (match) {
            matchedCount++;
            return {
                id: match.id,
                ...model
            };
        } else {
            unmatched.push(`[${model.vendor}] ${model.modelName}`);
            return model;
        }
    });

    console.log(`Matched ${matchedCount} models.`);
    console.log(`Unmatched models (${unmatched.length}):`);
    unmatched.forEach(name => console.log(` - ${name}`));

    // Update models.json
    modelsData.models = models;
    fs.writeFileSync(MODELS_JSON_PATH, JSON.stringify(modelsData, null, 2));
    console.log("Updated models.json with IDs.");

    // Write discrepancies report
    const reportPath = path.join(process.cwd(), '../discrepancies.md');
    const reportContent = `# Model Data Discrepancies Report

**Total JSON Models:** ${modelsData.models.length}
**Matched IDs:** ${matchedCount}
**Unmatched Models:** ${unmatched.length}

## Unmatched Models List
The following models exist in \`models.json\` but could not be forcefully matched to an entry in \`llm_models_rows.csv\`:

${unmatched.map(m => `- ${m}`).join('\n')}
`;
    fs.writeFileSync(reportPath, reportContent);
    console.log(`Discrepancies report written to ${reportPath}`);
}

mergeIds();
