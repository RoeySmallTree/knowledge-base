# Pattern: Branching Exploration (Infinite Depth)

## The Insight
Some structures want to EXPAND infinitely rather than converge on a deliverable. Each exploration spawns more exploration. The TREE is the content. Depth and variety over iteration and polish.

## The Dynamic

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

## Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **Orchestrations** | Each branch point is an Orchestration |
| **Collections** | Hold sibling branches |
| **tree_operations** | ADD creates new branches (never versions) |
| **attach_context** | Child branches get parent as context |
| **Navigation** | User can "zoom into" any branch |
| **Expansion** | Each round adds BREADTH and DEPTH |

## Product Structure

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

## Flow

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

## Branching Strategies

| Strategy | When to Use | Example |
|----------|-------------|---------|
| **Timeline** | Effects over time | Alternate History (immediate → decades) |
| **Domain** | Different affected areas | Conspiracy (political, economic, cultural) |
| **Perspective** | Different viewpoints | World-building (regions, factions) |
| **Causation** | Cause → Effect chains | Butterfly effect exploration |
| **Scale** | Macro → Micro | World → Region → City → Neighborhood |

## What Makes It Work

1. **Orchestrations as containers** — Every branch point can expand
2. **Never version, always add** — New exploration = new product
3. **Cross-references create web** — [[p:id]] links related branches
4. **User directs exploration** — "Go deeper on X"
5. **Index/navigation product** — Helps traverse the tree

## Applies To
- Alternate History Room
- Tin Foil Hat Society (conspiracy web)
- World-building teams
- What-If Scenario teams
- Knowledge exploration (learning paths)
