# Prompter Migration Plan: V4.7+ Template Integration

**Date:** 2025-12-11  
**Status:** Planning  
**Scope:** Migration from current scattered rulesets to template-based prompt engineering

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current State Analysis](#current-state-analysis)
3. [Target State: New Approach](#target-state-new-approach)
4. [Gap Analysis](#gap-analysis)
5. [SOLID-Principled Architecture](#solid-principled-architecture)
6. [Component Design](#component-design)
7. [Migration Steps](#migration-steps)
8. [Implementation Guidelines](#implementation-guidelines)

---

## 1. Executive Summary

### Problem

The current prompter system is functional but has several limitations:
- **Fragmented rulesets**: Rules are scattered across `RULESET_*` constants, making updates error-prone
- **Hardcoded formatting**: Context serialization uses programmatic string building (`.push()`, `.join()`)
- **No template files**: Prompts live in code, not maintainable markdown files
- **Inconsistent elaboration**: No standard way to control how much detail to include per entity
- **Missing examples**: Example outputs are embedded in rulesets, not versioned separately
- **No JSON-pure enforcement**: Schema deviation issues (like in Plan & Assign V4.7) persist

### Solution

Migrate to a **template-driven architecture** where:
- Prompts are defined in **versioned markdown files**
- Context rendering uses **elaboration levels** for flexible detail control
- Examples are **separate artifacts** that can be updated independently
- SOLID principles ensure **maintainability and extensibility**

### Expected Outcomes

- ✅ Prompt changes don't require code deploys
- ✅ Each step has a single source of truth (`.md` files)
- ✅ Context can be rendered at different detail levels
- ✅ New steps can be added by creating new templates
- ✅ Examples are versioned and tested separately

---

## 2. Current State Analysis

### Architecture Overview

```
src/orchestrator/prompter/
├── builders/                    # Step-specific prompt builders
│   ├── bootstrap.ts             # buildBootstrapPrompt()
│   ├── write.ts                 # buildWritePrompt()
│   ├── plan-assign.ts           # buildPlanAssignPrompt()
│   └── ...
│
├── system/                      # SYSTEM prompt components
│   ├── rulesets.ts              # RULESET_* constants (~700 lines)
│   ├── builders.ts              # compose() functions
│   ├── persona.ts               # getAgentPersonaParams()
│   └── types.ts                 # AgentPersonaParams
│
├── components/                  # Reusable prompt components
│   ├── context.ts               # missionCharter(), projectTree(), etc.
│   ├── output-structures.ts     # writeOutputStructure(), etc.
│   ├── personas.ts              # Persona formatting
│   └── ...
│
└── context-tree/
    └── user/
        ├── prompts.ts           # buildUserWritePrompt(), etc.
        └── serializers.ts       # serializeProductTree(), etc.
```

### Current Pattern: System Prompt Building

```typescript
// system/builders.ts
export function buildWriteSystemPrompt(params: AgentPersonaParams): string {
  return compose([
    RULESET_GLOBAL_IDENTITY,           // Static text block
    RULESET_CORE_MISSION_PRINCIPLES,   // Static text block
    RULESET_TONE_ETHOS,                // Static text block
    RULESET_STYLE_FORMATTING,          // Static text block
    RULESET_PROJECT_STRUCTURE,         // Static text block
    RULESET_ID_RULES,                  // Static text block
    makeRoleRules(params),             // Dynamic: agent persona
    RULESET_STEP_WRITE_SEMANTICS,      // Step-specific rules
    RULESET_SCHEMA_WRITE,              // Output schema
    RULESET_COMMON_MISTAKES_GLOBAL,    // Common mistakes
    RULESET_COMMON_MISTAKES_WRITE,     // Step-specific mistakes
  ]);
}
```

**Problems:**
- Each `RULESET_*` is a template literal in code
- Changes require code modification and deploy
- Hard to see the full prompt as a document
- No versioning of prompt content

### Current Pattern: User Prompt Building

```typescript
// context-tree/user/prompts.ts
export function buildUserWritePrompt(params: WriteUserParams): string {
  const contextBlock = buildContextBlock([
    serializeSessionHeader(stepContext.session),
    serializeMissionBrief(missionBrief ?? null),
    serializeRoleBrief(roleBrief ?? null),
    serializeYourPerspective(stepContext.members, currentAgentId),
    serializeProductTree(stepContext.products?.tree, stepContext.members),
    serializeAssignmentsForWrite(stepContext, assignment),
    serializeRecentCollabs(stepContext.collabs),
    serializeValidIds(stepContext),
  ]);
  return contextBlock.trim();
}
```

**Problems:**
- Fixed set of serializers per step (not configurable)
- No elaboration control (always same detail level)
- Serializers are tightly coupled to specific contexts

### Current Pattern: Context Serialization

```typescript
// components/context.ts
export const projectTree: PromptComponent = (ctx) => {
  const serializeProduct = (product: ProductContext, indent = 0): string => {
    const prefix = '  '.repeat(indent);
    const lines = [
      `${prefix}${product.name} [${product.type}, ${product.status}]`,
      `${prefix}  ID: ${product.id}`
    ];
    // ... more fixed formatting
  };
};
```

**Problems:**
- Hard-coded formatting decisions
- Can't easily adjust what fields are included
- No "levels" of detail (basic vs full)

---

## 3. Target State: New Approach

### Template-Based Prompts

Each step has **versioned markdown template files**:

```
prompting1/
├── bootstrap/v4.10/
│   ├── system_prompt.md     # Full system prompt template
│   └── user_prompt.md       # User prompt template with {{variables}}
│
├── plan_assign/v4.8/
│   ├── system_prompt.md
│   └── user_prompt.md
│
├── write/v4.7/
│   ├── system_prompt.md
│   └── user_prompt.md
│
└── shared/                   # Shared components
    ├── product_model.md      # Product type table
    ├── output_format.md      # Pure JSON requirement
    └── common_mistakes.md    # Global mistakes
```

### Elaboration Levels

Context entities support **configurable detail levels**:

```typescript
type ElaborationLevel = 'minimal' | 'standard' | 'full' | 'debug';

interface ProductRenderer {
  render(product: ProductContext, level: ElaborationLevel): string;
}
```

**Minimal:** Name, ID, type, status  
**Standard:** + DoD, owner, round focus  
**Full:** + latest version content, collabs, history  
**Debug:** + internal IDs, timestamps, raw data

### Example: Product Rendering at Different Levels

**Minimal:**
```markdown
- Technical Architecture [Decision, pending] (decision-tech-arch-001)
```

**Standard:**
```markdown
### Technical Architecture
**ID:** decision-tech-arch-001
**Type:** Decision | **Status:** pending
**Owner:** Alex (operative-1)
**DoD:** Architecture diagram, tech stack, sync strategy, scalability, integration approach
```

**Full:**
```markdown
### Technical Architecture
**ID:** decision-tech-arch-001
**Type:** Decision | **Status:** pending
**Owner:** Alex (operative-1)
**DoD:** Architecture diagram, tech stack, sync strategy, scalability, integration approach

#### Latest Version (V1)
# Core Technical Architecture for MenuSync...
[... full content ...]

#### Feedback
- Jordan (importance 8): "Sync speed insufficient for urgent inventory updates..."
- Jordan (importance 9): "Missing error visibility..."
```

---

## 4. Gap Analysis

| Aspect | Current State | Target State | Gap |
|--------|---------------|--------------|-----|
| **Template Storage** | Inline in TS code | Versioned `.md` files | Need template loader |
| **Template Variables** | Hardcoded `.push()` | `{{variable}}` interpolation | Need template engine |
| **Elaboration Control** | None (fixed detail) | `ElaborationLevel` config | Need renderer abstraction |
| **Shared Components** | `RULESET_*` constants | Importable `.md` fragments | Need fragment system |
| **Examples** | Embedded in rulesets | Separate `examples/` folder | Need example loader |
| **Output Format** | Missing "pure JSON" | Explicit section in template | Template update only |
| **Persona Injection** | `makeRoleRules(params)` | `{{persona}}` variable | Need persona renderer |
| **Version Control** | None | Folder-based (v4.7, v4.8) | Already started |

---

## 5. SOLID-Principled Architecture

### Single Responsibility Principle (SRP)

Each class/module has one reason to change:

| Module | Responsibility |
|--------|----------------|
| `TemplateLoader` | Load and parse `.md` template files |
| `TemplateEngine` | Interpolate `{{variables}}` in templates |
| `ProductRenderer` | Render products at various elaboration levels |
| `VersionRenderer` | Render versions at various elaboration levels |
| `CollabRenderer` | Render collabs at various elaboration levels |
| `PersonaRenderer` | Render agent personas for system prompts |
| `StepPromptBuilder` | Compose system + user prompts for a step |

### Open/Closed Principle (OCP)

Open for extension, closed for modification:

```typescript
// New steps can be added by:
// 1. Creating template files (e.g., peer_review/v4.7/system_prompt.md)
// 2. Registering step in configuration
// 3. NO changes to core prompt building logic

interface StepConfig {
  name: string;
  templatePath: string;
  elaborationDefaults: Record<string, ElaborationLevel>;
}
```

### Liskov Substitution Principle (LSP)

All renderers implement a common interface:

```typescript
interface EntityRenderer<T> {
  render(entity: T, level: ElaborationLevel, context?: RenderContext): string;
}

// ProductRenderer, VersionRenderer, CollabRenderer all implement EntityRenderer
```

### Interface Segregation Principle (ISP)

Small, focused interfaces:

```typescript
interface Loadable {
  load(path: string): Promise<string>;
}

interface Interpolatable {
  interpolate(template: string, variables: Record<string, unknown>): string;
}

interface Renderable<T> {
  render(entity: T, level: ElaborationLevel): string;
}
```

### Dependency Inversion Principle (DIP)

High-level modules don't depend on low-level modules:

```typescript
// StepPromptBuilder depends on abstractions, not implementations
class StepPromptBuilder {
  constructor(
    private templateLoader: Loadable,
    private templateEngine: Interpolatable,
    private renderers: Map<string, Renderable<unknown>>,
  ) {}
}
```

---

## 6. Component Design

### 6.1 Template Loader

**Purpose:** Load markdown templates from the file system or bundled assets.

```typescript
interface TemplateLoader {
  /**
   * Load a template file by step and version
   * @param step - Step name (bootstrap, write, plan_assign, etc.)
   * @param version - Version string (v4.7, v4.8, etc.)
   * @param type - 'system' or 'user'
   */
  load(step: string, version: string, type: 'system' | 'user'): Promise<string>;
  
  /**
   * Load a shared fragment (e.g., product_model.md)
   */
  loadFragment(name: string): Promise<string>;
}
```

**Implementation Notes:**
- In development: Read from file system
- In production: Bundle templates at build time
- Cache templates after first load

### 6.2 Template Engine

**Purpose:** Interpolate variables in templates.

```typescript
interface TemplateEngine {
  /**
   * Interpolate variables in a template string
   * Supports:
   * - Simple variables: {{variable}}
   * - Conditionals: {{#if condition}}...{{/if}}
   * - Loops: {{#each items}}...{{/each}}
   * - Nested access: {{session.mission_charter}}
   */
  interpolate(template: string, context: Record<string, unknown>): string;
}
```

**Implementation Notes:**
- Consider using Handlebars.js (already familiar from our templates)
- Or implement a simpler custom engine for `${}`-style interpolation
- Should handle undefined variables gracefully

### 6.3 Entity Renderers

**Purpose:** Render domain entities at configurable detail levels.

#### ProductRenderer

```typescript
interface ProductRenderOptions {
  level: ElaborationLevel;
  includeVersionHistory?: boolean;    // Show version changelog
  includeLatestContent?: boolean;     // Include full content text
  includeCollabs?: boolean;           // Show collabs on this product
  includeReflections?: boolean;       // Show reflections on this product
  highlightOwnedBy?: string;          // Mark products owned by specific agent
}

class ProductRenderer implements EntityRenderer<ProductContext> {
  render(product: ProductContext, options: ProductRenderOptions): string {
    const sections: string[] = [];
    
    // Always included
    sections.push(this.renderHeader(product, options));
    
    // Based on level
    if (options.level !== 'minimal') {
      sections.push(this.renderDoD(product));
      sections.push(this.renderOwner(product));
    }
    
    // Based on explicit includes
    if (options.includeLatestContent) {
      sections.push(this.renderLatestVersion(product));
    }
    
    if (options.includeCollabs) {
      sections.push(this.renderCollabs(product));
    }
    
    return sections.filter(Boolean).join('\n\n');
  }
}
```

#### VersionRenderer

```typescript
interface VersionRenderOptions {
  level: ElaborationLevel;
  showFullContent?: boolean;      // Include full content text
  showDelta?: boolean;            // Show diff from previous version
  showAuthor?: boolean;           // Include author info
}

class VersionRenderer implements EntityRenderer<VersionContext> {
  render(version: VersionContext, options: VersionRenderOptions): string;
}
```

#### CollabRenderer

```typescript
interface CollabRenderOptions {
  level: ElaborationLevel;
  showAuthor?: boolean;
  showImportance?: boolean;
  showResolved?: boolean;
}

class CollabRenderer implements EntityRenderer<CollabContext> {
  render(collab: CollabContext, options: CollabRenderOptions): string;
}
```

### 6.4 Composite Renderers

For complex sections that combine multiple entities:

```typescript
class ProductTreeRenderer {
  constructor(
    private productRenderer: ProductRenderer,
    private memberMap: Map<string, MemberContext>,
  ) {}
  
  render(rootProduct: ProductContext, options: ProductTreeRenderOptions): string {
    // Recursively render tree with indentation
  }
}

class ProductHistoryRenderer {
  constructor(
    private productRenderer: ProductRenderer,
    private versionRenderer: VersionRenderer,
    private collabRenderer: CollabRenderer,
  ) {}
  
  render(product: ProductContext, options: HistoryRenderOptions): string {
    // Render product with version history and collabs
  }
}
```

### 6.5 Step Prompt Builder

**Purpose:** Compose complete prompts for a step using templates and renderers.

```typescript
class StepPromptBuilder {
  constructor(
    private templateLoader: TemplateLoader,
    private templateEngine: TemplateEngine,
    private renderers: RendererRegistry,
  ) {}
  
  async build(
    step: StepName,
    version: string,
    context: ContextTree,
    options: StepBuildOptions,
  ): Promise<StepPromptResult> {
    // 1. Load templates
    const systemTemplate = await this.templateLoader.load(step, version, 'system');
    const userTemplate = await this.templateLoader.load(step, version, 'user');
    
    // 2. Build render context with rendered sections
    const renderContext = await this.buildRenderContext(context, options);
    
    // 3. Interpolate templates
    const system = this.templateEngine.interpolate(systemTemplate, renderContext);
    const user = this.templateEngine.interpolate(userTemplate, renderContext);
    
    return { system, user };
  }
  
  private async buildRenderContext(
    context: ContextTree,
    options: StepBuildOptions,
  ): Promise<Record<string, unknown>> {
    return {
      // Session data
      session: context.session,
      
      // Pre-rendered sections (using renderers at configured levels)
      missionCharter: context.session.mission_charter,
      objectives: context.session.underlying_objectives,
      
      // Rendered entities
      productTree: this.renderers.get('productTree').render(
        context.root_id,
        options.productTreeLevel ?? 'standard',
      ),
      
      // Current agent
      persona: this.renderers.get('persona').render(
        context.currentMember,
        options.personaLevel ?? 'full',
      ),
      
      // Valid IDs section
      validIds: this.renderers.get('validIds').render(context),
      
      // Step-specific data
      ...options.stepData,
    };
  }
}
```

---

## 7. Migration Steps

### Phase 1: Foundation (Week 1)

**Goal:** Create the infrastructure without breaking existing functionality.

1. **Create template directory structure**
   ```
   src/templates/
   ├── steps/
   │   ├── bootstrap/v4.10/
   │   ├── plan_assign/v4.8/
   │   ├── write/v4.7/
   │   └── ...
   └── shared/
       ├── product_model.md
       ├── output_format.md
       └── common_mistakes.md
   ```

2. **Implement TemplateLoader**
   - File system loading for development
   - Bundling strategy for production
   - Caching layer

3. **Implement TemplateEngine**
   - Choose between Handlebars or custom `${}` engine
   - Support basic interpolation, conditionals, loops
   - Error handling for missing variables

4. **Define ElaborationLevel enum and interfaces**
   - Create type definitions
   - Document level semantics

### Phase 2: Renderers (Week 2)

**Goal:** Implement entity renderers with elaboration support.

1. **ProductRenderer**
   - Implement all elaboration levels
   - Support all optional includes
   - Unit tests for each level

2. **VersionRenderer**
   - Content display options
   - Delta computation

3. **CollabRenderer**
   - Author resolution
   - Importance formatting

4. **CompositeRenderers**
   - ProductTreeRenderer
   - ProductHistoryRenderer
   - TeamRenderer

5. **Create RendererRegistry**
   - Register all renderers
   - Provide typed access

### Phase 3: Template Migration (Week 3)

**Goal:** Convert existing rulesets to template files.

1. **Extract current content to .md files**
   - For each step, create system_prompt.md and user_prompt.md
   - Replace hardcoded values with `{{variables}}`

2. **Migrate shared components**
   - Extract `RULESET_GLOBAL_IDENTITY` → `shared/global_identity.md`
   - Extract `RULESET_CORE_MISSION_PRINCIPLES` → `shared/mission_principles.md`
   - Extract output schemas → `shared/schemas/{step}.md`

3. **Create examples folder**
   - Extract example outputs from rulesets
   - Version them separately

4. **Update templates with new sections**
   - Add "Output Format" section (pure JSON requirement)
   - Add "reasoning" field to all schemas
   - Add structureDelta format examples

### Phase 4: Integration (Week 4)

**Goal:** Wire new system into existing prompt builders.

1. **Create StepPromptBuilder**
   - Implement build() method
   - Configure per-step elaboration defaults

2. **Create adapter for existing builders**
   ```typescript
   // Adapter that makes new system compatible with old interface
   async function buildWritePromptV2(
     contextTree: ContextTree,
     productIds: string[],
   ): Promise<StepPromptResult> {
     const builder = new StepPromptBuilder(...);
     return builder.build('write', 'v4.7', contextTree, {
       stepData: { assignedProductIds: productIds },
     });
   }
   ```

3. **A/B testing infrastructure**
   - Feature flag to switch between old and new
   - Log both outputs for comparison

4. **Gradual rollout**
   - Start with one step (e.g., Write)
   - Compare outputs, fix issues
   - Expand to other steps

### Phase 5: Cleanup (Week 5)

**Goal:** Remove legacy code and finalize migration.

1. **Remove old rulesets** (after validation)
2. **Remove old serializers** (after validation)
3. **Update documentation**
4. **Create contribution guide for templates**

---

## 8. Implementation Guidelines

### Template File Format

Each template file should follow this structure:

```markdown
# CABAL System Prompt: {Step Name} (V{version})

**Step:** {Step Name}  
**Role:** {Role}

---

## Source Variables

| Variable | Source Path |
|----------|-------------|
| `{{variable}}` | Description |

---

## Template

{Actual template content with {{variables}}}

---

## Filled Example

{Complete example with all variables filled}
```

### Variable Naming Convention

```
{{session.mission_charter}}     # Dot notation for nested
{{currentMember.name}}          # camelCase for properties
{{#each products}}              # Handlebars helpers lowercase
{{> shared/output_format}}      # Partials with path
```

### Elaboration Level Guidelines

| Level | Use Case | Token Budget |
|-------|----------|--------------|
| `minimal` | ID lists, quick references | ~10 tokens/entity |
| `standard` | Normal context | ~50 tokens/entity |
| `full` | Main focus entities | ~500 tokens/entity |
| `debug` | Troubleshooting | Unlimited |

### Testing Strategy

1. **Unit tests for each renderer**
   - Test all elaboration levels
   - Test edge cases (empty content, missing fields)

2. **Integration tests for prompt building**
   - Compare output with expected markdown
   - Validate variable interpolation

3. **Regression tests**
   - Capture current outputs as baselines
   - Ensure new system produces equivalent results

4. **LLM output tests**
   - Run prompts through LLM
   - Validate schema compliance
   - Check for regressions in behavior

---

## Appendix A: Files to Create

### New Files

```
src/
├── templates/
│   ├── loader.ts              # TemplateLoader implementation
│   ├── engine.ts              # TemplateEngine implementation
│   ├── types.ts               # ElaborationLevel, interfaces
│   │
│   ├── renderers/
│   │   ├── product.ts         # ProductRenderer
│   │   ├── version.ts         # VersionRenderer
│   │   ├── collab.ts          # CollabRenderer
│   │   ├── tree.ts            # ProductTreeRenderer
│   │   ├── history.ts         # ProductHistoryRenderer
│   │   ├── persona.ts         # PersonaRenderer
│   │   └── registry.ts        # RendererRegistry
│   │
│   ├── builder.ts             # StepPromptBuilder
│   │
│   └── steps/
│       ├── bootstrap/v4.10/
│       │   ├── system_prompt.md
│       │   └── user_prompt.md
│       ├── plan_assign/v4.8/
│       ├── write/v4.7/
│       ├── peer_review/v4.7/
│       ├── inspect/v4.7/
│       ├── reflect/v4.7/
│       └── presentation/v4.7/
│
└── orchestrator/prompter/
    └── v2/                    # New implementation (parallel to existing)
        └── adapter.ts         # Adapters for backward compatibility
```

### Files to Deprecate (After Migration)

```
src/orchestrator/prompter/
├── system/rulesets.ts         # → Replaced by template files
├── components/context.ts      # → Replaced by renderers
├── components/output-structures.ts  # → Replaced by template files
└── context-tree/user/serializers.ts # → Replaced by renderers
```

---

## Appendix B: Example Template

### write/v4.7/system_prompt.md

```markdown
# CABAL System Prompt: Write (V4.7)

**Step:** Write  
**Role:** Operative

---

You are **{{currentMember.name}}** ({{currentMember.id}}), the **{{currentMember.team_role}}** on this team.

{{currentMember.custom_persona_prompt}}

---

You are an **Operative** performing a **Write** action in the CABAL system.

...

### Output Format

**Your response must be pure JSON only.**

- Start directly with `{`
- End with `}`
- No explanation before the JSON
- No markdown code fences

Put your reasoning INSIDE the `reasoning` field.

---

### Output Schema

```json
{
  "reasoning": "string — thought process, feedback addressed, what's new",
  "content": "string — the deliverable (markdown, NOT JSON)",
  "changeSummary": "string — what changed",
  "collabs": [...],
  "remarks": [...]
}
```

---

{{> shared/common_mistakes}}
```

---

## Appendix C: Renderer Example

```typescript
// src/templates/renderers/product.ts

import type { ProductContext, MemberContext } from '../../types.js';
import type { ElaborationLevel, RenderContext } from '../types.js';

export interface ProductRenderOptions {
  level: ElaborationLevel;
  includeVersionHistory?: boolean;
  includeLatestContent?: boolean;
  includeCollabs?: boolean;
  highlightOwnedBy?: string;
}

export class ProductRenderer {
  constructor(private memberMap: Map<string, MemberContext>) {}
  
  render(product: ProductContext, options: ProductRenderOptions): string {
    switch (options.level) {
      case 'minimal':
        return this.renderMinimal(product, options);
      case 'standard':
        return this.renderStandard(product, options);
      case 'full':
        return this.renderFull(product, options);
      case 'debug':
        return this.renderDebug(product, options);
    }
  }
  
  private renderMinimal(product: ProductContext, options: ProductRenderOptions): string {
    const owned = options.highlightOwnedBy === product.owner_id ? ' ← YOU' : '';
    return `- ${product.name} [${product.type}, ${product.status}] (${product.id})${owned}`;
  }
  
  private renderStandard(product: ProductContext, options: ProductRenderOptions): string {
    const owner = this.memberMap.get(product.owner_id ?? '');
    const ownerName = owner?.name ?? product.owner_id ?? 'Unassigned';
    
    return `
### ${product.name}

**ID:** ${product.id}
**Type:** ${product.type} | **Status:** ${product.status}
**Owner:** ${ownerName}
**DoD:** ${product.definition_of_done}
`.trim();
  }
  
  private renderFull(product: ProductContext, options: ProductRenderOptions): string {
    const standard = this.renderStandard(product, options);
    const sections = [standard];
    
    if (options.includeLatestContent && product.selected_version_id) {
      // Add version content rendering
    }
    
    if (options.includeCollabs) {
      // Add collabs rendering
    }
    
    return sections.join('\n\n');
  }
  
  private renderDebug(product: ProductContext, options: ProductRenderOptions): string {
    return JSON.stringify(product, null, 2);
  }
}
```

---

## Next Steps

1. **Review this plan** with stakeholders
2. **Prioritize phases** based on urgency
3. **Assign ownership** for each phase
4. **Create tracking issues** for implementation tasks
5. **Begin Phase 1** after approval
