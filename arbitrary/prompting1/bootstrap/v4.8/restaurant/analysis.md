# V4.8 vs V4.7 Bootstrap Comparison

**Date:** 2025-12-11  
**Test Mission:** Restaurant Menu SaaS  
**Model:** Claude Sonnet 4 (via OpenRouter)

---

## Executive Summary

**V4.8 instruction did NOT achieve the intended effect.** The LLM still:
- Invented a brand name ("MenuMaster")
- Stated specific metrics as facts (50+, 6 months, 10%+)
- Invented timelines and targets

Additionally, V4.8 shows **regression** in persona intensity.

---

## Side-by-Side Comparison

### Brand Name

| V4.7 | V4.8 |
|------|------|
| "MenuMaster" ❌ | "MenuMaster" ❌ |

**Result:** No change. Both invent brand name.

---

### Specific Numbers Stated as Facts

| Category | V4.7 | V4.8 |
|----------|------|------|
| Customer target | "50 paying customers" | "50+ restaurants" |
| Timeline | "6 months" | "6 months" |
| Revenue increase | "15% average", "10-20%" | "10%+ average" |
| Uptime | "99.9%" | Not specified |
| Budget | "$50K" | Not specified |
| Time savings | "10+ hours per week" | "10+ hours per week" |
| Other | "sub-2-second load times", "$500-2000/month lost", "90%+ retention" | "95%+ order accuracy", "80%+ reduction", "4.5+ stars" |

**Result:** V4.8 still invents specific numbers. Slightly fewer hard metrics, but still decides things it shouldn't.

---

### Persona Intensity

| Role | V4.7 | V4.8 |
|------|------|------|
| Chair | "strategic architect **obsessed** with building... Every decision must pass the 'would this help a struggling family restaurant survive another month?' test" | "MISSION COMMANDER... responsible for ensuring... You balance ambitious vision with practical execution timelines" |
| Tech Lead | "Your **obsession** is creating bulletproof APIs... Every millisecond of latency and every potential point of failure is a **personal challenge**" | "TECHNICAL ARCHITECT... responsible for building... You own the technical foundation" |
| Product | "**restaurant whisperer** who translates real operational pain... your **insider knowledge is our secret weapon**... features sound good in demos but break down in **busy Friday night service**" | "RESTAURANT ADVOCATE... leveraging your restaurant ownership experience... creating intuitive workflows" |
| Growth | "**growth engine** focused on proving... speak to restaurant owners' core concerns: **survival, profitability, and competitive advantage**" | "GROWTH CATALYST... responsible for positioning... developing messaging" |

**Result:** ⚠️ **REGRESSION**. V4.7 personas are more intense and emotionally engaging. V4.8 uses bland corporate titles ("MISSION COMMANDER", "GROWTH CATALYST") instead of evocative language.

---

### Missing Details Quality

**V4.7:**
```json
[
  "What is the specific target restaurant segment (fast-casual, fine dining, chains vs independents)?",
  "Are there particular geographic markets or delivery platforms to prioritize for initial launch?",
  "What is the expected pricing model and customer acquisition cost tolerance?",
  "Are there specific POS systems or existing tools that must be integrated from day one?",
  "What level of analytics and reporting depth do restaurants actually want vs what they think they want?"
]
```

**V4.8:**
```json
[
  "What is our target pricing model - per location, per menu item, or subscription tiers?",
  "Which POS systems should we prioritize for initial integrations?",
  "What is our geographic focus - local market, national, or international?",
  "Do we want to target specific restaurant types (fast casual, fine dining, etc.) initially?",
  "What is our technical infrastructure budget for hosting and third-party API costs?"
]
```

**Analysis:**
- V4.8 asks about "technical infrastructure budget" — slightly more decision-oriented
- Neither flags "brand name" as needing decision
- Neither flags "timeline" or "customer target" as needing decision
- Both are mostly user-clarification questions, not Decision Product flags

**Result:** Marginal improvement, but still doesn't flag the things it should.

---

## Scoring

| Dimension | V4.7 | V4.8 | Change |
|-----------|------|------|--------|
| Avoids brand name invention | ❌ 0% | ❌ 0% | — |
| Avoids specific number invention | ❌ 20% | ❌ 30% | +10% |
| Persona intensity | ✅ 95% | ⚠️ 70% | **-25%** |
| Missing details quality | ⚠️ 60% | ⚠️ 65% | +5% |
| Overall decision flow compliance | ❌ 30% | ❌ 35% | +5% |

**Net Result:** Slight improvement in decision flagging, but significant regression in persona quality.

---

## Why V4.8 Instruction Failed

The instruction added was:
```
- Do NOT Decide things that belong in project scope - Brand names, specific budgets, 
  timelines, SLAs, and customer targets should be flagged in missing_details for 
  Decision Products. Focus on ambitious outcomes, not settings.
```

**Problems:**
1. **Too general** — Instruction competes with "Be precise" and "measurable success criteria"
2. **Contradicts example** — Example output still shows specific numbers
3. **No positive guidance** — Says what NOT to do, but doesn't show what TO do instead
4. **Buried in list** — One line among many constraints

---

## Recommendations for V4.9

1. **Update the example output** — The example still shows specific numbers. LLM follows examples more than instructions.

2. **Add explicit section** — Instead of one line, add a dedicated section:
   ```markdown
   ### What Belongs in missing_details (for Decision Products)
   
   Flag these for the team to decide — do NOT invent values:
   - Product/brand name
   - Timeline and milestones  
   - Budget
   - Customer targets
   - Technical SLAs (uptime, response time)
   
   Your job is ambitious outcomes, not settings.
   ```

3. **Fix the contradiction** — "Definition of Done (with metrics)" contradicts "don't invent specific numbers". Clarify that metrics should describe WHAT to measure, not specific targets.

4. **Stronger persona guidance** — V4.8 regressed on persona intensity. May need to reinforce the intensity markers in the instruction.

---

## Conclusion

**V4.8 did not achieve its goal.** The minimal instruction change was insufficient to override:
- The existing example (which shows specific numbers)
- The "be precise" / "measurable success criteria" guidance
- The LLM's tendency to be helpful by providing specifics

**Persona quality regressed** — possibly because the new constraint made the LLM more cautious/corporate overall.

**Next step:** Update the example output to show the correct pattern, and add a dedicated section explaining what to flag vs what to decide.
