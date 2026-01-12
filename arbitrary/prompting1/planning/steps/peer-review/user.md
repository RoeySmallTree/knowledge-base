# Peer Review User Prompt (V4.7)

**Step:** Peer Review  
**Role:** Operative  
**Version:** 4.7

---

## Variables Required

| Variable | Source | Description |
|----------|--------|-------------|
| `session.mission_charter` | `SessionContext` | Mission charter |
| `session.underlying_objectives` | `SessionContext` | Objectives |
| `session.current_round` | `SessionContext` | Current round |
| `currentMember.id` | `MemberContext.id` | Reviewer's ID |
| `currentMember.team_role` | `MemberContext.team_role` | Reviewer's expertise |
| `productsToReview[]` | `ProductContext[]` | Products to review |
| `productToReview.latestVersion` | `VersionContext` | Version to review |

---

## User Prompt Template

```markdown
## Mission

> {{session.mission_charter}}

## Objectives

> {{session.underlying_objectives}}

---

## Your Perspective

**Round:** {{session.current_round}}

You are reviewing as **{{currentMember.team_role}}**. Focus on how this product integrates with your domain.

---

{{#each productsToReview}}

## Product to Review: {{this.name}}

| Field | Value |
|-------|-------|
| **ID** | `{{this.id}}` |
| **Type** | {{this.type}} |
| **Author** | {{this.author_name}} ({{this.author_id}}) — {{this.author_role}} |
| **DoD** | {{this.definition_of_done}} |
| **Version** | {{this.latestVersion.version_number}} |

### Content

{{this.latestVersion.content}}

### Author's Change Summary

{{this.latestVersion.change_summary}}

{{/each}}

---

## Valid IDs

Use only these IDs in your response.

**Products:**
{{#each allProducts}}
- `{{this.id}}` → "{{this.name}}" [{{this.type}}, {{this.status}}]
{{/each}}

**Team Members:**
{{#each allMembers}}
- `{{this.id}}` → {{this.name}} ({{this.team_role}})
{{/each}}
```

---

## Phase 1 Renderers Used

| Renderer | Usage |
|----------|-------|
| `renderSession` | Mission charter, objectives |
| `renderProduct` | Product to review (format: Block, includes: full with VersionContent) |
| `renderVersion` | Content and change summary |
| `renderValidIds` | Product and member IDs |

---

## Composition Logic

```typescript
function buildPeerReviewUserPrompt(params: PeerReviewParams): string {
  const { ctx, reviewProductIds } = params;
  const currentMember = ctx.currentMember;
  const sections: string[] = [];
  
  // 1. Mission & Objectives (blockquote for user-provided content)
  sections.push(`## Mission\n\n> ${ctx.session.mission_charter}`);
  sections.push(`## Objectives\n\n> ${ctx.session.underlying_objectives}`);
  
  // 2. Your Perspective
  sections.push(`---\n\n## Your Perspective\n\n**Round:** ${ctx.session.current_round}\n\nYou are reviewing as **${currentMember.team_role}**. Focus on how this product integrates with your domain.`);
  
  // 3. Each Product to Review
  for (const productId of reviewProductIds) {
    const product = ctx.products.get(productId);
    if (!product) continue;
    
    const productSection = renderProduct(product, {
      format: ProductFormat.Block,
      includes: [...ProductPresets.full, ProductInclude.VersionContent]
    }, ctx);
    
    sections.push(`---\n\n## Product to Review: ${product.name}\n\n${productSection}`);
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

> THE MISSION: Build MenuSync, an intelligent SaaS platform that transforms how restaurants manage their menus across all channels.

## Objectives

> Success criteria include: operational efficiency, revenue optimization, customer satisfaction, and platform adoption.

---

## Your Perspective

**Round:** 1

You are reviewing as **product-manager**. Focus on how this product integrates with your domain.

---

## Product to Review: Core Technical Architecture

| Field | Value |
|-------|-------|
| **ID** | `decision-tech-arch-001` |
| **Type** | Decision |
| **Author** | Alex (operative-1) — tech-lead |
| **DoD** | Architecture diagram showing data flow, Technology stack selection, Real-time sync strategy, Scalability plan, Integration approach |
| **Version** | 1 |

### Content

# Core Technical Architecture for MenuSync Real-Time Synchronization

## Options Considered

### 1. Event-Driven Microservices with Message Queue
**Pros:**
- True real-time propagation via event streams
- Excellent fault tolerance and retry mechanisms
- Scales horizontally per service

**Cons:**
- Higher initial complexity
- More infrastructure components to manage

### 2. Monolithic API with Webhook Fan-out
**Pros:**
- Simpler initial development
- Easier debugging

**Cons:**
- Single point of failure
- Limited flexibility

## Recommendation

**Event-Driven Microservices Architecture** with:
- Node.js + TypeScript
- PostgreSQL + Redis
- Apache Kafka for event streaming
- Kubernetes with auto-scaling

## Real-Time Sync Strategy

**Primary: Event-Driven Push**
- Menu changes trigger events to Kafka
- Target propagation: <10 seconds
- Webhook retry with exponential backoff (max 5 attempts)

### Author's Change Summary

Initial version - foundational technical architecture defining event-driven microservices approach

---

## Valid IDs

Use only these IDs in your response.

**Products:**
- `decision-tech-arch-001` → "Core Technical Architecture" [Decision, pending]
- `decision-integration-001` → "Platform Integration Strategy" [Decision, pending]

**Team Members:**
- `operative-1` → Alex (tech-lead)
- `operative-2` → Jordan (product-manager)
- `operative-3` → Casey (growth-marketer)
```
