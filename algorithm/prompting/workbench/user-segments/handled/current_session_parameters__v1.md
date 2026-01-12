# CURRENT_SESSION_PARAMETERS

Editable session parameters for Plan & Assign bootstrap overrides.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Plan & Assign ✓ (step file only)

---

## Content (Step File)

```markdown
## CURRENT SESSION PARAMETERS

These values can be modified via `bootstrap_overrides` if planning reveals needed changes.

**Mission:**
> ${mission_statement}

**Objectives:**
${objectives_list}

**Constraints:**
${constraints}

**Operative Domains:**
${operative_domains_table}
```

---

## Example

```markdown
## CURRENT SESSION PARAMETERS

These values can be modified via `bootstrap_overrides` if planning reveals needed changes.

**Mission:**
> Build a TODO list web application MVP with task CRUD operations, secure authentication, and responsive UI.

**Objectives:**
1) Functional task CRUD operations
2) Secure user authentication
3) Responsive UI for mobile and desktop
4) Clean, maintainable codebase
5) Deployment-ready MVP

**Constraints:**
Rapid development focus. Lightweight architecture. No advanced features in V1.

**Operative Domains:**
| operative-1 | Frontend Development | React components, state management, responsive layouts |
| operative-2 | Backend Development | API design, database schema, authentication system |
```

---

## Discrepancy

Not present in aggregated `user-prompts__v1.md`. **Step file only.**

---

## Notes

- Reminds Chair what can be modified
- Bootstrap overrides allow mid-session adjustments
- Only include changed fields in output
- Visible to all agents next round
