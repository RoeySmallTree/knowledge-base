# Pattern: Parallel Tracks (Merge Later)

## The Insight
Some projects have multiple independent workstreams that proceed in parallel but must eventually integrate. Unlike Race (same task, different approaches), Parallel Tracks are DIFFERENT tasks that must MERGE.

## How It Differs From Existing
- **Not Race** — Race is same task; Tracks are different tasks
- **Not DDS** — DDS synthesizes sub-problems; Tracks are independent until merge
- **Not Accumulation** — Accumulation grows one tree; Tracks grow multiple trees then merge

## The Flow

```
                    ┌─────────────────────────────────────┐
                    │           PARALLEL WORK              │
                    │                                      │
     TRACK A        │         TRACK B         TRACK C      │
     (Frontend)     │         (Backend)       (Design)     │
         │          │             │               │        │
         ▼          │             ▼               ▼        │
    Work...         │        Work...         Work...       │
         │          │             │               │        │
         ▼          │             ▼               ▼        │
    Work...         │        Work...         Work...       │
         │          │             │               │        │
         └──────────┴─────────────┴───────────────┘        
                              │
                    ┌─────────▼─────────┐
                    │  INTEGRATION      │
                    │  CHECKPOINT       │
                    │                   │
                    │  - Compare tracks │
                    │  - Find conflicts │
                    │  - Plan merge     │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │   MERGE/RECONCILE   │
                    │                     │
                    │   - Resolve conflicts│
                    │   - Integrate work  │
                    │   - Single coherent │
                    │     output          │
                    └─────────────────────┘
```

## Key Mechanics
1. **Track definition** — Each track has scope, owner, timeline
2. **Interface contracts** — Tracks agree on how they'll connect
3. **Independent progress** — Tracks work without blocking each other
4. **Integration checkpoints** — Planned points to compare and align
5. **Merge process** — Explicit work to combine tracks

## High-Value Use Cases

| Team | Tracks | Integration Point |
|------|--------|-------------------|
| Product Management | Features / Platform / Design | Unified PRD |
| The Incubator | Product / Go-to-Market / Operations | Launch plan |
| Event Planning | Venue / Program / Marketing | Event spec |
| The Studio | Script / Production Design / Casting | Shooting plan |
| TTRPG Orchestrator | Story / Encounters / NPCs | Campaign |
| Curriculum Development | Content / Assessment / Delivery | Course |

## Implementation

**Bootstrap:**
```
Create track structure:
"Project" (Orchestration)
├── "Track A: [Name]" (Orchestration) — owner: operative-1
│   ├── [Track A products]
│   └── "Interface Contract A→B" (Content)
├── "Track B: [Name]" (Orchestration) — owner: operative-2
│   ├── [Track B products]
│   └── "Interface Contract B→A" (Content)
├── "Integration Notes" (Content) — conflicts, decisions
└── "Merged Output" (Content) — final integrated work

Pin: "PARALLEL PHASE until Round N. Integration checkpoint Round N."
```

**Integration Checkpoint:**
```
Halt for structured review:
1. Each track presents status
2. Compare against interface contracts
3. Identify conflicts/gaps
4. Plan merge work
```
