# Session: left-guide-scroll-sync

**Created:** 2026-01-13T09:15:39Z
**Status:** Active

## Overview
Sync left guide scroll with content scroll, auto-expand and highlight active vendor/category/team entries.

## Tasks Completed
- Synced left guide scroll with content scroll and auto-highlighted active entries.
- Added sidebar item IDs and improved scroll-spy selection.
- Ran `npm run check` (TypeScript noEmit).

## Key Decisions
- Use IntersectionObserver with highest intersection ratio and scroll the left nav to active items.

## Artifacts Created
- 

## Notes
- Files touched: `algorithm/llm-models/controlling-interface/src/App.tsx`, `algorithm/llm-models/controlling-interface/src/components/ModelSidebar.tsx`, `algorithm/llm-models/controlling-interface/src/components/TeamsSidebar.tsx`.
