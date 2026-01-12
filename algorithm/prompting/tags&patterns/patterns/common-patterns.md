# V3 Artifact 2: Common Patterns

Patterns are reusable coordination strategies that span multiple steps. Tags reference these patterns and provide the specific prompts to implement them.

---

## Pattern: Context Management

### Purpose
Maintain persistent information across rounds that informs work quality. User constraints, preferences, world state, accumulated decisions—anything that should influence future work.

### The Problem It Solves
Without explicit context products, information shared in Round 1 is forgotten by Round 5. Operatives make generic recommendations because they don't have access to user-specific information. The Chair can't attach context that doesn't exist.

### How It Works

```
BOOTSTRAP                 PLAN & ASSIGN                WRITE
    │                          │                         │
    ▼                          ▼                         ▼
Create context            Update context            Reference context
products to hold          when new info             using [[p:id]]
persistent info           arrives (chair_versions)  in output
    │                          │                         │
    │                     Attach context                 │
    │                     to assignments ────────────────▶
    │                          │
    └──────────────────────────┘
         Structure persists across rounds
```

### Key Mechanics

1. **Bootstrap creates structure** — Products to hold context categories (constraints, preferences, history, etc.)

2. **Chair updates on new info** — When user shares relevant information, Chair updates context products using `chair_versions` or assigns operative to process complex info

3. **Chair attaches to assignments** — Every assignment that benefits from context gets it attached with `attach_context`

4. **Operatives reference in output** — Output explicitly incorporates context: "Given your [constraint from context]..."

### Example Structure

```
"User Context" (Orchestration)
├── "Constraints" (Content) — time, budget, location, limitations
├── "Preferences" (Content) — style, approach, what's worked/failed
└── "Goals" (Content) — objectives, timeline, priorities
```

### When to Apply
- Personal assistance (VITALS teams)
- Any mission requiring personalization
- Simulation with persistent world state
- Long sessions where information accumulates

---

## Pattern: Persistent Utility

### Purpose
Maintain reference products (rules, sources, standards, glossaries) that govern work quality and enable verification. The utility product is the source of truth.

### The Problem It Solves
Without documented rules, Watchdog invents standards. Without tracked sources, claims are unverifiable. Without explicit standards, quality is subjective. The utility product makes verification objective.

### How It Works

```
BOOTSTRAP                 PLAN & ASSIGN                INSPECT
    │                          │                         │
    ▼                          ▼                         ▼
Create utility            Attach utility             Verify against
product with              to dependent work          utility product
reference material             │                         │
    │                          ▼                         │
    │                     Directive references       Findings cite
    │                     utility: "comply with      utility:
    │                     [[p:rules]]"               "violates [[p:rules]]
    │                          │                     Section 4"
    └──────────────────────────┴─────────────────────────┘
              Utility is source of truth
```

### Key Mechanics

1. **Bootstrap creates utility** — Rules, sources, standards documented in dedicated product(s)

2. **Chair attaches to dependent work** — Any work that must comply with rules gets the rules attached

3. **Directive references utility** — "Must comply with [[p:rules]] Sections 3-5"

4. **Watchdog verifies against utility** — Findings cite specific rule: "Violates [[p:rules]] Section 4.2"

### Example Structures

**Rules Utility:**
```
"Rules & Standards" (Content)
- Jurisdiction: California
- Section 1: Employment law constraints
- Section 2: Contract requirements
- Section 3: Prohibited terms
```

**Source Utility:**
```
"Source Registry" (Collection)
├── "SEC Filing Q3 2024" (Content) — key data, page refs
├── "Industry Report" (Content) — benchmarks, methodology
└── "Expert Interview" (Content) — quotes, context
```

### When to Apply
- Legal/compliance work (rules)
- Research/analysis (sources)
- Regulated industries (standards)
- Any domain with external requirements

---

## Pattern: Progressive Accumulation

### Purpose
Build complex, cross-referenced output incrementally while maintaining coherence. Structure grows across rounds. Products reference each other. Contradictions are caught.

### The Problem It Solves
Complex output (books, campaigns, PRDs) can't be created in one round. Without structural tracking, later content contradicts earlier content. Without cross-references, products are isolated. The accumulation pattern maintains coherence as complexity grows.

### How It Works

```
BOOTSTRAP                 PLAN & ASSIGN                WRITE
    │                          │                         │
    ▼                          ▼                         ▼
Create skeleton           Add products as            Reference siblings
structure                 needed (tree_ops)          using [[p:id]]
    │                          │                         │
    │                     Attach siblings                │
    │                     as context                     │
    │                          │                         │
    │                     Check coherence ◄──────────────┘
    │                     (remarks if issues)
    └──────────────────────────┴─────────────────────────┘
              Structure grows coherently
```

### Key Mechanics

1. **Bootstrap creates skeleton** — Orchestration product with initial structure, even if empty

2. **Chair adds products as work progresses** — New content gets proper home in tree

3. **Chair attaches siblings as context** — New content sees what's already established

4. **Chair monitors coherence** — If contradiction spotted, note in remarks and address in directive

5. **Operatives cross-reference** — Content links to related products: "As established in [[p:p3]]..."

### Example Growth

```
Round 1:
"Campaign" (Orchestration)
└── "World Premise" (Content)

Round 3:
"Campaign" (Orchestration)
├── "World Premise" (Content)
├── "Characters" (Collection)
│   ├── "Hero" (Content)
│   └── "Villain" (Content)
└── "Act 1" (Orchestration)
    └── "Scene 1" (Content)

Round 6:
[Structure continues to grow with cross-references maintained]
```

### When to Apply
- Long-form content (books, campaigns)
- Complex deliverables (PRDs, specifications)
- World-building (fiction, games)
- Knowledge bases (CORTEX teams)

---

## Pattern: Quality Through Remarks

### Purpose
Enable subjective quality feedback and steering without polluting visible outputs. Engagement quality, craft quality, character consistency—tracked internally, acted on through directives.

### The Problem It Solves
Subjective quality observations don't belong in Watchdog findings (visible to user) or collabs (about specific products). But quality issues need to be tracked and addressed. Remarks provide internal channel for quality steering.

### How It Works

```
ANY STEP                  PLAN & ASSIGN                NEXT ROUND
    │                          │                         │
    ▼                          ▼                         ▼
Agent notices             Chair reads                Directive
quality concern           team remarks               incorporates
    │                          │                     quality steering
    ▼                          ▼                         │
Create remark             Decides whether                │
to self/chair             to address                     │
(internal only)                │                         │
    │                          └─────────────────────────┘
    └─────────────────────────────────────────────────────
              Quality steering stays internal
```

### Key Mechanics

1. **Any agent can create quality remarks** — `recipients: ["self"]` or `["chair-1"]`

2. **Remarks are internal** — Not in findings, not in collabs, not visible to user

3. **Chair reads remarks** — Sees quality observations from team

4. **Chair incorporates in directives** — "Push for more tension" based on remark noting flatness

### What Goes Where

| Remarks (Internal) | Findings (Visible) |
|-------------------|-------------------|
| "Feels flat, needs more tension" | "Missing required Section 3" |
| "Character voice drifted in para 2" | "Security vulnerability in auth flow" |
| "Rhyme feels forced" | "DoD criterion 2 not met" |
| "Could be more engaging" | "Contradicts [[p:p3]] Section 2" |

### When to Apply
- Entertainment (engagement quality)
- Simulation (character consistency)
- Artistic (craft quality)
- Any domain with subjective quality dimensions

---

## Pattern: Intake Processing

### Purpose
Systematically handle new information that arrives mid-session. Receive, queue, process, integrate, verify.

### The Problem It Solves
Users provide documents, context, requirements throughout a session. Without systematic processing, information is used once and forgotten, or never properly integrated into the knowledge structure.

### How It Works

```
USER PROVIDES INFO        PLAN & ASSIGN                WRITE
       │                       │                         │
       ▼                       ▼                         ▼
New info arrives          Add to "Pending            Process: analyze,
(document, context,       Intake" collection         structure,
requirements)             (tree_op)                  integrate
       │                       │                         │
       │                  Assign processing              │
       │                  with item attached             │
       │                       │                         │
       │                       ▼                         │
       │                  After processing:              │
       │                  verify integration,            │
       │                  remove from pending            │
       └───────────────────────┴─────────────────────────┘
              Info is queued, processed, integrated
```

### Key Mechanics

1. **Bootstrap creates Pending Intake collection** — Queue for unprocessed information

2. **Chair adds incoming items** — New info → Pending Intake

3. **Chair assigns processing** — Operative analyzes, structures, integrates

4. **Chair verifies completion** — Check integration, remove from pending

### Example Structure

```
"Knowledge Base" (Orchestration)
├── "Pending Intake" (Collection)
│   └── "Employee Handbook v2" (Content) — awaiting processing
├── "Policies" (Collection)
│   ├── "Vacation Policy" (Content) — processed
│   └── "Expense Policy" (Content) — processed
└── "Index" (Content)
```

### When to Apply
- Knowledge management (CORTEX teams)
- Research compilation
- Any session with significant incoming information

---

## Pattern: Race

### Purpose
Generate multiple approaches to the same challenge by assigning parallel work to multiple operatives, then resolve through selection, synthesis, or evolution.

### The Problem It Solves
Single-perspective work has blind spots. Without comparison, you don't know if the first approach is the best. Without debate, considerations remain hidden. The Race pattern leverages multi-agent architecture to produce outcomes superior to single-agent execution.

### How It Works

```
PLAN & ASSIGN                      WRITE                    PEER REVIEW
      │                              │                           │
      ▼                              ▼                           ▼
Chair assigns SAME task       Each operative            Each reviews others'
to multiple operatives        produces independent      versions, creating
      │                       version                   cross-pollination
      │                              │                           │
      └──────────────────────────────┴───────────────────────────┘
                                     │
                                     ▼
                          NEXT ROUND: PLAN & ASSIGN
                                     │
                                     ▼
                          Chair RESOLVES the race
                          (select, synthesize, evolve, etc.)
```

### Resolution Strategies

| Strategy | What Happens | When to Use |
|----------|--------------|-------------|
| **Select Winner** | Best version proceeds, others discarded | Clear success criteria, quality matters most |
| **Synthesize** | Combine best elements from all versions | Diversity valuable, no single "right" answer |
| **Evolve** | Winner becomes input for next race iteration | Progressive refinement needed |
| **Inform Decision** | All versions become data for Chair's strategic choice | Testing assumptions, need comparison |
| **Assign Leadership** | Winner leads sub-project, others contribute | Complex sub-project needs owner |
| **Document Perspectives** | All positions preserved for user | Decision belongs to user |

### Race Variants

| Variant | Intent | Setup |
|---------|--------|-------|
| **Competitive** | Find best solution | Same task, compete on quality |
| **Generative** | Maximize diversity | Same challenge, encourage different approaches |
| **Dialectic** | Surface considerations | Assigned positions (pro/con) or stakeholder views |
| **Diagnostic** | Find weaknesses | Each attacks from different angle |
| **Evolutionary** | Iterative improvement | Winner becomes next round's input |
| **Assumption-Testing** | Understand sensitivity | Same task under different assumptions |

### Multi-Round Patterns

- **Critique & Revise** — Round 1: produce versions + critique. Round 2: revise with feedback, select winner
- **Narrow & Deepen** — Round 1: 4 versions, select 2. Round 2: finalists refine, select winner
- **Diverge & Converge** — Round 1: brainstorm freely. Round 2: develop top themes. Round 3: synthesize

### When to Apply
- Critical decisions (competitive race)
- Brainstorming (generative race)
- Complex decisions with tradeoffs (dialectic race)
- Risk assessment (diagnostic race)
- High-quality deliverables (evolutionary race)
- Strategic uncertainty (assumption-testing race)

### Teams with Natural Race Affinity

| Team | Default Variant |
|------|-----------------|
| Brainstorming Collective | Generative |
| The Think Tank | Dialectic |
| Devils Advocates | Dialectic |
| Creative Collective | Generative |
| The Red Team | Diagnostic |
| Board of Directors | Dialectic |
| The Advisory Board | Dialectic |

---

## Pattern: Sticky Notes (Pinned Remarks)

### Purpose
Maintain lightweight persistent information across rounds using pinned remarks. Unlike regular remarks (one round) or products (heavy), pinned remarks are simple notes that stick until explicitly unpinned.

### The Problem It Solves
Sessions generate small but important information—todos, reminders, constraints, standing instructions—that don't warrant full products but shouldn't disappear after one round. Currently there's no lightweight persistence mechanism.

### How It Works

```
ANY STEP                     EVERY SUBSEQUENT ROUND
    │                              │
    ▼                              ▼
Agent creates              Pinned remark appears
pinned remark              in agent's context
    │                              │
    │                              │
    │         ┌────────────────────┘
    │         │
    ▼         ▼
Pin persists until explicitly UNPINNED
(when done, irrelevant, or superseded)
```

### Mechanism

| Aspect | Regular Remarks | Pinned Remarks | Products |
|--------|-----------------|----------------|----------|
| Lifespan | Current round | Until unpinned | Entire session |
| Weight | Ephemeral | Lightweight | Heavy (DoD, versions) |
| Purpose | Immediate notes | Persistent reminders | Substantial content |

### Operations

| Operation | Who Can Do It | Effect |
|-----------|---------------|--------|
| **Pin** | Chair (to anyone), Operatives (to self) | Creates persistent note |
| **Unpin** | Author or Chair | Removes note |
| **Update** | Author or Chair | Modifies content |

### Pin Categories

| Category | Purpose | Example |
|----------|---------|---------|
| **Todo** | Tasks to complete | "TODO: Address user's budget concern before finalizing" |
| **Instruction** | Standing directions | "Stay in pessimist character—you've been drifting neutral" |
| **Constraint** | User limitations | "CONSTRAINT: User has bad knee—no high-impact exercises" |
| **Rule** | Session guidelines | "RULE: All claims must cite sources" |
| **Watch** | Things to monitor | "WATCH: Contradiction between p3 and p7 may resurface" |
| **Context** | Informing background | "CONTEXT: User's goal is career change to tech" |
| **Deferred** | Revisit later | "DEFER: International expansion—revisit after core strategy" |

### High-Value Use Cases

1. **Running Todo List** — Chair pins emerging tasks, unpins when done. Nothing falls through cracks.

2. **Character Consistency** — In simulation teams, character instructions pinned to each operative. No drift without repeating in every directive.

3. **Discovered Constraints** — "User is vegetarian" pinned once, visible to all every round. Can't accidentally ignore.

4. **Quality Standards** — "Specific numbers only" pinned to all. Standards omnipresent without directive bloat.

5. **Race Coordination** — Chair tracks race status across rounds via pins.

### When to Apply
- Any session longer than 2-3 rounds
- When constraints/preferences emerge mid-session
- Simulation teams (character consistency)
- Complex sessions with many moving parts
- When you'd otherwise repeat the same instruction every round

### Anti-Patterns

- **Over-pinning** — 50 pins create noise. Pin only what's persistent AND lightweight.
- **Pins for content** — If it needs explanation, make it a product.
- **Forgetting to unpin** — Review pins each round. Unpin what's done.

---

## Pattern Summary

| Pattern | Purpose | Key Products | Key Mechanism |
|---------|---------|--------------|---------------|
| Context Management | Personalized persistent info | Context orchestration | attach_context |
| Persistent Utility | Rules/sources/standards | Utility products | Verify against utility |
| Progressive Accumulation | Growing coherent structure | Skeleton + expansion | Cross-references |
| Quality Through Remarks | Internal quality steering | (none) | remarks to self/chair |
| Intake Processing | Systematic info handling | Pending Intake | Queue → Process → Integrate |
| Race | Parallel approaches, resolved | Competing versions | Select/synthesize/evolve |
| Sticky Notes | Lightweight persistence | (none) | Pinned remarks |

---

## Pattern Combinations

Patterns compose naturally—tags often use multiple:

| Combination | Effect |
|-------------|--------|
| Context + Quality | Personal assistance with tone tracking |
| Utility + Accumulation | Research growing with source tracking |
| Accumulation + Quality | Complex narrative with craft tracking |
| Intake + Accumulation | Knowledge base that grows from inputs |
| Utility + Quality | Rules compliance with craft considerations |
| Race + Quality | Multiple approaches with subjective quality steering |
| Sticky Notes + Context | Lightweight constraints complement formal context |
| Sticky Notes + Race | Track race status across rounds |
| Race + Accumulation | Competing approaches that build on structure |