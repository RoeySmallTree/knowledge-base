# Prompter Migration: Planning Documents

**Status:** Phase 1 ✅ | Phase 2 ✅ Planned | Phase 3 ✅ Planned  
**Date:** 2025-12-11

---

## Overview

This folder contains the complete planning documentation for migrating the CABAL prompter system to a template-based architecture.

### Phase Summary

| Phase | Status | Description |
|-------|--------|-------------|
| **Phase 1** | ✅ Complete | Entity & Composite Renderers |
| **Phase 2** | ✅ Planned | Step Builders (Bootstrap, Plan & Assign, Write, etc.) |
| **Phase 3** | ✅ Planned | Orchestrator Integration & Production Readiness |
| **Phase 4** | 🔜 Future | Template Externalization (Optional) |

---

## Document Index

### Main Planning Documents

| Document | Purpose |
|----------|---------|
| [phase1_implementation_plan.md](./phase1_implementation_plan.md) | Phase 1 implementation guide (Renderers) ✅ Complete |
| [phase2_step_builders_plan.md](./phase2_step_builders_plan.md) | Phase 2 implementation guide (Step Builders) |
| [phase3_integration_plan.md](./phase3_integration_plan.md) | **NEXT** - Phase 3 integration & production readiness |
| [validation_checklist.md](./validation_checklist.md) | Coverage validation against prompt versions |
| [prompter_migration_plan.md](./prompter_migration_plan.md) | High-level migration overview |

---

### Step Prompt Templates (Phase 2)

Located in `steps/` — Complete prompt templates for each workflow step.

| Step | System | User | Version |
|------|--------|------|---------|
| Bootstrap | [system.md](./steps/bootstrap/system.md) | [user.md](./steps/bootstrap/user.md) | V4.10 |
| Plan & Assign | [system.md](./steps/plan-assign/system.md) | [user.md](./steps/plan-assign/user.md) | V4.8 |
| Write | [system.md](./steps/write/system.md) | [user.md](./steps/write/user.md) | V4.7 |
| Peer Review | [system.md](./steps/peer-review/system.md) | [user.md](./steps/peer-review/user.md) | V4.7 |
| Reflect | [system.md](./steps/reflect/system.md) | [user.md](./steps/reflect/user.md) | V4.7 |
| Inspect | [system.md](./steps/inspect/system.md) | [user.md](./steps/inspect/user.md) | V4.7 |
| Presentation | [system.md](./steps/presentation/system.md) | [user.md](./steps/presentation/user.md) | V4.7 |

---

### Integration Guides (Phase 2)

Located in `integrations/` — How to integrate step builders with existing code.

| Document | Purpose |
|----------|---------|
| [existing-builders.md](./integrations/existing-builders.md) | Current builder pattern and migration |
| [context-tree-service.md](./integrations/context-tree-service.md) | Data source for step context |
| [rulesets-migration.md](./integrations/rulesets-migration.md) | Migrating from hardcoded rulesets |
| [orchestration-layer.md](./integrations/orchestration-layer.md) | How builders integrate with orchestration |
| [types-and-schemas.md](./integrations/types-and-schemas.md) | TypeScript types and output schemas |
| [testing-strategy.md](./integrations/testing-strategy.md) | Testing approach for step builders |

---

### Entity Specifications

Located in `entities/` — Define how each domain entity is rendered.

| Entity | File | Formats | Includes |
|--------|------|---------|----------|
| Product | [entities/product.md](./entities/product.md) | inline, block, tree-node | 13 |
| Version | [entities/version.md](./entities/version.md) | inline, block, changelog | 7 |
| Collab | [entities/collab.md](./entities/collab.md) | inline, block, directive, feedback-item | 11 |
| Member | [entities/member.md](./entities/member.md) | inline, list-item, block, id-reference | 11 |
| Session | [entities/session.md](./entities/session.md) | inline, header, full | 6 |

---

### Composite Specifications

Located in `composites/` — Define how multiple entities are combined.

| Composite | File | Uses |
|-----------|------|------|
| Product Tree | [composites/product_tree.md](./composites/product_tree.md) | Product, Version |
| Valid IDs | [composites/valid_ids.md](./composites/valid_ids.md) | Product, Member |
| Work History | [composites/work_history.md](./composites/work_history.md) | Product, Version, Collab |

---

## Key Architecture Concepts

### Format + Includes Model

Every renderer uses TWO configuration options:

| Option | Purpose | Example |
|--------|---------|---------|
| `format` | HOW to structure output | `'inline'`, `'block'`, `'tree-node'` |
| `includes` | WHAT data to include | `['id', 'type', 'status', 'owner']` |

### Presets

Shortcuts for common `includes` combinations:

```typescript
const ProductPresets = {
  minimal: ['id', 'type', 'status'],
  standard: ['id', 'type', 'status', 'owner', 'dod', 'round_focus'],
  full: ['id', 'type', 'status', 'owner', 'dod', 'description', ...],
};
```

### Single Function Pattern

Each entity has ONE render function that handles all formats:

```typescript
// ✅ Correct - single function with conditional logic
function renderProduct(product, options, context) {
  const format = options.format ?? 'block';
  const includes = options.includes ?? ProductPresets.minimal;
  
  // Format determines structure
  // Includes determines what data to show
}

// ❌ Wrong - separate functions per level
function renderMinimal(product) { ... }
function renderStandard(product) { ... }
function renderFull(product) { ... }
```

---

## File Location

All implementation files go in:

```
src/orchestrator/prompter/templates/
├── types.ts                       # Phase 1 ✅
├── engine.ts                      # Phase 1 ✅
├── renderers/                     # Phase 1 ✅
│   ├── base.ts
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
├── step-builders/                 # Phase 2 (NEW)
│   ├── types.ts
│   ├── common/
│   │   ├── identity.ts
│   │   ├── rules.ts
│   │   └── schemas.ts
│   ├── bootstrap/
│   ├── plan-assign/
│   ├── write/
│   ├── peer-review/
│   ├── reflect/
│   ├── inspect/
│   ├── presentation/
│   └── index.ts
│
└── index.ts
```

---

## Implementation Order

### Phase 1 (Complete ✅)

1. Read entity specification files
2. Follow `phase1_implementation_plan.md` step-by-step
3. Create files in specified order
4. Validate using `validation_checklist.md`

### Phase 2 (Step Builders)

1. Read `phase2_step_builders_plan.md`
2. Create common types and sections
3. Implement each step builder in priority order:
   - Bootstrap → Plan & Assign → Write → Peer Review → Reflect → Inspect → Presentation
4. Validate against latest prompt versions

### Phase 3 (Integration & Production)

1. Read `phase3_integration_plan.md`
2. Create common components (types, identity, user-profile, schemas)
3. Implement step builders from templates
4. Update builder files to use step builders
5. Add user profile to all system prompts
6. Create prompt testing CLI
7. Unit tests and validation

---

## Source Prompts

These prompt versions were analyzed:

| Step | Version | Location |
|------|---------|----------|
| Bootstrap | V4.10 | `../bootstrap/v4.10/` |
| Plan & Assign | V4.8 | `../plan_assign/v4.8/` |
| Write | V4.7 | `../write/v4.7/` |
| Peer Review | V4.7 | `../peer_review/v4.7/` |
