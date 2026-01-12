# CABAL Common User Prompt Components

## Overview

This document contains reusable user prompt fragments that appear across multiple steps. Reference these by name when building dynamic prompts.

---

# TEAM_FULL_ROSTER

Complete team presentation for Bootstrap. Shows all members with their attributes.

─────────────────────────────────────────
## TEAM

You will design personas for this team:

{{#each agents}}
### {{name}} (`{{id}}`)

| Field | Value |
|-------|-------|
| Role | {{role}} |
| Team Role | {{team_role}} |
| Expertise | {{expertise}} |
{{/each}}

## USERS

Human collaborators in this session:

{{#each users}}
### {{name}} (`{{id}}`)

| Field | Value |
|-------|-------|
| Role | {{role}} |
| Context | {{context}} |
{{/each}}

Users can be referenced as [[u:user-1]], etc. in content.
- Receive halt messages and questions
- Provide mission input and clarifications  
- Final decision authority
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## TEAM

You will design personas for this team:

### Richard (`chair-1`)

| Field | Value |
|-------|-------|
| Role | chair |
| Team Role | Full-Stack Developer |
| Expertise | TypeScript, React, Node.js, PostgreSQL |

### Marco (`watchdog-1`)

| Field | Value |
|-------|-------|
| Role | watchdog |
| Team Role | Technical Specialist |
| Expertise | System architecture, Security, Code review |

### Alex (`operative-1`)

| Field | Value |
|-------|-------|
| Role | operative |
| Team Role | Full-Stack Developer |
| Expertise | TypeScript, React, Node.js |

### Jordan (`operative-2`)

| Field | Value |
|-------|-------|
| Role | operative |
| Team Role | Technical Specialist |
| Expertise | System architecture, Performance optimization |

## USERS

Human collaborators in this session:

### Sarah (`user-1`)

| Field | Value |
|-------|-------|
| Role | Product Owner |
| Context | Primary stakeholder, makes final feature decisions |

### Mike (`user-2`)

| Field | Value |
|-------|-------|
| Role | Technical Lead |
| Context | Provides technical constraints and review |

Users can be referenced as [[u:user-1]], etc. in content.
─────────────────────────────────────────

**Token count:** ~50 per agent, ~30 per user

**Used in:** Bootstrap

---

# TEAM_CONTEXT

Richer team context for non-Bootstrap steps. Shows roles and current focus.

─────────────────────────────────────────
## TEAM

{{#each agents}}
### {{name}} (`{{id}}`) — {{team_role}}
{{#if current_products}}**Owns:** {{current_products}}{{/if}}
{{#if focus}}**Focus:** {{focus}}{{/if}}
{{/each}}

## USERS

{{#each users}}
### {{name}} (`{{id}}`) — {{role}}
{{/each}}

Address questions to specific users via halt with `to` field.
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## TEAM

### Richard (`chair-1`) — Full-Stack Developer
**Focus:** Architecture decisions, integration quality

### Alex (`operative-1`) — Full-Stack Developer
**Owns:** p4 (Technical Architecture)
**Focus:** Frontend, API integration

### Jordan (`operative-2`) — Technical Specialist
**Owns:** p3 (MVP Features), p5 (Auth Spec)
**Focus:** Backend, authentication

## USERS

### Sarah (`user-1`) — Product Owner
### Mike (`user-2`) — Technical Lead

Address questions to specific users via halt with `to` field.
─────────────────────────────────────────

**Token count:** ~100 total

**Used in:** Plan & Assign, Presentation

---

# MISSION_SUMMARY

Compact mission statement for non-Bootstrap steps. Single paragraph, max 100 words.

─────────────────────────────────────────
## MISSION

> {{mission_summary}}
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## MISSION

> Build a TODO list web application MVP with task CRUD operations, secure JWT-based authentication, and responsive UI. Focus on rapid development within limited timeframe.
─────────────────────────────────────────

**Token count:** ~30-50

**Used in:** Reflect, Plan & Assign, Write, Peer Review, Inspect, Presentation

---

# ROUND_MARKER

Current round indicator.

─────────────────────────────────────────
---

## ROUND {{current_round}}

---
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
---

## ROUND 7

---
─────────────────────────────────────────

**Token count:** ~10

**Used in:** All steps except Bootstrap

---

# PRODUCT_TREE_JSON

Flat JSON array of all products with inline metadata.

─────────────────────────────────────────
## PRODUCT TREE

```json
{
  "products": [
    {{#each products}}
    {
      "id": "{{temp_id}}",
      "name": "{{name}}",
      "type": "{{type}}",
      "parent_id": {{#if parent_id}}"{{parent_id}}"{{else}}null{{/if}},
      "owner": {{#if owner}}"{{owner}}"{{else}}null{{/if}},
      "status": "{{status}}",
      "yours": {{yours}}
      {{#if version}},"version": {{version}}{{/if}}
      {{#if blocking_collabs}},"blocking_collabs": {{blocking_collabs}}{{/if}}
    }{{#unless @last}},{{/unless}}
    {{/each}}
  ]
}
```

{{#if owned_product_ids}}
Your products: {{owned_product_ids}}
{{/if}}
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## PRODUCT TREE

```json
{
  "products": [
    { "id": "p1", "name": "TODO List MVP", "type": "Orchestration", "parent_id": null, "owner": null, "status": "Pending", "yours": false },
    { "id": "p2", "name": "Change Log", "type": "Content", "parent_id": "p1", "owner": "chair-1", "status": "Pending", "yours": false, "version": 6 },
    { "id": "p3", "name": "MVP Features", "type": "Decision", "parent_id": "p1", "owner": "operative-2", "status": "Pending", "yours": true, "version": 4, "blocking_collabs": 2 }
  ]
}
```

Your products: p3
─────────────────────────────────────────

**Token count:** ~20 per product

**Used in:** Reflect, Plan & Assign, Write, Peer Review

---

# PRODUCT_DETAIL_FULL

Complete product context for owned/assigned products.

─────────────────────────────────────────
## {{marker}} PRODUCT: {{temp_id}} — {{name}}

**Type:** {{type}} | **Status:** {{status}}{{#if version}} | **Version:** {{version}}{{/if}}
**DoD:** {{dod}}

{{#if version_history}}
### VERSION HISTORY

| V | Author | Change |
|---|--------|--------|
{{#each version_history}}
| {{version}} | {{author}} | {{change_summary}} |
{{/each}}
{{/if}}

{{#if content}}
### CURRENT CONTENT (V{{version}})

{{content}}
{{/if}}

{{#if feedback}}
### FEEDBACK TO ADDRESS

| ID | From | Type | Imp | Summary |
|----|------|------|-----|---------|
{{#each feedback}}
| {{temp_id}} | {{author}} | {{type}} | {{importance}} | {{summary}} |
{{/each}}

{{#each feedback}}
**{{temp_id}}** — {{author}} ({{type}}, importance {{importance}})
> {{comment}}

{{/each}}
{{/if}}

{{#if directive}}
### CHAIR DIRECTIVE (Round {{directive_round}})

> {{directive}}
{{/if}}
─────────────────────────────────────────

**Marker options:**
- `YOUR` — For owned products
- `ASSIGNED` — For products in Write step
- `REVIEW` — For products in Peer Review step

**Example:**
─────────────────────────────────────────
## YOUR PRODUCT: p3 — MVP Features Selection

**Type:** Decision | **Status:** Pending | **Version:** 4
**DoD:** Define and prioritize core MVP features with rationale

### VERSION HISTORY

| V | Author | Change |
|---|--------|--------|
| 1 | Jordan | Initial core features list |
| 2 | Jordan | Added task tagging per Marco feedback |
| 3 | Jordan | Added auth requirements |
| 4 | Jordan | Added JWT implementation details |

### CURRENT CONTENT (V4)

# MVP Features Selection

## Core Features
1. **Task Creation** — Add tasks with title and description
2. **Task Editing** — Modify existing tasks
...

### FEEDBACK TO ADDRESS

**Marco** (8) — ID: c1
> Need more detail on session management and specific technologies.

**Alex** (7) — ID: c2
> Responsive UI should specify breakpoint strategy.

### CHAIR DIRECTIVE (Round 7)

> Finalize feature prioritization with clear auth requirements.
─────────────────────────────────────────

**Token count:** ~100-300 per product (varies by content)

**Used in:** Reflect, Write

---

# PRODUCT_SUMMARY_TABLE

Brief table of non-owned products.

─────────────────────────────────────────
## {{section_title}}

| ID | Name | Owner | Status | Latest Change |
|----|------|-------|--------|---------------|
{{#each products}}
| {{temp_id}} | {{name}} | {{owner}} | {{status}} | {{latest_change}} |
{{/each}}
─────────────────────────────────────────

**Section titles:**
- `PEER PRODUCTS (summaries)` — For Reflect
- `OTHER PRODUCTS (for reference)` — For Write

**Example:**
─────────────────────────────────────────
## PEER PRODUCTS (summaries)

| ID | Name | Owner | Status | Latest Change |
|----|------|-------|--------|---------------|
| p2 | Change Log | chair-1 | Pending | Round 6 updates |
| p4 | Technical Architecture | operative-1 | Pending | Added API error formats |
─────────────────────────────────────────

**Token count:** ~15 per product

**Used in:** Reflect, Write, Peer Review

---

# FEEDBACK_SORTED

Collabs sorted by importance with caps.

─────────────────────────────────────────
## OPEN COLLABS (sorted by importance)

### Must Address (importance ≥8)

| ID | From | Type | On Product | Imp | Summary |
|----|------|------|------------|-----|---------|
{{#each blocking_collabs}}
| {{temp_id}} | {{from}} | {{type}} | {{on_product_name}} | {{importance}} | {{summary}} |
{{/each}}

{{#if other_collabs}}
### Other ({{other_count}} shown, {{remaining_count}} more)

| ID | From | Type | On Product | Imp | Summary |
|----|------|------|------------|-----|---------|
{{#each other_collabs}}
| {{temp_id}} | {{from}} | {{type}} | {{on_product_name}} | {{importance}} | {{summary}} |
{{/each}}
{{/if}}
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## OPEN COLLABS (sorted by importance)

### Must Address (importance ≥8)

| ID | From | Type | On Product | Imp | Summary |
|----|------|------|------------|-----|---------|
| c1 | Marco | question | MVP Features | 8 | Need session management details |
| c3 | Marco | concern | Auth Spec | 8 | localStorage XSS vulnerability |
| c4 | Alex | Auth Spec | 8 | Missing token refresh |

### Other (3 shown, 12 more)

| ID | From | On Product | Imp | Summary |
|----|------|------------|-----|---------|
| c2 | Alex | MVP Features | 7 | Specify responsive breakpoints |
| c6 | Jordan | Tech Arch | 7 | Consider rate limiting |
─────────────────────────────────────────

**Token count:** ~20 per collab

**Used in:** Plan & Assign

---

# TEAM_REFERENCE

Minimal team ID mapping for steps where full context isn't needed.

─────────────────────────────────────────
## TEAM REFERENCE

### Agents
{{#each agents}}
- `{{id}}` → {{name}}{{#if role_note}} ({{role_note}}){{/if}}
{{/each}}

### Users
{{#each users}}
- `{{id}}` → {{name}}{{#if role}} ({{role}}){{/if}}
{{/each}}
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## TEAM REFERENCE

### Agents
- `chair-1` → Richard
- `watchdog-1` → Marco
- `operative-1` → Alex
- `operative-2` → Jordan (you)

### Users
- `user-1` → Sarah (Product Owner)
- `user-2` → Mike (Technical Lead)
─────────────────────────────────────────

**Token count:** ~50

**Used in:** Reflect, Write, Peer Review, Inspect

**When to use which:**
| Component | When | Token Cost |
|-----------|------|------------|
| TEAM_FULL_ROSTER | Bootstrap (creating personas) | ~280 |
| TEAM_CONTEXT | Plan & Assign, Presentation (need ownership info) | ~100 |
| TEAM_REFERENCE | Other steps (just need ID mapping) | ~50 |

---

# OPERATIVES_FOR_ASSIGNMENT

Operative details for Plan & Assign.

─────────────────────────────────────────
## OPERATIVES (for assignments)

{{#each operatives}}
### {{name}} ({{id}})
- **Responsibility:** {{responsibility}}
- **Area:** {{area}}
- **Products:** {{product_count}} total, {{pending_count}} pending
{{/each}}
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## OPERATIVES (for assignments)

### Alex (operative-1)
- **Responsibility:** Frontend implementation including React components
- **Area:** Frontend Development
- **Products:** 1 total, 1 pending

### Jordan (operative-2)
- **Responsibility:** Backend architecture including API design
- **Area:** Backend Development
- **Products:** 2 total, 2 pending
─────────────────────────────────────────

**Token count:** ~40 per operative

**Used in:** Plan & Assign

---

# DIRECTIVE_STRUCTURED

Structured directive format for Write step.

─────────────────────────────────────────
### CHAIR DIRECTIVE

> {{directive.objective}}

**DoD:** {{directive.dod}}
**Why:** {{directive.why}}
{{#if directive.context}}**Context:** {{directive.context}}{{/if}}
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
### CHAIR DIRECTIVE

> Add token refresh mechanism and address security concerns

**DoD:** Include refresh flow, session expiration handling, and security mitigations
**Why:** Critical for secure user sessions and frontend integration
**Context:** Addressing [[c:c3]] from Marco and [[c:c4]] from Alex
─────────────────────────────────────────

**Token count:** ~50

**Used in:** Write

---

# ATTACHED_CONTEXT

Products attached by Chair for additional context.

─────────────────────────────────────────
## ATTACHED CONTEXT (from Chair)

{{#each attached_products}}
### {{temp_id}}: {{name}}
**Reason:** {{reason}}

{{#if content}}
**Content:**
{{content}}
{{/if}}

{{#if feedback}}
**Feedback:**
{{#each feedback}}
- {{author}} ({{type}}, {{importance}}): {{summary}}
{{/each}}
{{/if}}

---

{{/each}}
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## ATTACHED CONTEXT (from Chair)

### p4: Technical Architecture
**Reason:** API error format for consistency

**Content:**
# Technical Architecture

## API Error Format
```json
{
  "success": false,
  "error": {
    "code": "ERR_001",
    "message": "Description"
  }
}
```

---
─────────────────────────────────────────

**Token count:** Variable (depends on attached content)

**Used in:** Write

---

# REFLECTIONS_SUMMARY

Summary of operative reflections for Plan & Assign.

─────────────────────────────────────────
## REFLECTIONS THIS ROUND

{{#each reflections}}
### {{agent_name}} on {{product_name}} ({{product_id}})

> {{summary}}

**DoD Status:** {{dod_status}}
**Next Action:** {{next_version_delta}}
{{#if blockers}}**Blockers:** {{blockers}}{{/if}}

{{/each}}
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## REFLECTIONS THIS ROUND

### Jordan on MVP Features (p3)

> Partially met. Feature list complete but auth details need expansion per Marco's feedback.

**DoD Status:** partially_met
**Next Action:** Add session management details and technology specifications

### Alex on Technical Architecture (p4)

> Partially met. API design complete but error format inconsistent with auth spec.

**DoD Status:** partially_met
**Next Action:** Align error response format with auth specification
─────────────────────────────────────────

**Token count:** ~50 per reflection

**Used in:** Plan & Assign

---

# PRODUCTS_PENDING_REVIEW

Products awaiting acceptance decision.

─────────────────────────────────────────
## PRODUCTS PENDING REVIEW

{{#each pending_products}}
### {{temp_id}}: {{name}}

- **Owner:** {{owner}}
- **DoD:** {{dod}}
- **Version:** {{version}}
- **Blocking Collabs:** {{blocking_count}}{{#if blocking_ids}} ({{blocking_ids}}){{/if}}

{{/each}}
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## PRODUCTS PENDING REVIEW

### p3: MVP Features Selection

- **Owner:** Jordan
- **DoD:** Define and prioritize core MVP features with rationale
- **Version:** 4
- **Blocking Collabs:** 2 (c1, c2)

### p5: Auth Specification

- **Owner:** Jordan
- **DoD:** Document authentication flow, token management, security
- **Version:** 2
- **Blocking Collabs:** 2 (c3, c4)
─────────────────────────────────────────

**Token count:** ~40 per product

**Used in:** Plan & Assign

---

# CHAIR_MAINTAINED_PRODUCTS

List of Chair-owned meta-products.

─────────────────────────────────────────
## CHAIR-MAINTAINED PRODUCTS

{{#each chair_products}}
- {{temp_id}}: {{name}} (last updated: Round {{last_round}})
{{/each}}
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## CHAIR-MAINTAINED PRODUCTS

- p2: Change Log (last updated: Round 6)
- p10: Resources (last updated: Round 4)
─────────────────────────────────────────

**Token count:** ~15 per product

**Used in:** Plan & Assign

---

# ADDITIONAL_CONTEXT_RECEIVED

For second call after context request.

─────────────────────────────────────────
## ADDITIONAL CONTEXT (as requested)

{{#each requested_context}}
### {{product_id}}: {{product_name}} — {{need_type}}

{{#if content}}
**Content:**
{{content}}
{{/if}}

{{#if version_history}}
**Version History:**
| V | Change |
|---|--------|
{{#each version_history}}
| {{version}} | {{change_summary}} |
{{/each}}
{{/if}}

{{#if all_feedback}}
**All Feedback:**
{{#each all_feedback}}
- {{author}} ({{type}}, {{importance}}): {{comment}}
{{/each}}
{{/if}}

---

{{/each}}

You now have the requested context. Provide your final output.
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## ADDITIONAL CONTEXT (as requested)

### p4: Technical Architecture — full_content

**Content:**
# Technical Architecture

## Database Schema
...

## API Endpoints
...

---

You now have the requested context. Provide your final output.
─────────────────────────────────────────

**Token count:** Variable

**Used in:** Reflect (second call), Write (second call)

---

# RETURN_JSON_ONLY

Final line for all user prompts.

─────────────────────────────────────────
---

Return JSON only.
─────────────────────────────────────────

**Token count:** ~5

**Used in:** All steps

---

# SESSION_HISTORY_COMPRESSED

Compressed history for long sessions.

─────────────────────────────────────────
## SESSION HISTORY (Compressed)

{{#each compressed_rounds}}
**Round {{round}}:** {{summary}}
- Decisions: {{decisions}}
- Unresolved: {{unresolved}}

{{/each}}
─────────────────────────────────────────

**Example:**
─────────────────────────────────────────
## SESSION HISTORY (Compressed)

**Round 3:** Chair assigned Auth Spec to Jordan. Marco raised security concerns.
- Decisions: Accepted "Technical Overview" (V2)
- Unresolved: "Token storage mechanism unclear"

**Round 4:** Jordan delivered Auth Spec V1. Alex flagged frontend integration gaps.
- Decisions: None
- Unresolved: "Missing token refresh flow"
─────────────────────────────────────────

**Token count:** ~40 per round

**Used in:** All steps (when round > 5)

---

# USER_RESPONSE_INJECTION

When users responded to a halt.

─────────────────────────────────────────
## USER RESPONSE

In the previous call, you asked {{asked_to}}:
> {{previous_question}}

{{#each responses}}
**{{user_name}}** (`{{user_id}}`):
> {{response}}

{{/each}}

Continue with this information.
─────────────────────────────────────────

**Example (single user):**
─────────────────────────────────────────
## USER RESPONSE

In the previous call, you asked user-1:
> Should we prioritize mobile or desktop for the MVP?

**Sarah** (`user-1`):
> Mobile-first, most users will access on phones

Continue with this information.
─────────────────────────────────────────

**Example (multiple users):**
─────────────────────────────────────────
## USER RESPONSE

In the previous call, you asked u:all:
> What's the target launch date?

**Sarah** (`user-1`):
> End of Q1, ideally March 15

**Mike** (`user-2`):
> Q1 is tight. Let's say March 31 to be safe.

Continue with this information.
─────────────────────────────────────────

**Token count:** ~50

**Used in:** Bootstrap (continuation), Plan & Assign (continuation)

---

# PRESENTATION_EVENTS

Round events for Presentation step.

─────────────────────────────────────────
## ROUND {{current_round}} EVENTS

### Versions Created
{{#each new_versions}}
- **{{product_name}}** V{{version}} by {{author}} — {{change_summary}}
{{/each}}

### Products Accepted
{{#each accepted}}
- ✅ **{{product_name}}** (V{{version}})
{{/each}}

### Key Feedback
{{#each key_feedback}}
- {{from}} → {{to_product}}: {{summary}}
{{/each}}

### Assignments Made
{{#each assignments}}
- **{{product_name}}** → {{assignee}}
{{/each}}

{{#if questions_for_user}}
### Questions for User
{{#each questions_for_user}}
- {{question}}
{{/each}}
{{/if}}

### Summary
- {{version_count}} new versions
- {{collab_count}} collabs posted
- {{accepted_count}} products accepted
─────────────────────────────────────────

**Token count:** Variable

**Used in:** Presentation

---

End of Common User Prompt Components.
