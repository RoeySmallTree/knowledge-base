# Pattern: Phase Gate (Structured Approval)

## The Insight
Some projects need formal user approval between phases. Not ad-hoc halts, but PLANNED gates with specific deliverables and sign-off requirements.

## How It Differs From Existing
- **Not regular Halt** — Halt is ad-hoc; Phase Gate is planned and structured
- **Not Checkpoint** — Checkpoint is internal; Phase Gate requires USER approval
- Gates are **non-negotiable**—can't proceed without sign-off

## The Flow

```
PHASE 1: DISCOVERY          GATE 1              PHASE 2: ANALYSIS
        │                      │                        │
        ▼                      ▼                        ▼
   Work...              ┌─────────────┐            Work...
        │               │ Present:    │                 │
        ▼               │ - Findings  │                 ▼
   Deliverables         │ - Options   │            Deliverables
        │               │ User:       │                 │
        └──────────────►│ - Approve   │◄────────────────┘
                        │ - Redirect  │
                        │ - Stop      │
                        └─────────────┘
                               │
                               ▼
                    (Only proceed if approved)
```

## Gate Types

| Gate Type | What's Presented | User Decision |
|-----------|-----------------|---------------|
| **Discovery → Analysis** | Findings, scope, options | Proceed / Narrow / Pivot |
| **Analysis → Recommendations** | Analysis, criteria | Proceed / Deeper analysis |
| **Recommendations → Implementation** | Recommendations, plan | Accept / Modify / Reject |
| **Draft → Final** | Draft output | Approve / Revise |

## High-Value Use Cases

| Team | Phases | Gates |
|------|--------|-------|
| Consulting Strategy | Discovery → Analysis → Recommendations → Plan | 3 gates |
| The Firm | Scope → Draft → Review → Final | 3 gates |
| The Incubator | Concept → Validation → Blueprint → Launch Plan | 3 gates |
| Wealth Architects | Assessment → Strategy → Implementation Plan | 2 gates |
| Product Management | Discovery → Definition → Specification | 2 gates |

## Implementation

**Bootstrap:**
```
Define phases and gates:
"Project Phases" (Content)
- Phase 1: Discovery (Rounds 1-2)
  - Gate 1 deliverables: [list]
- Phase 2: Analysis (Rounds 3-5)
  - Gate 2 deliverables: [list]
- Phase 3: Recommendations (Rounds 6-7)
  - Final deliverables: [list]

Pin: "PHASE 1: Discovery. Gate 1 checkpoint after Round 2."
```

**Gate Halt:**
```json
{
  "halt": {
    "type": "phase_gate",
    "phase_completing": "Discovery",
    "deliverables": ["Findings summary", "Scope options", "Risk assessment"],
    "next_phase": "Analysis",
    "options": [
      "Approve: Proceed to Analysis",
      "Narrow: Reduce scope and proceed",
      "Expand: Broaden discovery",
      "Stop: End project"
    ],
    "message": "Discovery complete. Please review deliverables and approve next phase."
  }
}
```
