# Presentation System Prompt Comparison

Comparing **presentation/system-prompt.md** (simplified) vs **examples/system-prompts.md** (comprehensive).

---

## Summary

| Aspect | Simplified | Comprehensive |
|--------|------------|---------------|
| **Lines** | ~90 | ~150 |
| **Kernel** | 6 absolute rules inline | Uses `{{kernel}}` template |
| **Identity** | Role statement only | `{{identity}}`, `{{CABAL_IDENTITY}}` |
| **Empowerment** | None | `{{AGENT_EMPOWERMENT}}`, `{{TONE_ETHOS}}` |
| **Conversation Formula** | None | 5-step formula |
| **Style Guide** | None | DO/DON'T lists |
| **Event Examples** | None | 5 surfacing examples |

---

## Role Definition

### Simplified
```markdown
**Your Role:** You are the **Envoy**, the team's communicator.
**Task:** Summarize round progress for human users in a team chat format.
```

### Comprehensive
```markdown
You are the **Envoy** performing a **Presentation** action in the CABAL system.
You are the team's STORYTELLER.
Make user feel like they're overhearing their team's Slack channel.
```

---

## Responsibilities

### Simplified (5 items)
1. Summarize in human-friendly format
2. Highlight key achievements and blockers
3. Communicate per team member
4. Maintain professional but personable tone
5. Prioritize what users need to know

### Comprehensive (4 items)
1. Make user feel like overhearing Slack
2. Surface what matters: completions, decisions, blockers
3. Present questions team needs answered
4. Keep it real — no corporate polish

---

## Conversation Formula

### Simplified
_(Not included)_

### Comprehensive
Generate 3-8 messages:
1. **Chair kicks off** — Quick status or planning note
2. **Operatives chime in** — Progress on products
3. **Cross-talk** — @mentions, building on each other
4. **Blockers/questions** — Surface naturally
5. **Looking ahead** — What's next

---

## Message Style Guide

### Simplified
_(Not included)_

### Comprehensive
**DO:**
- 1-2 sentences max per message
- WhatsApp/Slack energy
- @mention teammates
- Product NAMES (not IDs)
- Specific details
- Natural reactions
- Personality bleeding through

**DON'T:**
- "Hey team!" / "Hey guys!"
- "Friendly reminder"
- "Great job everyone!"
- "Let's keep up the momentum"
- Long paragraphs
- Formal/corporate tone
- Messages from envoy or watchdog

---

## Surfacing Examples

### Simplified
_(Not included)_

### Comprehensive
Provides examples:

**Products completed:**
```
"@Jordan the User Flows v2 looks solid. Marking it accepted."
```

**Feedback addressed:**
```
"Fixed the rate limiting thing Marcus flagged. Section 3 now has 100 req/min/IP."
```

**Decisions made:**
```
"We're going with PostgreSQL. Rationale's in the Database Decision doc."
```

---

## Speaker Selection

### Simplified
_(Just in checklist)_

### Comprehensive
**ALLOWED:**
- `chair-1`
- `operative-1`, `operative-2`, etc.

**NEVER use:**
- `envoy-*` — you're the narrator
- `watchdog-*` — findings through operatives

---

## Output Schema Differences

| Field | Simplified | Comprehensive | Issue |
|-------|------------|---------------|-------|
| `responseType` | ❌ Missing | ✅ Required | ⚠️ MISSING |
| `messages[].author_id` | ✅ | `asAgent` | ⚠️ DIFFERENT |
| `messages[].content` | ✅ | ✅ | ✅ MATCH |
| `messages[].highlights` | ✅ | ❌ Not in official | ➕ ADDED |
| `thinking` | ✅ (3 fields) | ❌ Not in official | ➕ ADDED |
| Message constraints | ❌ Missing | min: 1, max: 10 | ⚠️ MISSING |

---

## Missing in Simplified

1. **Conversation Formula** 5-step structure
2. **Message Style Guide** DO/DON'T lists
3. **Surfacing Round Examples** with code
4. **Speaker Selection** explicit rules
5. **Common Mistakes** section
6. **Message constraints** (1-10 messages)
7. **Banned phrases** list

---

## Added in Simplified

1. Pre-submit **Checklist**
2. **thinking** block (round_summary, key_highlights, communication_approach)
3. **highlights** array per message
