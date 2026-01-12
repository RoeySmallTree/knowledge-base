
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
        // Skip if already enriched (check for pricing)
        if (model.pricing) return;

        // Find matching row with looser logic
        const match = rowsData.find((row: any) => {
            const rowDisplay = normalize(row.display_name);
            const modelName = normalize(model.modelName);
            const vendorModel = normalize(`${model.vendor} ${model.modelName}`);

            // Direct match
            if (rowDisplay === modelName) return true;
            if (rowDisplay === vendorModel) return true;

            // Contains match (safer for "Mistral: Saba" vs "Saba")
            if (rowDisplay.includes(modelName) && modelName.length > 3) return true;
            if (vendorModel.includes(rowDisplay)) return true; // e.g. "Google Gemini 1.5" includes "Gemini 1.5"

            // Suffix match
            if (rowDisplay.endsWith(modelName)) return true;

            return false;
        });

        if (match) {
            // MERGE FIELDS
            model.id = match.id.toString();
            model.api_id = match.api_id;
            model.slug = match.slug;

            if (!model.analyticalTraits || model.analyticalTraits === "Imported from database") {
                model.description = match.description;
            } else {
                model.description = match.description;
            }

            model.pricing = {
                prompt: match.price_prompt_micro,
                completion: match.price_completion_micro,
                tier: match.price_tier
            };

            model.context_length = match.context_length;
            if (model.contextK === "Unknown" || !model.contextK) {
                model.contextK = Math.round(match.context_length / 1024);
            }

            if (match.fallback_model_id) {
                model.fallback_model_id = match.fallback_model_id;
            }

            if (match.capabilities) {
                try {
                    model.capabilities = JSON.parse(match.capabilities);
                } catch (e) {
                    model.capabilities = match.capabilities;
                }
            }

            updatedCount++;
            console.log(`Enriched: ${model.vendor} ${model.modelName}`);
        }
    });

    fs.writeFileSync(MODELS_PATH, JSON.stringify(modelsData, null, 2));
    console.log(`Successfully enriched ${updatedCount} ADDITIONAL models.`);

} catch (error) {
    console.error("Error merging models:", error);
    process.exit(1);
}
