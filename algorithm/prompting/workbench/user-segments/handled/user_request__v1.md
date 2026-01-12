# USER_REQUEST

The user's raw prompt or request that initiates the Bootstrap step.

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

## Content (Aggregated)

```markdown
## USER REQUEST

> {{user_raw_prompt}}
```

---

## Content (Step File)

```markdown
## USER REQUEST

> ${user_request}
```

---

## Example

```markdown
## USER REQUEST

> Build a simple TODO list web application MVP. The application should allow users to: Add new tasks with a title and optional description, Mark tasks as complete/incomplete, Delete tasks, View all tasks in a clean interface. Focus on delivering a working MVP with core functionality first.
```

---

## Discrepancy

| Aspect | Aggregated | Step File |
|--------|------------|-----------|
| Variable syntax | `{{user_raw_prompt}}` | `${user_request}` |
| Variable name | `user_raw_prompt` | `user_request` |

---

## Notes

- Always enclosed in blockquote (`>`)
- No character limit specified (but mission must be <1000 chars after interpretation)
- May include bullet points or structured lists from user
