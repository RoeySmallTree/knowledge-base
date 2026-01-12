# Presentation User Prompt (V4.7)

**Step:** Presentation  
**Role:** Envoy  
**Version:** 4.7

---

## Variables Required

| Variable | Source | Description |
|----------|--------|-------------|
| `session.name` | `SessionContext` | Session name |
| `session.mission_charter` | `SessionContext` | Mission charter |
| `session.current_round` | `SessionContext` | Current round |
| `members` | `stepContext.members` | All team members |
| `roundDeltas` | `RoundDeltasContext` | Changes this round |
| `versionsCreated[]` | Products with new versions | New versions |
| `collabsThisRound[]` | Collabs posted this round | Collabs |
| `remarksThisRound[]` | Remarks posted this round | Remarks |
| `acceptedProducts[]` | Products accepted this round | Acceptances |
| `assignmentsThisRound[]` | New assignments made | Assignments |

---

## User Prompt Template

```markdown
## Session Overview

**Name:** {{session.name}}  
**Round:** {{session.current_round}}

### Mission

> {{session.mission_charter}}

---

## Your Team

Use each team member's characteristics to make their messages sound authentic.

{{#each members}}
### {{this.name}} (`{{this.id}}`) — {{this.team_role}}

{{#if this.characteristics_flat}}
**Characteristics:** {{this.characteristics_flat}}
{{/if}}

{{#if this.custom_persona_prompt}}
**Persona:** {{this.custom_persona_prompt}}
{{/if}}

{{/each}}

---

## Round {{session.current_round}} Events

### New Versions Created

{{#if versionsCreated.length}}
{{#each versionsCreated}}
- **{{this.product_name}}** V{{this.version_number}} by {{this.author_name}}
  - {{this.change_summary}}

{{/each}}
{{else}}
*No new versions this round.*
{{/if}}

### Feedback Posted

{{#if collabsThisRound.length}}
{{#each collabsThisRound}}
- **{{this.author_name}}** → {{this.product_name}} (importance: {{this.importance}})
  - "{{this.shortest_summary}}"
  {{#if this.resolved}}— *Resolved*{{/if}}

{{/each}}
{{else}}
*No collabs this round.*
{{/if}}

### Products Accepted

{{#if acceptedProducts.length}}
{{#each acceptedProducts}}
- ✅ **{{this.name}}** accepted (V{{this.selected_version_number}})
{{/each}}
{{else}}
*No products accepted this round.*
{{/if}}

### Decisions Made

{{#if decisionsThisRound.length}}
{{#each decisionsThisRound}}
- **{{this.name}}**: {{this.decision_summary}}
{{/each}}
{{else}}
*No decisions finalized this round.*
{{/if}}

### Blockers & Questions

{{#if blockerRemarks.length}}
{{#each blockerRemarks}}
⚠️ **BLOCKER:** {{this.content}}
- From: {{this.author_name}}

{{/each}}
{{else}}
*No blockers.*
{{/if}}

{{#if questionsForUser.length}}
{{#each questionsForUser}}
❓ **QUESTION:** {{this.text}}

{{/each}}
{{else}}
*No questions for user.*
{{/if}}

### Assignments Made

{{#if assignmentsThisRound.length}}
{{#each assignmentsThisRound}}
- **{{this.product_name}}** → {{this.assignee_names}}
  - Directive: {{this.directive_summary}}

{{/each}}
{{else}}
*No new assignments.*
{{/if}}

---

## Summary of Changes

{{#if roundDeltas.summary}}
{{roundDeltas.summary}}
{{else}}
- {{roundDeltas.versions_created}} new versions
- {{roundDeltas.collabs_posted}} collabs posted
- {{roundDeltas.products_accepted}} products accepted
{{/if}}

---

## Valid Speaker IDs

Only these IDs can speak in your messages. Envoy and Watchdog cannot be speakers.

{{#each speakerMembers}}
- `{{this.id}}` → {{this.name}} ({{this.team_role}}){{#if this.characteristics_flat}} — {{this.characteristics_flat}}{{/if}}
{{/each}}
```

---

## Phase 1 Renderers Used

| Renderer | Usage |
|----------|-------|
| `renderSession` | Session name, round |
| `renderTeamRoster` | Team with characteristics/personas |
| `renderCollabs` | Collabs this round |
| `renderValidIds` | Valid speaker IDs (chair + operatives only) |

---

## Composition Logic

```typescript
function buildPresentationUserPrompt(params: PresentationParams): string {
  const { ctx } = params;
  const sections: string[] = [];
  
  // 1. Session Overview (blockquote for user-provided mission)
  sections.push(`## Session Overview\n\n**Name:** ${ctx.session.name}  \n**Round:** ${ctx.session.current_round}\n\n### Mission\n\n> ${ctx.session.mission_charter}`);
  
  // 2. Team with characteristics
  const teamSection = Array.from(ctx.members.values()).map(m => {
    let section = `### ${m.name} (\`${m.id}\`) — ${m.team_role}`;
    if (m.characteristics) {
      const chars = flattenCharacteristics(m.characteristics);
      if (chars) section += `\n\n**Characteristics:** ${chars}`;
    }
    if (m.custom_persona_prompt) {
      section += `\n\n**Persona:** ${m.custom_persona_prompt}`;
    }
    return section;
  }).join('\n\n');
  sections.push(`---\n\n## Your Team\n\nUse each team member's characteristics to make their messages sound authentic.\n\n${teamSection}`);
  
  // 3. Round Events
  const events = buildRoundEventsSection(ctx);
  sections.push(`---\n\n## Round ${ctx.session.current_round} Events\n\n${events}`);
  
  // 4. Summary
  const delta = getRoundDeltas(ctx);
  sections.push(`---\n\n## Summary of Changes\n\n- ${delta.versions_created} new versions\n- ${delta.collabs_posted} collabs posted\n- ${delta.products_accepted} products accepted`);
  
  // 5. Valid Speaker IDs
  const speakerMembers = Array.from(ctx.members.values())
    .filter(m => m.role === 'chair' || m.role === 'operative');
  const speakerList = speakerMembers.map(m => {
    const chars = flattenCharacteristics(m.characteristics);
    return `- \`${m.id}\` → ${m.name} (${m.team_role})${chars ? ` — ${chars}` : ''}`;
  }).join('\n');
  sections.push(`---\n\n## Valid Speaker IDs\n\nOnly these IDs can speak in your messages. Envoy and Watchdog cannot be speakers.\n\n${speakerList}`);
  
  return sections.join('\n\n');
}
```

---

## Example Output

```markdown
## Session Overview

**Name:** MenuMaster MVP  
**Round:** 2

### Mission

> Build MenuMaster, a SaaS for restaurants to manage dynamic menus with real-time inventory sync.

---

## Your Team

Use each team member's characteristics to make their messages sound authentic.

### Richard (`chair-1`) — project-lead

**Characteristics:** strategic-thinker, decisive, user-focused

**Persona:** You are the mission owner who sees the big picture and keeps the team aligned.

### Alex (`operative-1`) — tech-lead

**Characteristics:** TypeScript, React, Node.js, pragmatic, solution-oriented

**Persona:** You are the architect who treats every millisecond of latency as a personal insult.

### Jordan (`operative-2`) — product-manager

**Characteristics:** UX-focused, user-empathy, clear-communicator

**Persona:** You translate user needs into features and flows that feel natural.

### Casey (`operative-3`) — growth-marketer

**Characteristics:** data-driven, customer-acquisition, positioning

**Persona:** You think in funnels and know exactly how to get to 100 customers.

### Marcus (`watchdog-1`) — security-specialist

**Characteristics:** thorough, risk-aware, quality-focused

*(Cannot be a speaker — findings come through operative responses)*

### Taylor (`envoy-1`) — communications-lead

*(Cannot be a speaker — you are the narrator)*

---

## Round 2 Events

### New Versions Created

- **Technical Architecture Spec** V2 by Alex
  - Added rate limiting (Section 3), auth section (2.4), sync-status endpoint. Latency budget demonstrates <30sec target.

- **Core User Flows** V2 by Jordan
  - Added onboarding flow, clarified QR generation, addressed feedback on menu editing.

### Feedback Posted

- **Marcus** → Technical Architecture Spec (importance: 8)
  - "Rate limiting addressed — 100 req/min/IP now in Section 3" — *Resolved*

- **Marcus** → Technical Architecture Spec (importance: 6)
  - "Auth section added — 2.4 covers JWT validation" — *Resolved*

- **Jordan** → Technical Architecture Spec (importance: 5)
  - "Could we add bulk import for spreadsheet menus?"

- **Alex** → Core User Flows (importance: 6)
  - "Added sync-status endpoint — you might want a dashboard indicator for it"

### Products Accepted

- ✅ **Core User Flows** accepted (V2)

### Decisions Made

*No decisions finalized this round.*

### Blockers & Questions

*No blockers.*

❓ **QUESTION:** Which POS system should we prioritize for the MVP: Toast, Square, or Clover?

### Assignments Made

- **Technical Architecture Spec** → Alex
  - Directive: V3 should address bulk import and finalize API design.

- **API Design Document** → Alex
  - Directive: Create based on architecture, focus on menu CRUD and inventory sync.

---

## Summary of Changes

- 2 new versions
- 4 collabs posted
- 1 product accepted

---

## Valid Speaker IDs

Only these IDs can speak in your messages. Envoy and Watchdog cannot be speakers.

- `chair-1` → Richard (project-lead) — strategic-thinker, decisive, user-focused
- `operative-1` → Alex (tech-lead) — TypeScript, React, Node.js, pragmatic
- `operative-2` → Jordan (product-manager) — UX-focused, user-empathy
- `operative-3` → Casey (growth-marketer) — data-driven, customer-acquisition
```
