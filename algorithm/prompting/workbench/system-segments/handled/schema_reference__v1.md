# SCHEMA_REFERENCE

TypeScript interface definition for output structure. Alternative to formal JSON Schema.

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
## SCHEMA REFERENCE

```typescript
interface {Step}Response {
  response_type: 'option1' | 'option2';
  
  // If option1
  field?: Type;
  
  // If option2
  otherField?: Array<{...}>;
}
```


---

## Note

**This segment ONLY exists in step files, NOT in the aggregated file.**

It serves the same purpose as SCHEMA (formal JSON Schema) but is more readable.

---

## Example: Reflect SCHEMA_REFERENCE

```typescript
interface ReflectResponse {
  response_type: 'request_context' | 'final_output';
  
  // If request_context
  context_requests?: Array<{
    product_id: string;
    need: 'full_content' | 'version_history' | 'all_feedback' | 'peer_content';
    reason: string;
  }>;
  
  // If final_output
  reflections?: Array<{
    refersToProduct: string;
    dod_status: 'met' | 'partially_met' | 'not_met';
    dod_gaps?: string[];
    feedback_responses: Array<{
      collab_id: string;
      action: 'accept' | 'defer' | 'reject';
      rationale: string;
      planned_change?: string;
    }>;
    lessons_from_history: string;
    next_version_delta: string;
    blockers?: string[];
  }>;
  
  collabs?: Array<{
    refersToProduct: string;
    type: 'feedback' | 'question' | 'suggestion' | 'endorsement' | 'concern';
    importance: number;
    comment: string;
    shortestSummary: string;
  }>;
  
  remarks?: Array<{
    recipients: string[];
    type: 'question' | 'suggestion' | 'observation' | 'note';
    content: string;
  }>;
}
```

---

## All Step Interfaces

- `BootstrapResponse`
- `ReflectResponse`
- `PlanAssignResponse`
- `WriteResponse`
- `PeerReviewResponse`
- `InspectResponse`
- `PresentationResponse`

---

## Discrepancy

Step files have SCHEMA_REFERENCE (TypeScript) while aggregated has SCHEMA (JSON Schema).

| Aspect | TypeScript | JSON Schema |
|--------|------------|-------------|
| Readability | High | Low |
| Token cost | Lower | Higher |
| LLM understanding | Better | Worse |
| Backend validation | Needs conversion | Direct use |

**Recommendation:** Use TypeScript in prompts, JSON Schema in backend only.

---

## Notes

- TypeScript is more LLM-friendly
- Optional fields use `?` suffix
- Union types use `'a' | 'b'` syntax
- Arrays use `Array<{...}>` or `Type[]`
