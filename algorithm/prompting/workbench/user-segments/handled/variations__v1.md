# VARIATIONS

Section showing alternative prompt formats for different scenarios.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Bootstrap ✓ (step file only)
- Reflect ✓ (step file only)
- Plan & Assign ✓ (step file only)
- Write ✓ (step file only)
- Peer Review ✓ (step file only)
- Inspect ✓ (step file only)
- Presentation ✓ (step file only)

---

## Content Pattern

```markdown
# VARIATIONS

## {Scenario Name}

{Description of when to use}

```markdown
{Variation content}
```
```

---

## Common Variations

| Variation | Steps | Description |
|-----------|-------|-------------|
| With Uploaded Files | Bootstrap | Files attached to session |
| With User Answer to Halt | Bootstrap, P&A | Resume after halt question |
| With Requested Context | All | Second iteration with context |
| Multiple Owned Products | Reflect | Agent owns multiple products |
| Multiple Assigned Products | Write | Agent assigned multiple products |
| Multiple Products to Review | Peer Review | Agent reviewing multiple |

---

## Example (Bootstrap)

```markdown
# VARIATIONS

## With Uploaded Files

When the user has uploaded files, add:

```markdown
## UPLOADED FILES

- requirements.pdf: Product requirements document
- wireframes.png: Initial UI wireframes
```

## With User Answer to Halt

After user answers a halt question:

```markdown
## USER RESPONSE

You asked: "${previous_question}"

User answered: "${user_answer}"

Continue with bootstrap using this information.
```
```

---

## Discrepancy

Not present in aggregated files. **Step files only.**

---

## Notes

- Helps implementers understand edge cases
- Not part of actual prompts
- Documentation for prompt builders
- Shows complete variations
