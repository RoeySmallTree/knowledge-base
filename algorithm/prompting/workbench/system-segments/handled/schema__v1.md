# SCHEMA

Formal JSON Schema definition for output validation.

---

## Status
- [ ] Considered
- [ ] Embedded
- [ ] Implemented
- [ ] Tested

---

## Used In
- Bootstrap ✓ (aggregated only)
- Reflect ✓ (aggregated only)
- Plan & Assign ✓ (aggregated only)
- Write ✓ (aggregated only)
- Peer Review ✓ (aggregated only)
- Inspect ✓ (aggregated only)
- Presentation ✓ (aggregated only)

---

## Pattern

```markdown
### SCHEMA

```json
{
  "type": "object",
  "properties": {
    "response_type": { "enum": [...] },
    ...
  },
  "required": [...]
}
```
```

---

## Note

**This segment ONLY exists in the aggregated system-prompts__v1.md file.**

Step files use `## SCHEMA REFERENCE` with TypeScript interfaces instead.

---

## Example: Reflect SCHEMA (from aggregated)

```json
{
  "type": "object",
  "properties": {
    "response_type": { "enum": ["request_context", "final_output"] },
    "context_requests": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "product_id": { "type": "string" },
          "need": { "enum": ["full_content", "version_history", "all_feedback", "peer_content"] },
          "reason": { "type": "string", "maxLength": 100 }
        },
        "required": ["product_id", "need", "reason"]
      },
      "maxItems": 5
    },
    "reflections": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "properties": {
          "refersToProduct": { "type": "string" },
          "dod_status": { "enum": ["met", "partially_met", "not_met"] },
          "dod_gaps": { "type": "array", "items": { "type": "string" } },
          "feedback_responses": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "collab_id": { "type": "string" },
                "action": { "enum": ["accept", "defer", "reject"] },
                "rationale": { "type": "string" },
                "planned_change": { "type": "string" }
              },
              "required": ["collab_id", "action", "rationale"]
            }
          },
          "lessons_from_history": { "type": "string" },
          "next_version_delta": { "type": "string" },
          "blockers": { "type": "array", "items": { "type": "string" } }
        },
        "required": ["refersToProduct", "dod_status", "next_version_delta"]
      }
    },
    "collabs": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "refersToProduct": { "type": "string" },
          "importance": { "type": "integer", "minimum": 6, "maximum": 10 },
          "comment": { "type": "string" },
          "shortestSummary": { "type": "string", "maxLength": 120 }
        },
        "required": ["refersToProduct", "importance", "comment", "shortestSummary"]
      }
    },
    "remarks": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "recipients": { "type": "array", "items": { "type": "string" } },
          "type": { "enum": ["question", "suggestion", "observation"] },
          "content": { "type": "string" }
        },
        "required": ["recipients", "type", "content"]
      }
    }
  },
  "required": ["response_type"]
}
```

---

## Discrepancy with Step Files

| Field | Aggregated SCHEMA | Step File OUTPUT_FORMAT |
|-------|-------------------|------------------------|
| collab.type | **MISSING** | Has `type: feedback | question | suggestion | endorsement | concern` |
| collab.importance | `minimum: 6, maximum: 10` | `1-10` (full range) |
| remarks.type | `question, suggestion, observation` | Adds `note` for self-notes |

**Step files are more complete and correct.**

---

## Notes

- Formal JSON Schema is verbose
- Used by backend for validation
- May not be necessary in LLM prompt if OUTPUT_FORMAT is clear
- Consider removing from prompt to save tokens
