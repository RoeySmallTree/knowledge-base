# EXISTING_COLLABS

Prior collabs on a product being reviewed.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Peer Review ✓ (step file only)

---

## Content (Step File)

```markdown
### EXISTING COLLABS ON THIS PRODUCT

| ID | From | Type | Imp | Summary |
|----|------|------|-----|---------|
${existing_collabs_table}
```

---

## Example

```markdown
### EXISTING COLLABS ON THIS PRODUCT

| ID | From | Type | Imp | Summary |
|----|------|------|-----|---------|
| c3 | watchdog-1 | feedback | 8 | localStorage XSS-vulnerable (addressed in V3) |
| c4 | operative-1 | question | 8 | Missing token refresh mechanism (addressed in V3) |
```

---

## Discrepancy

Not present in aggregated `user-prompts__v1.md`. **Step file only.**

---

## Notes

- Shows what others have already said
- Prevents duplicate feedback
- May show "(addressed in VX)" for resolved collabs
- Helps reviewer focus on new observations
