
import * as fs from 'fs';
import * as path from 'path';

const MODELS_PATH = path.join(__dirname, '../data/models.json');

try {
    const raw = fs.readFileSync(MODELS_PATH, 'utf-8');
    const data = JSON.parse(raw);

    // Check which models don't have an ID (since enrichment script adds ID as string)
    // Or we can check based on a new field we added, like `description` or `pricing`
    // The previous script added `id` (as string from database), `description`, `pricing`, `context_length`.

    // Let's check for missing pricing as a proxy for "not enriched"
    const notEnriched = data.models.filter((m: any) => !m.pricing);

    console.log(`Total Models: ${data.totalModels}`);
    console.log(`Not enriched count: ${notEnriched.length}`);

    if (notEnriched.length > 0) {
        console.log("Models that were NOT enriched:");
        notEnriched.forEach((m: any) => console.log(`- [${m.vendor}] ${m.modelName}`));
    }

} catch (error) {
    console.error("Error checking enrichment:", error);
}
