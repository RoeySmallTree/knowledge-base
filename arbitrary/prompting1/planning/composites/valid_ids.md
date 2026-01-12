# Valid IDs Composite Rendering Specification

**Composite:** Valid IDs Reference  
**Uses:** [Product](../entities/product.md), [Member](../entities/member.md)  
**Purpose:** Provides explicit list of valid IDs for LLM output validation

---

## Purpose

The Valid IDs section is CRITICAL for preventing the LLM from inventing or guessing IDs. It provides an explicit reference list that the LLM must use.

---

## Data Dependencies

```typescript
// Required context
const productsById: Map<UUID, ProductContext>;
const memberMap: Map<string, MemberContext>;
```

---

## Render Options

```typescript
interface ValidIdsRenderOptions {
  includeProducts?: boolean;       // Default: true
  includeMembers?: boolean;        // Default: true
  operativesOnly?: boolean;        // Filter to operatives only (default: true)
}
```

---

## Output Examples

### Standard (Products + Operatives)

```markdown
### VALID IDS

Products:
  adc982b9-f52b-431d-bfe8-7cd374e30a29 → "Menu SaaS MVP" [Orchestration, pending]
  ade4951f-24d0-4218-b0fb-98f9fd057268 → "Technical Foundation" [Orchestration, pending]
  d5d4ae24-3375-48c0-9b41-a4c90fe10fc9 → "Technical Architecture Spec" [Content, pending]
  fad8e5da-cc6a-4096-9341-e1917cc29292 → "Database Schema" [Content, accepted]

Team Members (Operatives only for assignments):
  operative-1 → Alex (tech-lead)
  operative-2 → Jordan (product-manager)
  operative-3 → Casey (growth-marketer)
```

### All Members (for non-assignment contexts)

```markdown
### VALID IDS

Products:
  d5d4ae24-3375-48c0-9b41-a4c90fe10fc9 → "Technical Architecture Spec" [Content, pending]

Team Members:
  chair-1 → Richard (project-lead)
  operative-1 → Alex (tech-lead)
  operative-2 → Jordan (product-manager)
  operative-3 → Casey (growth-marketer)
  watchdog-1 → Marcus (security-specialist)
  envoy-1 → Stacy (communications)
```

---

## Renderer Interface

```typescript
function renderValidIds(
  context: RenderContext,
  options: ValidIdsRenderOptions,
): string;
```

---

## Usage in Steps

| Step | Products | Members | Operatives Only |
|------|----------|---------|-----------------|
| Bootstrap | ❌ | ✅ All | No |
| Plan & Assign | ✅ All | ✅ | Yes |
| Write | ✅ All | ✅ Team | No |
| Peer Review | ✅ All | ✅ Team | No |
| Inspect | ✅ All | ✅ Team | No |
| Reflect | ✅ Owned | ✅ Team | No |
| Presentation | ✅ All | ✅ All | No |

---

## Validation Checklist

✅ Standard format defined  
✅ Product ID → Name mapping  
✅ Member ID → Name mapping  
✅ Operative-only filtering  
✅ Interface defined
