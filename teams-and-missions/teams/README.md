# Teams Registry

Central repository for CABAL team presets, organized by districts and categories.

## Directory Structure

```
teams/
├── README.md                 # This file
├── roster/                   # All team definitions by district
│   ├── README.md             # Roster rules & templates
│   └── [district]/           # District folder (e.g., business, research)
│       └── [team-name]/      # Individual team folder
│           ├── team.md       # Team description & metadata
│           ├── members/      # Member profiles
│           │   └── [team-role]-[role].md
│           └── missions/     # Sample missions with expected outputs
│               └── [mission-name].md
└── rationals/                # Category taxonomy & cross-references
    ├── README.md             # Rationals documentation
    ├── districts/            # District descriptions
    │   └── [district].md     # District overview + team roster
    └── tags.md               # Tag → Teams mapping
```

## Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Districts | `kebab-case` | `business-ops`, `research` |
| Teams | `kebab-case` | `startup-blueprint`, `crisis-comms` |
| Members | `[team-role]-[role].md` | `lead-analyst-chair.md`, `data-specialist-operative.md` |
| Missions | `kebab-case` | `mvp-launch-plan.md` |

## Roles

Each team member has one of four roles:

| Role | Purpose |
|------|---------|
| **Chair** | Leads team flow, orchestrates discussion, determines quality |
| **Operative** | Core execution, domain expertise, primary work output |
| **Envoy** | External interface, stakeholder communication, synthesis |
| **Watchdog** | Quality assurance, risk identification, critical review |

## Maintenance Rules

1. **Adding a new team**: Create folder in appropriate district under `roster/`, add all required files
2. **Adding a new district**: Create district folder + add description in `rationals/districts/`
3. **Updating tags**: Maintain `rationals/tags.md` when teams are added/removed
4. **Versioning**: Use git commits with conventional messages (`feat:`, `fix:`, `chore:`)

## Quick Links

- [Roster Documentation](./roster/README.md)
- [Rationals & Taxonomy](./rationals/README.md)
