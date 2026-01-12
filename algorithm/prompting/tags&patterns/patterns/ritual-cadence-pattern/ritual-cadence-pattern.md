# Pattern: Ritual Cadence (Recurring Sessions)

## The Gap

Current patterns treat each session as independent. But VITALS teams often have RECURRING engagements:

```
- Daily check-in
- Weekly review
- Monthly planning
- Quarterly reflection
- Annual review
```

These sessions should BUILD on each other with specific structures for each cadence.

## The Insight

Recurring sessions aren't just "another session"—they have:
- Specific PURPOSE for that cadence
- Expected INPUTS from previous instance
- Expected OUTPUTS for next instance
- CONTINUITY structure

## The Mechanism

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

## Ritual Types

| Ritual | Cadence | Purpose | Key Elements |
|--------|---------|---------|--------------|
| **Check-in** | Daily | Pulse, intentions | Mood, energy, top 3 today |
| **Review** | Weekly | Reflect, plan | Wins, challenges, next week |
| **Planning** | Monthly | Goals, adjustments | Goal progress, next month |
| **Reflection** | Quarterly | Big picture | Trends, pivots, priorities |
| **Annual Review** | Yearly | Life assessment | Year review, next year vision |

## Product Structure

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

## Chair Behaviors

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

## Cross-Ritual Integration

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

## High-Value For

| Team | Ritual Use |
|------|------------|
| Goal Architects | Daily intentions, weekly review, monthly goals |
| Wellness Warriors | Daily mood/habits, weekly health review |
| Wealth Architects | Weekly spending review, monthly budget |
| Career Council | Weekly progress, quarterly career review |
| Life Support System | Full ritual stack |
