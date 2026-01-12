# User Prompt Segments Analysis

Analysis of distinct segments within CABAL user prompts, comparing aggregated files vs. individual step files.

---

## Sources Analyzed

| Source Type | File |
|-------------|------|
| Aggregated | `user-prompts__v1.md` |
| Aggregated | `common-user-parts__v1.md` |
| Bootstrap | `steps/bootstrap/Bootstrap__User__v1.md` |
| Reflect | `steps/reflect/Reflect__User__v1.md` |
| Plan & Assign | `steps/plan_assign/Plan_Assign__User__v1.md` |
| Write | `steps/write/Write__User__v1.md` |
| Peer Review | `steps/peer_review/Peer_Review__User__v1.md` |
| Inspect | `steps/inspect/Inspect__User__v1.md` |
| Presentation | `steps/presentation/Presentation__User__v1.md` |

---

## Segment Categories

### 1. Bootstrap-Only Segments

| Segment | Description |
|---------|-------------|
| USER_REQUEST | User's raw prompt/request |
| TEAM_FULL_ROSTER | Complete team with structured tables |
| USERS | Human collaborators in session |
| OUTPUT_REQUIREMENTS | Personas and domains needed |
| UPLOADED_FILES | Optional: attached files |
| USER_RESPONSE | Optional: answer to halt question |

### 2. Universal Segments (All Non-Bootstrap)

| Segment | Description |
|---------|-------------|
| MISSION | Mission statement quote block |
| ROUND | Round number marker |
| PRODUCT_TREE | JSON array of products |
| TEAM_REFERENCE | ID → Name mapping |
| REQUESTED_CONTEXT | Optional: context iteration response |

### 3. Reflect Segments

| Segment | Description |
|---------|-------------|
| OWNED_PRODUCTS | Full detail for YOUR products |
| VERSION_HISTORY | Table of version changes |
| CURRENT_CONTENT | Full content text |
| FEEDBACK_TO_ADDRESS | Collabs requiring response |
| CHAIR_DIRECTIVE | Chair's instruction quote |
| PEER_PRODUCTS | Summary table of others' products |
| REMARKS_FOR_YOU | Team notes directed at you |

### 4. Plan & Assign Segments

| Segment | Description |
|---------|-------------|
| CURRENT_SESSION_PARAMETERS | Editable mission/objectives/constraints |
| OPERATIVE_STATUS | Product count, responsibility per operative |
| REFLECTIONS | Summary of operative reflections |
| HIGH_PRIORITY_COLLABS | Importance ≥8 collabs table |
| USERS | Reference for halt.to field |

### 5. Write Segments

| Segment | Description |
|---------|-------------|
| ASSIGNED_PRODUCT | Product being written |
| CHAIR_DIRECTIVE | Structured directive (importance, objective, why, context) |
| ATTACHED_CONTEXT | Chair-specified context products |
| SELF_NOTES | Notes from earlier in round |
| OTHER_PRODUCTS | Reference table of non-assigned |

### 6. Peer Review Segments

| Segment | Description |
|---------|-------------|
| REVIEW_PRODUCT | Product being reviewed |
| YOUR_EXPERTISE_CONTEXT | Reviewer's domain and responsibility |
| EXISTING_COLLABS | Prior collabs on this product |
| RELATED_PRODUCTS | Products to cross-reference |

### 7. Inspect Segments

| Segment | Description |
|---------|-------------|
| PRODUCTS_TO_INSPECT | Full content + DoD criteria + prior findings |
| DOD_CRITERIA | Checklist of DoD items with ✓/✗ |
| PREVIOUS_FINDINGS | Addressed collabs |

### 8. Presentation Segments

| Segment | Description |
|---------|-------------|
| WHAT_HAPPENED | Chair actions, operative updates, watchdog findings |
| KEY_COLLABS | Table of important feedback |
| PRODUCTS_ACCEPTED | List of accepted products |
| PRODUCTS_BLOCKED | List of blocked products |
| USER_QUESTIONS | Pending halt questions |
| TONE_GUIDANCE | Mood and style guidance |

### 9. Step File Only Segments

| Segment | Description | Steps |
|---------|-------------|-------|
| VARIATIONS | Alternative prompt formats | All |
| EXPECTED_OUTPUTS | Example JSON responses | All |
| PROCESSING_NOTES | Backend action documentation | All |
| VALIDATION | Field validation rules | All |

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
| RELATED_PRODUCTS | | | | | ✓ | | |
| PRODUCTS_TO_INSPECT | | | | | | ✓ | |
| DOD_CRITERIA | | | | | | ✓ | |
| PREVIOUS_FINDINGS | | | | | | ✓ | |
| WHAT_HAPPENED | | | | | | | ✓ |
| KEY_COLLABS | | | | | | | ✓ |
| PRODUCTS_ACCEPTED | | | | | | | ✓ |
| PRODUCTS_BLOCKED | | | | | | | ✓ |
| USER_QUESTIONS | | | | | | | ✓ |
| TONE_GUIDANCE | | | | | | | ✓ |
| REQUESTED_CONTEXT | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| VARIATIONS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| EXPECTED_OUTPUTS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| PROCESSING_NOTES | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## Key Discrepancies: Aggregated vs Step Files

### 1. Templating Syntax

| Aspect | Aggregated | Step Files |
|--------|------------|------------|
| Variables | `{{variable}}` (Handlebars) | `${variable}` (template literal) |

### 2. Content Presence

| Content | Aggregated | Step Files |
|---------|------------|------------|
| VARIATIONS section | Not present | Present (all steps) |
| EXPECTED_OUTPUTS | Not present | Present (all steps) |
| PROCESSING_NOTES | Not present | Present (all steps) |
| VALIDATION | Not present | Present (all steps) |
| HTML comments | Template comments | Used for examples |

### 3. Structure Differences

| Aspect | Aggregated | Step Files |
|--------|------------|------------|
| Directive format | Prose block | Structured fields (importance, objective, why, context) |
| Team display | Full roster | Context-appropriate subset |
| Product display | Always full | Varies by step need |

---

## Segment Count Summary

| Category | Count |
|----------|-------|
| Bootstrap-only | 6 |
| Universal | 5 |
| Reflect | 7 |
| Plan & Assign | 5 |
| Write | 5 |
| Peer Review | 4 |
| Inspect | 3 |
| Presentation | 6 |
| Step file only | 4 |
| **Total unique** | **41** |

---

## Common Parts Reference (`common-user-parts__v1.md`)

| Part Name | Description | Used In |
|-----------|-------------|---------|
| TEAM_FULL_ROSTER | Complete team tables | Bootstrap |
| TEAM_CONTEXT | Compact team + focus | P&A, Presentation |
| MISSION_SUMMARY | Mission quote block | All non-Bootstrap |
| ROUND_MARKER | Round number | All non-Bootstrap |
| PRODUCT_TREE_JSON | JSON product array | Reflect, P&A, Write, PR |
| PRODUCT_DETAIL_FULL | Complete product detail | Reflect, Write |
| PRODUCT_SUMMARY_TABLE | Brief product table | Reflect, Write, PR |
| FEEDBACK_SORTED | Importance-sorted collabs | P&A, Write |
| TEAM_REFERENCE | ID→Name mapping | All non-Bootstrap |
| OPERATIVES_FOR_ASSIGNMENT | Operatives only | P&A |
| DIRECTIVE_STRUCTURED | Full directive object | Write |
| ATTACHED_CONTEXT | Context attachments | Write |
| REFLECTIONS_SUMMARY | Reflection summaries | P&A |
| PRODUCTS_PENDING_REVIEW | Products for acceptance | P&A |
| CHAIR_MAINTAINED_PRODUCTS | Chair's products | P&A |
| ADDITIONAL_CONTEXT_RECEIVED | Requested context injection | All (context iteration) |
