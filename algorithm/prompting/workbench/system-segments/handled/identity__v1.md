# IDENTITY

Agent persona placeholder that gets populated with the specific agent's persona.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Bootstrap ✓
- Reflect ✓
- Plan & Assign ✓
- Write ✓
- Peer Review ✓
- Inspect ✓
- Presentation ✓

---

## Pattern

```markdown
### IDENTITY

{persona_variable}
```

---

## Variations

### Aggregated (`system-prompts__v1.md`)

Uses Handlebars-style placeholder:

```markdown
### IDENTITY

{{IDENTITY}}
```

### Step Files

Use dollar-sign variables, with role-specific names:

| Step | Variable |
|------|----------|
| Bootstrap | `${chair_persona}` (hardcoded as Richard example) |
| Reflect | `${agent_persona}` |
| Plan & Assign | `${chair_persona}` |
| Write | `${agent_persona}` |
| Peer Review | `${agent_persona}` |
| Inspect | `${watchdog_persona}` |
| Presentation | `${envoy_persona}` |

---

## Example Content

From Bootstrap step file (has example persona inline):

```markdown
### IDENTITY

You are Richard, Full-Stack Developer leading this project. You own architecture decisions, team coordination, and ensuring quality integration between all components.
```

---

## Discrepancy

| Aspect | Aggregated | Step Files |
|--------|------------|------------|
| Syntax | `{{IDENTITY}}` | `${agent_persona}` / `${chair_persona}` etc. |
| Content | Placeholder only | Some have example personas |

**Decision Needed:** Standardize on one variable syntax.

---

## Notes

- Personas are designed once in Bootstrap, then injected here
- Keep personas brief (1-2 sentences)
- Persona should reinforce agent's focus area
- Different roles get different variable names for clarity
