# BOOTSTRAP_OVERRIDES

How to modify session parameters mid-session.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Plan & Assign ✓

---

## Content

```markdown
### BOOTSTRAP OVERRIDES

If planning reveals needed changes to session parameters:

```json
{
  "bootstrap_overrides": {
    "mission": "Refined mission statement",
    "objectives": "1) Updated objective...",
    "constraints": "New or relaxed constraints",
    "personas": {
      "operative-1": "Updated persona if needed"
    },
    "operative_domains": {
      "operative-1": { "responsibility": "Now owns frontend + API layer", "area": "Full-Stack" }
    }
  }
}
```

**When to use:**
- User feedback changes scope
- Planning reveals misaligned responsibilities
- Constraints need adjustment
- Objectives need reprioritization

**Rules:**
- Only include fields that changed
- Omit `bootstrap_overrides` entirely if no changes needed
- Changes visible to all agents next round
```

---

## Discrepancy

| Aspect | Aggregated | Step Files |
|--------|------------|------------|
| Key structure | Uses `operatives` as key | Uses separate `personas` + `operative_domains` |

Step file is **more granular** - allows updating persona, responsibility, or area independently.

---

## What Can Be Overridden

| Field | Can Override |
|-------|--------------|
| mission | ✓ |
| objectives | ✓ |
| constraints | ✓ |
| personas | ✓ |
| operative_domains | ✓ |

---

## Notes

- Use sparingly - frequent changes disrupt team
- Only include changed fields (partial update)
- Changes apply to next round
