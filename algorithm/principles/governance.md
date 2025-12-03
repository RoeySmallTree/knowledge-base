# Governance Principles

## Purpose
Captures non-negotiable scope, foundational principles, and decision governance that steer orchestration. Numbering follows the original specification; sections 1.4 and 1.5 appear in `quality.md`.

## 0) Scope & Invariants (Non-Negotiables)
- Prompt immutability. We cannot change the user's prompt, and we cannot tailor the prompting mechanism toward any single orientation (e.g., business development).
- Prompt variability. The prompt may be arbitrary, poorly aligned with motivation, and from any subject domain with implicit/ambiguous mission statements (e.g., research, brainstorming, writing a book).
- Team objective. Prompts we design must unify the team, align to the mission at hand, enable collaboration, and structurally orchestrate the project from end to end.
- Team and domain agnostic. The orchestration pattern must work for any team type or mission genre (academic research lab, startup crew, book authorship, legal practice, even split debate squads) without biasing toward a single field.

## 1) Core Principles (for follow-up referencing)

### 1.1 Motivation & Compass (underlying objectives)
The chair ensures the underlying objectives and realistic value outcomes are explicit--even if the prompt's surface goal is shallow.

**Examples**
- *Plan a startup* -> produce an actionable, realistic execution plan, reach many people, create considerable income.
- *Make an academic research* -> follow academic conduct rules, produce outputs well-regarded by the academic community, add referencing from academically approved sources.
- *Brainstorm business improvement ideas* -> remediate weak spots, increase revenue, analyze finance and cash-flow health.

### 1.2 Breakdown Orientation
- Always decompose solutions into the most granular steps, nesting one step at a time.

#### 1.2.1 Coverage by team & resources.
Match sub-work to available roles:
- Developers -> codebase artifacts
- Finance -> estimates, reports, financial analyses
- Operations -> to-dos (e.g., company formation, vendor outreach with prepared emails)

#### 1.2.2 When to orchestrate (not just "content").
If a component is large/complex, treat it as an Orchestration Product that divides work into cohesive segments.

*Example -- "Marketing" (supermarket chain):*
- Overall budget [Content Product]
- Budgeting [Decision Product]
- Online marketing [Orchestration Product]
- Offline marketing [Orchestration Product]
- Copywriting [Collection Product]
- Etc.

#### 1.2.3 Sequence discipline.
Treat processes as multi-step pipelines; do not implement later steps before predecessors.

*Example campaign flow:* identify pain points -> create hook -> define identity/posture/narrative -> build value-prop delivery -> copywriting -> CTA.

### 1.3 Context & Information (make it 100% available)
- All required info must be captured and saved before proceeding.
- If research is needed, the chair assigns a research Content Product to gather it.
- If the user must provide input, ask and store it in the right place (collab, content product, or definitions of done).
- Examples: startup -> market exploration, competitor research; business -> location, field, current stats. Context is key.

### 1.6 Perspective Ownership (accountability)
- Specialty/role confers ownership of related subjects; owner is accountable for outcomes and gets weighted decision input (chair decides overall).
- Derived/related tasks are routed to the original owner for consistency.

## 4) Decision Governance (using Decision Products)

### 4.1 Decide -> Build (never the reverse)
- The chair first gathers needed info (from user/team) and makes creative/structural decisions before creating structured products.
- Anti-pattern example: creating a pricing page while feature selection remains undecided.
- There is no such thing as too much planning: it is valid to create a Decision Product to decide responsibly, and a companion Content Product to articulate structure/narrative/plan for the associated Orchestration/Collection.

### 4.2 Participation & Accountability
- The chair instructs everyone to complement the decision with their specialized knowledge.
- Decision Product DoD = what the team must debate/decide.
- Collabs on a Decision Product must advance the decision; otherwise, it is a failure of the collab creator (wasting time) and the chair (poor instruction).
- Versioning note: A Decision Product should not have direct versions (skipping the write phase on it), but it could definitely have any type.

> Interpretation for practice: do not bypass proper documentation/analysis by "version-flipping" the decision. Use supporting child nodes of any type to evolve the decision responsibly.

### 4.3 Watchdog Consistency
- If derived products are created before a decision is recorded, or if decisions change without updates, the watchdog flags discrepancies.
