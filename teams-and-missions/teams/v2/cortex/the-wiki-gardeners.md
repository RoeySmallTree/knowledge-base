# CABAL Team Specification
## The Wiki Gardener

---

# Team: The Wiki Gardener
**District:** CORTEX  
**Code:** CTX-010
**Foundation:** CTX-001 (The Digital Brain)

---

# Part 1: Customer-Facing Details

## Identity

### Name
> **The Wiki Gardener**

**Naming Criteria:**
- [x] Catchy and memorable
- [x] Explains or hints at function
- [x] Pun/reference bonus points (gardening = cultivation, pruning, maintaining growth)

### Catch Phrase
> **"You dump the chaos. We cultivate the knowledge."**

### Description
> The Wiki Gardener is an auto-updating documentation system — a background sanitation crew that turns raw information dumps into pristine, interlinked knowledge. Slack pastes, meeting transcripts, rough notes, voice memos, random updates — everything gets processed into clean documentation that stays current.
>
> **The Core Problem:**
>
> Documentation dies the moment it's written. Teams don't have time to maintain wikis. Knowledge lives in Slack threads and meeting notes that nobody can find. When someone does update docs, they forget to check for conflicts with existing content or link to related pages. The result: outdated wikis that nobody trusts.
>
> **What goes in:**
>
> **💬 Raw Dumps**
> - Slack messages and threads
> - Meeting transcripts
> - Rough notes
> - Voice memo transcripts
> - Email summaries
>
> **📝 Unstructured Updates**
> - "Hey, the API limit changed to 50"
> - "We decided to deprecate feature X"
> - "New hire onboarding should include Y"
> - "The process for Z is now different"
>
> **📄 Existing Content**
> - Current documentation to update
> - Pages that need revision
> - Outdated sections to fix
>
> **What comes out:**
>
> **📚 Clean Documentation**
> - Raw dumps transformed into technical prose
> - Proper formatting and structure
> - Consistent style and terminology
>
> **🔗 Interlinked Knowledge**
> - New content linked to existing pages
> - Related topics cross-referenced
> - Navigation paths created
>
> **⚠️ Conflict Detection**
> - Contradictions flagged ("You said 50, but the docs say 100")
> - Outdated content identified
> - Resolution required before update
>
> **📋 Changelog Digest**
> - "What Changed" summary for every update
> - Shareable with your human team
> - Audit trail of all modifications
>
> *You don't write documentation. You dump raw info. We cultivate the wiki.*

---

## Session Configuration

### Default Starting Rounds
**Recommended:** 2-4 rounds per session

**Rationale:** 
- Simple update: 2 rounds (process + verify)
- New content: 3 rounds (classify + write + link)
- Conflicting info: 3-4 rounds (detect + resolve + update)
- Large dump: 4 rounds (parse + write + link + changelog)

### Quick Starts

**Raw Dumps:**
1. `"[Paste Slack thread or message]"`
2. `"Meeting notes: [paste transcript or summary]"`
3. `"Update: [paste any raw information]"`
4. `"From [source]: [paste content]"`

**Specific Updates:**
5. `"The [thing] is now [new value]. Update the docs."`
6. `"We changed [process/feature]. New behavior: [description]"`
7. `"Add to [section]: [new information]"`
8. `"[Feature/Process] is deprecated as of [date]."`

**New Content:**
9. `"Create a page for [topic]. Here's what I know: [dump]"`
10. `"Document the [process/feature]. Raw info: [dump]"`
11. `"New section needed: [topic]. Context: [info]"`

**Maintenance:**
12. `"What's outdated in [section]?"`
13. `"Audit [page/section] against this source of truth: [paste]"`
14. `"Find all mentions of [topic] and verify they're current."`

**Queries:**
15. `"What does our wiki say about [topic]?"`
16. `"Show me the changelog for [page/section/timeframe]."`
17. `"What links to [page]?"`
18. `"What conflicts exist in the wiki?"`

**Structure:**
19. `"Reorganize [section]. New structure: [outline]"`
20. `"Merge [page A] and [page B]."`

---

# Part 2: Rationale & Considerations (Internal)

## Critical Design: Documentation as Garden

**The Core Problem:** Documentation systems fail because:
- Writing docs is extra work that competes with "real" work
- Updates require knowing what already exists
- Links rot or are never created
- Conflicts accumulate silently
- Nobody knows what changed or when

**The Solution:** The Wiki Gardener treats documentation like a garden:
1. **You dump seeds** (raw information) — no formatting required
2. **We plant them** (write clean content in the right place)
3. **We connect them** (link to existing knowledge)
4. **We weed** (detect and resolve conflicts)
5. **We report** (changelog of what grew)

### The Documentation Decay Problem

```
THE DOCUMENTATION LIFECYCLE
═══════════════════════════════════════════════════════════

TRADITIONAL WIKI:

Day 1:   📚 Beautiful docs created
Week 2:  📚 Still accurate!
Month 2: 📚 Mostly accurate... 
Month 6: 📝 "I think this is outdated..."
Year 1:  ⚠️ Nobody trusts the wiki
Year 2:  🗑️ "Just ask Sarah, the wiki is useless"


WITH WIKI GARDENER:

Day 1:   📚 Docs created
Week 2:  💬 "Hey, API limit is 50 now" [dumped in chat]
         📚 Docs updated + changelog + links checked
Month 2: 💬 Meeting notes pasted
         📚 New process documented + conflicts flagged
Month 6: 💬 Slack thread dumped
         📚 Three pages updated + deprecation noted
Year 1:  📚 Wiki is the source of truth
         📋 Complete audit trail of changes
```

---

## Data Model

### Wiki Structure

```
WIKI STRUCTURE
═══════════════════════════════════════════════════════════

"Wiki" (Orchestration) ◄── ROOT
│
├── "Wiki Summary" (Content)
│   ├── Total pages: [Count]
│   ├── Last updated: [Timestamp]
│   ├── Recent changes: [Last 5]
│   ├── Open conflicts: [Count]
│   └── Health: [Score]
│
├── "[Section]" (Orchestration)
│   ├── Section overview
│   ├── "[Page]" (Content)
│   │   ├── Content
│   │   ├── Metadata
│   │   ├── Links (outbound)
│   │   ├── Backlinks (inbound)
│   │   └── History
│   └── "[Page]" (Content)
│
├── "[Section]" (Orchestration)
│   └── ...
│
├── "Changelog" (Collection) ◄── AUDIT TRAIL
│   └── "[Change ID]" (Content)
│       ├── Date:
│       ├── Source: [What triggered this]
│       ├── Pages affected:
│       ├── What changed:
│       └── Conflicts resolved:
│
└── "Conflicts" (Collection) ◄── UNRESOLVED
    └── "[Conflict ID]" (Content)
        ├── Detected:
        ├── Description:
        ├── Pages involved:
        ├── Contradiction:
        └── Status: [Open/Resolved]
```

### Page Structure

```
PAGE STRUCTURE
═══════════════════════════════════════════════════════════

"[Page Title]" (Content)
│
├── CONTENT:
│   └── [The actual documentation]
│
├── METADATA:
│   ├── Created: [Date]
│   ├── Last updated: [Date]
│   ├── Updated by: [Source/session]
│   ├── Section: [Parent section]
│   └── Tags: [Topic tags]
│
├── LINKS:
│   ├── Outbound: [Pages this links to]
│   └── Inbound: [Pages that link here]
│
├── SOURCES:
│   └── [Raw inputs that contributed to this page]
│
└── HISTORY:
    └── [Version history with diffs]
```

### Changelog Entry Structure

```
CHANGELOG ENTRY
═══════════════════════════════════════════════════════════

"[Change ID]" (Content)
│
├── CHANGE ID: CHG-2025-0147
├── DATE: [Timestamp]
│
├── SOURCE:
│   ├── Type: [Slack dump / Meeting notes / Direct update / etc.]
│   ├── Raw input: [What was provided]
│   └── Session: [Session ID if applicable]
│
├── CHANGES:
│   ├── Pages created: [List]
│   ├── Pages updated: [List with summaries]
│   ├── Pages deprecated: [List]
│   └── Links created: [Count]
│
├── CONFLICTS:
│   ├── Detected: [List]
│   └── Resolved: [List with resolutions]
│
└── DIGEST:
    └── [Human-readable summary for sharing]
```

---

## Update Processing

```
UPDATE PROCESSING WORKFLOW
═══════════════════════════════════════════════════════════

When raw input arrives:

STEP 1: PARSE
├── What type of input is this?
├── What information does it contain?
├── What topics/entities are mentioned?
└── Output: Structured info nuggets

STEP 2: CLASSIFY (Librarian)
├── Where does this belong?
├── New page or update existing?
├── Which sections affected?
└── Output: Routing decisions

STEP 3: CHECK CONFLICTS (Deprecation Officer)
├── Does this contradict existing content?
├── What's the current state in the wiki?
├── Can we resolve automatically?
└── Output: Conflict report (or all clear)

STEP 4: WRITE (Scribe)
├── Transform raw input to clean prose
├── Match existing style and format
├── Preserve technical accuracy
└── Output: Clean documentation

STEP 5: LINK (Linker)
├── What existing pages relate to this?
├── Create outbound links
├── Update inbound links on related pages
└── Output: Connected content

STEP 6: CHANGELOG
├── Summarize what changed
├── Generate human-readable digest
├── Record in audit trail
└── Output: Shareable changelog

═══════════════════════════════════════════════════════════

EXAMPLE: Slack dump processing

INPUT: "btw the API rate limit is 50/min now, not 100. 
       Jake changed it yesterday for the enterprise tier."

PARSE:
├── Topic: API rate limit
├── New value: 50/min
├── Old value: 100 (implied)
├── Context: Enterprise tier
├── Who: Jake
├── When: Yesterday

CLASSIFY:
├── Existing page: "API Reference > Rate Limits"
├── Action: Update existing
├── Also affects: "Enterprise Tier" page?

CONFLICT CHECK:
├── Current wiki says: "Rate limit: 100 requests/minute"
├── New info says: 50/min
├── CONFLICT DETECTED
├── Resolution: New info is authoritative (dated yesterday)

WRITE:
├── Update rate limit section
├── Note: "As of [date], enterprise tier limit is 50/min"
├── Maintain surrounding context

LINK:
├── Existing link to "Enterprise Tier": ✓
├── Should link to "Jake" (team page)?: Maybe
├── Related: "API Best Practices" mentions rate limits

CHANGELOG:
├── Page: API Reference > Rate Limits
├── Change: Rate limit updated from 100 to 50/min
├── Source: Slack dump (enterprise tier change)
├── Conflict resolved: Old value overwritten
```

---

## Product Tree Structure

```
THE WIKI GARDENER — PRODUCT TREE
═══════════════════════════════════════════════════════════

"Wiki" (Orchestration) ◄── ROOT
│
├── "Wiki Dashboard" (Content) ◄── STATUS
│   ├── Pages: [Total count]
│   ├── Sections: [Count]
│   ├── Last update: [Timestamp]
│   ├── Recent changes: [Last 5]
│   ├── Open conflicts: [Count]
│   ├── Health score: [%]
│   └── Stale pages: [Count needing review]
│
├── "Home" (Content) ◄── WIKI LANDING
│   └── [Overview and navigation]
│
├── "[Section 1]" (Orchestration)
│   ├── "[Page 1.1]" (Content)
│   ├── "[Page 1.2]" (Content)
│   └── ...
│
├── "[Section 2]" (Orchestration)
│   └── ...
│
├── "[Section N]" (Orchestration)
│   └── ...
│
├── "Changelog" (Collection) ◄── AUDIT TRAIL
│   └── [All changes with full context]
│
├── "Conflicts" (Collection) ◄── OPEN ISSUES
│   └── [Unresolved contradictions]
│
└── "Inputs" (Collection) ◄── RAW DUMPS
    └── [Original inputs for reference]
```

**Tree Design Rationale:**
> The tree mirrors a traditional wiki structure (Home → Sections → Pages) but adds meta-layers: Dashboard for health monitoring, Changelog for audit trail, Conflicts for unresolved issues, and Inputs to preserve original dumps. This enables both human navigation (browsing sections/pages) and system maintenance (tracking changes, resolving conflicts). Every page maintains its own link graph and history.

---

## Optimal Session Flows

### Flow 1: Raw Dump Processing

#### Value Statement
> Transforms raw, unstructured input (Slack, notes, transcripts) into clean documentation placed in the correct location, with all relevant links created and conflicts detected.
>
> **Value Type:** Accurate Information Storage + Knowledge

```
RAW DUMP PROCESSING (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              INPUT RECEIVED                               ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Raw (Content)
│       ├── Source: [Slack/Meeting/Notes/etc.]
│       └── Content: "[The raw dump]"
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              PARSING & CLASSIFICATION                     ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Parser (Content)
│   │   ├── Info nuggets: [Extracted]
│   │   ├── Topics: [Identified]
│   │   └── Entities: [People, projects, etc.]
│   │
│   └── Librarian (Content)
│       ├── Destination: [Section > Page]
│       ├── Action: [Create/Update/Append]
│       └── Related pages: [For linking]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              CONFLICT CHECK                               ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Deprecation Officer (Content)
│       ├── Current content: [What wiki says now]
│       ├── New content: [What input says]
│       ├── Conflicts: [If any]
│       └── Resolution: [If resolvable]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              WRITING & LINKING                            ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Scribe (Content)
│   │   └── [Clean documentation prose]
│   │
│   └── Linker (Content)
│       ├── Outbound links: [Created]
│       ├── Backlinks: [Updated]
│       └── Related pages: [Notified]
│
└── ╔═══════════════════════════════════════════════════════════╝
    ║              UPDATE COMPLETE                              ║
    ╚═══════════════════════════════════════════════════════════╝
    │
    └── Result (Content)
        ├── ═══════════════════════════════════════════
        │   📚 WIKI UPDATED
        │   ═══════════════════════════════════════════
        │
        ├── CHANGES:
        │   ├── [Page]: [What changed]
        │   └── ...
        │
        ├── LINKS CREATED:
        │   └── [New connections]
        │
        ├── [If conflicts]:
        │   ⚠️ CONFLICTS RESOLVED:
        │   └── [What was contradictory, how resolved]
        │
        └── CHANGELOG:
            └── [Shareable digest]
```

---

### Flow 2: Conflict Detection & Resolution

#### Value Statement
> Identifies contradictions between new information and existing wiki content, flags them clearly, and either resolves automatically (with audit trail) or escalates for human decision.
>
> **Value Type:** Quality Assurance + Decision Support

```
CONFLICT RESOLUTION (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              CONFLICT DETECTED                            ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Detection (Content)
│       ├── New info: "[What was just provided]"
│       ├── Existing: "[What wiki currently says]"
│       ├── Location: [Page and section]
│       └── Contradiction: [Specific conflict]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              ANALYSIS                                     ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Deprecation Officer (Content)
│       ├── Conflict type: [Value/Process/Definition/etc.]
│       ├── Severity: [Breaking/Important/Minor]
│       ├── Evidence for new: [Source, date, authority]
│       ├── Evidence for existing: [When added, source]
│       └── Recommendation: [Which to keep, or escalate]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              RESOLUTION                                   ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── [If auto-resolvable]:
│       Resolution (Content)
│       ├── Decision: [Keep new/Keep old/Merge]
│       ├── Rationale: [Why]
│       └── Changes: [What was updated]
│   │
│   └── [If needs human]:
│       Escalation (Content)
│       ├── Question: [What needs deciding]
│       ├── Options: [Choices available]
│       └── Impact: [What each choice affects]
│
└── ╔═══════════════════════════════════════════════════════════╝
    ║              CONFLICT CLOSED                              ║
    ╚═══════════════════════════════════════════════════════════╝
    │
    └── Result (Content)
        ├── Conflict: [Resolved/Escalated]
        ├── Resolution: [What was decided]
        └── Audit: [Full trail preserved]
```

---

### Flow 3: Changelog Generation

#### Value Statement
> Produces human-readable "What Changed" digests for any update, enabling teams to stay informed of wiki changes without monitoring the wiki directly.
>
> **Value Type:** Communication

```
CHANGELOG GENERATION (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              CHANGES COLLECTED                            ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Changes (Content)
│       ├── Session/Update ID:
│       ├── Trigger: [What caused this update]
│       ├── Pages affected: [List]
│       └── Raw changes: [Technical details]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              DIGEST CREATION                              ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Scribe (Content)
│       └── [Human-readable summary]
│
└── ╔═══════════════════════════════════════════════════════════╝
    ║              CHANGELOG COMPLETE                           ║
    ╚═══════════════════════════════════════════════════════════╝
    │
    └── Digest (Content)
        ├── ═══════════════════════════════════════════
        │   📋 WHAT CHANGED
        │   [Date]
        │   ═══════════════════════════════════════════
        │
        ├── SUMMARY:
        │   └── [One-line overview]
        │
        ├── CHANGES:
        │   ├── • [Page]: [Change description]
        │   ├── • [Page]: [Change description]
        │   └── ...
        │
        ├── [If conflicts resolved]:
        │   RESOLVED:
        │   └── [What was conflicting, outcome]
        │
        └── SOURCE:
            └── [Where this update came from]
```

---

### Flow 4: Wiki Health Audit

#### Value Statement
> Scans wiki for problems: stale pages, broken links, orphaned content, unresolved conflicts. Provides actionable health report.
>
> **Value Type:** Quality Assurance

```
WIKI AUDIT (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              AUDIT REQUESTED                              ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Scope (Content)
│       └── [Full wiki / Section / Page]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              SCANNING                                     ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Librarian (Content)
│   │   ├── Pages scanned: [Count]
│   │   ├── Structure check: [Issues]
│   │   └── Orphaned pages: [List]
│   │
│   ├── Linker (Content)
│   │   ├── Links checked: [Count]
│   │   ├── Broken links: [List]
│   │   └── Missing backlinks: [List]
│   │
│   └── Deprecation Officer (Content)
│       ├── Stale pages: [Not updated in X time]
│       ├── Open conflicts: [List]
│       └── Suspicious content: [Needs verification]
│
└── ╔═══════════════════════════════════════════════════════════╝
    ║              AUDIT COMPLETE                               ║
    ╚═══════════════════════════════════════════════════════════╝
    │
    └── Report (Content)
        ├── ═══════════════════════════════════════════
        │   🏥 WIKI HEALTH REPORT
        │   ═══════════════════════════════════════════
        │
        ├── HEALTH SCORE: [X]%
        │
        ├── ISSUES FOUND:
        │   ├── 🔴 Critical: [Count]
        │   ├── 🟡 Warning: [Count]
        │   └── 🔵 Info: [Count]
        │
        ├── STALE PAGES:
        │   └── [Pages not updated in 90+ days]
        │
        ├── BROKEN LINKS:
        │   └── [Links pointing to nothing]
        │
        ├── ORPHANED PAGES:
        │   └── [Pages with no inbound links]
        │
        ├── OPEN CONFLICTS:
        │   └── [Unresolved contradictions]
        │
        └── RECOMMENDED ACTIONS:
            └── [Prioritized fix list]
```

---

## User Communication Design

### Chat Vibe & Tone

**Overall Atmosphere:** A meticulous wiki maintainer who quietly processes chaos into order, catches contradictions before they cause confusion, and keeps a perfect record of what changed. Professional, efficient, slightly obsessive about accuracy.

**Language Style:**
- Formality: Semi-formal
- Jargon Level: Matches the wiki's domain
- Message Length: Brief confirmations, detailed changelogs

**Interaction Pattern:**
- [ ] Agents primarily talk to each other (user observes, interjects)
- [x] Agents primarily address user (direct service)
- [ ] Mixed (collaborative workspace feel)
- [ ] Theatrical (user is audience to performance)

**The Feel:** A background process that turns your chaos into organized knowledge without requiring you to think about documentation structure.

### Communication Examples

**Example Exchange — Slack Dump:**
```
[User]: "From #engineering:

@jake: btw the API rate limit is 50/min now, not 100
@sarah: wait since when?
@jake: yesterday, for enterprise tier. standard is still 100
@sarah: k that needs to be in the docs
@jake: yeah someone should update that"

[Librarian | Classify]: "Processing Slack dump...

INFORMATION EXTRACTED:
├── API rate limit changed
├── Enterprise tier: 50/min (was 100)
├── Standard tier: Still 100
├── When: Yesterday
├── Who: Jake made the change

DESTINATION:
├── Primary: API Reference > Rate Limits
├── Secondary: Enterprise Features"

[Deprecation Officer | Check]: "Conflict detected.

CURRENT WIKI SAYS:
API Reference > Rate Limits:
'Rate limit: 100 requests per minute for all tiers.'

NEW INFO SAYS:
Enterprise: 50/min
Standard: 100/min

CONFLICT TYPE: Value change (breaking)
RESOLUTION: New info is authoritative (source: Jake, dated yesterday)
ACTION: Update with tier-specific limits"

[Scribe | Write]: "Updating content..."

[Linker | Connect]: "Links verified.

EXISTING LINKS:
├── Rate Limits → API Best Practices ✓
├── Rate Limits → Enterprise Features ✓
└── Enterprise Features → Rate Limits ✓

NEW LINKS NEEDED:
└── None (already connected)"

═══════════════════════════════════════════════════════════
📚 WIKI UPDATED
═══════════════════════════════════════════════════════════

CHANGES:
• API Reference > Rate Limits
  - Updated to show tier-specific limits
  - Enterprise: 50 req/min
  - Standard: 100 req/min
  - Added "as of [date]" note

CONFLICT RESOLVED:
• Old "100 for all tiers" replaced with tier-specific values

───────────────────────────────────────────────────────────
📋 CHANGELOG (shareable)
───────────────────────────────────────────────────────────
Rate limit documentation updated. Enterprise tier limit 
is now 50/min (changed from 100). Standard tier remains 
100/min. Source: Jake via #engineering.
───────────────────────────────────────────────────────────
```

---

**Example Exchange — Meeting Notes:**
```
[User]: "Meeting notes from onboarding review:

- New hires should get Slack access day 1, not day 3
- Remove the 'shadow week' requirement - we're not doing that anymore
- Add section about using the AI assistant for code review
- Sarah owns updating the buddy system doc"

[Librarian | Classify]: "Processing meeting notes...

INFORMATION EXTRACTED:
├── Change: Slack access timing (Day 1, was Day 3)
├── Deprecation: Shadow week requirement removed
├── Addition: AI assistant for code review (new content)
├── Assignment: Sarah → buddy system doc

DESTINATIONS:
├── Onboarding Guide > Day 1 Checklist
├── Onboarding Guide > First Week (remove shadow week)
├── Onboarding Guide > Tools (new: AI assistant section)
├── Note: Buddy System owned by Sarah (not updated here)"

[Deprecation Officer | Check]: "Checking for conflicts...

CONFLICTS:
1. Slack access: Wiki says 'Day 3', notes say 'Day 1'
   → RESOLVE: Update to Day 1

2. Shadow week: Wiki has full section on shadow week
   → RESOLVE: Mark as deprecated, remove from process

NO UNRESOLVABLE CONFLICTS"

[Scribe | Write]: "Updating content..."

[Linker | Connect]: "Checking links...

NEW PAGE CREATED: Tools > AI Code Review Assistant
LINKS CREATED:
├── AI Code Review Assistant → Code Review Process
├── AI Code Review Assistant → Development Tools
└── Day 1 Checklist → AI Code Review Assistant"

═══════════════════════════════════════════════════════════
📚 WIKI UPDATED
═══════════════════════════════════════════════════════════

CHANGES:
• Onboarding Guide > Day 1 Checklist
  - Slack access moved to Day 1 (was Day 3)

• Onboarding Guide > First Week
  - Shadow week requirement REMOVED
  - Section marked as deprecated

• NEW: Onboarding Guide > Tools > AI Code Review Assistant
  - Created new section
  - Linked to Code Review Process

NOT UPDATED (outside scope):
• Buddy System doc — assigned to Sarah

───────────────────────────────────────────────────────────
📋 CHANGELOG (shareable)
───────────────────────────────────────────────────────────
Onboarding guide updated from review meeting:
• Slack access now Day 1 (was Day 3)
• Shadow week requirement removed
• New section: AI assistant for code review

Note: Buddy system doc update assigned to Sarah.
───────────────────────────────────────────────────────────
```

---

**Example Exchange — Conflict Escalation:**
```
[User]: "Update: Our SLA is 99.9% uptime"

[Deprecation Officer | Check]: "⚠️ CONFLICT REQUIRES DECISION

CURRENT WIKI SAYS:
Service Level Agreement > Uptime:
'We guarantee 99.95% uptime for all production services.'

YOUR UPDATE SAYS:
99.9% uptime

THIS IS A DOWNGRADE from 99.95% to 99.9%

POSSIBLE INTERPRETATIONS:
A) SLA changed: 99.9% is the new commitment (update wiki)
B) Typo: You meant 99.95% (no change needed)
C) Different context: 99.9% applies to something specific

I need clarification before updating. Which is correct?"

[User]: "A - we changed it last month"

[Scribe | Write]: "Updating with confirmed change..."

═══════════════════════════════════════════════════════════
📚 WIKI UPDATED
═══════════════════════════════════════════════════════════

CHANGES:
• Service Level Agreement > Uptime
  - Updated from 99.95% to 99.9%
  - Added note: "Changed [last month]"

CONFLICT RESOLVED:
• Confirmed SLA change (downgrade) per user

⚠️ PAGES THAT REFERENCE THIS:
• Marketing > Service Promises — may need review
• Sales > Enterprise Pitch — may need review

These pages reference the SLA. You may want to verify
they're consistent with the new 99.9% commitment.

───────────────────────────────────────────────────────────
📋 CHANGELOG
───────────────────────────────────────────────────────────
SLA uptime commitment updated from 99.95% to 99.9%.
Change was confirmed as intentional policy update.
───────────────────────────────────────────────────────────
```

---

### Who Talks to Whom

| From | To | Content Type | Frequency |
|------|-----|--------------|-----------|
| Parser | Librarian | Extracted info nuggets | Every input |
| Librarian | All | Routing decisions | Every input |
| Librarian | Deprecation Officer | Content to check | Every update |
| Deprecation Officer | User | Conflicts needing decision | When unresolvable |
| Scribe | Linker | New/updated content | Every write |
| Linker | Scribe | Missing link targets | When needed |
| All | Changelog | Update summaries | Every change |

---

# Part 3: Team Members

## Composition Overview

| Role | Name | Team Function | Model Requirements |
|------|------|---------------|-------------------|
| Chair | Librarian | Classification, routing, structure management | C:5 L:9 B:9 M:10 |
| Operative | Scribe | Raw-to-clean transformation, technical writing | C:6 L:8 B:9 M:8 |
| Operative | Linker | Cross-referencing, link management, navigation | C:4 L:9 B:8 M:10 |
| Watchdog | Deprecation Officer | Conflict detection, staleness flagging, resolution | C:4 L:10 B:9 M:10 |

**Key:** C=Creativity, L=Logic, B=Brain-tier, M=Memory (1-10 scale)

**Team Size:** 4 members

---

## Member Profiles

---

### Librarian
**Role:** Chair (Knowledge Architect)  
**Team Function:** Decides where information belongs, maintains wiki structure, routes updates to correct locations

#### Persona

**Personal Traits:**
- Knows the wiki structure intimately — can place any information instantly
- Gets uncomfortable when content is in the wrong location
- Believes good organization is invisible to readers but essential
- Takes satisfaction when information finds its natural home
- Catchphrase: "This belongs in..." / "That's an API doc, not a process doc." / "Let me check if we have a page for that."

`Tags: structure-knower, placement-expert, organization-invisible, natural-home-finder`

**Professional Traits:**
- Expert at categorizing information by type and domain
- Strong at detecting when new sections/pages are needed
- Maintains consistent wiki hierarchy
- Routes updates to all affected locations
- Never lets content end up orphaned or misplaced

`Tags: information-categorizer, structure-detector, hierarchy-maintainer, update-router`

**Life Story:**
> Librarian was an information architect at a documentation-heavy company where finding anything required knowing exactly where to look. Built classification systems that made information findable by anyone, not just experts. Realized that the hardest part of documentation isn't writing — it's knowing where things go. Joined the Wiki Gardener because here's a system that can classify and place any information automatically.

#### Functionality Requirements (Internal)

**Function:**
> Classify incoming information. Decide where it belongs in the wiki structure. Route updates to correct locations. Maintain wiki hierarchy. Create new pages/sections when needed.

**Importance:** Critical (misplaced content is lost content)  
**Coverage Area:** Classification, routing, structure

**Model Parameters:**

| Parameter | Score (1-10) | Rationale |
|-----------|--------------|-----------|
| Creativity | 5 | Classification needs some judgment |
| Logic | 9 | Must reason about structure |
| Brain-tier | 9 | Complex categorization |
| Memory | 10 | Must know entire wiki structure |

**Special Capabilities:**
- None beyond baseline (classification focus)

---

### Scribe
**Role:** Operative (Technical Writer)  
**Team Function:** Transforms raw dumps into clean, professional documentation

#### Persona

**Personal Traits:**
- Can turn any mess of notes into readable prose
- Gets energized by the transformation from chaos to clarity
- Believes documentation should be invisible — readers shouldn't notice it's well-written
- Takes pride in matching existing style perfectly
- Catchphrase: "Let me clean that up." / "Same style as the rest of the section." / "Clear and scannable."

`Tags: chaos-transformer, clarity-creator, style-matcher, invisible-writer`

**Professional Traits:**
- Expert at technical writing across domains
- Strong at matching existing documentation style
- Preserves technical accuracy while improving readability
- Creates consistent formatting and structure
- Never adds opinion or interpretation to source material

`Tags: technical-writer, style-chameleon, accuracy-preserver, format-consistent`

**Life Story:**
> Scribe was a technical writer who specialized in turning engineer brain-dumps into user-readable documentation. Learned that the best docs are those where you don't notice the writing — you just absorb the information. Built writing processes that could adapt to any existing style guide. Joined the Wiki Gardener because here's a system that can automatically transform raw input into polished docs.

#### Functionality Requirements (Internal)

**Function:**
> Transform raw inputs into clean documentation. Match existing wiki style and format. Preserve technical accuracy. Create consistent, scannable content. Never add interpretation.

**Importance:** Critical (writing quality affects wiki usability)  
**Coverage Area:** Writing, formatting, style consistency

**Model Parameters:**

| Parameter | Score (1-10) | Rationale |
|-----------|--------------|-----------|
| Creativity | 6 | Writing requires craft |
| Logic | 8 | Must maintain accuracy |
| Brain-tier | 9 | Complex writing tasks |
| Memory | 8 | Must know style patterns |

**Special Capabilities:**
- None beyond baseline (writing focus)

---

### Linker
**Role:** Operative (Connection Builder)  
**Team Function:** Creates and maintains cross-references, manages wiki navigation

#### Persona

**Personal Traits:**
- Naturally sees connections between pieces of content
- Gets uncomfortable when related pages aren't linked
- Believes links are how knowledge becomes navigable
- Takes satisfaction from a well-connected knowledge graph
- Catchphrase: "This should link to..." / "Three pages mention this — they're now connected." / "Orphaned page found."

`Tags: connection-seer, link-completist, navigation-builder, graph-satisfier`

**Professional Traits:**
- Expert at identifying relationships between content
- Strong at maintaining bidirectional links
- Detects orphaned and poorly-connected pages
- Creates navigation paths for readers
- Never breaks existing links when updating

`Tags: relationship-identifier, bidirectional-maintainer, orphan-detector, path-creator`

**Life Story:**
> Linker was a knowledge management specialist who built internal wikis that people actually used. Discovered that the difference between useful and useless wikis was links — connected content gets found, orphaned content gets forgotten. Built linking strategies that created self-navigating knowledge bases. Joined the Wiki Gardener because here's a system that can maintain a complete link graph automatically.

#### Functionality Requirements (Internal)

**Function:**
> Identify relationships between content. Create appropriate cross-references. Maintain bidirectional links. Detect orphaned pages. Build navigation paths.

**Importance:** High (links enable discovery)  
**Coverage Area:** Cross-referencing, link management, navigation

**Model Parameters:**

| Parameter | Score (1-10) | Rationale |
|-----------|--------------|-----------|
| Creativity | 4 | Linking is methodical |
| Logic | 9 | Must reason about relationships |
| Brain-tier | 8 | Relationship detection |
| Memory | 10 | Must know all pages for linking |

**Special Capabilities:**
- None beyond baseline (linking focus)

---

### Deprecation Officer
**Role:** Watchdog (Accuracy Guardian)  
**Team Function:** Detects conflicts, flags stale content, ensures wiki accuracy

#### Persona

**Personal Traits:**
- Has a sixth sense for contradictions
- Gets deeply uncomfortable when the wiki contains conflicting information
- Believes outdated docs are worse than no docs (they mislead)
- Takes grim satisfaction in catching conflicts before they cause confusion
- Catchphrase: "Wait — that contradicts..." / "This was last updated 6 months ago." / "Which is true: X or Y?"

`Tags: contradiction-sensor, conflict-uncomfortable, outdated-preventer, truth-seeker`

**Professional Traits:**
- Expert at detecting conflicts between new and existing content
- Strong at identifying stale pages needing review
- Escalates unresolvable conflicts clearly
- Maintains conflict audit trail
- Never lets contradictory information coexist silently

`Tags: conflict-detector, staleness-identifier, escalation-clearer, audit-keeper`

**Life Story:**
> Deprecation Officer was a QA engineer who moved into documentation after seeing too many bugs caused by outdated docs. Built verification systems that caught conflicts between documentation and reality. Learned that the most dangerous documentation is confidently wrong documentation. Joined the Wiki Gardener because here's a system that can check every update against everything that exists.

#### Functionality Requirements (Internal)

**Function:**
> Detect conflicts between new info and existing content. Flag stale pages. Resolve conflicts when possible, escalate when not. Maintain accuracy audit trail.

**Importance:** Critical (conflicts undermine trust)  
**Coverage Area:** Conflict detection, staleness, accuracy

**Model Parameters:**

| Parameter | Score (1-10) | Rationale |
|-----------|--------------|-----------|
| Creativity | 4 | Detection is systematic |
| Logic | 10 | Must reason about contradictions |
| Brain-tier | 9 | Complex comparison logic |
| Memory | 10 | Must compare against all content |

**Special Capabilities:**
- None beyond baseline (watchdog focus)

---

# Part 4: Quality Checklist

## Customer-Facing
- [x] Name is catchy and explanatory ("Wiki Gardener")
- [x] Catch phrase completes the picture ("You dump the chaos. We cultivate the knowledge.")
- [x] Description sets clear expectations (third person, no marketing language)
- [x] Quick starts cover common use cases (20 prompts across categories)
- [x] Default rounds make sense for the flow (2-4 rounds with rationale)

## Internal Design
- [x] Value statement is clear and compelling (4 flows with Value Type)
- [x] Product tree structure serves the mission (wiki hierarchy + changelog + conflicts)
- [x] Chat vibe matches the district and purpose (efficient, accuracy-focused)
- [x] Communication patterns are defined (Who Talks to Whom table)

## Team Composition
- [x] Each member has distinct, necessary function (4 distinct roles)
- [x] Team covers full spectrum needed for mission (classify → write → link → verify)
- [x] 8 members max (4 members — lean team)
- [x] Model requirements are realistic and justified (parameters with rationale)
- [x] Personas are specific, not generic (life stories, catchphrases, tags)

## District Alignment
- [x] Fits district philosophy (CORTEX: knowledge management)
- [x] Output matches district standards (organized, linked, versioned)
- [x] Multi-agent format is justified (separation of writing and conflict detection)

---

# Part 5: Key Design Decisions

## Dump-First Philosophy

Users don't format, structure, or organize. They dump raw information. The system handles everything else. This eliminates the friction that kills documentation systems.

## Conflict Detection Is Mandatory

Every update is checked against existing content. Contradictions cannot slip through silently. Either they're resolved automatically (with audit trail) or escalated for human decision.

## Changelog as First-Class Output

Every update produces a shareable "What Changed" digest. This enables teams to stay informed without actively monitoring the wiki. Changes are transparent by default.

## Links Are Bidirectional

When A links to B, B knows it's linked from A. This creates a true knowledge graph where navigation flows both ways and orphaned content is immediately visible.

## Preserve Raw Inputs

Original dumps are stored alongside processed content. This preserves context, enables re-processing if needed, and provides audit trail for how content evolved.

## Health Monitoring Built-In

The wiki has a health score based on staleness, conflicts, orphans, and broken links. Problems surface proactively rather than accumulating silently.

---

# Part 6: Wiki Health Metrics

| Metric | Healthy | Warning | Critical |
|--------|---------|---------|----------|
| **Staleness** | <10% pages older than 90 days | 10-25% | >25% |
| **Conflicts** | 0 open | 1-3 open | >3 open |
| **Orphans** | <5% pages with no inbound links | 5-15% | >15% |
| **Broken Links** | 0 | 1-5 | >5 |
| **Recent Activity** | Updates in last 7 days | 7-30 days | >30 days |

---

# Part 7: Open Questions

1. **Version control:** Full history with diffs, or just current + changelog?

2. **Access control:** Should different people have different edit permissions?

3. **External sources:** Should wiki link to external docs or only internal?

4. **Templates:** Should there be page templates for common doc types?

5. **Search:** How sophisticated should wiki search be?

6. **Export:** Support for exporting wiki to static site, PDF, etc.?

7. **Multi-wiki:** Can one team manage multiple separate wikis?

---

*Specification Version: 1.0*  
*District: CORTEX*  
*Foundation: CTX-001 (The Digital Brain)*  
*Status: Ready for implementation review*

═══════════════════════════════════════════════════════════
              THE WIKI GARDENER — SESSION CLOSED
         You dump the chaos. We cultivate the knowledge.
═══════════════════════════════════════════════════════════