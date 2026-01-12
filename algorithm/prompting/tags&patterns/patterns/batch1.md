# Additional Pattern Exploration

Analyzing the mechanism, teams, and optimal dynamics to identify valuable patterns not yet covered.

---

## Pattern: Relay (Sequential Transformation)

### The Insight
Some work needs to pass through multiple specialists in sequence, with each TRANSFORMING (not just adding to) the work. Like a baton passing through a relay race, but each runner changes the baton.

### How It Differs From Existing
- **Not Accumulation** — Accumulation grows structure; Relay transforms content through expertise
- **Not Race** — Race is parallel; Relay is serial with handoffs
- **Not Peer Review** — Review critiques; Relay transforms ownership

### The Flow

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

### Key Mechanics
- Explicit **handoff products** between phases
- Each phase has different **owner(s)**
- Clear **transformation criteria** (not just "improve" but "convert analysis to narrative")
- Previous phase's output becomes input, not context

### High-Value Use Cases

| Team | Relay Chain | Transformation at Each Step |
|------|-------------|----------------------------|
| The Publisher | Researcher → Outliner → Drafter → Editor → Proofer | Data → Structure → Prose → Polish → Clean |
| The Hedge Fund | Data Gatherer → Analyst → Thesis Writer → Risk Reviewer | Raw data → Insights → Narrative → Stress-tested |
| Content Marketing SEO | Keyword Researcher → Strategist → Writer → SEO Optimizer | Keywords → Strategy → Content → Optimized |
| Curriculum Development | SME → Instructional Designer → Content Creator → Assessor | Knowledge → Pedagogy → Materials → Validated |
| The Agency | Market Researcher → Strategist → Creative → Producer | Insights → Strategy → Concepts → Execution |

### Implementation

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

---

## Pattern: Scaffold (Temporary Structure)

### The Insight
Some work requires temporary supporting structures that enable the final work but then get removed or absorbed. Like construction scaffolding—essential during building, removed when done.

### How It Differs From Existing
- **Not Accumulation** — Accumulation keeps everything; Scaffold intentionally discards
- **Not Context** — Context informs; Scaffold is USED then removed
- Scaffolds are **first-class products** that have a planned end-of-life

### The Flow

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

### Scaffold Types

| Scaffold Type | Purpose | Final Work | Fate |
|---------------|---------|------------|------|
| **Outline** | Structure before prose | Chapters/sections | Absorbed (becomes headers) |
| **Wireframe** | Layout before design | Final design | Removed (superseded) |
| **Pseudocode** | Logic before code | Real code | Removed |
| **Beat Sheet** | Story structure | Screenplay | Absorbed |
| **Skeleton API** | Interface before implementation | Working API | Transformed |
| **Decision Framework** | Criteria before decision | Decision | Absorbed into rationale |

### High-Value Use Cases

| Team | Scaffold | Final Work |
|------|----------|------------|
| The Publisher | Detailed outline with notes per section | Full manuscript |
| The Studio | Beat sheet / scene cards | Screenplay |
| Product Management | Feature skeleton (names + one-liners) | Full PRD |
| DM's Forge | Session outline with beats | Full session prep |
| Goal Architects | Goal hierarchy (just names) | Full goal framework |
| The Firm | Contract structure (clause list) | Full contract |

### Implementation

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

---

## Pattern: Persistent Adversary

### The Insight
Some work benefits from continuous adversarial pressure—not a one-time race, but a persistent role whose job is to attack, challenge, and find problems. The Red Team does this, but it's a pattern any team could use.

### How It Differs From Existing
- **Not Race (Diagnostic)** — Race is one-time; Adversary is persistent role
- **Not Peer Review** — Review is balanced; Adversary is OPPOSITION
- **Not Watchdog** — Watchdog verifies DoD; Adversary tries to BREAK things

### The Flow

```
EVERY ROUND:
                                    
CREATOR(S)                    ADVERSARY
    │                             │
    ▼                             ▼
Propose/Create ──────────────► Attack/Critique
    │                             │
    │◄────────────────────────────┘
    │                             
    ▼                             
Defend/Revise                     
    │                             
    └─────► Next Round (repeat)
```

### Key Mechanics
- Adversary is a **permanent role assignment**
- Adversary's job is to **find problems, not solutions**
- Adversary **doesn't need to be fair**—they're opposition
- Creator must **address or defend** against adversary's attacks
- Different from Watchdog: Adversary is creative attacker, Watchdog is criteria checker

### Adversary Modes

| Mode | Adversary Behavior | Best For |
|------|-------------------|----------|
| **Red Team** | Find security/failure vulnerabilities | Security, risk, resilience |
| **Devil's Advocate** | Argue the opposite position | Decisions, strategy |
| **Skeptic** | Question assumptions, demand evidence | Research, claims |
| **Customer Proxy** | Represent unhappy customer | Product, UX |
| **Competitor** | Attack as competitor would | Strategy, positioning |
| **Regulator** | Find compliance issues | Legal, regulated industries |

### High-Value Use Cases

| Team | Adversary Role | What They Attack |
|------|---------------|------------------|
| The Red Team | Security attacker | Vulnerabilities, failure modes |
| The Firm | Opposing counsel | Contract weaknesses, loopholes |
| The Incubator | VC Skeptic | Business model, assumptions |
| Consulting Strategy | Competitor strategist | Strategy weaknesses |
| Product Management | Angry customer | Feature gaps, UX issues |
| The Think Tank | Principled opposition | Argument weaknesses |

### Implementation

**Bootstrap:**
```
Assign adversary role:
Persona for operative-3: "You are THE ADVERSARY. Your job is to find 
problems, attack proposals, and surface weaknesses. You are not trying
to be fair or balanced—you are opposition. If you can't find problems,
look harder. Your success = their improvement."
```

**Plan & Assign:**
```
Every round with creator work:
1. Creators produce/revise
2. Adversary attacks (via collabs or adversary product)
3. Creators must respond to attacks in next version

Chair can modulate adversary intensity:
- "Adversary: go harder, they're not stress-tested enough"
- "Adversary: ease off, focus on biggest issues only"
```

---

## Pattern: Decompose-Delegate-Synthesize (DDS)

### The Insight
Complex problems are too big for single-perspective solutions. DDS explicitly breaks the problem into sub-problems, assigns to specialists, then synthesizes into coherent whole.

### How It Differs From Existing
- **Not Accumulation** — Accumulation grows one structure; DDS breaks apart then recombines
- **Not Race** — Race is same problem, multiple approaches; DDS is different sub-problems
- **Not Parallel Tracks** — Tracks are independent workstreams; DDS sub-problems must synthesize

### The Flow

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

### Key Mechanics
1. **Explicit decomposition** — Chair creates sub-problem structure
2. **Specialist assignment** — Each sub-problem to domain expert
3. **Interface definition** — How sub-solutions must connect
4. **Synthesis role** — Someone responsible for recombining
5. **Conflict resolution** — Process for when sub-solutions conflict

### High-Value Use Cases

| Team | Decomposition | Sub-Problems |
|------|---------------|--------------|
| The Incubator | Startup viability | Product, Market, Finance, Team, Operations |
| Consulting Strategy | Strategic recommendation | Market, Competitive, Internal, Financial, Risk |
| Product Management | Feature specification | User needs, Technical, Business, Design, QA |
| Event Planning | Event execution | Venue, Catering, Schedule, Speakers, Logistics |
| Real Estate Development | Deal analysis | Location, Financial, Zoning, Construction, Market |
| The Hedge Fund | Investment thesis | Company, Industry, Macro, Valuation, Risk |

### Implementation

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

---

## Pattern: Calibration (Warmup Alignment)

### The Insight
Teams (especially simulation teams) benefit from a "warmup" phase where they establish voice, style, and mutual understanding BEFORE the main work. This investment upfront prevents drift and inconsistency later.

### How It Differs From Existing
- **Not Bootstrap** — Bootstrap creates structure; Calibration aligns execution style
- **Not Quality Through Remarks** — Remarks steer during work; Calibration aligns before work
- Calibration is **explicit investment** in team coherence

### The Flow

```
CALIBRATION PHASE (Round 0-1)         MAIN WORK (Round 2+)
         │                                  │
         ▼                                  ▼
┌──────────────────────┐           ┌──────────────────────┐
│ 1. Produce samples   │           │ Work with calibrated │
│ 2. Critique each     │           │ team:                │
│    other's voice     │           │ - Consistent voice   │
│ 3. Chair issues      │           │ - Mutual understanding│
│    alignment notes   │           │ - Shared standards   │
│ 4. Revise samples    │           │                      │
│ 5. Confirm alignment │           │                      │
└──────────────────────┘           └──────────────────────┘
```

### What Gets Calibrated

| Dimension | Calibration Question |
|-----------|---------------------|
| **Voice** | Do characters sound distinct and consistent? |
| **Tone** | Is the emotional register right? |
| **Depth** | How detailed should outputs be? |
| **Style** | Formal? Casual? Technical? |
| **Interaction** | How do characters relate to each other? |
| **Boundaries** | What's in/out of scope? |

### High-Value Use Cases

| Team | What Needs Calibration | Sample Task |
|------|----------------------|-------------|
| Roast Squad | Character voices, roast intensity | "Each roaster: give a 3-line roast of pineapple pizza" |
| Board of Directors | Executive perspectives, debate style | "Each exec: 2 sentences on 'should we expand?'" |
| The Publisher | Prose style, narrative voice | "Each write: one paragraph describing a sunset" |
| Dungeon Party | Player characters, DM style | "Each player: introduce yourself in 3 sentences" |
| The Studio | Dialogue style, character voices | "Each character: react to 'we need to talk'" |
| Translation Corps | Cultural calibration | "Each translate: 'I'm sorry' with cultural notes" |

### Implementation

**Bootstrap:**
```
Pin to self: "CALIBRATION PHASE: Rounds 1-2 are for alignment. 
             No main work until voices calibrated."

Create: "Calibration Samples" (Collection)
        "Alignment Notes" (Content) — Chair's calibration feedback
```

**Round 1: Sample + Critique**
```
Assign each operative: "Produce a short sample of [X] in your voice"
Peer review: "Critique each other's voice—is it distinct? consistent?"
Chair: Review, issue alignment notes
```

**Round 2: Revise + Confirm**
```
Assign: "Revise your sample based on alignment notes"
Chair: Confirm calibration OR iterate
Pin alignment notes for reference during main work
```

---

## Pattern: Parallel Tracks (Merge Later)

### The Insight
Some projects have multiple independent workstreams that proceed in parallel but must eventually integrate. Unlike Race (same task, different approaches), Parallel Tracks are DIFFERENT tasks that must MERGE.

### How It Differs From Existing
- **Not Race** — Race is same task; Tracks are different tasks
- **Not DDS** — DDS synthesizes sub-problems; Tracks are independent until merge
- **Not Accumulation** — Accumulation grows one tree; Tracks grow multiple trees then merge

### The Flow

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

### Key Mechanics
1. **Track definition** — Each track has scope, owner, timeline
2. **Interface contracts** — Tracks agree on how they'll connect
3. **Independent progress** — Tracks work without blocking each other
4. **Integration checkpoints** — Planned points to compare and align
5. **Merge process** — Explicit work to combine tracks

### High-Value Use Cases

| Team | Tracks | Integration Point |
|------|--------|-------------------|
| Product Management | Features / Platform / Design | Unified PRD |
| The Incubator | Product / Go-to-Market / Operations | Launch plan |
| Event Planning | Venue / Program / Marketing | Event spec |
| The Studio | Script / Production Design / Casting | Shooting plan |
| TTRPG Orchestrator | Story / Encounters / NPCs | Campaign |
| Curriculum Development | Content / Assessment / Delivery | Course |

### Implementation

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

---

## Pattern: Phase Gate (Structured Approval)

### The Insight
Some projects need formal user approval between phases. Not ad-hoc halts, but PLANNED gates with specific deliverables and sign-off requirements.

### How It Differs From Existing
- **Not regular Halt** — Halt is ad-hoc; Phase Gate is planned and structured
- **Not Checkpoint** — Checkpoint is internal; Phase Gate requires USER approval
- Gates are **non-negotiable**—can't proceed without sign-off

### The Flow

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

### Gate Types

| Gate Type | What's Presented | User Decision |
|-----------|-----------------|---------------|
| **Discovery → Analysis** | Findings, scope, options | Proceed / Narrow / Pivot |
| **Analysis → Recommendations** | Analysis, criteria | Proceed / Deeper analysis |
| **Recommendations → Implementation** | Recommendations, plan | Accept / Modify / Reject |
| **Draft → Final** | Draft output | Approve / Revise |

### High-Value Use Cases

| Team | Phases | Gates |
|------|--------|-------|
| Consulting Strategy | Discovery → Analysis → Recommendations → Plan | 3 gates |
| The Firm | Scope → Draft → Review → Final | 3 gates |
| The Incubator | Concept → Validation → Blueprint → Launch Plan | 3 gates |
| Wealth Architects | Assessment → Strategy → Implementation Plan | 2 gates |
| Product Management | Discovery → Definition → Specification | 2 gates |

### Implementation

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

---

## Pattern: Ensemble (Aggregate Judgment)

### The Insight
Some decisions benefit from aggregating multiple INDEPENDENT judgments rather than collaborative development. Like planning poker or voting—each perspective is captured independently, then combined.

### How It Differs From Existing
- **Not Race** — Race creates artifacts; Ensemble makes judgments
- **Not Peer Review** — Review is collaborative; Ensemble is independent
- **Not Dialectic Race** — Dialectic debates; Ensemble aggregates without debate

### The Flow

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

### Key Mechanics
1. **Independent assessment** — Judges don't see each other's work
2. **No peer review** — Preserves independence
3. **Structured aggregation** — Clear method for combining
4. **Outlier discussion** — If votes diverge, explore why

### Ensemble Methods

| Method | When to Use | Process |
|--------|-------------|---------|
| **Majority Vote** | Binary decisions | Most votes wins |
| **Average** | Numerical estimates | Mean (or median for outlier resistance) |
| **Weighted** | Expertise varies | Weight by domain relevance |
| **Unanimous** | High-stakes | All must agree |
| **Discuss Outliers** | Learning opportunity | Explore why perspectives differ |

### High-Value Use Cases

| Team | Ensemble For | Aggregation |
|------|-------------|-------------|
| Product Management | Feature prioritization | Weighted average |
| The Hedge Fund | Risk scoring | Average + discuss outliers |
| QA Testing | Severity assessment | Majority vote |
| Real Estate | Valuation | Average + range |
| Advisory Board | Life decision | Present all + discuss |
| Consulting | Effort estimation | Average + discuss outliers |

### Implementation

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

---

## Pattern: Echo Chain (Perspective Transformation)

### The Insight
Some explanations or transformations benefit from passing through a CHAIN of perspectives, with each link retelling/transforming for their audience. Each step makes it more accessible or shifts the frame.

### How It Differs From Existing
- **Not Relay** — Relay transforms through expertise; Echo transforms through PERSPECTIVE
- **Not Translation** — Translation preserves meaning; Echo intentionally shifts it
- Each link RETELLS, not just edits

### The Flow

```
EXPERT                ENTHUSIAST            CURIOUS ADULT           CHILD
   │                      │                      │                    │
   ▼                      ▼                      ▼                    ▼
Technical           "Let me explain       "So basically..."      "It's like
explanation         what this means                               when you..."
   │                  in plain terms"           │                    │
   └─────────────────────►└──────────────────────►└───────────────────►│
                                                                       ▼
                                                              ACCESSIBLE OUTPUT
```

### Echo Chain Types

| Chain | Links | Purpose |
|-------|-------|---------|
| **Accessibility** | Expert → Enthusiast → Layperson → Child | Make complex simple |
| **Stakeholder** | Technical → Business → Customer → Public | Shift audience |
| **Formality** | Academic → Professional → Casual → Tweet | Compress and casualize |
| **Perspective** | Proponent → Neutral → Skeptic | See all angles |
| **Time** | Historian → Present-day → Futurist | Temporal lens |

### High-Value Use Cases

| Team | Echo Chain | Purpose |
|------|------------|---------|
| Eli Varied Team | Expert → Enthusiast → Grandparent → Child | Explain at any level |
| Content Marketing | Technical → Business → Customer | Translate value prop |
| The Publisher | Dense → Accessible → Compelling | Make engaging |
| Translator Corps | Literal → Cultural → Localized | Deep localization |
| The Agency | Feature → Benefit → Emotion → Story | Marketing transformation |

### Implementation

**Bootstrap:**
```
Create echo structure:
"Echo Chain" (Collection)
├── "Link 1: Expert Voice" (Content)
├── "Link 2: Enthusiast Voice" (Content)
├── "Link 3: Layperson Voice" (Content)
└── "Link 4: Child Voice" (Content)

Each link's owner has specific persona for their perspective.
```

**Plan & Assign:**
```
Sequential assignments (not parallel):
Round 1: Expert creates technical explanation
Round 2: Enthusiast retells Link 1 in their voice
Round 3: Layperson retells Link 2 in their voice
Round 4: Child retells Link 3 in their voice

Each link receives ONLY previous link as input—no original.
This forces genuine transformation, not just simplification of original.
```

---

## Pattern: Zoom (Abstraction Navigation)

### The Insight
Some work benefits from explicitly navigating between abstraction levels. Strategic view, tactical view, detailed view—each reveals different insights. The team can zoom in and out deliberately.

### How It Differs From Existing
- **Not Accumulation** — Accumulation adds detail; Zoom switches LEVELS
- **Not DDS** — DDS decomposes once; Zoom moves between levels repeatedly
- Abstraction level is an explicit, navigable dimension

### The Flow

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

### Abstraction Levels

| Level | Perspective | Questions Answered |
|-------|-------------|-------------------|
| **Strategic** | Why, Vision, Goals | What are we trying to achieve? |
| **Tactical** | What, Plans, Approaches | How will we achieve it? |
| **Detailed** | How, Implementation, Specifics | What exactly do we do? |

### High-Value Use Cases

| Team | Zoom Application |
|------|------------------|
| Consulting Strategy | Vision → Strategy → Initiatives → Actions |
| Goal Architects | Life goals → Year goals → Quarter goals → Weekly habits |
| Product Management | Vision → Roadmap → Epics → Stories |
| Architecture | System → Service → Component → Code |
| Event Planning | Event vision → Day structure → Hour schedule → Minute details |
| Career Council | Career vision → 5-year → 1-year → Next steps |

### Implementation

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

---

## Summary: New Patterns

| Pattern | Core Idea | Key Mechanism |
|---------|-----------|---------------|
| **Relay** | Sequential transformation through specialists | Handoff products, transformation criteria |
| **Scaffold** | Temporary structure that enables then disappears | Scaffold products with planned end-of-life |
| **Persistent Adversary** | Continuous attack/challenge role | Permanent adversary assignment |
| **DDS** | Decompose, solve parts, synthesize | Sub-problem structure, synthesis role |
| **Calibration** | Warmup rounds to align before main work | Sample/critique rounds, alignment pins |
| **Parallel Tracks** | Independent streams that merge later | Track orchestrations, integration checkpoints |
| **Phase Gate** | Formal user approval between phases | Structured gate halts |
| **Ensemble** | Aggregate independent judgments | Skip peer review, aggregation method |
| **Echo Chain** | Transform through perspective chain | Sequential retelling, perspective personas |
| **Zoom** | Navigate abstraction levels explicitly | Level structure, navigation commands |

---

## Which Patterns for Which Teams?

| Pattern | Highest-Value Teams |
|---------|-------------------|
| Relay | Publisher, Hedge Fund, Content Marketing, Agency |
| Scaffold | Publisher, Studio, DM's Forge, Product Management |
| Adversary | Red Team, The Firm, Incubator, Think Tank |
| DDS | Consulting, Incubator, Product Management, Event Planning |
| Calibration | All simulation teams, Publisher, Studio, Translation Corps |
| Parallel Tracks | Product Management, Incubator, Event Planning, Studio |
| Phase Gate | Consulting, The Firm, Wealth Architects |
| Ensemble | Product Management, Hedge Fund, Advisory Board, QA |
| Echo Chain | Eli Varied Team, Content Marketing, Translator Corps |
| Zoom | Consulting, Goal Architects, Product Management, Career Council |