# Pattern: Proactive Intelligence (Team-Initiated)

## The Gap

Current patterns are REACTIVE—user asks, team responds. But valuable assistance is often PROACTIVE:

```
REACTIVE: User asks "How's my savings goal?"
PROACTIVE: "Your savings rate dropped 30% this month—unexpected expense or change in income?"
```

## The Insight

The team should NOTICE things and surface them without being asked. This requires:
- Continuous monitoring
- Threshold definitions
- Surfacing judgment
- Appropriate timing

## The Mechanism

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

## Monitor Types

| Monitor Type | Watches For | Example |
|--------------|-------------|---------|
| **Threshold** | Value crosses limit | Stress > 7 |
| **Trend** | Direction change | Savings trending down |
| **Streak** | Consecutive occurrences | 5 days no exercise |
| **Absence** | Missing expected input | No check-in in 3 days |
| **Deadline** | Approaching + status | Goal deadline near, off track |
| **Correlation** | Cross-metric pattern | Stress up + sleep down |

## Chair Behaviors

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

## Surfacing Judgment

Not everything triggered should be surfaced:

```
Surfacing Decision Tree:
1. Is this actionable? (if not, maybe skip)
2. Is this new information? (if known, skip)
3. Is timing appropriate? (crisis? don't pile on)
4. How urgent? (high → surface immediately, low → queue)
5. Was this recently surfaced? (avoid nagging)
```

## High-Value For

| Team | Proactive Monitoring |
|------|---------------------|
| Wellness Warriors | Health metrics, stress patterns |
| Goal Architects | Goal progress, deadline approach |
| Wealth Architects | Spending spikes, savings drops |
| Career Council | Application deadlines, follow-ups |
| Family Harmony Council | Relationship health indicators |
