# CABAL User Prompt: Bootstrap

**Step:** Bootstrap  
**Role:** Chair

---

## Source Variables

| Variable | Source Path | Description |
|----------|-------------|-------------|
| `rawUserPrompt` | `BootstrapUserParams.rawUserPrompt` | User's mission description |
| `members` | `stepContext.members` | Available team members |
| `member.id` | `MemberContext.id` | Agent ID |
| `member.name` | `MemberContext.name` | Agent name |
| `member.role` | `MemberContext.role` | Governance role |
| `member.team_role` | `MemberContext.team_role` | Functional role |

---

## User Prompt Template

### User Request
{{rawUserPrompt}}

### Available Team
{{#each members}}
- **{{this.name}}** ({{this.id}}): {{this.role}} / {{this.team_role}}
{{/each}}

### Instructions
You are the Chair. Bootstrap this session.
Define the Mission Charter, underlying objectives, and customize each operative's persona.
If the request is too vague, list questions you need answered.

---

## Filled Example

### User Request
I want to build a SaaS for restaurants to manage online menus.

### Available Team
- **Sarah** (chair-001): chair / chief-strategy-officer
- **Alex** (alpha): operative / tech-lead
- **Jordan** (beta): operative / product-manager
- **Casey** (gamma): operative / growth-marketer
- **Marcus** (watchdog-001): watchdog / risk-manager
- **Taylor** (envoy-001): envoy / communications

### Instructions
You are the Chair. Bootstrap this session.
Define the Mission Charter, underlying objectives, and customize each operative's persona.
If the request is too vague, list questions you need answered.
