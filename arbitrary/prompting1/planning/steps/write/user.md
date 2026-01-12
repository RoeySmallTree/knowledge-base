# Write User Prompt (V4.7)

**Step:** Write  
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
| `assignedProducts[]` | `ProductContext[]` | Products assigned to write |
| `product.versions[]` | `VersionContext[]` | Version history |
| `product.collabs[]` | `CollabContext[]` | Feedback on product |

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

{{#each assignedProducts}}

## Your Assignment: {{this.name}}

**ID:** `{{this.id}}`  
**Type:** {{this.type}}  
**Definition of Done:** {{this.definition_of_done}}

### Version History

{{#each this.versions}}
{{#if (collabsBeforeVersion this)}}
#### Feedback Before V{{this.version_number}}

{{#each (collabsBeforeVersion this)}}
> **{{this.author_name}}:** "{{this.content}}" (importance: {{this.importance}})
{{/each}}

{{/if}}
#### V{{this.version_number}} by {{#if (eq this.author_id ../currentMember.id)}}You{{else}}{{this.author_name}}{{/if}}

{{#if this.directive}}**Directive:** {{this.directive}}{{/if}}
{{#if this.change_summary}}**Change:** {{this.change_summary}}{{/if}}
{{#if (eq this.id ../selected_version_id)}}✅ *Selected by Chair*{{/if}}

{{/each}}

### Current Content (V{{this.latestVersion.version_number}})

{{this.latestVersion.content}}

### Feedback to Address

{{#if this.latestCollabs.length}}
{{#each this.latestCollabs}}
> **{{this.author_name}}:** "{{this.content}}" (importance: {{this.importance}})
{{/each}}
{{else}}
*No feedback yet.*
{{/if}}

### Your Reflection

{{this.yourReflection}}

### Chair's Directive

{{this.nextDirective}}

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
```

---

## Phase 1 Renderers Used

| Renderer | Usage |
|----------|-------|
| `renderSession` | Mission charter, objectives |
| `renderTeamRoster` | Team members (excluding current) |
| `renderWorkHistory` | Full product history with versions and collabs |
| `renderCollabs` | Feedback on current version |
| `renderValidIds` | Product and member IDs |

---

## Composition Logic

```typescript
function buildWriteUserPrompt(params: WriteParams): string {
  const { ctx, assignedProductIds } = params;
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
  
  // 3. Each Assigned Product with Work History
  for (const productId of assignedProductIds) {
    const product = ctx.products.get(productId);
    if (!product) continue;
    
    sections.push(`---\n\n${renderWorkHistory(product, {
      currentMemberId: currentMember.id,
      includeContent: true,
      includeCollabs: true,
      includeReflection: true,
      includeDirective: true
    })}`);
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

**Round:** 3

### Your Teammates

- **Jordan** (product-manager) — UX, user flows
- **Casey** (growth-marketer) — GTM, positioning

---

## Your Assignment: Technical Architecture Spec

**ID:** `660e8400-e29b-41d4-a716-446655440001`  
**Type:** Content  
**Definition of Done:** System diagram, data flow, API boundaries with rate limiting, auth docs

### Version History

#### V1 by You

**Directive:** Create the technical blueprint for <30sec menu updates.
**Change:** Initial architecture.

#### Feedback Before V2

> **Marcus:** "No rate limiting on public endpoint. DDoS risk." (importance: 8)
> **Marcus:** "Auth section missing." (importance: 6)
> **Jordan:** "Add bulk import for spreadsheet menus." (importance: 5)

#### V2 by You

**Directive:** Address watchdog security.
**Change:** Added rate limiting, auth, bulk endpoint.
✅ *Selected by Chair*

### Current Content (V2)

# Technical Architecture Spec V2

## 1. System Overview
MenuMaster is a distributed system with three core services.

## 2. Services
### 2.1 Menu Service
- POST /restaurants/:id/menus
- POST /menus/:id/items/bulk ← NEW
- GET /menus/:id (public)

### 2.4 Authentication ← NEW
- JWT validation via Clerk
- Role enforcement

## 3. API Boundaries
| Endpoint | Rate Limit |
|----------|------------|
| /public/* | 100/min/IP |

### Feedback to Address

> **Jordan:** "How does owner know sync is working? Need visibility." (importance: 7)
> **Jordan:** "QR generation flow unclear." (importance: 6)

### Your Reflection

Sync visibility valid—adding sync-status endpoint. QR is product not arch, but will doc API.

### Chair's Directive

Add sync-status endpoint. Document QR generation API flow.

---

## Valid IDs

Use only these IDs in your response.

**Products:**
- `660e8400-e29b-41d4-a716-446655440001` → "Technical Architecture Spec" [Content]
- `770e8400-e29b-41d4-a716-446655440002` → "Core User Flows" [Content]

**Team Members:**
- `operative-1` → Alex (tech-lead)
- `operative-2` → Jordan (product-manager)
```
