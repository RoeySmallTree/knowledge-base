# OPERATIVE_STATUS

Current status of each operative for Plan & Assign.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Plan & Assign ✓

---

## Content (Aggregated)

```markdown
## OPERATIVE STATUS

{{#each operatives}}
### {{name}} ({{id}})
- **Responsibility:** {{responsibility}}
- **Area:** {{area}}
- **Products:** {{product_count}} total, {{pending_count}} pending
{{/each}}
```

---

## Content (Step File)

```markdown
## OPERATIVE STATUS

${operative_status_sections}
```

---

## Example

```markdown
## OPERATIVE STATUS

### Alex (operative-1)
- **Responsibility:** Frontend implementation including React components, state management, and responsive layouts
- **Area:** Frontend Development
- **Products:** 1 total, 1 pending

### Jordan (operative-2)
- **Responsibility:** Backend architecture including API design, database schema, and authentication system
- **Area:** Backend Development
- **Products:** 2 total, 2 pending
```

---

## Notes

- Shows workload per operative
- Helps Chair balance assignments
- Includes responsibility from domains
- Pending count indicates active work
