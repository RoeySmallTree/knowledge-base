# Collab Entity Rendering Specification

**Entity:** `CollabContext`  
**Source:** `types.ts → CollabContext`

---

## Data Structure

```typescript
interface CollabContext {
  id: UUID;                      // Unique identifier
  author_id: string;             // Member who wrote this collab
  author_kind: ActorKind;        // 'chair' | 'operative' | 'watchdog' | 'envoy' | 'user'
  addressee_ids: string[];       // Who this is addressed to
  about_product_id: UUID;        // Product being discussed
  about_version_id: UUID | null; // Specific version (optional)
  references_product_ids: UUID[];// Other products referenced
  importance: number;            // 1-10 scale
  content: string;               // The feedback content
  shortest_summary: string;      // One-line summary
  resolved: boolean;             // Whether addressed
  created_at: string;            // ISO timestamp
}
```

---

## Render Options

### Format

```typescript
type CollabFormat = 
  | 'inline'          // Single line: "[OPEN] Author → Product (importance)"
  | 'block'           // Multi-line with content
  | 'directive'       // Chair directive format
  | 'feedback-item';  // For feedback lists
```

### Includes

```typescript
type CollabInclude =
  | 'status'              // [OPEN] or [✓ RESOLVED]
  | 'author'              // Author name
  | 'author_kind'         // operative/chair/watchdog
  | 'product_name'        // Product being discussed
  | 'product_id'          // Product UUID
  | 'importance'          // Importance rating (1-10)
  | 'content'             // Full feedback content
  | 'summary'             // One-line summary
  | 'addressees'          // Who it's addressed to
  | 'references'          // Referenced products
  | 'created_at';         // Timestamp
```

### Presets

```typescript
const CollabPresets = {
  minimal: ['status', 'author', 'product_name', 'importance'],
  standard: ['status', 'author', 'author_kind', 'product_name', 'importance', 'content'],
  full: ['status', 'author', 'author_kind', 'product_name', 'product_id', 
         'importance', 'content', 'summary', 'addressees', 'references'],
};
```

---

## Render Interface

```typescript
interface CollabRenderOptions {
  format?: CollabFormat;               // Default: 'feedback-item'
  includes?: CollabInclude[];          // Default: CollabPresets.minimal
  
  // Filters
  filterResolved?: boolean;            // true = only resolved, false = only open, undefined = all
}

function renderCollab(
  collab: CollabContext,
  options: CollabRenderOptions,
  context: RenderContext,
): string;

function renderCollabs(
  collabs: CollabContext[],
  options: CollabRenderOptions,
  context: RenderContext,
): string;
```

---

## Output Examples

### Format: `inline` (minimal preset)

**Open collab:**
```markdown
[OPEN] Marcus → Technical Architecture Spec (8/10)
```

**Resolved collab:**
```markdown
[✓] Marcus → Database Schema (7/10)
```

### Format: `feedback-item` (standard preset)

**Open:**
```markdown
[OPEN] **Marcus** (watchdog) → Technical Architecture Spec (importance: 8/10):
> "SECURITY: /public/menus/:id has no rate limiting. Vulnerable to DDoS."
```

**Resolved:**
```markdown
[✓ RESOLVED] **Marcus** (watchdog) → Database Schema (importance: 7/10):
> "Missing index on restaurant_id column."
```

### Format: `block` (full preset)

```markdown
### Collab from Marcus

**ID:** `collab-sec-001`
**Status:** ⚠️ Open
**About:** Technical Architecture Spec (`d5d4ae24-3375-48c0-9b41-a4c90fe10fc9`)
**Importance:** 8/10
**Addressees:** Alex, Team

---

SECURITY: /public/menus/:id has no rate limiting. This endpoint is publicly accessible and could be used for DDoS attacks.

Consider adding:
- Rate limiting of 100 req/min per IP for public endpoints
- Cloudflare or similar protection at the edge

**TL;DR:** DDoS vulnerability on public menu endpoint
```

### Format: `directive` (Chair directive)

```markdown
#### Chair Directive

**For:** Technical Architecture Spec (`d5d4ae24-3375-48c0-9b41-a4c90fe10fc9`)
**Importance:** 9/10

**CORE OBJECTIVE:** Fix security vulnerabilities and complete missing auth section.

**DEFINITION OF DONE:**
- Rate limiting added to /public/menus/:id endpoint
- Complete authentication/authorization section
- All Marcus's security concerns addressed

**WHY IT MATTERS:** Security vulnerabilities block production deployment.

**CONTEXT:** Addressing Marcus's collabs: #8 (DDoS vulnerability) and #6 (missing auth section).
```

---

## Grouped Rendering

For showing collabs grouped by status or product:

### Grouped by Status

```markdown
### COLLABS & FEEDBACK

**Open (3):**

[OPEN] **Marcus** (watchdog) → Technical Architecture Spec (8/10):
> "SECURITY: /public/menus/:id has no rate limiting."

[OPEN] **Marcus** (watchdog) → Technical Architecture Spec (6/10):
> "COMPLETENESS: Auth section missing per DoD."

[OPEN] **Jordan** (product-manager) → Technical Architecture Spec (5/10):
> "Could we add bulk import for spreadsheet menus?"

**Resolved (1):**

[✓] **Marcus** (watchdog) → Database Schema (7/10):
> "Missing index on restaurant_id column."
```

### Grouped by Product

```markdown
#### Feedback on "Technical Architecture Spec"

- **Marcus** (watchdog, 8/10) [OPEN]:
  > "SECURITY: /public/menus/:id has no rate limiting."
- **Marcus** (watchdog, 6/10) [OPEN]:
  > "Auth section missing per DoD."
- **Jordan** (product-manager, 5/10) [OPEN]:
  > "Could we add bulk import?"

**Summary:** 3 open, 0 resolved
```

---

## Usage in Steps

| Step | Format | Includes | Filter |
|------|--------|----------|--------|
| Reflect | `feedback-item` | standard | filterResolved: false |
| Plan & Assign | `feedback-item` | standard | all (show both) |
| Write (directive) | `directive` | full | chair only |
| Write (feedback) | `feedback-item` | standard | filterResolved: false |
| Peer Review | N/A | Creating collabs | N/A |
| Inspect | `feedback-item` | standard | filterResolved: false |
| Presentation | `inline` | minimal | all |

---

## Validation Checklist

✅ All CollabContext fields mapped to includes  
✅ Four formats defined (inline, block, directive, feedback-item)  
✅ Open vs resolved handling specified  
✅ Grouped rendering specified  
✅ Presets for minimal/standard/full  
✅ Interface defined with filters  
✅ Usage per step documented
