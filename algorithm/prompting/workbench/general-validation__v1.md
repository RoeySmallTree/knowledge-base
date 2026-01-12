# General Validation

Cross-cutting validations for the CABAL prompting system.

**Legend:**
- `[ ]` Not validated
- `[P]` Passed
- `[F]` Failed (needs fix)
- `[S]` Skipped (N/A)

---

# SCHEMA VALIDATION

## JSON Structure
- [ ] All prompts produce valid JSON (no trailing commas)
- [ ] Nested objects properly escaped
- [ ] String fields handle special characters (quotes, newlines)
- [ ] Array fields never return strings
- [ ] Empty arrays `[]` vs null handling consistent
- [ ] Schemas rendered in TypeScript format (not JSON Schema)

## OpenRouter Call Configuration
- [ ] Caching enabled in OpenRouter API calls
- [ ] Thinking/reasoning mode enabled in OpenRouter calls

## ID References
- [ ] Product IDs (`p1`, `p2`) always valid from tree
- [ ] Version IDs (`v1`, `v2`) always valid from history
- [ ] Collab IDs (`c1`, `c2`) always valid from feedback lists
- [ ] Agent IDs (`chair-1`, `operative-1`) always valid from team
- [ ] User IDs (`user-1`, `user-2`) always valid from user list
- [ ] `[[type:id]]` syntax parsed correctly

## Type Constraints
- [ ] Importance values within range (decide: 1-10 or 6-10)
- [ ] Enum values match schema exactly
- [ ] MaxLength constraints enforced (`shortestSummary` ≤120)
- [ ] MaxItems constraints enforced (`context_requests` max 5)

---

# FLOW VALIDATION

## Request-Response Cycle
- [ ] `request_context` triggers context injection
- [ ] `remainingContextRequests` decrements correctly (3→2→1→0)
- [ ] Final iteration forces `final_output`
- [ ] `halt` pauses session for user input
- [ ] `halt.done` properly ends session

## Step Sequencing
- [ ] Bootstrap → Plan & Assign flow
- [ ] Reflect → Plan & Assign → Write/Peer Review/Inspect cycle
- [ ] Presentation triggered at correct phase
- [ ] Steps cannot do other steps' work

## Context Propagation
- [ ] Collabs visible to product owner in next round
- [ ] Remarks persist for 1 round after creation
- [ ] Self-notes available within same round
- [ ] Version history accumulates correctly
- [ ] Feedback responses mark collabs as addressed

---

# BACKEND INTEGRATION

## Variable Injection
- [ ] `{{agent_id}}` / `${agent_id}` resolved correctly
- [ ] `{{step_name}}` / `${step_name}` resolved correctly
- [ ] `{{remainingContextRequests}}` / `${context_requests_remaining}` resolved
- [ ] Product tree JSON generated correctly
- [ ] Feedback tables generated correctly
- [ ] Team reference generated correctly

## Output Parsing
- [ ] `response_type` field detected
- [ ] All schema fields extracted
- [ ] Collabs stored with author, round, importance
- [ ] Remarks routed to correct recipients
- [ ] Tree operations applied atomically
- [ ] Assignments created with full directive

## Error Handling
- [ ] Invalid JSON returns actionable error
- [ ] Missing required fields flagged
- [ ] Invalid IDs rejected with helpful message
- [ ] Schema validation errors clear

---

# LLM BEHAVIOR

## Instruction Following
- [ ] JSON-only output (no markdown fences, no commentary)
- [ ] No hallucinated IDs
- [ ] No work outside current step
- [ ] Escape strings properly

## Output Quality
- [ ] Collabs have meaningful comments (not generic)
- [ ] Reflections address DoD specifically
- [ ] Directives include objective, dod, why, context
- [ ] Content meets product type expectations

## Edge Cases
- [ ] Empty product tree handling
- [ ] No feedback to address handling
- [ ] No owned products handling
- [ ] Single vs multiple owned products
- [ ] First round vs subsequent rounds

---

# TOKEN EFFICIENCY

## Prompt Size
- [ ] Kernel stays under ~170 tokens
- [ ] Common components at documented sizes
- [ ] Product tree doesn't explode with large trees
- [ ] Feedback capping works (show top N, summarize rest)
- [ ] Content truncation works for large products

## Response Size
- [ ] Versions don't exceed reasonable length
- [ ] Change summaries are concise
- [ ] Comments are substantive but not verbose

---

# SECURITY

## Input Sanitization
- [ ] User prompts can't inject instructions
- [ ] Product content can't break JSON structure
- [ ] Collab comments can't inject commands

## Output Safety
- [ ] No PII leakage between users
- [ ] No cross-session data leakage
- [ ] Halt messages appropriate for users

---

# CONSISTENCY

## Cross-Step
- [ ] Same collab schema across all steps that use it
- [ ] Same remark schema across all steps that use it
- [ ] Same ID patterns everywhere
- [ ] Same reference syntax `[[type:id]]` everywhere

## Templating
- [ ] Single templating syntax chosen (Handlebars or dollar-sign)
- [ ] Variable names consistent across steps
- [ ] Common components extracted and reused

---

# TEST SCENARIOS

## Happy Path
- [ ] Full session: Bootstrap → Plan → Write → Review → Inspect → Present
- [ ] Multi-round iteration on single product
- [ ] Multiple operatives working in parallel
- [ ] Product acceptance flow

## Error Paths  
- [ ] Missing context triggers request_context
- [ ] Blocking collab prevents acceptance
- [ ] Blocker surfaces correctly
- [ ] Halt for user question works

## Edge Cases
- [ ] Empty session (no products yet)
- [ ] Single product session
- [ ] Many products (tree scaling)
- [ ] Many collabs (feedback capping)
- [ ] Long content (truncation)
