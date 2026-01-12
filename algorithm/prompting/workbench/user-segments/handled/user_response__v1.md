# USER_RESPONSE

Response to a previous halt question, used when resuming after user input.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Bootstrap ✓ (after halt)
- Plan & Assign ✓ (after halt)

---

## Content (Step File - Bootstrap)

```markdown
## USER RESPONSE

You asked: "${previous_question}"

User answered: "${user_answer}"

Continue with bootstrap using this information.
```

---

## Content (Step File - Plan & Assign)

```markdown
## USER RESPONSE

You asked: "${previous_question}"

User answered: "${user_answer}"

Continue with planning using this information.
```

---

## Example

```markdown
## USER RESPONSE

You asked: "The request mentions 'clean interface' but doesn't specify platform priorities. Should we focus on mobile-first, desktop-first, or equal priority?"

User answered: "Mobile-first"

Continue with bootstrap using this information.
```

---

## Notes

- Only included when resuming after a halt
- Shows the original question for context
- User's answer in quotes
- Instruction to continue with the step
