# System Prompts Discrepancies Analysis

Comparison of aggregated reference files against individual step prompt files.

**Source Files:**
- `system-prompts__v1.md` (aggregated system prompts)
- `user-prompts__v1.md` (aggregated user prompts)
- `common-system-parts__v1.md` (common components)
- `common-user-parts__v1.md` (common components)

**Target Files:** `steps/` directory individual prompts

---

## Bootstrap

### [ ] System Prompt
**Status:** Needs review

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| Kernel placeholder | `{{KERNEL}}` | Hardcoded rules inline | Step file has KERNEL expanded inline instead of placeholder |
| Identity placeholder | `{{IDENTITY}}` | `${agent_persona}` | Different variable syntax |
| Halt schema | Includes `"options"` array | TBD | |
| Meta-products guidance | Table with 5 types | TBD | |

### [ ] User Prompt
**Status:** Needs review

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| Team format | Handlebars `{{#each team}}` | `${team_reference}` | Different templating syntax |
| Output requirements | Explicit persona/domain list | TBD | |

---

## Reflect

### [ ] System Prompt
**Status:** DISCREPANCIES FOUND

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| Kernel placeholder | `{{KERNEL}}` | Hardcoded inline | ❌ Step file expands KERNEL instead of using placeholder |
| Collab type field | **MISSING** in schema | Has `type` field | ❌ Aggregated schema missing `type` in collabs |
| Collab importance | `"minimum": 6, "maximum": 10` | `1-10` | ❌ Aggregated restricts to 6-10, step file allows 1-10 |
| Remarks type | `["question", "suggestion", "observation"]` | `["question", "suggestion", "observation", "note"]` | ❌ Aggregated missing "note" type |
| Identity | `{{IDENTITY}}` | `${agent_persona}` | Different variable syntax (intentional?) |
| Context requests | `{{remainingContextRequests}}` placeholder | `${context_requests_remaining}` | Different variable syntax |
| OUTPUT FORMAT section | Not present | Present with inline schema | Step file has additional OUTPUT FORMAT section |
| TypeScript schema | Not present | Present at end | Step file includes TypeScript interface reference |
| COLLAB IMPORTANCE SCALE | In common-system-parts | Inline at end | Duplicated content |

### [ ] User Prompt
**Status:** DISCREPANCIES FOUND

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| Template syntax | Handlebars `{{#each}}` | `${variable}` placeholders | Different templating systems |
| Mission section | `{{mission_summary}}` | `${mission_statement}` | Different variable names |
| Round marker | `{{current_round}}` | `${round_number}` | Different variable names |
| Product tree | Full JSON template | `${product_tree_json}` | Step file uses single variable |
| Feedback table | Explicit columns | Uses `${feedback_table}` | Step file abstracts structure |
| Team reference | `{{#each team}}` | `${team_reference}` | Different templating |
| VARIATIONS section | Not present | Present | ❌ Aggregated missing "With Requested Context" variation |
| EXPECTED OUTPUTS | Not present | Present | ❌ Aggregated missing example outputs section |
| PROCESSING NOTES | Not present | Present | ❌ Aggregated missing backend action notes |

---

## Plan & Assign

### [ ] System Prompt
**Status:** Needs review

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| Kernel | `{{KERNEL}}` | TBD | |
| bootstrap_overrides | Has `operatives` key | common-system-parts has `personas` + `operative_domains` | ❌ Key structure difference |
| tree_operations | Uses `new_id` for ADD | TBD | |
| remarks type | Only `observation, suggestion` | TBD | |

### [ ] User Prompt
**Status:** Needs review

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| Template syntax | Handlebars | TBD | |

---

## Write

### [ ] System Prompt
**Status:** Needs review

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| VERSION_SCHEMA | In common-system-parts | TBD | |
| Content templates | In common-system-parts | TBD | |

### [ ] User Prompt
**Status:** Needs review

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| DIRECTIVE_STRUCTURED | In common-user-parts | TBD | |
| ATTACHED_CONTEXT | In common-user-parts | TBD | |

---

## Peer Review

### [ ] System Prompt
**Status:** Needs review

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| Collab schema | In common-system-parts | TBD | |
| IMPORTANCE_SCALE | In common-system-parts | TBD | |

### [ ] User Prompt
**Status:** Needs review

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| Review product format | TBD | TBD | |

---

## Inspect

### [ ] System Prompt
**Status:** Needs review

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| INSPECTION_SCHEMA | In common-system-parts | TBD | |
| Assessment values | `approved, needs_revision, blocked` | TBD | |

### [ ] User Prompt
**Status:** Needs review

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| DoD criteria display | TBD | TBD | |

---

## Presentation

### [ ] System Prompt
**Status:** Needs review

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| Output schema | TBD | TBD | |

### [ ] User Prompt
**Status:** Needs review

| Aspect | Aggregated (Reference) | Step File | Discrepancy |
|--------|------------------------|-----------|-------------|
| Round summary format | TBD | TBD | |

---

## Critical Discrepancies Summary

### Schema Conflicts

1. **Collab importance range:** Aggregated says 6-10, step files allow 1-10
2. **Collab type field:** Missing in aggregated schema for Reflect
3. **Remarks "note" type:** Present in step file, missing in aggregated
4. **bootstrap_overrides structure:** Uses `operatives` key in aggregated but `personas` + `operative_domains` in common-system-parts

### Templating Conflicts

1. **Variable syntax:** `{{handlebars}}` in aggregated vs `${dollar}` in step files
2. **Variable names:** `mission_summary` vs `mission_statement`, `current_round` vs `round_number`

### Missing Content

1. Step files have VARIATIONS sections not in aggregated
2. Step files have EXPECTED OUTPUTS sections not in aggregated
3. Step files have PROCESSING NOTES sections not in aggregated

---

## Recommended Actions

1. **Decide on templating syntax:** Pick one (Handlebars or dollar-sign) and standardize
2. **Fix collab importance range:** Determine if 1-10 or 6-10 is correct
3. **Add missing collab type field** to aggregated Reflect schema
4. **Add "note" to remarks type** in aggregated or remove from step file
5. **Reconcile bootstrap_overrides** key structure
6. **Add missing sections** (VARIATIONS, EXPECTED OUTPUTS, PROCESSING NOTES) to aggregated docs
