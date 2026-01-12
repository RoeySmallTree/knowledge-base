# TEAM_REFERENCE

Compact ID-to-Name mapping for agent reference.

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
- Inspect ✓
- Presentation ✓

---

## Content (Aggregated)

```markdown
## TEAM REFERENCE

{{#each team}}
- `{{id}}` → {{name}}
{{/each}}
```

---

## Content (Step Files)

```markdown
## TEAM REFERENCE

${team_reference}
```

---

## Example

```markdown
## TEAM REFERENCE

- `chair-1` → Richard
- `watchdog-1` → Marco
- `envoy-1` → Stacy
- `operative-1` → Alex (you)
- `operative-2` → Jordan
```

---

## Variations

### With Role Info (Presentation)

```markdown
## TEAM REFERENCE

- `chair-1` → Richard (Full-Stack Developer, lead)
- `watchdog-1` → Marco (Technical Specialist, quality)
- `envoy-1` → Stacy (Product Strategist, you)
- `operative-1` → Alex (Full-Stack Developer, frontend)
- `operative-2` → Jordan (Technical Specialist, backend)
```

---

## Notes

- `(you)` marker indicates current agent
- Simple format for ID lookups
- Used with `[[a:agent-id]]` references
- Presentation adds role context
