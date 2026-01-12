# Pattern: Cross-Domain Synthesis (Life Intelligence)

## The Gap

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

## The Insight

VITALS teams should produce CROSS-DOMAIN INSIGHTS that no single domain would see. This requires a synthesis layer that reads across domains.

## The Mechanism

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

## Signal Export

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

## Product Structure

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

## Chair Behaviors

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

## Cross-Domain Pattern Types

| Pattern | Signals | Insight |
|---------|---------|---------|
| **Stress Cascade** | Stress↑ + Sleep↓ + Social↓ + Spending↑ | Burnout warning |
| **Momentum** | Exercise↑ + Mood↑ + Productivity↑ | Virtuous cycle active |
| **Financial Stress** | Savings↓ + Anxiety↑ + Sleep↓ | Money worry affecting life |
| **Relationship Drain** | Social conflict + Mood↓ + Work↓ | Personal issues spilling |
| **Success Blocker** | Career stalled + Goal progress↓ + Mood↓ | Demotivation pattern |

## High-Value For

| Team | Cross-Domain Synthesis |
|------|------------------------|
| Life Support System | Everything—full life view |
| The Advisory Board | Integrating all life wisdom |
| Wellness Warriors | Health + Sleep + Stress + related domains |
| Goal Architects | Progress across all goal areas |
| Family Harmony Council | Family dynamics + individual stress |
