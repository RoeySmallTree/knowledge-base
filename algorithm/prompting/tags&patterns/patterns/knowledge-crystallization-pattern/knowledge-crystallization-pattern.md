# Pattern: Knowledge Crystallization (Learning Journey)

## The Gap

Intake Processing queues and routes information. But knowledge has a MATURITY journey:

```
Raw Info → Processed → Understood → Integrated → Mastered
```

Current patterns don't track where knowledge IS in this journey.

## The Insight

CORTEX teams should know not just WHAT you've learned, but HOW WELL you know it. A Personal University needs to know:
- What you've read (raw)
- What you can explain (understood)
- What you can apply (integrated)
- What you've mastered (automatic)

## The Mechanism

```
"Knowledge Unit: [Topic]" (Content)
├── Status: [raw | processed | understood | integrated | mastered]
├── First Encountered: [date]
├── Last Engaged: [date]
├── Engagement Count: [N]
├── Confidence: [self-assessed or tested]
├── Connections: [[p:related-units]]
└── Content: [the actual knowledge]
```

## Crystallization Stages

| Stage | Meaning | Evidence |
|-------|---------|----------|
| **Raw** | Intake, not processed | Just arrived |
| **Processed** | Summarized, structured | Can be retrieved |
| **Understood** | Can explain | Answered questions about it |
| **Integrated** | Connected to other knowledge | Cross-references active |
| **Mastered** | Automatic, foundational | Applied multiple times |

## Product Structure

```
"Knowledge Base: Machine Learning" (Orchestration)
├── "Map: ML Knowledge" (Content) — structure + status overview
│
├── "Fundamentals" (Collection)
│   ├── "Linear Regression" (Content) — status: mastered
│   ├── "Gradient Descent" (Content) — status: integrated
│   └── "Loss Functions" (Content) — status: understood
│
├── "Advanced" (Collection)
│   ├── "Transformers" (Content) — status: processed
│   └── "RLHF" (Content) — status: raw
│
└── "Crystallization Queue" (Content)
    ├── Ready for understanding test: Transformers
    ├── Ready for integration: Loss Functions
    └── Needs refresh (stale): [none]
```

## Chair Behaviors

**On New Knowledge:**
```
New info arrives:
1. Create Knowledge Unit at "raw" status
2. Assign processing (summarize, structure)
3. Update to "processed" when complete
```

**On Engagement:**
```
User asks about or uses knowledge:
1. Increment engagement count
2. Update "last engaged"
3. Assess if status should advance:
   - Explained it? → understood
   - Connected it? → integrated
   - Applied automatically? → mastered
```

**On Crystallization Push:**
```
Identify units ready for advancement:
1. Find "processed" units with multiple engagements
2. Test for understanding (quiz, explain-back)
3. If passed, advance status
4. Create connections to related units
```

**On Staleness Check:**
```
Periodically review:
1. Find units not engaged in N days
2. For understood+: suggest refresher
3. For mastered: probably fine
4. For raw/processed: deprioritize or prune
```

## Spaced Repetition Integration

```
"Review Schedule" (Content)
├── Due today:
│   ├── [[p:gradient-descent]] — last: 7 days ago, status: integrated
│   └── [[p:transformers]] — last: 3 days ago, status: processed
│
├── Due this week:
│   └── [[p:linear-regression]] — last: 30 days ago, status: mastered
│
└── Schedule algorithm: Spaced repetition based on status + confidence
```

## High-Value For

| Team | Crystallization Use |
|------|---------------------|
| The Personal University | Learning curriculum |
| Technical Documentation Hub | Understanding verification |
| The Living Codex | Rule comprehension |
| Research Synthesis Lab | Source integration |
| Policy & Procedure Vault | Compliance knowledge |
