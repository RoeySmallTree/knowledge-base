const fs = require("fs/promises");
const path = require("path");

const inputPath = process.argv[2]
  ? path.resolve(process.cwd(), process.argv[2])
  : path.resolve(__dirname, "..", "teams-raw.json");
const outputPath = process.argv[3]
  ? path.resolve(process.cwd(), process.argv[3])
  : path.resolve(__dirname, "..", "teams-insert.sql");

const USER_ID = "a971e6e4-7f01-4fc2-9641-d59c9862626b";

function normalizeCategory(folderName) {
  if (!folderName) {
    return null;
  }
  const key = folderName.toLowerCase();
  if (key === "ops") {
    return "OPS";
  }
  if (key === "vitals") {
    return "VITALS";
  }
  if (key === "arcade") {
    return "ARCADE";
  }
  if (key === "corex" || key === "cortex") {
    return "CORTEX";
  }
  return null;
}

function stripWrappingDelimiters(text) {
  let value = text.trim();
  let updated = true;

  while (updated) {
    updated = false;
    if (value.startsWith("(") && value.endsWith(")")) {
      value = value.slice(1, -1).trim();
      updated = true;
    }
    if (
      (value.startsWith("\"") && value.endsWith("\"")) ||
      (value.startsWith("'") && value.endsWith("'")) ||
      (value.startsWith("`") && value.endsWith("`"))
    ) {
      value = value.slice(1, -1).trim();
      updated = true;
    }
  }

  return value;
}

function normalizeQuickStart(text) {
  if (typeof text !== "string") {
    return null;
  }
  let value = text.trim();
  value = value.replace(/^\d+\.\s*/, "");
  value = value.replace(/^[-*]\s+/, "");
  value = stripWrappingDelimiters(value);
  return value.trim();
}

function escapeSqlString(value) {
  return value.replace(/'/g, "''");
}

function toSqlValue(value) {
  if (value === null || value === undefined || value === "") {
    return "NULL";
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  if (typeof value === "number") {
    return Number.isFinite(value) ? String(value) : "NULL";
  }
  return `'${escapeSqlString(String(value))}'`;
}

function toSqlArray(values) {
  if (!Array.isArray(values) || values.length === 0) {
    return "NULL";
  }
  const cleaned = values
    .map((item) => normalizeQuickStart(item))
    .filter((item) => item && item.length > 0);
  if (cleaned.length === 0) {
    return "NULL";
  }
  const entries = cleaned.map((item) => `'${escapeSqlString(item)}'`).join(", ");
  return `ARRAY[${entries}]`;
}

function normalizeName(record) {
  if (record.teamName && record.teamName.trim()) {
    return record.teamName.trim();
  }
  if (record.fileName) {
    return record.fileName.replace(/\.md$/i, "");
  }
  return "Untitled Team";
}

function buildInsert(records) {
  const rows = records
    .map((record) => {
      const name = normalizeName(record);
      const description =
        record.description && record.description.trim()
          ? record.description.trim()
          : null;
      const catchPhrase =
        record.catchPhrase && record.catchPhrase.trim()
          ? record.catchPhrase.trim()
          : null;
      const category = normalizeCategory(record.folderName);
      const defaultStartingRounds =
        typeof record.defaultStartingRounds === "number" &&
        record.defaultStartingRounds > 0
          ? record.defaultStartingRounds
          : null;

      return `  (${[
        toSqlValue(USER_ID),
        toSqlValue(name),
        toSqlValue(description),
        "true",
        toSqlValue(catchPhrase),
        toSqlValue(category),
        toSqlArray(record.quickStarts),
        toSqlValue(defaultStartingRounds),
        "true",
      ].join(", ")})`;
    })
    .join(",\n");

  return `insert into public.team (\n  user_id,\n  name,\n  description,\n  is_public,\n  catch_phrase,\n  category,\n  quick_starts,\n  default_starting_rounds,\n  is_saved\n)\nvalues\n${rows};\n`;
}

async function main() {
  const raw = await fs.readFile(inputPath, "utf8");
  const records = JSON.parse(raw);
  const sorted = records.slice().sort((a, b) => {
    const aKey = `${a.folderName || ""}/${a.fileName || ""}`;
    const bKey = `${b.folderName || ""}/${b.fileName || ""}`;
    return aKey.localeCompare(bKey);
  });
  const output = buildInsert(sorted);
  await fs.writeFile(outputPath, output, "utf8");
  console.log(`Wrote ${records.length} rows to ${outputPath}`);
}

main().catch((error) => {
  console.error("Failed to export teams insert:", error);
  process.exit(1);
});
