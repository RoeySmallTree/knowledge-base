# The Race Pattern: Comprehensive Guide

## Executive Summary

The Race Pattern is a coordination strategy where the Chair assigns the same or related tasks to multiple operatives, generating parallel approaches that are then resolved through selection, synthesis, or evolution. It leverages the multi-agent architecture to produce outcomes superior to single-agent execution.

**Core insight:** Multiple perspectives on the same problem surface blind spots, generate options, stress-test assumptions, and improve quality in ways a single perspective cannot.

---

## Core Mechanism

### The Basic Flow

```
                    ┌─────────────────────────────────────────────────┐
                    │              PLAN & ASSIGN                       │
                    │                                                  │
                    │  Chair creates task(s)                          │
                    │  Chair assigns to MULTIPLE operatives           │
                    │  (same task, or related variants)               │
                    └─────────────────────┬───────────────────────────┘
                                          │
                                          ▼
        ┌─────────────────────────────────────────────────────────────┐
        │                         WRITE                                │
        │                                                              │
        │   Operative-1        Operative-2        Operative-3          │
        │   produces           produces           produces             │
        │   Version A          Version B          Version C            │
        │                                                              │
        └─────────────────────────────────┬───────────────────────────┘
                                          │
                                          ▼
        ┌─────────────────────────────────────────────────────────────┐
        │                      PEER REVIEW                             │
        │                                                              │
        │   Each operative reviews others' versions                    │
        │   Collabs created: critiques, suggestions, endorsements      │
        │   Cross-pollination of ideas occurs                          │
        │                                                              │
        └─────────────────────────────────┬───────────────────────────┘
                                          │
                                          ▼
        ┌─────────────────────────────────────────────────────────────┐
        │                 NEXT ROUND: PLAN & ASSIGN                    │
        │                                                              │
        │   Chair evaluates all versions + peer feedback               │
        │   Chair RESOLVES the race (see Resolution Strategies)        │
        │                                                              │
        └─────────────────────────────────────────────────────────────┘
```

### What Makes It a Race

1. **Parallel execution** — Multiple operatives work on the same challenge simultaneously
2. **Independent perspectives** — Each brings their persona, expertise, or assigned position
3. **Cross-examination** — Peer review creates dialogue between approaches
4. **Deliberate resolution** — Chair makes explicit decision about how to proceed

### Key Mechanics Used

| Mechanism | How Race Uses It |
|-----------|------------------|
| **Multiple assignments** | Same task assigned to multiple operatives in one round |
| **Directive variations** | Each operative can get different framing, constraints, or positions |
| **Peer review** | Creates cross-pollination and critique between versions |
| **Collabs** | Operatives comment on each other's approaches |
| **Chair acceptance** | Chair decides which version(s) proceed |
| **Remarks** | Chair tracks internal evaluation notes |

---

## Resolution Strategies

How the Chair concludes a race determines its purpose and value.

### 1. Select Winner

**What:** Chair picks the best version, discards others.

**When to use:**
- Clear success criteria exist
- Quality matters more than diversity
- Only one approach can proceed
- Resource constraints (can't pursue all)

**Chair actions:**
- Accept winning version
- Reject losing versions (or simply don't accept)
- Optionally: note in remarks why winner was selected

**Example:** Three operatives draft an executive summary. Chair selects the clearest one.

---

### 2. Synthesize

**What:** Chair (or assigned operative) combines best elements from all versions.

**When to use:**
- Multiple versions have complementary strengths
- Diversity of ideas is the goal
- No single version is complete
- Brainstorming or ideation context

**Chair actions:**
- Create new synthesis product
- Assign synthesis task: "Combine the structured approach from [[p:v1]], the risk considerations from [[p:v2]], and the creative framing from [[p:v3]]"
- Attach all versions as context

**Example:** Three operatives brainstorm marketing angles. Chair synthesizes into comprehensive campaign hitting all angles.

---

### 3. Evolve

**What:** Winner becomes input for next race iteration. Repeated until quality threshold met.

**When to use:**
- Progressive refinement needed
- Quality ceiling not yet reached
- Each iteration adds value
- Time/rounds available for iteration

**Chair actions:**
- Select current best
- Assign new race: "Improve on [[p:current-best]]"
- Each iteration raises the bar

**Example:** Round 1 produces three taglines. Best one goes to Round 2 where three operatives each try to improve it. Repeat until strong.

---

### 4. Inform Decision

**What:** Race outputs become data for Chair's strategic decision. No version "wins"—all inform.

**When to use:**
- Testing assumptions or approaches
- Strategic uncertainty
- Need empirical comparison before committing
- Decision more complex than "which is best"

**Chair actions:**
- Review all versions and peer feedback
- Make strategic decision (may be unrelated to any specific version)
- Document decision rationale
- Proceed with informed strategy

**Example:** Three operatives estimate project timeline under different assumptions. Chair uses the range and variance to set expectations, rather than picking one estimate.

---

### 5. Assign Leadership

**What:** Winner becomes lead for sub-project; others become contributors under their direction.

**When to use:**
- Complex sub-project needs ownership
- Multiple operatives could lead
- Want to establish hierarchy for efficiency
- Following rounds need clear direction

**Chair actions:**
- Select winner based on strategic thinking quality
- Assign winner as owner of sub-project orchestration
- Assign others to execute under winner's structure

**Example:** Three operatives propose campaign structure. Winner's structure becomes the plan; others execute pieces of it.

---

### 6. Document Perspectives

**What:** All positions preserved as reference, no resolution needed.

**When to use:**
- Decision belongs to user, not team
- Multiple valid perspectives exist
- Documentation is the goal
- Presenting options rather than recommending

**Chair actions:**
- Organize all versions under Decision product
- Present to user with tradeoffs
- Await user direction

**Example:** Three operatives present different investment strategies (conservative, moderate, aggressive). All presented to user who chooses based on risk tolerance.

---

## Race Variants by Intent

### Competitive Race

**Intent:** Find the objectively best solution.

**Setup:**
- Same task, same constraints
- Operatives compete on execution quality
- Clear evaluation criteria

**Resolution:** Select Winner

**Directive pattern:**
```
"Create [deliverable]. You are competing with other team members. 
The best version will be selected."
```

**Best for:** Critical deliverables, high-stakes decisions, when quality variance matters.

---

### Generative Race

**Intent:** Maximize idea diversity.

**Setup:**
- Same challenge, encourage different approaches
- Operatives explore freely
- No "wrong" answers

**Resolution:** Synthesize (or Document Perspectives)

**Directive pattern:**
```
"Generate ideas for [challenge]. Be creative and distinctive. 
We want diverse approaches—don't try to find the 'right' answer."
```

**Best for:** Brainstorming, creative exploration, early-stage ideation.

---

### Dialectic Race

**Intent:** Surface all considerations for a decision.

**Setup:**
- Assigned or natural positions (pro/con, stakeholder views)
- Each operative argues their position fully
- Steel-manning required

**Resolution:** Synthesize considerations

**Directive patterns:**
```
Position-assigned:
"Argue the PRO case for [decision]. Steel-man this position. 
Find the strongest arguments even if you personally disagree."

"Argue the CON case for [decision]. Surface all risks and downsides.
Make the strongest case against."

Stakeholder-assigned:
"Evaluate [decision] from the CUSTOMER's perspective. What do they care about?"

"Evaluate [decision] from ENGINEERING's perspective. What are the technical implications?"
```

**Best for:** Complex decisions, surfacing blind spots, building consensus, debate.

---

### Diagnostic Race

**Intent:** Find weaknesses, risks, or failure modes.

**Setup:**
- Each operative attacks from different angle
- Red team, security, edge cases, etc.
- Goal is to break, not to build

**Resolution:** Synthesize into risk register or vulnerability map

**Directive patterns:**
```
"Find weaknesses in [proposal] from a SECURITY perspective."

"Identify edge cases where [spec] would fail."

"Attack [strategy] as a competitor would. How would you defeat this?"
```

**Best for:** Risk assessment, security review, strategy stress-testing, QA.

---

### Evolutionary Race

**Intent:** Iteratively improve toward excellence.

**Setup:**
- Round N winner becomes Round N+1 input
- Each round attempts to improve
- Continues until quality threshold or diminishing returns

**Resolution:** Evolve (repeated)

**Directive pattern:**
```
Round 1: "Create [deliverable]."
Round 2: "Improve on [[p:round1-winner]]. Make it better."
Round 3: "Improve on [[p:round2-winner]]. Push further."
```

**Best for:** High-quality deliverables, creative refinement, when excellence matters.

---

### Assumption-Testing Race

**Intent:** Understand how assumptions affect outcomes.

**Setup:**
- Same task under different stated assumptions
- Each operative works within their assigned constraints
- Comparison reveals assumption sensitivity

**Resolution:** Inform Decision

**Directive patterns:**
```
"Estimate project timeline assuming BEST CASE: 
no blockers, full team availability, requirements stable."

"Estimate project timeline assuming REALISTIC CASE:
typical blockers, 80% availability, minor scope changes."

"Estimate project timeline assuming WORST CASE:
major blocker, key person unavailable, scope creep."
```

**Best for:** Planning, estimation, scenario analysis, strategy robustness.

---

### Constraint Exploration Race

**Intent:** Understand tradeoffs between constraints.

**Setup:**
- Same goal under different constraint emphases
- "Cheap version," "Fast version," "Quality version"
- Reveals what's possible and at what cost

**Resolution:** Inform Decision (or Document Perspectives)

**Directive patterns:**
```
"Design solution optimizing for COST. Minimize expense, accept tradeoffs."

"Design solution optimizing for SPEED. Fastest delivery, accept tradeoffs."

"Design solution optimizing for QUALITY. Best outcome, accept cost/time."
```

**Best for:** Resource allocation decisions, understanding tradeoffs, constraint negotiation.

---

### Audience Race

**Intent:** Find best framing for different audiences.

**Setup:**
- Same core message, different target audiences
- Each operative tailors to their audience
- Compare effectiveness

**Resolution:** Select Winner OR Synthesize (audience-specific versions)

**Directive patterns:**
```
"Write this announcement for TECHNICAL audience. 
Assume deep expertise, focus on implementation."

"Write this announcement for EXECUTIVE audience.
Focus on business impact, strategic implications."

"Write this announcement for CUSTOMER audience.
Focus on benefits, simplicity, what's in it for them."
```

**Best for:** Communications, marketing, documentation, announcements.

---

## Multi-Round Race Patterns

Races can span multiple rounds for more sophisticated outcomes.

### Pattern: Critique & Revise

```
Round 1: All operatives produce versions (Write)
         All operatives critique others (Peer Review)
         
Round 2: Each operative revises their version incorporating peer feedback
         Chair selects winner from revised versions
```

**Value:** Cross-pollination improves all versions before selection.

---

### Pattern: Narrow & Deepen

```
Round 1: 4 operatives produce versions
         Chair selects top 2
         
Round 2: Selected 2 operatives refine their approaches
         Other 2 operatives critique/challenge
         Chair selects final winner
```

**Value:** Efficient: broad exploration, then focused refinement.

---

### Pattern: Build & Attack

```
Round 1: Half of operatives build proposal
         Other half prepare attack angles
         
Round 2: Attackers critique builders' work
         Builders respond and revise
         
Round 3: Chair synthesizes robust version
```

**Value:** Adversarial improvement—built-in red team.

---

### Pattern: Diverge & Converge

```
Round 1: All operatives brainstorm freely (divergent)
         Maximum diversity, no wrong answers
         
Round 2: Chair synthesizes themes
         Assigns operatives to develop top themes
         
Round 3: Chair synthesizes final version (convergent)
```

**Value:** Creative exploration with structured convergence.

---

### Pattern: Tournament

```
Round 1: 8 operatives produce versions (bracket of 8)
         Peer review in pairs
         Chair selects 4 winners
         
Round 2: 4 winners revise (bracket of 4)
         Peer review in pairs
         Chair selects 2 winners
         
Round 3: Final 2 compete
         Chair selects champion
```

**Value:** Rigorous selection process for high-stakes deliverables.

---

## Use Case Catalog

### Decision Support

| Use Case | Variant | Setup | Resolution |
|----------|---------|-------|------------|
| Pro/Con Debate | Dialectic | Assigned positions | Synthesize |
| Stakeholder Analysis | Dialectic | Role-based perspectives | Synthesize |
| Scenario Planning | Assumption-Testing | Different future scenarios | Inform Decision |
| Assumption Sensitivity | Assumption-Testing | Same task, different assumptions | Inform Decision |
| Prioritization | Dialectic | Each prioritizes differently | Synthesize |
| Option Comparison | Competitive | Each develops different option | Document Perspectives |

### Quality & Risk

| Use Case | Variant | Setup | Resolution |
|----------|---------|-------|------------|
| Red Team | Diagnostic | Attack from different angles | Synthesize |
| Multi-Lens Review | Diagnostic | Security, UX, performance, etc. | Synthesize |
| Estimation | Assumption-Testing | Independent estimates | Inform Decision |
| Risk Assessment | Diagnostic | Each identifies domain risks | Synthesize |
| Edge Case Generation | Diagnostic | Each generates failure modes | Synthesize |
| Objection Prep | Diagnostic | Each generates objections | Synthesize |

### Creative & Exploration

| Use Case | Variant | Setup | Resolution |
|----------|---------|-------|------------|
| Brainstorming | Generative | Free exploration | Synthesize |
| Style Exploration | Generative | Same content, different styles | Select or Synthesize |
| Audience Targeting | Audience | Same message, different audiences | Select or Document |
| Constraint Tradeoffs | Constraint Exploration | Cheap/fast/quality versions | Inform Decision |
| Metaphor Finding | Generative | Different explanatory analogies | Select |
| Name/Tagline | Evolutionary | Iterate on best | Evolve |

### Negotiation & Strategy

| Use Case | Variant | Setup | Resolution |
|----------|---------|-------|------------|
| Negotiation Prep | Assumption-Testing | Different counterparty positions | Synthesize |
| Competitive Response | Assumption-Testing | Simulate competitor reactions | Synthesize |
| Strategy Stress-Test | Diagnostic | Attack strategy from angles | Synthesize |
| Sales Prep | Diagnostic | Generate objections + responses | Synthesize |

### Refinement & Quality

| Use Case | Variant | Setup | Resolution |
|----------|---------|-------|------------|
| Iterative Improvement | Evolutionary | Winner becomes next input | Evolve |
| Best-of-Breed | Competitive + Synthesize | Compete then combine | Synthesize |
| Critique Synthesis | Diagnostic | Multiple critiques of same work | Synthesize |
| Polish/Refinement | Evolutionary | Each improves current best | Evolve |

---

## Implementation Details

### Bootstrap Considerations

When planning a race, Chair should create appropriate structure:

```
"Race: [Name]" (Orchestration)
├── "Race Brief" (Content) — the challenge, evaluation criteria
├── "Versions" (Collection) — will hold competing versions
│   ├── "Version A" (Content) — Operative-1's version
│   ├── "Version B" (Content) — Operative-2's version
│   └── "Version C" (Content) — Operative-3's version
└── "Resolution" (Content) — final outcome, rationale
```

Or simpler:
```
"[Task Name]" (Decision)
├── "Option A" (Content)
├── "Option B" (Content)
└── "Option C" (Content)
```

### Plan & Assign: Starting a Race

**Explicit race:**
```json
{
  "assignments": [
    {
      "product_id": "version-a",
      "assignee_ids": ["operative-1"],
      "directive": {
        "objective": "Create marketing tagline for product launch",
        "context": "This is a race. Other team members are creating competing versions. Your version will be evaluated against theirs."
      }
    },
    {
      "product_id": "version-b", 
      "assignee_ids": ["operative-2"],
      "directive": {
        "objective": "Create marketing tagline for product launch",
        "context": "This is a race. Other team members are creating competing versions. Your version will be evaluated against theirs."
      }
    }
  ]
}
```

**Dialectic race (assigned positions):**
```json
{
  "assignments": [
    {
      "product_id": "pro-case",
      "assignee_ids": ["operative-1"],
      "directive": {
        "objective": "Argue FOR expanding into European market",
        "context": "Steel-man this position. Find the strongest arguments even if you personally see risks."
      }
    },
    {
      "product_id": "con-case",
      "assignee_ids": ["operative-2"],
      "directive": {
        "objective": "Argue AGAINST expanding into European market",
        "context": "Surface all risks and concerns. Make the strongest case for caution."
      }
    }
  ]
}
```

### Plan & Assign: Resolving a Race

**Selecting winner:**
```json
{
  "acceptance": [
    { "product_id": "version-b", "decision": "accept" }
  ],
  "remarks": [
    {
      "recipients": ["self"],
      "type": "note",
      "content": "Selected Version B: clearest structure, strongest hook. Version A was creative but unfocused. Version C technically sound but flat."
    }
  ]
}
```

**Assigning synthesis:**
```json
{
  "assignments": [
    {
      "product_id": "synthesis",
      "assignee_ids": ["operative-1"],
      "directive": {
        "objective": "Synthesize the best elements from all three approaches",
        "context": "Take the structured approach from [[p:version-a]], the risk framework from [[p:version-b]], and the creative examples from [[p:version-c]]"
      },
      "attach_context": [
        { "product_id": "version-a", "reason": "Structured approach" },
        { "product_id": "version-b", "reason": "Risk framework" },
        { "product_id": "version-c", "reason": "Creative examples" }
      ]
    }
  ]
}
```

### Peer Review in Races

Peer review is especially valuable in races:
- Critiques improve all versions
- Cross-pollination happens naturally
- Endorsements signal quality to Chair
- Concerns surface weaknesses

Operatives should be encouraged to:
- Give substantive feedback (not just "good job")
- Note what other versions do well
- Identify specific improvements
- Endorse strong elements

### Watchdog in Races

Watchdog inspects all versions against DoD, as normal. In races:
- All versions must meet minimum bar
- Findings apply to specific versions
- Severity may differ across versions
- Blocked versions can't win

### Envoy in Races

Presentation can highlight:
- The race is happening
- Different approaches being tried
- Interesting debates from peer review
- (After resolution) Winner and why

---

## When NOT to Race

Racing adds overhead. Don't race when:

| Situation | Why Not Race |
|-----------|--------------|
| Clear single path | No value in alternatives |
| Time constrained | Can't afford parallel work |
| Simple task | Overhead exceeds benefit |
| Strong prior knowledge | Already know best approach |
| Dependent work waiting | Blocks downstream |
| Single domain | Multiple perspectives don't add value |

---

## Teams with Natural Race Affinity

Some teams naturally benefit from racing:

| Team | Natural Race Variant | Why |
|------|---------------------|-----|
| Brainstorming Collective | Generative | Diversity is the point |
| The Think Tank | Dialectic | Structured debate |
| Devils Advocates | Dialectic | Position-based analysis |
| Creative Collective | Generative | Creative exploration |
| The Red Team | Diagnostic | Multi-angle attack |
| Board of Directors | Dialectic | Stakeholder perspectives |
| The Advisory Board | Dialectic | Different life perspectives |
| Consulting Strategy Firm | Competitive or Dialectic | Best strategy emerges |
| The Agency | Generative → Competitive | Explore then select |

---

## Summary

The Race Pattern transforms multi-agent architecture from "parallel workers on different tasks" to "parallel perspectives on same task." This unlocks:

1. **Quality through competition** — Best version wins
2. **Completeness through synthesis** — Multiple perspectives combine
3. **Robustness through stress-testing** — Weaknesses surfaced
4. **Clarity through debate** — Considerations explicit
5. **Evolution through iteration** — Progressive improvement

The Chair's choice of resolution strategy determines the race's purpose. The pattern is available to all Chairs—when and how to use it is a strategic decision based on mission needs.