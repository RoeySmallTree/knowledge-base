# CONTEXT_ATTACHMENTS

How to attach related products to assignments.

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
### CONTEXT ATTACHMENTS

When assigning work, attach relevant products:
```json
"attach_context": [
  { "product_id": "p4", "include": ["content"], "reason": "Auth patterns to align with" }
]
```
```

---

## Include Options

| Include | What Gets Attached |
|---------|-------------------|
| `content` | Current version content |
| `feedback` | Open collabs on product |
| `history` | Version history |

---

## Constraints

- Maximum 3 attachments per assignment
- Each attachment should have clear `reason`
- Only attach what the operative actually needs

---

## Example

```json
"attach_context": [
  { "product_id": "p4", "include": ["content", "feedback"], "reason": "API patterns and pending issues" },
  { "product_id": "p2", "include": ["content"], "reason": "Error handling standards" }
]
```

---

## Notes

- Attachments help operative understand context without requesting it
- Reduces back-and-forth context requests
- Chair should anticipate what operative needs
