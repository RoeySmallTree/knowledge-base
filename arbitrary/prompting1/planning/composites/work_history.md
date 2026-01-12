# Work History Composite Rendering Specification

**Composite:** Product Work History  
**Uses:** [Product](../entities/product.md), [Version](../entities/version.md), [Collab](../entities/collab.md)  
**Purpose:** Complete context for a product including directive, versions, and feedback

---

## Purpose

Renders the complete work history for a product. Used in Reflect and Write steps where the operative needs full context on what they've done and what feedback they've received.

---

## Data Dependencies

```typescript
// Required context
const product: ProductContext;
const versions: VersionContext[];       // All versions of this product
const collabs: CollabContext[];         // Collabs about this product
const directive: CollabContext | null;  // Chair directive (author_kind === 'chair')
const memberMap: Map<string, MemberContext>;
const currentMemberId: string;          // For "you" markers
```

---

## Render Options

```typescript
interface WorkHistoryRenderOptions {
  includeDirective?: boolean;        // Include chair directive (default: true)
  includeLatestContent?: boolean;    // Include full version content (default: true)
  includeDelta?: boolean;            // Include diff from previous version (default: true)
  includePeerFeedback?: boolean;     // Include collabs (default: true)
  includeHistory?: boolean;          // Include version history (default: true)
}
```

---

## Output Example

```markdown
### Product: Technical Architecture Spec

**ID:** `d5d4ae24-3375-48c0-9b41-a4c90fe10fc9`
**Type:** Content | **Status:** pending
**Owner:** Alex (operative-1)
**DoD:** System diagram, data flow, API boundaries, auth docs

---

**THIS ROUND:**

You received this directive:

  "**CORE OBJECTIVE:** Fix security vulnerabilities and complete missing auth section.
   **DEFINITION OF DONE:** Rate limiting added, auth section complete.
   **WHY IT MATTERS:** Security vulnerabilities block production deployment."

And made this version:

  **V2** (Added rate limiting, auth section, sync-status endpoint)

  **Full content:**
  ```
# Technical Architecture Spec V2

## Context
This spec defines the system architecture to achieve <30sec menu update time.

## 1. System Overview
MenuSync is a distributed system...

## 2.4 Authentication ← NEW SECTION
- JWT validation via Clerk
- Role enforcement for mutations

## 3. Rate Limits ← NEW
| Endpoint | Limit |
|----------|-------|
| /public/* | 100/min/IP |
  ```

  **Changes from V1:**
  ```diff
+ ## 2.4 Authentication ← NEW SECTION
+ - JWT validation via Clerk
+ - Role enforcement for mutations
+ 
+ ## 3. Rate Limits ← NEW
  ```

Since then, you've received the following feedback:

  - **Jordan** (operative, 8/10) [OPEN]:
    The sync status visibility for restaurant owners isn't addressed.

  - **Jordan** (operative, 7/10) [OPEN]:
    The retry delays are too long for urgent updates.

  - **Marcus** (watchdog, 6/10) [✓]:
    Rate limiting looks good now.

---

**HISTORY:**

  V1 (you): Initial architecture covering core services.
  V2 (you): Added rate limiting, auth section, sync-status endpoint.
```

---

## Renderer Interface

```typescript
function renderWorkHistory(
  product: ProductContext,
  options: WorkHistoryRenderOptions,
  context: RenderContext,
): string;
```

---

## Usage in Steps

| Step | Directive | Content | Delta | Feedback | History |
|------|-----------|---------|-------|----------|---------|
| Reflect | ✅ | ✅ | ✅ | ✅ | ✅ |
| Write | ✅ | ✅ | ❌ | ✅ | ❌ |
| Peer Review | ❌ | ✅ | ❌ | ❌ | ❌ |

---

## Validation Checklist

✅ Complete template defined  
✅ Directive rendering from chair collabs  
✅ Delta computation using Version renderer  
✅ Peer feedback with open/resolved status  
✅ Version history with "you" markers  
✅ Interface defined with options
