# User Segments Index

Master list of all user prompt segments with status tracking.

---

## Legend
- `[ ]` Not started
- `[C]` Considered (design decision made)
- `[E]` Embedded (written in prompt file)
- `[I]` Implemented (backend supports it)
- `[T]` Tested (verified working)

---

## Bootstrap Segments

| Segment | File | Status |
|---------|------|--------|
| [ ] USER_REQUEST | [user_request__v1.md](./user_request__v1.md) | |
| [ ] TEAM_FULL_ROSTER | [team_full_roster__v1.md](./team_full_roster__v1.md) | |
| [ ] USERS | [users__v1.md](./users__v1.md) | Also in P&A |
| [ ] OUTPUT_REQUIREMENTS | [output_requirements__v1.md](./output_requirements__v1.md) | |
| [ ] UPLOADED_FILES | [uploaded_files__v1.md](./uploaded_files__v1.md) | Optional |
| [ ] USER_RESPONSE | [user_response__v1.md](./user_response__v1.md) | After halt |

---

## Universal Segments (All Non-Bootstrap)

| Segment | File | Status |
|---------|------|--------|
| [ ] MISSION | [mission__v1.md](./mission__v1.md) | |
| [ ] ROUND | [round__v1.md](./round__v1.md) | |
| [ ] PRODUCT_TREE | [product_tree__v1.md](./product_tree__v1.md) | |
| [ ] TEAM_REFERENCE | [team_reference__v1.md](./team_reference__v1.md) | |
| [ ] REQUESTED_CONTEXT | [requested_context__v1.md](./requested_context__v1.md) | Context iteration |

---

## Reflect Segments

| Segment | File | Status |
|---------|------|--------|
| [ ] OWNED_PRODUCTS | [owned_products__v1.md](./owned_products__v1.md) | |
| [ ] VERSION_HISTORY | [version_history__v1.md](./version_history__v1.md) | Also Write, PR |
| [ ] CURRENT_CONTENT | [current_content__v1.md](./current_content__v1.md) | Also Write, PR, Inspect |
| [ ] FEEDBACK_TO_ADDRESS | [feedback_to_address__v1.md](./feedback_to_address__v1.md) | Also Write |
| [ ] CHAIR_DIRECTIVE | [chair_directive__v1.md](./chair_directive__v1.md) | Also Write (structured) |
| [ ] PEER_PRODUCTS | [peer_products__v1.md](./peer_products__v1.md) | |
| [ ] REMARKS_FOR_YOU | [remarks_for_you__v1.md](./remarks_for_you__v1.md) | Step file only |

---

## Plan & Assign Segments

| Segment | File | Status |
|---------|------|--------|
| [ ] CURRENT_SESSION_PARAMETERS | [current_session_parameters__v1.md](./current_session_parameters__v1.md) | Step file only |
| [ ] OPERATIVE_STATUS | [operative_status__v1.md](./operative_status__v1.md) | |
| [ ] REFLECTIONS | [reflections__v1.md](./reflections__v1.md) | |
| [ ] HIGH_PRIORITY_COLLABS | [high_priority_collabs__v1.md](./high_priority_collabs__v1.md) | |

---

## Write Segments

| Segment | File | Status |
|---------|------|--------|
| [ ] ASSIGNED_PRODUCT | [assigned_product__v1.md](./assigned_product__v1.md) | |
| [ ] ATTACHED_CONTEXT | [attached_context__v1.md](./attached_context__v1.md) | |
| [ ] SELF_NOTES | [self_notes__v1.md](./self_notes__v1.md) | Step file only |
| [ ] OTHER_PRODUCTS | [other_products__v1.md](./other_products__v1.md) | Also PR |

---

## Peer Review Segments

| Segment | File | Status |
|---------|------|--------|
| [ ] REVIEW_PRODUCT | [review_product__v1.md](./review_product__v1.md) | |
| [ ] YOUR_EXPERTISE_CONTEXT | [your_expertise_context__v1.md](./your_expertise_context__v1.md) | Step file only |
| [ ] EXISTING_COLLABS | [existing_collabs__v1.md](./existing_collabs__v1.md) | Step file only |

---

## Inspect Segments

| Segment | File | Status |
|---------|------|--------|
| [ ] PRODUCTS_TO_INSPECT | [products_to_inspect__v1.md](./products_to_inspect__v1.md) | |
| [ ] DOD_CRITERIA | [dod_criteria__v1.md](./dod_criteria__v1.md) | Step file only |
| [ ] PREVIOUS_FINDINGS | [previous_findings__v1.md](./previous_findings__v1.md) | Step file only |

---

## Presentation Segments

| Segment | File | Status |
|---------|------|--------|
| [ ] WHAT_HAPPENED | [what_happened__v1.md](./what_happened__v1.md) | |
| [ ] TONE_GUIDANCE | [tone_guidance__v1.md](./tone_guidance__v1.md) | Step file only |

---

## Step File Only (Documentation)

| Segment | File | Status |
|---------|------|--------|
| [ ] VARIATIONS | [variations__v1.md](./variations__v1.md) | All steps |
| [ ] EXPECTED_OUTPUTS | [expected_outputs__v1.md](./expected_outputs__v1.md) | All steps |
| [ ] PROCESSING_NOTES | [processing_notes__v1.md](./processing_notes__v1.md) | All steps |

---

## Segment Usage Matrix

| Segment | Boot | Refl | P&A | Write | PR | Insp | Pres |
|---------|------|------|-----|-------|-----|------|------|
| USER_REQUEST | ✓ | | | | | | |
| TEAM_FULL_ROSTER | ✓ | | | | | | |
| USERS | ✓ | | ✓ | | | | |
| OUTPUT_REQUIREMENTS | ✓ | | | | | | |
| UPLOADED_FILES | ✓ | | | | | | |
| USER_RESPONSE | ✓ | | ✓ | | | | |
| MISSION | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| ROUND | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| PRODUCT_TREE | | ✓ | ✓ | ✓ | ✓ | ✓ | |
| TEAM_REFERENCE | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| REQUESTED_CONTEXT | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| OWNED_PRODUCTS | | ✓ | | | | | |
| VERSION_HISTORY | | ✓ | | ✓ | ✓ | | |
| CURRENT_CONTENT | | ✓ | | ✓ | ✓ | ✓ | |
| FEEDBACK_TO_ADDRESS | | ✓ | | ✓ | | | |
| CHAIR_DIRECTIVE | | ✓ | | ✓ | | | |
| PEER_PRODUCTS | | ✓ | | | | | |
| REMARKS_FOR_YOU | | ✓ | | | | | |
| CURRENT_SESSION_PARAMETERS | | | ✓ | | | | |
| OPERATIVE_STATUS | | | ✓ | | | | |
| REFLECTIONS | | | ✓ | | | | |
| HIGH_PRIORITY_COLLABS | | | ✓ | | | | |
| ASSIGNED_PRODUCT | | | | ✓ | | | |
| ATTACHED_CONTEXT | | | | ✓ | | | |
| SELF_NOTES | | | | ✓ | | | |
| OTHER_PRODUCTS | | | | ✓ | ✓ | | |
| REVIEW_PRODUCT | | | | | ✓ | | |
| YOUR_EXPERTISE_CONTEXT | | | | | ✓ | | |
| EXISTING_COLLABS | | | | | ✓ | | |
| PRODUCTS_TO_INSPECT | | | | | | ✓ | |
| DOD_CRITERIA | | | | | | ✓ | |
| PREVIOUS_FINDINGS | | | | | | ✓ | |
| WHAT_HAPPENED | | | | | | | ✓ |
| TONE_GUIDANCE | | | | | | | ✓ |
| VARIATIONS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| EXPECTED_OUTPUTS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| PROCESSING_NOTES | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## Key Discrepancies to Resolve

1. **Templating Syntax**: Aggregated uses `{{var}}`, step files use `${var}`
2. **Variable Names**: Inconsistent (e.g., `mission_summary` vs `mission_statement`)
3. **Step File Only Content**: Many segments only in step files (not aggregated)
4. **Directive Format**: Simple quote in Reflect, structured in Write
5. **DoD Criteria**: Only in step file for Inspect

---

## Files Count

**Total: 36 segment files**
- Bootstrap: 6
- Universal: 5
- Reflect: 7
- Plan & Assign: 4
- Write: 4
- Peer Review: 3
- Inspect: 3
- Presentation: 2
- Documentation: 3
