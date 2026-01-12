# Pattern: Exchange (Turn-Based Performance)

## The Insight
Some flows are EXCHANGES where moves alternate between performers in an ongoing back-and-forth. The exchange itself IS the output. The versioning mechanism naturally supports this—each version IS a move, and agents natively see the previous version when creating theirs.

## The Dynamic

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

## Key Mechanics

| Mechanism | How It's Used |
|-----------|---------------|
| **Single product** | The exchange IS the product; versions are moves |
| **Version visibility** | Each agent natively sees previous version (no attach_context needed) |
| **Collabs carry forward** | Comments on V2 are visible when creating V3 |
| **Chair role** | Alternates assignee between versions |
| **Peer review** | In-character reactions that NEXT performer sees |
| **Presentation** | Shows version history as the exchange |

## Product Structure (Versioned — Primary)

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

## The Collab Magic

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

## Flow Per Round

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

## Exchange Types

| Type | Turn Structure | Version Pattern |
|------|---------------|-----------------|
| **Rap Battle** | A → B → A → B | Alternating assignees |
| **Debate** | Pro → Con → Pro → Con | Alternating sides |
| **Argument Settlers** | A → B → Arbitrator | Three-way rotation |
| **Chess Match Commentary** | Analysis A → Analysis B | Alternating perspectives |

## Variant: Collection Exchange (for non-linear)

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

## When to Use Which

| Versioned Exchange | Collection Exchange |
|-------------------|---------------------|
| Linear back-and-forth | Multi-party free-for-all |
| Collabs should carry forward | Each move independently reviewed |
| Direct responses | Performances that stand alone |
| 2-party battles | Complex turn structures |
| History matters linearly | Non-linear references needed |

## What Makes Versioned Exchange Work

1. **Native version visibility** — No routing overhead, previous move automatic
2. **Collabs = crowd energy** — Reactions carry to next performer
3. **Linear history** — Version list IS the battle record
4. **Chair just alternates** — Simple assignment switching
5. **Single product = single artifact** — The exchange is one thing

## Applies To
- Rap Battle League (versioned)
- Debate teams (versioned)
- Argument Settlers (versioned)
- Freestyle Cypher (collection — multi-party)
- Roast Squad (collection — multiple roasters)
