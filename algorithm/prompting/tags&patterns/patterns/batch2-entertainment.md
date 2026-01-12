# Entertainment & Creative Flow Patterns

Patterns for non-mission-oriented flows where the PROCESS is the entertainment, the STRUCTURE is the content, or the EXCHANGE is the output.

---

## The Fundamental Shift

**Mission-Oriented Thinking:**
- Products = deliverables
- Process = means to end
- Quality = output quality
- Completion = deliverable done

**Entertainment-Oriented Thinking:**
- Products = moves, contributions, world pieces
- Process = the entertainment itself
- Quality = engagement, coherence, surprise
- Completion = session satisfaction

---

## Pattern: Exchange (Turn-Based Performance)

### The Insight
Some flows are EXCHANGES where moves alternate between performers in an ongoing back-and-forth. The exchange itself IS the output. The versioning mechanism naturally supports this—each version IS a move, and agents natively see the previous version when creating theirs.

### The Dynamic

```
OPERATIVE A                              OPERATIVE B
     │                                        │
     ▼                                        │
[VERSION 1] ─────────────────────────────────►│
"Opening bars"                                │
     │                                        ▼
     │         (B natively sees V1)    [VERSION 2]
     │◄───────────────────────────────"Response bars"
     ▼                                        │
[VERSION 3] ─────────────────────────────────►│
"Counter"    (A natively sees V2)             │
     │                                        ▼
     │         (B natively sees V3)    [VERSION 4]
     │◄───────────────────────────────"Escalation"
     ▼                                        ▼
                    [...]
                      │
                      ▼
            EXCHANGE COMPLETE
     (Version history IS the battle record)
```

### Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **Single product** | The exchange IS the product; versions are moves |
| **Version visibility** | Each agent natively sees previous version (no attach_context needed) |
| **Collabs carry forward** | Comments on V2 are visible when creating V3 |
| **Chair role** | Alternates assignee between versions |
| **Peer review** | In-character reactions that NEXT performer sees |
| **Presentation** | Shows version history as the exchange |

### Product Structure (Versioned — Primary)

```
"Rap Battle: [Challenger] vs [Defender]" (Content)
├── Version 1 — Challenger's opening
├── Version 2 — Defender's response (sees V1 + V1 collabs)
├── Version 3 — Challenger's counter (sees V2 + V2 collabs)
├── Version 4 — Defender's escalation (sees V3 + V3 collabs)
└── ...

Collabs on each version:
- Opponent's in-character reaction
- "Crowd" commentary
- Chair's hype/direction
→ All visible to next performer
```

### The Collab Magic

This is what makes versioned exchange powerful:

```
Version 2 (Defender's response):
  Content: [their bars]
  
  Collabs on V2:
    - Challenger: "Oh you went there? Watch this next round"
    - Hype Man: "OHHH that callback to the shoe line!"
    - Chair: "Good hit. Challenger needs to escalate."
    
Version 3 (Challenger's counter):
  Agent SEES: V2 content + all V2 collabs
  Can respond to:
    - The actual bars (V2 content)
    - The crowd reaction (collabs)
    - Even address the hype: "Y'all think that was hot? Hold my mic..."
```

Peer review becomes **crowd energy** that performers play off of.

### Flow Per Round

```
Round N:
1. Chair assigns next version to current turn-holder
   - Directive: "Your turn. Respond to what you see."
   - No attach_context needed—they see previous version natively
   
2. Turn-holder creates their VERSION
   - Sees opponent's last move automatically
   - Sees all collabs (crowd reactions, opponent's response)
   - Can reference/respond to any of it
   
3. "Peer review" = reactions to this move
   - Opponent: In-character reaction ("That all you got?")
   - Others: Crowd energy, commentary
   - These become visible to NEXT performer
   
4. Chair evaluates (remarks to self)
   - "Good escalation" / "Energy dropping"
   - Can add collab for direction: "Raise the stakes"
   
5. Chair assigns next version to other performer
```

### Exchange Types

| Type | Turn Structure | Version Pattern |
|------|---------------|-----------------|
| **Rap Battle** | A → B → A → B | Alternating assignees |
| **Debate** | Pro → Con → Pro → Con | Alternating sides |
| **Argument Settlers** | A → B → Arbitrator | Three-way rotation |
| **Chess Match Commentary** | Analysis A → Analysis B | Alternating perspectives |

### Variant: Collection Exchange (for non-linear)

When moves should stand alone or structure is complex:

```
"Freestyle Cypher" (Collection)
├── "Verse - MC Alpha" (Content)
├── "Verse - MC Beta" (Content)
├── "Verse - MC Gamma" (Content)
├── "Verse - MC Alpha" (Content) — second round
└── ...
```

Use Collection Exchange when:
- Moves can be reordered
- Multi-party (3+) with complex turn order
- Each move should be independently addressable
- Structure needs to branch

### When to Use Which

| Versioned Exchange | Collection Exchange |
|-------------------|---------------------|
| Linear back-and-forth | Multi-party free-for-all |
| Collabs should carry forward | Each move independently reviewed |
| Direct responses | Performances that stand alone |
| 2-party battles | Complex turn structures |
| History matters linearly | Non-linear references needed |

### What Makes Versioned Exchange Work

1. **Native version visibility** — No routing overhead, previous move automatic
2. **Collabs = crowd energy** — Reactions carry to next performer
3. **Linear history** — Version list IS the battle record
4. **Chair just alternates** — Simple assignment switching
5. **Single product = single artifact** — The exchange is one thing

### Applies To
- Rap Battle League (versioned)
- Debate teams (versioned)
- Argument Settlers (versioned)
- Freestyle Cypher (collection — multi-party)
- Roast Squad (collection — multiple roasters)

---

## Pattern: Ensemble Stage (Collective Performance)

### The Insight
Multiple performers contribute to a shared "show" where the assembled performances ARE the entertainment. Unlike Exchange (back-and-forth), Ensemble is everyone contributing to the same event.

### The Dynamic

```
                    THE STAGE
                        │
     ┌──────────────────┼──────────────────┐
     │                  │                  │
     ▼                  ▼                  ▼
PERFORMER 1        PERFORMER 2        PERFORMER 3
     │                  │                  │
     ▼                  ▼                  ▼
[Performance]      [Performance]      [Performance]
     │                  │                  │
     │      callbacks   │     callbacks    │
     │◄────────────────►│◄────────────────►│
     │                  │                  │
     └──────────────────┼──────────────────┘
                        │
                        ▼
              ASSEMBLED SHOW
         (Collection of performances)
```

### Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **Products** | Each performance is a Content product |
| **Collection** | The "show" is a Collection holding all performances |
| **attach_context** | Each performer sees "stage" (theme/target) + earlier performances (for callbacks) |
| **Order** | Chair sequences performances for flow |
| **Collabs** | In-character reactions during show |
| **Presentation** | Assembles performances into show experience |

### Product Structure

```
"Roast of [Target]" (Orchestration)
├── "The Stage" (Content) — target info, tone, context
├── "Performances" (Collection)
│   ├── "Roast - Disappointed Asian Parent" (Content)
│   ├── "Roast - Gen-Z TikToker" (Content)  — callbacks to previous
│   ├── "Roast - Corporate HR" (Content) — callbacks
│   └── "Roast - Target's Response" (Content) — addresses all
└── "Crowd Reactions" (Content) — assembled peer reactions
```

### Flow

```
Setup:
1. Chair creates "Stage" with theme/target
2. Chair determines performance order (for flow)

Each Performance:
1. Chair assigns performer
   - Attaches Stage + previous performances
   - Directive: "Perform your roast. You can callback to earlier roasts."
   
2. Performer creates their piece
   - References Stage
   - Can callback to previous performers
   
3. Other performers react (collabs)
   - IN CHARACTER reactions
   - "Oh you went THERE" / "That's cold" / "Let me top that"
   
4. Chair notes show quality (remarks)
   - "Good callback to Performer 1's doctor joke"
   - "Energy flagging—next performer needs to escalate"
```

### Ensemble Variants

| Variant | Structure | Example |
|---------|-----------|---------|
| **Sequential** | Performances in planned order | Roast (each roaster in turn) |
| **Reactive** | Later performances respond to earlier | Dream interpretations building |
| **Competitive** | Performances judged against each other | Talent show format |
| **Collaborative** | Performances build unified piece | Improv scene |
| **Conflicting** | Performances deliberately clash | Dream Team (opposing interpretations) |

### What Makes It Work

1. **Stage context shared** — Everyone knows the theme/target
2. **Callbacks encouraged** — References to earlier create coherence
3. **Order choreographed** — Chair sequences for effect
4. **Reactions are performance** — "Peer review" is part of show
5. **Assembly is presentation** — The collection IS the entertainment

### Applies To
- Roast Squad
- Dream Team
- Michelin Inspectors (each inspector's review)
- Poetry Slam format
- Panel show format

---

## Pattern: Branching Exploration (Infinite Depth)

### The Insight
Some structures want to EXPAND infinitely rather than converge on a deliverable. Each exploration spawns more exploration. The TREE is the content. Depth and variety over iteration and polish.

### The Dynamic

```
                         SEED
                          │
            ┌─────────────┼─────────────┐
            ▼             ▼             ▼
         BRANCH A     BRANCH B      BRANCH C
            │             │             │
       ┌────┴────┐   ┌────┴────┐       │
       ▼         ▼   ▼         ▼       ▼
     A.1       A.2  B.1       B.2     C.1
       │                       │
  ┌────┴────┐             ┌────┴────┐
  ▼         ▼             ▼         ▼
A.1.a    A.1.b         B.2.a    B.2.b

          [EXPANSION CONTINUES INFINITELY]
```

### Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **Orchestrations** | Each branch point is an Orchestration |
| **Collections** | Hold sibling branches |
| **tree_operations** | ADD creates new branches (never versions) |
| **attach_context** | Child branches get parent as context |
| **Navigation** | User can "zoom into" any branch |
| **Expansion** | Each round adds BREADTH and DEPTH |

### Product Structure

```
"Alternate History: Napoleon Wins Waterloo" (Orchestration) — SEED
├── "Immediate Effects" (Collection)
│   ├── "Military: French Army Dominance" (Orchestration)
│   │   ├── "European Garrisons" (Content)
│   │   └── "Colonial Implications" (Orchestration)
│   │       ├── "India" (Content)
│   │       └── "Americas" (Content)
│   ├── "Political: Congress of Vienna Void" (Orchestration)
│   │   ├── "German States" (Content)
│   │   └── "Italian States" (Content)
│   └── "Economic: Continental System" (Orchestration)
│       └── [...]
├── "10 Year Effects" (Collection)
│   └── [...]
└── "50 Year Effects" (Collection)
    └── [...]
```

### Flow

```
Round 1 (Seeding):
1. Chair creates SEED orchestration
2. Chair identifies initial branch dimensions
3. Assigns operatives to create top-level branches

Round N (Expansion):
1. User (or Chair) identifies branches to explore
2. Chair assigns expansion:
   - "Expand [[p:branch-a]] into sub-branches"
   - "Create deeper implications for [[p:branch-b.2]]"
   - "Add a new sibling branch to [[p:branch-c]]"
   
3. Operatives create NEW products (never edit existing)
   - Each new branch adds to tree
   - Cross-references to related branches
   
4. Chair updates navigation/index if needed

Navigation:
- User can "zoom into" any orchestration
- Entering a branch reveals its children
- Can request expansion of any leaf
```

### Branching Strategies

| Strategy | When to Use | Example |
|----------|-------------|---------|
| **Timeline** | Effects over time | Alternate History (immediate → decades) |
| **Domain** | Different affected areas | Conspiracy (political, economic, cultural) |
| **Perspective** | Different viewpoints | World-building (regions, factions) |
| **Causation** | Cause → Effect chains | Butterfly effect exploration |
| **Scale** | Macro → Micro | World → Region → City → Neighborhood |

### What Makes It Work

1. **Orchestrations as containers** — Every branch point can expand
2. **Never version, always add** — New exploration = new product
3. **Cross-references create web** — [[p:id]] links related branches
4. **User directs exploration** — "Go deeper on X"
5. **Index/navigation product** — Helps traverse the tree

### Applies To
- Alternate History Room
- Tin Foil Hat Society (conspiracy web)
- World-building teams
- What-If Scenario teams
- Knowledge exploration (learning paths)

---

## Pattern: Reactive World (User-Driven Narrative)

### The Insight
Some flows are USER → WORLD → USER → WORLD cycles where products represent WORLD STATE, not deliverables. The world reacts to user input, updates state, and awaits next input.

### The Dynamic

```
     USER                          WORLD (TEAM)
       │                                │
       ▼                                │
 [INPUT: Action]                        │
 "I open the door"                      │
       │                                ▼
       │                    ┌─────────────────────┐
       │                    │ PROCESS:            │
       │                    │ 1. Read world state │
       │                    │ 2. Apply action     │
       │                    │ 3. Generate reaction│
       │                    │ 4. Update state     │
       │                    └─────────────────────┘
       │                                │
       │◄───────────────────────────────┘
       │               [OUTPUT: Narrative + consequences]
       │               "The door creaks open revealing..."
       │                                │
       ▼                                ▼
 [INPUT: Next action]           [STATE UPDATED]
       │                                │
       └────────────────────────────────┘
                    [CYCLE CONTINUES]
```

### Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **State Products** | World state stored in products (locations, characters, inventory) |
| **chair_versions** | Chair updates state after each cycle |
| **attach_context** | Reactive work gets relevant state attached |
| **Halt** | After each narrative output, halt for user input |
| **Session history** | Previous actions inform reactions |

### Product Structure

```
"Dungeon Adventure" (Orchestration)
├── "World State" (Orchestration)
│   ├── "Current Location" (Content) — updates each move
│   ├── "Party Status" (Content) — HP, conditions, etc.
│   ├── "Inventory" (Content) — items carried
│   └── "Active Effects" (Content) — buffs, curses, etc.
├── "World Knowledge" (Orchestration)
│   ├── "Locations" (Collection) — discovered locations
│   ├── "NPCs" (Collection) — known characters
│   └── "Lore" (Collection) — discovered information
├── "Session Log" (Collection)
│   ├── "Turn 1" (Content) — action + result
│   ├── "Turn 2" (Content) — action + result
│   └── [...]
└── "DM Notes" (Content) — chair's private planning
```

### Flow Per Cycle

```
User Input Arrives:
1. Chair receives user action
2. Chair consults World State products
3. Chair determines:
   - What happens (narrative)
   - What changes (state updates)
   - What's revealed (new knowledge)

Processing:
4. Chair assigns narrative generation
   - Attaches relevant state products
   - Directive: "User action: [X]. React, narrate consequences."
   
5. Operative generates narrative response
   - Describes what happens
   - Notes state changes needed
   
6. Chair updates World State products
   - chair_versions for changed state
   - ADD for new knowledge

Output:
7. Presentation delivers narrative
8. Halt for next user input

State Products Always Current:
- "Current Location" reflects where party IS
- "Party Status" reflects current conditions
- "Session Log" has complete history
```

### State Types

| State Type | What It Tracks | Update Frequency |
|------------|---------------|------------------|
| **Position** | Where entities are | Every move |
| **Condition** | Health, status, mood | When changed |
| **Inventory** | What's carried/available | On acquisition/use |
| **Relationships** | NPC attitudes, faction standing | On significant interaction |
| **Timeline** | In-world time, events | Continuously |
| **Knowledge** | What's been discovered | On discovery |

### What Makes It Work

1. **State products are ground truth** — Current state, not history
2. **chair_versions for updates** — State changes cleanly
3. **Session Log for history** — Can reference past actions
4. **Halt rhythm** — Input → Output → Input
5. **DM Notes for planning** — Chair has private space

### Applies To
- Dungeon Party
- Time Travel Tourism
- Interactive fiction teams
- Choose Your Own Adventure
- Simulation/sandbox teams

---

## Pattern: Conspiracy Web (Accumulating Connections)

### The Insight
Some structures are about CONNECTIONS between nodes, not hierarchical depth. Each addition creates new links, and the web of links IS the content. Different from Branching (tree) and Accumulation (hierarchy).

### The Dynamic

```
              NODE A ◄─────────────► NODE B
                │                      │
                │    "connected to"    │
                │                      │
                ▼                      ▼
              NODE C ◄───────────────► NODE D
                │                      │
                │     ┌────────────────┘
                │     │
                ▼     ▼
              NODE E ◄──────────────► NODE F
                        │
                        ▼
                     [more nodes, more connections]
                     
         THE WEB OF CONNECTIONS IS THE CONTENT
```

### Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **Products** | Each node is a Content product |
| **[[p:id]] references** | Every product references its connections |
| **Collection** | Flat collection of all nodes (not hierarchical) |
| **Connection Index** | Product tracking all connections |
| **Cross-referencing** | Bidirectional links between nodes |

### Product Structure

```
"Conspiracy: Birds Aren't Real" (Orchestration)
├── "Connection Index" (Content) — master list of all links
├── "Evidence Nodes" (Collection)
│   ├── "E1: Bird charging stations" (Content)
│   │   └── connects to: [[p:e3]], [[p:e5]], [[p:t2]]
│   ├── "E2: No bird fossils pre-1947" (Content)
│   │   └── connects to: [[p:e4]], [[p:t1]]
│   └── [...]
├── "Theory Nodes" (Collection)
│   ├── "T1: Government drone program" (Content)
│   │   └── connects to: [[p:e2]], [[p:e4]], [[p:t3]]
│   └── [...]
└── "Meta-Conspiracy" (Content) — how it all connects
```

### Flow

```
Adding a Node:
1. Chair identifies new evidence/theory
2. Assigns creation:
   - "Create node for [X]"
   - "Must connect to at least 2 existing nodes"
   
3. Operative creates node
   - Content describes the node
   - References connect to existing nodes: "This connects to [[p:e3]] because..."
   
4. Chair updates Connection Index
5. Updates existing nodes to add backlinks

Strengthening Web:
1. Chair identifies weak areas (few connections)
2. Assigns connection discovery:
   - "Find connection between [[p:e5]] and [[p:t2]]"
   
3. Operative updates both nodes with new link
4. Connection Index updated

Web Queries:
- "How does X connect to Y?" → Trace connection path
- "What's most connected to X?" → Query Connection Index
- "What's the master theory?" → Meta-Conspiracy product
```

### Web Properties

| Property | What It Means | How to Track |
|----------|---------------|--------------|
| **Density** | How connected is the web? | Connections per node |
| **Clusters** | Are there sub-groups? | Tightly connected node sets |
| **Bridges** | Key connections between clusters | Nodes connecting different areas |
| **Central Nodes** | Most connected nodes | Connection count |
| **Periphery** | Weakly connected nodes | Low connection count |

### What Makes It Work

1. **Flat collection, not hierarchy** — All nodes are peers
2. **References ARE the structure** — [[p:id]] creates the web
3. **Bidirectional links** — A→B means B→A too
4. **Connection Index** — Queryable master list
5. **Web metrics** — Can identify gaps, clusters

### Applies To
- Tin Foil Hat Society
- Investigation/mystery teams
- Concept mapping
- Relationship mapping
- Knowledge graphs

---

## Pattern: Dramatic Process (Performance of Work)

### The Insight
Some teams do "real" work but the PROCESS of doing it in character IS the entertainment. The output exists but watching villains plan a heist (even a fake one) is the point.

### The Dynamic

```
          THE MISSION
              │
              ▼
┌────────────────────────────────────────────┐
│                                            │
│   VILLAIN 1        VILLAIN 2      VILLAIN 3│
│       │                │              │    │
│       ▼                ▼              ▼    │
│   "I propose      "Your plan     "Fools,  │
│    we tunnel      has a flaw..." both of  │
│    in from..."                    you..."  │
│       │                │              │    │
│       │◄───────────────┼──────────────┘    │
│       │                │                   │
│       ▼                ▼                   │
│   [Dramatic planning continues]            │
│                                            │
└────────────────────────────────────────────┘
              │
              ▼
      THE PLAN (exists, but secondary)
      THE DRAMA (the actual output)
```

### Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **Strong personas** | Characters are fully realized |
| **Products as process** | Planning docs, debates, etc. capture drama |
| **Collabs as drama** | Character interactions via collabs |
| **Chair as director** | Orchestrates dramatic beats |
| **Remarks for pacing** | Chair tracks dramatic arc |

### Product Structure

```
"Legion of Doom: Stapler Heist" (Orchestration)
├── "Mission Brief" (Content) — the mundane goal, treated seriously
├── "Council Sessions" (Collection)
│   ├── "Session 1: Initial Proposals" (Content) — each villain's plan
│   ├── "Session 2: Heated Debate" (Content) — conflicts, drama
│   └── "Session 3: Alliance Formation" (Content) — dramatic resolution
├── "The Plan" (Content) — actual plan (exists but secondary)
└── "Dramatic Moments" (Content) — chair's notes on best bits
```

### Flow

```
Mission Setup:
1. Present mundane mission with DRAMATIC framing
   - "The stapler must be acquired. Failure is not an option."
   
2. Characters respond IN CHARACTER to mission
   - Each villain assesses with their persona
   
Council Sessions:
3. Each villain proposes their approach
   - Full villain energy, dramatic stakes
   - Products capture proposals
   
4. Villains critique each other
   - Collabs are IN-CHARACTER attacks
   - "Your plan is worthy of a MINION, not a mastermind"
   
5. Dramatic tension builds
   - Chair tracks arc via remarks
   - "Good conflict between Mastermind and Enforcer—milk it"
   
6. Resolution
   - Alliance formed or plan selected
   - Dramatic conclusion

The Plan Exists But...:
- There IS a plan product at the end
- But the COUNCIL SESSIONS are the entertainment
- Process > Output
```

### Dramatic Beats

| Beat | What Happens | Chair Direction |
|------|--------------|-----------------|
| **Setup** | Mission presented dramatically | Frame stakes high |
| **Proposals** | Each character's approach | Encourage distinctiveness |
| **Conflict** | Characters clash | Let it build, don't resolve fast |
| **Escalation** | Stakes raised | Add complications |
| **Alliance/Betrayal** | Relationships shift | Orchestrate surprises |
| **Resolution** | Plan finalized | Dramatic conclusion |

### What Makes It Work

1. **Treat mundane as epic** — Stapler heist = Ocean's Eleven energy
2. **Character > task** — Drama from personas, not just work
3. **Process visible** — Sessions/debates are products
4. **Collabs are performance** — In-character interaction
5. **Chair as director** — Pacing, beats, arc

### Applies To
- Legion of Doom
- Any "heist" or "mission" team with strong personas
- Board room drama (ARCADE-style Board of Directors)
- War room scenarios
- Campaign/political teams

---

## Pattern: Judgment Panel (Deliberated Verdict)

### The Insight
Multiple judges evaluate something, then DELIBERATE to reach a verdict. Different from Ensemble (no deliberation) and Race (competitive, not collaborative verdict).

### The Dynamic

```
              SUBJECT
                 │
    ┌────────────┼────────────┐
    ▼            ▼            ▼
 JUDGE 1      JUDGE 2      JUDGE 3
    │            │            │
    ▼            ▼            ▼
[Assessment] [Assessment] [Assessment]
    │            │            │
    └────────────┼────────────┘
                 │
                 ▼
    ┌─────────────────────────┐
    │     DELIBERATION        │
    │                         │
    │  Judges discuss         │
    │  Challenge each other   │
    │  Persuade              │
    │  Reach verdict          │
    └─────────────────────────┘
                 │
                 ▼
           FINAL VERDICT
```

### Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **Products** | Individual assessments, then deliberation, then verdict |
| **Collabs** | Deliberation happens via collabs |
| **Chair** | Moderates deliberation, calls for verdict |
| **Exchange** | Back-and-forth during deliberation |
| **Final product** | Verdict with reasoning |

### Product Structure

```
"Michelin Review: Restaurant X" (Orchestration)
├── "Subject" (Content) — what's being judged
├── "Individual Assessments" (Collection)
│   ├── "Judge 1 Assessment" (Content)
│   ├── "Judge 2 Assessment" (Content)
│   └── "Judge 3 Assessment" (Content)
├── "Deliberation" (Content) — captures the debate
└── "Final Verdict" (Content) — reasoned conclusion
```

### Flow

```
Phase 1 - Individual Assessment:
1. Judges independently assess subject
   - No peer review (preserve independence)
   - Each creates assessment product
   
Phase 2 - Reveal:
2. Chair reveals all assessments
   - Judges see each other's views
   
Phase 3 - Deliberation:
3. Judges deliberate via collabs
   - "Judge 2, you rated X highly but ignored Y"
   - "Judge 1, I challenge your criteria"
   - IN CHARACTER debate
   
4. Chair moderates
   - Ensures all voices heard
   - Tracks when convergence happening
   
Phase 4 - Verdict:
5. Chair calls for verdict
   - Judges must agree (or majority)
   - Final Verdict product created
   - Includes reasoning from deliberation
```

### Judgment Types

| Type | Deliberation Style | Verdict Form |
|------|-------------------|--------------|
| **Rating** | "I say 3 stars, you say 2, let's discuss" | Numerical + reasoning |
| **Pass/Fail** | "I think it passes, convince me otherwise" | Binary + reasoning |
| **Ranking** | "This should be first, not second" | Ordered list |
| **Award** | "Does it deserve the prize?" | Yes/No + comparison |
| **Verdict** | "Guilty or not guilty?" | Decision + reasoning |

### What Makes It Work

1. **Independent first** — Assessments before seeing others
2. **Deliberation is drama** — Judges challenge each other
3. **Persuasion possible** — Judges can change minds
4. **Chair moderates** — Prevents stalemate, ensures fairness
5. **Reasoned verdict** — Not just vote, but WHY

### Applies To
- Michelin Inspectors
- Award/prize judging
- Competition judging
- Quality assessment panels
- "Shark Tank" style evaluation

---

## Pattern: Layered Reveal (Mystery Unfolding)

### The Insight
Some content should unfold in LAYERS where each layer reveals more depth. Surface → Deeper → Deepest. The user controls how deep to go.

### The Dynamic

```
              SURFACE LAYER
           (immediately visible)
                    │
                    ▼
    "Want to know more?" ─────► [User chooses]
                    │
                    ▼
              DEEPER LAYER
           (reveals on request)
                    │
                    ▼
    "Want to know more?" ─────► [User chooses]
                    │
                    ▼
            DEEPEST LAYER
          (final revelation)
```

### Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **Products** | Each layer is a product |
| **Orchestration** | Layers nested in orchestration |
| **Presentation** | Shows current layer, offers to go deeper |
| **Halt** | After each layer, wait for user direction |
| **Progressive disclosure** | Content structured for reveal |

### Product Structure

```
"Mystery: The Missing Artifact" (Orchestration)
├── "Surface" (Content) — what's immediately apparent
├── "Layer 1: First Look" (Orchestration)
│   ├── "Revealed" (Content) — what you learn looking closer
│   └── "Hints" (Content) — suggestions of deeper layers
├── "Layer 2: Investigation" (Orchestration)
│   ├── "Revealed" (Content) — what investigation uncovers
│   └── "Hints" (Content) — suggestions of final truth
└── "Layer 3: The Truth" (Content) — final revelation
```

### Flow

```
Initial Presentation:
1. Present Surface layer
2. Indicate deeper layers exist
3. Halt: "Want to investigate further?"

User Requests More:
4. Reveal next layer
5. Connect to what was known
6. Indicate if more layers exist
7. Halt: "Want to go deeper?"

[Repeat until deepest layer or user satisfied]
```

### Layer Types

| Domain | Layers |
|--------|--------|
| **Mystery** | Clues → Evidence → Suspects → Solution |
| **Conspiracy** | Surface story → Inconsistencies → Hidden connections → Truth |
| **Character** | Public persona → Private life → Secret history → Core truth |
| **History** | Official record → Primary sources → Hidden accounts → Real story |
| **Explanation** | Simple version → Technical detail → Edge cases → Full theory |

### What Makes It Work

1. **Each layer complete** — Satisfying at any depth
2. **Hints at more** — Each layer suggests what's below
3. **User controls pace** — They choose when to go deeper
4. **Connections explicit** — New info connects to old
5. **Final layer resolves** — Deepest layer is complete truth

### Applies To
- Mystery/investigation teams
- Explainer teams (Eli Varied)
- Conspiracy reveal (Tin Foil Hat endgame)
- Character backstory reveals
- Educational content (simple → complex)

---

## Summary: Entertainment Patterns

| Pattern | Core Dynamic | Products Are | Output Is |
|---------|--------------|--------------|-----------|
| **Exchange (Versioned)** | Turn-based back-and-forth on single product | Versions = moves | The version history |
| **Exchange (Collection)** | Multi-party or non-linear moves | Separate products | The collected moves |
| **Ensemble Stage** | Multiple performers, shared show | Performances | The assembled show |
| **Branching Exploration** | Infinite expansion | Branches/nodes | The tree structure |
| **Reactive World** | User → World → User | World state | The narrative + state |
| **Conspiracy Web** | Connection accumulation | Nodes | The web of connections |
| **Dramatic Process** | Work as performance | Process captures | The dramatic process |
| **Judgment Panel** | Deliberated verdict | Assessments + deliberation | The reasoned verdict |
| **Layered Reveal** | Progressive unfolding | Layers | The revelation journey |

---

## Pattern-Team Mapping

| Team | Primary Pattern | Variant/Secondary |
|------|----------------|-------------------|
| Rap Battle League | Exchange (Versioned) | Collabs = crowd energy |
| Roast Squad | Ensemble Stage | Exchange-Collection (if target responds) |
| Debate teams | Exchange (Versioned) | Judgment Panel (if judged) |
| Dream Team | Ensemble Stage (Conflicting) | - |
| Alternate History Room | Branching Exploration | - |
| Tin Foil Hat Society | Conspiracy Web | Layered Reveal |
| Dungeon Party | Reactive World | - |
| Time Travel Tourism | Reactive World | Branching (timeline exploration) |
| Legion of Doom | Dramatic Process | - |
| Michelin Inspectors | Judgment Panel | Ensemble Stage |
| Mystery/Investigation | Layered Reveal | Conspiracy Web |
| World-building teams | Branching Exploration | Reactive World |
| Argument Settlers | Exchange (Versioned) | Judgment Panel |
| Freestyle Cypher | Exchange (Collection) | Multi-party rotation | 