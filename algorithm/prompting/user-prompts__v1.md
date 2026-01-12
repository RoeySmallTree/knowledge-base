# CABAL User Prompts: Context Templates by Step

## Document Structure

For each step:
1. Complete user prompt template
2. Context structure definition
3. Example with real data
4. Key differences from original

---

# BOOTSTRAP

## User Prompt Template

─────────────────────────────────────────
## USER REQUEST

> {{user_raw_prompt}}

{{#if uploaded_files}}
## UPLOADED FILES

{{#each uploaded_files}}
- {{filename}}: {{description}}
{{/each}}
{{/if}}

---

## TEAM

You will design personas for this team:

{{#each team}}
### {{name}} ({{id}})

| Field | Value |
|-------|-------|
| Role | {{role}} |
| Team Role | {{team_role}} |
| Expertise | {{expertise}} |
{{/each}}

---

## OUTPUT REQUIREMENTS

**Personas needed** (for each team member):
{{#each team}}
- `{{id}}`: persona for {{name}}
{{/each}}

**Domains needed** (for operatives only):
{{#each operatives}}
- `{{id}}`: responsibility and area for {{name}}
{{/each}}

---

Return JSON only.
─────────────────────────────────────────

## Example User Prompt

─────────────────────────────────────────
## USER REQUEST

> Build a simple TODO list web application MVP. The application should allow users to: Add new tasks with a title and optional description, Mark tasks as complete/incomplete, Delete tasks, View all tasks in a clean interface. Focus on delivering a working MVP with core functionality first.

---

## TEAM

You will design personas for this team:

### Richard (chair-1)

| Field | Value |
|-------|-------|
| Role | chair |
| Team Role | Full-Stack Developer |
| Expertise | TypeScript, React, Node.js, PostgreSQL |

### Marco (watchdog-1)

| Field | Value |
|-------|-------|
| Role | watchdog |
| Team Role | Technical Specialist |
| Expertise | System architecture, Security, Code review |

### Stacy (envoy-1)

| Field | Value |
|-------|-------|
| Role | envoy |
| Team Role | Product Strategist |
| Expertise | Product strategy, UX design, Stakeholder communication |

### Alex (operative-1)

| Field | Value |
|-------|-------|
| Role | operative |
| Team Role | Full-Stack Developer |
| Expertise | TypeScript, React, Node.js |

### Jordan (operative-2)

| Field | Value |
|-------|-------|
| Role | operative |
| Team Role | Technical Specialist |
| Expertise | System architecture, Performance optimization |

---

## OUTPUT REQUIREMENTS

**Personas needed**:
- `chair-1`: persona for Richard
- `watchdog-1`: persona for Marco
- `envoy-1`: persona for Stacy
- `operative-1`: persona for Alex
- `operative-2`: persona for Jordan

**Domains needed**:
- `operative-1`: responsibility and area for Alex
- `operative-2`: responsibility and area for Jordan

---

Return JSON only.
─────────────────────────────────────────

## Key Differences from Original

| Aspect | Original | New |
|--------|----------|-----|
| Team format | Prose descriptions | Structured tables |
| Instructions | Mixed with system | Clean separation |
| Output spec | Verbose | Minimal list |
| Ending | Long FORMAT GUARANTEE | Single line |

---

# REFLECT

## User Prompt Template

─────────────────────────────────────────
## MISSION

> {{mission_summary}}

---

## ROUND {{current_round}}

---

## PRODUCT TREE

```json
{
  "products": [
    {{#each products}}
    { "id": "{{temp_id}}", "name": "{{name}}", "type": "{{type}}", "parent_id": {{parent_id}}, "owner": {{owner}}, "status": "{{status}}", "yours": {{yours}}{{#if version}}, "version": {{version}}{{/if}} }{{#unless @last}},{{/unless}}
    {{/each}}
  ]
}
```

Your products: {{owned_product_ids}}

---

{{#each owned_products}}
## YOUR PRODUCT: {{temp_id}} — {{name}}

**Type:** {{type}} | **Status:** {{status}} | **Version:** {{version}}
**DoD:** {{dod}}

### VERSION HISTORY

| V | Author | Change |
|---|--------|--------|
{{#each version_history}}
| {{version}} | {{author}} | {{change_summary}} |
{{/each}}

### CURRENT CONTENT (V{{version}})

{{content}}

### FEEDBACK TO ADDRESS

{{#if feedback}}
| ID | From | Type | Imp | Summary |
|----|------|------|-----|---------|
{{#each feedback}}
| {{temp_id}} | {{author}} | {{type}} | {{importance}} | {{summary}} |
{{/each}}

{{#each feedback}}
**{{temp_id}}** — {{author}} ({{type}}, importance {{importance}})
> {{comment}}

{{/each}}
{{else}}
No open feedback.
{{/if}}

{{#if directive}}
### CHAIR DIRECTIVE (Round {{directive_round}})

> {{directive}}
{{/if}}

---

{{/each}}

## PEER PRODUCTS (summaries)

| ID | Name | Owner | Status | Latest Change |
|----|------|-------|--------|---------------|
{{#each peer_products}}
| {{temp_id}} | {{name}} | {{owner}} | {{status}} | {{latest_change}} |
{{/each}}

---

## TEAM REFERENCE

{{#each team}}
- `{{id}}` → {{name}}
{{/each}}

---

Return JSON only.
─────────────────────────────────────────

## Example User Prompt

─────────────────────────────────────────
## MISSION

> Build a TODO list web application MVP with task CRUD operations, secure authentication, and responsive UI.

---

## ROUND 7

---

## PRODUCT TREE

```json
{
  "products": [
    { "id": "p1", "name": "TODO List MVP", "type": "Orchestration", "parent_id": null, "owner": null, "status": "Pending", "yours": false },
    { "id": "p2", "name": "Change Log", "type": "Content", "parent_id": "p1", "owner": "chair-1", "status": "Pending", "yours": false, "version": 6 },
    { "id": "p3", "name": "MVP Features Selection", "type": "Decision", "parent_id": "p1", "owner": "operative-2", "status": "Pending", "yours": true, "version": 4 },
    { "id": "p4", "name": "Technical Architecture", "type": "Content", "parent_id": "p1", "owner": "operative-1", "status": "Pending", "yours": false, "version": 4 },
    { "id": "p5", "name": "Auth Specification", "type": "Content", "parent_id": "p1", "owner": "operative-2", "status": "Pending", "yours": true, "version": 2 }
  ]
}
```

Your products: p3, p5

---

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
3. **Task Deletion** — Remove tasks
4. **Task Status** — Mark complete/incomplete
5. **Task Tagging** — Categorize with tags
6. **User Auth** — JWT-based authentication
7. **Responsive UI** — Mobile and desktop

## Rationale
Features address core task management needs within timeline constraints.

### FEEDBACK TO ADDRESS

**Marco** (8) — ID: c1
> Need more detail on session management and specific technologies for authentication.

**Alex** (7) — ID: c2
> Responsive UI should specify breakpoint strategy and mobile-first vs desktop-first.

### CHAIR DIRECTIVE (Round 7)

> Finalize feature prioritization with clear auth requirements. Address Marco's session management concerns.

---

## YOUR PRODUCT: p5 — Auth Specification

**Type:** Content | **Status:** Pending | **Version:** 2
**DoD:** Document authentication flow, token management, and security measures

### VERSION HISTORY

| V | Author | Change |
|---|--------|--------|
| 1 | Jordan | Initial auth flow outline |
| 2 | Jordan | Added JWT details and token storage |

### CURRENT CONTENT (V2)

# Authentication Specification

## Flow
1. User submits credentials
2. Backend validates, returns JWT
3. Frontend stores in localStorage
4. JWT included in subsequent requests

## Token Details
- JWT expiry: 1 hour
- Contains: user_id, email, exp

### FEEDBACK TO ADDRESS

**Marco** (8) — ID: c3
> localStorage is XSS-vulnerable. Consider httpOnly cookies or document mitigations.

**Alex** (8) — ID: c4
> Missing token refresh mechanism. What happens when JWT expires?

### CHAIR DIRECTIVE (Round 7)

> Add token refresh flow and address security concerns from Marco.

---

## PEER PRODUCTS (summaries)

| ID | Name | Owner | Status | Latest Change |
|----|------|-------|--------|---------------|
| p2 | Change Log | chair-1 | Pending | Round 6 updates |
| p4 | Technical Architecture | operative-1 | Pending | Added API error formats |

---

## TEAM REFERENCE

- `chair-1` → Richard
- `watchdog-1` → Marco
- `envoy-1` → Stacy
- `operative-1` → Alex
- `operative-2` → Jordan (you)

---

Return JSON only.
─────────────────────────────────────────

## Key Differences from Original

| Aspect | Original | New |
|--------|----------|-----|
| Product tree | ASCII art or prose | JSON array |
| IDs | Full UUIDs | Temp IDs (p1, p2, c1) |
| Peer products | Full content | Summary table |
| Collabs | All 59 dumped | Only on owned products |
| History | Not shown | Table per product |
| Team | Full roster | ID reference only |

---

# PLAN & ASSIGN

## User Prompt Template

─────────────────────────────────────────
## MISSION

> {{mission_summary}}

---

## ROUND {{current_round}}

---

## PRODUCT TREE

```json
{
  "products": [
    {{#each products}}
    { "id": "{{temp_id}}", "name": "{{name}}", "type": "{{type}}", "parent_id": {{parent_id}}, "owner": {{owner}}, "status": "{{status}}"{{#if version}}, "version": {{version}}{{/if}}{{#if blocking_collabs}}, "blocking_collabs": {{blocking_collabs}}{{/if}} }{{#unless @last}},{{/unless}}
    {{/each}}
  ]
}
```

---

## OPERATIVE STATUS

{{#each operatives}}
### {{name}} ({{id}})
- **Responsibility:** {{responsibility}}
- **Area:** {{area}}
- **Products:** {{product_count}} total, {{pending_count}} pending
{{/each}}

---

## REFLECTIONS THIS ROUND

{{#each reflections}}
### {{agent_name}} on {{product_name}}

> {{reflection_summary}}

**DoD Status:** {{dod_status}}
**Next Action:** {{next_version_delta}}
{{#if blockers}}**Blockers:** {{blockers}}{{/if}}

{{/each}}

---

## OPEN COLLABS (sorted by importance)

### Must Address (importance ≥8)

| ID | From | Type | Product | Imp | Summary |
|----|------|------|---------|-----|---------|
{{#each blocking_collabs}}
| {{temp_id}} | {{from}} | {{type}} | {{on_product}} | {{importance}} | {{summary}} |
{{/each}}

### Other ({{other_collab_count}} more)

| ID | From | Type | Product | Imp | Summary |
|----|------|------|---------|-----|---------|
{{#each other_collabs}}
| {{temp_id}} | {{from}} | {{type}} | {{on_product}} | {{importance}} | {{summary}} |
{{/each}}

---

## PRODUCTS PENDING REVIEW

{{#each pending_products}}
### {{temp_id}}: {{name}}

- **Owner:** {{owner}}
- **DoD:** {{dod}}
- **Version:** {{version}}
- **Blocking Collabs:** {{blocking_count}}
{{/each}}

---

## CHAIR-MAINTAINED PRODUCTS

{{#each chair_products}}
- {{temp_id}}: {{name}} (last updated: Round {{last_round}})
{{/each}}

---

## OPERATIVES (for assignments)

{{#each operatives}}
- `{{id}}` → {{name}} ({{area}})
{{/each}}

---

Return JSON only.
─────────────────────────────────────────

## Example User Prompt

─────────────────────────────────────────
## MISSION

> Build a TODO list web application MVP with task CRUD operations, secure authentication, and responsive UI.

---

## ROUND 7

---

## PRODUCT TREE

```json
{
  "products": [
    { "id": "p1", "name": "TODO List MVP", "type": "Orchestration", "parent_id": null, "owner": null, "status": "Pending" },
    { "id": "p2", "name": "Change Log", "type": "Content", "parent_id": "p1", "owner": "chair-1", "status": "Pending", "version": 6 },
    { "id": "p3", "name": "MVP Features Selection", "type": "Decision", "parent_id": "p1", "owner": "operative-2", "status": "Pending", "version": 4, "blocking_collabs": 2 },
    { "id": "p4", "name": "Technical Architecture", "type": "Content", "parent_id": "p1", "owner": "operative-1", "status": "Pending", "version": 4, "blocking_collabs": 1 },
    { "id": "p5", "name": "Auth Specification", "type": "Content", "parent_id": "p1", "owner": "operative-2", "status": "Pending", "version": 2, "blocking_collabs": 2 }
  ]
}
```

---

## OPERATIVE STATUS

### Alex (operative-1)
- **Responsibility:** Frontend implementation including React components and responsive layouts
- **Area:** Frontend Development
- **Products:** 1 total, 1 pending

### Jordan (operative-2)
- **Responsibility:** Backend architecture including API design and authentication
- **Area:** Backend Development
- **Products:** 2 total, 2 pending

---

## REFLECTIONS THIS ROUND

### Jordan on MVP Features Selection (p3)

> Partially met. Feature list complete but auth details need expansion per Marco's feedback.

**DoD Status:** partially_met
**Next Action:** Add session management details and technology specifications

### Jordan on Auth Specification (p5)

> Partially met. Basic flow documented but missing token refresh and security considerations.

**DoD Status:** partially_met
**Next Action:** Add token refresh mechanism, address localStorage XSS concerns

### Alex on Technical Architecture (p4)

> Partially met. API design complete but error format inconsistent with auth spec.

**DoD Status:** partially_met
**Next Action:** Align error response format with auth specification

---

## OPEN COLLABS (sorted by importance)

### Must Address (importance ≥8)

| ID | From | On | Imp | Summary |
|----|------|----|-----|---------|
| c1 | Marco | p3 | 8 | Need session management details |
| c3 | Marco | p5 | 8 | localStorage XSS vulnerability |
| c4 | Alex | p5 | 8 | Missing token refresh mechanism |
| c5 | Marco | p4 | 8 | Inconsistent error format |

### Other (3 more)

| ID | From | On | Imp | Summary |
|----|------|----|-----|---------|
| c2 | Alex | p3 | 7 | Specify responsive breakpoints |
| c6 | Jordan | p4 | 7 | Consider API rate limiting |

---

## PRODUCTS PENDING REVIEW

### p3: MVP Features Selection

- **Owner:** Jordan
- **DoD:** Define and prioritize core MVP features with rationale
- **Version:** 4
- **Blocking Collabs:** 2 (c1, c2)

### p4: Technical Architecture

- **Owner:** Alex
- **DoD:** Document database schema, API design, tech stack decisions
- **Version:** 4
- **Blocking Collabs:** 1 (c5)

### p5: Auth Specification

- **Owner:** Jordan
- **DoD:** Document authentication flow, token management, security measures
- **Version:** 2
- **Blocking Collabs:** 2 (c3, c4)

---

## CHAIR-MAINTAINED PRODUCTS

- p2: Change Log (last updated: Round 6)

---

## OPERATIVES (for assignments)

- `operative-1` → Alex (Frontend Development)
- `operative-2` → Jordan (Backend Development)

---

Return JSON only.
─────────────────────────────────────────

## Key Differences from Original

| Aspect | Original | New |
|--------|----------|-----|
| Collabs | 59 items dumped | Sorted, capped, summarized |
| Product tree | Nested ASCII | Flat JSON with blocking counts |
| Reflections | Full prose | Structured summaries |
| Team | Full roster | Operatives only for assignments |
| Chair products | Not highlighted | Explicit section |

---

# WRITE

## User Prompt Template

─────────────────────────────────────────
## MISSION

> {{mission_summary}}

---

## ROUND {{current_round}}

---

## PRODUCT TREE

```json
{
  "products": [{{products_json}}]
}
```

---

## YOUR ASSIGNMENT: {{product_temp_id}} — {{product_name}}

**Type:** {{product_type}} | **Status:** {{status}} | **Version:** {{version}}
**DoD:** {{dod}}

### CHAIR DIRECTIVE

> {{directive.objective}}

**DoD:** {{directive.dod}}
**Why:** {{directive.why}}
**Context:** {{directive.context}}

### VERSION HISTORY

| V | Author | Change |
|---|--------|--------|
{{#each version_history}}
| {{version}} | {{author}} | {{change_summary}} |
{{/each}}

### CURRENT CONTENT (V{{version}})

{{current_content}}

### FEEDBACK TO ADDRESS (importance ≥8 first)

| ID | From | Type | Imp | Summary |
|----|------|------|-----|---------|
{{#each feedback}}
| {{temp_id}} | {{author}} | {{type}} | {{importance}} | {{summary}} |
{{/each}}

{{#each feedback}}
**{{temp_id}}** — {{author}} ({{type}}, importance {{importance}})
> {{comment}}

{{/each}}

---

{{#if attached_context}}
## ATTACHED CONTEXT (from Chair)

{{#each attached_context}}
### {{product_temp_id}}: {{product_name}}
**Reason:** {{reason}}

{{#if include_content}}
**Content:**
{{content}}
{{/if}}

{{#if include_feedback}}
**Feedback:**
{{#each feedback}}
- {{author}} ({{type}}, {{importance}}): {{summary}}
{{/each}}
{{/if}}

---

{{/each}}
{{/if}}

## OTHER PRODUCTS (for reference)

| ID | Name | Owner | Status |
|----|------|-------|--------|
{{#each other_products}}
| {{temp_id}} | {{name}} | {{owner}} | {{status}} |
{{/each}}

---

## TEAM REFERENCE

{{#each team}}
- `{{id}}` → {{name}}
{{/each}}

---

Return JSON only.
─────────────────────────────────────────

## Example User Prompt

─────────────────────────────────────────
## MISSION

> Build a TODO list web application MVP with task CRUD operations, secure authentication, and responsive UI.

---

## ROUND 7

---

## PRODUCT TREE

```json
{
  "products": [
    { "id": "p1", "name": "TODO List MVP", "type": "Orchestration", "parent_id": null, "owner": null, "status": "Pending", "yours": false },
    { "id": "p3", "name": "MVP Features", "type": "Decision", "parent_id": "p1", "owner": "operative-2", "status": "Pending", "yours": false },
    { "id": "p4", "name": "Technical Architecture", "type": "Content", "parent_id": "p1", "owner": "operative-1", "status": "Pending", "yours": false },
    { "id": "p5", "name": "Auth Specification", "type": "Content", "parent_id": "p1", "owner": "operative-2", "status": "Pending", "yours": true, "version": 2 }
  ]
}
```

---

## YOUR ASSIGNMENT: p5 — Auth Specification

**Type:** Content | **Status:** Pending | **Version:** 2
**DoD:** Document authentication flow, token management, and security measures

### CHAIR DIRECTIVE

> Add token refresh mechanism and address security concerns

**DoD:** Include token refresh flow, session expiration handling, and security mitigations for token storage
**Why:** Critical for secure user sessions and frontend integration
**Context:** Addressing [[c:c3]] from Marco and [[c:c4]] from Alex

### VERSION HISTORY

| V | Author | Change |
|---|--------|--------|
| 1 | Jordan | Initial auth flow outline |
| 2 | Jordan | Added JWT details and token storage |

### CURRENT CONTENT (V2)

# Authentication Specification

## Flow
1. User submits credentials
2. Backend validates, returns JWT
3. Frontend stores in localStorage
4. JWT included in subsequent requests

## Token Details
- JWT expiry: 1 hour
- Contains: user_id, email, exp

### FEEDBACK TO ADDRESS (importance ≥8 first)

**Marco** (8) — ID: c3
> localStorage is XSS-vulnerable. Consider httpOnly cookies or document required mitigations.

**Alex** (8) — ID: c4
> Missing token refresh mechanism. What happens when JWT expires?

---

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
    "message": "Description",
    "details": {}
  }
}
```

---

## OTHER PRODUCTS (for reference)

| ID | Name | Owner | Status |
|----|------|-------|--------|
| p1 | TODO List MVP | — | Pending |
| p3 | MVP Features | operative-2 | Pending |

---

## TEAM REFERENCE

- `chair-1` → Richard
- `operative-1` → Alex
- `operative-2` → Jordan (you)

---

Return JSON only.
─────────────────────────────────────────

## Key Differences from Original

| Aspect | Original | New |
|--------|----------|-----|
| Directive | Prose block | Structured fields |
| Attached context | Not available | Chair-specified relevant products |
| Feedback | All listed | Sorted by importance |
| Other products | Full detail | Summary table |
| References | UUIDs | [[type:id]] syntax in directive |

---

# PEER REVIEW

## User Prompt Template

─────────────────────────────────────────
## MISSION

> {{mission_summary}}

---

## ROUND {{current_round}}

---

## YOUR PERSPECTIVE

You are reviewing as **{{your_expertise}}**.
Focus on how this product integrates with your domain.

---

## PRODUCT TO REVIEW: {{product_temp_id}} — {{product_name}}

**Type:** {{type}} | **Author:** {{author}} ({{author_role}})
**DoD:** {{dod}}
**Version:** {{version}}

### CONTENT

{{content}}

### AUTHOR'S CHANGE SUMMARY

> {{change_summary}}

---

## FULL PRODUCT TREE (may comment on any)

```json
{
  "products": [{{products_json}}]
}
```

---

## TEAM REFERENCE

{{#each team}}
- `{{id}}` → {{name}}
{{/each}}

---

Return JSON only.
─────────────────────────────────────────

## Example User Prompt

─────────────────────────────────────────
## MISSION

> Build a TODO list web application MVP with task CRUD operations, secure authentication, and responsive UI.

---

## ROUND 7

---

## YOUR PERSPECTIVE

You are reviewing as **Full-Stack Developer** (Frontend).
Focus on how this product integrates with your domain.

---

## PRODUCT TO REVIEW: p5 — Auth Specification

**Type:** Content | **Author:** Jordan (Backend)
**DoD:** Document authentication flow, token management, and security measures
**Version:** 3

### CONTENT

# Authentication Specification

## Authentication Flow

### Login
1. User submits email + password to POST /auth/login
2. Backend validates credentials against bcrypt hash
3. On success: Return JWT (1hr) + refresh token (7d)
4. Frontend stores JWT in httpOnly cookie

### Token Refresh
1. Before JWT expires, call POST /auth/refresh
2. Include refresh token in request body
3. Backend validates and returns new JWT
4. Rotate refresh token

### Logout
1. Call POST /auth/logout
2. Backend invalidates refresh token
3. Frontend clears cookies

## Error Handling

| Scenario | Code | Response |
|----------|------|----------|
| Invalid credentials | AUTH_001 | {"error": {"code": "AUTH_001", "message": "Invalid email or password"}} |
| Token expired | AUTH_002 | {"error": {"code": "AUTH_002", "message": "Token expired"}} |
| Invalid refresh | AUTH_003 | {"error": {"code": "AUTH_003", "message": "Please log in again"}} |

## Security Measures
- JWT in httpOnly cookie (prevents XSS access)
- Refresh token rotation on each use
- Refresh tokens stored hashed in database

### AUTHOR'S CHANGE SUMMARY

> V3: Added token refresh mechanism, switched to httpOnly cookies, added error handling table per Marco and Alex feedback

---

## FULL PRODUCT TREE (may comment on any)

```json
{
  "products": [
    { "id": "p1", "name": "TODO List MVP", "type": "Orchestration", "parent_id": null, "owner": null },
    { "id": "p3", "name": "MVP Features", "type": "Decision", "parent_id": "p1", "owner": "operative-2" },
    { "id": "p4", "name": "Technical Architecture", "type": "Content", "parent_id": "p1", "owner": "operative-1" },
    { "id": "p5", "name": "Auth Specification", "type": "Content", "parent_id": "p1", "owner": "operative-2" }
  ]
}
```

---

## TEAM REFERENCE

- `chair-1` → Richard
- `operative-1` → Alex (you)
- `operative-2` → Jordan

---

Return JSON only.
─────────────────────────────────────────

---

# INSPECT

## User Prompt Template

─────────────────────────────────────────
## MISSION

> {{mission_summary}}

---

## ROUND {{current_round}}

---

## PRODUCTS TO INSPECT

{{#each products_to_inspect}}
### {{temp_id}}: {{name}}

**Type:** {{type}} | **Owner:** {{owner}}
**DoD:** {{dod}}
**Version:** {{version}}

#### CONTENT

{{content}}

#### PRIOR FEEDBACK

{{#each prior_feedback}}
- {{author}} ({{type}}, {{importance}}): {{summary}}
{{/each}}

---

{{/each}}

## TEAM REFERENCE

{{#each team}}
- `{{id}}` → {{name}}
{{/each}}

---

Return JSON only.
─────────────────────────────────────────

---

# PRESENTATION

## User Prompt Template

─────────────────────────────────────────
## SESSION: {{session_name}}

**Round:** {{current_round}}

### MISSION

> {{mission_summary}}

---

## TEAM

{{#each team}}
### {{name}} (`{{id}}`) — {{team_role}}
**Expertise:** {{expertise}}
{{/each}}

---

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
- {{from}} → {{product_name}}: {{summary}}
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

---

## VALID SPEAKERS

{{#each speakers}}
- `{{id}}` → {{name}} ({{expertise}})
{{/each}}

---

Return JSON only.
─────────────────────────────────────────

---

End of User Prompts document.
