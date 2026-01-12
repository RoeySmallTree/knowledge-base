# Version Entity Rendering Specification

**Entity:** `VersionContext`  
**Source:** `types.ts → VersionContext`

---

## Data Structure

```typescript
interface VersionContext {
  id: UUID;                      // Unique identifier
  product_id: UUID;              // Parent product
  version_number: number;        // Sequential version (1, 2, 3...)
  round_number: number | null;   // Round when this version was created
  title: string | null;          // Optional explicit title
  content: string;               // Full content text (markdown)
  change_summary: string;        // What changed in this version
  directive: string | null;      // Chair directive that initiated this version
  reflection_note: string | null;// Author's reflection after completing this version
  author_id: string;             // Member who created this version
  author_kind: ActorKind;        // 'chair' | 'operative' | 'watchdog' | 'envoy' | 'user'
  created_at: string;            // ISO timestamp
}
```

---

## Render Options

### Format

```typescript
type VersionFormat = 
  | 'inline'      // Single line: "V2 by Alex — Summary"
  | 'block'       // Multi-line with content
  | 'changelog';  // For version history lists
```

### Includes

```typescript
type VersionInclude =
  | 'version_number'    // V1, V2, etc.
  | 'round_number'      // Round when created
  | 'title'             // Explicit title
  | 'author'            // Author name (resolved)
  | 'author_kind'       // operative/chair/user
  | 'change_summary'    // What changed
  | 'directive'         // Chair directive that initiated this version
  | 'content'           // Full content text
  | 'reflection_note'   // Author's reflection after completing
  | 'created_at'        // Timestamp
  | 'delta';            // Diff from previous version
```

### Presets

```typescript
const VersionPresets = {
  minimal: ['version_number', 'author', 'change_summary'],
  standard: ['version_number', 'author', 'author_kind', 'change_summary', 'created_at'],
  full: ['version_number', 'author', 'author_kind', 'change_summary', 'created_at', 'content'],
  history: ['version_number', 'round_number', 'author', 'directive', 'change_summary', 'reflection_note'],
};
```

---

## Render Interface

```typescript
interface VersionRenderOptions {
  format?: VersionFormat;              // Default: 'inline'
  includes?: VersionInclude[];         // Default: VersionPresets.minimal
  
  // For delta computation
  previousVersion?: VersionContext;    // Required if 'delta' is in includes
}

function renderVersion(
  version: VersionContext,
  options: VersionRenderOptions,
  context: RenderContext,
): string;
```

---

## Output Examples

### Format: `inline` (minimal preset)

```markdown
**V2** by Alex — Added rate limiting, auth section, sync-status endpoint
```

### Format: `changelog` (for version history)

```markdown
- **V2** by Alex — Added rate limiting, auth section, sync-status endpoint
- **V1** by Alex — Initial architecture covering core services
```

### Format: `block` (standard preset)

```markdown
**Version 2**
**Author:** Alex (operative)
**Created:** 2025-12-11T10:30:00Z
**Summary:** Added rate limiting, auth section, sync-status endpoint
```

### Format: `block` (full preset with content)

```markdown
#### Version 2

**Author:** Alex (operative)
**Created:** 2025-12-11T10:30:00Z
**Summary:** Added rate limiting, auth section, sync-status endpoint

---

# Technical Architecture Spec V2

## Context
This spec defines the system architecture to achieve <30sec menu update time.

## 1. System Overview
MenuSync is a distributed system designed to achieve <30sec menu update time.

[... full content ...]
```

### Format: `block` (with delta)

```markdown
#### Version 2

**Author:** Alex (operative)
**Summary:** Added rate limiting, auth section, sync-status endpoint

---

**Changes from V1:**

```diff
+ ## 2.4 Authentication ← NEW SECTION
+ - JWT validation via Clerk
+ - Role enforcement for mutations
+ 
+ ## 3. Rate Limits ← NEW
+ | Endpoint | Limit |
+ |----------|-------|
+ | /public/* | 100/min/IP |
```
```

---

## Usage in Steps

| Step | Format | Includes | Notes |
|------|--------|----------|-------|
| Reflect | `block` | standard + delta | - |
| Plan & Assign | `inline` | minimal (in tree) | - |
| Write | `block` | title + content | Explicitly labeled |
| Peer Review | `block` | full (content being reviewed) | - |
| Product History | - | history preset | Used within product version_history |
| Inspect | `changelog` | minimal | - |
| Presentation | `inline` | minimal | - |

---

## Validation Checklist

✅ All VersionContext fields mapped to includes  
✅ Three formats defined with examples  
✅ Delta rendering specified  
✅ Presets for minimal/standard/full/history  
✅ Interface defined with options  
✅ Usage per step documented  
✅ New fields: title, round_number, directive, reflection_note
