# CABAL User Prompt: Bootstrap (V4.7)

**Step:** Bootstrap  
**Role:** Chair

---

## Source Variables (User Prompt)

| Variable | Source Path |
|----------|-------------|
| `rawUserPrompt` | `BootstrapUserParams.rawUserPrompt` |
| `members` | `stepContext.members` |
| `member.id` | `MemberContext.id` |
| `member.name` | `MemberContext.name` |
| `member.role` | `MemberContext.role` |
| `member.team_role` | `MemberContext.team_role` |
| `member.characteristics` | `MemberContext.characteristics` |
| `member.life_story` | `MemberContext.life_story` |

---

## User Prompt Template

[USER REQUEST]
{{rawUserPrompt}}

[AVAILABLE TEAM]
{{#each members}}
**{{this.name}}** ({{this.id}})
Role: {{this.role}} / {{this.team_role}}
{{#if this.characteristics.professional}}
Expertise: {{this.characteristics.professional}}
{{/if}}
{{#if this.characteristics.personality_style}}
Style: {{this.characteristics.personality_style}}
{{/if}}
{{#if this.life_story}}
Background: {{this.life_story}}
{{/if}}
{{/each}}

[TEAM MEMBER IDS FOR OUTPUT]
Personas needed (customized_personas):
{{#each members}}
  "{{this.id}}": "persona for {{this.name}}"
{{/each}}

Domains needed (operative_domains) — operatives only:
{{#each operatives}}
  "{{this.id}}": { "responsibility": "...", "area": "..." }
{{/each}}

---

## Filled Example

[USER REQUEST]
I want to build a SaaS for restaurants to manage online menus.

[AVAILABLE TEAM]
**Richard** (chair-1)
Role: chair / project-lead
Expertise: strategic-thinker, user-focused
Style: collaborative, decisive

**Alex** (operative-1)
Role: operative / tech-lead
Expertise: TypeScript, React, Node.js, PostgreSQL
Style: pragmatic, solution-oriented
Background: 10 years building scalable systems. Led engineering at two successful startups. Obsessed with API design and performance.

**Jordan** (operative-2)
Role: operative / product-manager
Expertise: UX research, user flows, feature prioritization
Style: user-focused, empathetic, articulate
Background: Former restaurant owner turned product manager. Knows the pain of menu management firsthand.

**Casey** (operative-3)
Role: operative / growth-marketer
Expertise: customer acquisition, positioning, funnel optimization
Style: data-driven, creative, persistent
Background: Grew three B2B SaaS products from 0 to 1000 customers. Expertise in SMB markets.

**Marcus** (watchdog-1)
Role: watchdog / security-specialist
Expertise: security, quality assurance, API testing
Style: thorough, methodical, paranoid (in a good way)

**Taylor** (envoy-1)
Role: envoy / communications-lead
Expertise: technical writing, stakeholder communication
Style: clear, empathetic, user-focused

[TEAM MEMBER IDS FOR OUTPUT]
Personas needed (customized_personas):
  "chair-1": "persona for Richard"
  "operative-1": "persona for Alex"
  "operative-2": "persona for Jordan"
  "operative-3": "persona for Casey"
  "watchdog-1": "persona for Marcus"
  "envoy-1": "persona for Taylor"

Domains needed (operative_domains) — operatives only:
  "operative-1": { "responsibility": "...", "area": "..." }
  "operative-2": { "responsibility": "...", "area": "..." }
  "operative-3": { "responsibility": "...", "area": "..." }
