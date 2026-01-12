# Pattern: Judgment Panel (Deliberated Verdict)

## The Insight
Multiple judges evaluate something, then DELIBERATE to reach a verdict. Different from Ensemble (no deliberation) and Race (competitive, not collaborative verdict).

## The Dynamic

```
              SUBJECT
                 │
    ┌────────────┼────────────┐
    ▼            ▼            ▼
 JUDGE 1      JUDGE 2      JUDGE 3
    │            │            │
    ▼            ▼            ▼
[Assessment] [Assessment] [Assessment]
    │            │            │
    └────────────┼────────────┘
                 │
                 ▼
    ┌─────────────────────────┐
    │     DELIBERATION        │
    │                         │
    │  Judges discuss         │
    │  Challenge each other   │
    │  Persuade              │
    │  Reach verdict          │
    └─────────────────────────┘
                 │
                 ▼
           FINAL VERDICT
```

## Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **Products** | Individual assessments, then deliberation, then verdict |
| **Collabs** | Deliberation happens via collabs |
| **Chair** | Moderates deliberation, calls for verdict |
| **Exchange** | Back-and-forth during deliberation |
| **Final product** | Verdict with reasoning |

## Product Structure

```
"Michelin Review: Restaurant X" (Orchestration)
├── "Subject" (Content) — what's being judged
├── "Individual Assessments" (Collection)
│   ├── "Judge 1 Assessment" (Content)
│   ├── "Judge 2 Assessment" (Content)
│   └── "Judge 3 Assessment" (Content)
├── "Deliberation" (Content) — captures the debate
└── "Final Verdict" (Content) — reasoned conclusion
```

## Flow

```
Phase 1 - Individual Assessment:
1. Judges independently assess subject
   - No peer review (preserve independence)
   - Each creates assessment product
   
Phase 2 - Reveal:
2. Chair reveals all assessments
   - Judges see each other's views
   
Phase 3 - Deliberation:
3. Judges deliberate via collabs
   - "Judge 2, you rated X highly but ignored Y"
   - "Judge 1, I challenge your criteria"
   - IN CHARACTER debate
   
4. Chair moderates
   - Ensures all voices heard
   - Tracks when convergence happening
   
Phase 4 - Verdict:
5. Chair calls for verdict
   - Judges must agree (or majority)
   - Final Verdict product created
   - Includes reasoning from deliberation
```

## Judgment Types

| Type | Deliberation Style | Verdict Form |
|------|-------------------|--------------|
| **Rating** | "I say 3 stars, you say 2, let's discuss" | Numerical + reasoning |
| **Pass/Fail** | "I think it passes, convince me otherwise" | Binary + reasoning |
| **Ranking** | "This should be first, not second" | Ordered list |
| **Award** | "Does it deserve the prize?" | Yes/No + comparison |
| **Verdict** | "Guilty or not guilty?" | Decision + reasoning |

## What Makes It Work

1. **Independent first** — Assessments before seeing others
2. **Deliberation is drama** — Judges challenge each other
3. **Persuasion possible** — Judges can change minds
4. **Chair moderates** — Prevents stalemate, ensures fairness
5. **Reasoned verdict** — Not just vote, but WHY

## Applies To
- Michelin Inspectors
- Award/prize judging
- Competition judging
- Quality assessment panels
- "Shark Tank" style evaluation
