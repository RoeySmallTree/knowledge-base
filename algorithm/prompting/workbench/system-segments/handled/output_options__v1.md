# OUTPUT_OPTIONS

Shows available response_type choices with brief JSON examples.

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
### OUTPUT OPTIONS

**Option A: {action}**
{brief JSON example}

**Option B: {action}**
{brief JSON example}
```

---

## Response Types by Step

| Step | halt | request_context | final_output |
|------|------|-----------------|--------------|
| Bootstrap | ✓ (question) | | ✓ |
| Reflect | | ✓ | ✓ |
| Plan & Assign | ✓ (question, done) | ✓ | ✓ |
| Write | | ✓ | ✓ |
| Peer Review | | ✓ | ✓ |
| Inspect | | ✓ | ✓ |
| Presentation | | ✓ | ✓ |

---

## Variations

### Bootstrap (halt + final_output)

```markdown
### OUTPUT OPTIONS

**Option A: Halt for clarification**
If critical info is missing:
```json
{
  "response_type": "halt",
  "halt": {
    "type": "question",
    "to": ["user-1"],
    "message": "Is this B2B or B2C? This affects our approach.",
    "options": ["B2B", "B2C", "Both"]
  }
}
```

**Option B: Final output**
```json
{
  "response_type": "final_output",
  "thinking": {...},
  "mission": "...",
  ...
}
```
```

### Reflect/Write/Peer Review/Inspect/Presentation (request_context + final_output)

```markdown
### OUTPUT OPTIONS

**Option A: Request more context** (You have **${context_requests_remaining}** requests remaining)
```json
{
  "response_type": "request_context",
  "context_requests": [
    { "product_id": "p4", "need": "full_content", "reason": "Need to check alignment" }
  ]
}
```

**Option B: Final output**
```json
{
  "response_type": "final_output",
  ...
}
```
```

### Plan & Assign (all three options)

```markdown
### OUTPUT OPTIONS

**Option A: Halt for user**
```json
{
  "response_type": "halt",
  "halt": { "type": "question", "to": ["user-1"], "message": "...", "options": [...] }
}
```
or
```json
{
  "response_type": "halt",
  "halt": { "type": "done", "to": ["u:all"], "message": "Mission complete..." }
}
```

**Option B: Request context**
...

**Option C: Final output**
...
```

---

## Discrepancy

| Aspect | Aggregated | Step Files |
|--------|------------|------------|
| Peer Review | Only `final_output` | Has `request_context` + `final_output` |
| Inspect | Only `final_output` | Has `request_context` + `final_output` |
| Presentation | Only `final_output` | Has `request_context` + `final_output` |
| halt.to field | Missing | Present in step files |
| context_requests_remaining | Missing | Present in step files |

**Step files are more complete.**

---

## Notes

- `halt.to` field specifies who receives the halt message
- `context_requests_remaining` shows remaining iterations (starts at 3)
- `halt.type: "done"` ends the entire session
