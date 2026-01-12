# The Sticky Notes Pattern: Comprehensive Guide

## Executive Summary

The Sticky Notes Pattern uses **pinned remarks** to maintain lightweight persistent information across rounds. Unlike regular remarks (one round) or products (heavy, structured), pinned remarks are simple notes that stick until explicitly unpinned.

**Core insight:** Sessions generate small but important pieces of information—todos, reminders, constraints, standing instructions—that don't warrant full products but shouldn't disappear after one round.

---

## The Mechanism

### Pinned Remarks vs Regular Remarks

| Aspect | Regular Remarks | Pinned Remarks |
|--------|-----------------|----------------|
| **Lifespan** | Current round only | Until explicitly unpinned |
| **Visibility** | Appears once | Appears every round until unpinned |
| **Purpose** | Immediate notes | Persistent reminders |
| **Weight** | Ephemeral | Lightweight but durable |

### Pinned Remarks vs Products

| Aspect | Products | Pinned Remarks |
|--------|----------|----------------|
| **Structure** | Full (name, type, DoD, content, versions) | Simple (content + metadata) |
| **Lifecycle** | Created → Assigned → Written → Reviewed → Inspected → Accepted | Pinned → (visible each round) → Unpinned |
| **Purpose** | Deliverables, substantial content | Reminders, instructions, todos |
| **Overhead** | High (must be worked, reviewed) | None (just exists) |
| **Best for** | "Here's the spec" | "Remember to check the spec" |

### Schema

```json
{
  "pinned_remarks": [
    {
      "id": "pin-1",
      "author": "chair-1",
      "recipients": ["operative-1"],
      "content": "Stay in pessimist character—you've been drifting toward neutral",
      "pinned_at": "round-3",
      "category": "instruction"
    },
    {
      "id": "pin-2", 
      "author": "chair-1",
      "recipients": ["self"],
      "content": "TODO: Address user's budget concern before finalizing",
      "pinned_at": "round-2",
      "category": "todo"
    }
  ]
}
```

### Operations

| Operation | Who Can Do It | Effect |
|-----------|---------------|--------|
| **Pin** | Chair (to anyone), Operatives (to self only) | Creates persistent note |
| **Unpin** | Author or Chair | Removes note |
| **Update** | Author or Chair | Modifies content |

### Visibility Rules

| Pin Target | Who Sees It |
|------------|-------------|
| `["self"]` | Only the author, every round |
| `["operative-1"]` | Chair + operative-1, every round |
| `["all"]` | Everyone, every round |
| `["operatives"]` | All operatives (not watchdog/envoy) |
| `["chair-1", "watchdog-1"]` | Specified agents only |

---

## Pin Categories

### 1. Todo Pins

**Purpose:** Track tasks that emerge mid-session.

**Lifecycle:** Pin when discovered → Unpin when done

**Examples:**
```
"TODO: Circle back to pricing after feature scope is defined"
"TODO: Get user confirmation on timeline before finalizing"
"TODO: Address contradiction between p3 and p7"
"TODO: User mentioned wanting examples—add before completion"
```

**Value:** Tasks don't get lost between rounds. Chair maintains running awareness.

---

### 2. Instruction Pins

**Purpose:** Standing instructions to specific agents.

**Lifecycle:** Pin at start or when needed → Unpin when no longer applies

**Examples:**
```
To operative-1: "All recommendations must account for user's $500/month budget"
To operative-2: "Stay in character—you're the skeptic, push back on everything"  
To watchdog: "Flag any unsourced statistics as severity 8"
To all: "User prefers concise outputs—keep responses under 500 words"
```

**Value:** Instructions persist without repeating in every directive. Agents see them automatically.

---

### 3. Constraint Pins

**Purpose:** Track discovered constraints that affect multiple decisions.

**Lifecycle:** Pin when learned → Unpin if constraint changes/removed

**Examples:**
```
"User is vegetarian—all food recommendations must respect this"
"Deadline is March 15—all timelines must fit"
"User has young children—schedule recommendations must account for childcare"
"Legal jurisdiction is California—all contract terms must comply"
```

**Value:** Constraints don't need to be re-attached as context every time. They're always visible.

---

### 4. Rule Pins

**Purpose:** Session-level rules that govern all work.

**Lifecycle:** Pin at bootstrap → Persist entire session (rarely unpinned)

**Examples:**
```
"All factual claims must cite sources using [[p:source-id]]"
"Every recommendation must include a 'minimum viable' starting point"
"Characters must stay in voice—breaking character is a quality issue"
"No jargon—user is non-technical"
```

**Value:** Rules are omnipresent without creating heavy Rules products for simple guidelines.

---

### 5. Watch Pins

**Purpose:** Things to monitor or watch for.

**Lifecycle:** Pin when concern arises → Unpin when resolved or no longer relevant

**Examples:**
```
"WATCH: Operative-2's character voice is drifting—monitor next round"
"WATCH: User seemed hesitant about pricing—look for signals"
"WATCH: Contradiction between requirements may resurface—be alert"
"WATCH: This approach might not scale—flag if complexity increases"
```

**Value:** Soft concerns stay visible without blocking work or requiring immediate action.

---

### 6. Context Pins

**Purpose:** Important context that should inform all work but isn't a constraint.

**Lifecycle:** Pin when learned → Unpin if context changes

**Examples:**
```
"User's goal is career change to tech—frame advice accordingly"
"This is for a startup pitch—investor audience, not technical"
"User has tried meditation before and it didn't work for them"
"Company is 50 people, not enterprise—scale recommendations appropriately"
```

**Value:** Context follows agents without explicit attachment every round.

---

### 7. Deferred Pins

**Purpose:** Items to revisit later.

**Lifecycle:** Pin to remember → Unpin when addressed or deliberately dropped

**Examples:**
```
"DEFER: User mentioned interest in international expansion—revisit after core strategy"
"DEFER: Advanced features discussion—after MVP scope locked"
"DEFER: Team structure question—after headcount confirmed"
"LATER: User asked about mobile—address after web spec complete"
```

**Value:** Side topics don't derail current work but aren't forgotten.

---

## Use Cases with High Value

### Use Case 1: Running Todo List

**Scenario:** Complex session with many emerging tasks.

**Without pins:** Chair tries to remember everything, or creates heavy "Todo" product that needs management.

**With pins:**
```
Round 1: User mentions budget constraint
         Chair pins: "TODO: Factor $500/month budget into all recommendations"

Round 2: Contradiction discovered between products
         Chair pins: "TODO: Reconcile p3 and p7 rate limits"
         
Round 3: User asks about timeline
         Chair pins: "TODO: Add timeline to final deliverable"
         Chair completes budget task
         Chair unpins: "TODO: Factor $500/month budget..."
         
Round 4: Chair sees remaining todos, addresses systematically
```

**Value:** Natural task management without overhead. Nothing falls through cracks.

---

### Use Case 2: Character Consistency in Simulation

**Scenario:** `simulation` tag team where character voices matter.

**Without pins:** Chair repeats "stay in character" in every directive, or creates Character Bible product.

**With pins:**
```
Bootstrap: 
  Chair pins to operative-1: "You are THE PESSIMIST. Question everything. See the downside. 'Yes, but...' is your catchphrase."
  Chair pins to operative-2: "You are THE DREAMER. Expansive thinking. 'What if we...' is your energy."
  Chair pins to operative-3: "You are THE PRAGMATIST. Ground the conversation. 'Realistically...' is your anchor."

Every round: Operatives see their character pin. No drift.

Round 4: Chair notices operative-1 agreeing too easily
         Chair updates pin: "You are THE PESSIMIST. You've been too agreeable—push back harder."
```

**Value:** Character instructions persist automatically. Chair can tune without full directive revision.

---

### Use Case 3: Discovered Constraints in Personal Teams

**Scenario:** VITALS team helping user with fitness plan.

**Without pins:** Chair creates User Context product, must attach to every assignment.

**With pins:**
```
Round 1: User mentions bad knee
         Chair pins to all operatives: "CONSTRAINT: User has bad knee—no high-impact exercises"
         
Round 2: User mentions work schedule
         Chair pins: "CONSTRAINT: User works 7am-7pm—morning/late evening only"
         
Round 3: User mentions past failure with gyms
         Chair pins: "CONTEXT: Gyms haven't worked for user—prefer home options"
```

**Value:** Constraints accumulate naturally and stay visible. Operatives can't accidentally ignore them.

---

### Use Case 4: Quality Standards in Deliverable Teams

**Scenario:** OPERATIONS team producing client deliverable.

**Without pins:** Chair repeats quality standards in every directive.

**With pins:**
```
Bootstrap:
  Chair pins to all: "QUALITY: Executive summary must stand alone—assume reader skips everything else"
  Chair pins to all: "QUALITY: Specific numbers, not 'significant' or 'substantial'"
  Chair pins to all: "QUALITY: Every recommendation needs owner + timeline"
  Chair pins to watchdog: "STANDARD: Flag vague language as severity 6"
```

**Value:** Quality standards are omnipresent. No directive bloat. Watchdog has clear standing orders.

---

### Use Case 5: Research Tracking in Research Teams

**Scenario:** Research team synthesizing multiple sources.

**Without pins:** Chair creates detailed Source Registry, tracks everything formally.

**With pins (complementary to registry):**
```
Round 2: Chair notices source A and B contradict
         Chair pins: "WATCH: Sources A and B contradict on market size—flag for user decision"
         
Round 3: User expresses preference for conservative estimates
         Chair pins: "RULE: When sources conflict, use conservative figure with note"
         
Round 4: Important caveat discovered
         Chair pins: "CAVEAT: All 2023 data is pre-policy-change—note in final output"
```

**Value:** Lightweight tracking of concerns, rules, caveats alongside formal source registry.

---

### Use Case 6: Multi-Round Race Coordination

**Scenario:** Race pattern across multiple rounds.

**Without pins:** Chair must track race status mentally or create race product.

**With pins:**
```
Round 1: Chair starts race
         Chair pins to self: "RACE: Tagline competition—3 versions in progress"
         Chair pins to self: "RACE CRITERIA: Memorable, under 8 words, conveys value"
         
Round 2: Chair reviews versions
         Chair pins to self: "RACE STATUS: Version B leading—strong hook. A is creative but long. C is safe."
         
Round 3: Chair assigns refinement
         Chair unpins status, pins: "RACE: Final round—B vs refined A"
         
Round 4: Chair selects winner
         Chair unpins all race pins
```

**Value:** Race coordination without heavy structure. Chair's thinking is preserved across rounds.

---

### Use Case 7: Session-Level Guardrails

**Scenario:** Any team where certain behaviors must never happen.

**With pins:**
```
Bootstrap:
  Chair pins to all: "NEVER: Don't mention competitor by name"
  Chair pins to all: "NEVER: Don't promise specific delivery dates"
  Chair pins to all: "ALWAYS: Include disclaimer on financial projections"
  Chair pins to watchdog: "BLOCK: Any content mentioning competitor names is severity 10"
```

**Value:** Guardrails are absolute and persistent. No chance of forgetting in a long session.

---

### Use Case 8: Adaptive Tone Guidance

**Scenario:** User's tone preferences become clear during session.

**Without pins:** Chair tries to convey tone in each directive.

**With pins:**
```
Round 1: User responds positively to direct, no-nonsense tone
         Chair pins to all: "TONE: User prefers direct, concise. Skip pleasantries."
         
Round 3: User pushes back on something too blunt
         Chair updates pin: "TONE: Direct but not harsh. Professional warmth."
         
Round 5: User shares they're stressed about this project
         Chair updates pin: "TONE: Supportive and reassuring. Acknowledge difficulty."
```

**Value:** Tone guidance evolves and persists. All agents adapt together.

---

## Implementation Patterns

### Bootstrap Pinning

At session start, Chair establishes foundational pins:

```
BOOTSTRAP:
  Chair creates initial products (normal)
  
  Chair pins session rules:
    - Quality standards
    - Guardrails  
    - Tone guidelines
    
  Chair pins character instructions (if simulation):
    - Per-operative character reminders
    
  Chair pins known constraints:
    - User-provided limitations
    - Scope boundaries
```

### Discovery Pinning

During session, new information gets pinned:

```
USER SHARES INFO:
  Chair evaluates: Is this a constraint? Context? Preference?
  
  If lightweight & persistent → PIN
  If substantial & structured → PRODUCT (User Context)
  If temporary & immediate → REGULAR REMARK
```

### Maintenance Pinning

Chair maintains pins across rounds:

```
EACH ROUND (Plan & Assign):
  Chair reviews active pins
  
  For each pin:
    - Still relevant? → Keep
    - Completed/resolved? → Unpin
    - Needs update? → Update
    - New info discovered? → Add new pin
```

### Selective Targeting

Different pins for different agents:

```
TARGETING STRATEGY:
  - Session rules → all agents
  - Character instructions → specific operative
  - Quality standards → operatives + watchdog
  - Internal todos → self only
  - Constraints → relevant operatives
  - Guardrails → watchdog (for enforcement)
```

---

## Anti-Patterns

### Don't Over-Pin

**Wrong:** Pinning everything. 50 pins create noise.

**Right:** Pin only what's persistent AND lightweight. If it's substantial, make it a product.

### Don't Use Pins for Content

**Wrong:** Pinning entire paragraphs of instructions.

**Right:** Keep pins short. If it needs explanation, it's a product.

### Don't Forget to Unpin

**Wrong:** Completed todos stay pinned forever.

**Right:** Review pins each round. Unpin what's done or irrelevant.

### Don't Duplicate Products

**Wrong:** Creating Rules product AND pinning all the rules.

**Right:** Products for substantial content, pins for reminders about that content.

**Good pattern:**
- Product: "Rules & Standards" (full rules)
- Pin: "Remember to attach [[p:rules]] for contract work"

---

## Integration with Tags

### `personal` + Sticky Notes

High synergy. Constraints and context pins complement User Context products:
- **Product:** User Context with structured constraints
- **Pins:** Quick reminders: "User mentioned gym anxiety—be sensitive"

### `simulation` + Sticky Notes

High synergy. Character pins maintain consistency:
- **Pins:** Character voice reminders to each operative
- **Value:** No character drift without heavy Character Bible

### `deliverable` + Sticky Notes

High synergy. Quality standards as pins:
- **Pins:** "QUALITY: Specific numbers only" to all
- **Value:** Standards omnipresent without directive bloat

### `research` + Sticky Notes

Medium synergy. Complements Source Registry:
- **Product:** Source Registry (formal tracking)
- **Pins:** "CAVEAT: 2023 data is pre-policy" (lightweight reminders)

### `graph-heavy` + Sticky Notes

Medium synergy. Structural reminders:
- **Pins:** "WATCH: p3 and p7 may conflict—verify before accepting"
- **Value:** Structural concerns tracked without blocking

### `rules-based` + Sticky Notes

Medium synergy. Rules products are better for rules, but:
- **Pins:** "REMINDER: Always attach [[p:rules]] for compliance work"
- **Value:** Process reminders complement formal rules

---

## Summary

The Sticky Notes Pattern provides **lightweight persistence** for information that:
- Matters beyond one round
- Doesn't warrant a full product
- Should be visible to specific agents
- May change or complete during session

**Seven pin categories:**
1. **Todo** — Tasks to complete
2. **Instruction** — Standing directions
3. **Constraint** — User limitations
4. **Rule** — Session guidelines
5. **Watch** — Things to monitor
6. **Context** — Informing background
7. **Deferred** — Revisit later

**Key operations:**
- Pin (create)
- Unpin (remove when done/irrelevant)
- Update (modify as situation evolves)

**High-value use cases:**
- Running todo lists
- Character consistency
- Discovered constraints
- Quality standards
- Research caveats
- Race coordination
- Session guardrails
- Adaptive tone

The pattern fills the gap between ephemeral remarks and heavy products, enabling fluid session management without structural overhead.