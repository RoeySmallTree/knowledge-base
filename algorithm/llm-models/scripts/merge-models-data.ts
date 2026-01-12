
import * as fs from 'fs';
import * as path from 'path';

const ROWS_PATH = path.join(__dirname, '../data/llm_models_rows.json');
const MODELS_PATH = path.join(__dirname, '../data/models.json');

function normalize(str: string): string {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

try {
    const rowsRaw = fs.readFileSync(ROWS_PATH, 'utf-8');
    const rowsData = JSON.parse(rowsRaw);

    const modelsRaw = fs.readFileSync(MODELS_PATH, 'utf-8');
    const modelsData = JSON.parse(modelsRaw);

    let updatedCount = 0;

    modelsData.models.forEach((model: any) => {
        // Find matching row
        const match = rowsData.find((row: any) => {
            // Priority 1: ID match (if we had it, but models.json IDs might be different or missing)
            // Priority 2: Name match

            const rowDisplay = row.display_name;
            const modelName = model.modelName;

            // Normalize for comparison
            const nRow = normalize(rowDisplay);
            const nModel = normalize(modelName);
            const nVendorModel = normalize(`${model.vendor} ${modelName}`);

            return nRow === nModel || nRow === nVendorModel || nRow.endsWith(nModel);
        });

        if (match) {
            // MERGE FIELDS
            // We want to keep existing manual edits if they exist, but populate missing ones.
            // However, user said "add all fields", implying enrichment.

            // IDs and technical keys
            model.id = match.id.toString(); // Ensure ID is string
            model.api_id = match.api_id;
            model.slug = match.slug;

            // Description (User requested checking this)
            if (!model.analyticalTraits || model.analyticalTraits === "Imported from database") {
                model.description = match.description; // Store in description if not mapping to traits
            } else {
                model.description = match.description; // Keep both for UI
            }

            // Pricing
            model.pricing = {
                prompt: match.price_prompt_micro,
                completion: match.price_completion_micro,
                tier: match.price_tier
            };

            // Context
            model.context_length = match.context_length;
            if (model.contextK === "Unknown" || !model.contextK) {
                model.contextK = Math.round(match.context_length / 1024);
            }

            // Fallback
            if (match.fallback_model_id) {
                model.fallback_model_id = match.fallback_model_id;
            }

            // Capabilities
            if (match.capabilities) {
                try {
                    model.capabilities = JSON.parse(match.capabilities);
                } catch (e) {
                    model.capabilities = match.capabilities;
                }
            }

            updatedCount++;
        }
    });

    fs.writeFileSync(MODELS_PATH, JSON.stringify(modelsData, null, 2));
    console.log(`Successfully enriched ${updatedCount} models with data from rows file.`);

} catch (error) {
    console.error("Error merging models:", error);
    process.exit(1);
}
