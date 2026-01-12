# User Prompt Comparisons

Comparing **simplified** prompts in step folders vs **comprehensive** versions in `examples/user-complete-prompts.md`.

---

## Global Findings

Issues appearing across **multiple steps**:

| Issue | Description |
|-------|-------------|
| **Missing Objectives** | Most simplified prompts show mission only, not objectives |
| **Remarks From Team** | Missing in Write, Peer Review, Inspect, Presentation |
| **Team format** | Simplified uses compact lists; comprehensive uses tables |
| **Product Tree format** | Simplified uses JSON; comprehensive uses rendered tree |
| **Collab ID formatting** | Simplified uses `{{id}}`; comprehensive uses full `*Collab ID:*` |

---

## Per-Step Summary

| Step | Key Missing | Key Added |
|------|-------------|-----------|
| Bootstrap | Output Requirements, personality_style | Users section, User Response handling |
| Reflect | Peer Products, collabs before versions, BLOCKER flag | Requested Context, isSelf marker |
| Plan & Assign | What Changed, ready indicators, Resolved collabs | Session Parameters, Previous Collabs per product |
| Write | Objectives, What Changed, Remarks | Structured Directive, Attached Context, Self Notes |
| Peer Review | Objectives, Change Summary, Remarks | Version History, Existing Collabs, Previous Feedback |
| Inspect | Objectives, Related Products, Remarks | DoD Checklist, Previous Findings |
| Presentation | Decisions Made, Assignments Made, Team Remarks | Chair Actions, Watchdog Findings, Products Blocked |

---

## Consistent Gaps

These are missing in most/all simplified prompts:

1. **Objectives** — Only mission shown (except Bootstrap/Reflect)
2. **Remarks From Team** section
3. **Full collab ID formatting** — `*Collab ID: {{collab.id}}*`
4. **BLOCKER flags** on remarks
5. **Resolved status indicators** — `[✓ Resolved]` / `[◯ Open]`

---

## Consistent Additions (Simplified)

These are added in most/all simplified prompts:

1. **Requested Context** section for context iterations
2. **isSelf marker** in team references
3. **Compact format** — lists vs tables
4. **JSON product tree** — structured data

---

## Files

- [bootstrap.md](./bootstrap.md)
- [reflect.md](./reflect.md)
- [plan_assign.md](./plan_assign.md)
- [write.md](./write.md)
- [peer_review.md](./peer_review.md)
- [inspect.md](./inspect.md)
- [presentation.md](./presentation.md)

---

## Recommendation

To align simplified prompts with comprehensive:

1. **Add Objectives** to all steps that have mission
2. **Add Remarks From Team** section to Write, Peer Review, Inspect, Presentation
3. **Add BLOCKER flag** to remarks
4. **Add resolved/open indicators** for collabs
5. **Consider rendered tree** vs JSON for product tree
