import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface LLMModel {
    vendor: string;
    modelFamily: string;
    modelName: string;
    parametersB: string;
    contextK: string;
    personalityTraits: string;
    analyticalTraits: string;
    bestFor: string;
    optimalTeamExamples: string;
    creativeScore: number | null;
    deductiveScore: number | null;
    specialPropertiesNotes: string;
}

function parseMarkdownTable(markdown: string): LLMModel[] {
    const lines = markdown.split("\n");
    const models: LLMModel[] = [];

    // Find the table start (header row)
    let tableStartIndex = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("| Vendor |")) {
            tableStartIndex = i;
            break;
        }
    }

    if (tableStartIndex === -1) {
        throw new Error("Could not find table header");
    }

    // Skip header and separator rows
    for (let i = tableStartIndex + 2; i < lines.length; i++) {
        const line = lines[i].trim();

        // Stop at end of table (empty line or non-table content)
        if (!line.startsWith("|") || line === "---") {
            break;
        }

        // Parse table row
        const cells = line
            .split("|")
            .slice(1, -1) // Remove empty first and last elements
            .map((cell) => cell.trim().replace(/^\*\*|\*\*$/g, "")); // Remove bold markers

        if (cells.length >= 12) {
            const creativeScore = parseFloat(cells[9]);
            const deductiveScore = parseFloat(cells[10]);

            models.push({
                vendor: cells[0],
                modelFamily: cells[1],
                modelName: cells[2],
                parametersB: cells[3],
                contextK: cells[4],
                personalityTraits: cells[5],
                analyticalTraits: cells[6],
                bestFor: cells[7],
                optimalTeamExamples: cells[8],
                creativeScore: isNaN(creativeScore) ? null : creativeScore,
                deductiveScore: isNaN(deductiveScore) ? null : deductiveScore,
                specialPropertiesNotes: cells[11],
            });
        }
    }

    return models;
}

function main() {
    const inputPath = join(__dirname, "../models-table.md");
    const outputPath = join(__dirname, "../data/models.json");

    console.log(`Reading from: ${inputPath}`);
    const markdown = readFileSync(inputPath, "utf-8");

    const models = parseMarkdownTable(markdown);
    console.log(`Parsed ${models.length} models`);

    const output = {
        generatedAt: new Date().toISOString(),
        totalModels: models.length,
        models,
    };

    writeFileSync(outputPath, JSON.stringify(output, null, 2));
    console.log(`JSON written to: ${outputPath}`);
}

main();
