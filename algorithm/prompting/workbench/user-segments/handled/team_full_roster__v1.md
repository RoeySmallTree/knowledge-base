# TEAM_FULL_ROSTER

Complete team presentation with structured tables for each member.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Bootstrap ✓

---

## Content (Aggregated / common-user-parts)

```markdown
## TEAM

You will design personas for this team:

{{#each agents}}
### {{name}} (`{{id}}`)

| Field | Value |
|-------|-------|
| Role | {{role}} |
| Team Role | {{team_role}} |
| Expertise | {{expertise}} |
{{/each}}
```

---

## Content (Step File)

```markdown
## TEAM

You will design personas for this team:

${team_members}
```

Step file uses a single variable that expands to the full team table.

---

## Example

```markdown
## TEAM

You will design personas for this team:

### Richard (`chair-1`)

| Field | Value |
|-------|-------|
| Role | chair |
| Team Role | Full-Stack Developer |
| Expertise | TypeScript, React, Node.js, PostgreSQL |

### Marco (`watchdog-1`)

| Field | Value |
|-------|-------|
| Role | watchdog |
| Team Role | Technical Specialist |
| Expertise | System architecture, Security, Code review |

### Alex (`operative-1`)

| Field | Value |
|-------|-------|
| Role | operative |
| Team Role | Full-Stack Developer |
| Expertise | TypeScript, React, Node.js |

### Jordan (`operative-2`)

| Field | Value |
|-------|-------|
| Role | operative |
| Team Role | Technical Specialist |
| Expertise | System architecture, Performance optimization |
```

---

## Token Count

~50 tokens per agent

---

## Notes

- Each team member has:
  - Name with ID in header
  - Role (chair/operative/watchdog/envoy)
  - Team Role (job title)
  - Expertise (skills)
- Used for persona generation in Bootstrap
