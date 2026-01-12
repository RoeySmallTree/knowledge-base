# Prompt Building Checklist

**Legend:**
- `[ ]` Not started
- `[C]` Considered (design decision made)
- `[E]` Embedded (written in prompt file)
- `[I]` Implemented (backend supports it)
- `[T]` Tested (verified working)

---

# SYSTEM PROMPTS

## Common Components (reusable)

### Core
- [ ] KERNEL (absolute rules)
- [ ] REQUEST_CONTEXT_OPTION
- [ ] HALT_OPTION
- [ ] IDENTITY_TEMPLATE

### Schemas
- [ ] REQUEST_CONTEXT_SCHEMA
- [ ] HALT_SCHEMA
- [ ] COLLAB_SCHEMA
- [ ] REMARK_SCHEMA
- [ ] REFLECTION_SCHEMA
- [ ] VERSION_SCHEMA
- [ ] INSPECTION_SCHEMA
- [ ] TREE_OPERATIONS_SCHEMA
- [ ] ASSIGNMENT_SCHEMA
- [ ] CHAIR_VERSIONS_SCHEMA
- [ ] BOOTSTRAP_OVERRIDES_SCHEMA
- [ ] THINKING_SCHEMA

### Guidance
- [ ] COLLAB_VS_REMARK_GUIDANCE
- [ ] COLLAB_LIFECYCLE
- [ ] IMPORTANCE_SCALE
- [ ] COMMON_MISTAKES_TEMPLATE
- [ ] GROUNDING_CHECKS
- [ ] CONTENT_TEMPLATES_GUIDANCE
- [ ] DIRECTIVE_FORMAT_GUIDANCE
- [ ] META_PRODUCTS_GUIDANCE

---

## Bootstrap

### Components
- [ ] Step description
- [ ] Task list
- [ ] Checklist table
- [ ] Output options (halt / final_output)
- [ ] Full schema
- [ ] Meta-products guidance (→ common)
- [ ] Identity section
- [ ] Example output

### Things to Validate
- [ ] Personas generated for ALL team members
- [ ] Domains generated for operatives only (not chair/watchdog/envoy)
- [ ] Mission statement < 1000 chars
- [ ] Objectives < 500 chars
- [ ] Constraints < 300 chars (if provided)
- [ ] Initial products include Change Log
- [ ] Halt questions are actionable with clear options
- [ ] Missing details are questions, not statements

---

## Reflect

### Components
- [ ] Step description
- [ ] Task list
- [ ] Checklist table
- [ ] Output options (request_context / final_output)
- [ ] Full schema
- [ ] Collabs vs remarks guidance (→ common)
- [ ] Identity section
- [ ] Example output

### Things to Validate
- [ ] One reflection per owned product (no more, no less)
- [ ] DoD status accurately reflects content vs criteria
- [ ] All open collabs have feedback_response
- [ ] Accept/defer/reject decision is justified
- [ ] Planned_change present when action=accept
- [ ] Next_version_delta is specific and actionable
- [ ] Blockers are external, not self-solvable
- [ ] Collabs on OTHER products (not own)
- [ ] Self-notes use recipients=["self"]

---

## Plan & Assign

### Components
- [ ] Step description
- [ ] Task list
- [ ] Checklist table
- [ ] Output options (halt / final_output)
- [ ] Full schema
- [ ] Tree operations guidance
- [ ] Assignment directive format (→ common)
- [ ] Context attachments guidance
- [ ] Chair authoring guidance
- [ ] Bootstrap overrides guidance
- [ ] Identity section
- [ ] Example output

### Things to Validate
- [ ] Only accept products with DoD met AND no blocking collabs
- [ ] Assignments only to operatives (not chair/watchdog/envoy)
- [ ] Directive has all 4 fields: objective, dod, why, context
- [ ] Tree operations use correct action types
- [ ] ADD operations have new_id, parent_id, product
- [ ] REMOVE operations have reason
- [ ] Chair_versions only for meta/orchestration/decision products
- [ ] Chair_versions max 5 per round
- [ ] Bootstrap_overrides only include changed fields
- [ ] Halt.done only when mission truly complete

---

## Write

### Components
- [ ] Step description
- [ ] Task list
- [ ] Checklist table
- [ ] Output options (request_context / final_output)
- [ ] Full schema
- [ ] Content templates by type (→ common)
- [ ] Identity section
- [ ] Example output

### Things to Validate
- [ ] Content addresses all DoD criteria
- [ ] Content addresses all importance≥8 collabs
- [ ] Content follows product type template
- [ ] Change_summary reflects actual changes
- [ ] References use [[p:id]] syntax correctly
- [ ] Content min 50 chars
- [ ] Title < 200 chars
- [ ] Collabs are on attached/peer products, not own

---

## Peer Review

### Components
- [ ] Step description
- [ ] Task list
- [ ] Checklist table
- [ ] Output options (request_context / final_output)
- [ ] Full schema
- [ ] Importance scale (→ common)
- [ ] Identity section
- [ ] Example output

### Things to Validate
- [ ] Reviews products NOT owned by this agent
- [ ] Collabs have substantive comments (not "looks good")
- [ ] Importance reflects actual impact
- [ ] Low importance (1-3) used for minor observations
- [ ] High importance (8-10) used sparingly for blockers
- [ ] ShortestSummary ≤ 120 chars
- [ ] Type matches content (feedback vs question vs endorsement)

---

## Inspect

### Components
- [ ] Step description
- [ ] Task list
- [ ] Checklist table
- [ ] Output options (request_context / final_output)
- [ ] Full schema
- [ ] Assessment criteria guidance
- [ ] Severity scale
- [ ] Identity section
- [ ] Example output

### Things to Validate
- [ ] Assessment accurate to findings
- [ ] Approved only if no severity≥8 findings
- [ ] Blocked only for critical issues
- [ ] Findings have specific issue and recommendation
- [ ] DoD_criterion linked when applicable
- [ ] Categories used correctly (security, completeness, etc.)
- [ ] Version_id references specific version inspected

---

## Presentation

### Components
- [ ] Step description
- [ ] Task list
- [ ] Checklist table
- [ ] Output options
- [ ] Full schema
- [ ] Message guidelines
- [ ] Speaker rules
- [ ] Identity section
- [ ] Example output

### Things to Validate
- [ ] Message appropriate for user audience
- [ ] Tone matches project phase (early vs mature)
- [ ] Key accomplishments highlighted
- [ ] Blockers clearly communicated
- [ ] Next steps implied or stated
- [ ] Technical jargon minimized for non-technical users
- [ ] Length appropriate (not too long)

---

# USER PROMPTS

## Common Components (reusable)

### Context Blocks
- [ ] TEAM_FULL_ROSTER (Bootstrap)
- [ ] TEAM_CONTEXT (Plan & Assign, Presentation)
- [ ] TEAM_REFERENCE (other steps)
- [ ] MISSION_SUMMARY
- [ ] ROUND_MARKER
- [ ] PRODUCT_TREE_JSON
- [ ] PRODUCT_DETAIL_FULL
- [ ] PRODUCT_SUMMARY_TABLE

### Feedback & Collabs
- [ ] FEEDBACK_SORTED
- [ ] COLLAB_LIFECYCLE display

### Injections
- [ ] REQUESTED_CONTEXT_INJECTION
- [ ] ADDITIONAL_CONTEXT_RECEIVED
- [ ] ATTACHED_CONTEXT

### Step-Specific
- [ ] OPERATIVES_FOR_ASSIGNMENT
- [ ] REFLECTIONS_SUMMARY
- [ ] PRODUCTS_PENDING_REVIEW
- [ ] CHAIR_MAINTAINED_PRODUCTS
- [ ] DIRECTIVE_STRUCTURED

### Closing
- [ ] RETURN_JSON_ONLY

---

## Bootstrap

### Components
- [ ] User request section
- [ ] Uploaded files section
- [ ] Team roster (→ TEAM_FULL_ROSTER)
- [ ] Output requirements list
- [ ] End marker

### Things to Validate
- [ ] User request quoted verbatim
- [ ] Uploaded files listed with descriptions
- [ ] All team members present with correct attributes
- [ ] Output requirements match team composition

---

## Reflect

### Components
- [ ] Mission section (→ MISSION_SUMMARY)
- [ ] Round marker (→ ROUND_MARKER)
- [ ] Product tree (→ PRODUCT_TREE_JSON)
- [ ] Your products listing
- [ ] For each owned product:
  - [ ] Product detail (→ PRODUCT_DETAIL_FULL)
  - [ ] Version history
  - [ ] Current content
  - [ ] Feedback to address
  - [ ] Chair directive
- [ ] Peer products summary (→ PRODUCT_SUMMARY_TABLE)
- [ ] Remarks for you
- [ ] Team reference (→ TEAM_REFERENCE)
- [ ] Variations: With requested context

### Things to Validate
- [ ] Only owned products have full detail
- [ ] Version history complete and chronological
- [ ] Feedback sorted by importance
- [ ] All open collabs visible
- [ ] Remarks from others visible
- [ ] Self-notes from previous steps visible

---

## Plan & Assign

### Components
- [ ] Mission section (→ MISSION_SUMMARY)
- [ ] Round marker (→ ROUND_MARKER)
- [ ] Product tree with blocking_collabs
- [ ] Operative status (→ OPERATIVES_FOR_ASSIGNMENT)
- [ ] Reflections this round (→ REFLECTIONS_SUMMARY)
- [ ] Open collabs sorted (→ FEEDBACK_SORTED)
- [ ] Products pending review (→ PRODUCTS_PENDING_REVIEW)
- [ ] Chair-maintained products (→ CHAIR_MAINTAINED_PRODUCTS)
- [ ] Operatives for assignments

### Things to Validate
- [ ] Blocking_collabs count accurate per product
- [ ] Operative workload visible (product count)
- [ ] Reflections summarized accurately
- [ ] High-importance collabs highlighted
- [ ] Pending products show blocking reasons
- [ ] Chair products show last update round

---

## Write

### Components
- [ ] Mission section (→ MISSION_SUMMARY)
- [ ] Round marker (→ ROUND_MARKER)
- [ ] Product tree
- [ ] Your assignment section:
  - [ ] Product detail
  - [ ] Chair directive (→ DIRECTIVE_STRUCTURED)
  - [ ] Version history
  - [ ] Current content
  - [ ] Feedback to address
- [ ] Attached context (→ ATTACHED_CONTEXT)
- [ ] Other products summary
- [ ] Team reference (→ TEAM_REFERENCE)

### Things to Validate
- [ ] Directive has all 4 fields visible
- [ ] Attached context includes reason
- [ ] Attached content not truncated inappropriately
- [ ] Feedback sorted by importance
- [ ] Other products show enough for reference

---

## Peer Review

### Components
- [ ] Mission section (→ MISSION_SUMMARY)
- [ ] Round marker (→ ROUND_MARKER)
- [ ] Product tree
- [ ] Products to review:
  - [ ] Product detail (→ PRODUCT_DETAIL_FULL)
  - [ ] Current content
  - [ ] Existing collabs on product
- [ ] Team reference (→ TEAM_REFERENCE)

### Things to Validate
- [ ] Only non-owned products for review
- [ ] Full content visible (not truncated)
- [ ] Existing collabs show to avoid duplication
- [ ] DoD visible for assessment

---

## Inspect

### Components
- [ ] Mission section (→ MISSION_SUMMARY)
- [ ] Round marker (→ ROUND_MARKER)
- [ ] Products to inspect:
  - [ ] Product detail
  - [ ] DoD criteria (explicit)
  - [ ] Current content
  - [ ] Open collabs
  - [ ] Previous findings
- [ ] Team reference (→ TEAM_REFERENCE)

### Things to Validate
- [ ] DoD criteria listed explicitly (not just summary)
- [ ] Previous findings visible for follow-up
- [ ] Full content visible
- [ ] All open collabs visible

---

## Presentation

### Components
- [ ] Mission section (→ MISSION_SUMMARY)
- [ ] Round marker (→ ROUND_MARKER)
- [ ] Round summary sections:
  - [ ] Products updated
  - [ ] Products accepted
  - [ ] Key collabs
  - [ ] Blockers
- [ ] Team context (→ TEAM_CONTEXT)
- [ ] Audience (users)
- [ ] Tone guidance

### Things to Validate
- [ ] Summary accurate to round activity
- [ ] User names and roles visible
- [ ] Audience-appropriate context level

---

# DECISIONS TO MAKE

## Templating
- [ ] Decide: Handlebars `{{var}}` vs dollar-sign `${var}`
- [ ] Standardize variable names across all prompts

## Schema Alignment
- [ ] Collab importance range: 1-10 or 6-10?
- [ ] Remark types: include "note" or not?
- [ ] bootstrap_overrides structure: `operatives` vs `personas` + `operative_domains`

## Content Organization
- [ ] Where to keep KERNEL: inline or reference?
- [ ] Which common components actually get reused vs step-specific

---

# IMPLEMENTATION TRACKING

| Step | System Prompt | User Prompt | Backend | Tests |
|------|---------------|-------------|---------|-------|
| Bootstrap | [ ] | [ ] | [ ] | [ ] |
| Reflect | [ ] | [ ] | [ ] | [ ] |
| Plan & Assign | [ ] | [ ] | [ ] | [ ] |
| Write | [ ] | [ ] | [ ] | [ ] |
| Peer Review | [ ] | [ ] | [ ] | [ ] |
| Inspect | [ ] | [ ] | [ ] | [ ] |
| Presentation | [ ] | [ ] | [ ] | [ ] |
