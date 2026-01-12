# Pattern: Ensemble (Aggregate Judgment)

## The Insight
Some decisions benefit from aggregating multiple INDEPENDENT judgments rather than collaborative development. Like planning poker or voting—each perspective is captured independently, then combined.

## How It Differs From Existing
- **Not Race** — Race creates artifacts; Ensemble makes judgments
- **Not Peer Review** — Review is collaborative; Ensemble is independent
- **Not Dialectic Race** — Dialectic debates; Ensemble aggregates without debate

## The Flow

```
            INDEPENDENT JUDGMENT                    AGGREGATION
                    │                                   │
    ┌───────────────┼───────────────┐                  │
    ▼               ▼               ▼                  ▼
JUDGE 1         JUDGE 2         JUDGE 3           ┌─────────────┐
   │               │               │               │ Aggregate:  │
   ▼               ▼               ▼               │ - Vote      │
Assessment     Assessment     Assessment    ────► │ - Average   │
(NO peer       (NO peer       (NO peer            │ - Consensus │
 review)        review)        review)            │ - Discuss   │
   │               │               │               │   outliers  │
   └───────────────┴───────────────┘               └─────────────┘
                                                         │
                                                         ▼
                                                   FINAL JUDGMENT
```

## Key Mechanics
1. **Independent assessment** — Judges don't see each other's work
2. **No peer review** — Preserves independence
3. **Structured aggregation** — Clear method for combining
4. **Outlier discussion** — If votes diverge, explore why

## Ensemble Methods

| Method | When to Use | Process |
|--------|-------------|---------|
| **Majority Vote** | Binary decisions | Most votes wins |
| **Average** | Numerical estimates | Mean (or median for outlier resistance) |
| **Weighted** | Expertise varies | Weight by domain relevance |
| **Unanimous** | High-stakes | All must agree |
| **Discuss Outliers** | Learning opportunity | Explore why perspectives differ |

## High-Value Use Cases

| Team | Ensemble For | Aggregation |
|------|-------------|-------------|
| Product Management | Feature prioritization | Weighted average |
| The Hedge Fund | Risk scoring | Average + discuss outliers |
| QA Testing | Severity assessment | Majority vote |
| Real Estate | Valuation | Average + range |
| Advisory Board | Life decision | Present all + discuss |
| Consulting | Effort estimation | Average + discuss outliers |

## Implementation

**Plan & Assign:**
```
Assign SAME assessment to multiple operatives:
"Rate the priority of Feature X on 1-10 scale with rationale"
"Estimate effort for this project in person-weeks"
"Score this candidate on culture fit (1-5)"

CRITICAL: Set flag to skip peer review for this task (preserves independence)
```

**Aggregation (Chair):**
```
Collect all judgments:
- If convergent (similar values): Use average/majority
- If divergent: 
  - Note outliers
  - Optionally: Ask outliers to explain reasoning
  - Chair decides how to weigh

Report: "Ensemble judgment: [X]. Range was [Y-Z]. Rationale: [summary]"
```
