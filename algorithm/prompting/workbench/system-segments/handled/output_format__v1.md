# OUTPUT_FORMAT

Detailed inline schema showing the full JSON structure with comments. This is **distinct from SCHEMA** (which is formal JSON Schema).

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

## Pattern

```markdown
### OUTPUT FORMAT

```json
{
  "response_type": "...",
  
  // If {option}:
  "field": "description",
  ...
}
```
```

---

## Note

**This segment ONLY exists in step files, NOT in the aggregated system-prompts__v1.md file.**

The aggregated file has `### SCHEMA` with formal JSON Schema. Step files have BOTH:
1. `### OUTPUT FORMAT` - human-readable with comments
2. `## SCHEMA REFERENCE` - TypeScript interface

---

## Example: Reflect OUTPUT_FORMAT

```json
{
  "response_type": "request_context" | "final_output",
  
  // If request_context:
  "context_requests": [
    { "product_id": "p1", "need": "full_content | version_history | all_feedback | peer_content", "reason": "..." }
  ],  // max 5 per request
  
  // If final_output:
  "reflections": [
    {
      "refersToProduct": "p3",
      "dod_status": "met | partially_met | not_met",
      "dod_gaps": ["Gap 1", "Gap 2"],  // if not fully met
      "feedback_responses": [
        {
          "collab_id": "c1",
          "action": "accept | defer | reject",
          "rationale": "Why this decision",
          "planned_change": "What you'll change"  // if accept
        }
      ],
      "lessons_from_history": "What previous versions taught",
      "next_version_delta": "Single most important change for next version",
      "blockers": ["Blocking issue 1"]  // if any
    }
  ],  // one per owned product
  
  "collabs": [...],
  "remarks": [...]
}
```

---

## Discrepancy

| Aspect | Aggregated | Step Files |
|--------|------------|------------|
| OUTPUT FORMAT section | Not present | Present |
| Format | Formal JSON Schema | Human-readable with comments |

**Recommendation:** Include OUTPUT FORMAT in step prompts (easier for LLM to understand), use SCHEMA for backend validation.

---

## Notes

- Uses pipe `|` syntax for enum options
- Uses `// comments` to explain conditional fields
- More readable than formal JSON Schema
- Should align with SCHEMA_REFERENCE (TypeScript interface)
