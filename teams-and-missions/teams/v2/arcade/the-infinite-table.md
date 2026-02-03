# CABAL Team Specification
## The Infinite Table

---

# Team: The Infinite Table
**District:** ARCADE  
**Code:** ARC-015

---

# Part 1: Customer-Facing Details

## Identity

### Name
> **The Infinite Table**

### Catch Phrase
> **"Roll for initiative. We'll handle the rest."**

### Description
> The Infinite Table is a complete tabletop RPG engine — Dungeons & Dragons, Pathfinder, and beyond. Choose your mode, bring your imagination, and we handle everything else: rules, dice, continuity, character sheets, and infinite storytelling.
>
> **Three Modes of Play:**
>
> **🎭 SINGLE PLAYER MODE**
> You are one hero in a party of adventurers. Join an existing campaign where the DM runs the world and your party members are fully realized characters who debate, argue, and adventure alongside you. Just play YOUR character — we simulate everything else.
>
> **🎲 MULTIPLAYER MODE**
> You represent a party of real players. Tell us how many, give us as much or as little detail as you want, and we generate a complete campaign. We handle the DM, the rules, the dice (or you roll your own), the narrative, the NPCs — you and your friends just make decisions. Zero cognitive load, maximum adventure.
>
> **🏰 REVERSED MODE (You Are The DM)**
> You are the Dungeon Master. Describe your world, set the scene, present the challenges. Your player characters are our agents — a chaotic party who will argue about tactics, make questionable decisions, and forge their own path through YOUR story. You narrate; they react.
>
> **What We Maintain:**
> - **Character sheets** — Stats, abilities, inventory, spell slots, conditions
> - **World state** — Locations, NPCs, factions, time, weather
> - **Story continuity** — Everything that's happened, referenced and searchable
> - **Rules engine** — Action validation, dice rolls, combat math
> - **Adventure log** — Catch-up summaries, key moments, quotes
>
> **Supported Systems:**
> - D&D 5th Edition
> - D&D 3.5 / Pathfinder 1e
> - Pathfinder 2e
> - OSR (Old School Revival)
> - System-agnostic (narrative-first)
>
> **The Magic:**
> Every choice expands the story. Paths not taken remain unexplored. The adventure grows infinitely as you play, with perfect continuity and coherent world-building. Step away for weeks — the Chronicle will catch you up in seconds.
>
> *Your table. Infinite adventures.*

---

## Session Configuration

### Default Starting Rounds
**Recommended:** 5 rounds (for session setup), then 3 rounds per scene/encounter

**Rationale:** 
- Setup Phase (5 rounds): Mode selection, system, characters, world, session 0
- Play Phase (3 rounds per beat): Situation → Decision → Resolution

The engine adapts round count to pacing — exploration is faster, combat is more detailed.

### Quick Starts

1. `"Single player D&D 5e. Surprise me with a party and setting."`
2. `"Multiplayer mode: 4 players, high fantasy, we'll roll our own dice."`
3. `"Reversed mode: I'm the DM. Let me describe my dungeon..."`
4. `"Continue our campaign from last time."`
5. `"New campaign: [Setting pitch]. [Number] players. [System]."`
6. `"One-shot adventure: [Theme]. Party level [X]."`
7. `"Import characters: [Character sheets]. Build a campaign around them."`
8. `"Session 0: Help us create characters for [Campaign concept]."`

---

# Part 2: Rationale & Considerations (Internal)

## Critical Design: The Three-Mode Engine

**The Core Challenge:** This team operates fundamentally differently depending on mode. The product tree and agent behaviors must adapt while maintaining the same underlying systems.

### Mode Comparison

| Aspect | Single Player | Multiplayer | Reversed |
|--------|--------------|-------------|----------|
| **DM** | Agent (Weaver) | Agent (Weaver) | User |
| **Player Characters** | User (1) + Agents | User(s) (all) | Agents (all) |
| **NPCs** | Agents | Agents | User describes |
| **Dice** | Agent rolls | User choice | Agent or User |
| **Narrative** | Agent describes | Agent describes | User describes |
| **Character agency** | User decides for self; Agents decide for party | Users decide all | Agents decide all |

### Mode-Specific Agent Behaviors

```
SINGLE PLAYER MODE
═══════════════════════════════════════════════════════════
Weaver: Full DM — describes world, runs NPCs, advances story
Codex: Rules engine — validates actions, rolls dice
Chronicler: Maintains all records, provides references
Ensemble: VOICES THE PARTY — roleplays other PCs with distinct personalities
Keeper: Ensures continuity, flags contradictions

User Experience: "I'm Theron the paladin. What does my party think?"
Ensemble responds AS the party members, debating in character.
═══════════════════════════════════════════════════════════

MULTIPLAYER MODE
═══════════════════════════════════════════════════════════
Weaver: Full DM — describes world, runs NPCs, advances story
Codex: Rules engine — validates actions, handles dice (or reports needed rolls)
Chronicler: Maintains all records, party status, turn order
Ensemble: Voices NPCs with distinct personalities
Keeper: Ensures continuity, manages party coordination

User Experience: "We have 4 players. Kira wants to stealth ahead."
Weaver responds with outcomes, Codex handles checks.
═══════════════════════════════════════════════════════════

REVERSED MODE (User is DM)
═══════════════════════════════════════════════════════════
Weaver: BECOMES PARTY LEADER — coordinates PC responses, manages party dynamics
Codex: Rules engine — validates what PCs can do, suggests actions
Chronicler: Maintains all records, provides party with context
Ensemble: BECOMES THE PLAYER CHARACTERS — each with personality, goals, flaws
Keeper: Ensures character consistency, flags out-of-character actions

User Experience: "You enter a tavern. An old man beckons from a corner."
Ensemble responds AS the party: "Grimjaw eyes him suspiciously..."
═══════════════════════════════════════════════════════════
```

---

## The Product Tree Architecture

### Three Pillars

The product tree maintains three major orchestration products that interconnect:

```
THE INFINITE TABLE — PRODUCT ARCHITECTURE
═══════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────┐
│                    THE ADVENTURE                        │
│              (Storyline Orchestration)                  │
│                                                         │
│  Hierarchical narrative that EXPANDS as paths are      │
│  taken. Unexplored branches remain collapsed.          │
│  References → THE CODEX for rules/stats                │
│  References → THE CHRONICLE for history                │
└───────────────────────┬─────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│  THE CODEX    │ │THE CHRONICLE  │ │  THE ATLAS    │
│  (Knowledge)  │ │  (History)    │ │   (World)     │
│               │ │               │ │               │
│ • Characters  │ │ • Session log │ │ • Locations   │
│ • Abilities   │ │ • Key events  │ │ • Maps        │
│ • Items       │ │ • Decisions   │ │ • Factions    │
│ • Spells      │ │ • Current     │ │ • NPCs        │
│ • Monsters    │ │   status      │ │ • Secrets     │
│ • Rules refs  │ │ • Quotes      │ │ • Hooks       │
└───────────────┘ └───────────────┘ └───────────────┘
        ▲               ▲               ▲
        │               │               │
        └───────────────┴───────────────┘
              Cross-referenced throughout
```

---

## RPG System Knowledge Base

### Core Systems Supported

| System | Key Mechanics | Dice | Character Elements |
|--------|--------------|------|-------------------|
| **D&D 5e** | Advantage/Disadvantage, Bounded Accuracy, Proficiency | d20 + mods | Race, Class, Background, Ability Scores, Proficiencies |
| **D&D 3.5/PF1e** | Stacking bonuses, Feat trees, Prestige classes | d20 + mods (lots) | Race, Class, Feats, Skills, Saves |
| **Pathfinder 2e** | Three-action economy, Degrees of success | d20 + mods | Ancestry, Heritage, Class, Feats (many levels) |
| **OSR** | Rulings over rules, Deadly, Resource management | Varied (B/X) | Class, Level, simple stats |
| **Narrative** | Fiction-first, Minimal mechanics | Flexible | Concept, Aspects, Approaches |

### Character Sheet Template (5e Example)

```
CHARACTER: [Name]
═══════════════════════════════════════════════════════════

IDENTITY
├── Name: [X]
├── Race: [X] (subrace: [Y])
├── Class: [X] Level [Y] (subclass: [Z])
├── Background: [X]
├── Alignment: [X]
└── Player: [User/Agent/Agent-Name]

ABILITY SCORES
│ STR │ DEX │ CON │ INT │ WIS │ CHA │
│ [X] │ [X] │ [X] │ [X] │ [X] │ [X] │
│ [±Y]│ [±Y]│ [±Y]│ [±Y]│ [±Y]│ [±Y]│

COMBAT
├── AC: [X] ([Source])
├── HP: [Current]/[Max] (Temp: [X])
├── Hit Dice: [X]d[Y] ([Used]/[Total])
├── Speed: [X] ft
├── Initiative: +[X]
├── Death Saves: ○○○ / ✗✗✗
└── Conditions: [List]

PROFICIENCIES
├── Saving Throws: [List]
├── Skills: [List with mods]
├── Armor: [List]
├── Weapons: [List]
├── Tools: [List]
└── Languages: [List]

FEATURES & TRAITS
├── Racial: [List]
├── Class: [List]
├── Background: [List]
└── Feats: [List]

SPELLCASTING (if applicable)
├── Ability: [X] | Save DC: [Y] | Attack: +[Z]
├── Cantrips: [List]
├── Spells Known/Prepared: [List]
└── Slots: 1st:[X] 2nd:[X] 3rd:[X] ...

EQUIPMENT
├── Weapons: [List with stats]
├── Armor: [Equipped]
├── Adventuring Gear: [List]
├── Magic Items: [List with attunement]
└── Currency: [GP, SP, CP]

BACKSTORY
├── Origin: [Summary]
├── Motivation: [What drives them]
├── Flaw: [Character weakness]
├── Bond: [Connection to world]
├── Secret: [If any]
└── Voice/Personality: [How they act/speak]

STATUS
├── Inspiration: ☐
├── Exhaustion: [Level]
├── Current Location: [X]
└── Notes: [Temporary effects, ongoing things]
```

---

## The Chat Flow (Per Message)

Each user message triggers a systematic flow:

```
USER MESSAGE RECEIVED
        │
        ▼
┌───────────────────────────────────────────────────────────┐
│ STEP 1: PARSE INTENT                                      │
│ What is the user trying to do?                            │
│ • Action declaration ("I attack the goblin")              │
│ • Question ("What do I see?")                             │
│ • Dialogue ("I say to the merchant...")                   │
│ • Meta ("What are my spell slots?")                       │
│ • DM narration (Reversed mode)                            │
└───────────────────────────────────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────────────────────────┐
│ STEP 2: VALIDATE AGAINST CODEX                            │
│ Can this action be taken?                                 │
│ • Check abilities, resources, conditions                  │
│ • Check world state (is the goblin there?)                │
│ • Check rules (is this legal in the system?)              │
│ • Flag if impossible; suggest alternatives                │
└───────────────────────────────────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────────────────────────┐
│ STEP 3: RESOLVE MECHANICS                                 │
│ What happens mechanically?                                │
│ • Roll dice (randomized or user-provided)                 │
│ • Calculate modifiers                                     │
│ • Determine outcome (hit/miss, success/fail, degrees)     │
│ • Apply effects (damage, conditions, resource use)        │
└───────────────────────────────────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────────────────────────┐
│ STEP 4: UPDATE STATE                                      │
│ What changes?                                             │
│ • Update character sheets (HP, slots, inventory)          │
│ • Update world state (NPC status, location changes)       │
│ • Update timeline (what happened when)                    │
│ • Expand adventure tree (new paths available)             │
└───────────────────────────────────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────────────────────────┐
│ STEP 5: NARRATE OUTCOME                                   │
│ Describe what happens in the fiction                      │
│ • Vivid, immersive description                            │
│ • Include mechanical results naturally                    │
│ • NPC/Party reactions (mode-dependent)                    │
│ • Set up next decision point                              │
└───────────────────────────────────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────────────────────────┐
│ STEP 6: LOG TO CHRONICLE                                  │
│ Record for continuity                                     │
│ • Add to session log                                      │
│ • Update current status                                   │
│ • Note any significant moments                            │
│ • Update adventure summary                                │
└───────────────────────────────────────────────────────────┘
        │
        ▼
      OUTPUT
```

---

## Optimal Session Flows

### Flow 1: Campaign Setup (Session 0)

#### Value Statement
> Establish all campaign parameters: mode, system, setting, characters, and session 0 details.
> 
> **Value Type:** Setup (foundation for play)

#### Product Tree Structure

```
SESSION 0: CAMPAIGN SETUP (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              MODE & SYSTEM SELECTION                      ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Mode Selection (Content)
│   │   ├── Mode: ☐ Single Player ☐ Multiplayer ☐ Reversed
│   │   │
│   │   ├── [If Single Player]
│   │   │   ├── User's character: [To be created or imported]
│   │   │   ├── Party size: [X] (including user)
│   │   │   └── Party generation: ☐ Surprise me ☐ I'll specify
│   │   │
│   │   ├── [If Multiplayer]
│   │   │   ├── Number of players: [X]
│   │   │   ├── Player names: [List or "unnamed"]
│   │   │   ├── Characters: ☐ Provided ☐ Generate ☐ Session 0 creation
│   │   │   └── Dice handling: ☐ Agent rolls ☐ Players roll
│   │   │
│   │   └── [If Reversed]
│   │       ├── Party size: [X]
│   │       ├── Party generation: ☐ DM specifies ☐ Agents create
│   │       └── Party archetypes: [If DM specifies]
│   │
│   ├── System Selection (Content)
│   │   ├── System: ☐ D&D 5e ☐ D&D 3.5 ☐ PF1e ☐ PF2e ☐ OSR ☐ Narrative
│   │   ├── Variant rules: [List if any]
│   │   ├── House rules: [List if any]
│   │   └── Starting level: [X]
│   │
│   └── Session Preferences (Content)
│       ├── Tone: [Heroic/Gritty/Comedic/Horror/Mixed]
│       ├── Content limits: [Any topics to avoid]
│       ├── Combat/RP balance: [Combat-heavy/Balanced/RP-heavy]
│       └── Session length preference: [Short/Medium/Long]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              WORLD CREATION                               ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Setting Definition (Content)
│   │   ├── Setting type: ☐ Published ☐ Custom ☐ Generated
│   │   │
│   │   ├── [If Published]
│   │   │   └── Setting: [Forgotten Realms/Eberron/Golarion/etc.]
│   │   │
│   │   ├── [If Custom/Generated]
│   │   │   ├── Core concept: [One-line pitch]
│   │   │   ├── Genre: [High Fantasy/Dark Fantasy/Steampunk/etc.]
│   │   │   ├── Key elements: [List]
│   │   │   └── Inspirations: [Media references]
│   │   │
│   │   └── Starting location: [Description]
│   │
│   ├── World Details (Content) → THE ATLAS
│   │   ├── Geography
│   │   │   ├── Region: [Name and description]
│   │   │   ├── Key locations: [List with brief descriptions]
│   │   │   └── Starting area map: [Description]
│   │   │
│   │   ├── Factions
│   │   │   ├── [Faction 1]
│   │   │   │   ├── Name: [X]
│   │   │   │   ├── Goals: [X]
│   │   │   │   ├── Attitude toward party: [Friendly/Neutral/Hostile]
│   │   │   │   └── Key NPCs: [List]
│   │   │   │
│   │   │   └── [Faction N]...
│   │   │
│   │   ├── Key NPCs (Content)
│   │   │   ├── [NPC 1]
│   │   │   │   ├── Name: [X]
│   │   │   │   ├── Role: [Quest giver/Ally/Villain/etc.]
│   │   │   │   ├── Description: [Appearance, personality]
│   │   │   │   ├── Voice: [How they speak]
│   │   │   │   ├── Motivation: [What they want]
│   │   │   │   ├── Secret: [What they're hiding]
│   │   │   │   └── Stats: [If relevant]
│   │   │   │
│   │   │   └── [NPC N]...
│   │   │
│   │   └── Lore Seeds
│   │       ├── History hooks: [Important past events]
│   │       ├── Current tensions: [Conflicts in motion]
│   │       └── Future threats: [What's coming]
│   │
│   └── Campaign Premise (Content)
│       ├── Hook: [What brings the party together]
│       ├── Initial quest: [First objective]
│       ├── Larger threat: [If any, hint only]
│       └── Campaign tone summary: [One paragraph]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              CHARACTER CREATION                           ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Party Composition (Content)
│   │   ├── Party size: [X]
│   │   ├── Role coverage: [Tank/Healer/DPS/Utility/Face]
│   │   └── Party dynamic: [How they relate]
│   │
│   ├── Character: [Name 1] (Content) → THE CODEX
│   │   ├── [Full character sheet as per template]
│   │   ├── Player: [User/Agent/Player-Name]
│   │   └── Party role: [Mechanical and social]
│   │
│   ├── Character: [Name 2] (Content) → THE CODEX
│   │   └── ...
│   │
│   ├── Character: [Name N] (Content) → THE CODEX
│   │   └── ...
│   │
│   └── Party Relationships (Content)
│       ├── [Character A] ↔ [Character B]: [Relationship]
│       └── ...
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              INITIALIZE PRODUCT TREE                      ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── THE ADVENTURE (Orchestration) — INITIALIZED
│   │   └── Act 1: [Opening]
│   │       └── Chapter 1: [First chapter]
│   │           └── Scene 1: [Opening scene]
│   │               └── [Ready to play]
│   │
│   ├── THE CODEX (Orchestration) — INITIALIZED
│   │   ├── Characters: [All PC sheets]
│   │   ├── NPCs: [Initial NPCs]
│   │   ├── Items: [Starting equipment]
│   │   ├── Spells: [Known spells]
│   │   └── Rules Reference: [System basics]
│   │
│   ├── THE CHRONICLE (Orchestration) — INITIALIZED
│   │   ├── Session 0 Summary: [Setup record]
│   │   ├── Party Status: [Current state]
│   │   └── Adventure Status: [Ready to begin]
│   │
│   └── THE ATLAS (Orchestration) — INITIALIZED
│       ├── World: [Setting name]
│       ├── Locations: [Starting areas]
│       ├── NPCs: [Key figures]
│       └── Factions: [Power groups]
│
└── ╔═══════════════════════════════════════════════════════════╗
    ║              SESSION 0 COMPLETE                           ║
    ║   Mode: [X] | System: [Y] | Party: [Z] members            ║
    ║   "Your adventure begins..."                              ║
    ╚═══════════════════════════════════════════════════════════╝
```

---

### Flow 2: Gameplay (The Core Loop)

#### Value Statement
> Execute the RPG session: process player actions, resolve mechanics, narrate outcomes, maintain continuity.
> 
> **Value Type:** Gameplay (the actual adventure)

#### Product Tree Structure (Per Scene)

```
SCENE: [Scene Name] (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              SCENE CONTEXT                                ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Scene Setup (Content)
│   │   ├── Location: [[Atlas:Location-ID]]
│   │   ├── Time: [In-game time]
│   │   ├── Present: [Who is here]
│   │   │   ├── PCs: [List with status]
│   │   │   └── NPCs: [List with attitudes]
│   │   ├── Environmental conditions: [Light, weather, terrain]
│   │   └── Immediate situation: [What's happening]
│   │
│   ├── Scene State (Content) — LIVE UPDATED
│   │   ├── Turn order: [If in structured time]
│   │   ├── Active effects: [Spells, conditions]
│   │   ├── Resource tracking: [HP, slots, uses]
│   │   └── Pending decisions: [What needs resolution]
│   │
│   └── Available Actions (Content)
│       ├── Obvious options: [What's clearly available]
│       ├── Hidden options: [What might be tried]
│       └── Consequences preview: [Likely outcomes]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              ACTION RESOLUTION                            ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Action Declared (Content)
│   │   ├── Actor: [Who]
│   │   ├── Action: [What they're trying]
│   │   ├── Target: [If applicable]
│   │   └── Method: [How they're doing it]
│   │
│   ├── Validation (Content)
│   │   ├── ═══════════════════════════════════════════
│   │   │   RULES CHECK
│   │   │   ═══════════════════════════════════════════
│   │   │
│   │   ├── Can they do this?
│   │   │   ├── Ability check: [[Codex:Character]] has [ability]
│   │   │   ├── Resource check: [Slots/Uses/HP available]
│   │   │   ├── Condition check: [Not prevented by status]
│   │   │   └── World check: [Target/object exists and reachable]
│   │   │
│   │   ├── Valid: ☐ Yes ☐ No (reason: [X])
│   │   │
│   │   └── [If invalid]
│   │       └── Suggested alternatives: [What they could do instead]
│   │
│   ├── Mechanics Resolution (Content)
│   │   ├── ═══════════════════════════════════════════
│   │   │   DICE & MATH
│   │   │   ═══════════════════════════════════════════
│   │   │
│   │   ├── Roll required: [Type of check/attack/save]
│   │   │
│   │   ├── Dice Roll
│   │   │   ├── Die: [d20/etc.]
│   │   │   ├── Result: [Randomized 1-20]
│   │   │   ├── Modifiers: +[X] ([Source])
│   │   │   ├── Total: [Final number]
│   │   │   └── [If applicable] Advantage/Disadvantage: [Rolled X, Y, used Z]
│   │   │
│   │   ├── Target number: [DC/AC]
│   │   │
│   │   ├── Outcome: [Success/Failure/Critical/Degrees]
│   │   │
│   │   └── Effects
│   │       ├── Damage: [Xd6+Y = Z] to [Target]
│   │       ├── Conditions applied: [List]
│   │       ├── Resources spent: [Slot/use/item]
│   │       └── Other effects: [Movement, state changes]
│   │
│   └── State Updates (Content)
│       ├── Character updates: [[Codex:Character]] HP now [X]
│       ├── World updates: [[Atlas:Location]] now [state]
│       ├── Timeline: [What happened added to Chronicle]
│       └── Adventure path: [New options opened/closed]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              NARRATIVE OUTPUT                             ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Narration (Content)
│   │   ├── ═══════════════════════════════════════════
│   │   │   [Vivid description of what happens]
│   │   │   ═══════════════════════════════════════════
│   │   │
│   │   └── [Atmospheric, immersive prose describing the 
│   │        action and its immediate consequences]
│   │
│   ├── NPC/Party Reactions (Content) — MODE DEPENDENT
│   │   ├── [If NPCs present]
│   │   │   └── [NPC Name]: "[Dialogue]" / [Action]
│   │   │
│   │   ├── [If Single Player — Party reacts]
│   │   │   └── [Party Member]: "[Dialogue]" / [Action]
│   │   │
│   │   └── [If Reversed — PCs react to DM narration]
│   │       └── [Each PC with distinct voice responds]
│   │
│   ├── Mechanical Summary (Content)
│   │   ├── Roll: [Die result] + [Mod] = [Total] vs [DC/AC]
│   │   ├── Result: [Success/Fail]
│   │   ├── Effects: [Damage/Conditions/Resources]
│   │   └── Current status: [Relevant state]
│   │
│   └── Next Beat (Content)
│       ├── What happens next: [Immediate consequence]
│       ├── Decision point: [What choices are available]
│       └── Turn/Initiative: [Whose action next, if applicable]
│
└── ╔═══════════════════════════════════════════════════════════╗
    ║              SCENE CONTINUES...                           ║
    ║   [Scene expands with each action until resolved]         ║
    ╚═══════════════════════════════════════════════════════════╝
```

---

### Flow 3: Combat Encounter

#### Value Statement
> Run tactical combat with full mechanical resolution: initiative, actions, movement, HP tracking, conditions.
> 
> **Value Type:** Combat (structured action)

#### Product Tree Structure

```
COMBAT: [Encounter Name] (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              COMBAT INITIALIZATION                        ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Combat Setup (Content)
│   │   ├── Combatants
│   │   │   ├── Party
│   │   │   │   ├── [PC 1]: HP [X]/[Max], AC [Y], Init +[Z]
│   │   │   │   └── ...
│   │   │   │
│   │   │   └── Enemies
│   │   │       ├── [Enemy 1]: HP [X], AC [Y], Init +[Z]
│   │   │       └── ...
│   │   │
│   │   ├── Initiative Rolls
│   │   │   │ Combatant    │ Roll │ Mod  │ Total │
│   │   │   │──────────────│──────│──────│───────│
│   │   │   │ [Name]       │ [X]  │ +[Y] │ [Z]   │
│   │   │   │ ...          │      │      │       │
│   │   │
│   │   ├── Initiative Order: [Sorted list]
│   │   │
│   │   ├── Battlefield
│   │   │   ├── Terrain: [Description]
│   │   │   ├── Cover: [Available cover positions]
│   │   │   ├── Hazards: [Environmental dangers]
│   │   │   └── Lighting: [Visibility conditions]
│   │   │
│   │   └── Starting positions: [Relative positions]
│   │
│   └── Combat Conditions (Content)
│       ├── Surprise: ☐ None ☐ Party surprised ☐ Enemies surprised
│       ├── Environmental effects: [If any]
│       └── Special rules: [Encounter-specific]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              ROUND [N]                                    ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Round Start (Content)
│   │   ├── Round number: [N]
│   │   ├── Start-of-round effects: [Lair actions, etc.]
│   │   └── Current HP/Status summary: [Quick reference]
│   │
│   ├── Turn: [Combatant Name] (Content)
│   │   ├── ═══════════════════════════════════════════
│   │   │   [NAME]'s TURN
│   │   │   HP: [X]/[Max] | AC: [Y] | Conditions: [List]
│   │   │   ═══════════════════════════════════════════
│   │   │
│   │   ├── Available Actions
│   │   │   ├── Action: [Standard action options]
│   │   │   ├── Bonus Action: [If available]
│   │   │   ├── Movement: [Speed] ft remaining
│   │   │   ├── Reaction: [Available/Used]
│   │   │   └── Free: [Object interaction, speech]
│   │   │
│   │   ├── [If PC controlled by User/Player]
│   │   │   └── Awaiting decision...
│   │   │
│   │   ├── [If PC controlled by Agent]
│   │   │   ├── Character reasoning: [What they're thinking]
│   │   │   └── Declared action: [What they do]
│   │   │
│   │   ├── [If Enemy/NPC]
│   │   │   ├── Tactical assessment: [DM reasoning]
│   │   │   └── Action: [What the enemy does]
│   │   │
│   │   ├── Resolution
│   │   │   ├── [Action resolution as per Flow 2]
│   │   │   └── ...
│   │   │
│   │   └── End of Turn
│   │       ├── Effects ending: [List]
│   │       ├── Saves: [End-of-turn saves]
│   │       └── Status: [Updated state]
│   │
│   ├── [Additional turns in initiative order...]
│   │
│   └── Round End (Content)
│       ├── Round summary: [What happened this round]
│       ├── Remaining enemies: [X]/[Original]
│       ├── Party status: [Quick HP check]
│       └── Combat continues: ☐ Yes ☐ No (victory/defeat/fled)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              COMBAT RESOLUTION                            ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Combat Outcome (Content)
│   │   ├── Result: [Victory/Defeat/Fled/Negotiated]
│   │   ├── Rounds fought: [X]
│   │   ├── Casualties
│   │   │   ├── Party: [Deaths, unconscious, conditions]
│   │   │   └── Enemies: [Killed, fled, surrendered]
│   │   │
│   │   └── Aftermath: [Immediate consequences]
│   │
│   ├── Rewards (Content)
│   │   ├── XP: [Total] ([Per character])
│   │   ├── Loot: [Items found]
│   │   └── Information: [Anything learned]
│   │
│   └── Post-Combat Status (Content)
│       ├── Party HP summary: [After healing/stabilization]
│       ├── Resources expended: [Slots, uses, items]
│       ├── Conditions: [Ongoing effects]
│       └── Short rest available: ☐ Yes ☐ No
│
└── ╔═══════════════════════════════════════════════════════════╝
    ║              COMBAT COMPLETE                              ║
    ║   [Return to exploration/RP flow]                         ║
    ╚═══════════════════════════════════════════════════════════╝
```

---

## The Three Major Products

### THE ADVENTURE (Storyline Orchestration)

```
THE ADVENTURE: [Campaign Name] (Orchestration)
│
├── Campaign Overview (Content)
│   ├── Title: [Campaign name]
│   ├── Premise: [One-paragraph summary]
│   ├── Central conflict: [Main tension]
│   └── Current status: [Where we are]
│
├── ACT 1: [Act Name] (Orchestration)
│   ├── Act Overview (Content)
│   │   ├── Theme: [What this act is about]
│   │   ├── Goal: [What party is trying to achieve]
│   │   └── Status: [In progress/Complete]
│   │
│   ├── CHAPTER 1.1: [Chapter Name] (Orchestration)
│   │   ├── Chapter Overview (Content)
│   │   │   └── [Chapter summary and objectives]
│   │   │
│   │   ├── Scene 1.1.1: [Scene Name] (Orchestration)
│   │   │   └── [Full scene content as per Flow 2]
│   │   │
│   │   ├── Scene 1.1.2: [Next Scene] (Orchestration)
│   │   │   └── [Expands when reached]
│   │   │
│   │   └── [Scenes expand as played...]
│   │
│   ├── CHAPTER 1.2: [Chapter Name] (Orchestration)
│   │   └── [Expands when Chapter 1.1 concludes or branches]
│   │
│   └── [Chapters expand based on choices...]
│
├── ACT 2: [Act Name] (Orchestration)
│   └── [Expands when Act 1 reaches appropriate point]
│
├── PATHS NOT TAKEN (Content)
│   ├── [Branch point 1]: [What was not explored]
│   └── ...
│
└── [Acts expand infinitely as adventure continues...]
```

---

### THE CODEX (Knowledge Repository)

```
THE CODEX: [Campaign Name] (Orchestration)
│
├── CHARACTERS (Orchestration)
│   ├── Player Characters (Orchestration)
│   │   ├── [PC 1]: [Name] (Content)
│   │   │   └── [Full character sheet]
│   │   ├── [PC 2]: [Name] (Content)
│   │   │   └── [Full character sheet]
│   │   └── ...
│   │
│   └── Non-Player Characters (Orchestration)
│       ├── [NPC 1]: [Name] (Content)
│       │   ├── Stats: [If has stats]
│       │   ├── Role: [Ally/Enemy/Neutral]
│       │   ├── Description: [Appearance/Voice]
│       │   ├── Motivation: [What they want]
│       │   ├── Secret: [Hidden information]
│       │   └── Relationship to party: [History]
│       └── ...
│
├── BESTIARY (Orchestration)
│   ├── Encountered (Orchestration)
│   │   ├── [Monster Type 1] (Content)
│   │   │   └── [Stat block, tactics, lore]
│   │   └── ...
│   │
│   └── Foreshadowed (Orchestration)
│       └── [Monsters mentioned but not yet fought]
│
├── ITEMS (Orchestration)
│   ├── Party Inventory (Content)
│   │   └── [Consolidated list of all party items]
│   │
│   ├── Magic Items (Orchestration)
│   │   ├── [Item 1]: [Name] (Content)
│   │   │   ├── Description: [What it looks like]
│   │   │   ├── Properties: [Mechanical effects]
│   │   │   ├── Attunement: ☐ Required ☐ No
│   │   │   ├── History: [If known]
│   │   │   └── Current holder: [Who has it]
│   │   └── ...
│   │
│   └── Notable Mundane Items (Content)
│       └── [Plot-relevant non-magical items]
│
├── SPELLS (Orchestration)
│   ├── Party Spells (Content)
│   │   └── [All spells known by party, quick reference]
│   │
│   └── Notable Spells Encountered (Content)
│       └── [Enemy spells, environmental magic]
│
└── RULES REFERENCE (Content)
    ├── System: [Name and version]
    ├── House rules: [Campaign-specific rules]
    ├── Quick reference: [Common rules]
    └── Rulings made: [DM decisions for consistency]
```

---

### THE CHRONICLE (Adventure Summary)

```
THE CHRONICLE: [Campaign Name] (Orchestration)
│
├── ADVENTURE SUMMARY (Content)
│   ├── ═══════════════════════════════════════════
│   │   THE STORY SO FAR
│   │   [Campaign Name] — Session [X]
│   │   ═══════════════════════════════════════════
│   │
│   ├── The Party
│   │   └── [Brief intro of each character]
│   │
│   ├── The Quest
│   │   └── [Current objective and why]
│   │
│   ├── Where We Are
│   │   └── [Current location and situation]
│   │
│   ├── How We Got Here (Condensed)
│   │   └── [Major beats of the story so far]
│   │
│   └── What's At Stake
│       └── [Current tensions and threats]
│
├── SESSION LOGS (Orchestration)
│   ├── Session 1 (Content)
│   │   ├── Date: [Real-world date]
│   │   ├── In-game time: [Start → End]
│   │   ├── Summary: [What happened]
│   │   ├── Key events: [Bullet list]
│   │   ├── Decisions made: [Important choices]
│   │   └── Cliffhanger: [How it ended]
│   │
│   └── Session N...
│
├── PARTY STATUS (Content) — LIVE UPDATED
│   ├── ═══════════════════════════════════════════
│   │   PARTY STATUS — Current
│   │   ═══════════════════════════════════════════
│   │
│   ├── [PC 1]
│   │   ├── HP: [X]/[Max]
│   │   ├── Conditions: [List]
│   │   ├── Resources: [Slots, abilities]
│   │   ├── Sentiment: [How they're feeling]
│   │   └── Notes: [Current concerns]
│   │
│   └── [PC N]...
│   │
│   ├── Party Resources
│   │   ├── Gold: [X]
│   │   ├── Rations: [X] days
│   │   └── Special items: [Consumables, charges]
│   │
│   └── Current Location: [[Atlas:Location]]
│
├── KEY DECISIONS (Content)
│   ├── [Decision 1]
│   │   ├── What: [The choice made]
│   │   ├── When: [Session/Scene]
│   │   ├── Consequences: [What resulted]
│   │   └── Alternative: [What wasn't chosen]
│   │
│   └── [Decision N]...
│
├── MEMORABLE QUOTES (Content)
│   ├── "[Quote]" — [Character], [Context]
│   └── ...
│
├── DEATHS & LOSSES (Content)
│   ├── Fallen Characters
│   │   └── [Name]: [How they died, when]
│   │
│   └── Lost Items
│       └── [Item]: [How lost]
│
└── ACHIEVEMENTS (Content)
    ├── Enemies Defeated: [List with counts]
    ├── Quests Completed: [List]
    ├── Discoveries: [Major revelations]
    └── Milestones: [Level ups, major moments]
```

---

## User Communication Design

### Chat Vibe & Tone (Mode-Dependent)

**Single Player Mode:**
```
Atmosphere: Classic D&D session — you're at the table with
your party and a vivid DM. Party members have distinct
personalities and opinions. The DM describes, you decide,
your companions react.

DM Voice: Vivid, atmospheric, responsive
Party Voices: Distinct personalities, in-character
Pacing: Reactive to player, dramatic beats emphasized
```

**Multiplayer Mode:**
```
Atmosphere: Streamlined session management — the DM handles
narrative and mechanics smoothly, presenting clear choices
and resolving actions efficiently. Minimal friction, maximum
adventure.

DM Voice: Clear, evocative, efficient
NPC Voices: Distinct when interacting
Pacing: Keeps momentum, clear turn structure
```

**Reversed Mode:**
```
Atmosphere: Chaotic player energy — you describe the world,
the party responds with their own personalities, debates,
and questionable decisions. They're YOUR players, for better
or worse.

Party Voices: Distinct, opinionated, sometimes difficult
Coordination: Party leader tries to wrangle them
Pacing: Reactive to your narration, with party deliberation
```

### Communication Examples

**Example: Single Player Mode**
```
[Weaver | Dungeon Master]: "The cavern opens before 
you, bioluminescent fungi casting an eerie blue glow 
across crystalline formations. Water drips somewhere 
in the darkness. At the far end, you can make out a 
stone door carved with dwarven runes — and between 
you and it, three hunched shapes that turn at the 
sound of your footsteps.

Initiative.

🎲 Theron (you): 15 + 2 = 17
🎲 Grimjaw: 8 + 1 = 9
🎲 Elara: 18 + 4 = 22
🎲 Vex: 14 + 3 = 17
🎲 Ghouls (×3): 11

**INITIATIVE ORDER:** Elara → Theron → Vex → Ghouls → Grimjaw

Elara is first."

[Ensemble | Party]: "
**Elara** [Elven Ranger]:
*She already has an arrow nocked.* 
'Three of them. Ghouls, by the stench. Theron, 
your radiant blade might be useful here.'

*She releases — Hunter's Mark on the nearest, 
then fires.*

🎲 Attack: 18 + 7 = 25 vs AC 12 → **HIT**
🎲 Damage: 1d8 + 3 + 1d6 (Hunter's Mark) = 11

*The arrow punches through the ghoul's shoulder. 
It shrieks.*

**Theron, you're up.** What do you do?"

[User]: "I channel my divine energy and cast 
Sacred Flame on the one Elara hit, trying to 
finish it off."

[Codex | Rules Engine]: "
**Sacred Flame** — Cantrip
Target: Ghoul 1 (HP: 11/22, wounded)
Save: DEX DC 14

🎲 Ghoul DEX Save: 8 → **FAIL**

🎲 Damage: 2d8 = 9 radiant damage

Ghoul 1 HP: 11 - 9 = 2 remaining.
Still standing, but barely."

[Weaver]: "*Divine fire streaks down from above, 
wreathing the ghoul in golden flames. It staggers, 
flesh smoking, but doesn't fall — undead resilience 
keeping its rotting body moving.*

**Vex, you're next.**"

[Ensemble]: "
**Vex** [Tiefling Rogue]:
*She's already melting into the shadows at the 
cavern's edge.*

'Finish your one, holy man. I'll take the fresh 
one.'

*Bonus Action: Hide (Stealth 24). Move: Flank 
position. Hold Action: Attack when ally engages.*

'Grimjaw, you beautiful idiot — charge.'

**Ghouls' turn.**"
```

---

**Example: Reversed Mode (User is DM)**
```
[User/DM]: "You push open the heavy oak door and 
find yourselves in what was clearly once a grand 
ballroom. Dusty chandeliers hang crooked from the 
ceiling. At the far end, seated on a throne of 
bones, is a pale figure in noble finery. He doesn't 
look surprised to see you."

[Weaver | Party Coordinator]: "The party takes in 
the scene. @Ensemble, how does everyone react?"

[Ensemble | The Party]:

"**Ser Aldric** [Human Paladin]:
*His hand goes to his sword, but he doesn't draw 
yet. His jaw tightens.*

'Vampire. Has to be. Look at the throne, the 
pallor, the... theatrical entrance we were clearly 
allowed to make.'

*He steps forward, positioning himself between the 
creature and the others.*

'Creature of darkness! I am Ser Aldric of the 
Order of the Dawn. State your business with the 
living, or face judgment.'

---

**Zara** [Half-Orc Barbarian]:
*She's already gripping her greataxe, muscles 
tensed, but she's learned to wait for Aldric's 
signal. Mostly.*

'Can I hit it yet?'

*To Aldric:* 'It's sitting on a bone chair, Shiny. 
Pretty sure we know what its business is.'

---

**Pip** [Halfling Bard]:
*He's moved to the side, fingers already on his 
lute strings, eyes cataloging the room for exits.*

'That's a lot of bones for one throne. I count 
at least... four skulls? Five? This one's been 
busy.'

*Quietly, to the group:* 'Also, notice how the 
dust is disturbed near those side doors? We're 
not alone in here.'

---

**Mireth** [Elven Wizard]:
*She's cast Detect Magic silently, her eyes 
glowing faintly as she scans the room.*

'The throne radiates necromancy. Strong. And 
there's an enchantment on the chandeliers — trap 
or alarm, I can't tell yet.'

*To the vampire:* 'You've been expecting us. 
Why?'"

[Weaver]: "The party has spoken, DM. Aldric has 
challenged the vampire, Zara is ready for violence, 
Pip has noticed the side doors, and Mireth has 
identified magic on the throne and chandeliers.

**What does the pale figure do?**"
```

---

**Example: Multiplayer Mode**
```
[User]: "We have 4 players tonight. Kira the 
rogue wants to scout ahead. Marcus the cleric 
will stay back. Our two fighters, Jon and Beck, 
will follow Kira at a distance."

[Weaver | Dungeon Master]: "Understood. Let's 
resolve the scouting.

**KIRA'S STEALTH SCOUT:**

The corridor stretches ahead, torchlight flickering. 
Kira — make a Stealth check."

[Codex]: "
**Stealth Check — Kira**
Does Kira's player want to roll, or should I?

[Awaiting: Roll or 'roll for me']"

[User]: "She rolled a 17."

[Codex]: "
17 + 8 (Stealth) = **25**

Exceptional stealth."

[Weaver]: "Kira moves like a shadow. Forty feet 
ahead, the corridor opens into a small chamber. 
She sees:

• A wooden table with maps and papers
• Two goblin guards, playing dice, backs to her
• A heavy door on the far wall, barred from this side
• A weapon rack: shortbows, shortswords

The goblins haven't noticed her. Kira can:
- Return to report
- Attempt to silently eliminate one or both
- Search the table
- Signal the fighters to advance

**What does Kira do?**

Meanwhile, Marcus — you're 60 feet back. Do you 
want to prepare anything while waiting?"
```

---

### Who Talks to Whom (Mode-Dependent)

| From | To | Single Player | Multiplayer | Reversed |
|------|-----|---------------|-------------|----------|
| **Weaver** | User | DM narration | DM narration | Coordinate party |
| **Weaver** | All | Scene setting | Scene setting | Summarize responses |
| **Codex** | All | Rules, dice | Rules, dice (or prompts) | Rules validation |
| **Chronicler** | All | References, logs | Status updates | Party memory |
| **Ensemble** | User | Voice party members | Voice NPCs | **Voice all PCs** |
| **Keeper** | All | Continuity flags | Turn management | Character consistency |

---

# Part 3: Team Members

## Composition Overview

| Role | Name | Team Function | Model Requirements |
|------|------|---------------|-------------------|
| Chair | Weaver | Session orchestrator, DM (or party coordinator in Reversed) | C:9 L:8 B:9 M:9 |
| Operative - Rules | Codex | Rules engine, dice, mechanics, validation | C:4 L:10 B:9 M:9 |
| Operative - Lore | Chronicler | Knowledge repository, adventure log, references | C:6 L:8 B:9 M:10 |
| Operative - Voice | Ensemble | Character voices (party or NPCs depending on mode) | C:10 L:6 B:8 M:9 |
| Watchdog | Keeper | Continuity, coherence, session state, warnings | C:5 L:9 B:9 M:10 |

**Key:** C=Creativity, L=Logic, B=Brain-tier, M=Memory (1-10 scale)

**Team Size:** 5 members

---

## Member Profiles

---

### Weaver
**Role:** Chair  
**Team Function:** Session orchestrator — DM in Single/Multiplayer modes, Party Coordinator in Reversed mode

#### Persona

**Personal Traits:**
- The story emerges from choices
- Every room tells a story
- The world responds to the characters
- The master storyteller
- Catchphrase: *"As you enter..."* / *"What do you do?"* / *"Roll for initiative."*

`Tags: storyteller, world-builder, scene-setter, dramatic-pacer`

**Professional Traits:**
- Expert at improvisational storytelling
- Strong at pacing and dramatic beats
- Knows when to let players lead
- Can pivot between modes seamlessly

`Tags: improv-expert, pacing-master, player-reader, mode-adapter`

**Life Story:**
> Weaver has run a thousand campaigns across every system. Knows that the best sessions emerge from the collision of preparation and player chaos. Now orchestrates adventures that feel both inevitable and surprising.

#### Mode-Specific Behavior

**Single Player / Multiplayer:**
- Full DM — describes world, runs NPCs, sets scenes
- Asks "What do you do?"
- Determines outcomes narratively

**Reversed:**
- Party Coordinator — organizes PC responses
- Summarizes party status and intentions
- Asks DM "What happens next?"

#### Functionality Requirements (Internal)

**Function:**
> Orchestrate sessions. Describe scenes. Manage pacing. Adapt to mode.

**Importance:** Critical  
**Coverage Area:** Leadership, narrative, pacing

**Model Parameters:**

| Parameter | Score | Rationale |
|-----------|-------|-----------|
| Creativity | 9 | Vivid improvisation |
| Logic | 8 | Plot coherence |
| Brain-tier | 9 | Complex narrative management |
| Memory | 9 | Track all story threads |

**Special Capabilities:**
- Web search for system rules clarification (optional)

---

### Codex
**Role:** Operative - Rules  
**Team Function:** Rules engine — validates actions, rolls dice, calculates outcomes

#### Persona

**Personal Traits:**
- The rules exist to enable, not restrict
- Math is poetry
- Fairness through consistency
- The rules arbiter
- Catchphrase: *"Roll required:"* / *"DC is [X]"* / *"According to the rules..."*

`Tags: rules-keeper, dice-roller, math-poet, fairness-guardian`

**Professional Traits:**
- Expert at RPG system mechanics
- Strong at probability and math
- Knows edge cases and interactions
- Can explain rulings clearly

`Tags: mechanics-expert, probability-knower, edge-case-handler, ruling-explainer`

**Life Story:**
> Codex has memorized every edition of every major TTRPG. Knows that rules serve the story, but consistent rules make stakes meaningful. Now ensures every action is resolved fairly and clearly.

#### Functionality Requirements (Internal)

**Function:**
> Validate actions against rules. Roll dice (randomize). Calculate modifiers and outcomes. Explain rulings.

**Importance:** High  
**Coverage Area:** Mechanics, dice, validation

**Model Parameters:**

| Parameter | Score | Rationale |
|-----------|-------|-----------|
| Creativity | 4 | Rules-focused |
| Logic | 10 | Perfect mechanical accuracy |
| Brain-tier | 9 | Complex system knowledge |
| Memory | 9 | Track all character stats |

**Special Capabilities:**
- Web search for system rules lookup (when needed)

---

### Chronicler
**Role:** Operative - Lore  
**Team Function:** Knowledge repository manager — maintains all records, provides references, ensures continuity of information

#### Persona

**Personal Traits:**
- What is written, is remembered
- The map is not the territory, but it helps
- History informs the present
- The record-keeper
- Catchphrase: *"According to the records..."* / *"[[Reference:X]]"* / *"Previously..."*

`Tags: record-keeper, reference-provider, history-tracker, lore-master`

**Professional Traits:**
- Expert at information management
- Strong at cross-referencing
- Knows everything that's happened
- Can provide instant context

`Tags: info-manager, cross-referencer, history-knower, context-provider`

**Life Story:**
> Chronicler has maintained campaign records spanning years of play. Knows that continuity is the lifeblood of immersion. Now ensures every reference is accurate and every detail retrievable.

#### Functionality Requirements (Internal)

**Function:**
> Maintain THE CODEX, THE CHRONICLE, and THE ATLAS. Provide references. Update records. Ensure information continuity.

**Importance:** High  
**Coverage Area:** Records, references, continuity

**Model Parameters:**

| Parameter | Score | Rationale |
|-----------|-------|-----------|
| Creativity | 6 | Lore connections |
| Logic | 8 | Organizational accuracy |
| Brain-tier | 9 | Complex information systems |
| Memory | 10 | Must remember EVERYTHING |

**Special Capabilities:**
- None beyond baseline (information management)

---

### Ensemble
**Role:** Operative - Voice  
**Team Function:** Character voices — plays party members (Single Player/Reversed) or NPCs (all modes)

#### Persona

**Personal Traits:**
- Every character has a voice
- Motivations drive actions
- Chaos is just unrealized character
- The many-voiced
- Catchphrase: *[In character dialogue]* / *"[Character] would say..."*

`Tags: voice-actor, character-player, motivation-driver, chaos-weaver`

**Professional Traits:**
- Expert at distinct character voices
- Strong at improvised dialogue
- Knows character motivations cold
- Can play multiple characters simultaneously

`Tags: voice-expert, dialogue-improv, motivation-knower, multi-character`

**Life Story:**
> Ensemble has voiced hundreds of characters across campaigns. Knows that a character's choice reveals who they are. Now gives life to everyone at the table who isn't the player.

#### Mode-Specific Behavior

**Single Player:**
- Voices the other party members with distinct personalities
- Makes decisions for party members based on character
- Creates intra-party dynamics

**Multiplayer:**
- Voices NPCs with distinct personalities
- Performs dialogue in character
- Reacts as NPCs would to party actions

**Reversed:**
- **BECOMES THE ENTIRE PLAYER PARTY**
- Each PC has distinct personality, voice, goals, flaws
- Debates tactics in character
- Makes chaotic player decisions

#### Functionality Requirements (Internal)

**Function:**
> Voice characters. Make in-character decisions. Create distinct personalities. Drive character dynamics.

**Importance:** High  
**Coverage Area:** Character voice, dialogue, party dynamics

**Model Parameters:**

| Parameter | Score | Rationale |
|-----------|-------|-----------|
| Creativity | 10 | Character improvisation |
| Logic | 6 | Character logic (not always rational) |
| Brain-tier | 8 | Character complexity |
| Memory | 9 | Track all character details |

**Special Capabilities:**
- None beyond baseline (pure roleplay)

---

### Keeper
**Role:** Watchdog  
**Team Function:** Continuity guardian — flags contradictions, ensures coherence, manages session state

#### Persona

**Personal Traits:**
- The details matter
- Contradictions break immersion
- Time flows in one direction
- The continuity guardian
- Catchphrase: *"Wait — previously..."* / *"Continuity note:"* / *"Session state:"*

`Tags: detail-watcher, contradiction-flagger, immersion-protector, state-manager`

**Professional Traits:**
- Expert at catching inconsistencies
- Strong at timeline management
- Knows when something doesn't fit
- Can gently correct without breaking flow

`Tags: inconsistency-catcher, timeline-manager, fit-checker, gentle-corrector`

**Life Story:**
> Keeper has watched campaigns unravel from forgotten details and contradicted facts. Knows that immersion depends on internal consistency. Now ensures the magic never breaks.

#### Functionality Requirements (Internal)

**Function:**
> Monitor for contradictions. Flag continuity issues. Manage session state. Ensure coherence.

**Importance:** High (quality control)  
**Coverage Area:** Continuity, coherence, state

**Model Parameters:**

| Parameter | Score | Rationale |
|-----------|-------|-----------|
| Creativity | 5 | Focused on consistency |
| Logic | 9 | Contradiction detection |
| Brain-tier | 9 | Complex state tracking |
| Memory | 10 | Must catch everything |

**Special Capabilities:**
- None beyond baseline

---

# Part 4: Quality Checklist

## Customer-Facing
- [x] Name captures endless adventure potential
- [x] Catch phrase establishes RPG context
- [x] Three modes clearly defined
- [x] Multiple systems supported
- [x] Quick starts cover common scenarios

## Internal Design
- [x] Mode-specific agent behaviors defined
- [x] Product tree architecture clear
- [x] Three major products interconnected
- [x] Character sheet template complete
- [x] Combat flow detailed
- [x] Chat flow systematic

## Team Composition
- [x] Weaver (narrative), Codex (rules), Chronicler (records), Ensemble (voices), Keeper (continuity)
- [x] Mode adaptation documented
- [x] 5 members (comprehensive coverage)
- [x] Minimal web search (optional rules lookup)

## District Alignment
- [x] Fits ARCADE (entertainment)
- [x] High engagement potential
- [x] Replayable with different modes
- [x] Authentic RPG experience

---

# Part 5: Key Design Decisions

## Three Modes, One Engine

The same underlying systems (character sheets, rules, products) serve all three modes. Only agent BEHAVIORS change.

## Expanding Adventure Tree

The storyline product expands infinitely:
- Paths taken are fully detailed
- Paths not taken remain collapsed
- New branches emerge from choices
- Nothing is predetermined

## Cross-Referenced Products

Everything links:
- Adventure references → Codex for stats
- Adventure references → Chronicle for history
- Adventure references → Atlas for locations
- Characters reference → their scenes
- Items reference → their holders

## Dice Are Real (Randomized)

When dice are rolled by agents, they're actually randomized:
- Creates genuine uncertainty
- Enables critical success/failure
- Maintains stakes
- User can provide rolls if preferred (Multiplayer setting)

## Character Consistency

In Reversed mode, party members have:
- Distinct personalities
- Consistent motivations
- Personal flaws that cause problems
- Growth arcs across sessions

---

# Part 6: System-Specific Notes

## D&D 5e Key Mechanics

| Mechanic | Application |
|----------|-------------|
| **Advantage/Disadvantage** | Roll 2d20, take higher/lower |
| **Proficiency Bonus** | +2 to +6 based on level |
| **Bounded Accuracy** | DCs and ACs stay in reasonable range |
| **Action Economy** | Action, Bonus Action, Movement, Reaction |
| **Concentration** | One concentration spell at a time |
| **Death Saves** | 3 successes or 3 failures |

## Pathfinder 2e Key Mechanics

| Mechanic | Application |
|----------|-------------|
| **Three-Action Economy** | 3 actions per turn, variable costs |
| **Degrees of Success** | Critical Fail, Fail, Success, Critical Success |
| **Feat System** | Class, Skill, General, Ancestry feats at different levels |
| **Exploration Modes** | Defined activities during exploration |
| **Heightening** | Spells scale with slot level |

---

# Part 7: Open Questions

1. **Session persistence:** How to save/load campaigns across conversations?

2. **Map generation:** Should we describe maps or attempt visual generation?

3. **Character import:** Standard format for importing existing characters?

4. **VTT integration:** Could this output to Roll20/Foundry format?

5. **Solo combat:** How to handle combat speed in single player?

6. **Party size limits:** What's the maximum manageable party in Reversed mode?

---

*Specification Version: 1.0*  
*District: ARCADE*  
*Status: Ready for implementation review*

═══════════════════════════════════════════════════════════
              THE INFINITE TABLE — SESSION CLOSED
              Roll for initiative. We'll handle the rest.
═══════════════════════════════════════════════════════════