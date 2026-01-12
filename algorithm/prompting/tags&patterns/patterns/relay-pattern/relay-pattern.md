# Pattern: Relay (Sequential Transformation)

## The Insight
Some work needs to pass through multiple specialists in sequence, with each TRANSFORMING (not just adding to) the work. Like a baton passing through a relay race, but each runner changes the baton.

## How It Differs From Existing
- **Not Accumulation** — Accumulation grows structure; Relay transforms content through expertise
- **Not Race** — Race is parallel; Relay is serial with handoffs
- **Not Peer Review** — Review critiques; Relay transforms ownership

## The Flow

```
RESEARCHER          ANALYST           WRITER            EDITOR
    │                  │                 │                 │
    ▼                  ▼                 ▼                 ▼
Gather raw        Transform to      Transform to      Transform to
information       insights          narrative         polished final
    │                  │                 │                 │
    └─────────────────►└────────────────►└────────────────►│
                                                           ▼
                                                      DELIVERABLE
```

## Key Mechanics
- Explicit **handoff products** between phases
- Each phase has different **owner(s)**
- Clear **transformation criteria** (not just "improve" but "convert analysis to narrative")
- Previous phase's output becomes input, not context

## High-Value Use Cases

| Team | Relay Chain | Transformation at Each Step |
|------|-------------|----------------------------|
| The Publisher | Researcher → Outliner → Drafter → Editor → Proofer | Data → Structure → Prose → Polish → Clean |
| The Hedge Fund | Data Gatherer → Analyst → Thesis Writer → Risk Reviewer | Raw data → Insights → Narrative → Stress-tested |
| Content Marketing SEO | Keyword Researcher → Strategist → Writer → SEO Optimizer | Keywords → Strategy → Content → Optimized |
| Curriculum Development | SME → Instructional Designer → Content Creator → Assessor | Knowledge → Pedagogy → Materials → Validated |
| The Agency | Market Researcher → Strategist → Creative → Producer | Insights → Strategy → Concepts → Execution |

## Implementation

**Bootstrap:**
```
Create relay structure:
"Relay Pipeline" (Orchestration)
├── "Phase 1: Research" (Content) — owner: researcher
├── "Phase 2: Analysis" (Content) — owner: analyst  
├── "Phase 3: Writing" (Content) — owner: writer
└── "Phase 4: Polish" (Content) — owner: editor

Each phase has: input spec, transformation goal, output spec
```

**Plan & Assign:**
```
Track current phase. When phase N complete:
1. Verify transformation complete (not just accumulated)
2. Handoff to phase N+1 owner
3. Attach phase N output as PRIMARY input (not just context)
4. Directive specifies transformation: "Convert this analysis into executive narrative"
```
