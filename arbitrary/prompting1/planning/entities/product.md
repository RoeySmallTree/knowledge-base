# Product Entity Rendering Specification

**Entity:** `ProductContext`  
**Source:** `types.ts → ProductContext`

---

## Data Structure

```typescript
interface ProductContext {
  id: UUID;                      // Unique identifier
  name: string;                  // Display name
  type: ProductType;             // 'Content' | 'Decision' | 'Collection' | 'Orchestration'
  status: MarkedAs;              // 'pending' | 'accepted' | 'abandoned'
  description: string | null;    // Optional description
  definition_of_done: string;    // DoD criteria
  summary: string | null;        // Optional summary
  owner_id: string | null;       // Member ID of owner
  parent_product_id: UUID | null;
  is_round_focus: boolean;       // ★ marker
  is_deliverable: boolean;
  selected_version_id: UUID | null;
  collab_count: number;
  created_at: string;
  updated_at: string;
  
  // Relationships
  children_ids: UUID[];
  version_ids: UUID[];
}
```

---

## Render Options

### Format

```typescript
type ProductFormat = 
  | 'inline'      // Single line: "Name [Type, status] (id)"
  | 'block'       // Multi-line block with header
  | 'tree-node';  // For use within product tree (with indent)
```

### Includes

```typescript
type ProductInclude =
  | 'id'                  // Product UUID
  | 'type'                // Content/Decision/Collection/Orchestration
  | 'status'              // pending/accepted/abandoned
  | 'owner'               // Owner name (resolved from memberMap)
  | 'dod'                 // Definition of Done
  | 'description'         // Optional description
  | 'round_focus'         // ★ ROUND FOCUS marker
  | 'latest_version'      // Latest version info (number, author, summary)
  | 'version_title'       // Title of the latest version
  | 'version_content'     // Full content of latest version (labeled as "Content:")
  | 'version_history'     // Chronological history with directive, summary, feedback, reflection
  | 'collabs'             // All collabs on this product
  | 'collab_count'        // Number of collabs (open/resolved)
  | 'ownership_marker'    // "← YOU" if owned by current member
  | 'since_then';         // Current round: directive, feedback, last reflection
```

### Presets

```typescript
const ProductPresets = {
  minimal: ['id', 'type', 'status'],
  standard: ['id', 'type', 'status', 'owner', 'dod', 'round_focus'],
  full: ['id', 'type', 'status', 'owner', 'dod', 'description', 'round_focus', 
         'latest_version', 'version_title', 'version_content', 'version_history', 'collabs'],
  write: ['id', 'type', 'status', 'owner', 'dod', 'description', 'round_focus',
          'latest_version', 'version_title', 'version_content', 'since_then'],
};
```

---

## Render Interface

```typescript
interface ProductRenderOptions {
  format?: ProductFormat;              // Default: 'block'
  includes?: ProductInclude[];         // Default: ProductPresets.minimal
  
  // Context for lookups
  highlightOwnedBy?: string;           // Add "← YOU" marker if owned by this member
}

function renderProduct(
  product: ProductContext,
  options: ProductRenderOptions,
  context: RenderContext,
): string;
```

---

## Output Examples

### Format: `inline` (minimal preset)

```markdown
Technical Architecture Spec [Content, pending] (d5d4ae24-3375-48c0-9b41-a4c90fe10fc9)
```

### Format: `inline` (with owner + ownership_marker)

```markdown
Technical Architecture Spec [Content, pending] (d5d4ae24-3375-48c0-9b41-a4c90fe10fc9) Owner: Alex ← YOU
```

### Format: `block` (standard preset)

```markdown
### Technical Architecture Spec

**ID:** `d5d4ae24-3375-48c0-9b41-a4c90fe10fc9`
**Type:** Content | **Status:** pending | ★ ROUND FOCUS
**Owner:** Alex (operative-1)
**DoD:** System diagram, data flow, API boundaries, auth docs
```

### Format: `block` (full preset)

```markdown
### Technical Architecture Spec

**ID:** `d5d4ae24-3375-48c0-9b41-a4c90fe10fc9`
**Type:** Content | **Status:** pending | ★ ROUND FOCUS
**Owner:** Alex (operative-1)
**DoD:** System diagram, data flow, API boundaries, auth docs
**Description:** Technical architecture specification for the menu sync platform

---

#### Current Version (V2)

**Author:** Alex

**Title:** Technical Architecture Spec V2

**Content:**
```
## Context
This spec defines the system architecture to achieve <30sec menu update time.

## 1. System Overview
MenuSync is a distributed system...
```

---

#### Version History (chronological)

**V1** by Alex (Round 1)
- **Directed:** "Create initial architecture spec covering core services and data flow."
- **Summary:** Initial architecture covering core services
- **Feedback:**
  - **Marcus** (watchdog, 7/10): "Consider adding security section for auth boundaries."
- **Reflected:** "Good foundation. Need to add auth docs and rate limiting in next iteration."

**V2** by Alex (Round 2)
- **Directed:** "Add rate limiting details and auth section as noted in feedback."
- **Summary:** Added rate limiting, auth section, sync-status endpoint
- **Feedback:**
  - **Marcus** (watchdog, 8/10) [OPEN]: "SECURITY: /public/menus/:id has no rate limiting."
  - **Jordan** (product-manager, 5/10) [OPEN]: "Could we add bulk import for spreadsheet menus?"
- **Reflected:** "Addressed auth section. Rate limiting on public endpoints still needs work."

---

#### Since Then (Current Round)

**Directive received:**
> "Address the security concern about rate limiting on public endpoints."

**Feedback received:**
- **Marcus** (watchdog, 8/10) [OPEN]: "SECURITY: /public/menus/:id has no rate limiting."
- **Jordan** (product-manager, 5/10) [OPEN]: "Could we add bulk import for spreadsheet menus?"

**Last reflection:**
> "Addressed auth section. Rate limiting on public endpoints still needs work."
```

### Format: `tree-node` (for product tree rendering)

```markdown
[Content] **Technical Architecture Spec** (d5d4ae24-3375-48c0-9b41-a4c90fe10fc9)
  Status: pending | Owner: Alex
  DoD: System diagram, data flow, API boundaries, auth docs
  Latest: V2 by Alex → Added rate limiting, auth section
  ★ ROUND FOCUS
```

---

## Usage in Steps

| Step | Format | Includes | Notes |
|------|--------|----------|-------|
| Bootstrap | N/A | No products yet | - |
| Plan & Assign (tree) | `tree-node` | standard + latest_version | - |
| Plan & Assign (pending) | `block` | standard + collab_count | - |
| Write (assigned) | `block` | write preset (with since_then) | Shows directive, feedback, reflection for context |
| Peer Review (reviewed) | `block` | standard + version_title + version_content | - |
| Reflect | `block` | full + version_history | Chronological with directive/feedback/reflection |
| Inspect | `tree-node` | standard | - |
| Presentation | `inline` | minimal | - |

---

## Validation Checklist

✅ All ProductContext fields mapped to includes  
✅ Three formats defined with examples  
✅ Presets for minimal/standard/full/write  
✅ Interface defined with options  
✅ Usage per step documented  
✅ Version history is chronological with directive, summary, feedback, reflection  
✅ "Since Then" section for current round context (directive, feedback, last reflection)  
✅ Content explicitly labeled in block format
