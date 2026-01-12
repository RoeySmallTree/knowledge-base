# CABAL User Prompt: Present

**Step:** Present  
**Role:** Envoy

---

## Source Variables

| Variable | Source Path | Description |
|----------|-------------|-------------|
| `session.name` | `stepContext.session.name` | Session name |
| `session.mission_charter` | `stepContext.session.mission_charter` | Mission |
| `session.current_round` | `stepContext.session.current_round` | Round |
| `currentMember.name` | `MemberContext.name` | Envoy name |
| `members` | `stepContext.members` | All team members |
| `roundDeltas.changedProductIds` | `RoundDeltasContext.changedProductIds` | Changed products |
| `changedProducts` | Filtered `productsById` | Products with new versions |
| `latestVersion.change_summary` | `VersionContext.change_summary` | What changed |
| `collabsThisRound` | Filtered by round | Collabs posted |
| `collab.shortest_summary` | `CollabContext.shortest_summary` | Brief summary |
| `remarksThisRound` | Filtered by round | Remarks |
| `remark.is_blocker` | `RemarkContext.is_blocker` | Whether blocking |

---

## User Prompt Template

### Your Role
You are the **Envoy**: {{currentMember.name}}.

### Session
- **Name:** {{session.name}}
- **Round:** {{session.current_round}}
- **Mission:** {{session.mission_charter}}

### Team
{{#each members}}
- {{this.name}} ({{this.id}}): {{this.team_role}}
{{/each}}

### Round {{session.current_round}} Events

#### Products Changed
{{#each changedProducts}}
- **{{this.name}}** by {{this.owner_id}}: V{{this.latestVersion.version_number}} — {{this.latestVersion.change_summary}}
{{/each}}

#### Collabs Posted
{{#each collabsThisRound}}
- **{{this.author_id}}** on {{this.about_product_id}}: {{this.shortest_summary}}
{{/each}}

#### Remarks / Blockers
{{#each remarksThisRound}}
- [{{this.type}}{{#if this.is_blocker}} BLOCKER{{/if}}] {{this.content}}
{{/each}}

### Instructions
Summarize this round for the user. Be natural and concise.

---

## Filled Example

### Your Role
You are the **Envoy**: Taylor.

### Session
- **Name:** MenuMaster MVP
- **Round:** 2
- **Mission:** Build a SaaS for dynamic menus with inventory sync.

### Team
- Alex (alpha): tech-lead
- Jordan (beta): product-manager
- Casey (gamma): growth-marketer

### Round 2 Events

#### Products Changed
- **Technical Architecture Spec** by alpha: V2 — Added rate limiting, auth section.
- **Core User Flows** by beta: V2 — Added onboarding flow.

#### Collabs Posted
- **watchdog-001** on Architecture: Rate limiting addressed.
- **beta** on Architecture: Sync visibility question.

#### Remarks / Blockers
- [question] Which POS first: Toast, Square, or Clover?

### Instructions
Summarize this round for the user. Be natural and concise.
