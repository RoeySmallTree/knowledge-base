# Orchestration Layer Integration

## Overview

The orchestration layer is the entry point that calls step builders. Understanding this integration is crucial for Phase 2.

## Architecture

```
src/orchestrator/
├── conversation-init.ts        # Initializes LLM conversation
├── step-executor.ts            # Executes workflow steps
├── context-tree/               # Context data management
└── prompter/                   # Prompt building (Phase 2 focus)
    ├── builders/               # Step-specific builders
    ├── system/                 # System prompt components
    ├── components/             # Legacy components
    └── templates/              # Phase 1 + Phase 2 (NEW)
```

## Current Flow

```
1. Orchestrator receives step request
2. Loads ContextTree from database
3. Calls appropriate builder:
   - buildBootstrapPrompt(ctx, userPrompt)
   - buildPlanAssignPrompt(ctx)
   - buildWritePrompt(ctx, productIds)
   - etc.
4. Builder returns { system, user }
5. Orchestrator sends to LLM
6. Parses response using schema
7. Applies changes to database
```

## Key Integration Points

### 1. conversation-init.ts

This file initializes the LLM conversation with prompts:

```typescript
// Current pattern
import { buildWritePrompt } from './prompter/builders/write.js';

async function initWriteConversation(ctx: ContextTree, productIds: string[]) {
  const { system, user } = await buildWritePrompt(ctx, productIds);
  
  return createConversation({
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
    // ... LLM config
  });
}
```

**No changes needed here** — as long as builders return `{ system, user }`.

### 2. step-executor.ts

Executes steps and handles the workflow:

```typescript
// Simplified pattern
async function executeStep(step: StepType, ctx: ContextTree, params: StepParams) {
  // Build prompts
  const prompts = await buildPromptForStep(step, ctx, params);
  
  // Send to LLM
  const response = await callLLM(prompts);
  
  // Parse and validate
  const parsed = parseStepResponse(step, response);
  
  // Apply changes
  await applyStepChanges(step, parsed, ctx);
}
```

**Changes needed:**
- Update `buildPromptForStep` to use new step builders
- Keep response parsing unchanged (schemas are the same)

### 3. builders/index.ts (Create This)

Create a unified export for all builders:

```typescript
// prompter/builders/index.ts

// Re-export all step builders
export { buildBootstrapPrompt } from './bootstrap.js';
export { buildPlanAssignPrompt } from './plan-assign.js';
export { buildWritePrompt } from './write.js';
export { buildPeerReviewPrompt } from './peer-review.js';
export { buildReflectPrompt } from './reflect.js';
export { buildInspectionPrompt } from './inspection.js';
export { buildPresentationPrompt } from './presentation.js';

// Types
export type { StepPromptResult } from '../types.js';
```

### 4. Updating Individual Builders

Each builder file is updated to use the new step builders:

```typescript
// builders/write.ts - BEFORE
import { buildWriteSystemPrompt as composeWriteSystemPrompt } from '../system/builders.js';
import { userContextPrompts } from '../../context-tree/index.js';

export async function buildWritePrompt(ctx, productIds) {
  const system = buildWriteSystemPrompt(ctx);
  const user = await buildWriteUserPrompt(ctx, productIds);
  return { system, user };
}

function buildWriteSystemPrompt(ctx) {
  const persona = getAgentPersonaParams(ctx);
  return composeWriteSystemPrompt(persona);
}

async function buildWriteUserPrompt(ctx, productIds) {
  // ... uses old serializers
}
```

```typescript
// builders/write.ts - AFTER
import { 
  buildWriteSystemPrompt, 
  buildWriteUserPrompt 
} from '../templates/step-builders/write/index.js';

export async function buildWritePrompt(
  ctx: ContextTree,
  productIds: string[],
): Promise<StepPromptResult> {
  const system = buildWriteSystemPrompt(ctx);
  const user = buildWriteUserPrompt(ctx, productIds);
  return { system, user };
}
```

## Gradual Migration Path

### Phase 2a: Add New Step Builders

```
templates/step-builders/
├── write/
│   ├── system.ts     # New system prompt builder
│   ├── user.ts       # New user prompt builder (uses Phase 1 renderers)
│   └── index.ts      # Exports
```

### Phase 2b: Update Existing Builders

```typescript
// Option 1: Direct replacement
import { buildWriteSystemPrompt, buildWriteUserPrompt } from '../templates/step-builders/write/index.js';

// Option 2: Feature flag
const USE_NEW_BUILDERS = process.env.USE_NEW_BUILDERS === 'true';

export async function buildWritePrompt(ctx, productIds) {
  if (USE_NEW_BUILDERS) {
    return {
      system: newBuildWriteSystemPrompt(ctx),
      user: newBuildWriteUserPrompt(ctx, productIds),
    };
  }
  // Legacy path
  return {
    system: legacyBuildWriteSystemPrompt(ctx),
    user: await legacyBuildWriteUserPrompt(ctx, productIds),
  };
}
```

### Phase 2c: Validate

1. Run both old and new paths
2. Compare generated prompts
3. Validate LLM behavior is consistent

### Phase 3: Cleanup

1. Remove feature flag
2. Remove legacy imports
3. Delete old `system/rulesets.ts` and `system/builders.ts`
4. Delete old `context-tree/user/serializers.ts`

## Backward Compatibility Requirements

| Aspect | Requirement |
|--------|-------------|
| Function signatures | Must match exactly |
| Return type | `Promise<StepPromptResult>` or `StepPromptResult` |
| System prompt format | Markdown, same structure |
| User prompt format | Markdown, compatible structure |
| Output schema | Identical JSON schema |

## Testing Integration

```typescript
// tests/integration/step-builders.test.ts

describe('Step Builder Integration', () => {
  it('buildWritePrompt returns valid prompts', async () => {
    const ctx = await loadTestContext('write-scenario');
    const productIds = ['product-1', 'product-2'];
    
    const { system, user } = await buildWritePrompt(ctx, productIds);
    
    expect(system).toContain('You are');
    expect(system).toContain('Output Schema');
    expect(user).toContain('[MISSION]');
    expect(user).toContain('[PRODUCT:');
  });
  
  it('produces same output as legacy builder', async () => {
    const ctx = await loadTestContext('write-scenario');
    const productIds = ['product-1'];
    
    const newResult = await newBuildWritePrompt(ctx, productIds);
    const legacyResult = await legacyBuildWritePrompt(ctx, productIds);
    
    // Structure should match even if wording differs
    expect(hasSection(newResult.user, 'MISSION')).toBe(true);
    expect(hasSection(newResult.user, 'PRODUCT')).toBe(true);
  });
});
```
