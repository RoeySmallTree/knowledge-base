# REVIEW_PRODUCT

Full product detail for Peer Review, similar to ASSIGNED_PRODUCT.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Peer Review ✓

---

## Content (Step File)

```markdown
## REVIEW PRODUCT: ${product_id} — ${product_name}

**Type:** ${product_type} | **Status:** ${product_status} | **Version:** ${version_number}
**Owner:** ${owner_name} (${owner_id})
**DoD:** ${definition_of_done}

### CURRENT CONTENT (V${version_number})

${current_content}

### VERSION HISTORY

| V | Author | Change |
|---|--------|--------|
${version_history_table}

### EXISTING COLLABS ON THIS PRODUCT

| ID | From | Type | Imp | Summary |
|----|------|------|-----|---------|
${existing_collabs_table}
```

---

## Example

See Peer_Review__User__v1.md lines 136-209 for complete Auth Specification example.

---

## Differences from ASSIGNED_PRODUCT

| Aspect | ASSIGNED_PRODUCT (Write) | REVIEW_PRODUCT (PR) |
|--------|--------------------------|---------------------|
| Purpose | Create version | Review and comment |
| Directive | Full directive | None |
| Feedback | To address | Existing collabs |
| Context | Attached | None |

---

## Notes

- Shows full content for review
- Includes existing collabs so reviewer doesn't duplicate
- Owner shown (not your product)
- Multiple products = multiple sections
