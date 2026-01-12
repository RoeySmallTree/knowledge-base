# Inspect User Prompt (V4.7)

**Step:** Inspect  
**Role:** Watchdog  
**Version:** 4.7

---

## Variables Required

| Variable | Source | Description |
|----------|--------|-------------|
| `session.mission_charter` | `SessionContext` | Mission charter |
| `session.underlying_objectives` | `SessionContext` | Objectives |
| `session.current_round` | `SessionContext` | Current round |
| `members` | `stepContext.members` | Team members (excluding self) |
| `productsToReview[]` | Filtered `ProductContext[]` | Products to inspect |
| `product.versions[]` | `VersionContext[]` | Version history |
| `product.collabs[]` | `CollabContext[]` | Peer feedback |

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

### Team

{{#each members}}
{{#unless (eq this.id currentMember.id)}}
- **{{this.name}}** ({{this.team_role}}) — {{this.operative_responsibility}}
{{/unless}}
{{/each}}

---

{{#each productsToReview}}

## Product to Inspect: {{this.name}}

| Field | Value |
|-------|-------|
| **ID** | `{{this.id}}` |
| **Type** | {{this.type}} |
| **Owner** | {{this.owner_name}} (`{{this.owner_id}}`) |
| **Status** | {{this.status}} |

### Definition of Done

{{this.definition_of_done}}

### Version History

{{#each this.versions}}
#### V{{this.version_number}} by {{this.author_name}}

{{#if this.directive}}**Directive:** {{this.directive}}{{/if}}
{{#if this.change_summary}}**Change:** {{this.change_summary}}{{/if}}
{{#if (eq this.id ../selected_version_id)}}✅ *Selected for Review*{{/if}}

{{/each}}

### Content to Review (V{{this.selectedVersion.version_number}})

{{this.selectedVersion.content}}

### Peer Feedback Already Received

{{#if this.latestCollabs.length}}
{{#each this.latestCollabs}}
> **{{this.author_name}}** (importance: {{this.importance}}): "{{this.content}}"

{{/each}}
{{else}}
*No peer feedback yet.*
{{/if}}

### Related Products

{{#each this.relatedProducts}}
- **{{this.name}}** ({{this.owner_name}}): {{this.status}} — {{#if this.latestVersion}}V{{this.latestVersion.version_number}}{{else}}No version yet{{/if}}
{{/each}}

{{/each}}

---

## Valid IDs

Use only these IDs in your response.

**Products:**
{{#each allProducts}}
- `{{this.id}}` → "{{this.name}}" [{{this.type}}]
{{/each}}
```

---

## Phase 1 Renderers Used

| Renderer | Usage |
|----------|-------|
| `renderSession` | Mission charter, objectives |
| `renderTeamRoster` | Team members (excluding current) |
| `renderProduct` | Products to review (format: Block, includes: full with VersionContent) |
| `renderCollabs` | Peer feedback already received |
| `renderValidIds` | Product IDs |

---

## Composition Logic

```typescript
function buildInspectUserPrompt(params: InspectParams): string {
  const { ctx, changedProductIds } = params;
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
  sections.push(`---\n\n## Context\n\n**Round:** ${ctx.session.current_round}\n\n### Team\n\n${teamSection}`);
  
  // 3. Each Product to Inspect
  const productsToReview = changedProductIds
    ? changedProductIds.map(id => ctx.products.get(id)).filter(Boolean)
    : Array.from(ctx.products.values()).filter(p => p.status === 'pending_review');
  
  for (const product of productsToReview) {
    sections.push(`---\n\n${renderProductForInspect(product, ctx)}`);
  }
  
  // 4. Valid IDs
  sections.push(`---\n\n## Valid IDs\n\nUse only these IDs in your response.\n\n${renderValidIds(ctx)}`);
  
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

**Round:** 2

### Team

- **Alex** (tech-lead) — Technical architecture, API design, backend
- **Jordan** (product-manager) — UX, user flows, feature prioritization
- **Casey** (growth-marketer) — GTM, positioning, customer acquisition

---

## Product to Inspect: Technical Architecture Spec

| Field | Value |
|-------|-------|
| **ID** | `660e8400-e29b-41d4-a716-446655440001` |
| **Type** | Content |
| **Owner** | Alex (`operative-1`) |
| **Status** | pending_review |

### Definition of Done

- System diagram showing all services and their interactions
- Narrative explaining data flow for menu updates and inventory sync
- API boundary definitions with rate limiting
- Authentication and authorization documentation
- Reviewed by product-manager for feasibility

### Version History

#### V1 by Alex

**Directive:** Create the technical blueprint for <30sec menu updates.
**Change:** Initial architecture covering core services.
✅ *Selected for Review*

### Content to Review (V1)

# Technical Architecture Spec V1

## 1. System Overview
MenuMaster is a distributed system with three core services.

## 2. Services

### 2.1 Menu Service
- POST /restaurants/:id/menus
- PUT /menus/:id/items/:itemId
- GET /menus/:id (public)

### 2.2 Inventory Sync Service
- Polls POS every 60 seconds
- Compares with cached state
- Updates Menu Service on change

### 2.3 QR Generator Service
- Generates unique QR per restaurant/table
- Stores in S3

## 3. API Boundaries
| Endpoint | Auth |
|----------|------|
| /public/* | None |
| /menus/* | JWT |

## 4. Infrastructure
- Hosting: Vercel (FE), Railway (BE)
- Database: Neon PostgreSQL
- Auth: Clerk

### Peer Feedback Already Received

> **Jordan** (importance: 5): "Could we add bulk import? Owners have existing menus in spreadsheets."

### Related Products

- **Core User Flows** (Jordan): in_progress — V1
- **API Design Document** (Alex): pending — No version yet
- **Database Schema** (Alex): pending — No version yet

---

## Valid IDs

Use only these IDs in your response.

**Products:**
- `660e8400-e29b-41d4-a716-446655440001` → "Technical Architecture Spec" [Content]
- `660e8400-e29b-41d4-a716-446655440002` → "Core User Flows" [Content]
- `660e8400-e29b-41d4-a716-446655440003` → "API Design Document" [Content]
- `660e8400-e29b-41d4-a716-446655440004` → "Database Schema" [Content]
```
