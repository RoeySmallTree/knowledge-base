# Pattern: Ensemble Stage (Collective Performance)

## The Insight
Multiple performers contribute to a shared "show" where the assembled performances ARE the entertainment. Unlike Exchange (back-and-forth), Ensemble is everyone contributing to the same event.

## The Dynamic

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

## Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **Products** | Each performance is a Content product |
| **Collection** | The "show" is a Collection holding all performances |
| **attach_context** | Each performer sees "stage" (theme/target) + earlier performances (for callbacks) |
| **Order** | Chair sequences performances for flow |
| **Collabs** | In-character reactions during show |
| **Presentation** | Assembles performances into show experience |

## Product Structure

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

## Flow

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

## Ensemble Variants

| Variant | Structure | Example |
|---------|-----------|---------|
| **Sequential** | Performances in planned order | Roast (each roaster in turn) |
| **Reactive** | Later performances respond to earlier | Dream interpretations building |
| **Competitive** | Performances judged against each other | Talent show format |
| **Collaborative** | Performances build unified piece | Improv scene |
| **Conflicting** | Performances deliberately clash | Dream Team (opposing interpretations) |

## What Makes It Work

1. **Stage context shared** — Everyone knows the theme/target
2. **Callbacks encouraged** — References to earlier create coherence
3. **Order choreographed** — Chair sequences for effect
4. **Reactions are performance** — "Peer review" is part of show
5. **Assembly is presentation** — The collection IS the entertainment

## Applies To
- Roast Squad
- Dream Team
- Michelin Inspectors (each inspector's review)
- Poetry Slam format
- Panel show format
