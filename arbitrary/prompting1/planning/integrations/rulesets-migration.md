# Rulesets Migration Guide

## Current State

The file `src/orchestrator/prompter/system/rulesets.ts` contains ~3000 lines of hardcoded prompt strings:

```typescript
// Current structure in rulesets.ts

export const RULESET_GLOBAL_IDENTITY = `
You are a professional team member working on a collaborative project...
`;

export const RULESET_CORE_MISSION_PRINCIPLES = `
### Core Mission Principles
1. Quality over speed...
`;

export const RULESET_STEP_WRITE_SEMANTICS = `
### Write Step
You are in the Write phase...
`;

export const RULESET_SCHEMA_WRITE = `
### Output Schema
\`\`\`json
{
  "reasoning": "string",
  ...
}
\`\`\`
`;

// ~50+ more RULESET_* exports
```

## Problems with Current Approach

1. **Hard to maintain** — 3000+ lines in one file
2. **No version control per prompt** — Changes mixed together
3. **Duplication** — Similar content repeated across steps
4. **No format flexibility** — Can't adjust rendering dynamically
5. **Not testable** — Monolithic strings

## Migration Strategy

### Step 1: Identify Reusable Sections

| Section | Reuse Pattern | New Location |
|---------|---------------|--------------|
| Identity block | All steps | `common/identity.ts` |
| JSON output rules | Plan & Assign, Peer Review | `common/output-format.ts` |
| Output schemas | Per step | `<step>/system.ts` |
| Common mistakes | Per step + shared | `<step>/system.ts` + `common/` |
| ID rules | All steps | `common/rules.ts` |

### Step 2: Extract Step-Specific Content

Each step's system prompt becomes a composed template:

```typescript
// templates/step-builders/write/system.ts

import { renderIdentity } from '../common/identity.js';
import { WRITE_SCHEMA, ID_RULES } from '../common/schemas.js';

export function buildWriteSystemPrompt(ctx: ContextTree): string {
  const member = ctx.currentMember;
  if (!member) throw new Error('Write requires currentMember');
  
  const sections: string[] = [];
  
  // 1. Identity block (dynamic)
  sections.push(renderIdentity(member));
  
  // 2. Step introduction (static template)
  sections.push(WRITE_INTRO);
  
  // 3. Responsibilities (static template)
  sections.push(WRITE_RESPONSIBILITIES);
  
  // 4. Content structure guidance (static template)
  sections.push(WRITE_STRUCTURE_GUIDE);
  
  // 5. Output schema (static template)
  sections.push(WRITE_SCHEMA);
  
  // 6. Common mistakes (static template)
  sections.push(WRITE_COMMON_MISTAKES);
  
  return sections.join('\n\n---\n\n');
}

// Static templates (extracted from rulesets.ts)
const WRITE_INTRO = `You are an **Operative** performing a **Write** action in the CABAL system.

You are in the **Write** phase. Your input includes feedback from prior Reflect and Plan phases. Your output will be reviewed in Peer Review and Inspection.`;

const WRITE_RESPONSIBILITIES = `### Your Responsibilities

1. **Fulfill the Definition of Done** — ALL DoD criteria must be satisfied.
2. **Advance the Objectives** — Show how your work moves the mission forward.
3. **Address All Feedback** — Explicitly address each piece of feedback.
4. **Follow Chair Directives** — The directive takes priority when specified.`;

// ... more static templates
```

### Step 3: Map Rulesets to New Files

| Old Ruleset | New Location |
|-------------|--------------|
| `RULESET_GLOBAL_IDENTITY` | `common/identity.ts` (dynamic) |
| `RULESET_CORE_MISSION_PRINCIPLES` | Remove (redundant) |
| `RULESET_TONE_ETHOS` | Remove (embedded in step templates) |
| `RULESET_STYLE_FORMATTING` | `common/rules.ts` if needed |
| `RULESET_PROJECT_STRUCTURE` | Remove (in user prompt via renderers) |
| `RULESET_ID_RULES` | `common/rules.ts` |
| `makeRoleRules(params)` | `common/identity.ts` (dynamic) |
| `RULESET_STEP_WRITE_SEMANTICS` | `write/system.ts` |
| `RULESET_SCHEMA_WRITE` | `common/schemas.ts::WRITE_SCHEMA` |
| `RULESET_COMMON_MISTAKES_GLOBAL` | `common/rules.ts` |
| `RULESET_COMMON_MISTAKES_WRITE` | `write/system.ts` |

### Step 4: Update System Builder

The file `src/orchestrator/prompter/system/builders.ts` currently composes rulesets:

```typescript
// OLD: system/builders.ts
export function buildWriteSystemPrompt(params: AgentPersonaParams): string {
  return compose([
    RULESET_GLOBAL_IDENTITY,
    RULESET_CORE_MISSION_PRINCIPLES,
    RULESET_TONE_ETHOS,
    RULESET_STYLE_FORMATTING,
    RULESET_PROJECT_STRUCTURE,
    RULESET_ID_RULES,
    makeRoleRules(params),
    RULESET_STEP_WRITE_SEMANTICS,
    RULESET_SCHEMA_WRITE,
    RULESET_COMMON_MISTAKES_GLOBAL,
    RULESET_COMMON_MISTAKES_WRITE,
  ]);
}
```

After migration, this function is replaced by the step builder.

## Verification Checklist

For each step, verify:

- [ ] Identity block includes name, ID, team_role, persona
- [ ] Step context ("You are performing X action...")
- [ ] All responsibilities/rules from original
- [ ] Output schema matches exactly
- [ ] Common mistakes section included
- [ ] No content was omitted

## Testing Strategy

1. **Snapshot comparison**: Generate prompts with both old and new, diff them
2. **LLM behavior test**: Same input should produce similar output
3. **Schema validation**: Output still parses correctly

## Timeline

1. **Phase 2 Week 1**: Extract Bootstrap and Plan & Assign
2. **Phase 2 Week 2**: Extract Write and Peer Review
3. **Phase 2 Week 3**: Extract Reflect, Inspect, Presentation
4. **Phase 2 Week 4**: Testing and validation
5. **Phase 3**: Remove old rulesets.ts
