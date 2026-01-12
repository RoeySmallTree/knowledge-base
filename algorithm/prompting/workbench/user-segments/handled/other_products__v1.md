# OTHER_PRODUCTS

Brief reference table for products not assigned/owned.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Write ✓
- Peer Review ✓ (as RELATED_PRODUCTS)

---

## Content (Aggregated / common-user-parts)

```markdown
## OTHER PRODUCTS (for reference)

| ID | Name | Owner | Status |
|----|------|-------|--------|
{{#each other_products}}
| {{temp_id}} | {{name}} | {{owner}} | {{status}} |
{{/each}}
```

---

## Content (Step File)

```markdown
## OTHER PRODUCTS (for reference)

| ID | Name | Owner | Status | Latest Change |
|----|------|-------|--------|---------------|
${other_products_table}
```

Step file adds Latest Change column.

---

## Example

```markdown
## OTHER PRODUCTS (for reference)

| ID | Name | Owner | Status | Latest Change |
|----|------|-------|--------|---------------|
| p3 | MVP Features Selection | operative-2 | Pending | Added JWT details |
| p5 | Auth Specification | operative-2 | Pending | Added token refresh |
```

---

## Notes

- Quick reference for cross-references
- Agent can use `[[p:id]]` syntax to reference
- Can request full content via `request_context`
