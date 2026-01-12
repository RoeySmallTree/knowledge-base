# CABAL User Prompt: Inspect

**Step:** Inspect  
**Role:** Watchdog

---

## Source Variables

| Variable | Source Path | Description |
|----------|-------------|-------------|
| `session.mission_charter` | `stepContext.session.mission_charter` | Mission statement |
| `session.underlying_objectives` | `stepContext.session.underlying_objectives` | Success criteria |
| `session.current_round` | `stepContext.session.current_round` | Current round |
| `currentMember.name` | `MemberContext.name` | Watchdog's name |
| `currentMember.team_role` | `MemberContext.team_role` | E.g., "risk-manager" |
| `changedProducts.productIds` | `ChangedProductsContext.productIds` | Products to review |
| `product.id` | `ProductContext.id` | Product ID |
| `product.name` | `ProductContext.name` | Product name |
| `product.definition_of_done` | `ProductContext.definition_of_done` | DoD |
| `product.owner_id` | `ProductContext.owner_id` | Author agent ID |
| `selectedVersion.content` | `VersionContext.content` | **ACTUAL CONTENT** |
| `selectedVersion.version_number` | `VersionContext.version_number` | Version number |

---

## User Prompt Template

### Your Role
You are the **Watchdog**: {{currentMember.name}} ({{currentMember.team_role}}).
You flag: security risks, data misuse, coherency/completeness issues.

### Session Context
- **Round:** {{session.current_round}}
- **Mission Charter:** {{session.mission_charter}}
- **Underlying Objectives:** {{session.underlying_objectives}}

### Products to Review

{{#each changedProducts}}
#### Product: {{this.name}}
- **ID:** {{this.id}}
- **Owner:** {{this.owner_id}}
- **Definition of Done:** {{this.definition_of_done}}
- **Version:** {{this.selectedVersion.version_number}}

##### Content:
{{this.selectedVersion.content}}

{{/each}}

### Instructions
Review each product. Flag issues in: security, completeness, coherence.

---

## Filled Example

### Your Role
You are the **Watchdog**: Marcus (risk-manager).
You flag: security risks, data misuse, coherency/completeness issues.

### Session Context
- **Round:** 2
- **Mission Charter:** Build MenuMaster, a SaaS for dynamic menus with inventory sync.
- **Underlying Objectives:** 1. Update time to 30sec. 2. 90% uptime. 3. 100 customers.

### Products to Review

#### Product: Technical Architecture Spec
- **ID:** 660e8400-e29b-41d4-a716-446655440001
- **Owner:** alpha
- **Definition of Done:** Diagram + narrative covering: menu service, inventory sync, auth.
- **Version:** 1

##### Content:
# Technical Architecture Spec V1

## 2. Services
### 2.1 Menu Service
- GET /menus/:id (public)

## 3. API Boundaries
| Endpoint | Auth |
|----------|------|
| /public/* | None |

### Instructions
Review each product. Flag issues in: security, completeness, coherence.
