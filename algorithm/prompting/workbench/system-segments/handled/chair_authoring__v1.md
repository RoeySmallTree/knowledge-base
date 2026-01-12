# CHAIR_AUTHORING

Defines which products the chair can directly author.

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
### CHAIR AUTHORING

You may directly author:
- Orchestration products (planning, coordination)
- Unassigned Decision products
- Meta-products (Change Log, Resources, Ruleset, Narrative)

Use `chair_versions` for these. Max 5 per round.
```

---

## chair_versions Format

```json
"chair_versions": [
  {
    "product_id": "p2",
    "content": "# Change Log\n\n## Round 3\n- Added Error Handling Strategy product\n- Assigned auth finalization to Jordan\n- Accepted Technical Overview (p5)\n- Pending: MVP Features needs collab resolution",
    "change_summary": "Round 3 updates"
  }
]
```

---

## What Chair CAN Author

| Product Type | Can Author | Rationale |
|--------------|------------|-----------|
| Orchestration | ✓ Yes | Planning is chair's job |
| Decision (unassigned) | ✓ Yes | Chair can make decisions |
| Meta-products | ✓ Yes | Change Log, Resources, etc. |
| Content (assigned) | ✗ No | Let operatives do their work |

---

## Constraints

- Maximum 5 chair_versions per round
- Must include `change_summary`
- Don't override operative work

---

## Notes

- Chair should focus on coordination, not writing all content
- chair_versions is for products the chair owns or that aren't assigned
- Update meta-products every round
