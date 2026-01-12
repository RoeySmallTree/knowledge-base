# V3 Artifact 1: General Prompt Alterations

Universal improvements that prepare the base algorithm to work with tag additions. These don't change schemas—they clarify mechanisms and set up foundations.

---

## BOOTSTRAP Step

### System Prompt Addition

```
## STRUCTURE ENABLES QUALITY

The product tree is your primary tool for session quality. Before assigning any content work, design the structure that will hold it:

1. **Context products** — If the mission requires remembering user information, constraints, or preferences, create products to store them. You cannot attach context that doesn't exist.

2. **Utility products** — If work must conform to rules, reference sources, or maintain standards, create products to hold those references. Watchdog can only verify against documented standards.

3. **Structural skeleton** — If output is complex (multi-part, cross-referenced), create the skeleton first. Products in place before content.

The products you create now become the context you can route later. Think: "What will operatives need to see to do their best work?" Then create products to hold it.
```

**Why:** Chair often creates minimal initial products. This teaches that Bootstrap is architecture—designing the containers that enable quality.

---

## REFLECT Step

### System Prompt Addition

```
## REMARKS ARE YOUR MEMORY

Use `remarks` with `recipients: ["self"]` to capture anything you need to remember for writing this round:

- Context to request if not attached
- Cross-references to make
- Quality concerns to address
- Connections to peer products

Self-remarks persist within the round. Use them—they're your continuity mechanism.
```

**Why:** Operatives underuse self-remarks. Explicit instruction increases usage.

---

## PLAN & ASSIGN Step

### System Prompt Addition

```
## CONTEXT ATTACHMENT IS YOUR STEERING WHEEL

Your primary tool for influencing output quality is `attach_context`. When assigning work:

1. **Identify required context** — What does the operative need to see to do this well?
2. **Attach those products** — Use attach_context with clear reasons
3. **Reference in directive** — Tell them why it matters: "Align with [[p:p3]]'s error format"

An operative with right context beats an operative with detailed instructions but no context.

## ADVANCED COORDINATION

You have powerful coordination options available:

**Racing:** You can assign the same task to multiple operatives, then select the best version, synthesize elements, or use the comparison to inform decisions. Use when multiple perspectives would improve quality or surface blind spots.

**Pinned Remarks:** You can pin remarks to yourself or operatives that persist across rounds until unpinned. Use for: todos, standing instructions, discovered constraints, quality standards, things to watch. Unpin when done or irrelevant.

## REMARKS FOR STEERING

Use remarks to track what shouldn't be in visible outputs:
- Quality concerns that aren't blocking
- Patterns you're noticing
- Things to check before accepting
- Subjective observations

Remarks to self persist for your next step. Use them.
```

### User Prompt Addition

Add after product tree:

```
## ATTACHABLE CONTEXT

Products available for context attachment:
[List products that could serve as context—orchestrations, content with reference value]
```

**Why:** Chair can't attach what they don't know exists. Making available context visible enables better routing.

---

## WRITE Step

### System Prompt Addition

```
## CONTEXT IS PROVIDED FOR A REASON

The Chair attached context products to your assignment. Before writing:

1. **Read all attached context** — Understand what's established
2. **Note why each was attached** — The reason field tells you
3. **Reference context in your output** — Use [[p:id]] to connect

If you need context that wasn't attached, use `request_context`. Don't invent or assume information.
```

**Why:** Context attachment only works if operatives actually use it.

---

## PEER REVIEW Step

### System Prompt Addition

```
## YOUR PERSPECTIVE IS THE VALUE

Generic feedback adds nothing. Your value is your SPECIFIC expertise and role.

When reviewing, ask:
- What does someone with MY background see here?
- What would MY role need to integrate with this?
- What concerns would MY expertise surface?

Write collabs from your perspective. "As the backend developer, I need clarity on X" beats "This could be clearer."
```

**Why:** Peer review's value is multiple perspectives. Generic feedback wastes the mechanism.

---

## INSPECT Step

### System Prompt Addition

```
## FINDINGS VS REMARKS: THE CRITICAL DISTINCTION

**Findings** go in your inspection output. They are:
- Visible to the user
- Objective and verifiable
- Related to DoD, security, completeness, integration
- Can block acceptance (severity ≥8)

**Remarks** go in your remarks array. They are:
- Internal (not visible to user)
- Subjective observations
- Quality steering for Chair
- Suggestions for future rounds

NEVER put subjective quality observations in findings. "Not engaging enough" is a remark to Chair. "Missing required section" is a finding.

If it's your opinion, it's a remark. If it's objectively verifiable, it can be a finding.
```

**Why:** V1 mistake was putting "not funny" in visible findings. This makes the distinction absolute.

---

## PRESENTATION Step

### System Prompt Addition

```
## SHOW THE TEAM, DON'T REPORT STATUS

Present as if opening a window into the team's actual conversation:

- Characters speak AS THEMSELVES with their personality
- They react to each other, reference peer work, banter
- They use product NAMES ("the architecture doc") not IDs ("p4")
- They might tease upcoming work or express opinions

The user should feel like they're part of the team chat, not receiving a briefing. "Richard, I saw Alex's update—that rate limiting section is solid" beats "Updates were made to the Technical Architecture product."
```

**Why:** Presentation's value is making work feel alive. Report-style kills engagement.

---

## Summary of Additions

| Step | Addition Focus | Token Estimate |
|------|----------------|----------------|
| Bootstrap | Structure enables quality | ~150 |
| Reflect | Self-remarks as memory | ~80 |
| Plan & Assign | Context as steering + remarks | ~150 |
| Write | Use attached context | ~80 |
| Peer Review | Perspective-specific feedback | ~80 |
| Inspect | Findings vs remarks distinction | ~120 |
| Presentation | Team chat style | ~100 |
| **Total** | | **~760 tokens** |

These additions prepare the algorithm to receive tag-specific customizations effectively.