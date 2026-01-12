# VERSION_HISTORY

Table showing version progression for a product.

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

---

## Content

```markdown
### VERSION HISTORY

| V | Author | Change |
|---|--------|--------|
${version_history_table}
```

---

## Example

```markdown
### VERSION HISTORY

| V | Author | Change |
|---|--------|--------|
| 1 | Jordan | Initial auth flow outline |
| 2 | Jordan | Added JWT details and token storage |
| 3 | Jordan | Switched to httpOnly cookies, added token rotation |
```

---

## Notes

- Shows all versions from V1 to current
- Author is the agent who created that version
- Change is the change_summary from version record
- Helps agent understand product evolution
