# REMARKS_FOR_YOU

Team notes and suggestions directed at the agent.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Reflect ✓ (step file only)

---

## Content (Step File)

```markdown
## REMARKS FOR YOU

| From | Type | Round | Note |
|------|------|-------|------|
${remarks_table}
```

---

## Example

```markdown
## REMARKS FOR YOU

| From | Type | Round | Note |
|------|------|-------|------|
| chair-1 | suggestion | 6 | Coordinate with Jordan on error format standardization |
| operative-2 | observation | 5 | Consider using the same error code prefix |
```

---

## Discrepancy

Not present in aggregated `user-prompts__v1.md`. **Step file only.**

---

## Notes

- Shows remarks targeted at this agent
- Different from collabs (which target products)
- May include chair suggestions, peer observations
- Self-notes from previous rounds may appear here
