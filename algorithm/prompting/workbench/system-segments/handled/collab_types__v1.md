# COLLAB_TYPES

Defines the types of collabs and when to use each.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Peer Review ✓ (step file only)
- Write ✓ (step file only)
- Reflect ✓ (step file only)
- Inspect ✓ (step file only)

---

## Note

**This segment ONLY exists in step files, NOT in the aggregated file.**

The aggregated file's SCHEMA is missing the collab `type` field entirely.

---

## Content (Peer Review step file)

```markdown
### COLLAB TYPES

| Type | When to Use | Example |
|------|-------------|---------|
| `feedback` | Observations about quality or gaps | "Error codes lack HTTP status mapping" |
| `question` | Need clarification to proceed | "How should token refresh handle offline?" |
| `suggestion` | Ideas for improvement | "Consider adding rate limiting here" |
| `endorsement` | Validate good approaches | "Solid error handling — aligns with our patterns" |
| `concern` | Worried about direction | "This auth flow may not scale to SSO" |
```

---

## Collab Guidelines (Peer Review)

```markdown
## COLLAB GUIDELINES

| Type | Purpose | Typical Importance |
|------|---------|-------------------|
| feedback | Point out gaps, issues | 5-9 |
| question | Need clarification | 4-8 |
| suggestion | Propose improvements | 3-7 |
| endorsement | Validate good work | 2-7 |
| concern | Flag risks | 6-10 |
```

---

## Discrepancy

| Aspect | Aggregated | Step Files |
|--------|------------|------------|
| type field | **MISSING** from schema | Present with 5 values |

**Step files are correct.** Aggregated SCHEMA needs type field added.

---

## Notes

- Type helps receivers understand intent
- Endorsements are positive feedback
- Concerns signal worry about direction, not just issues
