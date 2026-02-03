# Changelog: Update Member Model IDs SQL

## V1 (2026-02-02T00:00:00Z)
- **Request:** Create SQL to update members from members-ids.json to correct model IDs.
- **Changes:** Generated update query using complete.json mappings for members present in members-ids.json.
- **Rationale:** Align DB member.model_id with curated assignments.

## V2 (2026-02-02T00:00:00Z)
- **Request:** Generate SQL to update all members after manual fine-tuning.
- **Changes:** Produced full update query for all members in complete.json.
- **Rationale:** Align DB member.model_id to finalized model assignments.

## V3 (2026-02-02T00:00:00Z)
- **Request:** Generate SQL after full member backfill.
- **Changes:** Produced full update query for all 361 members.
- **Rationale:** Align DB member.model_id to final assignments.
