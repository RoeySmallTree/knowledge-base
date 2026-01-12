# Phase 3: Orchestrator Integration & Production Readiness

**Date:** 2025-12-11  
**Goal:** Connect the new prompt infrastructure to the orchestrator  
**Depends On:** Phase 1 (Renderers) ✅ Complete, Phase 2 (Step Builders) ✅ Complete

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Integration Points](#integration-points)
4. [Implementation Tasks](#implementation-tasks)
5. [User Profile Propagation](#user-profile-propagation)
6. [Testing Infrastructure](#testing-infrastructure)
7. [Validation Checklist](#validation-checklist)

---

## Overview

### What We're Doing

Phase 3 connects the Phase 1 renderers and Phase 2 step builders to the orchestration layer, completing the prompt system.

### Goals

| Goal | Description |
|------|-------------|
| **Integration** | Wire step builders to orchestrator flow |
| **User Context** | Propagate user profile to ALL prompts |
| **Testing** | CLI tools for prompt testing and validation |
| **Complete** | Production-ready prompting system |

### Key Files

```
src/orchestrator/
├── steps/                          # Entry points (call builders)
│   ├── bootstrap.ts
│   ├── plan-assign.ts
│   ├── write.ts
│   ├── peer-review.ts
│   ├── reflect.ts
│   ├── inspection.ts
│   └── presentation.ts
│
├── prompter/
│   ├── builders/                   # Step-specific prompt builders
│   │   ├── bootstrap.ts            # → step-builders/bootstrap/
│   │   ├── plan-assign.ts          # → step-builders/plan-assign/
│   │   ├── write.ts                # → step-builders/write/
│   │   ├── peer-review.ts          # → step-builders/peer-review/
│   │   ├── reflect.ts              # → step-builders/reflect/
│   │   ├── inspection.ts           # → step-builders/inspect/
│   │   └── presentation.ts         # → step-builders/presentation/
│   │
│   ├── templates/
│   │   ├── renderers/              # Phase 1 ✅
│   │   └── step-builders/          # Phase 2 (NEW)
│   │       ├── types.ts
│   │       ├── common/
│   │       ├── bootstrap/
│   │       ├── plan-assign/
│   │       ├── write/
│   │       ├── peer-review/
│   │       ├── reflect/
│   │       ├── inspect/
│   │       ├── presentation/
│   │       └── index.ts
│   │
│   └── types.ts
│
└── context-tree/
    └── loaders.ts                  # User profile loading
```

---

## Architecture

### Orchestrator Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                         STEP EXECUTION                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   steps/write.ts                                                    │
│       │                                                             │
│       ▼                                                             │
│   buildWritePrompt(contextTree, productIds)                         │
│       │                                                             │
│       ├── step-builders/write/system.ts                             │
│       │       │                                                     │
│       │       └── common/identity.ts, common/schemas.ts             │
│       │                                                             │
│       └── step-builders/write/user.ts                               │
│               │                                                     │
│               └── renderers/* (Phase 1)                             │
│                   (renderMember, renderProductTree, etc.)           │
│                                                                     │
│       ▼                                                             │
│   { system, user } → LLM Gateway → Response → Apply Changes        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Integration Points

### 1. Builder Files (`prompter/builders/*.ts`)

Each builder imports from the new step builders.

**Pattern:**

```typescript
// builders/write.ts
import { 
  buildWriteSystemPrompt,
  buildWriteUserPrompt 
} from '../templates/step-builders/write/index.js';
import type { ContextTree, StepPromptResult } from '../types.js';

export async function buildWritePrompt(
  contextTree: ContextTree,
  productIds: string[],
): Promise<StepPromptResult> {
  const system = buildWriteSystemPrompt(contextTree);
  const user = buildWriteUserPrompt(contextTree, productIds);
  return { system, user };
}
```

### 2. Step Files (`steps/*.ts`)

These files call the builders. They use the same interface:

```typescript
// steps/write.ts
import { buildWritePrompt } from '../prompter/builders/write.js';

// In step execution:
const { system, user } = await buildWritePrompt(contextTree, productIds);
```

### 3. Context Tree Service

The `ContextTreeService` provides data for prompts:

```typescript
const ctx = await createContextTreeService(sessionId, round);
const stepContext = await ctx.buildStepContextForStep('WRITE', { currentAgentId });
```

### 4. LLM Gateway

No changes — receives `{ system, user }` prompts.

### 5. Response Parsing

No changes — output schemas are defined in step builders.

---

## Implementation Tasks

### Task 1: Create Step Builder Types

**File:** `src/orchestrator/prompter/templates/step-builders/types.ts`

```typescript
import type { ContextTree, MemberContext, SessionContext } from '../../types.js';

export enum StepType {
  Bootstrap = 'bootstrap',
  Reflect = 'reflect',
  PlanAssign = 'plan-assign',
  Write = 'write',
  PeerReview = 'peer-review',
  Inspect = 'inspect',
  Presentation = 'presentation',
}

export interface SystemPromptParams {
  currentMember: MemberContext;
  session: SessionContext;
  step: StepType;
}

export interface StepPromptParams {
  ctx: ContextTree;
}

export interface BootstrapParams extends StepPromptParams {
  rawUserPrompt: string;
}

export interface PlanAssignParams extends StepPromptParams {
  changedProductIds?: string[];
}

export interface WriteParams extends StepPromptParams {
  assignedProductIds: string[];
}

export interface PeerReviewParams extends StepPromptParams {
  reviewProductIds: string[];
}

export interface ReflectParams extends StepPromptParams {}

export interface InspectParams extends StepPromptParams {
  changedProductIds?: string[];
}

export interface PresentationParams extends StepPromptParams {
  changedProductIds?: string[];
}
```

### Task 2: Create Common Components

**File:** `src/orchestrator/prompter/templates/step-builders/common/identity.ts`

```typescript
import type { MemberContext } from '../../../types.js';

export function renderIdentity(member: MemberContext): string {
  const lines: string[] = [];
  
  lines.push(`You are **${member.name}** (\`${member.id}\`), the **${member.team_role ?? member.role}** on this team.`);
  
  if (member.custom_persona_prompt) {
    lines.push('');
    lines.push(member.custom_persona_prompt);
  }
  
  return lines.join('\n');
}
```

**File:** `src/orchestrator/prompter/templates/step-builders/common/user-profile.ts`

```typescript
import type { UserProfileContext } from '../../../../context-tree/types.js';

export function renderUserProfile(userProfile?: UserProfileContext): string {
  if (!userProfile) return '';
  
  const lines: string[] = [
    '## Your Principal',
    '',
  ];
  
  lines.push(`You are working for **${userProfile.chatName}**.`);
  
  if (userProfile.profession) {
    lines.push(`They are a ${userProfile.profession}.`);
  }
  
  if (userProfile.location) {
    lines.push(`Based in ${userProfile.location}.`);
  }
  
  if (userProfile.gender) {
    lines.push(`${userProfile.chatName} uses ${getPronouns(userProfile.gender)} pronouns.`);
  }
  
  if (userProfile.extras?.trim()) {
    lines.push('');
    lines.push(`### Instructions from ${userProfile.chatName}`);
    lines.push('');
    lines.push(userProfile.extras.trim());
  }
  
  return lines.join('\n');
}

function getPronouns(gender: string): string {
  switch (gender.toLowerCase()) {
    case 'male':
    case 'm':
      return 'he/him';
    case 'female':
    case 'f':
      return 'she/her';
    default:
      return 'they/them';
  }
}
```

**File:** `src/orchestrator/prompter/templates/step-builders/common/schemas.ts`

```typescript
// JSON output schemas for each step
// See steps/*/system.md for full schema definitions

export const BOOTSTRAP_SCHEMA = `...`;  // From steps/bootstrap/system.md
export const PLAN_ASSIGN_SCHEMA = `...`;
export const WRITE_SCHEMA = `...`;
export const PEER_REVIEW_SCHEMA = `...`;
export const REFLECT_SCHEMA = `...`;
export const INSPECT_SCHEMA = `...`;
export const PRESENTATION_SCHEMA = `...`;
```

### Task 3: Create Step Builders

Create `system.ts` and `user.ts` for each step based on the templates in `steps/*/`:

| Step | System Source | User Source |
|------|---------------|-------------|
| Bootstrap | `steps/bootstrap/system.md` | `steps/bootstrap/user.md` |
| Plan & Assign | `steps/plan-assign/system.md` | `steps/plan-assign/user.md` |
| Write | `steps/write/system.md` | `steps/write/user.md` |
| Peer Review | `steps/peer-review/system.md` | `steps/peer-review/user.md` |
| Reflect | `steps/reflect/system.md` | `steps/reflect/user.md` |
| Inspect | `steps/inspect/system.md` | `steps/inspect/user.md` |
| Presentation | `steps/presentation/system.md` | `steps/presentation/user.md` |

**Example: Bootstrap System Builder**

```typescript
// step-builders/bootstrap/system.ts
import { renderIdentity } from '../common/identity.js';
import { renderUserProfile } from '../common/user-profile.js';
import { BOOTSTRAP_SCHEMA } from '../common/schemas.js';
import type { ContextTree } from '../../../types.js';

export function buildBootstrapSystemPrompt(ctx: ContextTree): string {
  const sections: string[] = [];
  
  // 1. Identity
  sections.push(renderIdentity(ctx.currentMember));
  
  // 2. User Profile
  const userProfile = renderUserProfile(ctx.session.userProfile);
  if (userProfile) {
    sections.push(userProfile);
  }
  
  // 3. Role Context
  sections.push(BOOTSTRAP_ROLE_CONTEXT);
  
  // 4. Bootstrap Framework
  sections.push(BOOTSTRAP_FRAMEWORK);
  
  // 5. Output Schema
  sections.push(BOOTSTRAP_SCHEMA);
  
  // 6. Common Mistakes
  sections.push(BOOTSTRAP_COMMON_MISTAKES);
  
  return sections.join('\n\n---\n\n');
}

const BOOTSTRAP_ROLE_CONTEXT = `## Your Role

You are the **Chair** performing a **Bootstrap** action in the CABAL system.

Bootstrap is the genesis step where you:
1. Interpret the user's mission request
2. Craft a mission charter and objectives
3. Customize personas for each team member
4. Define operative domains and responsibilities`;

const BOOTSTRAP_FRAMEWORK = `## 5-Point Bootstrap Framework

1. **Mission Interpretation** — What is the user really asking for?
2. **Objective Definition** — What measurable outcomes define success?
3. **Team Customization** — How should each member approach this mission?
4. **Domain Assignment** — What is each operative responsible for?
5. **Gap Identification** — What critical information is missing?`;

const BOOTSTRAP_COMMON_MISTAKES = `## Common Mistakes to Avoid

- Don't create generic personas — tailor to the specific mission
- Don't skip underlying_objectives — they guide the entire session
- Don't leave operative_domains empty — each operative needs clear scope
- Don't assume — flag unknowns in missing_details`;
```

**Example: Bootstrap User Builder**

```typescript
// step-builders/bootstrap/user.ts
import { renderMember } from '../../renderers/member.js';
import { renderValidIds } from '../../renderers/valid-ids.js';
import { MemberFormat, MemberPresets } from '../../renderers/member.js';
import type { ContextTree } from '../../../types.js';

export function buildBootstrapUserPrompt(
  ctx: ContextTree, 
  rawUserPrompt: string
): string {
  const sections: string[] = [];
  
  // 1. User Request
  sections.push(`## The User's Request\n\n> ${rawUserPrompt}`);
  
  // 2. Team
  const members = Array.from(ctx.members.values());
  const teamSection = members.map(m => 
    renderMember(m, { format: MemberFormat.Block, includes: MemberPresets.full })
  ).join('\n\n');
  
  sections.push(`## Your Team\n\nThese are the team members you'll be working with.\n\n${teamSection}`);
  
  // 3. Output Requirements
  const operatives = members.filter(m => m.role === 'operative');
  
  const personasNeeded = members.map(m => 
    `- \`"${m.id}"\`: persona for ${m.name}`
  ).join('\n');
  
  const domainsNeeded = operatives.map(m => 
    `- \`"${m.id}"\`: responsibility and area for ${m.name}`
  ).join('\n');
  
  sections.push(`## Output Requirements

Your response must include personas for each team member and domains for each operative.

**Personas needed** (for \`customized_personas\`):
${personasNeeded}

**Domains needed** (for \`operative_domains\` — operatives only):
${domainsNeeded}`);
  
  return sections.join('\n\n---\n\n');
}
```

### Task 4: Create Step Builder Index

**File:** `src/orchestrator/prompter/templates/step-builders/index.ts`

```typescript
// Step Builder Registry

export * from './types.js';

export {
  buildBootstrapSystemPrompt,
  buildBootstrapUserPrompt,
} from './bootstrap/index.js';

export {
  buildPlanAssignSystemPrompt,
  buildPlanAssignUserPrompt,
} from './plan-assign/index.js';

export {
  buildWriteSystemPrompt,
  buildWriteUserPrompt,
} from './write/index.js';

export {
  buildPeerReviewSystemPrompt,
  buildPeerReviewUserPrompt,
} from './peer-review/index.js';

export {
  buildReflectSystemPrompt,
  buildReflectUserPrompt,
} from './reflect/index.js';

export {
  buildInspectSystemPrompt,
  buildInspectUserPrompt,
} from './inspect/index.js';

export {
  buildPresentationSystemPrompt,
  buildPresentationUserPrompt,
} from './presentation/index.js';
```

### Task 5: Update Builder Files

Update each `prompter/builders/*.ts` to use the new step builders:

```typescript
// builders/write.ts
import { 
  buildWriteSystemPrompt,
  buildWriteUserPrompt 
} from '../templates/step-builders/write/index.js';
import type { ContextTree, StepPromptResult } from '../types.js';

export async function buildWritePrompt(
  contextTree: ContextTree,
  productIds: string[],
): Promise<StepPromptResult> {
  const system = buildWriteSystemPrompt(contextTree);
  const user = buildWriteUserPrompt(contextTree, productIds);
  return { system, user };
}
```

---

## User Profile Propagation

### Problem

User profile must be included in ALL system prompts so agents know who they're working for.

### Solution

Add `renderUserProfile()` call to every step's `system.ts`:

```typescript
// In every step-builders/*/system.ts
import { renderUserProfile } from '../common/user-profile.js';

export function build*SystemPrompt(ctx: ContextTree): string {
  const sections: string[] = [];
  
  sections.push(renderIdentity(ctx.currentMember));
  
  // Always include user profile
  const userProfile = renderUserProfile(ctx.session.userProfile);
  if (userProfile) {
    sections.push(userProfile);
  }
  
  // ... rest of system prompt
}
```

### User Profile Data Source

Already loaded in `context-tree/loaders.ts`:

```typescript
// loadSession() already fetches user profile
const { data: userData } = await supabase
  .from('app_user')
  .select('chat_name, display_name, gender, location, profession, extras')
  .eq('id', data.user_id)
  .single();

return {
  // ...session data
  userProfile: {
    chatName: userData.chat_name || userData.display_name,
    gender: userData.gender,
    location: userData.location,
    profession: userData.profession,
    extras: userData.extras,
  }
};
```

---

## Testing Infrastructure

### Task 6: Prompt Testing CLI

**File:** `src/scripts/test-prompt.ts`

```typescript
#!/usr/bin/env tsx
// CLI for testing prompt generation

import { Command } from 'commander';
import { createContextTreeService } from '../orchestrator/context-tree/index.js';
import { supabase } from '../db/supabase.js';
import { promises as fs } from 'fs';
import path from 'path';

// Import all builders
import { buildBootstrapPrompt } from '../orchestrator/prompter/builders/bootstrap.js';
import { buildPlanAssignPrompt } from '../orchestrator/prompter/builders/plan-assign.js';
import { buildWritePrompt } from '../orchestrator/prompter/builders/write.js';
import { buildPeerReviewPrompt } from '../orchestrator/prompter/builders/peer-review.js';
import { buildReflectPrompt } from '../orchestrator/prompter/builders/reflect.js';
import { buildInspectionPrompt } from '../orchestrator/prompter/builders/inspection.js';
import { buildPresentationPrompt } from '../orchestrator/prompter/builders/presentation.js';

const program = new Command();

program
  .name('test-prompt')
  .description('Generate and inspect prompts for debugging')
  .requiredOption('-s, --session <id>', 'Session UUID')
  .requiredOption('-t, --step <name>', 'Step name')
  .option('-a, --agent <id>', 'Agent ID')
  .option('-p, --products <ids>', 'Product IDs (comma-separated)')
  .option('-o, --output <dir>', 'Output directory', './prompt-test-output')
  .action(async (options) => {
    await runPromptTest(options);
  });

async function runPromptTest(options: {
  session: string;
  step: string;
  agent?: string;
  products?: string;
  output: string;
}) {
  const { session: sessionId, step, agent, products, output } = options;
  
  console.log(`\n🔍 Testing ${step} prompt for session ${sessionId}\n`);
  
  // Load session
  const { data: sessionData } = await supabase
    .from('session')
    .select('*')
    .eq('id', sessionId)
    .single();
  
  if (!sessionData) {
    throw new Error(`Session not found: ${sessionId}`);
  }
  
  console.log(`📋 Session: ${sessionData.name} (Round ${sessionData.current_round})`);
  
  // Build context
  const ctxService = await createContextTreeService(sessionId, sessionData.current_round);
  const contextTree = await ctxService.getContextTree();
  
  if (agent) {
    contextTree.setCurrentMember(agent);
  }
  
  // Build prompts
  const productIds = products?.split(',') || [];
  const prompts = await buildPromptForStep(step, contextTree, productIds);
  
  // Output
  await fs.mkdir(output, { recursive: true });
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const prefix = `${timestamp}-${step}`;
  
  await fs.writeFile(path.join(output, `${prefix}-system.md`), prompts.system);
  await fs.writeFile(path.join(output, `${prefix}-user.md`), prompts.user);
  
  console.log(`✅ System prompt: ${output}/${prefix}-system.md`);
  console.log(`✅ User prompt: ${output}/${prefix}-user.md`);
  
  const systemTokens = prompts.system.split(/\s+/).length;
  const userTokens = prompts.user.split(/\s+/).length;
  console.log(`\n📊 Token estimate: System ~${systemTokens}, User ~${userTokens}`);
}

async function buildPromptForStep(step: string, ctx: any, productIds: string[]) {
  switch (step.toLowerCase()) {
    case 'bootstrap':
      return buildBootstrapPrompt(ctx, 'Test mission');
    case 'planassign':
    case 'plan-assign':
      return buildPlanAssignPrompt(ctx);
    case 'write':
      return buildWritePrompt(ctx, productIds);
    case 'peerreview':
    case 'peer-review':
      return buildPeerReviewPrompt(ctx, productIds);
    case 'reflect':
      return buildReflectPrompt(ctx);
    case 'inspect':
    case 'inspection':
      return buildInspectionPrompt(ctx, productIds);
    case 'presentation':
      return buildPresentationPrompt(ctx);
    default:
      throw new Error(`Unknown step: ${step}`);
  }
}

program.parse();
```

### Task 7: Add npm Script

**File:** `package.json`

```json
{
  "scripts": {
    "prompt:test": "tsx src/scripts/test-prompt.ts"
  }
}
```

### Usage

```bash
# Test Bootstrap prompt
npm run prompt:test -- -s 76b3896a-9b3a-49e9-bbe0-00c51eadeb5e -t Bootstrap

# Test Write prompt
npm run prompt:test -- \
  -s 76b3896a-9b3a-49e9-bbe0-00c51eadeb5e \
  -t Write \
  -a operative-1 \
  -p product-uuid-1,product-uuid-2
```

### Task 8: Unit Tests

**File:** `src/orchestrator/prompter/templates/step-builders/__tests__/builders.test.ts`

```typescript
import { describe, it, expect, beforeAll } from '@jest/globals';
import { buildBootstrapSystemPrompt, buildBootstrapUserPrompt } from '../bootstrap/index.js';
import { buildWriteSystemPrompt, buildWriteUserPrompt } from '../write/index.js';
import { createMockContextTree } from './fixtures/mock-context.js';

describe('Step Builders', () => {
  let ctx: any;
  
  beforeAll(() => {
    ctx = createMockContextTree();
  });
  
  describe('Bootstrap', () => {
    it('system prompt includes identity', () => {
      ctx.setCurrentMember('chair-1');
      const system = buildBootstrapSystemPrompt(ctx);
      expect(system).toContain('You are');
      expect(system).toContain('chair-1');
    });
    
    it('system prompt includes user profile when present', () => {
      ctx.session.userProfile = { chatName: 'John', profession: 'Developer' };
      const system = buildBootstrapSystemPrompt(ctx);
      expect(system).toContain('Your Principal');
      expect(system).toContain('John');
    });
    
    it('user prompt includes raw mission', () => {
      const user = buildBootstrapUserPrompt(ctx, 'Build a todo app');
      expect(user).toContain('Build a todo app');
    });
  });
  
  describe('Write', () => {
    it('system prompt includes operative context', () => {
      ctx.setCurrentMember('operative-1');
      const system = buildWriteSystemPrompt(ctx);
      expect(system).toContain('Operative');
      expect(system).toContain('Write');
    });
    
    it('user prompt includes assigned products', () => {
      ctx.setCurrentMember('operative-1');
      const user = buildWriteUserPrompt(ctx, ['product-1']);
      expect(user).toContain('product-1');
    });
  });
});
```

---

## Validation Checklist

### Step Builders Complete

| Step | system.ts | user.ts | index.ts | Tests |
|------|-----------|---------|----------|-------|
| Bootstrap | ☐ | ☐ | ☐ | ☐ |
| Plan & Assign | ☐ | ☐ | ☐ | ☐ |
| Write | ☐ | ☐ | ☐ | ☐ |
| Peer Review | ☐ | ☐ | ☐ | ☐ |
| Reflect | ☐ | ☐ | ☐ | ☐ |
| Inspect | ☐ | ☐ | ☐ | ☐ |
| Presentation | ☐ | ☐ | ☐ | ☐ |

### Common Components

- [ ] `types.ts` created
- [ ] `common/identity.ts` created
- [ ] `common/user-profile.ts` created
- [ ] `common/schemas.ts` created
- [ ] `index.ts` registry created

### Builder Updates

- [ ] `builders/bootstrap.ts` updated
- [ ] `builders/plan-assign.ts` updated
- [ ] `builders/write.ts` updated
- [ ] `builders/peer-review.ts` updated
- [ ] `builders/reflect.ts` updated
- [ ] `builders/inspection.ts` updated
- [ ] `builders/presentation.ts` updated

### User Profile

- [ ] User profile included in Bootstrap system prompt
- [ ] User profile included in Plan & Assign system prompt
- [ ] User profile included in Write system prompt
- [ ] User profile included in Peer Review system prompt
- [ ] User profile included in Reflect system prompt
- [ ] User profile included in Inspect system prompt
- [ ] User profile included in Presentation system prompt

### Testing

- [ ] Prompt testing CLI created
- [ ] npm script added
- [ ] Unit tests passing
- [ ] Manual validation on test session

---

## Implementation Priority

### Week 1: Core + Bootstrap

1. Create `types.ts`
2. Create `common/identity.ts`
3. Create `common/user-profile.ts`
4. Create `common/schemas.ts`
5. Implement Bootstrap builders
6. Update `builders/bootstrap.ts`

### Week 2: Remaining Steps

7. Implement Plan & Assign builders
8. Implement Write builders
9. Implement Peer Review builders
10. Implement Reflect builders
11. Implement Inspect builders
12. Implement Presentation builders
13. Update all `builders/*.ts` files

### Week 3: Testing & Validation

14. Create prompt testing CLI
15. Add unit tests
16. Manual validation on test sessions
17. Fix any issues

---

## Summary

Phase 3 completes the prompt system by:

1. **Creating step builders** — TypeScript implementations of the templates in `steps/`
2. **Updating builder files** — Point existing builders to new step builders
3. **Adding user profile** — Include user context in all system prompts
4. **Testing infrastructure** — CLI and unit tests for validation

No migration needed — this is V1.





