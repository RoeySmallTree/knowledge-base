# Pattern: Scaffold (Temporary Structure)

## The Insight
Some work requires temporary supporting structures that enable the final work but then get removed or absorbed. Like construction scaffolding—essential during building, removed when done.

## How It Differs From Existing
- **Not Accumulation** — Accumulation keeps everything; Scaffold intentionally discards
- **Not Context** — Context informs; Scaffold is USED then removed
- Scaffolds are **first-class products** that have a planned end-of-life

## The Flow

```
BUILD SCAFFOLD              USE SCAFFOLD              REMOVE/ABSORB
      │                          │                          │
      ▼                          ▼                          ▼
Create temporary            Build real thing           Scaffold no longer
supporting structure        using scaffold as          needed—delete or
(outline, wireframe,        guide/template             absorb into final
pseudocode)                      │                          │
      │                          │                          │
      └──────────────────────────┴──────────────────────────┘
```

## Scaffold Types

| Scaffold Type | Purpose | Final Work | Fate |
|---------------|---------|------------|------|
| **Outline** | Structure before prose | Chapters/sections | Absorbed (becomes headers) |
| **Wireframe** | Layout before design | Final design | Removed (superseded) |
| **Pseudocode** | Logic before code | Real code | Removed |
| **Beat Sheet** | Story structure | Screenplay | Absorbed |
| **Skeleton API** | Interface before implementation | Working API | Transformed |
| **Decision Framework** | Criteria before decision | Decision | Absorbed into rationale |

## High-Value Use Cases

| Team | Scaffold | Final Work |
|------|----------|------------|
| The Publisher | Detailed outline with notes per section | Full manuscript |
| The Studio | Beat sheet / scene cards | Screenplay |
| Product Management | Feature skeleton (names + one-liners) | Full PRD |
| DM's Forge | Session outline with beats | Full session prep |
| Goal Architects | Goal hierarchy (just names) | Full goal framework |
| The Firm | Contract structure (clause list) | Full contract |

## Implementation

**Bootstrap:**
```
Pin to self: "SCAFFOLD PHASE: Building [outline] to enable [manuscript]. 
             Scaffold will be absorbed after Chapter 1-3 complete."
             
Create: "[Name] Scaffold" (Content) — marked as temporary
```

**Plan & Assign:**
```
Phase 1: Build scaffold (outline, wireframe, etc.)
Phase 2: Build real work using scaffold as primary context
Phase 3: When sufficient real work exists, either:
         - DELETE scaffold (if superseded)
         - ABSORB scaffold (merge into final structure)
         
Chair tracks scaffold status via pinned remark.
```
