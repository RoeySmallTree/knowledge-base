# PROCESSING_NOTES

Backend implementation notes and validation rules.

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
# PROCESSING NOTES

## Backend Actions After Response

1. **If {response_type}:** {action}
2. **If {other_type}:** {action}

## Validation

- {validation rule}
- {validation rule}
```

---

## Example (Write)

```markdown
# PROCESSING NOTES

## Backend Actions After Response

1. **If request_context:** Fetch content, inject, decrement remaining
2. **If final_output:**
   - Create new version records in database
   - Increment version numbers
   - Store content with [[type:id]] references converted to UUIDs
   - Create collabs with author and round
   - Mark referenced collabs in change_summary as addressed

## Validation

- One version per assigned product
- Content must be non-empty (≥50 chars)
- All [[type:id]] references must be valid
- Collab importance must be 1-10
```

---

## Discrepancy

Not present in aggregated files. **Step files only.**

---

## Notes

- Not part of LLM prompt
- Implementation guide for backend
- Validation rules for output checking
- Helps implementers understand flow
