# Pattern: Zoom (Abstraction Navigation)

## The Insight
Some work benefits from explicitly navigating between abstraction levels. Strategic view, tactical view, detailed view—each reveals different insights. The team can zoom in and out deliberately.

## How It Differs From Existing
- **Not Accumulation** — Accumulation adds detail; Zoom switches LEVELS
- **Not DDS** — DDS decomposes once; Zoom moves between levels repeatedly
- Abstraction level is an explicit, navigable dimension

## The Flow

```
           STRATEGIC (10,000 ft)
                    │
         ┌──────────┴──────────┐
         ▼                     ▼
    TACTICAL (1,000 ft)   TACTICAL (1,000 ft)
         │                     │
    ┌────┴────┐           ┌────┴────┐
    ▼         ▼           ▼         ▼
DETAILED   DETAILED    DETAILED   DETAILED
(ground)   (ground)    (ground)   (ground)

Navigation: Can zoom OUT to see context
            Can zoom IN for detail
            Can move ACROSS at same level
```

## Abstraction Levels

| Level | Perspective | Questions Answered |
|-------|-------------|-------------------|
| **Strategic** | Why, Vision, Goals | What are we trying to achieve? |
| **Tactical** | What, Plans, Approaches | How will we achieve it? |
| **Detailed** | How, Implementation, Specifics | What exactly do we do? |

## High-Value Use Cases

| Team | Zoom Application |
|------|------------------|
| Consulting Strategy | Vision → Strategy → Initiatives → Actions |
| Goal Architects | Life goals → Year goals → Quarter goals → Weekly habits |
| Product Management | Vision → Roadmap → Epics → Stories |
| Architecture | System → Service → Component → Code |
| Event Planning | Event vision → Day structure → Hour schedule → Minute details |
| Career Council | Career vision → 5-year → 1-year → Next steps |

## Implementation

**Bootstrap:**
```
Create zoom structure:
"Strategy Stack" (Orchestration)
├── "Level 1: Strategic" (Content) — vision, why
├── "Level 2: Tactical" (Orchestration)
│   ├── "Tactic A" (Content)
│   └── "Tactic B" (Content)
└── "Level 3: Detailed" (Collection)
    ├── "Detail A.1" (Content)
    └── "Detail A.2" (Content)

Pin: "CURRENT ZOOM: Strategic. Zoom in after vision aligned."
```

**Navigation Commands:**
```
Chair can explicitly navigate:
- ZOOM IN: "Move from Strategic to Tactical on [area]"
- ZOOM OUT: "Step back to Strategic to check alignment"
- PAN: "Move across Tactical from A to B"

Each navigation triggers appropriate context attachment:
- Zoom in: Attach parent level as context
- Zoom out: Attach child details as context
- Pan: Attach sibling and parent as context
```
