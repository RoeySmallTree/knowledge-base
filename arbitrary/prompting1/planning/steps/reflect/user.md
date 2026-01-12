# Reflect User Prompt (V4.7)

**Step:** Reflect  
**Role:** Operative  
**Version:** 4.7

---

## Variables Required

| Variable | Source | Description |
|----------|--------|-------------|
| `session.mission_charter` | `SessionContext` | Mission charter |
| `session.underlying_objectives` | `SessionContext` | Objectives |
| `session.current_round` | `SessionContext` | Current round |
| `members` | `stepContext.members` | Team members (excluding self) |
| `ownedProducts[]` | Filtered `ProductContext[]` | Products owned by this operative |
| `product.versions[]` | `VersionContext[]` | Version history |
| `product.collabs[]` | `CollabContext[]` | Feedback on product |
| `chairDirectives[]` | Directives for products | Chair's directives |

---

## User Prompt Template

```markdown
## Mission

> {{session.mission_charter}}

## Objectives

> {{session.underlying_objectives}}

---

## Context

**Round:** {{session.current_round}}

### Your Teammates

{{#each members}}
{{#unless (eq this.id currentMember.id)}}
- **{{this.name}}** ({{this.team_role}}) — {{this.operative_responsibility}}
{{/unless}}
{{/each}}

---

{{#each ownedProducts}}

## Your Product: {{this.name}}

| Field | Value |
|-------|-------|
| **ID** | `{{this.id}}` |
| **Type** | {{this.type}} |
| **Status** | {{this.status}} |
| **DoD** | {{this.definition_of_done}} |

### Chair Directives

{{#if this.directives.length}}
{{#each this.directives}}
**Round {{this.round}}:** "{{this.comment}}" (importance: {{this.importance}})
- Status: {{this.fulfillment_status}}

{{/each}}
{{else}}
*No directives yet.*
{{/if}}

### Version History

{{#each this.versions}}
{{#if (collabsBeforeVersion this)}}
#### Feedback Before V{{this.version_number}}

{{#each (collabsBeforeVersion this)}}
> **{{this.author_name}}** ({{this.author_role}}): "{{this.content}}" — importance {{this.importance}}
> *Collab ID: `{{this.id}}`*

{{/each}}
{{/if}}

#### V{{this.version_number}} by You

{{#if this.directive}}**Directive:** "{{this.directive}}"{{/if}}
{{#if this.change_summary}}**Change:** {{this.change_summary}}{{/if}}
{{#if (eq this.id ../selected_version_id)}}✅ *Selected by Chair*{{/if}}

{{/each}}

### Current Content (V{{this.latestVersion.version_number}})

{{this.latestVersion.content}}

### Feedback on Current Version

{{#if this.latestCollabs.length}}
{{#each this.latestCollabs}}
{{#if this.resolved}}**[✓ Resolved]**{{else}}**[◯ Open]**{{/if}} **{{this.author_name}}** (importance: {{this.importance}})
> "{{this.content}}"
> *Collab ID: `{{this.id}}`*

{{/each}}
{{else}}
*No feedback yet.*
{{/if}}

{{/each}}

---

## Peer Products

For context, here's what your teammates are working on:

{{#each peerProducts}}
### {{this.name}} ({{this.owner_name}})

- **Status:** {{this.status}}
- **Latest:** V{{this.latestVersion.version_number}} — {{this.latestVersion.change_summary}}

{{/each}}

---

## Valid IDs

Use only these IDs in your response.

**Products:**
{{#each allProducts}}
- `{{this.id}}` → "{{this.name}}" [{{this.type}}]
{{/each}}

**Team Members:**
{{#each members}}
- `{{this.id}}` → {{this.name}} ({{this.team_role}})
{{/each}}

**Collabs** (for `followingCollabIds`):
{{#each recentCollabs}}
- `{{this.id}}` → From {{this.author_name}} on "{{this.product_name}}"
{{/each}}
```

---

## Phase 1 Renderers Used

| Renderer | Usage |
|----------|-------|
| `renderSession` | Mission charter, objectives |
| `renderTeamRoster` | Team members (excluding current) |
| `renderWorkHistory` | Full product history with versions, collabs, directives |
| `renderCollabs` | Feedback with open/resolved status |
| `renderProduct` | Peer products (minimal with latest version) |
| `renderValidIds` | Product, member, and collab IDs |

---

## Composition Logic

```typescript
function buildReflectUserPrompt(params: ReflectParams): string {
  const { ctx } = params;
  const currentMember = ctx.currentMember;
  const sections: string[] = [];
  
  // 1. Mission & Objectives (blockquote for user-provided content)
  sections.push(`## Mission\n\n> ${ctx.session.mission_charter}`);
  sections.push(`## Objectives\n\n> ${ctx.session.underlying_objectives}`);
  
  // 2. Context
  const otherMembers = Array.from(ctx.members.values())
    .filter(m => m.id !== currentMember.id);
  const teamSection = otherMembers.map(m => 
    `- **${m.name}** (${m.team_role}) — ${m.operative_responsibility}`
  ).join('\n');
  sections.push(`---\n\n## Context\n\n**Round:** ${ctx.session.current_round}\n\n### Your Teammates\n\n${teamSection}`);
  
  // 3. Each Owned Product
  const ownedProducts = Array.from(ctx.products.values())
    .filter(p => p.owner_id === currentMember.id);
  
  for (const product of ownedProducts) {
    sections.push(`---\n\n${renderWorkHistory(product, {
      currentMemberId: currentMember.id,
      includeContent: true,
      includeCollabs: true,
      includeDirectives: true,
      showCollabIds: true,
      showResolvedStatus: true
    })}`);
  }
  
  // 4. Peer Products
  const peerProducts = Array.from(ctx.products.values())
    .filter(p => p.owner_id !== currentMember.id && p.latestVersion);
  
  if (peerProducts.length > 0) {
    const peerSection = peerProducts.map(p => 
      `### ${p.name} (${p.owner_name})\n\n- **Status:** ${p.status}\n- **Latest:** V${p.latestVersion.version_number} — ${p.latestVersion.change_summary}`
    ).join('\n\n');
    sections.push(`---\n\n## Peer Products\n\nFor context, here's what your teammates are working on:\n\n${peerSection}`);
  }
  
  // 5. Valid IDs
  sections.push(`---\n\n## Valid IDs\n\nUse only these IDs in your response.\n\n${renderValidIds(ctx, { includeCollabs: true })}`);
  
  return sections.join('\n\n');
}
```

---

## Example Output

```markdown
## Mission

> Build MenuMaster, a SaaS for restaurants to manage dynamic menus with real-time inventory sync.

## Objectives

> 1. Reduce menu update time to 30 seconds
> 2. Achieve 90% uptime for inventory sync
> 3. Acquire 100 paying customers in 6 months

---

## Context

**Round:** 3

### Your Teammates

- **Richard** (project-lead) — Mission ownership, decisions, structure
- **Jordan** (product-manager) — UX, user flows, feature prioritization
- **Casey** (growth-marketer) — GTM, positioning, customer acquisition
- **Marcus** (security-specialist) — Security, QA, coherence

---

## Your Product: Technical Architecture Spec

| Field | Value |
|-------|-------|
| **ID** | `660e8400-e29b-41d4-a716-446655440001` |
| **Type** | Content |
| **Status** | in_progress |
| **DoD** | System diagram, data flow, API boundaries with rate limiting, auth docs |

### Chair Directives

**Round 1:** "Create the technical blueprint for <30sec menu updates." (importance: 9)
- Status: Partially fulfilled (v1 complete, v2 addressing feedback)

**Round 2:** "Address watchdog security concerns. Blocking acceptance." (importance: 10)
- Status: Fully fulfilled (rate limiting + auth added in v2)

### Version History

#### V1 by You

**Directive:** "Create the technical blueprint for <30sec menu updates."
**Change:** Initial architecture covering core services.

#### Feedback Before V2

> **Marcus** (watchdog): "SECURITY: /public/menus/:id has no rate limiting. Vulnerable to DDoS." — importance 8
> *Collab ID: `880e8400-e29b-41d4-a716-446655440003`*

> **Marcus** (watchdog): "COMPLETENESS: Auth section missing. Add JWT validation flow." — importance 6
> *Collab ID: `880e8400-e29b-41d4-a716-446655440004`*

> **Jordan** (product-manager): "Could we add bulk import? Owners have menus in spreadsheets." — importance 5
> *Collab ID: `880e8400-e29b-41d4-a716-446655440005`*

#### V2 by You

**Directive:** "Address watchdog security concerns. Blocking acceptance."
**Change:** Added rate limiting (Section 3), auth (Section 2.4), bulk endpoint (Section 2.1).
✅ *Selected by Chair*

### Current Content (V2)

# Technical Architecture Spec V2

## 1. System Overview
MenuMaster is a distributed system with three core services.
...

### Feedback on Current Version

**[◯ Open]** **Jordan** (importance: 7)
> "How does the owner know inventory sync is working? Need some visibility in the dashboard."
> *Collab ID: `880e8400-e29b-41d4-a716-446655440006`*

**[◯ Open]** **Jordan** (importance: 6)
> "What's the UX for QR generation? One-click? Download and print?"
> *Collab ID: `880e8400-e29b-41d4-a716-446655440007`*

---

## Peer Products

For context, here's what your teammates are working on:

### Core User Flows (Jordan)

- **Status:** in_progress
- **Latest:** V2 — Added menu editing flow and onboarding

### GTM Positioning (Casey)

- **Status:** pending
- **Latest:** V1 — Initial positioning targeting independent restaurants

---

## Valid IDs

Use only these IDs in your response.

**Products:**
- `660e8400-e29b-41d4-a716-446655440001` → "Technical Architecture Spec" [Content]
- `770e8400-e29b-41d4-a716-446655440002` → "Core User Flows" [Content]
- `990e8400-e29b-41d4-a716-446655440009` → "GTM Positioning" [Content]

**Team Members:**
- `chair-1` → Richard (project-lead)
- `operative-1` → Alex (tech-lead)
- `operative-2` → Jordan (product-manager)
- `operative-3` → Casey (growth-marketer)
- `watchdog-1` → Marcus (security-specialist)

**Collabs** (for `followingCollabIds`):
- `880e8400-e29b-41d4-a716-446655440003` → From Marcus on "Technical Architecture Spec"
- `880e8400-e29b-41d4-a716-446655440004` → From Marcus on "Technical Architecture Spec"
- `880e8400-e29b-41d4-a716-446655440005` → From Jordan on "Technical Architecture Spec"
- `880e8400-e29b-41d4-a716-446655440006` → From Jordan on "Technical Architecture Spec"
- `880e8400-e29b-41d4-a716-446655440007` → From Jordan on "Technical Architecture Spec"
```
