# Session Entity Rendering Specification

**Entity:** `SessionContext`  
**Source:** `types.ts → SessionContext`

---

## Data Structure

```typescript
interface SessionContext {
  id: UUID;                         // Session identifier
  name: string;                     // Session name
  status: string;                   // 'active' | 'paused' | 'completed'
  current_round: number;            // Current round number
  root_product_id: UUID | null;     // Root of product tree
  mission_statement: string | null; // Legacy mission text
  mission_objectives: string | null;// Legacy objectives
  mission_charter: string | null;   // Bootstrap-generated charter
  underlying_objectives: string | null; // Bootstrap-generated objectives
  missing_details: string[] | null; // Questions for user
  team_name: string | null;
  team_description: string | null;
}
```

---

## Render Options

### Format

```typescript
type SessionFormat = 
  | 'inline'          // Single line: "Session: Name | Round: 2"
  | 'header'          // Multi-line header block
  | 'full';           // Complete with mission and objectives
```

### Includes

```typescript
type SessionInclude =
  | 'name'                  // Session name
  | 'round'                 // Current round number
  | 'status'                // active/paused/completed
  | 'mission_charter'       // Full mission charter
  | 'objectives'            // Underlying objectives
  | 'missing_details';      // Open questions for user
```

### Presets

```typescript
const SessionPresets = {
  minimal: ['name', 'round'],
  standard: ['name', 'round', 'status'],
  full: ['name', 'round', 'status', 'mission_charter', 'objectives', 'missing_details'],
};
```

---

## Render Interface

```typescript
interface SessionRenderOptions {
  format?: SessionFormat;              // Default: 'header'
  includes?: SessionInclude[];         // Default: SessionPresets.minimal
}

function renderSession(
  session: SessionContext,
  options: SessionRenderOptions,
): string;
```

---

## Output Examples

### Format: `inline` (minimal preset)

```markdown
**Session:** Menu SaaS MVP | **Round:** 2
```

### Format: `header` (standard preset)

```markdown
### SESSION

**Name:** Menu SaaS MVP
**Round:** 2
**Status:** active
```

### Format: `full` (full preset)

```markdown
### SESSION

**Name:** Menu SaaS MVP
**Round:** 2
**Status:** active

---

### MISSION

**THE MISSION:** Build a SaaS platform enabling restaurants to manage dynamic, QR-code based menus with real-time inventory sync.

**CORE OBJECTIVE:** Create a production-ready MVP that allows restaurant owners to update their menus in seconds rather than hours.

**DEFINITION OF DONE:**
1. Restaurant owners can create, edit, and publish menus rapidly
2. QR codes generated and printable for each menu
3. Real-time inventory sync shows item availability
4. Multi-location support for restaurant groups

**WHY IT MATTERS:** Restaurant owners waste hours updating menus manually. This platform gives them control back.

---

### OBJECTIVES

1. **Speed:** Reduce menu update time to <30 seconds
2. **Reliability:** 90% uptime for inventory sync
3. **Adoption:** 100 paying customers in 6 months
4. **Simplicity:** Usable after a 12-hour shift
5. **Scalability:** Multi-location from day 1

---

### OPEN QUESTIONS

- What is the initial budget or runway?
- What is the target timeline for MVP launch?
- Product name and branding?
```

---

## Standalone Section Renderers

For injecting just specific sections:

### Mission Charter Only

```typescript
function renderMissionCharter(session: SessionContext): string;
```

**Output:**
```markdown
### MISSION

**THE MISSION:** Build a SaaS platform enabling restaurants to manage dynamic, QR-code based menus with real-time inventory sync.

**CORE OBJECTIVE:** Create a production-ready MVP...

[...]
```

### Objectives Only

```typescript
function renderObjectives(session: SessionContext): string;
```

**Output:**
```markdown
### OBJECTIVES

1. **Speed:** Reduce menu update time to <30 seconds
2. **Reliability:** 90% uptime for inventory sync
3. **Adoption:** 100 paying customers in 6 months
```

---

## Usage in Steps

| Step | Format | Includes |
|------|--------|----------|
| Bootstrap | `inline` | minimal |
| Plan & Assign | `full` | full |
| Write | `header` + mission | standard + mission_charter |
| Peer Review | `header` + mission | standard + mission_charter |
| Inspect | `header` | standard |
| Presentation | `full` | full |

---

## Validation Checklist

✅ All SessionContext fields mapped to includes  
✅ Three formats defined with examples  
✅ Standalone section renderers specified  
✅ Presets for minimal/standard/full  
✅ Interface defined with options  
✅ Usage per step documented
