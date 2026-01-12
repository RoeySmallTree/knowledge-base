# V4.9 vs V4.7 Bootstrap Analysis

**Date:** 2025-12-11  
**Test Mission:** Restaurant Menu SaaS  
**Model:** Claude Sonnet 4 (via OpenRouter)

---

## Executive Summary

**V4.9 shows significant improvement over V4.7 and V4.8:**

| Issue | V4.7 | V4.8 | V4.9 |
|-------|------|------|------|
| Brand name invented | ❌ "MenuMaster" | ❌ "MenuMaster" | ❌ "MenuSync" |
| Specific numbers in charter | ❌ Many (50, 6mo, 15%, $50K) | ❌ Still many | ✅ **None** |
| Persona intensity | ✅ High | ⚠️ Regressed | ✅ **High (restored)** |
| missing_details quality | ⚠️ Questions only | ⚠️ Slightly better | ✅ **Decision-oriented** |

**V4.9 fixes the main issues except brand name invention.**

---

## Side-by-Side: Specific Numbers

### V4.7 (invented many numbers)
```
- "50 paying restaurant customers within 6 months"
- "15% average revenue increase"
- "99.9% uptime"
- "$50K development budget"
- "6-month timeline"
- "10-20% revenue increase"
- "90%+ retention rate"
- "sub-2-second load times"
```

### V4.9 (describes dimensions instead)
```
- "Success is measured by time saved on menu management"
- "reduction in order errors from outdated menus"
- "increased profit margins from better pricing decisions"
- "measuring time saved on menu updates and error reduction"
- "tracking profit margin improvements"
- "measuring integration depth"
```

**Result: ✅ MAJOR IMPROVEMENT** — V4.9 describes WHAT to measure, not specific targets.

---

## Side-by-Side: Persona Intensity

### V4.7
```
"Your obsession is real-time data sync that doesn't break. You treat every 
millisecond of latency as a personal insult."

"Every feature must pass the 'exhausted manager after a 12-hour shift' test."
```

### V4.8 (regressed)
```
"TECHNICAL ARCHITECT... responsible for building... You own the technical foundation"

"RESTAURANT ADVOCATE... leveraging your restaurant ownership experience..."
```

### V4.9 (restored)
```
"Your obsession is creating a real-time sync engine that never fails... You treat 
data inconsistency across platforms as a personal insult"

"Every user flow must pass the 'stressed manager at 7pm on Friday' test. You are 
not just designing features - you are eliminating the operational nightmares that 
keep restaurant owners awake at night."
```

**Result: ✅ IMPROVEMENT** — V4.9 restored the intensity that V4.8 lost.

---

## Side-by-Side: missing_details Quality

### V4.7 (questions only)
```json
[
  "What is the specific target restaurant segment?",
  "Are there particular geographic markets to prioritize?",
  "What is the expected pricing model?",
  "Are there specific POS systems to integrate?",
  "What level of analytics depth do restaurants want?"
]
```

### V4.9 (decision-oriented)
```json
[
  "Target restaurant segment and initial market focus",
  "Pricing model and revenue targets for year one",
  "Priority integration partners (which POS systems and delivery platforms)",
  "Technical SLA requirements (acceptable sync delay, uptime targets, response times)",
  "Competitive differentiation strategy",
  "Launch timeline and key milestones for MVP and market entry"
]
```

**Result: ✅ IMPROVEMENT** — V4.9 frames these as decisions to be made, not just questions.

---

## Remaining Issue: Brand Name

V4.9 still invented a brand name ("MenuSync") despite the instruction:

```markdown
### What to Flag in missing_details

These belong in missing_details for Decision Products — do NOT invent values:

- **Brand/product name** — flag for team to decide
```

**Why it still failed:**
1. The instruction says to flag it, but doesn't explicitly say "do NOT create a brand name"
2. The mission charter template still asks for "THE MISSION: What we're building/doing" — LLM fills this with a name
3. The example output (while not shown in the API call) may still influence behavior

**Fix for V4.10:** Add explicit prohibition: "Do NOT invent a product/brand name — refer to it as 'this platform' or 'the product'"

---

## Detailed Comparison Table

| Dimension | V4.7 | V4.8 | V4.9 |
|-----------|------|------|------|
| **Brand name** | "MenuMaster" ❌ | "MenuMaster" ❌ | "MenuSync" ❌ |
| **Timeline stated** | "6 months" ❌ | "6 months" ❌ | None ✅ |
| **Budget stated** | "$50K" ❌ | None ✅ | None ✅ |
| **Customer target** | "50/100 customers" ❌ | "50+" ❌ | None ✅ |
| **Revenue target** | "15%, 10-20%" ❌ | "10%+" ❌ | None ✅ |
| **Uptime SLA** | "99.9%, 90%" ❌ | None ✅ | None ✅ |
| **Persona: "obsession"** | ✅ Used | ❌ Missing | ✅ Used |
| **Persona: "personal insult"** | ✅ Used | ❌ Missing | ✅ Used |
| **Persona: contextual test** | "'exhausted manager' test" ✅ | Missing ❌ | "'stressed manager at 7pm on Friday' test" ✅ |
| **missing_details count** | 5 | 5 | 6 |
| **Decision Products flagged** | 0 | 0 | 4 (implied) |

---

## Scoring

| Dimension | V4.7 | V4.8 | V4.9 |
|-----------|------|------|------|
| Avoids brand name | 0% | 0% | 0% |
| Avoids specific numbers | 20% | 30% | **85%** |
| Persona intensity | 95% | 70% | **95%** |
| missing_details quality | 60% | 65% | **80%** |
| **Overall decision flow** | 30% | 35% | **70%** |

**V4.9 Score: 70%** (vs V4.7: 30%, V4.8: 35%)

---

## Progression Summary

```
V4.7 → V4.8: +5% (marginal, with persona regression)
V4.8 → V4.9: +35% (significant improvement)
V4.7 → V4.9: +40% overall improvement
```

---

## V4.9 Strengths

1. **No specific numbers in charter** — Describes dimensions to measure instead
2. **Restored persona intensity** — "obsession", "personal insult", contextual tests
3. **Better missing_details** — Frames as decisions, includes SLA/timeline/targets
4. **Good reasoning** — Acknowledges decisions needed

---

## V4.9 Remaining Gaps

1. **Still invents brand name** — "MenuSync" despite instruction
2. **Brand name used in personas** — "MenuSync" appears in operative-3 and operative-4 personas

---

## Recommendation for V4.10

Add to "What You Must NOT Do":

```markdown
- ❌ **Invent a product/brand name** — Refer to it as "this platform" or "the product". 
  Flag branding as a Decision Product in missing_details.
```

This makes it an explicit prohibition, not just a "should flag" instruction.

---

## Conclusion

**V4.9 is a significant improvement.** The new "What to Flag in missing_details" section and the clarified guidance about "dimensions not targets" worked well.

The only remaining issue is brand name invention, which requires a stronger prohibition rather than just flagging guidance.

**Recommendation:** V4.9 is usable for production with the understanding that brand names will still be invented. For V4.10, add explicit brand name prohibition.
