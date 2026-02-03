# Session: teams-raw-export

**Created:** 2026-01-19T08:53:43Z
**Status:** Active

## Overview
Create a script to export team files to teams-raw.json.

## Tasks Completed
- Added a script to export team files from `teams-and-missions/teams/v2`.
- Generated `teams-raw.json` in the workbench folder.
- Added structured Markdown parsing to include nested heading objects.
- Added extracted `teamName` field and renamed `as object` to `asObject`.
- Added catch phrase and description extraction from the Identity section.
- Added `defaultStartingRounds` numeric extraction from Session Configuration.
- Added `quickStarts` array extraction from the Session Configuration list.
- Added team member parsing with functionality requirements and model parameter details.
- Removed raw content from JSON output and corrected default rounds pathing.
- Fixed bold label parsing for persona traits and functionality fields.
- Added markdown batch formatter for teams JSON output.
- Added per-member team function extraction and improved batch formatting output.
- Added SQL insert generator for teams table records.
- Added member life story extraction and rendering in batch output.
- Added SQL insert generator for team members with mappings and special orders.
- Added team ID rendering in batch markdown output.

## Key Decisions
- Implemented a Node.js script with deterministic ordering.
- Parsed Markdown headings into a 4-level nested structure.
- Extracted team names from the Part 1 → Identity → Name blockquote.
- Used parsed heading trees to navigate Identity fields.
- Parsed recommended rounds into a numeric field.
- Parsed quick-start lines into a string array without numbering or quotes.
- Included per-member functionality requirements with model parameter tables.
- Resolved Session Configuration lookups under Part 1.
- Matched labels with colon inside bold text for trait extraction.
- Emitted `teams-batch.md` from `teams-raw.json` with configurable fields.
- Adjusted markdown formatting to skip empty rows and highlight persona traits and tags.
- Generated `teams-insert.sql` from `teams-raw.json` with mapped fields.
- Included Life Story from Persona sections in exported member fields.
- Generated `teams-members-insert.sql` with member roles, characteristics, and special orders.
- Injected mapped team IDs into `teams-batch.md`.

## Artifacts Created
- `teams-and-missions/workbench/scripts/export-teams-raw.js`
- `teams-and-missions/workbench/teams-raw.json`

## Notes
- 
