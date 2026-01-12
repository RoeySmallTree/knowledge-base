# Schema Comparison Summary

Overview of discrepancies between **system-schemas.md** (official backend schemas) and step prompt files.

---

## Global Issues

These issues appear across **all steps**:

| Issue | Description |
|-------|-------------|
| **Missing `responseType`** | Prompt schemas don't include the discriminator field |
| **Naming convention** | Official uses **camelCase**, prompts use **snake_case** |
| **Added `thinking`** | Prompts add thinking blocks not in official schemas |
| **Collab field names** | `refersToProduct` vs `about_product`, `comment` vs `content` |

---

## Per-Step Summary

| Step | Identical | Different | Missing | Added |
|------|-----------|-----------|---------|-------|
| Bootstrap | 4 | 8 | 5 | 4 |
| Reflect | 11 | 7 | 3 | 3 |
| Plan & Assign | 12 | 18 | 8 | 2 |
| Write | 3 | 6 | 2 | 3 |
| Peer Review | 2 | 6 | 7 | 3 |
| Inspect | 11 | 5 | 1 | 5 |
| Presentation | 1 | 2 | 2 | 4 |

---

## Critical Discrepancies

### Bootstrap
- Halt schema uses `question`/`reason` instead of `message`/`type`
- Missing `type: 'question' | 'done'` in halt
- Missing `options` in halt

### Reflect
- Missing collab metadata (`addresseeIds`, `respondingToCollabIds`)

### Plan & Assign
- Tree operation actions differ: `ADD` vs `create`, `MOVE` vs `reparent`
- Missing `REMOVE` operation
- Acceptance schema incomplete

### Write
- Missing `newVersion` wrapper structure
- Missing `contentTitle` field
- Version structure flattened

### Peer Review
- **Missing entire `reviews` array** — biggest discrepancy
- Only shows collabs, not product assessments

### Inspect
- Adds `dod_checklist` and `summary` not in official

### Presentation
- `asAgent` vs `author_id` naming
- Adds `highlights` not in official

---

## Recommendation

1. **Align naming conventions** — Pick one (camelCase or snake_case)
2. **Add `responseType` to all prompts** — Required for discriminated union
3. **Fix Peer Review** — Add missing `reviews` array
4. **Align halt schema** — Use `type`/`message`/`options` format
5. **Fix Write version structure** — Add `newVersion` wrapper and `contentTitle`

---

## Files

- [bootstrap.md](./bootstrap.md)
- [reflect.md](./reflect.md)
- [plan_assign.md](./plan_assign.md)
- [write.md](./write.md)
- [peer_review.md](./peer_review.md)
- [inspect.md](./inspect.md)
- [presentation.md](./presentation.md)
