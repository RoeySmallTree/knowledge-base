# Pattern: Conspiracy Web (Accumulating Connections)

## The Insight
Some structures are about CONNECTIONS between nodes, not hierarchical depth. Each addition creates new links, and the web of links IS the content. Different from Branching (tree) and Accumulation (hierarchy).

## The Dynamic

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

## Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **Products** | Each node is a Content product |
| **[[p:id]] references** | Every product references its connections |
| **Collection** | Flat collection of all nodes (not hierarchical) |
| **Connection Index** | Product tracking all connections |
| **Cross-referencing** | Bidirectional links between nodes |

## Product Structure

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

## Flow

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

## Web Properties

| Property | What It Means | How to Track |
|----------|---------------|--------------|
| **Density** | How connected is the web? | Connections per node |
| **Clusters** | Are there sub-groups? | Tightly connected node sets |
| **Bridges** | Key connections between clusters | Nodes connecting different areas |
| **Central Nodes** | Most connected nodes | Connection count |
| **Periphery** | Weakly connected nodes | Low connection count |

## What Makes It Work

1. **Flat collection, not hierarchy** — All nodes are peers
2. **References ARE the structure** — [[p:id]] creates the web
3. **Bidirectional links** — A→B means B→A too
4. **Connection Index** — Queryable master list
5. **Web metrics** — Can identify gaps, clusters

## Applies To
- Tin Foil Hat Society
- Investigation/mystery teams
- Concept mapping
- Relationship mapping
- Knowledge graphs
