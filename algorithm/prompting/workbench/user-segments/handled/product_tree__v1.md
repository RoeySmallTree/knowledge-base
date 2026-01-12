# PRODUCT_TREE

JSON array of all products in the session.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Reflect ✓
- Plan & Assign ✓
- Write ✓
- Peer Review ✓
- Inspect ✓ (in PRODUCTS_TO_INSPECT section)

---

## Content (Aggregated / common-user-parts)

```markdown
## PRODUCT TREE

```json
{
  "products": [
    {{#each products}}
    {
      "id": "{{temp_id}}",
      "name": "{{name}}",
      "type": "{{type}}",
      "parent_id": {{#if parent_id}}"{{parent_id}}"{{else}}null{{/if}},
      "owner": {{#if owner}}"{{owner}}"{{else}}null{{/if}},
      "status": "{{status}}",
      "yours": {{yours}}
      {{#if version}},"version": {{version}}{{/if}}
      {{#if blocking_collabs}},"blocking_collabs": {{blocking_collabs}}{{/if}}
    }{{#unless @last}},{{/unless}}
    {{/each}}
  ]
}
```

{{#if owned_product_ids}}
Your products: {{owned_product_ids}}
{{/if}}
```

---

## Content (Step Files)

```markdown
## PRODUCT TREE

${product_tree_json}

Your products: ${owned_product_ids}
```

or

```markdown
Your products: ${assigned_product_ids}
```

---

## Example

```json
{
  "products": [
    { "id": "p1", "name": "TODO List MVP", "type": "Orchestration", "parent_id": null, "owner": null, "status": "Pending", "yours": false },
    { "id": "p2", "name": "Change Log", "type": "Content", "parent_id": "p1", "owner": "chair-1", "status": "Pending", "yours": false, "version": 6 },
    { "id": "p3", "name": "MVP Features", "type": "Decision", "parent_id": "p1", "owner": "operative-2", "status": "Pending", "yours": true, "version": 4, "blocking_collabs": 2 }
  ]
}
```

---

## Fields

| Field | Description | Required |
|-------|-------------|----------|
| id | Temp ID (p1, p2...) | ✓ |
| name | Product name | ✓ |
| type | Content/Decision/Collection/Orchestration | ✓ |
| parent_id | Parent product ID or null | ✓ |
| owner | Owner agent ID or null | ✓ |
| status | Pending/Accepted | ✓ |
| yours | Boolean, is this your product | ✓ |
| version | Current version number | If exists |
| blocking_collabs | Count of importance ≥8 collabs | P&A only |

---

## Token Count

~20 tokens per product

---

## Notes

- Uses temp IDs (p1, p2) not UUIDs
- `yours` field helps agent find their products
- `blocking_collabs` shown in P&A for acceptance decisions
