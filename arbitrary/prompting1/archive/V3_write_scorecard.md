# Write Step Principle Scorecard (V3)

This document evaluates the V3 Write prompts (`V3_write_system.md` and `V3_write_user.md`) against every CABAL principle.

**Legend:**
- 🟢 **Well Addressed** — Prompt aligns with principle
- 🟡 **Partial** — Mentioned but could be stronger
- 🔴 **Missing** — Principle not addressed
- ⚪ **N/A** — Not relevant to Write step

---

## 1. Governance Principles

### 0) Scope & Invariants

| Aspect | Relevance | Score | Analysis |
|--------|-----------|-------|----------|
| Prompt immutability | ⚪ N/A | — | Design-time constraint, not runtime |
| Prompt variability | ⚪ N/A | — | Design-time constraint |
| Team objective | 🟡 Medium | Partial | Prompt mentions "mission/objectives" but doesn't emphasize team unity |
| Domain agnostic | 🟢 High | Good | Template uses placeholders, no domain-specific language |

**Current Prompt Quote:**
> "Ground output in mission/objectives. Don't invent."

**Improvement:**
Add explicit instruction: "Your output must contribute to the team's collective progress, not just your individual assignment."

**Examples:**
1. If writing a Technical Architecture spec, note how it enables other team members' work
2. If writing a Marketing doc, reference how it aligns with the Product team's features

---

### 1.1 Motivation & Compass (underlying objectives)

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🟡 Partial | User prompt includes `underlying_objectives` but system prompt doesn't instruct how to USE them |

**Principle Quote:**
> "The chair ensures the underlying objectives and realistic value outcomes are explicit--even if the prompt's surface goal is shallow."

**Current Prompt Quote (User):**
> "- **Underlying Objectives:** {{session.underlying_objectives}}"

**Current Prompt Quote (System):**
> (No mention of underlying objectives)

**What's Missing:**
The system prompt tells operative to "fulfill the DoD" but doesn't instruct them to **trace their work back to underlying objectives.**

**Improvement (System Prompt):**
Add: "Before writing, identify which underlying objective(s) your product advances. Your content should demonstrably move the mission toward those outcomes."

**Examples:**
1. If objective is "reduce menu update time to 30sec" and you're writing API design, explicitly note: "This endpoint design enables <30sec updates because..."
2. If objective is "acquire 100 customers" and you're writing positioning, tie each message to customer acquisition

---

### 1.2 Breakdown Orientation

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🔴 Missing | No instruction to break output into granular parts |

**Principle Quote:**
> "Always decompose solutions into the most granular steps, nesting one step at a time."

**Current Prompt:** No mention.

**Improvement (System Prompt):**
Add section:
```
### Structure Your Output
Break your content into explicit sections and sub-sections.
- Each section should be atomic and complete
- Use numbered steps for processes
- Use headers for logical divisions
```

**Examples:**
1. Instead of: "The system will handle authentication" → Break into: "1. User submits credentials → 2. Server validates → 3. JWT issued → 4. Client stores"
2. Instead of: "Marketing strategy" → Break into: "1. Target Persona → 2. Pain Points → 3. Value Props → 4. Channels → 5. Messaging"

---

### 1.2.1 Coverage by team & resources

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟡 Medium | 🔴 Missing | Operative doesn't know who else is on team or what they're producing |

**Principle Quote:**
> "Match sub-work to available roles: Developers -> codebase artifacts, Finance -> estimates..."

**Current User Prompt:** Only shows `currentMember`, not full team.

**Improvement (User Prompt):**
Add team context section:
```
### Team Context
{{#each members}}
- {{this.name}} ({{this.team_role}}): Working on {{this.current_assignment}}
{{/each}}
```

**Examples:**
1. Tech Lead writing architecture knows Product Lead is writing user flows → references those flows
2. Growth Lead writing positioning knows Dev is building POS integration → highlights that feature

---

### 1.2.3 Sequence discipline

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟡 Medium | 🔴 Missing | No instruction about dependencies or sequencing |

**Principle Quote:**
> "Treat processes as multi-step pipelines; do not implement later steps before predecessors."

**Improvement (System Prompt):**
Add: "If your work depends on unresolved decisions or incomplete peer work, flag it in `remarks` rather than inventing assumptions."

**Examples:**
1. Writing implementation spec but pricing model undecided → Remark: "Blocked on pricing decision. I've assumed tiered pricing but this needs confirmation."
2. Writing API design but data model not finalized → Remark: "Data model incomplete. I've assumed fields X, Y, Z."

---

### 1.3 Context & Information

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🟡 Partial | User prompt provides context, but system prompt doesn't emphasize USING it |

**Principle Quote:**
> "All required info must be captured and saved before proceeding."

**Current Prompt (System):**
> "Use Context: Ground output in mission/objectives. Don't invent."

**What's Good:** "Don't invent" is correct.

**What's Missing:** No instruction to flag MISSING context.

**Improvement (System Prompt):**
Add: "If you need information that isn't provided, list it in `remarks` as a blocker. Do NOT fabricate missing context."

**Examples:**
1. Writing pricing page but no competitor pricing data provided → Remark: "Need competitor pricing research before I can finalize tier structure"
2. Writing technical spec but integration requirements unclear → Remark: "Which POS systems are priority? Toast vs Square affects architecture."

---

### 1.6 Perspective Ownership

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🟡 Partial | Persona is mentioned but ownership/accountability not emphasized |

**Principle Quote:**
> "Specialty/role confers ownership of related subjects; owner is accountable for outcomes."

**Current Prompt (System):**
> "Adopt Your Persona: Think and write as that person."

**What's Missing:** Accountability framing. The operative should feel RESPONSIBLE for outcomes in their domain.

**Improvement (System Prompt):**
Change to: "**Own Your Domain:** You are THE authority on {{team_role}} matters. Your output will be the foundation others build upon. Errors in your work cascade. Ship something you'd stake your reputation on."

**Examples:**
1. Tech Lead: "This architecture is MY decision. If it fails to scale, that's on me."
2. Product Lead: "These user flows are MY vision. If users are confused, that's on me."

---

## 2. Roles & Personas

### 2.1 Governance Roles

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟡 Medium | 🔴 Missing | Operative doesn't know they can post collabs or remarks |

**Principle Quote:**
> "Operatives: produce versions; collaborate; reflect; own perspectives."

**Current Prompt:** Output schema includes `collabs` and `remarks` but system prompt doesn't explain WHEN to use them.

**Improvement (System Prompt):**
Add:
```
### When to Post Collabs
- If you discover something that affects another team member's work
- If you have suggestions for products you don't own

### When to Post Remarks
- Blockers: Missing info, unresolved decisions
- Observations: Insights the Chair should know
- Questions: Clarifications needed before next round
```

**Examples:**
1. Tech Lead notices security gap in Product Lead's flow → Collab: "Flow X doesn't handle auth timeout. Consider adding re-auth prompt."
2. Growth Lead realizes pricing affects GTM → Remark to Chair: "Need pricing decision before I can finalize launch messaging."

---

### 2.2 Persistent Personas

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🟢 Good | Persona injected via `custom_persona_prompt` |

**Principle Quote:**
> "Operative personas must persist across rounds in the same conversation/thread."

**Current Prompt (User):**
> "#### Your Persona\n{{currentMember.custom_persona_prompt}}"

**What's Good:** Persona is explicitly provided each round—persistence handled by orchestrator.

**No improvement needed.**

---

### 2.3 Team-Role Field

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🟢 Good | team_role explicitly shown |

**Current Prompt (User):**
> "You are **{{currentMember.name}}** ({{currentMember.id}}) — {{currentMember.team_role}}."

**What's Good:** team_role is front-and-center in identity.

**No improvement needed.**

---

### 2.4 Tone for Collabs

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟡 Medium | 🔴 Missing | No guidance on collab tone |

**Principle Quote:**
> "The robotic 'HOW: ..' collab format indicates poor prompt structure and should be avoided."

**Improvement (System Prompt):**
Add: "When posting collabs, write naturally—as if you're a colleague sending a Slack message. Avoid robotic formats like 'HOW: ...' or 'SUGGESTION: ...'."

**Example Output (Bad):**
> "SUGGESTION: Add rate limiting. HOW: Use Redis."

**Example Output (Good):**
> "Heads up—the public endpoint has no rate limiting. I'd add a Redis counter, maybe 100 req/min per IP?"

---

## 3. Artifacts & Structure

### 3.1-3.6 Product Model

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟡 Medium | 🟡 Partial | Product type shown but not used |

**Current Prompt (User):**
> "- **Type:** {{assignedProduct.type}}"

**What's Missing:** No guidance on HOW product type affects content structure.

**Improvement (System Prompt):**
Add:
```
### Content Structure by Product Type
- **Content:** Self-contained artifact with Title, Context, and Actual Content
- **Decision:** State the decision question, options considered, and your recommendation
- **Collection:** Ensure each child item follows the same structure
- **Orchestration:** Provide overview of sub-components and their relationships
```

**Examples:**
1. Content Product: "# Technical Architecture Spec\n\n## Context\n...\n\n## Actual Content\n..."
2. Decision Product: "# POS Integration Priority\n\n## Decision Question\nWhich POS first?\n\n## Options\n1. Toast 2. Square\n\n## Recommendation\n..."

---

### 3.7 Structural Notes (Completeness, No External Deps)

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🔴 Missing | No instruction about self-containment |

**Principle Quote:**
> "Completeness: structure must include everything needed to execute. No external dependencies."

**Improvement (System Prompt):**
Add: "Your output must be self-contained. Do not reference external documents, future work, or TBD items without flagging them as blockers."

**Examples:**
1. Bad: "See the data model doc for schema details."
2. Good: Include the schema inline, or remark: "Blocker: Need data model finalized."

---

## 4. Process

### 5) Round Flow — Write Step (7.3)

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🟡 Partial | Write is described, but not in context of full cycle |

**Principle Quote:**
> "Write (7.3): Operatives create new improved versions."

**Current Prompt (System):**
> "You are an Operative performing a **Write** action."

**What's Missing:** No awareness that this is part of a CYCLE (Reflect → Plan → Write → Review).

**Improvement (System Prompt):**
Add: "You are in the **Write** phase. Your input includes feedback from the prior Reflect and Plan phases. Your output will be reviewed in the Peer Review and Inspection phases."

---

### 6.1 Collabs on Content

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟡 Medium | 🔴 Missing | No collab guidance |

**Principle Quote:**
> "Must be genuine inputs from the collab-maker's role perspective. Must advance the project and bridge gaps."

**Improvement:** Add collab guidance (already suggested above in 2.1).

---

### 7) Reflection Notes

| Relevance | Score | Analysis |
|-----------|-------|----------|
| ⚪ N/A | — | Reflect step, not Write |

---

## 5. Quality & Metrics

### 1.4 Success Metrics

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🔴 Missing | No instruction to include metrics |

**Principle Quote:**
> "Each product should define numeric success metrics and Definition of Done (DoD) criteria."

**Current Prompt:** DoD provided, but no instruction to ADDRESS metrics.

**Improvement (System Prompt):**
Add: "If the DoD includes numeric targets, your content must show HOW those targets will be achieved."

**Examples:**
1. DoD: "Achieve <30sec update time" → Content must explain: "Menu update is a single API call taking ~200ms..."
2. DoD: "Acquire 100 customers in 6mo" → Content must show: "Channel X has 10K prospects, 1% conversion = 100 customers..."

---

### 1.5 Improvement Aspirations (Version Pressure)

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🟡 Partial | Mentioned but not emphasized |

**Principle Quote:**
> "Versions are rated on clarity, actionability, quality, DoD fit, contribution to project DoD, and coherence."

**Current Prompt (System):**
> "Versions are rated on: clarity, actionability, quality, DoD fit, coherence. Low-grade versions will be rejected."

**What's Good:** Criteria listed.

**What's Missing:** No instruction to SELF-EVALUATE against criteria.

**Improvement (System Prompt):**
Add self-check section:
```
### Before Submitting
Ask yourself:
- [ ] Is this CLEAR to someone who hasn't seen prior versions?
- [ ] Is this ACTIONABLE (can someone execute based on this)?
- [ ] Does this FULLY meet every DoD criterion?
- [ ] Does this IMPROVE on the prior version?
```

---

## 6. Prompting

### 14.1 Context-driven action

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🟡 Partial | Mentioned but not enforced |

**Principle Quote:**
> "No action without an explicit anchor (round observation, directive, reflection)."

**Current Prompt:**
> "Ground output in mission/objectives. Don't invent."

**Improvement (System Prompt):**
Add: "Every claim, decision, or recommendation in your output must TRACE BACK to:
- The mission charter
- A directive from the Chair
- Feedback from peers/watchdog
- Data from context

If you add something novel, justify it."

---

### 14.2 Ambitious posture

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🔴 Missing | No ambition instruction |

**Principle Quote:**
> "Aim beyond conservative scope while respecting constraints and DoD."

**Improvement (System Prompt):**
Add: "Don't settle for 'good enough.' Push for excellence. If you can add value beyond the DoD without scope creep, do it."

**Examples:**
1. DoD says "list 3 user flows" but you see a 4th critical flow → include it
2. DoD says "API design" but you realize auth is underspecified → add auth section proactively

---

### 14.3 Step/part breaking requirement

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🔴 Missing | Already covered in 1.2 |

---

### 14.4 Prompt spice and persona setup

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟢 High | 🟢 Good | Persona injected via custom_persona_prompt |

**Current Implementation:** Persona is provided in user prompt.

**Note:** The QUALITY of the persona text is a Chair responsibility (Bootstrap step). The Write prompt correctly injects it.

---

### 14.5 Reflection script

| Relevance | Score | Analysis |
|-----------|-------|----------|
| ⚪ N/A | — | Reflect step, not Write |

---

### 14.6 Mission directive pattern

| Relevance | Score | Analysis |
|-----------|-------|----------|
| 🟡 Medium | 🟡 Partial | Directive not explicitly structured |

**Principle Quote:**
> "Structure: CORE OBJECTIVE, DEFINITION OF DONE, NON-NEGOTIABLES, WHY IT MATTERS."

**Current User Prompt:** Shows DoD but not full directive structure.

**Improvement (User Prompt):**
If available from Plan & Assign, include:
```
### Chair Directive
**CORE OBJECTIVE:** {{directive.core_objective}}
**WHY IT MATTERS:** {{directive.why_it_matters}}
```

---

## Summary: Improvement Priority

| Priority | Principle | Current | Improvement |
|----------|-----------|---------|-------------|
| 🔴 P0 | 14.1 Context-driven | Partial | Add trace-back requirement |
| 🔴 P0 | 1.2 Breakdown | Missing | Add structure guidance |
| 🔴 P0 | 3.7 Completeness | Missing | Add self-contained requirement |
| 🟡 P1 | 1.1 Objectives | Partial | Instruct to USE objectives |
| 🟡 P1 | 1.5 Version pressure | Partial | Add self-check |
| 🟡 P1 | 2.1 Collabs/Remarks | Missing | Add guidance on when to use |
| 🟡 P1 | 2.4 Tone | Missing | Add natural collab tone |
| 🟡 P1 | 14.2 Ambition | Missing | Add push-for-excellence |
| 🟢 P2 | 1.6 Ownership | Partial | Strengthen accountability |
| 🟢 P2 | 1.2.3 Sequence | Missing | Add dependency flagging |

---

## Recommended V4 Changes

### System Prompt Additions

```markdown
### Own Your Domain
You are THE authority on {{team_role}} matters. If your output is wrong, downstream work fails. Ship something you'd stake your reputation on.

### Trace Everything
Every claim must anchor to: mission charter, chair directive, peer feedback, or provided data. Label novel additions.

### Break It Down
Structure your content with explicit sections. Use numbered steps for processes. Make it scannable.

### Self-Contained Output
Do not reference external docs or TBD items. If info is missing, flag it as a blocker.

### Collab & Remark Guidance
- **Collab:** If you notice something affecting another member's work, post a collab.
- **Remark:** If you're blocked or have an insight for the Chair, post a remark.
Write naturally—no robotic "HOW: ..." formats.

### Before Submitting
- [ ] Clear to a newcomer?
- [ ] Actionable?
- [ ] All DoD criteria met?
- [ ] Better than prior version?
```

### User Prompt Additions

```markdown
### Chair Directive
{{directive}}

### Team Context
{{#each members}}
- {{this.name}} ({{this.team_role}}): {{this.current_focus}}
{{/each}}
```
