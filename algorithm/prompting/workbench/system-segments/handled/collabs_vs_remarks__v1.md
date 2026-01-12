# COLLABS_VS_REMARKS

Explains the distinction between product-targeted collabs and recipient-targeted remarks.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Reflect ✓
- Peer Review ✓ (implicitly via schema)

---

## Content (Aggregated)

```markdown
### COLLABS vs REMARKS

**Collab** (product feedback):
- Reply to feedback on your products
- Flag issues in peer products
- Request input on specific product question
→ Targets a product_id

**Remark** (team communication):
- Questions for chair
- Process suggestions
→ Targets recipients (chair-1, team)
```

---

## Content (Step File - Reflect)

Slightly different wording:

```markdown
### COLLABS vs REMARKS

**Collab** (discourse on products):
- Share perspective on peer products
- Respond to feedback on your products
- Ask questions, suggest approaches, endorse good work
→ Targets a product_id

**Remark** (team communication):
- Questions for chair
- Process suggestions
→ Targets recipients (chair-1, team)
```

---

## Discrepancy

| Aspect | Aggregated | Step File |
|--------|------------|-----------|
| Collab header | "product feedback" | "discourse on products" |
| Collab actions | Reply, flag, request | Share, respond, ask, suggest, endorse |

Step file is more descriptive about collab types.

---

## Notes

- Collabs attach to a specific product
- Remarks go to specific recipients or "team"
- Self-notes use `recipients: ["self"]` with `type: "note"`
