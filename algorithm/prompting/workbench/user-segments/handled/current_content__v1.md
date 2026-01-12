# CURRENT_CONTENT

Full markdown content of a product's current version.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Reflect ✓ (in OWNED_PRODUCTS)
- Write ✓ (in ASSIGNED_PRODUCT)
- Peer Review ✓ (in REVIEW_PRODUCT)
- Inspect ✓ (in PRODUCTS_TO_INSPECT)

---

## Content

```markdown
### CURRENT CONTENT (V${version_number})

${current_content}
```

---

## Example

```markdown
### CURRENT CONTENT (V3)

# Authentication Specification

## Flow
1. User submits credentials
2. Backend validates, returns JWT
3. Frontend stores in httpOnly cookie
4. JWT included in subsequent requests

## Token Details
- JWT expiry: 1 hour
- Refresh token: 7 days
- Contains: user_id, email, exp

## Error Codes
| Code | Meaning |
|------|---------|
| AUTH_001 | Invalid credentials |
| AUTH_002 | Token expired |
| AUTH_003 | Invalid refresh token |
```

---

## Notes

- Full markdown content, not truncated
- May include `[[p:id]]` references to other products
- Version number in header matches current version
- This is what the agent will build upon or review
