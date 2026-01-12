# System Prompt Segments

Analysis of modular segments that compose system prompts across steps.

---

## Segment Overview

| Segment | Description | Used In |
|---------|-------------|---------|
| KERNEL | Absolute rules (JSON, valid IDs, no guessing, etc.) | All 7 steps |
| STEP_DEFINITION | Step name and role description | All 7 steps |
| TASK | Numbered list of actions to perform | All 7 steps |
| CHECKLIST | Table of verification criteria | All 7 steps |
| OUTPUT_OPTIONS | Response type choices with examples | All 7 steps |
| SCHEMA | JSON schema definition | All 7 steps |
| IDENTITY | Agent persona placeholder | All 7 steps |
| META_PRODUCTS_GUIDANCE | Table of optional meta-products | Bootstrap only |
| COLLABS_VS_REMARKS | When to use each type | Reflect, Peer Review |
| DIRECTIVE_FORMAT | Assignment directive structure | Plan & Assign only |
| CONTEXT_ATTACHMENTS | How to attach products | Plan & Assign only |
| CHAIR_AUTHORING | Products chair can directly author | Plan & Assign only |
| BOOTSTRAP_OVERRIDES | How to modify session params | Plan & Assign only |
| CONTENT_TEMPLATES | Markdown templates by product type | Write only |
| FEEDBACK_FORMAT | Collab structure requirements | Peer Review only |
| IMPORTANCE_SCALE | Score meanings (6-10) | Peer Review, Inspect |
| FULL_TREE_ACCESS | Permission to comment on any product | Peer Review only |
| ASSESSMENT_CRITERIA | Approved/needs_revision/blocked meanings | Inspect only |
| SPEAKER_RULES | Who can appear in messages | Presentation only |

---

## Universal Segments (All Steps)

### KERNEL
**Description:** Core absolute rules that apply to every step. Never changes.
**Location:** [L17-L19](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L17-L19) (placeholder `{{KERNEL}}`)
**Content:**
- JSON only output
- Valid IDs only (products, versions, collabs, agents, users)
- No guessing/fabricating
- This step only
- Escape strings properly
- Reference syntax `[[type:id]]`

**Used in:** Bootstrap, Reflect, Plan & Assign, Write, Peer Review, Inspect, Presentation

---

### STEP_DEFINITION
**Description:** Step name and one-sentence role description.
**Pattern:** `## STEP: {NAME}` + description paragraph
**Examples:**
- Bootstrap [L20-L22](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L20-L22): "You are initializing a new CABAL session. Transform the user's request into a structured mission."
- Reflect [L232-L234](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L232-L234): "You are evaluating your owned products before the next work cycle."
- Plan & Assign [L432-L434](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L432-L434): "You are structuring work, accepting completed products, and assigning tasks."
- Write [L753-L755](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L753-L755): "You are creating content for your assigned products."
- Peer Review [L918-L920](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L918-L920): "You are reviewing another operative's work from your expertise perspective."
- Inspect [L1052-L1054](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1052-L1054): "You are the quality gate before products are finalized."
- Presentation [L1181-L1183](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1181-L1183): "You are translating the round's progress into natural team conversation."

**Used in:** All 7 steps

---

### TASK
**Description:** Numbered list of actions the agent must perform.
**Pattern:** `### TASK` + numbered list
**Examples:**
- Bootstrap [L24-L30](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L24-L30): 5 items (interpret, define mission, design personas, create meta-products, flag missing)
- Reflect [L236-L241](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L236-L241): 4 items (assess DoD, respond to feedback, identify improvement, surface blockers)
- Plan & Assign [L436-L443](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L436-L443): 6 items (assess tree, accept products, create/modify, assign, update meta, optionally halt)
- Write [L757-L761](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L757-L761): 3 items (create version, satisfy DoD, produce content)
- Peer Review [L922-L926](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L922-L926): 3 items (review, provide feedback, flag issues)
- Inspect [L1056-L1060](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1056-L1060): 3 items (verify DoD, check security/completeness/coherence, determine assessment)
- Presentation [L1185-L1191](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1185-L1191): 4-bullet (chair status, operative progress, cross-refs, user questions)

**Used in:** All 7 steps

---

### CHECKLIST
**Description:** Table of verification criteria the agent must satisfy.
**Pattern:** `### CHECKLIST` + markdown table with Check | Requirement columns
**Examples:**
- Bootstrap [L32-L42](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L32-L42): Mission, Objectives, Constraints, Personas, Domains, Meta-Products
- Reflect [L243-L251](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L243-L251): DoD Assessment, Feedback Response, History Review, Next Action, Blockers
- Plan & Assign [L445-L454](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L445-L454): Tree Coverage, Acceptance, Assignments, Directives, Attachments, Meta-Products
- Write [L763-L771](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L763-L771): DoD, Feedback, Directive, Format, References
- Peer Review [L928-L935](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L928-L935): DoD, Integration, Quality, Specificity
- Inspect [L1062-L1069](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1062-L1069): Security, Completeness, Coherence, Integration
- Presentation [L1193-L1200](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1193-L1200): Do/Don't table (different format)

**Used in:** All 7 steps

---

### OUTPUT_OPTIONS
**Description:** Shows available response_type choices with JSON examples.
**Pattern:** `### OUTPUT OPTIONS` or `### OUTPUT` + Option A/B examples
**Variants:**
- `halt` + `final_output`: Bootstrap [L44-L89](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L44-L89), Plan & Assign [L456-L484](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L456-L484)
- `request_context` + `final_output`: Reflect [L253-L273](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L253-L273), Write [L773-L790](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L773-L790)
- `final_output` only: Peer Review [L937-L944](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L937-L944), Inspect [L1071-L1079](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1071-L1079), Presentation [L1202-L1210](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1202-L1210)

**Used in:** All 7 steps

---

### SCHEMA
**Description:** Full JSON schema definition for output validation.
**Pattern:** `### SCHEMA` + JSON schema block
**Location by step:**
- Bootstrap [L91-L152](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L91-L152)
- Reflect [L275-L351](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L275-L351)
- Plan & Assign [L487-L624](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L487-L624)
- Write [L792-L838](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L792-L838)
- Peer Review [L947-L980](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L947-L980)
- Inspect [L1082-L1118](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1082-L1118)
- Presentation [L1213-L1235](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1213-L1235)

**Used in:** All 7 steps

---

### IDENTITY
**Description:** Placeholder for agent persona injection.
**Pattern:** `### IDENTITY` + `{{IDENTITY}}`
**Location by step:**
- Bootstrap [L165-L167](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L165-L167)
- Reflect [L367-L369](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L367-L369)
- Plan & Assign [L665-L667](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L665-L667)
- Write [L877-L879](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L877-L879)
- Peer Review [L1006-L1008](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1006-L1008)
- Inspect [L1129-L1131](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1129-L1131)
- Presentation [L1243-L1245](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1243-L1245)

**Used in:** All 7 steps

---

## Step-Specific Segments

### META_PRODUCTS_GUIDANCE
**Description:** Table of optional meta-products (Change Log, Resources, Ruleset, etc.)
**Location:** Bootstrap [L154-L164](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L154-L164)
**Content:** 5-row table: Change Log, Resources, Ruleset, Calculation Ruleset, Narrative

**Used in:** Bootstrap only

---

### COLLABS_VS_REMARKS
**Description:** Distinction between product-targeted collabs and recipient-targeted remarks.
**Location:** Reflect [L354-L365](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L354-L365)
**Content:** 
- Collab: targets product_id (feedback, flag issues, request input)
- Remark: targets recipients (questions for chair, process suggestions)

**Used in:** Reflect, Peer Review (implicitly via schema)

---

### DIRECTIVE_FORMAT
**Description:** Structure requirements for assignment directives.
**Location:** Plan & Assign [L627-L633](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L627-L633)
**Content:** Must include objective, dod, why, context

**Used in:** Plan & Assign only

---

### CONTEXT_ATTACHMENTS
**Description:** How to attach products to assignments.
**Location:** Plan & Assign [L635-L642](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L635-L642)
**Content:** `attach_context` array with product_id, include, reason

**Used in:** Plan & Assign only

---

### CHAIR_AUTHORING
**Description:** Which products chair can directly author.
**Location:** Plan & Assign [L644-L651](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L644-L651)
**Content:** Orchestration, unassigned Decision, meta-products; via `chair_versions`, max 5/round

**Used in:** Plan & Assign only

---

### BOOTSTRAP_OVERRIDES
**Description:** How to modify session parameters mid-session.
**Location:** Plan & Assign [L653-L663](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L653-L663)
**Content:** Can update mission, objectives, constraints, operative responsibilities

**Used in:** Plan & Assign only

---

### CONTENT_TEMPLATES
**Description:** Markdown templates for different product types.
**Location:** Write [L841-L875](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L841-L875)
**Content:** Templates for Content Product and Decision Product

**Used in:** Write only

---

### FEEDBACK_FORMAT
**Description:** Required elements for collab comments.
**Location:** Peer Review [L983-L988](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L983-L988)
**Content:** What's wrong, Why it matters, Suggested fix

**Used in:** Peer Review only

---

### IMPORTANCE_SCALE
**Description:** Score meanings for collab importance.
**Location:** Peer Review [L990-L998](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L990-L998)
**Content:** 10=Critical blocker, 8-9=Major, 6-7=Notable; don't flag <6

**Used in:** Peer Review, Inspect (similar scale for severity)

---

### FULL_TREE_ACCESS
**Description:** Permission to comment on products beyond assignment.
**Location:** Peer Review [L1000-L1004](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1000-L1004)
**Content:** Assigned=full review, Other=flag significant only

**Used in:** Peer Review only

---

### ASSESSMENT_CRITERIA
**Description:** Meanings of assessment values.
**Location:** Inspect [L1121-L1127](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1121-L1127)
**Content:** approved (DoD met, no severity≥8), needs_revision (minor), blocked (critical)

**Used in:** Inspect only

---

### SPEAKER_RULES
**Description:** Who can appear as message speakers.
**Location:** Presentation [L1238-L1241](file:///Users/roeyki/workspace/ai-suite/projects/CABAL/algorithm/prompting/system-prompts__v1.md#L1238-L1241)
**Content:** Allowed=chair-1, operative-1/2/...; Never=watchdog, envoy

**Used in:** Presentation only

---

## Segment Usage Matrix

| Segment | Boot | Refl | P&A | Write | PR | Insp | Pres |
|---------|------|------|-----|-------|-----|------|------|
| KERNEL | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| STEP_DEFINITION | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| TASK | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| CHECKLIST | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| OUTPUT_OPTIONS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| SCHEMA | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| IDENTITY | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| META_PRODUCTS_GUIDANCE | ✓ | | | | | | |
| COLLABS_VS_REMARKS | | ✓ | | | ✓ | | |
| DIRECTIVE_FORMAT | | | ✓ | | | | |
| CONTEXT_ATTACHMENTS | | | ✓ | | | | |
| CHAIR_AUTHORING | | | ✓ | | | | |
| BOOTSTRAP_OVERRIDES | | | ✓ | | | | |
| CONTENT_TEMPLATES | | | | ✓ | | | |
| FEEDBACK_FORMAT | | | | | ✓ | | |
| IMPORTANCE_SCALE | | | | | ✓ | ✓ | |
| FULL_TREE_ACCESS | | | | | ✓ | | |
| ASSESSMENT_CRITERIA | | | | | | ✓ | |
| SPEAKER_RULES | | | | | | | ✓ |

---

## Response Type Capabilities

| Step | halt | request_context | final_output |
|------|------|-----------------|--------------|
| Bootstrap | ✓ (question) | | ✓ |
| Reflect | | ✓ | ✓ |
| Plan & Assign | ✓ (question, done) | | ✓ |
| Write | | ✓ | ✓ |
| Peer Review | | | ✓ |
| Inspect | | | ✓ |
| Presentation | | | ✓ |

---

## Schema Output Fields by Step

| Step | Primary Output | Secondary Outputs |
|------|----------------|-------------------|
| Bootstrap | mission, objectives, personas, operative_domains, initial_products | thinking, constraints, missing_details |
| Reflect | reflections | collabs, remarks |
| Plan & Assign | tree_operations, assignments, acceptance | thinking, chair_versions, bootstrap_overrides, remarks |
| Write | versions | collabs |
| Peer Review | collabs | remarks |
| Inspect | inspections | collabs, remarks |
| Presentation | messages | |
