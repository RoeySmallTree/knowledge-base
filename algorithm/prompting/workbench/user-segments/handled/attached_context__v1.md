# ATTACHED_CONTEXT

Context products attached by Chair for reference during Write.

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

## Content (Aggregated)

```markdown
{{#if attached_context}}
## ATTACHED CONTEXT (from Chair)

{{#each attached_context}}
### {{product_temp_id}}: {{product_name}}
**Reason:** {{reason}}

{{#if include_content}}
**Content:**
{{content}}
{{/if}}

{{#if include_feedback}}
**Feedback:**
{{#each feedback}}
- {{author}} ({{type}}, {{importance}}): {{summary}}
{{/each}}
{{/if}}

---

{{/each}}
{{/if}}
```

---

## Content (Step File)

```markdown
### ATTACHED CONTEXT

${attached_context_sections}
```

---

## Example

```markdown
### ATTACHED CONTEXT

**p5: Auth Specification** (content)
Attached for: Auth error format to align with

# Authentication Specification

## Error Codes
| Code | Meaning |
|------|---------|
| AUTH_001 | Invalid credentials |
| AUTH_002 | Token expired |
| AUTH_003 | Invalid refresh token |
| AUTH_004 | Rate limit exceeded |
```

---

## Include Options

From `attach_context` in assignment:
- `content` - Product content
- `feedback` - Open collabs on product
- `history` - Version history

---

## Notes

- Chair specifies what to include
- Max 3 attachments per assignment
- Reason explains why it's relevant
- Reduces need for context requests
