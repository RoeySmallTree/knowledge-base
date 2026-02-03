# TeamCard.tsx & ModelCard.tsx Review

## Findings (ordered by severity)

1) High — DnD order can persist the wrong sequence because render order differs from `members` order.
- Location: `algorithm/llm-models/controlling-interface/src/components/TeamCard.tsx:324-410` and `algorithm/llm-models/controlling-interface/src/utils/teamUtils.ts:5-16`.
- Detail: `SortableContext` uses `members.map(m => m.id)` and `handleDragEnd` uses indices from `members`, but the UI reorders leaders via `splitMembersByRole` (ranked Chair/Envoy/Watchdog) and inserts a divider before operatives. This means the visible order can diverge from the array order used by DnD. Dragging can therefore persist a display_order that does not match what the user dragged, and cross‑group drags will “snap back” because grouping overrides the new order.
- Suggested fix: Align the rendered order with the `items` order (e.g., remove leader-rank sorting when DnD is enabled), or split into two SortableContexts (leaders vs operatives) and only update within each group. Another option: compute a `renderedMembers` list that matches actual DOM order and use that list for `items` and `arrayMove`.

2) Medium — Usage filters don’t constrain the detail panel; selected team can be outside the filtered list.
- Location: `algorithm/llm-models/controlling-interface/src/components/ModelCard.tsx:106-147` and `algorithm/llm-models/controlling-interface/src/components/ModelCard.tsx:320-409`.
- Detail: `filteredUsageTeams` respects filter toggles, but `selectedTeam` is derived from the unfiltered `usage.teams`. After filtering, the strip list and count reflect filters, while the detail panel can still show a team that is filtered out. `activeUsageTab` also never resets when filters change.
- Suggested fix: derive `selectedTeam` from `filteredUsageTeams` (not `usage.teams`) and add a small effect that clamps `activeUsageTab` to the filtered list (first team or null) whenever filters or `usage` change.

3) Low — Keyboard activation on inner controls can collapse the card.
- Location: `algorithm/llm-models/controlling-interface/src/components/TeamCard.tsx:105-112`.
- Detail: `onKeyDown` on the card container doesn’t check for `data-team-action`, so Enter/Space on nested buttons can bubble and toggle the card.
- Suggested fix: mirror the click guard (`if (target.closest('[data-team-action]')) return;`) for keydown events, or stop propagation on inner controls.

4) Low — Non‑null assertion on `model.id` for filtering can throw if a model lacks an ID.
- Location: `algorithm/llm-models/controlling-interface/src/components/ModelCard.tsx:330`.
- Detail: `onFilterTeamsByModel(model.id!)` assumes an ID, but `LLMModel.id` is optional. If the card can render a draft/unsaved model, clicking the filter will pass `undefined`.
- Suggested fix: guard with `if (!model.id) return;` or disable/hide the button until an ID exists.

## Open Questions / Assumptions
- Is leader ordering intentionally fixed by rank? If so, drag‑reorder should probably be restricted to each group or disabled for leaders to avoid confusing “snap back” behavior.
- Can `ModelCard` ever render a model without `id`? If not, issue #4 can be ignored.

## Change Summary
- Review only; no code changes made.

## Suggested Tests (if you want to add coverage)
- DnD reorder preserves the visible order when leaders/operatives are grouped.
- Usage filters constrain both the strip list and the detail panel, with `activeUsageTab` updated appropriately.
