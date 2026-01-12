# CHAIR_DIRECTIVE

Chair's instruction for the product, either simple quote or structured format.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Reflect ✓ (simple quote)
- Write ✓ (structured format)

---

## Content (Reflect - Simple)

```markdown
### CHAIR DIRECTIVE (Round ${round_number})

> ${chair_directive}
```

---

## Content (Write - Structured)

```markdown
### CHAIR DIRECTIVE (Round ${round_number})

> ${directive_summary}

**Importance:** ${directive_importance}
**Objective:** ${directive_objective}
**Why:** ${directive_why}
**Context:** ${directive_context}
```

---

## Example (Reflect)

```markdown
### CHAIR DIRECTIVE (Round 7)

> Finalize feature prioritization with clear auth requirements. Address Marco's session management concerns.
```

---

## Example (Write)

```markdown
### CHAIR DIRECTIVE (Round 7)

> Add token refresh mechanism and address security concerns

**Importance:** 9
**Objective:** Address JWT storage security and complete token refresh flow
**DoD:** Either httpOnly cookie implementation OR documented XSS mitigations. Complete refresh token rotation.
**Why:** Critical security concern — XSS vulnerability in current design
**Context:** Addressing [[c:c3]] XSS concerns and [[c:c4]] token refresh
```

---

## Discrepancy

| Aspect | Reflect | Write |
|--------|---------|-------|
| Format | Simple quote | Structured with importance/objective/why/context |

**Write step has richer directive format** from Plan & Assign assignments.

---

## Notes

- May contain `[[c:id]]` collab references
- May contain `[[p:id]]` product references
- Importance 1-10 guides prioritization
- Context links to feedback being addressed
