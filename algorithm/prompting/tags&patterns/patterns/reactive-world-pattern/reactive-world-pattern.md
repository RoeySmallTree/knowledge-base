# Pattern: Reactive World (User-Driven Narrative)

## The Insight
Some flows are USER → WORLD → USER → WORLD cycles where products represent WORLD STATE, not deliverables. The world reacts to user input, updates state, and awaits next input.

## The Dynamic

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

## Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **State Products** | World state stored in products (locations, characters, inventory) |
| **chair_versions** | Chair updates state after each cycle |
| **attach_context** | Reactive work gets relevant state attached |
| **Halt** | After each narrative output, halt for user input |
| **Session history** | Previous actions inform reactions |

## Product Structure

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

## Flow Per Cycle

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

## State Types

| State Type | What It Tracks | Update Frequency |
|------------|---------------|------------------|
| **Position** | Where entities are | Every move |
| **Condition** | Health, status, mood | When changed |
| **Inventory** | What's carried/available | On acquisition/use |
| **Relationships** | NPC attitudes, faction standing | On significant interaction |
| **Timeline** | In-world time, events | Continuously |
| **Knowledge** | What's been discovered | On discovery |

## What Makes It Work

1. **State products are ground truth** — Current state, not history
2. **chair_versions for updates** — State changes cleanly
3. **Session Log for history** — Can reference past actions
4. **Halt rhythm** — Input → Output → Input
5. **DM Notes for planning** — Chair has private space

## Applies To
- Dungeon Party
- Time Travel Tourism
- Interactive fiction teams
- Choose Your Own Adventure
- Simulation/sandbox teams
