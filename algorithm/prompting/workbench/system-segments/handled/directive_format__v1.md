# DIRECTIVE_FORMAT

Structure requirements for assignment directives.

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

## Content

```markdown
### DIRECTIVE FORMAT

Every assignment directive must include:
- **objective**: What to deliver (1 sentence)
- **dod**: Specific completion criteria
- **why**: Real-world impact
- **context**: Which collabs/feedback this addresses
```

---

## Example

```json
{
  "product_id": "p3",
  "assignee_ids": ["operative-2"],
  "directive": {
    "importance": 8,
    "objective": "Finalize authentication spec with token refresh and error handling",
    "dod": "Add JWT refresh flow, session expiration handling, error response format",
    "why": "Critical for secure user sessions and frontend integration",
    "context": "Addressing [[c:c1]] from Marco and [[c:c2]] from Alex"
  }
}
```

---

## Notes

- All four fields are **required**
- `importance` is 1-10 (higher = more urgent)
- Keep `objective` to single sentence
- `context` should reference collabs being addressed
