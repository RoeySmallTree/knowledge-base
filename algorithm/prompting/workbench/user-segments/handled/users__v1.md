# USERS

Human collaborators in the session who can receive halt messages.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Bootstrap ✓
- Plan & Assign ✓

---

## Content (Aggregated / common-user-parts)

```markdown
## USERS

Human collaborators in this session:

{{#each users}}
### {{name}} (`{{id}}`)

| Field | Value |
|-------|-------|
| Role | {{role}} |
| Context | {{context}} |
{{/each}}

Users can be referenced as [[u:user-1]], etc. in content.
- Receive halt messages and questions
- Provide mission input and clarifications  
- Final decision authority
```

---

## Content (Step File - Bootstrap)

```markdown
## USERS

Human collaborators in this session:

${human_users}
```

---

## Content (Step File - Plan & Assign)

```markdown
## USERS

${users_reference}
```

Shorter format for reference only.

---

## Example

```markdown
## USERS

Human collaborators in this session:

### Sarah (`user-1`)

| Field | Value |
|-------|-------|
| Role | Product Owner |
| Context | Primary stakeholder, makes final feature decisions |

### Mike (`user-2`)

| Field | Value |
|-------|-------|
| Role | Technical Lead |
| Context | Provides technical constraints and review |

Users can be referenced as [[u:user-1]], etc. in content.
```

---

## Token Count

~30 tokens per user

---

## Notes

- Users are humans, not AI agents
- Can be targeted in halt.to field
- Use `[[u:user-1]]` reference syntax in content
- Bootstrap shows full detail; P&A shows just reference list
