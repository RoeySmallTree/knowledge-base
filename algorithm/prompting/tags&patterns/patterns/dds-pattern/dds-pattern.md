# Pattern: Decompose-Delegate-Synthesize (DDS)

## The Insight
Complex problems are too big for single-perspective solutions. DDS explicitly breaks the problem into sub-problems, assigns to specialists, then synthesizes into coherent whole.

## How It Differs From Existing
- **Not Accumulation** — Accumulation grows one structure; DDS breaks apart then recombines
- **Not Race** — Race is same problem, multiple approaches; DDS is different sub-problems
- **Not Parallel Tracks** — Tracks are independent workstreams; DDS sub-problems must synthesize

## The Flow

```
COMPLEX PROBLEM
       │
       ▼
┌──────────────────────────────────────┐
│           DECOMPOSE                   │
│  Chair breaks into sub-problems       │
│  - Technical feasibility              │
│  - Market opportunity                 │
│  - Financial viability                │
│  - Operational requirements           │
└───────────────┬──────────────────────┘
                │
       ┌────────┼────────┬────────┐
       ▼        ▼        ▼        ▼
   SUB-1    SUB-2    SUB-3    SUB-4
   Tech     Market   Finance   Ops
   Owner    Owner    Owner     Owner
       │        │        │        │
       └────────┴────────┴────────┘
                │
                ▼
┌──────────────────────────────────────┐
│           SYNTHESIZE                  │
│  Designated synthesizer combines:     │
│  - Resolves conflicts between subs    │
│  - Creates coherent whole             │
│  - Surfaces trade-offs                │
└──────────────────────────────────────┘
                │
                ▼
         INTEGRATED SOLUTION
```

## Key Mechanics
1. **Explicit decomposition** — Chair creates sub-problem structure
2. **Specialist assignment** — Each sub-problem to domain expert
3. **Interface definition** — How sub-solutions must connect
4. **Synthesis role** — Someone responsible for recombining
5. **Conflict resolution** — Process for when sub-solutions conflict

## High-Value Use Cases

| Team | Decomposition | Sub-Problems |
|------|---------------|--------------|
| The Incubator | Startup viability | Product, Market, Finance, Team, Operations |
| Consulting Strategy | Strategic recommendation | Market, Competitive, Internal, Financial, Risk |
| Product Management | Feature specification | User needs, Technical, Business, Design, QA |
| Event Planning | Event execution | Venue, Catering, Schedule, Speakers, Logistics |
| Real Estate Development | Deal analysis | Location, Financial, Zoning, Construction, Market |
| The Hedge Fund | Investment thesis | Company, Industry, Macro, Valuation, Risk |

## Implementation

**Bootstrap:**
```
Create decomposition structure:
"Problem Decomposition" (Orchestration)
├── "Sub-Problem 1: [Name]" (Content) — owner: specialist-1
├── "Sub-Problem 2: [Name]" (Content) — owner: specialist-2
├── "Sub-Problem 3: [Name]" (Content) — owner: specialist-3
├── "Interface Requirements" (Content) — how subs must connect
└── "Synthesis" (Content) — owner: synthesizer

Chair defines decomposition in Round 1.
Specialists work in parallel Rounds 2-N.
Synthesizer combines in Round N+1.
```

**Critical: Interface Requirements**
```
Sub-solutions must specify:
- Assumptions they're making about other subs
- Dependencies on other subs
- Constraints they impose on other subs

This enables synthesis to catch conflicts.
```
