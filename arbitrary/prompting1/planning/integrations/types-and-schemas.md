# Types and Schemas Reference

## Overview

This document covers the TypeScript types and JSON output schemas used by step builders.

## Core Types

### StepPromptResult

The standard return type for all builders:

```typescript
// src/orchestrator/prompter/types.ts
interface StepPromptResult {
  system: string;
  user: string;
}
```

### ContextTree

The main input to all builders (from Phase 1):

```typescript
interface ContextTree {
  session: SessionContext;
  members: Map<string, MemberContext>;
  products: Map<string, ProductContext>;
  collabs: CollabContext[];
  currentMember?: MemberContext;
}
```

### Step Builder Types

Create in `templates/step-builders/types.ts`:

```typescript
import type { ContextTree } from '../../types.js';

// Step identifiers
export enum StepType {
  Bootstrap = 'bootstrap',
  Reflect = 'reflect',
  PlanAssign = 'plan-assign',
  Write = 'write',
  PeerReview = 'peer-review',
  Inspect = 'inspect',
  Presentation = 'presentation',
}

// Base params for all step builders
export interface StepBuilderParams {
  ctx: ContextTree;
}

// Step-specific params
export interface BootstrapParams extends StepBuilderParams {
  rawUserPrompt: string;
}

export interface PlanAssignParams extends StepBuilderParams {
  changedProductIds?: string[];
}

export interface WriteParams extends StepBuilderParams {
  assignedProductIds: string[];
}

export interface PeerReviewParams extends StepBuilderParams {
  reviewProductIds: string[];
}

export interface ReflectParams extends StepBuilderParams {
  // Uses owned products from context
}

export interface InspectParams extends StepBuilderParams {
  changedProductIds?: string[];
}

export interface PresentationParams extends StepBuilderParams {
  changedProductIds?: string[];
}

// Builder function signatures
export type SystemPromptBuilder<P extends StepBuilderParams> = (params: P) => string;
export type UserPromptBuilder<P extends StepBuilderParams> = (params: P) => string;
export type StepBuilder<P extends StepBuilderParams> = (params: P) => StepPromptResult;
```

## Output Schemas

Each step has a JSON output schema that the LLM must follow. These MUST remain unchanged from the current implementation.

### Bootstrap Schema

```typescript
export interface BootstrapOutput {
  reasoning: string;
  mission_charter: string;
  underlying_objectives: string;
  customized_personas: Record<string, string>;
  operative_domains: Record<string, {
    responsibility: string;
    area: string;
  }>;
  missing_details?: string[];
}
```

### Plan & Assign Schema

```typescript
export interface PlanAssignOutput {
  reasoning: string;
  structureDelta?: string;
  changes: Array<{
    productId: string;
    details?: {
      definition_of_done?: string;
      description?: string;
    };
    addSubProducts?: Array<{
      name: string;
      type: 'Content' | 'Decision' | 'Collection' | 'Orchestration';
      definition_of_done: string;
      parentId: string;
      tempAssignmentId?: string;
    }>;
    remove?: boolean;
  }>;
  assignments: Array<{
    productId: string;
    assigneeIds: string[];
    directive: {
      importance: number;
      comment: string;
    };
    setRoundFocus?: boolean;
  }>;
  acceptance: Array<{
    productId: string;
    isAccepted: boolean;
    selectedVersionId?: string;
    commentIfRejected?: string;
  }>;
  questionsForUser?: Array<{
    text: string;
  }>;
}
```

### Write Schema

```typescript
export interface WriteOutput {
  reasoning: string;
  content: string;  // Markdown, not JSON
  changeSummary: string;
  collabs?: Array<{
    refersToProduct: string;
    importance: number;
    comment: string;
  }>;
  remarks?: Array<{
    recipients: Array<'chair' | 'team' | 'user'>;
    type: 'observation' | 'question' | 'blocker';
    content: string;
    isBlocker: boolean;
  }>;
}
```

### Peer Review Schema

```typescript
export interface PeerReviewOutput {
  reasoning: string;
  collabs: Array<{
    refersToProduct: string;
    importance: number;  // 6-10 only
    comment: string;
    shortestSummary: string;
  }>;
}
```

### Reflect Schema

```typescript
export interface ReflectOutput {
  reasoning: string;
  reflections: Array<{
    refersToProduct: string;
    refersToContentVersion?: string;
    note: string;
    followingCollabIds?: string[];
    severity: number;
  }>;
  collabs?: Array<{
    refersToProduct: string;
    importance: number;
    comment: string;
    shortestSummary: string;
    referencesProductIds?: string[];
  }>;
  remarks?: Array<{
    recipients: string[];
    type: string;
    content: string;
    isBlocker: boolean;
  }>;
}
```

### Inspect Schema

```typescript
export interface InspectOutput {
  reasoning: string;
  inspections: Array<{
    productId: string;
    productName: string;
    overallAssessment: 'approved' | 'needs-revision' | 'blocked';
    findings: Array<{
      category: 'security' | 'completeness' | 'coherence' | 'sequence' | 'quality' | 'peer-alignment';
      severity: number;
      issue: string;
      recommendation: string;
      dodCriterion?: string;
    }>;
  }>;
  collabs?: Array<{
    refersToProduct: string;
    importance: number;
    comment: string;
  }>;
  remarks?: Array<{
    recipients: string[];
    type: string;
    content: string;
    isBlocker: boolean;
  }>;
}
```

### Presentation Schema

```typescript
export interface PresentationOutput {
  reasoning: string;
  messages: Array<{
    content: string;
    asAgentId: string;  // chair-1, operative-1, etc. (NOT envoy or watchdog)
  }>;
}
```

## Schema Guard Integration

The `schema-guard.ts` utility (from Phase 1) formats schemas for prompts:

```typescript
import { createSchemaGuard } from '../schema-guard.js';

// In system prompt
const schemaSection = createSchemaGuard({
  schema: WRITE_SCHEMA,
  strict: true,
  additionalRules: [
    'content must be markdown, not JSON',
    'changeSummary must list specific changes',
  ],
});
```

## Validation

Output is validated after LLM response:

```typescript
// In orchestration layer
import { validateWriteOutput } from './validators/write.js';

const response = await callLLM(prompts);
const parsed = JSON.parse(response);

const validationResult = validateWriteOutput(parsed);
if (!validationResult.valid) {
  throw new StepValidationError(validationResult.errors);
}
```

## Type Safety Tips

1. **Use enums for literals**: `ProductType`, `StepType`, `CollabStatus`
2. **Validate IDs**: Use `ValidIds` from context, never generate
3. **Check optional fields**: Many schema fields are optional
4. **Test schema evolution**: If schemas change, update everywhere
