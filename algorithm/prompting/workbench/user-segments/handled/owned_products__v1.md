# OWNED_PRODUCTS

Full product detail section for products the operative owns (Reflect step).

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Reflect ✓

---

## Content (Aggregated / common-user-parts)

See PRODUCT_DETAIL_FULL in common-user-parts__v1.md with marker `YOUR`.

```markdown
## YOUR PRODUCT: {{temp_id}} — {{name}}

**Type:** {{type}} | **Status:** {{status}} | **Version:** {{version}}
**DoD:** {{dod}}

### VERSION HISTORY

| V | Author | Change |
|---|--------|--------|
{{#each version_history}}
| {{version}} | {{author}} | {{change_summary}} |
{{/each}}

### CURRENT CONTENT (V{{version}})

{{content}}

### FEEDBACK TO ADDRESS

| ID | From | Type | Imp | Summary |
|----|------|------|-----|---------|
{{#each feedback}}
| {{temp_id}} | {{author}} | {{type}} | {{importance}} | {{summary}} |
{{/each}}

{{#each feedback}}
**{{temp_id}}** — {{author}} ({{type}}, importance {{importance}})
> {{comment}}

{{/each}}

### CHAIR DIRECTIVE (Round {{directive_round}})

> {{directive}}
```

---

## Content (Step File)

See Reflect__User__v1.md lines 21-48.

Uses variables: `${product_id}`, `${product_name}`, `${product_type}`, etc.

---

## Example

See Reflect step file for complete example with MVP Features Selection product.

---

## Components

| Component | Description |
|-----------|-------------|
| Header | Type, Status, Version, DoD |
| VERSION_HISTORY | Table of all versions |
| CURRENT_CONTENT | Full markdown content |
| FEEDBACK_TO_ADDRESS | Open collabs table + details |
| CHAIR_DIRECTIVE | Chair's instruction quote |

---

## Notes

- One section per owned product
- Multiple owned products = multiple sections
- All open feedback shown for response
- Directive may be empty if no new instructions
