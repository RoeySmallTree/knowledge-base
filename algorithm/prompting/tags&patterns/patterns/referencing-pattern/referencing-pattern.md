# The Referencing Pattern: Comprehensive Guide

## Executive Summary

The Referencing Pattern maintains explicit dependency relationships between products—not just content references ([[p:id]]), but structural metadata declaring "this product depends on X" and "Y depends on this product." This enables change propagation, coherence validation, and impact analysis.

**Core insight:** Complex structures have implicit dependencies. Making them explicit enables the Chair to know what else needs attention when something changes.

---

## The Problem It Solves

### Without Explicit References

```
"Contract v3" (Content)
  Content mentions "per the Rules" and "client requirements"
  
PROBLEM: Someone updates the Rules product.
  - Does Contract v3 still comply?
  - Who knows it was based on Rules?
  - What else was based on those Rules?
  
Answer: Nobody knows. Dependencies are buried in prose.
```

### With Explicit References

```
"Contract v3" (Content)
  depends_on: [[p:rules]], [[p:client-requirements]]
  
"Rules" (Content)
  depended_by: [[p:contract-v3]], [[p:contract-v2]], [[p:compliance-check]]

When Rules changes:
  Chair SEES: "Rules modified. Dependent products: contract-v3, contract-v2, compliance-check"
  Chair KNOWS: These need review/update
```

---

## Reference Types

### depends_on (Upstream)

**Meaning:** This product builds on, assumes, or requires those products.

```
"Investment Thesis" (Content)
  depends_on:
    - [[p:q3-earnings]] — source data
    - [[p:industry-analysis]] — market context
    - [[p:valuation-model]] — methodology
```

**Use for:**
- Source material
- Foundational assumptions
- Required context
- Methodology basis

### depended_by (Downstream)

**Meaning:** These products rely on this one. (Inverse of depends_on, often auto-generated)

```
"Rules & Standards" (Content)
  depended_by:
    - [[p:contract-v3]]
    - [[p:compliance-audit]]
    - [[p:employee-handbook]]
```

**Use for:**
- Impact analysis (what breaks if this changes?)
- Change propagation (what needs update?)
- Importance assessment (how foundational is this?)

### derived_from (Lineage)

**Meaning:** This product was created by transforming that product.

```
"Executive Summary" (Content)
  derived_from: [[p:full-report]]
  
"Localized Version - FR" (Content)
  derived_from: [[p:original-en]]
```

**Use for:**
- Transformation chains (Relay pattern)
- Translation tracking
- Summarization lineage
- Version derivation

### supersedes (Replacement)

**Meaning:** This product replaces/obsoletes that product.

```
"Policy v2" (Content)
  supersedes: [[p:policy-v1]]
  
"Revised Estimate" (Content)
  supersedes: [[p:original-estimate]]
```

**Use for:**
- Version replacement
- Correction tracking
- Obsolescence management

### related_to (Soft Connection)

**Meaning:** Related but not dependent. Awareness, not requirement.

```
"Marketing Strategy" (Content)
  related_to:
    - [[p:brand-guidelines]] — should align
    - [[p:competitor-analysis]] — useful context
```

**Use for:**
- Cross-references for awareness
- "See also" connections
- Alignment suggestions

---

## Reference Metadata Schema

In product description or dedicated field:

```
## References

depends_on:
  - [[p:rules]] — compliance requirements
  - [[p:client-brief]] — scope and constraints
  
derived_from:
  - [[p:draft-v1]] — initial version
  
related_to:
  - [[p:similar-project]] — reference example

---
[Product content below]
```

Or structured:

```json
{
  "references": {
    "depends_on": [
      { "product_id": "rules", "reason": "compliance requirements" },
      { "product_id": "client-brief", "reason": "scope and constraints" }
    ],
    "derived_from": [
      { "product_id": "draft-v1", "reason": "initial version" }
    ],
    "related_to": [
      { "product_id": "similar-project", "reason": "reference example" }
    ]
  }
}
```

---

## Chair Behaviors

### On Product Creation

```
When creating new product:
1. Identify what it depends on
2. Declare depends_on references
3. Update depended_by on upstream products

Example:
  Creating "Contract v3"
  → depends_on: [[p:rules]], [[p:client-requirements]]
  → Update [[p:rules]] to add depended_by: [[p:contract-v3]]
  → Update [[p:client-requirements]] to add depended_by: [[p:contract-v3]]
```

### On Product Modification

```
When modifying a product:
1. Check depended_by list
2. Flag/notify dependent products
3. Assess impact
4. Assign review/updates as needed

Example:
  Modifying "Rules"
  → See depended_by: contract-v3, contract-v2, compliance-check
  → Pin: "CHANGE IMPACT: Rules modified. Review needed: [[p:contract-v3]], [[p:contract-v2]]"
  → Assign: "Review [[p:contract-v3]] for compliance with updated [[p:rules]]"
```

### On Validation

```
Periodically or on request:
1. Traverse dependency graph
2. Verify coherence:
   - Does dependent still align with dependency?
   - Have upstream changes propagated?
3. Flag stale dependencies

Example:
  "Validate [[p:contract-v3]]"
  → Check depends_on: rules (v5), client-requirements (v2)
  → Rules is now v7 — FLAG: contract may be stale
  → Assign: "Verify contract v3 against rules v7"
```

### On Exploration

```
When user asks "why is this the way it is?":
1. Trace depends_on chain
2. Show lineage: "This was derived from X, which depends on Y"

Example:
  "Why does the contract say 30 days?"
  → Contract depends_on Rules
  → Rules Section 4 specifies 30-day notice
  → Present: "30-day term comes from [[p:rules]] Section 4"
```

---

## Integration with Other Patterns

### With Map Pattern

Map can show dependency relationships:

```
MAP: Research Project
=====================
Sources (no dependencies):
  [[p:s1]], [[p:s2]], [[p:s3]]
  
Analysis (depends on sources):
  [[p:market-analysis]] ← depends_on: s1, s2
  [[p:competitor-analysis]] ← depends_on: s1, s3
  
Synthesis (depends on analysis):
  [[p:recommendations]] ← depends_on: market-analysis, competitor-analysis
  
DEPENDENCY CHAIN: sources → analysis → synthesis
```

### With Sticky Notes

Pin change impacts:

```
PIN: "CHANGE PROPAGATION
Rules v5 → v7 changed.
Affected products:
  - [[p:contract-v3]] — NEEDS REVIEW
  - [[p:contract-v2]] — archived, skip
  - [[p:compliance-check]] — NEEDS REVIEW
  
Reviewed: 0/2"
```

### With Watchdog

Coherence verification in Inspect:

```
Watchdog checks:
1. Product declares depends_on: [[p:rules]]
2. Rules has changed since product was last updated
3. Finding: "Product may be stale—depends_on [[p:rules]] which was updated Round 5. Product last updated Round 3."
```

### With Progressive Accumulation

Track what builds on what:

```
"Chapter 5" (Content)
  depends_on: 
    - [[p:chapter-4]] — continues from
    - [[p:character-bible]] — character consistency
    - [[p:world-premise]] — world rules
    
If world-premise changes → all chapters flagged for review
```

### With Branching Exploration

Track branch derivation:

```
"Colonial Implications" (Orchestration)
  depends_on: [[p:military-european]] — derived scenario
  derived_from: [[p:divergence-point]] — original premise
  
"India Branch" (Content)
  depends_on: 
    - [[p:colonial-implications]] — parent branch
    - [[p:divergence-point]] — must remain consistent
```

---

## Use Cases

### Use Case 1: Rules Change Propagation

```
Scenario: Legal team updates compliance rules

Round 5: Chair modifies [[p:rules]]
  → depended_by shows: contract-v3, employee-handbook, vendor-agreement
  
Round 5 (same): Chair pins impact
  → "RULES CHANGED: Review needed for contract-v3, employee-handbook, vendor-agreement"
  
Round 6: Chair assigns reviews
  → "Review [[p:contract-v3]] against updated [[p:rules]]. Flag non-compliant sections."
  
Round 7: Updates propagated
  → Chair unpins, marks dependencies current
```

### Use Case 2: Source Tracing

```
Scenario: User questions a claim in the report

User: "Where did the 23% growth figure come from?"

Chair traces:
  → Report depends_on [[p:market-analysis]]
  → Market analysis depends_on [[p:q3-earnings]]
  → Q3 earnings Section 4: "Revenue grew 23% YoY"
  
Response: "23% figure sourced from [[p:q3-earnings]] Section 4, 
           processed through [[p:market-analysis]]"
```

### Use Case 3: Impact Analysis Before Change

```
Scenario: User wants to change a foundational assumption

User: "What if we change the budget from $50K to $30K?"

Chair checks [[p:budget-constraint]]:
  → depended_by: marketing-plan, hiring-plan, timeline, resource-allocation
  
Response: "Changing budget affects 4 products:
  - [[p:marketing-plan]] — would need scope reduction
  - [[p:hiring-plan]] — may not support 2 hires
  - [[p:timeline]] — could extend
  - [[p:resource-allocation]] — needs rebalancing
  
  Shall I propagate this change?"
```

### Use Case 4: Coherence Audit

```
Scenario: Long session, ensuring consistency

Round 15: Chair performs coherence check

For each product with depends_on:
  → Check if dependency has newer version
  → Flag if product may be stale

Results:
  - [[p:chapter-6]] depends on [[p:character-bible]] v3, but bible is now v5 — STALE
  - [[p:recommendations]] depends on [[p:analysis]] v2, analysis unchanged — OK
  - [[p:contract]] depends on [[p:rules]] v7, rules unchanged — OK

Chair assigns: "Review chapter-6 for consistency with character-bible updates"
```

### Use Case 5: Alternate History Consistency

```
Scenario: New branch must stay consistent with premises

Creating "Economic Depression Branch":
  depends_on:
    - [[p:divergence-point]] — Napoleon wins Waterloo
    - [[p:economic-immediate]] — initial economic effects
    - [[p:political-europe]] — political context
    
When writing:
  → Agent sees dependencies
  → Content must not contradict any of them
  
Watchdog verifies:
  → "Claims Britain thrives, but [[p:economic-immediate]] established British trade collapse. Contradiction."
```

---

## Reference Management

### Creating References

```
On product creation, Chair includes:

## References
depends_on:
  - [[p:xxx]] — [reason]
  - [[p:yyy]] — [reason]

Then updates upstream products' depended_by lists.
```

### Updating References

```
When dependency relationship changes:
1. Remove from old dependency's depended_by
2. Add to new dependency's depended_by
3. Update product's depends_on

Or when dependency no longer relevant:
1. Remove from depends_on
2. Remove from upstream's depended_by
```

### Querying References

```
"What depends on [[p:rules]]?"
  → Check rules.depended_by
  → Return: contract-v3, employee-handbook, vendor-agreement

"What does [[p:report]] depend on?"
  → Check report.depends_on
  → Return: market-analysis, competitor-analysis, user-interviews

"Show dependency chain for [[p:recommendations]]"
  → recommendations depends_on analysis
  → analysis depends_on sources
  → Chain: sources → analysis → recommendations
```

---

## Dependency Graph Visualization

For complex structures, Map can include dependency view:

```
DEPENDENCY GRAPH: Investment Project
====================================

Level 0 (Sources — no dependencies):
  [[p:10k-filing]]  [[p:earnings-call]]  [[p:industry-report]]
        │                   │                    │
        └───────────────────┴────────────────────┘
                            │
                            ▼
Level 1 (Analysis — depends on sources):
  [[p:financial-analysis]]  [[p:market-analysis]]
        │                          │
        └──────────────────────────┘
                    │
                    ▼
Level 2 (Synthesis — depends on analysis):
           [[p:investment-thesis]]
                    │
                    ▼
Level 3 (Deliverable — depends on synthesis):
           [[p:recommendation-memo]]

CHANGE IMPACT: 
  If 10k-filing updates → financial-analysis → investment-thesis → recommendation-memo
  (4-product cascade)
```

---

## Anti-Patterns

### Circular Dependencies

**Wrong:** A depends on B, B depends on A
**Right:** Identify the true direction, or use related_to for mutual awareness

### Over-Referencing

**Wrong:** Every product depends on 20 others
**Right:** Only essential dependencies. Use related_to for soft connections.

### Stale depended_by

**Wrong:** Upstream products have outdated depended_by lists
**Right:** Update both directions in same operation

### Reference Without Reason

**Wrong:** `depends_on: [[p:x]]` with no explanation
**Right:** `depends_on: [[p:x]] — compliance requirements` 

### Ignoring Derived Lineage

**Wrong:** Transformed products don't track their source
**Right:** Use derived_from to maintain lineage

---

## Teams with High Reference Affinity

| Team | Primary Use | Key References |
|------|-------------|----------------|
| The Firm | Compliance tracing | Contract → Rules |
| Research Synthesis Lab | Source tracing | Claims → Sources |
| The Publisher | Continuity | Chapters → Character Bible, World |
| Consulting Strategy | Recommendation backing | Recommendations → Analysis → Data |
| Product Management | Requirement tracing | Features → User Needs |
| The Living Codex | Policy dependencies | Decisions → Rules |
| Alternate History | Consistency enforcement | Branches → Divergence Point |
| The Hedge Fund | Claim sourcing | Thesis → Filings, Analysis |
| Any CORTEX team | Knowledge coherence | Processed → Sources |

---

## Summary

The Referencing Pattern provides:

1. **Explicit Dependencies** — What this product requires
2. **Impact Awareness** — What depends on this product
3. **Change Propagation** — What needs review when something changes
4. **Source Tracing** — Where did this come from
5. **Coherence Validation** — Are dependencies still aligned

**Reference Types:**
- `depends_on` — upstream requirements
- `depended_by` — downstream dependents
- `derived_from` — transformation lineage
- `supersedes` — replacement relationship
- `related_to` — soft connection

**Key Behaviors:**
- Declare dependencies on creation
- Update both directions
- Check dependents on modification
- Trace for exploration
- Audit for coherence

**Formula:**
```
Create product → Declare depends_on → Update upstream depended_by
Modify product → Check depended_by → Flag/assign dependent review
Query origin → Trace depends_on chain → Show lineage
Audit coherence → Check all dependencies current → Flag stale
```

References transform implicit connections into explicit, actionable relationships.