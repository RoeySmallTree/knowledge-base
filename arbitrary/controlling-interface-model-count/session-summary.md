# Session: controlling-interface-model-count

**Created:** 2026-01-12T11:11:19
**Status:** Active

## Overview
Add filtered model count to controlling interface.

## Tasks Completed
- Added filtered model count to the left sidebar and aligned the list with the filtered data.
- Added vendors data file and switched models to vendor IDs across data, UI, and API.
- Updated vendor-dependent scripts to resolve display names from the new vendors data.
- Added a combined dev script to run the API server and Vite frontend concurrently.
- Added display-order driven sorting with drag-and-drop reordering for vendors, families, and models.
- Added fallback model picker with nested vendor/family/model dropdown ordering.

## Key Decisions
- Sidebar now receives only filtered models to keep counts and navigation consistent.
- Vendor display names come from `vendors.json`, with sorting driven by vendor display order.
- Kept `dev` intact and added `dev:full` for combined server + frontend.
- Assigned model display order per vendor based on current data order to bootstrap drag reordering.

## Artifacts Created
- None.

## Notes
- None.
