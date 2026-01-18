# Session: display-order-fix

**Created:** 2026-01-13T18:00:21Z
**Status:** Active

## Overview
Fix display-order update payloads to send only id + display_order across models, vendors, families, teams, and members.

## Tasks Completed
- Added lean members order endpoint and wired reorders to order-only payloads.
- Updated model/vendor/family/team/member reorder handlers to post `{id, display_order}` only.

## Key Decisions
- 

## Artifacts Created
- 

## Notes
- 
