# FEEDBACK_TO_ADDRESS

Open collabs on the product that require response.

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

---

## Content (Aggregated)

```markdown
### FEEDBACK TO ADDRESS

{{#if feedback}}
| ID | From | Type | Imp | Summary |
|----|------|------|-----|---------|
{{#each feedback}}
| {{temp_id}} | {{author}} | {{type}} | {{importance}} | {{summary}} |
{{/each}}

{{#each feedback}}
**{{temp_id}}** — {{author}} ({{type}}, importance {{importance}})
> {{comment}}

{{/each}}
{{else}}
No open feedback.
{{/if}}
```

---

## Content (Step File)

```markdown
### FEEDBACK TO ADDRESS

| ID | From | Type | Imp | Summary |
|----|------|------|-----|---------|
${feedback_table}

${feedback_details}
```

---

## Example

```markdown
### FEEDBACK TO ADDRESS

| ID | From | Type | Imp | Summary |
|----|------|------|-----|---------|
| c3 | watchdog-1 | feedback | 8 | localStorage XSS-vulnerable |
| c4 | operative-1 | question | 8 | Missing token refresh mechanism |

**c3** — Marco (feedback, importance 8)
> localStorage is XSS-vulnerable. Consider httpOnly cookies or document mitigations.

**c4** — Alex (question, importance 8)
> Missing token refresh mechanism. What happens when JWT expires?
```

---

## Notes

- Two-part format: summary table + detailed comments
- Shows temp collab IDs (c1, c2...)
- Importance 1-10 shown for prioritization
- Agent must respond to each in `feedback_responses`
