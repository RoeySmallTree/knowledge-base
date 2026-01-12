# SELF_NOTES

Notes the agent left for themselves earlier in the round.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Write ✓ (step file only)

---

## Content (Step File)

```markdown
## SELF-NOTES FROM EARLIER

| Round | Note |
|-------|------|
${self_notes_table}
```

---

## Example

```markdown
## SELF-NOTES FROM EARLIER

| Round | Note |
|-------|------|
| 7 | Check p5's latest version before finalizing error codes |
| 6 | Consider rate limiting after seeing Marco's feedback |
```

---

## Discrepancy

Not present in aggregated `user-prompts__v1.md`. **Step file only.**

---

## Notes

- Created via `remarks` with `recipients: ["self"]`
- Notes from Reflect step appear in Write step
- Helps agent remember context from earlier steps
- Round shows when note was created
