# The Map Pattern: Comprehensive Guide

## Executive Summary

The Map Pattern maintains a navigable index of complex product structures. As trees grow deep and wide, the map provides orientation—what exists, where it is, what's missing, and how to get there. The map is a meta-product that tracks other products.

**Core insight:** Complex structures become unusable without navigation. The map is the navigation layer that makes depth and breadth manageable.

---

## The Problem It Solves

```
WITHOUT MAP:                              WITH MAP:

"Alternate History" (Orchestration)       "Map: Alternate History" (Content)
├── ??? (something about military)        ┌─────────────────────────────────┐
├── ??? (was there an economics one?)     │ STRUCTURE OVERVIEW:             │
├── ??? (where was that Napoleon bit?)    │                                 │
│   └── ??? (nested stuff...)             │ ├── Military [3 branches]       │
└── ??? (how deep does this go?)          │ │   ├── European [[p:m1]]       │
                                          │ │   ├── Colonial [[p:m2]]       │
After 10 rounds, no one knows             │ │   └── Naval [[p:m3]]          │
what exists or where.                     │ ├── Economics [2 branches]      │
                                          │ │   ├── Trade [[p:e1]]          │
                                          │ │   └── Currency [[p:e2]]       │
                                          │ └── Political [expanding...]    │
                                          │     └── → See: [[p:political-map]]
                                          │                                 │
                                          │ RECENT: Added Naval branch      │
                                          │ GAPS: Cultural effects unexplored│
                                          └─────────────────────────────────┘
```

---

## Core Mechanics

### The Map Product

A Content product that serves as index/navigation:

```
"Map: [Domain]" (Content)
├── Structure outline (what exists, with [[p:id]] links)
├── Recent changes (what was just added/modified)
├── Gaps/todos (what's missing or needs work)
└── Navigation notes (how to traverse)
```

### Inline Updates

Chair updates map AS products change—not as separate step:

```
Chair's Plan & Assign:
1. tree_operations: ADD "Naval Consequences" under Military
2. chair_versions: Update "Map: Alternate History" to include new branch
   
These happen TOGETHER, not separately.
```

### Pinned Map Context

Pin critical map sections for constant Chair visibility:

```
Pinned to Chair:
"MAP CURRENT: 
 - Military: 3 branches (complete)
 - Economics: 2 branches (expanding)
 - Political: 1 branch (just started)
 - Cultural: NOT STARTED ← gap
 
 Last: Added Naval. Next: Colonial implications?"
```

### Nested Maps

When a branch becomes complex, it gets its own map:

```
"Map: Alternate History" (Content) — top-level
├── Overview of all domains
├── Links to sub-maps:
│   └── "For Military details: [[p:military-map]]"
│   └── "For Political details: [[p:political-map]]"
└── Cross-domain connections

"Map: Military Domain" (Content) — sub-map
├── Detailed military branch structure
├── All military products with [[p:id]]
└── Military-specific gaps
```

---

## Map Types

### Structure Map

**Purpose:** What exists and where.

```
STRUCTURE MAP: Research Project
================================
Sources [6 total]
├── Primary [[p:s1]], [[p:s2]], [[p:s3]]
└── Secondary [[p:s4]], [[p:s5]], [[p:s6]]

Analysis [3 complete, 1 in progress]
├── Market Analysis [[p:a1]] ✓
├── Competitor Analysis [[p:a2]] ✓
├── Technical Analysis [[p:a3]] ✓
└── Risk Analysis [[p:a4]] ← in progress

Synthesis [not started]
└── (depends on Risk Analysis)
```

### State Map

**Purpose:** Current status and what's active.

```
STATE MAP: Dungeon Adventure
============================
CURRENT: Crypt Level 2, Room 4
PARTY: 3 alive, 1 poisoned
ACTIVE QUESTS: [[p:q1]], [[p:q3]]
INVENTORY: See [[p:inventory]]
KNOWN NPCS: 5 friendly, 2 hostile, 3 unknown

RECENT: 
- Defeated skeleton guard
- Found mysterious key
- Rogue took poison damage

IMMEDIATE OPTIONS:
- North door (locked—have key?)
- South passage (unexplored)
- Examine altar
```

### Progress Map

**Purpose:** What's done, what's next.

```
PROGRESS MAP: Book Project
==========================
COMPLETE:
├── Outline [[p:outline]] ✓
├── Chapter 1 [[p:ch1]] ✓
├── Chapter 2 [[p:ch2]] ✓
└── Chapter 3 [[p:ch3]] ✓

IN PROGRESS:
└── Chapter 4 [[p:ch4]] — 60% (climax scene)

UPCOMING:
├── Chapter 5 (resolution)
├── Chapter 6 (epilogue)
└── Final edit pass

BLOCKERS:
└── Need user input on ending choice
```

### Connection Map

**Purpose:** How things relate (for web structures).

```
CONNECTION MAP: Conspiracy
==========================
CENTRAL NODES (most connected):
├── Government Program [[p:t1]] — 6 connections
└── Missing Scientists [[p:e4]] — 5 connections

CLUSTERS:
├── Technology cluster: [[p:e1]], [[p:e3]], [[p:t2]]
├── Historical cluster: [[p:e2]], [[p:e5]], [[p:t3]]
└── Financial cluster: [[p:e6]], [[p:t4]]

BRIDGES (connect clusters):
└── [[p:e4]] connects Tech ↔ Historical

ISOLATED (need connections):
└── [[p:e7]] — only 1 connection, needs integration

UNEXPLORED:
└── International angle not yet developed
```

---

## Implementation Patterns

### Pattern: Create-and-Map

Every product creation includes map update:

```
Chair's Plan & Assign:

1. Create new product:
   tree_operations: [
     { "op": "ADD", "product": {...}, "parent_id": "..." }
   ]

2. Update map in same action:
   chair_versions: [
     { 
       "product_id": "map-main",
       "new_content": "[updated map with new product]"
     }
   ]

3. Optionally update pinned map summary:
   pin_update: "MAP CURRENT: [condensed version]"
```

### Pattern: Map-Guided Assignment

Use map to inform assignments:

```
Chair reviews pinned map:
  "GAPS: Cultural effects unexplored"

Chair's assignment:
  directive: "Explore cultural implications of the divergence.
              This connects to [[p:political-branch]]."
              
After work:
  Chair updates map: Cultural now has 2 branches
```

### Pattern: Nested Map Creation

When branch gets complex, spawn sub-map:

```
Trigger: Branch has >5 products OR >2 levels deep

Chair creates:
  "Map: [Branch Name]" (Content)
  
Chair updates parent map:
  "Military: [complex—see [[p:military-map]]]"
  
Sub-map contains:
  - Detailed structure of branch
  - Branch-specific gaps
  - Internal cross-references
```

### Pattern: Map Reconciliation

Periodically verify map matches reality:

```
Every N rounds (or on user request):

1. Chair traverses actual product tree
2. Compares to map
3. Fixes discrepancies:
   - Products not in map → add
   - Map entries without products → remove
   - Incorrect structure → fix
4. Notes: "Map reconciled Round N"
```

---

## Pinned Map Integration

### What to Pin

| Pin Content | When to Use | Update Frequency |
|-------------|-------------|------------------|
| **Structure summary** | Complex tree | On structural changes |
| **Current location** | Reactive/exploration | Every round |
| **Gaps list** | Active development | When gaps change |
| **Recent changes** | Fast-moving sessions | Every round |

### Pin Examples

**For Branching Exploration:**
```
PIN: "MAP STATUS
├── Explored: Military(3), Economic(2), Political(1)
├── Current: Expanding Political
├── Depth: Max 3 levels
├── Gap: Cultural not started
└── Total products: 23"
```

**For Knowledge Base:**
```
PIN: "KNOWLEDGE MAP
├── Processed: 12 sources
├── Pending: 3 in intake
├── Categories: HR(5), Finance(4), Legal(3)
├── Last: Added vacation policy
└── Gap: No IT policies yet"
```

**For Reactive World:**
```
PIN: "WORLD STATE
├── Location: Crypt L2 Room 4
├── Party: 3 healthy, 1 poisoned
├── Quests: 2 active
├── Key items: Mysterious key, Map fragment
└── Threat: Poison spreading (3 rounds)"
```

---

## Map for Specific Patterns

### With Branching Exploration

```
Map tracks:
- All branches at each level
- Expansion status (complete/expanding/unexplored)
- Cross-references between branches
- User-requested expansions queue

Pin shows:
- Current exploration focus
- Depth reached
- Major gaps
```

### With Conspiracy Web

```
Map tracks:
- All nodes with connection count
- Clusters and bridges
- Isolated nodes needing integration
- Connection density

Pin shows:
- Most connected nodes
- Recent connections made
- Unconnected evidence
```

### With Progressive Accumulation

```
Map tracks:
- Structure skeleton with completion status
- What's drafted vs reviewed vs final
- Cross-references between sections
- Outstanding issues

Pin shows:
- Overall progress
- Current work focus
- Blockers
```

### With Reactive World

```
Map tracks:
- World state (location, status, inventory)
- Known locations and connections
- Active quests and NPCs
- Timeline of events

Pin shows:
- Current state summary
- Immediate options
- Active threats/opportunities
```

---

## Map Schema

Suggested structure for map content:

```markdown
# Map: [Domain Name]

## Structure
[Tree or outline of products with [[p:id]] links]

## Status
- Complete: [list]
- In Progress: [list]  
- Planned: [list]

## Gaps
- [Unexplored areas]
- [Missing connections]
- [User requests pending]

## Recent Changes
- [Round N]: [what changed]
- [Round N-1]: [what changed]

## Navigation Notes
- [How to traverse]
- [Sub-maps: [[p:sub-map-1]], [[p:sub-map-2]]]
- [Key cross-references]

---
Last updated: Round [N]
```

---

## Anti-Patterns

### Map Neglect

**Wrong:** Create map at bootstrap, never update.
**Right:** Update map with EVERY structural change.

### Map Overload

**Wrong:** Map contains full product content.
**Right:** Map contains structure and links only. Content lives in products.

### Single Mega-Map

**Wrong:** One map for 50+ products, 5 levels deep.
**Right:** Nested maps—top-level overview, sub-maps for complex branches.

### Map-Only Navigation

**Wrong:** Users must always go through map.
**Right:** Map is OPTIONAL navigation aid. Direct [[p:id]] access still works.

### Stale Pins

**Wrong:** Pinned map summary from Round 2, now on Round 8.
**Right:** Update pinned summary when map changes.

---

## Teams with High Map Affinity

| Team | Map Type | Why Critical |
|------|----------|--------------|
| Alternate History Room | Structure + Progress | Branches multiply fast |
| Tin Foil Hat Society | Connection Map | Web needs navigation |
| Organization Core | Structure + State | Complex knowledge base |
| The Living Codex | Structure + Progress | Rules accumulate |
| Dungeon Party | State Map | World state is everything |
| The Publisher | Progress Map | Long-form needs tracking |
| Research Synthesis Lab | Structure + Connection | Sources and synthesis |
| The Personal University | Structure + Progress | Curriculum navigation |
| TTRPG Campaign Orchestrator | Structure + State | Campaign complexity |
| Any CORTEX team | Structure Map | Knowledge requires navigation |

---

## Summary

The Map Pattern provides:

1. **Orientation** — What exists and where
2. **Navigation** — How to get to things
3. **Awareness** — Current state at a glance
4. **Gap identification** — What's missing
5. **Progress tracking** — What's done vs pending

**Key mechanics:**
- Map as Content product (meta-product)
- Inline updates (map changes with structure)
- Nested maps (sub-maps for complex branches)
- Pinned summaries (constant Chair visibility)

**Formula:**
```
Structure grows → Map updated inline
Complexity increases → Spawn sub-map
Chair needs awareness → Pin map summary
User needs navigation → Present map
```

The map doesn't replace the structure—it makes the structure usable.