import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parse/sync';

const CSV_PATH = path.join(process.cwd(), '../llm_models_rows.csv');
const JSON_OUTPUT_PATH = path.join(process.cwd(), '../data/llm_models_rows.json');

try {
    console.log(`Reading CSV from ${CSV_PATH}...`);
    const csvContent = fs.readFileSync(CSV_PATH, 'utf-8');

    console.log('Parsing CSV...');
    const records = csv.parse(csvContent, {
        columns: true,
        skip_empty_lines: true,
        cast: true // Auto-convert numbers and booleans
    });

    console.log(`Converted ${records.length} rows.`);

    console.log(`Writing JSON to ${JSON_OUTPUT_PATH}...`);
    fs.writeFileSync(JSON_OUTPUT_PATH, JSON.stringify(records, null, 2));

    console.log('Done!');
} catch (error) {
    console.error('Error converting CSV to JSON:', error);
}
