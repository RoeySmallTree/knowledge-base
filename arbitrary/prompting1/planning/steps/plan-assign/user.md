# Plan & Assign User Prompt (V4.8)

**Step:** Plan & Assign  
**Role:** Chair  
**Version:** 4.8

---

## Variables Required

| Variable | Source | Description |
|----------|--------|-------------|
| `session.mission_charter` | `SessionContext` | Mission charter text |
| `session.underlying_objectives` | `SessionContext` | Objectives text |
| `session.current_round` | `SessionContext` | Current round number |
| `members` | `stepContext.members` | All team members |
| `productsById` | `ProductContext[]` | All products |
| `roundDeltas` | `RoundDeltasContext` | Products changed this round |
| `reflections` | `ReflectionContext[]` | Operative reflections |
| `collabs` | `CollabContext[]` | Feedback/collabs |

---

## User Prompt Template

```markdown
## Mission

> {{session.mission_charter}}

## Objectives

> {{session.underlying_objectives}}

---

## Current State

**Round:** {{session.current_round}}

### Team

{{#each members}}
- **{{this.name}}** ({{this.id}}) — {{this.role}} / {{this.team_role}}
  - Responsibility: {{this.operative_responsibility}}
{{/each}}

### Product Tree

{{#if products.length}}
{{#each products}}
{{this.indent}}**{{this.name}}** `{{this.id}}`
{{this.indent}}Type: {{this.type}} | Status: {{this.status}} | Owner: {{this.owner_name}}
{{this.indent}}DoD: {{this.definition_of_done}}
{{#if this.latestVersion}}
{{this.indent}}Latest: V{{this.latestVersion.version_number}} by {{this.latestVersion.author_name}} — {{this.latestVersion.change_summary}}
{{/if}}
{{/each}}
{{else}}
*No products yet — this is Bootstrap/Round 1.*
{{/if}}

---

## What Changed This Round

{{#if roundDeltas.changedProductIds.length}}
{{#each roundDeltas.changedProducts}}
- **{{this.name}}** ({{this.id}}): {{this.changeType}}
{{/each}}
{{else}}
No changes from prior round.
{{/if}}

---

## Operative Reflections

{{#if reflections.length}}
{{#each reflections}}
### {{this.author_name}} on {{this.product_name}}

> **Mission alignment:** {{this.mission_alignment}}
> **Improvement plan:** {{this.improvement_plan}}
> **Confidence:** {{this.confidence}}%
{{#if this.structural_requests.length}}
> **Structural requests:** {{this.structural_requests}}
{{/if}}

{{/each}}
{{else}}
*No reflections yet.*
{{/if}}

---

## Feedback & Collabs

{{#if collabs.length}}
{{#each collabs}}
{{#unless this.resolved}}
**[OPEN]** {{this.author_name}} → {{this.product_name}} (importance: {{this.importance}})
> "{{this.content}}"

{{/unless}}
{{#if this.resolved}}
**[✓ RESOLVED]** {{this.author_name}} → {{this.product_name}}

{{/if}}
{{/each}}
{{else}}
*No feedback yet.*
{{/if}}

---

## Products Pending Acceptance

{{#each productsPendingAcceptance}}
### {{this.name}} `{{this.id}}`

- **Type:** {{this.type}}
- **Owner:** {{this.owner_name}}
- **DoD:** {{this.definition_of_done}}
- **Latest Version:** V{{this.latestVersion.version_number}}
- **Open collabs:** {{this.openCollabCount}} | **Blocking:** {{this.blockingCollabCount}}

{{#if this.blockingCollabCount}}
⚠️ Has blocking collabs — address before accepting.
{{else}}
✅ No blockers — ready for acceptance.
{{/if}}

{{/each}}

---

## Valid IDs

Use only these IDs in your response.

**Products:**
{{#each allProducts}}
- `{{this.id}}` → "{{this.name}}" [{{this.type}}, {{this.status}}]
{{/each}}

**Team Members** (operatives only for assignments):
{{#each operativeMembers}}
- `{{this.id}}` → {{this.name}} ({{this.team_role}})
{{/each}}
```

---

## Phase 1 Renderers Used

| Renderer | Usage |
|----------|-------|
| `renderSession` | Mission charter, objectives (format: Full) |
| `renderTeamRoster` | Team list (includes: assignment - role, responsibility, owned_products) |
| `renderProductTree` | Hierarchical product tree (includes: standard + LatestVersion) |
| `renderCollabs` | Open and resolved collabs with status |
| `renderValidIds` | Product and member IDs for reference |

---

## Composition Logic

```typescript
function buildPlanAssignUserPrompt(params: PlanAssignParams): string {
  const { ctx, changedProductIds } = params;
  const sections: string[] = [];
  
  // 1. Mission & Objectives (blockquote for user-provided content)
  sections.push(`## Mission\n\n> ${ctx.session.mission_charter}`);
  sections.push(`## Objectives\n\n> ${ctx.session.underlying_objectives}`);
  
  // 2. Current State
  const teamRoster = renderTeamRoster(ctx.members, { includes: MemberPresets.assignment });
  const productTree = renderProductTree(ctx.products, {
    includes: [...ProductPresets.standard, ProductInclude.LatestVersion]
  });
  
  sections.push(`---\n\n## Current State\n\n**Round:** ${ctx.session.current_round}\n\n### Team\n\n${teamRoster}\n\n### Product Tree\n\n${productTree || '*No products yet — this is Bootstrap/Round 1.*'}`);
  
  // 3. What Changed
  const changedProducts = getChangedProducts(ctx, changedProductIds);
  const deltaSection = changedProducts.length > 0
    ? changedProducts.map(p => `- **${p.name}** (${p.id}): ${p.changeType}`).join('\n')
    : 'No changes from prior round.';
  sections.push(`---\n\n## What Changed This Round\n\n${deltaSection}`);
  
  // 4. Reflections
  const reflections = getReflectionsForRound(ctx);
  sections.push(`---\n\n## Operative Reflections\n\n${renderReflections(reflections) || '*No reflections yet.*'}`);
  
  // 5. Feedback & Collabs
  const collabs = renderCollabs(ctx.collabs, { format: CollabFormat.FeedbackItem, groupByStatus: true });
  sections.push(`---\n\n## Feedback & Collabs\n\n${collabs || '*No feedback yet.*'}`);
  
  // 6. Pending Acceptance
  const pending = getProductsPendingAcceptance(ctx);
  if (pending.length > 0) {
    const pendingSection = pending.map(p => renderProductForAcceptance(p)).join('\n');
    sections.push(`---\n\n## Products Pending Acceptance\n\n${pendingSection}`);
  }
  
  // 7. Valid IDs
  sections.push(`---\n\n## Valid IDs\n\nUse only these IDs in your response.\n\n${renderValidIds(ctx)}`);
  
  return sections.join('\n\n');
}
```

---

## Example Output

```markdown
## Mission

> Build a SaaS platform for restaurants to manage dynamic menus with real-time inventory sync.

## Objectives

> 1. Reduce menu update time to 30 seconds
> 2. Achieve 90% uptime for inventory sync
> 3. Acquire 100 paying customers in 6 months

---

## Current State

**Round:** 2

### Team

- **Richard** (chair-1) — chair / project-lead
  - Responsibility: Mission ownership, decisions, structure
- **Alex** (operative-1) — operative / tech-lead
  - Responsibility: Architecture, API, Backend
- **Jordan** (operative-2) — operative / product-manager
  - Responsibility: UX, User flows, Features
- **Casey** (operative-3) — operative / growth-marketer
  - Responsibility: GTM, Positioning, Acquisition
- **Marcus** (watchdog-1) — watchdog / security-specialist
  - Responsibility: QA, Security, Coherence
- **Stacy** (envoy-1) — envoy / communications
  - Responsibility: User-facing summaries

### Product Tree

**Menu SaaS MVP** `adc982b9-f52b-431d-bfe8-7cd374e30a29`
Type: Orchestration | Status: pending | Owner: Richard
DoD: Complete MVP with working menu management

  **Technical Foundation** `ade4951f-24d0-4218-b0fb-98f9fd057268`
  Type: Orchestration | Status: pending | Owner: Alex
  DoD: All technical specs complete and validated
  
    **Technical Architecture Spec** `d5d4ae24-3375-48c0-9b41-a4c90fe10fc9`
    Type: Content | Status: pending | Owner: Alex
    DoD: System diagram, data flow, API boundaries, auth docs
    Latest: V1 by Alex — Initial architecture covering core services.
    
    **Database Schema** `fad8e5da-cc6a-4096-9341-e1917cc29292`
    Type: Content | Status: pending | Owner: Alex
    DoD: Complete schema with indexes
    Latest: V1 by Alex — Initial schema design.

---

## What Changed This Round

- **Technical Architecture Spec** (d5d4ae24...): new_version
- **Database Schema** (fad8e5da...): new_version

---

## Operative Reflections

### Alex on Technical Architecture Spec

> **Mission alignment:** Architecture directly enables Objective #1 (<30sec updates)
> **Improvement plan:** V2 will add rate limiting, auth section, sync-status endpoint
> **Confidence:** 85%

### Jordan on Core User Flows

> **Mission alignment:** User flows support 30-second goal
> **Improvement plan:** V2 will add onboarding flow, clarify QR generation
> **Confidence:** 80%
> **Structural requests:** Need Decision Product for "POS Integration Priority"

---

## Feedback & Collabs

**[OPEN]** Marcus → Technical Architecture Spec (importance: 8)
> "SECURITY: /public/menus/:id has no rate limiting. Vulnerable to DDoS."

**[OPEN]** Marcus → Technical Architecture Spec (importance: 6)
> "COMPLETENESS: Auth section missing per DoD."

**[OPEN]** Jordan → Technical Architecture Spec (importance: 5)
> "Could we add bulk import for spreadsheet menus?"

**[✓ RESOLVED]** Marcus → Database Schema

---

## Products Pending Acceptance

### Database Schema `fad8e5da-cc6a-4096-9341-e1917cc29292`

- **Type:** Content
- **Owner:** Alex
- **DoD:** Complete schema with indexes
- **Latest Version:** V1
- **Open collabs:** 0 | **Blocking:** 0

✅ No blockers — ready for acceptance.

---

## Valid IDs

Use only these IDs in your response.

**Products:**
- `adc982b9-f52b-431d-bfe8-7cd374e30a29` → "Menu SaaS MVP" [Orchestration, pending]
- `ade4951f-24d0-4218-b0fb-98f9fd057268` → "Technical Foundation" [Orchestration, pending]
- `d5d4ae24-3375-48c0-9b41-a4c90fe10fc9` → "Technical Architecture Spec" [Content, pending]
- `fad8e5da-cc6a-4096-9341-e1917cc29292` → "Database Schema" [Content, pending]

**Team Members** (operatives only for assignments):
- `operative-1` → Alex (tech-lead)
- `operative-2` → Jordan (product-manager)
- `operative-3` → Casey (growth-marketer)
```
