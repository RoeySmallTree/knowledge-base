# Product Tree Composite Rendering Specification

**Composite:** Product Tree  
**Uses:** [Product](../entities/product.md), [Version](../entities/version.md)  
**Source:** `ContextTree.root_id` + `productsById` + `versionsById`

---

## Purpose

Renders the hierarchical product structure with proper indentation. Uses `ProductRenderer` internally with `tree-node` format.

---

## Data Dependencies

```typescript
// Required context
const root_id: UUID;
const productsById: Map<UUID, ProductContext>;
const versionsById: Map<UUID, VersionContext>;
const members: Map<string, MemberContext>;
```

---

## Render Options

```typescript
interface ProductTreeRenderOptions {
  // What to include for each product node
  includes?: ProductInclude[];         // Default: ProductPresets.standard
  
  // Ownership highlighting
  highlightOwnedBy?: string;           // Add "← YOU" marker
}
```

---

## Output Examples

### Standard Preset (for Plan & Assign)

```markdown
### PRODUCT TREE

[Orchestration] **Menu SaaS MVP** (adc982b9-f52b-431d-bfe8-7cd374e30a29)
  Status: pending | Owner: Richard
  DoD: Complete MVP with working menu management
  
  [Orchestration] **Technical Foundation** (ade4951f-24d0-4218-b0fb-98f9fd057268)
    Status: pending | Owner: Alex
    DoD: All technical specs complete and validated
    
    [Content] **Technical Architecture Spec** (d5d4ae24-3375-48c0-9b41-a4c90fe10fc9)
      Status: pending | Owner: Alex
      DoD: System diagram, data flow, API boundaries, auth docs
      Latest: V2 by Alex
      → Added rate limiting, auth section
      ★ ROUND FOCUS
      
    [Content] **Database Schema** (fad8e5da-cc6a-4096-9341-e1917cc29292)
      Status: accepted | Owner: Alex
      DoD: Complete schema with indexes
      Latest: V1 by Alex
      → Initial schema design
```

### With Ownership Markers (for Reflect)

```markdown
### PRODUCT TREE

[Orchestration] **Menu SaaS MVP** (adc982b9-f52b-431d-bfe8-7cd374e30a29)
  Status: pending | Owner: Richard
  DoD: Complete MVP with working menu management
  
  [Orchestration] **Technical Foundation** (ade4951f-24d0-4218-b0fb-98f9fd057268) ← YOU
    Status: pending | Owner: Alex
    DoD: All technical specs complete and validated
    
    [Content] **Technical Architecture Spec** (d5d4ae24-3375-48c0-9b41-a4c90fe10fc9) ← YOU
      Status: pending | Owner: Alex
      DoD: System diagram, data flow, API boundaries, auth docs
```

### Minimal Preset (for quick reference)

```markdown
### PRODUCT TREE

[Orchestration] **Menu SaaS MVP** (adc982b9-f52b-431d-bfe8-7cd374e30a29)

  [Orchestration] **Technical Foundation** (ade4951f-24d0-4218-b0fb-98f9fd057268)

    [Content] **Technical Architecture Spec** (d5d4ae24-3375-48c0-9b41-a4c90fe10fc9)
```

---

## Tree Building Algorithm

```typescript
interface TreeNode {
  product: ProductContext;
  depth: number;
  children: TreeNode[];
}

function buildTree(
  rootId: UUID,
  productsById: Map<UUID, ProductContext>,
): TreeNode | null {
  const root = productsById.get(rootId);
  if (!root) return null;
  
  function buildNode(product: ProductContext, depth: number): TreeNode {
    const children = product.children_ids
      .map(id => productsById.get(id))
      .filter((p): p is ProductContext => !!p)
      .map(child => buildNode(child, depth + 1));
    
    return { product, depth, children };
  }
  
  return buildNode(root, 0);
}
```

---

## Renderer Interface

```typescript
function renderProductTree(
  rootId: UUID,
  options: ProductTreeRenderOptions,
  context: RenderContext,
): string;
```

---

## Usage in Steps

| Step | Includes | Highlight |
|------|----------|-----------|
| Plan & Assign | standard + latest_version | No |
| Reflect | standard | highlightOwnedBy: currentMemberId |
| Write | minimal | No |
| Peer Review | minimal | No |
| Inspect | standard | No |
| Presentation | minimal | No |

---

## Validation Checklist

✅ Uses ProductRenderer with `tree-node` format  
✅ Recursive tree building  
✅ Indentation per depth level  
✅ Ownership markers supported  
✅ Configurable includes
