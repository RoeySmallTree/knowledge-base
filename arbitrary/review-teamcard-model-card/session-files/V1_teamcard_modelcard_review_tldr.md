# TLDR — TeamCard.tsx & ModelCard.tsx Review

**TLDR:**
- Biggest risk: DnD reorder uses `members` order but the UI reorders leaders by rank, so persisted `display_order` can diverge from what the user dragged.
- Usage filters only affect the strip list; the detail panel still uses unfiltered teams, so filters can look “wrong.”
- Minor: keyboard Enter/Space on inner buttons can collapse the TeamCard, and the filter button assumes `model.id` always exists.

**ELI5:**
- When you drag team members, the app saves an order that doesn’t always match what you see, because it secretly re-sorts leaders.
- The “filtered” list of teams doesn’t actually filter the big detail view, so it can show a team you just filtered out.
- Some keyboard clicks can accidentally close the card, and one button assumes every model has an ID.
