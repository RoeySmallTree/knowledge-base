# PRODUCTS_TO_INSPECT

Full product details for Watchdog inspection.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Inspect ✓

---

## Content (Aggregated)

```markdown
## PRODUCTS TO INSPECT

{{#each products_to_inspect}}
### {{temp_id}}: {{name}}

**Type:** {{type}} | **Owner:** {{owner}}
**DoD:** {{dod}}
**Version:** {{version}}

#### CONTENT

{{content}}

#### PRIOR FEEDBACK

{{#each prior_feedback}}
- {{author}} ({{type}}, {{importance}}): {{summary}}
{{/each}}

---

{{/each}}
```

---

## Content (Step File) 

More detailed with DoD criteria:

```markdown
## PRODUCTS TO INSPECT

### ${product_id} — ${product_name} (V${version_number})

**Type:** ${product_type} | **Owner:** ${owner_name} (${owner_id})
**DoD:** ${definition_of_done}

#### CURRENT CONTENT

${current_content}

#### DOD CRITERIA
${dod_criteria_checklist}

#### PREVIOUS FINDINGS (addressed)
${previous_findings}
```

---

## Example

See Inspect__User__v1.md lines 95-163 for complete example with Auth Specification and Technical Architecture.

---

## Components

| Component | Description |
|-----------|-------------|
| Header | ID, Name, Version |
| Metadata | Type, Owner, DoD |
| Content | Full markdown content |
| DoD Criteria | Checklist with ✓/✗ |
| Previous Findings | Addressed collabs |

---

## Discrepancy

| Aspect | Aggregated | Step File |
|--------|------------|-----------|
| DoD Criteria | Not present | Present with checkmarks |
| Previous Findings | As "Prior Feedback" | As "Previous Findings (addressed)" |

Step file is more complete.

---

## Notes

- Watchdog inspects ALL products in list
- DoD criteria helps verify completeness
- Previous findings show what was addressed
- Multiple products in same prompt
