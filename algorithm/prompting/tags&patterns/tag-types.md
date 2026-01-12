# Tag Taxonomy: Categorization Framework

## The Problem

Current tags are doing different jobs:
- `entertainment` affects MOTIVATION and TONE
- `graph-heavy` affects OUTPUT STRUCTURE
- `research` affects CONTENT HANDLING
- `simulation` affects AGENT BEHAVIOR
- `race` (pattern) affects COORDINATION METHOD

Treating them uniformly creates confusion. What does it mean to combine them? Which takes precedence?

---

## Tag Categories

### 1. STYLE Tags
**What they affect:** Agent motivation, tone, quality focus, energy
**Question answered:** "How should this FEEL?"

| Tag | Effect |
|-----|--------|
| `entertainment` | Engagement-focused, fun, energy matters |
| `artistic` | Craft-focused, aesthetic quality, polish |
| `professional` | Formal, structured, business-appropriate |
| `casual` | Relaxed, conversational, approachable |
| `intense` | High-stakes, focused, serious |

**Prompt injection:** Affects HOW agents approach work, quality dimensions they optimize for.

### 2. BEHAVIOR Tags
**What they affect:** How agents inhabit their roles, interaction depth
**Question answered:** "How should agents BE?"

| Tag | Effect |
|-----|--------|
| `simulation` | Deep character embodiment, stay in role |
| `immersive` | Belief-level character, no actor layer |
| `collaborative` | Agents build on each other naturally |
| `adversarial` | Agents challenge each other by design |
| `autonomous` | Agents explore without constant direction |

**Prompt injection:** Affects agent IDENTITY and INTERACTION patterns.

### 3. STRUCTURE Tags
**What they affect:** Output organization, product complexity
**Question answered:** "What SHAPE should outputs take?"

| Tag | Effect |
|-----|--------|
| `graph-heavy` | Deep trees, orchestrations, complex nesting |
| `flat` | Minimal nesting, simple collections |
| `linear` | Sequential flow, ordered products |
| `web` | Connection-heavy, cross-references central |
| `evolving` | Structure emerges, not pre-defined |

**Prompt injection:** Affects PRODUCT STRUCTURE decisions.

### 4. DOMAIN Tags
**What they affect:** Content handling, rigor requirements, context needs
**Question answered:** "What KIND of content is this?"

| Tag | Effect |
|-----|--------|
| `research` | Source tracking, citations, evidence rigor |
| `personal` | User context central, personalization required |
| `rules-based` | Compliance verification, rule adherence |
| `creative` | Originality valued, constraints loose |
| `technical` | Precision required, specifications matter |
| `strategic` | Tradeoffs explicit, decision-support focus |

**Prompt injection:** Affects CONTENT STANDARDS and CONTEXT requirements.

### 5. OUTPUT Tags
**What they affect:** What gets delivered, usability requirements
**Question answered:** "What should the USER GET?"

| Tag | Effect |
|-----|--------|
| `deliverable` | Actionable outputs, ready to use |
| `exploratory` | Options/possibilities, not conclusions |
| `reference` | Lookup-optimized, persistent utility |
| `experience` | The process IS the output |
| `decision` | Supports user choice, presents tradeoffs |

**Prompt injection:** Affects OUTPUT FORMAT and PRESENTATION.

### 6. CAPABILITY Tags
**What they affect:** Available coordination patterns, mechanism usage
**Question answered:** "What PATTERNS are available/encouraged?"

| Tag | Effect |
|-----|--------|
| `race-enabled` | Racing pattern natural fit, Chair should use it |
| `temporal` | Tracking over time, trajectory awareness |
| `ritual` | Recurring sessions, cadence support |
| `proactive` | Team initiates, doesn't just respond |
| `cross-domain` | Synthesis across life/knowledge areas |
| `infinite` | Unbounded exploration, no "done" |

**Prompt injection:** Affects PATTERN AVAILABILITY and CHAIR BEHAVIOR.

---

## How Categories Compose

Each category is ORTHOGONAL—you can pick one (or none) from each:

```
Example Team: "The Think Tank"
├── Style: `professional` (formal discourse)
├── Behavior: `simulation` (characters are thinkers with positions)
├── Structure: `flat` (ideas, not deep hierarchy)
├── Domain: `strategic` (decision-support)
├── Output: `decision` (supports user choice)
└── Capability: `race-enabled` (dialectic natural fit)

Example Team: "Dungeon Party"
├── Style: `entertainment` (fun matters)
├── Behavior: `immersive` (belief-level characters)
├── Structure: `graph-heavy` (world state, locations, NPCs)
├── Domain: `creative` (fiction, improvisation)
├── Output: `experience` (play IS the output)
└── Capability: `temporal` (character development over time)

Example Team: "Research Synthesis Lab"
├── Style: `professional` (rigorous tone)
├── Behavior: `collaborative` (agents build on each other)
├── Structure: `graph-heavy` (sources, analysis, synthesis)
├── Domain: `research` (evidence, citations)
├── Output: `deliverable` (usable report)
└── Capability: `race-enabled` (multiple analysts, synthesize)
```

---

## Mapping Existing Tags

| Current Tag | Category | Notes |
|-------------|----------|-------|
| `entertainment` | Style | Stays as-is |
| `artistic` | Style | Stays as-is |
| `simulation` | Behavior | Stays as-is |
| `graph-heavy` | Structure | Stays as-is |
| `deliverable` | Output | Stays as-is |
| `personal` | Domain | Stays as-is |
| `research` | Domain | Stays as-is |
| `rules-based` | Domain | Stays as-is |

**New tags to formalize:**

| New Tag | Category | Source |
|---------|----------|--------|
| `immersive` | Behavior | From Deep Immersion pattern |
| `autonomous` | Behavior | From Autonomous Exploration pattern |
| `race-enabled` | Capability | From Race pattern |
| `temporal` | Capability | From Temporal Tracking pattern |
| `proactive` | Capability | From Proactive Intelligence pattern |
| `ritual` | Capability | From Ritual Cadence pattern |
| `infinite` | Capability | From Infinite Canvas pattern |
| `evolving` | Structure | From Emergent Structure pattern |
| `experience` | Output | For entertainment teams |
| `exploratory` | Output | For discovery teams |

---

## Prompt Injection by Category

### Style Tag Prompt Pattern
```
## STYLE: [TAG]

Your work should FEEL [description].

QUALITY DIMENSIONS:
- [What matters for this style]
- [What to optimize]
- [What to avoid]

TONE:
- [Voice characteristics]
- [Energy level]
- [Formality]
```

### Behavior Tag Prompt Pattern
```
## BEHAVIOR: [TAG]

You ARE [description of how to be].

YOUR IDENTITY:
- [How you inhabit your role]
- [Depth of embodiment]
- [Interaction style]

YOUR RELATIONSHIP TO ROLE:
- [Actor vs. character]
- [Flexibility vs. commitment]
```

### Structure Tag Prompt Pattern
```
## STRUCTURE: [TAG]

Outputs should be ORGANIZED as [description].

PRODUCT DECISIONS:
- [When to create orchestrations]
- [When to nest vs. flatten]
- [Cross-reference patterns]

COMPLEXITY GUIDANCE:
- [Appropriate depth]
- [Breadth expectations]
```

### Domain Tag Prompt Pattern
```
## DOMAIN: [TAG]

Content requires [description].

CONTENT STANDARDS:
- [Rigor level]
- [Evidence requirements]
- [Context needs]

HANDLING RULES:
- [How to process this type of content]
- [Quality bars]
```

### Output Tag Prompt Pattern
```
## OUTPUT: [TAG]

The user should RECEIVE [description].

OUTPUT CHARACTERISTICS:
- [Format expectations]
- [Usability requirements]
- [Presentation standards]

SUCCESS CRITERIA:
- [What makes output valuable]
```

### Capability Tag Prompt Pattern
```
## CAPABILITY: [TAG]

You have access to [pattern/capability].

WHEN TO USE:
- [Trigger conditions]
- [Natural fits]

HOW TO USE:
- [Mechanism details]
- [Best practices]

CHAIR GUIDANCE:
- [How Chair should leverage this]
```

---

## Category Priority (When Conflicts Arise)

```
1. DOMAIN (content requirements are foundational)
2. OUTPUT (what user needs is non-negotiable)
3. STRUCTURE (organization serves output)
4. BEHAVIOR (how agents operate)
5. STYLE (tone adapts to above)
6. CAPABILITY (patterns serve the mission)
```

Example conflict resolution:
- `research` (domain) + `entertainment` (style) = Rigorous content, engaging presentation
- `deliverable` (output) + `evolving` (structure) = Structure can evolve, but must crystallize for delivery
- `immersive` (behavior) + `professional` (style) = Characters are immersive AND professionally appropriate

---

## Implementation

### Tag Declaration in Team Definition

```yaml
team: "The Think Tank"
tags:
  style: professional
  behavior: simulation
  structure: flat
  domain: strategic
  output: decision
  capabilities: 
    - race-enabled
```

### Prompt Assembly

```
For each category with a tag:
1. Load category prompt template
2. Inject tag-specific content
3. Append to appropriate agent's system prompt

Order: Domain → Output → Structure → Behavior → Style → Capabilities
```

### Validation

```
Valid combinations: Most combinations work
Invalid combinations:
- `immersive` + `professional` on same character (maybe—context dependent)
- `flat` + `graph-heavy` (contradictory)
- `deliverable` + `experience` (output confusion—pick one)

Validation rules per category pair can be defined.
```

---

## Benefits of Categorization

| Benefit | Explanation |
|---------|-------------|
| **Clarity** | Know what each tag does |
| **Composability** | Pick one from each category, they compose cleanly |
| **Extensibility** | New tags have clear homes |
| **Debuggability** | If behavior is wrong, know which category to check |
| **Documentation** | Each category has clear prompt pattern |
| **Defaults** | Categories can have defaults (e.g., default style is `professional`) |

---

## Migration Path

### Phase 1: Categorize Existing
Map current 8 tags to categories (done above).

### Phase 2: Add Missing Tags
Add high-value tags from patterns we've defined:
- `immersive`, `autonomous` (Behavior)
- `race-enabled`, `temporal`, `proactive` (Capability)
- `experience`, `exploratory` (Output)
- `evolving` (Structure)

### Phase 3: Update Team Definitions
Convert team tag lists to categorized format.

### Phase 4: Update Prompt Injection
Use category-specific prompt templates.

---

## Quick Reference

```
STYLE       → How it FEELS      → entertainment, artistic, professional, casual, intense
BEHAVIOR    → How agents BE     → simulation, immersive, collaborative, adversarial, autonomous
STRUCTURE   → What SHAPE        → graph-heavy, flat, linear, web, evolving
DOMAIN      → What KIND         → research, personal, rules-based, creative, technical, strategic
OUTPUT      → What user GETS    → deliverable, exploratory, reference, experience, decision
CAPABILITY  → What PATTERNS     → race-enabled, temporal, ritual, proactive, cross-domain, infinite
```