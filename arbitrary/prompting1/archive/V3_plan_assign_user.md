# CABAL User Prompt: Plan & Assign

**Step:** Plan & Assign  
**Role:** Chair

---

## Source Variables

| Variable | Source Path | Description |
|----------|-------------|-------------|
| `session.id` | `stepContext.session.id` | Session ID |
| `session.mission_charter` | `stepContext.session.mission_charter` | Mission from Bootstrap |
| `session.underlying_objectives` | `stepContext.session.underlying_objectives` | Success criteria |
| `session.current_round` | `stepContext.session.current_round` | Current round |
| `members` | `stepContext.members` | All team members |
| `member.operative_responsibility` | `MemberContext.operative_responsibility` | Area of ownership |
| `productsById` | `stepContext.productsById` | All products |
| `product.type` | `ProductContext.type` | Product type |
| `product.status` | `ProductContext.status` | Current status |
| `roundDeltas.changedProductIds` | `RoundDeltasContext.changedProductIds` | Changed this round |

---

## User Prompt Template

### Session Context
- **Session:** {{session.id}}
- **Round:** {{session.current_round}}
- **Mission Charter:** {{session.mission_charter}}
- **Underlying Objectives:** {{session.underlying_objectives}}

### Team
{{#each members}}
- **{{this.name}}** ({{this.id}}): {{this.role}} / {{this.team_role}}
  - Responsibility: {{this.operative_responsibility}}
{{/each}}

### Current Product Structure
{{#if products.length}}
{{#each products}}
- [{{this.type}}] **{{this.name}}** ({{this.id}})
  - Status: {{this.status}}
  - Owner: {{this.owner_id}}
{{/each}}
{{else}}
(No products yet - this is Round 1)
{{/if}}

### Round Delta
{{#if roundDeltas.changedProductIds.length}}
Products changed: {{roundDeltas.changedProductIds}}
{{else}}
No changes from prior round.
{{/if}}

### Instructions
Create or update product structure. Assign tasks with directives.

---

## Filled Example

### Session Context
- **Session:** 550e8400-e29b-41d4-a716-446655440000
- **Round:** 1
- **Mission Charter:** Build MenuMaster, a SaaS for restaurants to manage dynamic menus.
- **Underlying Objectives:** 1. Reduce update time. 2. 90% sync uptime. 3. 100 customers.

### Team
- **Alex** (alpha): operative / tech-lead
  - Responsibility: Architecture, API, Infrastructure
- **Jordan** (beta): operative / product-manager
  - Responsibility: UX, Features, Requirements

### Current Product Structure
(No products yet - this is Round 1)

### Round Delta
No changes from prior round.

### Instructions
Create or update product structure. Assign tasks with directives.
