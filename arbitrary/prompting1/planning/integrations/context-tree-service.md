# Context Tree Service Integration

## Overview

The `ContextTreeService` is the primary data source for building prompts. It loads and prepares the complete context needed for each step.

## File Location

```
src/orchestrator/context-tree/
├── service.ts          # Main service class
├── types.ts            # Context types
├── loaders.ts          # Database loading
├── serializers.ts      # Legacy serializers (to deprecate)
├── change-tracker.ts   # Round change tracking
└── user/
    ├── prompts.ts      # User prompt builders (to replace)
    ├── serializers.ts  # User-facing serializers (to replace with Phase 1)
    └── types.ts        # User prompt param types
```

## Current Usage Pattern

```typescript
// From builders/write.ts
import { createContextTreeService, userContextPrompts } from '../../context-tree/index.js';

async function buildWriteUserPrompt(contextTree: ContextTree, productIds: string[]): Promise<string> {
  const member = contextTree.currentMember;
  
  const service = await createContextTreeService(
    contextTree.session.id,
    contextTree.session.current_round,
  );

  const stepContext = await service.buildStepContextForStep('WRITE', {
    currentAgentId: member.id,
  });

  // ... build prompt using stepContext
}
```

## Key Service Methods

### `createContextTreeService(sessionId, round)`

Factory function that creates and initializes the service:

```typescript
const service = await createContextTreeService(sessionId, round);
```

### `service.buildStepContextForStep(step, options)`

Builds the context needed for a specific step:

```typescript
const stepContext = await service.buildStepContextForStep('WRITE', {
  currentAgentId: 'operative-1',
});

// Returns:
interface StepContext {
  session: SessionContext;
  members: Map<string, MemberContext>;
  products: {
    tree: ProductTreeNode[];
    minimal: ProductMinimal[];
    full: ProductContext[];
  };
  collabs: CollabContext[];
  // ... step-specific data
}
```

### `service.getProductsWithNewVersions()`

Returns product IDs that have new versions this round:

```typescript
const changedProductIds = await service.getProductsWithNewVersions();
// ['uuid-1', 'uuid-2']
```

## Context Types Used

### ContextTree (Main Input)

```typescript
interface ContextTree {
  session: SessionContext;
  members: Map<string, MemberContext>;
  products: Map<string, ProductContext>;
  collabs: CollabContext[];
  currentMember?: MemberContext;  // Set for operative steps
}
```

### SessionContext

```typescript
interface SessionContext {
  id: string;
  name: string;
  mission_charter: string | null;
  underlying_objectives: string | null;
  current_round: number;
  status: SessionStatus;
  userProfile?: UserProfile;
}
```

### MemberContext

```typescript
interface MemberContext {
  id: string;
  name: string;
  role: 'chair' | 'operative' | 'watchdog' | 'envoy';
  team_role: string;  // e.g., 'tech-lead'
  custom_persona_prompt: string | null;
  operative_responsibility: string | null;
  operative_area: string | null;
  characteristics?: MemberCharacteristics;
  life_story?: string;
}
```

### ProductContext

```typescript
interface ProductContext {
  id: string;
  name: string;
  type: 'Content' | 'Decision' | 'Collection' | 'Orchestration';
  status: ProductStatus;
  owner_id: string;
  owner_name: string;
  parent_id: string | null;
  definition_of_done: string | null;
  description: string | null;
  round_focus: boolean;
  selected_version_id: string | null;
  versions: VersionContext[];
  latestVersion?: VersionContext;
  collabs?: CollabContext[];
  children?: ProductContext[];
}
```

### CollabContext

```typescript
interface CollabContext {
  id: string;
  product_id: string;
  product_name: string;
  author_id: string;
  author_name: string;
  author_role: string;
  importance: number;
  content: string;
  shortest_summary: string;
  resolved: boolean;
  round: number;
}
```

## Integration with Phase 1 Renderers

Phase 1 renderers accept these context types directly:

```typescript
import { renderProduct, renderMember, renderSession } from '../templates/index.js';

// Render a product from context
const productMarkdown = renderProduct(
  productContext,          // ProductContext from context tree
  {
    format: ProductFormat.Block,
    includes: ProductPresets.full
  },
  { members: ctx.members } // RenderContext for lookups
);
```

## New Pattern with Step Builders

```typescript
// templates/step-builders/write/user.ts
import { renderWorkHistory, renderValidIds, renderSession } from '../../index.js';

export function buildWriteUserPrompt(ctx: ContextTree, productIds: string[]): string {
  const sections: string[] = [];
  
  // Use Phase 1 renderers instead of old serializers
  sections.push(renderSession(ctx.session, { format: SessionFormat.Full }));
  
  for (const productId of productIds) {
    const product = ctx.products.get(productId);
    if (product) {
      sections.push(renderWorkHistory(product, {
        currentMemberId: ctx.currentMember?.id,
        includeContent: true,
        includeCollabs: true
      }));
    }
  }
  
  sections.push(renderValidIds(ctx));
  
  return sections.join('\n\n');
}
```

## Data Flow

```
Orchestration Layer
    │
    ├── Creates ContextTree from database
    │
    └── Calls step builder
            │
            ├── buildSystemPrompt(ctx)
            │       └── Uses common/identity.ts + step-specific template
            │
            └── buildUserPrompt(ctx, ...)
                    └── Uses Phase 1 renderers with context data
```

## Key Points

1. **ContextTree is already available** — No new data loading needed
2. **Phase 1 renderers accept context types** — Direct mapping
3. **Keep stepContext pattern** — It provides filtered/prepared data
4. **currentMember is set for operative steps** — Used for "You" vs name
