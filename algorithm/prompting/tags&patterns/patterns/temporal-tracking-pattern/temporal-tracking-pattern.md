# Pattern: Temporal Tracking (Longitudinal Awareness)

## The Gap

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

## The Insight

VITALS teams care about TRAJECTORY as much as current state. A weight loss journey isn't "current weight" but "where you started, where you are, rate of change, projected outcome."

## The Mechanism

```
"Tracking: [Metric]" (Content)
├── Current: [value] as of [date]
├── History: [time-series data]
├── Trend: [direction, rate]
├── Goal: [target, deadline]
├── Projection: [expected outcome at current rate]
└── Flags: [concerning patterns, celebrations]
```

## Product Structure

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

## Chair Behaviors

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

## Cross-Metric Analysis

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

## High-Value For

| Team | Tracking Use |
|------|--------------|
| Wellness Warriors | Weight, mood, sleep, exercise, stress |
| Goal Architects | Goal progress, habit streaks |
| Wealth Architects | Net worth, savings rate, spending categories |
| Career Council | Applications, interviews, skill development |
| The Advisory Board | Life satisfaction, relationship health |
