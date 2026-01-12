# ASSIGNED_PRODUCT

Full detail for product assigned in Write step (similar to OWNED_PRODUCTS but for Write).

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Write ✓

---

## Content (Step File)

```markdown
## ASSIGNED PRODUCT: ${product_id} — ${product_name}

**Type:** ${product_type} | **Status:** ${product_status} | **Version:** ${version_number}
**DoD:** ${definition_of_done}

### CHAIR DIRECTIVE (Round ${round_number})

> ${directive_summary}

**Importance:** ${directive_importance}
**Objective:** ${directive_objective}
**Why:** ${directive_why}
**Context:** ${directive_context}

### VERSION HISTORY

| V | Author | Change |
|---|--------|--------|
${version_history_table}

### CURRENT CONTENT (V${version_number})

${current_content}

### FEEDBACK TO ADDRESS

| ID | From | Type | Imp | Summary |
|----|------|------|-----|---------|
${feedback_table}

${feedback_details}

### ATTACHED CONTEXT

${attached_context_sections}
```

---

## Example

See Write__User__v1.md lines 163-260 for complete example.

---

## Differences from OWNED_PRODUCTS

| Aspect | OWNED_PRODUCTS (Reflect) | ASSIGNED_PRODUCT (Write) |
|--------|--------------------------|--------------------------|
| Directive | Simple quote | Structured format |
| Context | None | ATTACHED_CONTEXT section |
| Purpose | Assess and plan | Create content |

---

## Notes

- Similar structure to OWNED_PRODUCTS
- Directive has full structure from assignment
- ATTACHED_CONTEXT provides additional products
- Multiple assignments = multiple sections
