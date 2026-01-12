# Existing Builders Analysis

## Current Pattern

Each step has a builder file in `src/orchestrator/prompter/builders/`:

```typescript
// Example: builders/write.ts
export async function buildWritePrompt(
  contextTree: ContextTree,
  productIds: string[],
): Promise<StepPromptResult> {
  const system = buildWriteSystemPrompt(contextTree);
  const user = await buildWriteUserPrompt(contextTree, productIds);
  return { system, user };
}
```

## Existing Builder Files

| File | Step | Role | Current Dependencies |
|------|------|------|---------------------|
| `bootstrap.ts` | Bootstrap | Chair | `system/builders.ts`, `context-tree/user/prompts.ts` |
| `plan-assign.ts` | Plan & Assign | Chair | `system/builders.ts`, `context-tree/user/prompts.ts` |
| `write.ts` | Write | Operative | `system/builders.ts`, `context-tree/user/prompts.ts` |
| `peer-review.ts` | Peer Review | Operative | `system/builders.ts`, `context-tree/user/prompts.ts` |
| `reflect.ts` | Reflect | Operative | `system/builders.ts`, `context-tree/user/prompts.ts` |
| `inspection.ts` | Inspect | Watchdog | `system/builders.ts`, `context-tree/user/prompts.ts` |
| `presentation.ts` | Presentation | Envoy | `system/builders.ts`, `context-tree/user/prompts.ts` |

## Current System Prompt Flow

```
builders/write.ts
    └── buildWriteSystemPrompt(contextTree)
            └── system/builders.ts::buildWriteSystemPrompt(persona)
                    └── compose([
                          RULESET_GLOBAL_IDENTITY,
                          RULESET_CORE_MISSION_PRINCIPLES,
                          RULESET_TONE_ETHOS,
                          RULESET_STYLE_FORMATTING,
                          RULESET_PROJECT_STRUCTURE,
                          RULESET_ID_RULES,
                          makeRoleRules(persona),
                          RULESET_STEP_WRITE_SEMANTICS,
                          RULESET_SCHEMA_WRITE,
                          RULESET_COMMON_MISTAKES_GLOBAL,
                          RULESET_COMMON_MISTAKES_WRITE,
                        ])
```

## Current User Prompt Flow

```
builders/write.ts
    └── buildWriteUserPrompt(contextTree, productIds)
            └── context-tree/user/prompts.ts::buildUserWritePrompt(params)
                    └── joinSections([
                          serializeSessionHeader(),
                          serializeMissionBrief(),
                          serializeRoleBrief(),
                          serializeYourPerspective(),
                          serializeProductTree(),
                          serializeAssignmentsForWrite(),
                          serializeRecentCollabs(),
                          serializeValidIds(),
                        ])
```

## Migration Strategy

### Option A: Replace In-Place (Recommended)

1. Create new `templates/step-builders/write/` with system.ts and user.ts
2. Update `builders/write.ts` to import from new location:

```typescript
// OLD
import { buildWriteSystemPrompt } from '../system/builders.js';
import { userContextPrompts } from '../../context-tree/index.js';

// NEW
import { buildWriteSystemPrompt, buildWriteUserPrompt } from '../templates/step-builders/write/index.js';
```

### Option B: Feature Flag

1. Add environment variable or config flag
2. Switch between old and new implementations:

```typescript
export async function buildWritePrompt(ctx, productIds) {
  if (USE_NEW_STEP_BUILDERS) {
    return newWriteBuilder.build(ctx, productIds);
  }
  return legacyWriteBuilder.build(ctx, productIds);
}
```

## Signature Compatibility

New builders MUST match existing signatures:

```typescript
// StepPromptResult must remain unchanged
interface StepPromptResult {
  system: string;
  user: string;
}

// Builder signatures must match
buildBootstrapPrompt(ctx: ContextTree, userPrompt: string): Promise<StepPromptResult>
buildPlanAssignPrompt(ctx: ContextTree): Promise<StepPromptResult>
buildWritePrompt(ctx: ContextTree, productIds: string[]): Promise<StepPromptResult>
buildPeerReviewPrompt(ctx: ContextTree, productIds: string[]): Promise<StepPromptResult>
buildReflectPrompt(ctx: ContextTree): Promise<StepPromptResult>
buildInspectionPrompt(ctx: ContextTree, productIds: string[]): Promise<StepPromptResult>
buildPresentationPrompt(ctx: ContextTree): Promise<StepPromptResult>
```

## What Changes

| Aspect | Current | New |
|--------|---------|-----|
| System prompt source | `rulesets.ts` hardcoded strings | Template-based composition |
| User prompt source | `context-tree/user/serializers.ts` | Phase 1 renderers |
| Identity block | Inline in rulesets | `common/identity.ts` |
| Output schemas | Embedded in rulesets | `common/schemas.ts` |
| Format options | None | Format + Includes enums |

## Files That Can Be Deprecated After Migration

- `src/orchestrator/prompter/system/rulesets.ts` (3000+ lines)
- `src/orchestrator/prompter/system/builders.ts`
- `src/orchestrator/context-tree/user/serializers.ts` (replaced by Phase 1 renderers)
