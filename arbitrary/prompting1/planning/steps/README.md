# Steps Prompt Templates

This folder contains the complete prompt templates for each CABAL workflow step.

## Structure

```
steps/
├── common/                 # Shared components
│   ├── identity.md         # Identity block template
│   └── output-format.md    # JSON output rules
│
├── bootstrap/              # Chair: Genesis phase
│   ├── system.md           # System prompt template
│   └── user.md             # User prompt template
│
├── plan-assign/            # Chair: Strategic planning
│   ├── system.md
│   └── user.md
│
├── write/                  # Operative: Content creation
│   ├── system.md
│   └── user.md
│
├── peer-review/            # Operative: Review others' work
│   ├── system.md
│   └── user.md
│
├── reflect/                # Operative: Self-assessment
│   ├── system.md
│   └── user.md
│
├── inspect/                # Watchdog: Quality gate
│   ├── system.md
│   └── user.md
│
└── presentation/           # Envoy: User-facing summary
    ├── system.md
    └── user.md
```

## Prompt Versions

| Step | Version | System | User |
|------|---------|--------|------|
| Bootstrap | V4.10 | ✅ | ✅ |
| Plan & Assign | V4.8 | ✅ | ✅ |
| Write | V4.7 | ✅ | ✅ |
| Peer Review | V4.7 | ✅ | ✅ |
| Reflect | V4.7 | ✅ | ✅ |
| Inspect | V4.7 | ✅ | ✅ |
| Presentation | V4.7 | ✅ | ✅ |

## Variable Syntax

Templates use `{{variable}}` for interpolation:
- `{{currentMember.name}}` — Current agent's name
- `{{session.mission_charter}}` — Mission charter text
- `{{#each products}}...{{/each}}` — Loop over products

## How to Use

1. Read the system prompt for rules/schema
2. Read the user prompt for context structure
3. Implement the builder that interpolates the templates with Phase 1 renderers
