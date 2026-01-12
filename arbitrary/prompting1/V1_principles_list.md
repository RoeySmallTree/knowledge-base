# CABAL Algorithm Principles List

This document consolidates every principle from the `algorithm/principles` directory. It preserves the original numbering (e.g., 1.1, 3.1) and includes all examples and descriptions.

---

## 1. Governance Principles
*Source: `governance.md`*

### 0) Scope & Invariants (Non-Negotiables)
-   **Prompt immutability:** We cannot change the user's prompt, and we cannot tailor the prompting mechanism toward any single orientation.
-   **Prompt variability:** The prompt may be arbitrary, poorly aligned with motivation, and from any subject domain with implicit/ambiguous mission statements.
-   **Team objective:** Prompts we design must unify the team, align to the mission at hand, enable collaboration, and structurally orchestrate the project from end to end.
-   **Team and domain agnostic:** The orchestration pattern must work for any team type or mission genre without biasing toward a single field.

### 1) Core Principles

#### 1.1 Motivation & Compass (underlying objectives)
The chair ensures the underlying objectives and realistic value outcomes are explicit--even if the prompt's surface goal is shallow.

**Examples:**
-   *Plan a startup* -> produce an actionable, realistic execution plan, reach many people, create considerable income.
-   *Make an academic research* -> follow academic conduct rules, produce outputs well-regarded by the academic community, add referencing from academically approved sources.
-   *Brainstorm business improvement ideas* -> remediate weak spots, increase revenue, analyze finance and cash-flow health.

#### 1.2 Breakdown Orientation
-   Always decompose solutions into the most granular steps, nesting one step at a time.

**1.2.1 Coverage by team & resources:**
Match sub-work to available roles:
-   Developers -> codebase artifacts
-   Finance -> estimates, reports, financial analyses
-   Operations -> to-dos (e.g., company formation, vendor outreach)

**1.2.2 When to orchestrate:**
If a component is large/complex, treat it as an Orchestration Product that divides work into cohesive segments.
*Example -- "Marketing" (supermarket chain):*
-   Overall budget [Content Product]
-   Budgeting [Decision Product]
-   Online marketing [Orchestration Product]
-   Offline marketing [Orchestration Product]
-   Copywriting [Collection Product]

**1.2.3 Sequence discipline:**
Treat processes as multi-step pipelines; do not implement later steps before predecessors.
*Example campaign flow:* identify pain points -> create hook -> define identity/posture/narrative -> build value-prop delivery -> copywriting -> CTA.

#### 1.3 Context & Information
-   All required info must be captured and saved before proceeding.
-   If research is needed, the chair assigns a research Content Product to gather it.
-   If the user must provide input, ask and store it in the right place.
-   *Examples:* startup -> market exploration; business -> location, field, current stats.

#### 1.6 Perspective Ownership (accountability)
-   Specialty/role confers ownership of related subjects; owner is accountable for outcomes and gets weighted decision input.
-   Derived/related tasks are routed to the original owner for consistency.

### 4) Decision Governance

#### 4.1 Decide -> Build (never the reverse)
-   The chair first gathers needed info and makes creative/structural decisions before creating structured products.
-   *Anti-pattern:* creating a pricing page while feature selection remains undecided.
-   It is valid to create a Decision Product to decide responsibly, and a companion Content Product to articulate structure/narrative/plan.

#### 4.2 Participation & Accountability
-   The chair instructs everyone to complement the decision with their specialized knowledge.
-   Decision Product DoD = what the team must debate/decide.
-   Collabs on a Decision Product must advance the decision.
-   A Decision Product should not have direct versions (skipping the write phase), but can have child nodes.

#### 4.3 Watchdog Consistency
-   If derived products are created before a decision is recorded, or if decisions change without updates, the watchdog flags discrepancies.

---

## 2. Roles & Personas
*Source: `roles.md`*

### 2) Roles, Personas & Team-Role Field

#### 2.1 Governance Roles
-   **Chair:** mission owner; sets underlying objectives; ensures context; makes/ratifies decisions; assigns work; manages structure and quality.
-   **Operatives:** produce versions; collaborate; reflect; own perspectives and downstream tasks.
-   **Watchdog:** QA and coherence; flags security risks, data misuse, ordering/coherency/completeness/style issues via collabs.
-   **Envoy:** compiles the round's events into user-facing chat messages.

#### 2.2 Persistent Personas
-   Operative personas must persist across rounds in the same conversation/thread.
-   Start by defining the persona; optionally use an engineered prompt to set the operative's mindset.

#### 2.3 Team-Role Field
-   Add `team-role` to each member (in addition to algorithmic roles).
-   The team acknowledges their own and each other's roles at session init.
-   All professional references to members use the team-role prism.

#### 2.4 Tone for Collabs
-   The robotic "HOW: .." collab format indicates poor prompt structure and should be avoided.

---

## 3. Artifacts & Structure
*Source: `artifacts.md`*

### 3) Product Model (Node Types)

#### 3.1 Content Product
-   **Purpose:** a single atomic piece of content.
-   **Structure:** `[Title | Description/Context | Actual Content]`
-   **Rules:** self-contained; ONE artifact; no children.

#### 3.2 Decision Product
-   **Purpose:** place to evaluate options and make a decision.
-   **Structure:** `[Decision Statement | Supporting Analysis]`
-   **Rules:** has a clear decision question; may have children of any type for context/research/options.

#### 3.3 Collection Product
-   **Purpose:** groups multiple content nodes of the same semantic type.
-   **Structure:** `[Collection Title | Semantic Category]`
-   **Rules:** only Content children; all children share a semantic relationship.

#### 3.4 Orchestration Product
-   **Purpose:** organizes complex, multi-domain work.
-   **Structure:** `[Title | Purpose/Scope]`
-   **Rules:** may contain any node type; provides hierarchical structure.

#### 3.5 Composition Rules
-   **Orchestration:** Can contain Content, Decision, Collection, Orchestration.
-   **Decision:** Can contain Content, Decision, Collection, Orchestration.
-   **Collection:** Can contain ONLY Content nodes.
-   **Content:** Cannot contain children.

#### 3.6 Selection Guide
-   **Content:** single complete artifact; atomic.
-   **Decision:** choice impacts direction; options evaluated.
-   **Collection:** multiple same-type content items (e.g., chapters, DTOs).
-   **Orchestration:** structuring cross-domain work; building a module/system.

#### 3.7 Structural Notes
-   **Completeness:** structure must include everything needed to execute.
-   **No external dependencies:** do not refer to tasks outside the structure.
-   **Hierarchical clarity:** each level's purpose/scope is explicit.
-   **Semantic consistency:** collections group truly similar items.
-   **Decision traceability:** decisions document rationale.

### 11) Structural Operations

#### 11.1 Nested Product Creation
-   The chair can create nested nodes in one output.
-   *Examples:* Create FE code Orchestration and a 'repo-structure' Content Product simultaneously.

#### 11.2 Structural Change
-   The chair should be comfortable changing the structure at any time: add/remove nodes, alter hierarchy.

#### 11.3 Integrity Constraints
-   Enforce completeness, no external dependencies, hierarchical clarity, semantic consistency, and decision traceability.

### 12) Examples Across Domains

**Research Project**
```
Orchestration | Research Project
- Decision | Research Question
  - Content | Literature Review
  - Content | Hypothesis
- Orchestration | Methodology
  - Collection | Experiment Protocols
    - Content | Protocol 1
    - Content | Protocol 2
- Collection | Data Sets
  - Content | Dataset A
  - Content | Dataset B
```

**Book Writing**
```
Orchestration | Book
- Decision | Book Structure & Themes
  - Content | Target Audience Analysis
  - Content | Core Message
- Content | Outline
- Collection | Chapters
  - Content | Chapter 1
  - Content | Chapter 2
  - Content | Chapter 3
```

**Business Strategy**
```
Orchestration | Company Strategy
- Decision | Market Entry Strategy
  - Content | Market Analysis
  - Content | Competitive Landscape
  - Decision | Geographic Focus
    - Content | Region A Feasibility
    - Content | Region B Feasibility
- Orchestration | Execution Plan
  - Collection | Milestones
    - Content | Q1 Goals
    - Content | Q2 Goals
  - Content | Budget
```

---

## 4. Process
*Source: `process.md`*

### 5) Operating Cycle (Round Flow)
1.  **Reflection (7.1):** Operatives review latest products, collabs, and context; state changes.
2.  **Plan & Assign (7.2):** Chair synthesizes round deltas, assesses progress, outputs approvals/assignments/directives.
3.  **Write (7.3):** Operatives create new improved versions.
4.  **Peer Review (7.4):** Operatives critique/encourage via collabs.
5.  **Inspection (7.5):** Watchdog QA flags risks and issues.
6.  **Presentation (7.6):** Envoy compiles round events into user-facing messages.

### 6) Collaboration (Collabs)
#### 6.1 Collabs on Content
-   Must be genuine inputs from the collab-maker's role perspective.
-   Must advance the project and bridge gaps.

#### 6.2 Tone Rule
-   Avoid dystopian, robotic "HOW: .." style.

### 7) Reflection Notes
Include:
-   Planned improvements/additions for V(x+1).
-   How new collabs/directives changed DoD perception.
-   Pending decisions and instincts.
-   Explicit structural requests.

Base reflections on: Collabs, peer content, chair directives, watchdog/user collabs, fresh ideas.

### 8) Envoy Presentation
-   No generic "Hey guys" openers. Simulate natural conversation.
-   **Key considerations:** Roles & characteristics, Round deltas, Conciseness, Referencing.

### 9) Context & Information Management
-   Proactively collect, research, and store all necessary inputs.
-   Do not advance workstreams without complete, saved context.

### 13) Thoughts
-   **A. Mitigation sub-step:** Optionally use an extra LLM to "mitigate" the task to members with tailored prompt tempering.
-   **B. Structural rules:** The structural instructions are paramount for reliable LLM interaction.

---

## 5. Quality & Metrics
*Source: `quality.md`*

### 1.4 Success Metrics (numeric, concrete)
Each product should define numeric success metrics and Definition of Done (DoD) criteria.
**Examples:**
-   Marketing plan -> estimated conversion >= 12%
-   Efficiency improvement -> runtime complexity -30%
-   Business objectives -> ARR >= $250K

### 1.5 Improvement Aspirations (version pressure)
-   Results must continuously improve.
-   Versions are rated on clarity, actionability, quality, DoD fit, contribution to project DoD, and coherence.
-   Low-grade versions are flagged/not accepted.

### 10) Metrics, Quality & Improvement
-   Maintain version pressure.

### Compliance Checklists
**Before building (Chair):**
-   [ ] Underlying objectives stated
-   [ ] Context complete and saved
-   [ ] Decision Products drafted where needed
-   [ ] Metrics and DoD defined
-   [ ] Structure matches node rules

**During each round:**
-   [ ] Operatives reflected and requested structural changes
-   [ ] Chair assigned/approved with clear directives
-   [ ] New versions produced
-   [ ] Peer reviews posted
-   [ ] Watchdog QA done
-   [ ] Envoy presented naturally

**Collab and tone:**
-   [ ] Collabs are contextual, role-faithful
-   [ ] "HOW: .." robotic style avoided

**Ownership and roles:**
-   [ ] `team-role` set and acknowledged
-   [ ] Persistent personas maintained
-   [ ] Derived tasks stay with original owner

**Structure ops:**
-   [ ] Nested creation used where helpful
-   [ ] Chair adjusts structure freely

---

## 6. Prompting
*Source: `prompting.md`*

### 14) Prompt Ethos and Context Discipline

#### 14.1 Context-driven action
-   No action without an explicit anchor (round observation, directive, reflection).
-   Chair decisions must trace back to fulfilling the mission statement.

#### 14.2 Ambitious posture
-   Aim beyond conservative scope while respecting constraints and DoD.

#### 14.3 Step/part breaking requirement
-   Every prompt/response must encourage breaking work into explicit steps and parts.

#### 14.4 Prompt spice and persona setup
Use chair-authored context and motivation.
*Example:* "You are not just a coder -- you are a force multiplier... You do not ship junk."

#### 14.5 Reflection script (operative)
Tactical mid-mission review:
1.  Mission Alignment Check
2.  Break Your Work Into Parts
3.  Peer Compatibility and Feedback Integration
4.  Timeframe Reality Check
5.  Brutal Evaluation of Output Quality
6.  Immediate Course Correction
7.  Fulfillment of the Chair's Directive

#### 14.6 Mission directive pattern
The chair accompanies plan and assign with a meaningful directive tied to mission, DoD, constraints, and impact.
*Structure:* CORE OBJECTIVE, DEFINITION OF DONE, NON-NEGOTIABLES, WHY IT MATTERS.

#### 14.7 Chair mission brief generation
The chair authors mission briefs with pressure and clarity.
*Structure:* THE MISSION, CORE OBJECTIVE, DEFINITION OF DONE, NON-NEGOTIABLES, WHY IT MATTERS, TEAM COMPOSITION, KEEP IT ALIVE.
*Reality Check:* Acknowledge AI limits; provide actionable todos for humans.
