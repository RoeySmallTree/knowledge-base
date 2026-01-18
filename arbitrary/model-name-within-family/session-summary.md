# Session: model-name-within-family

**Created:** 2026-01-13T12:26:45+02:00
**Status:** Active

## Overview
Add name_within_family to models.json entries.

## Tasks Completed
- Updated controlling interface Models tab to display `name_within_family` and include it in search matching.

## Key Decisions
- Derived `name_within_family` by removing the overlapping family string and keeping remaining differentiators (including vendor or punctuation when present).
- Kept `modelName` as the canonical identifier for edits/keys while using `name_within_family` for UI display.

## Artifacts Created
- 

## Notes
