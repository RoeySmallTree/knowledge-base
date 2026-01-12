# CABAL User Prompt: Plan & Assign (V4.7)

**Step:** Plan & Assign  
**Role:** Chair

---

## Source Variables (User Prompt)

| Variable | Source Path |
|----------|-------------|
| `session.mission_charter` | `SessionContext` |
| `session.underlying_objectives` | `SessionContext` |
| `session.current_round` | `SessionContext` |
| `members` | `stepContext.members` |
| `productsById` | `ProductContext[]` |
| `roundDeltas` | `RoundDeltasContext` |
| `reflections` | `ReflectionContext[]` |
| `collabs` | `CollabContext[]` |

---

## User Prompt Template

[MISSION]
{{session.mission_charter}}

[OBJECTIVES]
{{session.underlying_objectives}}

[TEAM]
{{#each members}}
- **{{this.name}}** ({{this.id}}): {{this.role}} / {{this.team_role}}
  - Responsibility: {{this.operative_responsibility}}
{{/each}}

[ROUND]
{{session.current_round}}

[PRODUCT TREE]
{{#if products.length}}
{{#each products}}
{{this.indent}}[{{this.type}}] **{{this.name}}** ({{this.id}})
{{this.indent}}  Status: {{this.status}} | Owner: {{this.owner_name}}
{{this.indent}}  DoD: {{this.definition_of_done}}
{{#if this.latestVersion}}
{{this.indent}}  Latest: V{{this.latestVersion.version_number}} by {{this.latestVersion.author_name}}
{{this.indent}}  → {{this.latestVersion.change_summary}}
{{/if}}
{{/each}}
{{else}}
(No products yet - this is Bootstrap/Round 1)
{{/if}}

[ROUND DELTA]
{{#if roundDeltas.changedProductIds.length}}
Products changed this round:
{{#each roundDeltas.changedProducts}}
- {{this.name}} ({{this.id}}): {{this.changeType}}
{{/each}}
{{else}}
No changes from prior round.
{{/if}}

[OPERATIVE REFLECTIONS]
{{#if reflections.length}}
{{#each reflections}}
**{{this.author_name}}** on {{this.product_name}}:
> Mission alignment: {{this.mission_alignment}}
> Improvement plan: {{this.improvement_plan}}
> Confidence: {{this.confidence}}%
{{#if this.structural_requests.length}}
> Structural requests: {{this.structural_requests}}
{{/if}}
{{/each}}
{{else}}
(No reflections yet)
{{/if}}

[COLLABS & FEEDBACK]
{{#if collabs.length}}
{{#each collabs}}
{{#unless this.resolved}}
[OPEN] {{this.author_name}} → {{this.product_name}} ({{this.importance}}):
> "{{this.content}}"
{{/unless}}
{{#if this.resolved}}
[✓ RESOLVED] {{this.author_name}} → {{this.product_name}}
{{/if}}
{{/each}}
{{else}}
(No feedback yet)
{{/if}}

[PRODUCTS PENDING ACCEPTANCE]
{{#each productsPendingAcceptance}}
- **{{this.name}}** ({{this.id}})
  Type: {{this.type}} | Owner: {{this.owner_name}}
  DoD: {{this.definition_of_done}}
  Latest: V{{this.latestVersion.version_number}}
  Open collabs: {{this.openCollabCount}} | Blocking: {{this.blockingCollabCount}}
  → Ready for acceptance? {{#if this.blockingCollabCount}}⚠️ Has blocking collabs{{else}}✅ No blockers{{/if}}
{{/each}}

[VALID IDS]
Products:
{{#each allProducts}}
  {{this.id}} → "{{this.name}}" [{{this.type}}, {{this.status}}]
{{/each}}

Team Members (Operatives only for assignments):
{{#each operativeMembers}}
  {{this.id}} → {{this.name}} ({{this.team_role}})
{{/each}}

---

## Filled Example

[MISSION]
Build MenuMaster, a SaaS for restaurants to manage dynamic menus with real-time inventory sync.

[OBJECTIVES]
1. Reduce menu update time to 30 seconds
2. Achieve 90% uptime for inventory sync
3. Acquire 100 paying customers in 6 months

[TEAM]
- **Richard** (chair-1): chair / project-lead
  - Responsibility: Mission ownership, decisions, structure
- **Alex** (operative-1): operative / tech-lead
  - Responsibility: Architecture, API, Backend
- **Jordan** (operative-2): operative / product-manager
  - Responsibility: UX, User flows, Features
- **Casey** (operative-3): operative / growth-marketer
  - Responsibility: GTM, Positioning, Acquisition
- **Marcus** (watchdog-1): watchdog / security-specialist
  - Responsibility: QA, Security, Coherence
- **Stacy** (envoy-1): envoy / communications
  - Responsibility: User-facing summaries

[ROUND]
2

[PRODUCT TREE]
[Orchestration] **TODO List MVP** (adc982b9-f52b-431d-bfe8-7cd374e30a29)
  Status: pending | Owner: Richard
  DoD: Complete MVP with working task management
  
  [Collection] **Product Development** (ade4951f-24d0-4218-b0fb-98f9fd057268)
    Status: pending | Owner: Alex
    DoD: All technical specs complete
    
    [Content] **Technical Architecture Spec** (d5d4ae24-3375-48c0-9b41-a4c90fe10fc9)
      Status: pending | Owner: Alex
      DoD: System diagram, data flow, API boundaries, auth docs
      Latest: V1 by Alex
      → Initial architecture covering core services.
      
    [Content] **Database Schema** (fad8e5da-cc6a-4096-9341-e1917cc29292)
      Status: pending | Owner: Alex
      DoD: Complete schema with indexes
      Latest: V1 by Alex
      → Initial schema design.

[ROUND DELTA]
Products changed this round:
- Technical Architecture Spec (d5d4ae24...): new_version
- Database Schema (fad8e5da...): new_version

[OPERATIVE REFLECTIONS]
**Alex** on Technical Architecture Spec:
> Mission alignment: Architecture directly enables Objective #1 (<30sec updates)
> Improvement plan: V2 will add rate limiting, auth section, sync-status endpoint
> Confidence: 85%

**Jordan** on Core User Flows:
> Mission alignment: User flows support 30-second goal
> Improvement plan: V2 will add onboarding flow, clarify QR generation
> Confidence: 80%
> Structural requests: Need Decision Product for "POS Integration Priority"

[COLLABS & FEEDBACK]
[OPEN] Marcus → Technical Architecture Spec (8):
> "SECURITY: /public/menus/:id has no rate limiting. Vulnerable to DDoS."

[OPEN] Marcus → Technical Architecture Spec (6):
> "COMPLETENESS: Auth section missing per DoD."

[OPEN] Jordan → Technical Architecture Spec (5):
> "Could we add bulk import for spreadsheet menus?"

[✓ RESOLVED] Marcus → Database Schema

[PRODUCTS PENDING ACCEPTANCE]
- **Database Schema** (fad8e5da-cc6a-4096-9341-e1917cc29292)
  Type: Content | Owner: Alex
  DoD: Complete schema with indexes
  Latest: V1
  Open collabs: 0 | Blocking: 0
  → Ready for acceptance? ✅ No blockers

[VALID IDS]
Products:
  adc982b9-f52b-431d-bfe8-7cd374e30a29 → "TODO List MVP" [Orchestration, pending]
  ade4951f-24d0-4218-b0fb-98f9fd057268 → "Product Development" [Collection, pending]
  d5d4ae24-3375-48c0-9b41-a4c90fe10fc9 → "Technical Architecture Spec" [Content, pending]
  fad8e5da-cc6a-4096-9341-e1917cc29292 → "Database Schema" [Content, pending]

Team Members (Operatives only for assignments):
  operative-1 → Alex (tech-lead)
  operative-2 → Jordan (product-manager)
  operative-3 → Casey (growth-marketer)
