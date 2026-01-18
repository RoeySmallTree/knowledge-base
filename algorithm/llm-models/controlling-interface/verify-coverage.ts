import * as fs from 'fs';
import * as path from 'path';

interface Model {
    modelName: string;
    vendor_id: number | string;
    [key: string]: any;
}

interface Row {
    id: number | string;
    display_name: string;
    vendor_id: number | string;
    slug: string;
    api_id: string;
}

function normalize(str: string): string {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function cleanName(name: string): string {
    return name.trim().replace(/\s+/g, ' ');
}

try {
    const modelsData = JSON.parse(fs.readFileSync(MODELS_JSON_PATH, 'utf-8'));
    const rowsData = JSON.parse(fs.readFileSync(ROWS_JSON_PATH, 'utf-8'));

    console.log(`Checking ${rowsData.length} database rows against ${modelsData.models.length} existing models...`);

    const missingInJson: Row[] = [];
    const presentInJson: Row[] = [];

    rowsData.forEach((row: Row) => {
        const rowName = row.display_name;
        const normRowName = normalize(rowName);

        // 1. Exact Match
        let match = modelsData.models.find((m: Model) => cleanName(m.modelName) === cleanName(rowName));

        // 2. Normalized Match
        if (!match) {
            match = modelsData.models.find((m: Model) => normalize(m.modelName) === normRowName);
        }

        // 3. Reverse containment (Row name inside Model name or vice versa)
        if (!match) {
            match = modelsData.models.find((m: Model) => {
                const normModelName = normalize(m.modelName);
                if (normModelName.includes(normRowName) || normRowName.includes(normModelName)) {
                    // Additional heuristic: ensure length isn't vastly different
                    return Math.abs(normModelName.length - normRowName.length) < 8;
                }
                return false;
            });
        }

        if (match) {
            presentInJson.push(row);
        } else {
            missingInJson.push(row);
        }
    });

    console.log(`\nCoverage Results:`);
    console.log(`- Present: ${presentInJson.length}`);
    console.log(`- Missing: ${missingInJson.length}`);

} catch (error) {
    console.error("Error:", error);
}
