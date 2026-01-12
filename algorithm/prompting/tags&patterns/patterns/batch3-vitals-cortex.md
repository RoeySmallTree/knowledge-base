# Advanced Patterns: CORTEX & VITALS Deep Dive

Patterns addressing gaps in knowledge management (CORTEX) and personal assistance (VITALS) that current structures don't cover.

---

## Gap Analysis

### What Current Patterns Cover

| Pattern | Strength | Gap |
|---------|----------|-----|
| Context Management | Stores user info | Doesn't track CHANGE over time |
| Accumulation | Grows structure | Same view for all purposes |
| Intake Processing | Queues new info | Doesn't TRANSFORM knowledge |
| Map | Navigation | Doesn't show TRAJECTORY |
| Referencing | Dependencies | Doesn't cross DOMAINS |

### What's Missing for CORTEX

- **Knowledge transforms** — Raw info → Understanding → Mastery
- **Multiple views** — Same knowledge, different presentations
- **Freshness decay** — Knowledge gets stale
- **Query optimization** — Finding the right thing fast

### What's Missing for VITALS

- **Temporal awareness** — Progress over time, not just current state
- **Cross-domain synthesis** — Connections between life areas
- **Proactive intelligence** — Team notices things before user asks
- **Learning from user** — Adapting to what works for THIS person
- **Recurring engagement** — Sessions that build on each other

---

## Pattern: Temporal Tracking (Longitudinal Awareness)

### The Gap

Current patterns track STATE (what is) but not TRAJECTORY (how it's changing).

```
WITHOUT TEMPORAL:
"User weight: 180 lbs"
"User mood: stressed"
"User savings: $5,000"

WITH TEMPORAL:
"User weight: 180 lbs (↓12 lbs over 3 months, on track)"
"User mood: stressed (5th consecutive session, escalating pattern)"
"User savings: $5,000 (↑$500/month, ahead of goal)"
```

### The Insight

VITALS teams care about TRAJECTORY as much as current state. A weight loss journey isn't "current weight" but "where you started, where you are, rate of change, projected outcome."

### The Mechanism

```
"Tracking: [Metric]" (Content)
├── Current: [value] as of [date]
├── History: [time-series data]
├── Trend: [direction, rate]
├── Goal: [target, deadline]
├── Projection: [expected outcome at current rate]
└── Flags: [concerning patterns, celebrations]
```

### Product Structure

```
"User Journey" (Orchestration)
├── "Tracking: Weight" (Content)
│   ├── Current: 180 lbs (Dec 2024)
│   ├── History: 192→188→184→180 (Sep→Oct→Nov→Dec)
│   ├── Trend: -4 lbs/month
│   ├── Goal: 170 lbs by March
│   ├── Projection: 168 lbs by March (ahead of goal!)
│   └── Flag: 🎉 Crossed 180 milestone
│
├── "Tracking: Stress Level" (Content)
│   ├── Current: 7/10 (high)
│   ├── History: 5→5→6→7→7 (last 5 sessions)
│   ├── Trend: ↑ escalating
│   ├── Goal: Maintain <5
│   ├── Projection: Continuing to rise
│   └── Flag: ⚠️ 5 sessions elevated, intervention suggested
│
└── "Tracking: Savings" (Content)
    └── [...]
```

### Chair Behaviors

**On Data Update:**
```
User shares new data point:
1. Add to history
2. Recalculate trend
3. Update projection
4. Check for flags (milestones, concerns)
5. Surface relevant flags to user
```

**On Session Start:**
```
Chair reviews tracking products:
1. What's on track? What's off?
2. Any concerning patterns?
3. Proactive mentions based on trajectory
```

**Proactive Surfacing:**
```
"I notice your stress has been elevated for 5 sessions now, 
and it's trending upward. Your weight loss is going great, 
but I'm wondering if the stress might affect sustainability. 
Want to explore what's driving the stress?"
```

### Cross-Metric Analysis

```
"Cross-Tracking Analysis" (Content)
├── Correlations discovered:
│   ├── Stress ↑ correlates with Sleep ↓ (r=0.7)
│   ├── Exercise days correlate with Mood ↑
│   └── Savings rate unaffected by other metrics
│
├── Concerning patterns:
│   └── Stress rising while sleep declining → burnout risk
│
└── Positive patterns:
    └── Weight trend sustained despite stress → strong habits
```

### High-Value For

| Team | Tracking Use |
|------|--------------|
| Wellness Warriors | Weight, mood, sleep, exercise, stress |
| Goal Architects | Goal progress, habit streaks |
| Wealth Architects | Net worth, savings rate, spending categories |
| Career Council | Applications, interviews, skill development |
| The Advisory Board | Life satisfaction, relationship health |

---

## Pattern: Knowledge Crystallization (Learning Journey)

### The Gap

Intake Processing queues and routes information. But knowledge has a MATURITY journey:

```
Raw Info → Processed → Understood → Integrated → Mastered
```

Current patterns don't track where knowledge IS in this journey.

### The Insight

CORTEX teams should know not just WHAT you've learned, but HOW WELL you know it. A Personal University needs to know:
- What you've read (raw)
- What you can explain (understood)
- What you can apply (integrated)
- What you've mastered (automatic)

### The Mechanism

```
"Knowledge Unit: [Topic]" (Content)
├── Status: [raw | processed | understood | integrated | mastered]
├── First Encountered: [date]
├── Last Engaged: [date]
├── Engagement Count: [N]
├── Confidence: [self-assessed or tested]
├── Connections: [[p:related-units]]
└── Content: [the actual knowledge]
```

### Crystallization Stages

| Stage | Meaning | Evidence |
|-------|---------|----------|
| **Raw** | Intake, not processed | Just arrived |
| **Processed** | Summarized, structured | Can be retrieved |
| **Understood** | Can explain | Answered questions about it |
| **Integrated** | Connected to other knowledge | Cross-references active |
| **Mastered** | Automatic, foundational | Applied multiple times |

### Product Structure

```
"Knowledge Base: Machine Learning" (Orchestration)
├── "Map: ML Knowledge" (Content) — structure + status overview
│
├── "Fundamentals" (Collection)
│   ├── "Linear Regression" (Content) — status: mastered
│   ├── "Gradient Descent" (Content) — status: integrated
│   └── "Loss Functions" (Content) — status: understood
│
├── "Advanced" (Collection)
│   ├── "Transformers" (Content) — status: processed
│   └── "RLHF" (Content) — status: raw
│
└── "Crystallization Queue" (Content)
    ├── Ready for understanding test: Transformers
    ├── Ready for integration: Loss Functions
    └── Needs refresh (stale): [none]
```

### Chair Behaviors

**On New Knowledge:**
```
New info arrives:
1. Create Knowledge Unit at "raw" status
2. Assign processing (summarize, structure)
3. Update to "processed" when complete
```

**On Engagement:**
```
User asks about or uses knowledge:
1. Increment engagement count
2. Update "last engaged"
3. Assess if status should advance:
   - Explained it? → understood
   - Connected it? → integrated
   - Applied automatically? → mastered
```

**On Crystallization Push:**
```
Identify units ready for advancement:
1. Find "processed" units with multiple engagements
2. Test for understanding (quiz, explain-back)
3. If passed, advance status
4. Create connections to related units
```

**On Staleness Check:**
```
Periodically review:
1. Find units not engaged in N days
2. For understood+: suggest refresher
3. For mastered: probably fine
4. For raw/processed: deprioritize or prune
```

### Spaced Repetition Integration

```
"Review Schedule" (Content)
├── Due today:
│   ├── [[p:gradient-descent]] — last: 7 days ago, status: integrated
│   └── [[p:transformers]] — last: 3 days ago, status: processed
│
├── Due this week:
│   └── [[p:linear-regression]] — last: 30 days ago, status: mastered
│
└── Schedule algorithm: Spaced repetition based on status + confidence
```

### High-Value For

| Team | Crystallization Use |
|------|---------------------|
| The Personal University | Learning curriculum |
| Technical Documentation Hub | Understanding verification |
| The Living Codex | Rule comprehension |
| Research Synthesis Lab | Source integration |
| Policy & Procedure Vault | Compliance knowledge |

---

## Pattern: Multi-View Projection (Same Data, Many Lenses)

### The Gap

Current patterns store ONE structure. But the same knowledge often needs MULTIPLE presentations:

```
Same content, different needs:
- Reference view (look up quickly)
- Learning view (progressive disclosure)
- Quiz view (test understanding)
- Summary view (high-level overview)
- Debug view (troubleshooting path)
```

### The Insight

CORTEX teams shouldn't duplicate content for different views. They should have ONE source of truth with MULTIPLE projections.

### The Mechanism

```
"Source: [Content]" (Content)
├── The actual content (source of truth)
└── References: depends_on, related_to

"View: Reference" (Content)
├── projection_of: [[p:source]]
├── view_type: reference
└── [structured for quick lookup]

"View: Tutorial" (Content)  
├── projection_of: [[p:source]]
├── view_type: tutorial
└── [structured for learning]

"View: Quiz" (Content)
├── projection_of: [[p:source]]
├── view_type: quiz
└── [structured for testing]
```

### Product Structure

```
"API: Authentication" (Orchestration)
├── "Source: Auth Concepts" (Content) — the truth
│   └── [Complete auth documentation]
│
├── "Views" (Collection)
│   ├── "Reference: Auth" (Content)
│   │   ├── projection_of: [[p:source-auth]]
│   │   └── [Quick reference format, code snippets first]
│   │
│   ├── "Tutorial: Auth" (Content)
│   │   ├── projection_of: [[p:source-auth]]
│   │   └── [Step-by-step, progressive, with exercises]
│   │
│   ├── "Troubleshoot: Auth" (Content)
│   │   ├── projection_of: [[p:source-auth]]
│   │   └── [Problem → Solution tree]
│   │
│   └── "Quiz: Auth" (Content)
│       ├── projection_of: [[p:source-auth]]
│       └── [Questions to test understanding]
│
└── "View Registry" (Content)
    └── What views exist, when to use each
```

### Chair Behaviors

**On Source Update:**
```
Source content changes:
1. Check all views with projection_of: [[p:this-source]]
2. Flag views as potentially stale
3. Assign view regeneration OR
4. Auto-regenerate if transformation is deterministic
```

**On View Request:**
```
User asks for specific view:
1. Check if view exists
2. If exists and current → present
3. If exists but stale → regenerate then present
4. If doesn't exist → generate from source
```

**On View Generation:**
```
Generating a view:
1. Attach source as context
2. Directive specifies view type:
   "Transform [[p:source]] into reference format:
    - Code snippets first
    - Minimal explanation
    - Quick copy-paste ready"
```

### View Types

| View Type | Structure | Use Case |
|-----------|-----------|----------|
| **Reference** | Dense, lookup-optimized | "How do I call X?" |
| **Tutorial** | Progressive, step-by-step | "Teach me X" |
| **Troubleshoot** | Problem → Solution tree | "X isn't working" |
| **Quiz** | Questions + hidden answers | "Test my knowledge" |
| **Summary** | High-level, executive | "What is X about?" |
| **Deep-Dive** | Comprehensive, all details | "I want to understand everything" |
| **Cheatsheet** | Ultra-condensed | "Quick reminder" |

### High-Value For

| Team | View Use |
|------|----------|
| Technical Documentation Hub | API reference vs tutorial vs troubleshoot |
| The Personal University | Learning vs quiz vs reference |
| Policy & Procedure Vault | Full policy vs quick reference vs decision tree |
| The Living Codex | Rule text vs simplified vs examples |
| Organization Core | Full knowledge vs executive summary |

---

## Pattern: Cross-Domain Synthesis (Life Intelligence)

### The Gap

Current patterns work within single domain/team. But life's domains INTERCONNECT:

```
Isolated:                          Connected:
├── Wellness: stress high          "Your stress (Wellness) has been 
├── Career: big deadline           high since your deadline (Career)
├── Finance: spending up           was announced. Your spending (Finance)
└── Sleep: declining               on delivery food correlates with late
                                   nights. Your sleep (Sleep) decline
No one sees the pattern.           started same week. Pattern: work 
                                   stress → sleep loss → comfort spending"
```

### The Insight

VITALS teams should produce CROSS-DOMAIN INSIGHTS that no single domain would see. This requires a synthesis layer that reads across domains.

### The Mechanism

```
"Domain: Wellness" (Orchestration)
├── [Wellness-specific products]
└── "Export: Wellness Signals" (Content) — key metrics, flags

"Domain: Career" (Orchestration)  
├── [Career-specific products]
└── "Export: Career Signals" (Content) — key events, stress indicators

"Cross-Domain Synthesis" (Orchestration)
├── imports: [[p:wellness-signals]], [[p:career-signals]], [[p:finance-signals]]
│
├── "Correlation Matrix" (Content)
│   └── Which domains affect which
│
├── "Active Patterns" (Content)
│   └── Currently detected cross-domain patterns
│
└── "Synthesis Insights" (Content)
    └── Actionable cross-domain observations
```

### Signal Export

Each domain exports its key signals:

```
"Export: Wellness Signals" (Content)
├── Current stress: 7/10 (high)
├── Trend: ↑ over 2 weeks
├── Flags: elevated_stress, declining_sleep
├── Key events: none
└── Last updated: [date]
```

Synthesis layer reads all exports:

```
"Cross-Domain Synthesis" reads:
├── Wellness: elevated_stress, declining_sleep
├── Career: major_deadline approaching (Dec 15)
├── Finance: spending_spike, category: food_delivery
├── Relationships: reduced_social_activity
└── Sleep: duration_declining, quality_declining

Synthesis: "Deadline stress cascade detected"
```

### Product Structure

```
"Life Dashboard" (Orchestration)
├── "Domains" (Collection)
│   ├── "Wellness" (Orchestration) + export
│   ├── "Career" (Orchestration) + export
│   ├── "Finance" (Orchestration) + export
│   ├── "Relationships" (Orchestration) + export
│   └── "Personal Growth" (Orchestration) + export
│
├── "Synthesis Layer" (Orchestration)
│   ├── "Signal Imports" (Content) — aggregated signals
│   ├── "Correlation History" (Content) — learned patterns
│   ├── "Active Patterns" (Content) — current detections
│   └── "Proactive Insights" (Content) — actionable synthesis
│
└── "Map: Life Overview" (Content)
    └── Cross-domain status + active patterns
```

### Chair Behaviors

**On Session Start:**
```
1. Refresh signal exports from each domain
2. Run synthesis analysis
3. Check for new patterns or escalations
4. Proactively surface if significant
```

**Pattern Detection:**
```
Analyze signal correlations:
1. Temporal correlation: Do events align?
2. Directional correlation: When X rises, does Y fall?
3. Threshold triggers: X crossed threshold, did Y change?

Store learned correlations for this user.
```

**Proactive Synthesis:**
```
Significant pattern detected:

"I've noticed a pattern I want to share:
 
Since your work deadline was announced 2 weeks ago:
- Your stress has increased from 4 to 7
- Your sleep has dropped from 7h to 5.5h
- Your food delivery spending is up 40%
- You've cancelled 3 social plans

This looks like a deadline stress cascade. The deadline is 
in 5 days. Want to talk about managing this final stretch, 
or make a recovery plan for after?"
```

### Cross-Domain Pattern Types

| Pattern | Signals | Insight |
|---------|---------|---------|
| **Stress Cascade** | Stress↑ + Sleep↓ + Social↓ + Spending↑ | Burnout warning |
| **Momentum** | Exercise↑ + Mood↑ + Productivity↑ | Virtuous cycle active |
| **Financial Stress** | Savings↓ + Anxiety↑ + Sleep↓ | Money worry affecting life |
| **Relationship Drain** | Social conflict + Mood↓ + Work↓ | Personal issues spilling |
| **Success Blocker** | Career stalled + Goal progress↓ + Mood↓ | Demotivation pattern |

### High-Value For

| Team | Cross-Domain Synthesis |
|------|------------------------|
| Life Support System | Everything—full life view |
| The Advisory Board | Integrating all life wisdom |
| Wellness Warriors | Health + Sleep + Stress + related domains |
| Goal Architects | Progress across all goal areas |
| Family Harmony Council | Family dynamics + individual stress |

---

## Pattern: Ritual Cadence (Recurring Sessions)

### The Gap

Current patterns treat each session as independent. But VITALS teams often have RECURRING engagements:

```
- Daily check-in
- Weekly review
- Monthly planning
- Quarterly reflection
- Annual review
```

These sessions should BUILD on each other with specific structures for each cadence.

### The Insight

Recurring sessions aren't just "another session"—they have:
- Specific PURPOSE for that cadence
- Expected INPUTS from previous instance
- Expected OUTPUTS for next instance
- CONTINUITY structure

### The Mechanism

```
"Ritual: Weekly Review" (Orchestration)
├── "Ritual Definition" (Content)
│   ├── Cadence: weekly (Sundays)
│   ├── Purpose: Review week, plan next week
│   ├── Standard agenda: [...]
│   └── Inputs from: daily check-ins, previous weekly
│
├── "Instance: 2024-W48" (Content)
│   ├── ritual_type: weekly_review
│   ├── Date: Dec 1, 2024
│   ├── Summary: [what happened]
│   ├── Wins: [...]
│   ├── Challenges: [...]
│   ├── Next week intentions: [...]
│   └── Carryover: [items for next week]
│
├── "Instance: 2024-W49" (Content)
│   ├── previous: [[p:instance-w48]]
│   ├── Date: Dec 8, 2024
│   └── [...]
│
└── "Ritual Analytics" (Content)
    ├── Completion rate: 85%
    ├── Common wins themes: [...]
    ├── Recurring challenges: [...]
    └── Trend: engagement stable
```

### Ritual Types

| Ritual | Cadence | Purpose | Key Elements |
|--------|---------|---------|--------------|
| **Check-in** | Daily | Pulse, intentions | Mood, energy, top 3 today |
| **Review** | Weekly | Reflect, plan | Wins, challenges, next week |
| **Planning** | Monthly | Goals, adjustments | Goal progress, next month |
| **Reflection** | Quarterly | Big picture | Trends, pivots, priorities |
| **Annual Review** | Yearly | Life assessment | Year review, next year vision |

### Product Structure

```
"Rituals" (Orchestration)
├── "Daily Check-in" (Orchestration)
│   ├── Definition (Content)
│   └── Instances (Collection) — one per day
│
├── "Weekly Review" (Orchestration)
│   ├── Definition (Content)
│   └── Instances (Collection) — one per week
│
├── "Monthly Planning" (Orchestration)
│   ├── Definition (Content)
│   └── Instances (Collection) — one per month
│
└── "Ritual Map" (Content)
    ├── Active rituals
    ├── Completion tracking
    └── Next due dates
```

### Chair Behaviors

**On Session Start:**
```
Check ritual schedule:
1. Any rituals due today?
2. Any rituals overdue?
3. If ritual session → load ritual definition + previous instance
```

**Starting Ritual Session:**
```
1. Load ritual definition (purpose, agenda)
2. Load previous instance (for continuity)
3. Load carryover items
4. Present: "This is your weekly review. Last week you..."
```

**During Ritual:**
```
Follow ritual structure:
1. Review previous (connected to [[p:previous-instance]])
2. Walk through agenda items
3. Capture standard fields (wins, challenges, intentions)
4. Identify carryover for next instance
```

**Completing Ritual:**
```
1. Create instance product
2. Link to previous instance
3. Extract carryover items
4. Update ritual analytics
5. Schedule/remind next instance
```

### Cross-Ritual Integration

```
Rituals feed each other:

Daily check-ins → aggregate into → Weekly review
Weekly reviews → aggregate into → Monthly planning
Monthly planning → aggregate into → Quarterly reflection

"Monthly Planning" receives:
- 4 weekly review summaries
- Aggregated wins/challenges
- Patterns across weeks
```

### High-Value For

| Team | Ritual Use |
|------|------------|
| Goal Architects | Daily intentions, weekly review, monthly goals |
| Wellness Warriors | Daily mood/habits, weekly health review |
| Wealth Architects | Weekly spending review, monthly budget |
| Career Council | Weekly progress, quarterly career review |
| Life Support System | Full ritual stack |

---

## Pattern: Proactive Intelligence (Team-Initiated)

### The Gap

Current patterns are REACTIVE—user asks, team responds. But valuable assistance is often PROACTIVE:

```
REACTIVE: User asks "How's my savings goal?"
PROACTIVE: "Your savings rate dropped 30% this month—unexpected expense or change in income?"
```

### The Insight

The team should NOTICE things and surface them without being asked. This requires:
- Continuous monitoring
- Threshold definitions
- Surfacing judgment
- Appropriate timing

### The Mechanism

```
"Proactive Monitoring" (Orchestration)
├── "Monitors" (Collection)
│   ├── "Monitor: Stress Level" (Content)
│   │   ├── Watches: [[p:tracking-stress]]
│   │   ├── Threshold: >7 for 3+ sessions
│   │   ├── Current: triggered (7, 7, 7)
│   │   └── Last alerted: [date]
│   │
│   ├── "Monitor: Savings Rate" (Content)
│   │   ├── Watches: [[p:tracking-savings]]
│   │   ├── Threshold: <80% of normal
│   │   ├── Current: triggered (dropped 30%)
│   │   └── Last alerted: never
│   │
│   └── "Monitor: Goal Deadline" (Content)
│       ├── Watches: [[p:goal-marathon]]
│       ├── Threshold: 30 days before deadline, off track
│       ├── Current: not triggered
│       └── Last alerted: n/a
│
├── "Alert Queue" (Content)
│   └── Pending proactive surfaces
│
└── "Surfacing History" (Content)
    └── What was surfaced when, user response
```

### Monitor Types

| Monitor Type | Watches For | Example |
|--------------|-------------|---------|
| **Threshold** | Value crosses limit | Stress > 7 |
| **Trend** | Direction change | Savings trending down |
| **Streak** | Consecutive occurrences | 5 days no exercise |
| **Absence** | Missing expected input | No check-in in 3 days |
| **Deadline** | Approaching + status | Goal deadline near, off track |
| **Correlation** | Cross-metric pattern | Stress up + sleep down |

### Chair Behaviors

**On Session Start:**
```
Check monitors:
1. Evaluate all active monitors
2. Identify triggered monitors
3. Check surfacing appropriateness:
   - Recently alerted? (avoid nagging)
   - More urgent matters?
   - User mood/context?
4. Prioritize alerts
5. Surface naturally in conversation
```

**Surfacing Naturally:**
```
Not: "ALERT: Your savings rate dropped 30%!"

But: "Before we dive in, I noticed your savings rate 
dropped about 30% this month. That's unusual for you—
was there an unexpected expense, or has something changed?"
```

**Tracking Response:**
```
After surfacing:
1. Record what was surfaced
2. Record user response (acknowledged, dismissed, acted on)
3. Learn for future (if dismissed repeatedly, adjust threshold)
```

### Surfacing Judgment

Not everything triggered should be surfaced:

```
Surfacing Decision Tree:
1. Is this actionable? (if not, maybe skip)
2. Is this new information? (if known, skip)
3. Is timing appropriate? (crisis? don't pile on)
4. How urgent? (high → surface immediately, low → queue)
5. Was this recently surfaced? (avoid nagging)
```

### High-Value For

| Team | Proactive Monitoring |
|------|---------------------|
| Wellness Warriors | Health metrics, stress patterns |
| Goal Architects | Goal progress, deadline approach |
| Wealth Architects | Spending spikes, savings drops |
| Career Council | Application deadlines, follow-ups |
| Family Harmony Council | Relationship health indicators |

---

## Pattern: Preference Learning (Adaptive Personalization)

### The Gap

Context Management stores STATED preferences. But the team should learn EFFECTIVE preferences:

```
STATED: "I like direct feedback"
LEARNED: "Direct feedback on work is good, but gentler approach 
         on personal matters gets better response"
```

### The Insight

The team should observe what WORKS for this user and adapt:
- Which advice approaches get implemented?
- Which framings resonate vs. fall flat?
- When does user engage more vs. less?
- What time/context yields best responses?

### The Mechanism

```
"Preference Learning" (Orchestration)
├── "Stated Preferences" (Content) — what user has told us
│   └── [explicit preferences]
│
├── "Learned Preferences" (Content) — what we've observed
│   ├── Communication:
│   │   ├── Direct feedback: works for work, not personal
│   │   ├── Morning sessions: higher engagement
│   │   └── Metaphors: resonate strongly
│   │
│   ├── Content:
│   │   ├── Detailed analysis: appreciated
│   │   ├── Action items: always requested
│   │   └── Long responses: sometimes skimmed
│   │
│   └── Approach:
│       ├── Challenging questions: well-received
│       ├── Proactive suggestions: usually acted on
│       └── Emotional support: prefer practical over validation
│
├── "Interaction Log" (Content) — evidence basis
│   └── [observations supporting learned preferences]
│
└── "Adaptation Notes" (Content) — how we're adapting
    └── [current adaptations in effect]
```

### What to Learn

| Dimension | What to Observe |
|-----------|-----------------|
| **Tone** | Direct vs. gentle, formal vs. casual |
| **Depth** | Brief vs. detailed, overview vs. thorough |
| **Format** | Lists vs. prose, structured vs. flowing |
| **Timing** | Best times for engagement, session length |
| **Approach** | Challenge vs. support, push vs. patience |
| **Content** | What topics engage, what gets skipped |

### Chair Behaviors

**Observation:**
```
After each interaction:
1. Did user engage with response? (followed up, acted on, or dropped)
2. Did user push back? (disagreement, "too much", "not what I meant")
3. What approach was used? (direct, gentle, detailed, brief)
4. Log observation
```

**Pattern Detection:**
```
Over time:
1. Analyze interaction log
2. Find patterns: "Direct feedback on career → action. Direct on health → pushback"
3. Update learned preferences
4. Note confidence level (how many observations)
```

**Adaptation:**
```
When composing response:
1. Check learned preferences for this context
2. Adapt approach accordingly
3. Note adaptation for tracking

Pin: "USER PREF: Prefers morning sessions, direct on work, 
     gentle on personal, always wants action items"
```

### High-Value For

| Team | Learning Focus |
|------|----------------|
| Life Support System | All dimensions—learns whole person |
| The Advisory Board | Communication style per persona |
| Wellness Warriors | What motivates vs. demotivates |
| Career Council | Feedback style, risk tolerance |
| Goal Architects | Accountability style, planning depth |

---

## Summary: Advanced Patterns

| Pattern | Gap Filled | Primary For |
|---------|------------|-------------|
| **Temporal Tracking** | Trajectory, not just state | VITALS |
| **Knowledge Crystallization** | Learning maturity journey | CORTEX |
| **Multi-View Projection** | Same source, many presentations | CORTEX |
| **Cross-Domain Synthesis** | Life patterns across domains | VITALS |
| **Ritual Cadence** | Recurring sessions with continuity | VITALS |
| **Proactive Intelligence** | Team-initiated insights | VITALS |
| **Preference Learning** | Adaptive personalization | Both |

---

## Pattern Combinations for Optimal Teams

### Optimal VITALS Stack

```
For Life Support System / Advisory Board:

1. Context Management — base user context
2. Temporal Tracking — all key metrics tracked over time
3. Cross-Domain Synthesis — patterns across life areas
4. Ritual Cadence — daily/weekly/monthly rhythms
5. Proactive Intelligence — team notices and surfaces
6. Preference Learning — adapts to user over time
7. Sticky Notes — pins for current concerns
8. Map — life dashboard navigation

Result: A system that KNOWS you, TRACKS your life, 
        NOTICES patterns, INITIATES helpfully, and 
        ADAPTS to what works.
```

### Optimal CORTEX Stack

```
For Personal University / Organization Core:

1. Intake Processing — new information queued
2. Knowledge Crystallization — maturity tracking
3. Multi-View Projection — flexible presentation
4. Referencing — knowledge dependencies
5. Map — navigable knowledge structure
6. Ritual Cadence — study/review rhythms
7. Proactive Intelligence — spaced repetition triggers

Result: A knowledge system that INGESTS intelligently,
        TRACKS understanding, PRESENTS appropriately,
        MAINTAINS coherence, and REINFORCES learning.
```