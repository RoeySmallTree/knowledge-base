# Phase 2 Integration Points

This folder documents the mechanisms and files that must be modified or integrated with during Phase 2 implementation.

## Overview

Phase 2 involves building step builders that:
1. **Replace** existing system prompt construction from `rulesets.ts`
2. **Leverage** Phase 1 renderers for user prompt construction
3. **Integrate** with existing orchestration layer
4. **Maintain** backward compatibility during migration

## Integration Documents

| Document | Purpose |
|----------|---------|
| [existing-builders.md](./existing-builders.md) | Current builder pattern and files to replace |
| [context-tree-service.md](./context-tree-service.md) | Data source for step context |
| [rulesets-migration.md](./rulesets-migration.md) | Migrating from hardcoded rulesets |
| [orchestration-layer.md](./orchestration-layer.md) | How builders are called from orchestration |
| [types-and-schemas.md](./types-and-schemas.md) | TypeScript types and output schemas |
| [testing-strategy.md](./testing-strategy.md) | How to test step builders |

## Files To Touch

### New Files (Create)

```
src/orchestrator/prompter/templates/step-builders/
├── types.ts                    # Step builder types
├── common/
│   ├── identity.ts             # Identity block builder
│   ├── schemas.ts              # JSON output schemas
│   └── rules.ts                # Common rule blocks
├── bootstrap/
│   ├── system.ts               # Bootstrap system prompt
│   ├── user.ts                 # Bootstrap user prompt
│   └── index.ts                # Exports
├── plan-assign/
│   ├── system.ts
│   ├── user.ts
│   └── index.ts
├── write/
│   ├── system.ts
│   ├── user.ts
│   └── index.ts
├── peer-review/
│   ├── system.ts
│   ├── user.ts
│   └── index.ts
├── reflect/
│   ├── system.ts
│   ├── user.ts
│   └── index.ts
├── inspect/
│   ├── system.ts
│   ├── user.ts
│   └── index.ts
├── presentation/
│   ├── system.ts
│   ├── user.ts
│   └── index.ts
└── index.ts                    # Step builder registry
```

### Existing Files (Modify)

```
src/orchestrator/prompter/
├── builders/
│   ├── bootstrap.ts            # Update to use new builder
│   ├── plan-assign.ts          # Update to use new builder
│   ├── write.ts                # Update to use new builder
│   ├── peer-review.ts          # Update to use new builder
│   ├── reflect.ts              # Update to use new builder
│   ├── inspection.ts           # Update to use new builder
│   └── presentation.ts         # Update to use new builder
│
├── templates/
│   └── index.ts                # Export step builders
│
└── types.ts                    # May need updates for new types
```

### Existing Files (Deprecate Later)

```
src/orchestrator/prompter/system/
├── rulesets.ts                 # 3000+ lines of hardcoded strings
└── builders.ts                 # Current system prompt composers
```

## Migration Path

1. **Phase 2a**: Create new step builders alongside existing ones
2. **Phase 2b**: Update existing builders to use new step builders  
3. **Phase 2c**: Test both paths work identically
4. **Phase 3**: Remove old rulesets and system builders
