# TLDR

TLDR:
- Biggest risks: vendor_id null -> '' -> 0 writeback, member.characteristics jsonb treated as array, and team delete missing FK dependents.
- DB alignment gaps: required llm_models fields (api_id/slug/display_name), bigint/numeric types treated as JS numbers, last_synced_at omitted.
- Refactor plan: split server into config, db repos, mappers, services, routes, and types; keep server.ts as bootstrap only.
- Lean routes: consolidate to GET/POST/PATCH/DELETE per resource, use `active` query instead of `/api/archive`, keep legacy endpoints during migration.

ELI5:
- The server file is doing too many jobs at once, and a few spots can accidentally write wrong data.
- We should split it into smaller files (config, database, routes) and make types match the database exactly.
- Clean, consistent endpoints will be easier to maintain and safer to change.

