# Member Entity Rendering Specification

**Entity:** `MemberContext`  
**Source:** `types.ts → MemberContext`

---

## Data Structure

```typescript
interface MemberContext {
  id: string;                    // e.g., 'operative-1', 'chair-1'
  name: string;                  // Display name
  role: TeamRole;                // 'chair' | 'operative' | 'watchdog' | 'envoy'
  team_role: string | null;      // e.g., 'tech-lead', 'product-manager'
  characteristics: {
    professional: string[];      // Professional traits
    personality_style: string[]; // Working style traits
  } | null;
  custom_persona_prompt: string | null;  // Full persona from Bootstrap
  operative_responsibility: string | null;  // Scope of ownership
  operative_area: string | null;           // Domain/focus area
  life_story: string | null;               // Background narrative
  special_orders: string | null;           // Special instructions
  owned_products_count: number;
  owned_pending_products_count: number;
}
```

---

## Render Options

### Format

```typescript
type MemberFormat = 
  | 'inline'          // Single line: "Name (id) - role"
  | 'list-item'       // For team roster lists
  | 'block'           // Full persona block
  | 'id-reference';   // For valid IDs section: "id → Name (team_role)"
```

### Includes

```typescript
type MemberInclude =
  | 'id'                    // Member ID (operative-1, chair-1)
  | 'name'                  // Display name
  | 'role'                  // chair/operative/watchdog/envoy
  | 'team_role'             // tech-lead, product-manager, etc.
  | 'responsibility'        // Scope of ownership
  | 'area'                  // Domain/focus area
  | 'persona'               // Custom persona prompt
  | 'life_story'            // Background narrative
  | 'special_orders'        // Special instructions
  | 'owned_products'        // Product counts
  | 'current_marker';       // "← YOU" if current member
```

### Presets

```typescript
const MemberPresets = {
  // For quick inline references
  minimal: ['name', 'id', 'role'],
  
  // For team roster in Plan & Assign (Chair needs to see responsibilities)
  standard: ['name', 'id', 'role', 'team_role', 'responsibility'],
  
  // For system prompts (full persona injection)
  full: ['name', 'id', 'role', 'team_role', 'responsibility', 'area', 'persona'],
  
  // For assignment decisions (Chair needs workload visibility)
  assignment: ['name', 'id', 'role', 'team_role', 'responsibility', 'area', 'owned_products'],
};
```

---

## Render Interface

```typescript
interface MemberRenderOptions {
  format?: MemberFormat;               // Default: 'inline'
  includes?: MemberInclude[];          // Default: MemberPresets.minimal
  
  // Filters
  filterRole?: TeamRole;               // Filter to specific role
  operativesOnly?: boolean;            // Filter to operatives only
  
  // Context
  isCurrentMember?: boolean;           // Add "← YOU" marker
}

function renderMember(
  member: MemberContext,
  options: MemberRenderOptions,
  context: RenderContext,
): string;

function renderTeamRoster(
  members: Map<string, MemberContext>,
  options: MemberRenderOptions,
  context: RenderContext,
): string;
```

---

## Output Examples

### Format: `inline` (minimal preset)

```markdown
Alex (operative-1) - operative
```

With current marker:
```markdown
Alex (operative-1) - operative ← YOU
```

### Format: `list-item` (standard preset - for Chair's team overview)

```markdown
- **Alex** (operative-1): operative / tech-lead
  - Responsibility: Architecture, API design, backend infrastructure
```

With workload (assignment preset):
```markdown
- **Alex** (operative-1): operative / tech-lead
  - Responsibility: Architecture, API design, backend infrastructure
  - Area: Backend & Infrastructure
  - Products: 3 total, 2 pending
```

### Format: `block` (full preset - for system prompts)

```markdown
You are **Alex** (operative-1), the **tech-lead** on this team.

You are the architect of this platform's technical backbone. Your obsession is real-time data sync that doesn't break. You treat every millisecond of latency as a personal insult. Your API designs must handle the lunch rush without breaking a sweat.

---

**Your Domain:**
- **Responsibility:** Architecture, API design, backend infrastructure, database schema, real-time sync system
- **Area:** Backend & Infrastructure
```

### Format: `id-reference` (for Valid IDs section)

```markdown
operative-1 → Alex (tech-lead)
```

---

## Team Roster Rendering

### For Plan & Assign (Chair needs full visibility)

```markdown
### TEAM

- **Richard** (chair-1): chair / project-lead
  - Responsibility: Mission ownership, decisions, structure

- **Alex** (operative-1): operative / tech-lead
  - Responsibility: Architecture, API, Backend
  - Products: 3 total, 2 pending

- **Jordan** (operative-2): operative / product-manager
  - Responsibility: UX, User flows, Features
  - Products: 2 total, 1 pending

- **Casey** (operative-3): operative / growth-marketer
  - Responsibility: GTM, Positioning, Acquisition
  - Products: 1 total, 1 pending

- **Marcus** (watchdog-1): watchdog / security-specialist
  - Responsibility: QA, Security, Coherence

- **Stacy** (envoy-1): envoy / communications
  - Responsibility: User-facing summaries
```

### For Valid IDs (Operatives only)

```markdown
Team Members (Operatives only for assignments):
  operative-1 → Alex (tech-lead)
  operative-2 → Jordan (product-manager)
  operative-3 → Casey (growth-marketer)
```

### Your Perspective (for operative prompts)

```markdown
### YOUR PERSPECTIVE

You are **Alex** (operative-1), the **tech-lead**.

You are the architect of this platform's technical backbone. Your obsession is real-time data sync that doesn't break.

**Your products:** 3 total, 2 pending
```

---

## Usage in Steps

| Step | Format | Includes | Notes |
|------|--------|----------|-------|
| Bootstrap | `list-item` | minimal | Team structure being defined |
| Plan & Assign | `list-item` | assignment | Chair needs workload, responsibilities |
| Write | `block` | full | System prompt persona |
| Peer Review | `block` | full | System prompt persona |
| Inspect | `block` | full | Watchdog persona |
| Presentation | `block` | full | Envoy persona |
| Valid IDs | `id-reference` | minimal | Operatives only |

---

## Validation Checklist

✅ All MemberContext fields mapped to includes  
✅ Four formats defined (inline, list-item, block, id-reference)  
✅ Role included in minimal preset  
✅ Responsibility included for Chair prompts  
✅ Workload (owned_products) available for assignment decisions  
✅ Presets for minimal/standard/full/assignment  
✅ Interface defined with filters  
✅ Usage per step documented
