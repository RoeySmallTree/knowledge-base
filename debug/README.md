# Supabase Debug Helpers (Node)

Use these scripts to run ad-hoc Supabase queries locally without wiring them into the main codebase.

## Setup
- Requires Node 20+ (supabase-js engine requirement).
- Ensure your `.env` in the project root contains `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and/or `SUPABASE_SERVICE_ROLE_KEY`.
- From the repo root:
  ```bash
  cd debug
  npm install
  ```

## Add your own queries
Define new functions in `debug/queries.mjs`. Each exported function receives one argument (an object) and should return whatever you want printed. Example template:
```js
export async function myQuery({ table, limit = 5 } = {}) {
  const client = createSupabaseClient(); // or { useServiceRole: false } to use the anon key
  if (!table) throw new Error('Pass { table } to myQuery');

  const { data, error } = await client.from(table).select('*').limit(limit);
  if (error) throw error;
  return data;
}
```

## Run a query
From the repo root (after `npm install` in `debug`):
```bash
node debug/run.mjs <functionName> '<jsonPayload>'
```
Examples:
- Count rows in a table: `node debug/run.mjs countRows '{"table":"your_table"}'`
- Sample rows: `node debug/run.mjs sampleRows '{"table":"your_table","limit":3}'`
- Schema overview (public schema): `node debug/run.mjs schemaSummary`

`run.mjs` will list available functions if you pass `--help` or omit the function name.

## Notes
- By default, `createSupabaseClient` prefers `SUPABASE_SERVICE_ROLE_KEY` (falls back to `SUPABASE_ANON_KEY`). Pass `{ useServiceRole: false }` if you only want the anon key.
- Do not log or commit credentials. `.env` is already gitignored.
