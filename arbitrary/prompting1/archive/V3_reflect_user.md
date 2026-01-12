# CABAL User Prompt: Reflect

**Step:** Reflect  
**Role:** Operative

---

## Source Variables

| Variable | Source Path | Description |
|----------|-------------|-------------|
| `session.mission_charter` | `stepContext.session.mission_charter` | Mission |
| `session.underlying_objectives` | `stepContext.session.underlying_objectives` | Success criteria |
| `session.current_round` | `stepContext.session.current_round` | Round |
| `currentMember.id` | `MemberContext.id` | Agent ID |
| `currentMember.name` | `MemberContext.name` | Agent name |
| `currentMember.team_role` | `MemberContext.team_role` | Role |
| `currentMember.custom_persona_prompt` | `MemberContext.custom_persona_prompt` | Persona |
| `ownedProducts` | Filtered `productsById` | Products this agent owns |
| `ownedProduct.definition_of_done` | `ProductContext.definition_of_done` | DoD |
| `ownedProduct.status` | `ProductContext.status` | Status |
| `currentVersion.content` | `VersionContext.content` | Current content |
| `currentVersion.version_number` | `VersionContext.version_number` | Version |
| `collabsForProduct` | Filtered `collabsById` | Feedback received |
| `collab.resolved` | `CollabContext.resolved` | Whether addressed |

---

## User Prompt Template

### Your Identity
You are **{{currentMember.name}}** ({{currentMember.id}}) — {{currentMember.team_role}}.

#### Your Persona
{{currentMember.custom_persona_prompt}}

### Session Context
- **Round:** {{session.current_round}}
- **Mission Charter:** {{session.mission_charter}}
- **Underlying Objectives:** {{session.underlying_objectives}}

### Your Products

{{#each ownedProducts}}
#### {{this.name}} ({{this.id}})
- **Status:** {{this.status}}
- **DoD:** {{this.definition_of_done}}
- **Current Version:** {{this.currentVersion.version_number}}

##### Feedback Received
{{#each this.collabs}}
- [{{#if this.resolved}}✓{{else}}◯{{/if}}] **{{this.author_id}}** (importance: {{this.importance}}): {{this.content}}
{{/each}}
{{/each}}

### Instructions
Reflect on your work and feedback. Plan next actions.

---

## Filled Example

### Your Identity
You are **Alex** (alpha) — tech-lead.

#### Your Persona
You are the architect of MenuMaster's technical backbone.

### Session Context
- **Round:** 2
- **Mission Charter:** Build MenuMaster, a SaaS for dynamic menus.
- **Underlying Objectives:** 1. Update time to 30sec. 2. 90% uptime.

### Your Products

#### Technical Architecture Spec (660e8400-...)
- **Status:** in_progress
- **DoD:** Diagram + narrative covering services and auth.
- **Current Version:** 2

##### Feedback Received
- [✓] **watchdog-001** (importance: 8): Add rate limiting.
- [◯] **beta** (importance: 7): How does owner know sync is working?

### Instructions
Reflect on your work and feedback. Plan next actions.
