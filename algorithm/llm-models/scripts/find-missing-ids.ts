import * as fs from 'fs';
import * as path from 'path';

const MODELS_JSON_PATH = path.join(process.cwd(), '../data/models.json');

interface Model {
    modelName: string;
    vendor: string;
    id?: string;
}

try {
    const data = JSON.parse(fs.readFileSync(MODELS_JSON_PATH, 'utf-8'));
    const missing = data.models.filter((m: Model) => !m.id);

    console.log(`Examples of existing IDs: ${data.models[0].id}, ${data.models[10].id}`);
    console.log(`Total Models: ${data.totalModels}`);
    console.log(`Missing IDs: ${missing.length}`);
    missing.forEach((m: Model) => {
        console.log(`- [${m.vendor}] ${m.modelName}`);
    });
} catch (e) {
    console.error(e);
}
