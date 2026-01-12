# Phase 2: Step Builders Implementation Plan

**Date:** 2025-12-11  
**Goal:** Build step-specific prompt builders using Phase 1 renderers  
**Depends On:** Phase 1 (Entity & Composite Renderers) ✅ Complete

---

## Table of Contents

1. [Overview](#overview)
2. [Reference Documents](#reference-documents)
3. [Current Architecture Analysis](#current-architecture-analysis)
4. [Target Architecture](#target-architecture)
5. [Step-by-Step Implementation](#step-by-step-implementation)
6. [File Structure](#file-structure)
7. [Step Specifications](#step-specifications)
8. [Validation Checklist](#validation-checklist)

---

## Reference Documents

### Step Prompt Templates

Complete prompt templates for each step (system and user):

| Step | System Prompt | User Prompt | Version |
|------|---------------|-------------|---------|
| Bootstrap | [steps/bootstrap/system.md](./steps/bootstrap/system.md) | [steps/bootstrap/user.md](./steps/bootstrap/user.md) | V4.10 |
| Plan & Assign | [steps/plan-assign/system.md](./steps/plan-assign/system.md) | [steps/plan-assign/user.md](./steps/plan-assign/user.md) | V4.8 |
| Write | [steps/write/system.md](./steps/write/system.md) | [steps/write/user.md](./steps/write/user.md) | V4.7 |
| Peer Review | [steps/peer-review/system.md](./steps/peer-review/system.md) | [steps/peer-review/user.md](./steps/peer-review/user.md) | V4.7 |
| Reflect | [steps/reflect/system.md](./steps/reflect/system.md) | [steps/reflect/user.md](./steps/reflect/user.md) | V4.7 |
| Inspect | [steps/inspect/system.md](./steps/inspect/system.md) | [steps/inspect/user.md](./steps/inspect/user.md) | V4.7 |
| Presentation | [steps/presentation/system.md](./steps/presentation/system.md) | [steps/presentation/user.md](./steps/presentation/user.md) | V4.7 |

### Common Components

| Component | File | Description |
|-----------|------|-------------|
| Identity Block | [steps/common/identity.md](./steps/common/identity.md) | Agent identity template |
| Output Format | [steps/common/output-format.md](./steps/common/output-format.md) | JSON output rules |

### Integration Guides

| Document | Purpose |
|----------|---------|
| [integrations/README.md](./integrations/README.md) | Overview of all integration points |
| [integrations/existing-builders.md](./integrations/existing-builders.md) | Current builder pattern and migration |
| [integrations/context-tree-service.md](./integrations/context-tree-service.md) | Data source for step context |
| [integrations/rulesets-migration.md](./integrations/rulesets-migration.md) | Migrating from hardcoded rulesets |
| [integrations/orchestration-layer.md](./integrations/orchestration-layer.md) | How builders integrate with orchestration |
| [integrations/types-and-schemas.md](./integrations/types-and-schemas.md) | TypeScript types and output schemas |
| [integrations/testing-strategy.md](./integrations/testing-strategy.md) | Testing approach for step builders |

---

## Overview

### What We're Building

Step Builders that compose prompts for each CABAL workflow step:

| Step | Role | Purpose |
|------|------|---------|
| **Bootstrap** | Chair | Genesis — interpret mission, customize team |
| **Reflect** | Operative | Self-assess owned products |
| **Plan & Assign** | Chair | Structure work, accept/reject, assign tasks |
| **Write** | Operative | Create/update content for assigned products |
| **Peer Review** | Operative | Review others' work from your expertise |
| **Inspect** | Watchdog | Verify DoD, security, coherence |
| **Presentation** | Envoy | User-facing summary |

### Key Concepts

**System Prompt** = Rules, role, schema, guidance (static per step)  
**User Prompt** = Context data using Phase 1 renderers (dynamic per session)

### Implementation Strategy

1. Create **step builders** in `templates/step-builders/`
2. Each step builder exports `buildSystemPrompt()` and `buildUserPrompt()`
3. Step builders use Phase 1 renderers for dynamic content
4. Builder files import from step builders

---

## Current Architecture Analysis

### Existing System Prompt Pattern

```
src/orchestrator/prompter/system/
├── builders.ts      # Composes RULESET_* blocks
├── rulesets.ts      # ~3000 lines of hardcoded rule strings
├── persona.ts       # Persona generation
└── types.ts         # AgentPersonaParams
```

**Problem:** `rulesets.ts` contains massive string literals that are:
- Hard to maintain
- Not version controlled as documents
- Mixed formatting (some markdown, some plain text)
- Duplicated across steps

### Existing User Prompt Pattern

```
src/orchestrator/context-tree/user/
├── prompts.ts       # Step-specific user prompt builders
├── serializers.ts   # Context serialization functions
└── types.ts         # Param types
```

**Problem:** Serializers use ad-hoc string concatenation, not the Phase 1 renderers.

### Current Builder Pattern (Example: Write)

```typescript
// Current: src/orchestrator/prompter/builders/write.ts
export async function buildWritePrompt(ctx, productIds) {
  const system = buildWriteSystemPrompt(ctx);  // Uses rulesets.ts
  const user = await buildWriteUserPrompt(ctx, productIds);  // Uses old serializers
  return { system, user };
}
```

---

## Target Architecture

### New Structure

```
src/orchestrator/prompter/templates/
├── types.ts                    # Phase 1 ✅
├── engine.ts                   # Phase 1 ✅
├── renderers/                  # Phase 1 ✅
│   ├── product.ts
│   ├── version.ts
│   ├── collab.ts
│   ├── member.ts
│   ├── session.ts
│   ├── product-tree.ts
│   ├── valid-ids.ts
│   ├── work-history.ts
│   └── registry.ts
│
├── step-builders/              # Phase 2 (NEW)
│   ├── types.ts                # Common step builder types
│   ├── common/                 # Shared prompt sections
│   │   ├── identity.ts         # "You are {{name}} ({{id}})..."
│   │   ├── rules.ts            # Common rules blocks
│   │   └── schemas.ts          # JSON output schemas
│   │
│   ├── bootstrap/
│   │   ├── system.ts           # System prompt builder
│   │   ├── user.ts             # User prompt builder
│   │   └── index.ts            # Exports
│   │
│   ├── plan-assign/
│   │   ├── system.ts
│   │   ├── user.ts
│   │   └── index.ts
│   │
│   ├── write/
│   │   ├── system.ts
│   │   ├── user.ts
│   │   └── index.ts
│   │
│   ├── peer-review/
│   │   ├── system.ts
│   │   ├── user.ts
│   │   └── index.ts
│   │
│   ├── reflect/
│   │   ├── system.ts
│   │   ├── user.ts
│   │   └── index.ts
│   │
│   ├── inspect/
│   │   ├── system.ts
│   │   ├── user.ts
│   │   └── index.ts
│   │
│   ├── presentation/
│   │   ├── system.ts
│   │   ├── user.ts
│   │   └── index.ts
│   │
│   └── index.ts                # Registry of all step builders
│
└── index.ts                    # Updated exports
```

### New Builder Pattern

```typescript
// New: src/orchestrator/prompter/templates/step-builders/write/index.ts
import { buildWriteSystemPrompt } from './system.js';
import { buildWriteUserPrompt } from './user.js';
import type { ContextTree, StepPromptResult } from '../../../types.js';

export async function buildWritePrompt(
  ctx: ContextTree,
  productIds: string[],
): Promise<StepPromptResult> {
  const system = buildWriteSystemPrompt(ctx);
  const user = buildWriteUserPrompt(ctx, productIds);
  return { system, user };
}

export { buildWriteSystemPrompt, buildWriteUserPrompt };
```

---

## Step-by-Step Implementation

### Step 1: Create Common Types

**File:** `src/orchestrator/prompter/templates/step-builders/types.ts`

```typescript
import type { ContextTree, MemberContext, SessionContext } from '../../types.js';

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

// Common params for system prompts
export interface SystemPromptParams {
  currentMember: MemberContext;
  session: SessionContext;
  step: StepType;
}

// Step-specific params extend this
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

export interface ReflectParams extends StepPromptParams {
  // Uses owned products from context
}

export interface InspectParams extends StepPromptParams {
  changedProductIds?: string[];
}

export interface PresentationParams extends StepPromptParams {
  changedProductIds?: string[];
}
```

### Step 2: Create Common Prompt Sections

**File:** `src/orchestrator/prompter/templates/step-builders/common/identity.ts`

```typescript
import type { MemberContext } from '../../../types.js';
import { interpolate } from '../../engine.js';

const IDENTITY_TEMPLATE = `You are **{{name}}** ({{id}}), the **{{teamRole}}** on this team.

{{persona}}`;

export function renderIdentity(member: MemberContext): string {
  return interpolate(IDENTITY_TEMPLATE, {
    name: member.name,
    id: member.id,
    teamRole: member.team_role ?? member.role,
    persona: member.custom_persona_prompt ?? '',
  }).trim();
}
```

**File:** `src/orchestrator/prompter/templates/step-builders/common/schemas.ts`

```typescript
// JSON output schemas for each step

export const BOOTSTRAP_SCHEMA = `### Output Schema

\`\`\`json
{
  "reasoning": "string — your thought process interpreting the mission",
  
  "mission_charter": "string (200-400 words) — THE MISSION, CORE OBJECTIVE, DEFINITION OF DONE, CONSTRAINTS, WHY IT MATTERS",
  
  "underlying_objectives": "string (100-200 words) — deep analysis of real-world impact and measurable success criteria",
  
  "customized_personas": {
    "member-id": "string — persona for this member"
  },
  
  "operative_domains": {
    "operative-id": {
      "responsibility": "string — clear scope of ownership",
      "area": "string — domain/focus area"
    }
  },
  
  "missing_details": [
    "string — critical question that needs user clarification"
  ]
}
\`\`\``;

export const PLAN_ASSIGN_SCHEMA = `### Output Schema

\`\`\`json
{
  "reasoning": "string — your assessment of current state, mission gaps, and planning decisions",
  
  "structureDelta": "string — text tree for nested creations/removals (optional)",
  
  "changes": [
    {
      "productId": "UUID",
      "details": {
        "definition_of_done": "string (optional update)",
        "description": "string (optional update)"
      },
      "addSubProducts": [
        {
          "name": "string",
          "type": "Content | Decision | Collection | Orchestration",
          "definition_of_done": "string",
          "parentId": "UUID",
          "tempAssignmentId": "temp:1"
        }
      ],
      "remove": false
    }
  ],
  
  "assignments": [
    {
      "productId": "UUID or temp:id",
      "assigneeIds": ["operative-id"],
      "directive": {
        "importance": 1-10,
        "comment": "Full directive with CORE OBJECTIVE, DOD, WHY IT MATTERS, CONTEXT"
      },
      "setRoundFocus": true
    }
  ],
  
  "acceptance": [
    {
      "productId": "UUID",
      "isAccepted": true,
      "selectedVersionId": "UUID of accepted version",
      "commentIfRejected": "string (if rejected, explain why)"
    }
  ],
  
  "questionsForUser": [
    {
      "text": "Specific question for user (blocking unknown)"
    }
  ]
}
\`\`\``;

export const WRITE_SCHEMA = `### Output Schema

\`\`\`json
{
  "reasoning": "string — thought process, feedback addressed, what's new",
  "content": "string — the deliverable (markdown with headers, NOT JSON)",
  "changeSummary": "string — what changed from prior version, or 'Initial version'",
  "collabs": [
    {
      "refersToProduct": "UUID",
      "importance": 1-10,
      "comment": "string"
    }
  ],
  "remarks": [
    {
      "recipients": ["chair" | "team" | "user"],
      "type": "observation | question | blocker",
      "content": "string",
      "isBlocker": true | false
    }
  ]
}
\`\`\``;

export const PEER_REVIEW_SCHEMA = `### Output Schema

\`\`\`json
{
  "reasoning": "string — your assessment of the product from your perspective",
  "collabs": [
    {
      "refersToProduct": "product-id",
      "importance": 6-10,
      "comment": "Detailed feedback describing issue + suggested fix",
      "shortestSummary": "One-line label for the issue"
    }
  ]
}
\`\`\``;

export const REFLECT_SCHEMA = `### Output Schema

\`\`\`json
{
  "reasoning": "string — self-assessment thought process",
  "reflections": [
    {
      "productId": "UUID",
      "missionAlignment": "string — how this advances the mission",
      "improvementPlan": "string — what to improve next",
      "confidence": 0-100,
      "structuralRequests": ["string — proposed structural changes"]
    }
  ],
  "remarks": [
    {
      "recipients": ["chair" | "team"],
      "type": "observation | question | blocker",
      "content": "string",
      "isBlocker": true | false
    }
  ]
}
\`\`\``;

export const INSPECT_SCHEMA = `### Output Schema

\`\`\`json
{
  "reasoning": "string — inspection thought process",
  "collabs": [
    {
      "refersToProduct": "UUID",
      "importance": 6-10,
      "comment": "string — issue and suggested fix",
      "shortestSummary": "string — one-line label"
    }
  ],
  "remarks": [
    {
      "recipients": ["chair" | "team"],
      "type": "observation | question | blocker",
      "content": "string",
      "isBlocker": true | false
    }
  ]
}
\`\`\``;

export const PRESENTATION_SCHEMA = `### Output Schema

\`\`\`json
{
  "reasoning": "string — communication strategy",
  "title": "string — summary title for this round",
  "summary": "string — user-facing summary (markdown)",
  "highlights": ["string — key achievements"],
  "nextSteps": ["string — what happens next"],
  "questionsForUser": [
    {
      "text": "string — question needing user input"
    }
  ]
}
\`\`\``;
```

### Step 3: Create Step-Specific Builders

Each step needs `system.ts` and `user.ts`. Below are the specifications:

---

## Step Specifications

### Bootstrap (V4.10)

**System Prompt Structure:**
1. Identity (renderIdentity)
2. Role context ("You are the Chair performing Bootstrap...")
3. Purpose section
4. 5-Point Bootstrap Framework
5. What You Must NOT Do
6. What to Flag in missing_details
7. Aim High guidance
8. Output Schema
9. Persona Writing Tips
10. Common Mistakes to Avoid

**User Prompt Structure:**
1. Team Roster (renderTeamRoster with MemberPresets.minimal)
2. Raw User Prompt (the mission request)
3. Valid IDs (renderValidIds)

**Key Phase 1 Renderers Used:**
- `renderMember` (format: ListItem, includes: minimal)
- `renderTeamRoster`
- `renderValidIds`

---

### Plan & Assign (V4.8)

**System Prompt Structure:**
1. Identity (renderIdentity with persona)
2. Role context ("You are the Chair performing Plan & Assign...")
3. Your Authority
4. 6-Point Planning Framework
5. Product Model table
6. When to Use Each Product Type (with examples)
7. Directive Format
8. Sequence Discipline
9. Output Format rules
10. Output Schema
11. structureDelta Format
12. Common Mistakes to Avoid

**User Prompt Structure:**
1. Session header (renderSession with MissionCharter, Objectives)
2. Team roster (renderTeamRoster with MemberPresets.assignment)
3. Round number
4. Product Tree (renderProductTree with standard + LatestVersion)
5. Round Delta (changed products)
6. Operative Reflections (formatted list)
7. Collabs & Feedback (renderCollabs with status, grouped by open/resolved)
8. Products Pending Acceptance
9. Valid IDs (renderValidIds)

**Key Phase 1 Renderers Used:**
- `renderSession` (format: Full)
- `renderTeamRoster` (includes: assignment)
- `renderProductTree` (includes: standard + LatestVersion)
- `renderCollabs` (filterResolved option)
- `renderValidIds`

---

### Write (V4.7)

**System Prompt Structure:**
1. Identity (renderIdentity with persona)
2. Role context ("You are an Operative performing Write...")
3. Own Your Domain
4. Your Responsibilities (4 points)
5. Aim High
6. Meet Success Metrics
7. Trace Everything
8. Structure Your Output (markdown guidance)
9. Structure by Product Type (Content/Decision/Collection/Orchestration templates)
10. Self-Contained Output
11. Collab & Remark Guidance
12. Quality Standards
13. Self-Check checklist
14. Output Schema
15. Common Mistakes to Avoid

**User Prompt Structure:**
1. Session header (renderSession with MissionCharter)
2. Your Perspective (renderMember for current member, block format)
3. Product Tree context (renderProductTree minimal)
4. Assigned Products (renderWorkHistory for each assigned product)
5. Collabs on assigned products (renderCollabs filtered to assigned)
6. Valid IDs (renderValidIds)

**Key Phase 1 Renderers Used:**
- `renderSession` (includes: MissionCharter)
- `renderMember` (format: Block, for current member)
- `renderProductTree` (includes: minimal)
- `renderWorkHistory` (for assigned products)
- `renderCollabs`
- `renderValidIds`

---

### Peer Review (V4.7)

**System Prompt Structure:**
1. Identity (renderIdentity with persona)
2. Role context ("You are an Operative performing Peer Review...")
3. Your Purpose
4. Your Responsibilities
5. What to Look For
6. When to Leave a Collab
7. Collab Format
8. Output Format rules
9. Output Schema
10. Importance Scale
11. Empty Collabs is Valid
12. Common Mistakes to Avoid

**User Prompt Structure:**
1. Session header (renderSession)
2. Your Perspective (renderMember for current member)
3. Products to Review (renderProduct for each, with version content)
4. Valid IDs (renderValidIds)

**Key Phase 1 Renderers Used:**
- `renderSession`
- `renderMember` (format: Block)
- `renderProduct` (format: Block, includes: full with VersionContent)
- `renderValidIds`

---

### Reflect

**System Prompt Structure:**
1. Identity
2. Role context
3. Purpose
4. Reflection Framework
5. Output Schema
6. Common Mistakes

**User Prompt Structure:**
1. Session header
2. Your Perspective
3. Your Products (owned products with work history)
4. Collabs on your products
5. Valid IDs

**Key Phase 1 Renderers Used:**
- `renderSession`
- `renderMember` (format: Block)
- `renderWorkHistory` (for owned products)
- `renderCollabs`
- `renderValidIds`

---

### Inspect

**System Prompt Structure:**
1. Identity
2. Role context (Watchdog)
3. Purpose
4. Inspection Framework (DoD, Security, Coherence)
5. Output Schema
6. Common Mistakes

**User Prompt Structure:**
1. Session header
2. Products to Inspect (with full content)
3. Valid IDs

**Key Phase 1 Renderers Used:**
- `renderSession`
- `renderProductTree`
- `renderProduct` (format: Block, includes: full)
- `renderValidIds`

---

### Presentation

**System Prompt Structure:**
1. Identity
2. Role context (Envoy)
3. Purpose
4. Presentation Framework
5. Output Schema
6. Common Mistakes

**User Prompt Structure:**
1. Session header
2. Product Tree (overview)
3. Round changes
4. Valid IDs

**Key Phase 1 Renderers Used:**
- `renderSession` (format: Full)
- `renderProductTree`
- `renderValidIds`

---

## File Structure

Create files in this order:

```
src/orchestrator/prompter/templates/step-builders/
│
├── types.ts                           # Step 1
│
├── common/
│   ├── identity.ts                    # Step 2a
│   ├── rules.ts                       # Step 2b (common rule blocks)
│   └── schemas.ts                     # Step 2c
│
├── bootstrap/
│   ├── system.ts                      # Step 3a
│   ├── user.ts                        # Step 3b
│   └── index.ts                       # Step 3c
│
├── plan-assign/
│   ├── system.ts                      # Step 4a
│   ├── user.ts                        # Step 4b
│   └── index.ts                       # Step 4c
│
├── write/
│   ├── system.ts                      # Step 5a
│   ├── user.ts                        # Step 5b
│   └── index.ts                       # Step 5c
│
├── peer-review/
│   ├── system.ts                      # Step 6a
│   ├── user.ts                        # Step 6b
│   └── index.ts                       # Step 6c
│
├── reflect/
│   ├── system.ts                      # Step 7a
│   ├── user.ts                        # Step 7b
│   └── index.ts                       # Step 7c
│
├── inspect/
│   ├── system.ts                      # Step 8a
│   ├── user.ts                        # Step 8b
│   └── index.ts                       # Step 8c
│
├── presentation/
│   ├── system.ts                      # Step 9a
│   ├── user.ts                        # Step 9b
│   └── index.ts                       # Step 9c
│
└── index.ts                           # Step 10 - Registry
```

---

## Validation Checklist

### Architecture Compliance

- [ ] All step builders in `templates/step-builders/`
- [ ] Each step has `system.ts`, `user.ts`, `index.ts`
- [ ] Common sections extracted to `common/`
- [ ] TypeScript compiles without errors
- [ ] No direct imports from old `rulesets.ts`

### Step Coverage

| Step | System Prompt | User Prompt | Schema | Tests |
|------|--------------|-------------|--------|-------|
| Bootstrap | [ ] | [ ] | [ ] | [ ] |
| Plan & Assign | [ ] | [ ] | [ ] | [ ] |
| Write | [ ] | [ ] | [ ] | [ ] |
| Peer Review | [ ] | [ ] | [ ] | [ ] |
| Reflect | [ ] | [ ] | [ ] | [ ] |
| Inspect | [ ] | [ ] | [ ] | [ ] |
| Presentation | [ ] | [ ] | [ ] | [ ] |

### Phase 1 Renderer Usage

| Renderer | Used In Steps |
|----------|---------------|
| renderProduct | Write, Peer Review, Inspect |
| renderVersion | Work History (indirect) |
| renderCollab | Plan & Assign, Write, Peer Review, Reflect |
| renderMember | All steps (identity + team) |
| renderSession | All steps |
| renderProductTree | Plan & Assign, Write, Inspect, Presentation |
| renderValidIds | All steps |
| renderWorkHistory | Write, Reflect |

### Prompt Version Alignment

- [ ] Bootstrap matches V4.10 structure
- [ ] Plan & Assign matches V4.8 structure
- [ ] Write matches V4.7 structure
- [ ] Peer Review matches V4.7 structure
- [ ] All schemas match latest versions
- [ ] Common Mistakes sections included

### Integration Ready

- [ ] Export function matches existing builder signature
- [ ] Can swap new builders for old without breaking callers
- [ ] Returns `{ system: string, user: string }`

---

## Implementation Priority

**Recommended Order:**

1. **Bootstrap** — Simplest, no product tree
2. **Plan & Assign** — Most complex, validates full renderer integration
3. **Write** — Core operative workflow
4. **Peer Review** — Similar to Write pattern
5. **Reflect** — Owned products focus
6. **Inspect** — Watchdog-specific
7. **Presentation** — Envoy-specific

---

## Next Steps After Phase 2

### Phase 3: Orchestrator Integration & Production Readiness

See: [phase3_integration_plan.md](./phase3_integration_plan.md)

| Task | Description |
|------|-------------|
| **Step Builder Implementation** | Create TypeScript implementations of step templates |
| **Builder Updates** | Update all 7 builder files to use new step builders |
| **User Profile** | Propagate user profile to ALL system prompts |
| **Testing CLI** | Create `npm run prompt:test` for debugging |
| **Unit Tests** | Validate prompt generation |

### Phase 4: Template Externalization (Optional)

- Move system prompt content to external `.md` files
- Load and interpolate at runtime
- Enable prompt versioning without code changes
