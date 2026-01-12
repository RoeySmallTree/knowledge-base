# IMPORTANCE_SCALE

Defines the meaning of importance/severity scores (1-10).

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Reflect ✓ (step file as COLLAB IMPORTANCE SCALE)
- Peer Review ✓
- Inspect ✓ (as SEVERITY SCALE with different thresholds)

---

## Content (Aggregated - Peer Review)

Restricts to 6-10:

```markdown
### IMPORTANCE SCALE

| Score | Meaning |
|-------|---------|
| 10 | Critical blocker — work cannot proceed |
| 8-9 | Major issue — significantly impacts quality |
| 6-7 | Notable — worth addressing |

Don't flag issues below 6. No collabs is valid if quality is good.
```

---

## Content (Step Files - Full 1-10 range)

```markdown
### IMPORTANCE SCALE

All importance levels are valid. Don't filter out minor thoughts.

| Level | Meaning |
|-------|---------|
| 10 | Critical — blocks progress, must address |
| 7-9 | Significant — should strongly influence next version |
| 4-6 | Notable — worth considering |
| 1-3 | Minor — small thought, take it or leave it |
```

---

## Inspect Variation: SEVERITY SCALE

```markdown
### SEVERITY SCALE

| Level | Meaning | Impact |
|-------|---------|--------|
| 9-10 | Critical | Blocks acceptance, security/safety risk |
| 7-8 | High | Blocks acceptance, significant gap |
| 5-6 | Medium | Should address, doesn't block |
| 3-4 | Low | Nice to have |
| 1-2 | Trivial | Minor polish |
```

---

## Discrepancy

| Aspect | Aggregated | Step Files |
|--------|------------|------------|
| Range | 6-10 only | 1-10 full range |
| Low scores | "Don't flag below 6" | "Minor — small thought, take it or leave it" |

**Step files are more permissive** - allows minor observations.

---

## Notes

- Importance determines how strongly feedback influences next version
- Score 10 may block acceptance (severity) or require immediate attention (importance)
- Lower scores still valuable for discourse
