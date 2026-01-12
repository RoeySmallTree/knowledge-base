# Pattern: Calibration (Warmup Alignment)

## The Insight
Teams (especially simulation teams) benefit from a "warmup" phase where they establish voice, style, and mutual understanding BEFORE the main work. This investment upfront prevents drift and inconsistency later.

## How It Differs From Existing
- **Not Bootstrap** — Bootstrap creates structure; Calibration aligns execution style
- **Not Quality Through Remarks** — Remarks steer during work; Calibration aligns before work
- Calibration is **explicit investment** in team coherence

## The Flow

```
CALIBRATION PHASE (Round 0-1)         MAIN WORK (Round 2+)
         │                                  │
         ▼                                  ▼
┌──────────────────────┐           ┌──────────────────────┐
│ 1. Produce samples   │           │ Work with calibrated │
│ 2. Critique each     │           │ team:                │
│    other's voice     │           │ - Consistent voice   │
│ 3. Chair issues      │           │ - Mutual understanding│
│    alignment notes   │           │ - Shared standards   │
│ 4. Revise samples    │           │                      │
│ 5. Confirm alignment │           │                      │
└──────────────────────┘           └──────────────────────┘
```

## What Gets Calibrated

| Dimension | Calibration Question |
|-----------|---------------------|
| **Voice** | Do characters sound distinct and consistent? |
| **Tone** | Is the emotional register right? |
| **Depth** | How detailed should outputs be? |
| **Style** | Formal? Casual? Technical? |
| **Interaction** | How do characters relate to each other? |
| **Boundaries** | What's in/out of scope? |

## High-Value Use Cases

| Team | What Needs Calibration | Sample Task |
|------|----------------------|-------------|
| Roast Squad | Character voices, roast intensity | "Each roaster: give a 3-line roast of pineapple pizza" |
| Board of Directors | Executive perspectives, debate style | "Each exec: 2 sentences on 'should we expand?'" |
| The Publisher | Prose style, narrative voice | "Each write: one paragraph describing a sunset" |
| Dungeon Party | Player characters, DM style | "Each player: introduce yourself in 3 sentences" |
| The Studio | Dialogue style, character voices | "Each character: react to 'we need to talk'" |
| Translation Corps | Cultural calibration | "Each translate: 'I'm sorry' with cultural notes" |

## Implementation

**Bootstrap:**
```
Pin to self: "CALIBRATION PHASE: Rounds 1-2 are for alignment. 
             No main work until voices calibrated."

Create: "Calibration Samples" (Collection)
        "Alignment Notes" (Content) — Chair's calibration feedback
```

**Round 1: Sample + Critique**
```
Assign each operative: "Produce a short sample of [X] in your voice"
Peer review: "Critique each other's voice—is it distinct? consistent?"
Chair: Review, issue alignment notes
```

**Round 2: Revise + Confirm**
```
Assign: "Revise your sample based on alignment notes"
Chair: Confirm calibration OR iterate
Pin alignment notes for reference during main work
```
