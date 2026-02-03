# Session: review-teamcard-model-card

**Created:** 2026-02-03T16:33:47+02:00
**Status:** Active

## Overview
Review TeamCard.tsx and model card.

## Tasks Completed
- Reviewed TeamCard.tsx and ModelCard.tsx for issues.
- Implemented fixes for DnD ordering, usage filtering, and keyboard guard.
- Fixed TeamsView onFilterByModel prop wiring to prevent ReferenceError.
- Fixed TeamCard StripMemberCard prop binding for onFilterByModel.
- Added missing React useState import in FilterPanel.
- Added modelId filter in models tab to support “View in Models” navigation.

## Key Decisions
- Restricted DnD reordering to operatives to preserve leader rank grouping.
- Usage detail panel now follows filtered teams list.

## Artifacts Created
- `session-files/V1_teamcard_modelcard_review.md`
- `session-files/V1_teamcard_modelcard_review_tldr.md`

## Notes
