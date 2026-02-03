The Product Bible — Model Assignments
Team ID: 5bb86319-15b1-49da-b995-4f30fe18a445
Folder: cortex
File: product-bible.md

Assignment Summary
RoleFunctionModelIDAlternativeAlt IDCuratorPRD Maintainer/StructureGLM-4.7#5MiniMax M2.1#3AdvocateCustomer Voice/SynthesisGrok 4.1 Fast#138DeepResearch 30B#188AnalystCompetitive/Market IntelGrok 4.1 Fast#138DeepResearch 30B#188ArchitectTechnical Feasibility/DepsDeepSeek R1 0528#128QwQ-32B#181GuardianConflict Detection/CoherenceDeepSeek R1 0528#128QwQ-32B#181

Detailed Reasoning
Curator (PRD Maintainer/Structure)
Model: GLM-4.7 #5
Alternative: MiniMax M2.1 #3

Logic 9.0 for complex document organization and cross-reference reasoning
"Precise, Analyst, Stepwise" matches systematic organization persona
Tool-Seeker trait enables structured output and document management
Long-Horizon maintains coherence across entire PRD lifecycle
MIT license allows self-hosting for sensitive product documentation
Efficiency 9.5 keeps costs reasonable for constant PRD maintenance
Multi-file orchestration naturally fits PRD version control
SWE-bench strength indicates strong structured document handling

Advocate (Customer Voice/Synthesis)
Model: Grok 4.1 Fast #138
Alternative: DeepResearch 30B #188

[WEB-SEARCH + X-SEARCH] — Critical for gathering customer feedback from social media, forums, support tickets
2M context holds extensive customer interview transcripts and feedback patterns
Logic 8.5 for pattern identification across disparate feedback sources
"Analyst, Tool-Seeker" matches synthesis and pattern-finding persona
Real-time search catches emerging customer sentiment and feature requests
Efficiency 9.5 balances capability with high-volume customer data processing
Long-Horizon trait maintains customer context across multiple sessions
Can pull competitive customer sentiment for comparative analysis

Analyst (Competitive/Market Intel)
Model: Grok 4.1 Fast #138
Alternative: DeepResearch 30B #188

[WEB-SEARCH + X-SEARCH] — Essential for real-time competitive intelligence
Can track competitor launches, pricing changes, feature updates in real-time
X-SEARCH specifically useful for monitoring startup announcements and tech news
Logic 8.5 for competitive dynamic reasoning
2M context tracks complex competitive landscape over time
"Analyst, Tool-Seeker" perfectly matches market intelligence gathering
Real-time capability crucial for "Competitor X just launched..." scenarios
Efficiency 9.5 for high-frequency competitive monitoring

Architect (Technical Feasibility/Dependencies)
Model: DeepSeek R1 0528 #128
Alternative: QwQ-32B #181

Logic 9.0 for complex technical constraint reasoning
[SELF-VERIFYING, VISIBLE-COT] — Shows exactly how feasibility was assessed
"Deep-Thinker, Self-Correcting" matches rigorous technical analysis
Open reasoning lets product team see dependency logic and estimation rationale
Math-Strong trait supports effort estimation calculations
Can surface hidden dependencies through chain-of-thought exploration
"Honest estimator" persona benefits from visible self-correction
Efficiency 7.5 acceptable for high-value technical assessment role

Guardian (Conflict Detection/Coherence)
Model: DeepSeek R1 0528 #128
Alternative: QwQ-32B #181

[SELF-VERIFYING] — Perfect for "does Section 4 contradict Section 7?" analysis
Logic 9.0 finds logical contradictions and inconsistencies
Visible CoT shows exactly which sections conflict and why
"Deep-Thinker, Self-Correcting" matches watchdog persona
Can reason through complex dependency chains to find scope creep
Memory demands met by reasoning through entire spec systematically
Open reasoning makes conflict detection transparent and reviewable
Alternative QwQ-32B provides local deployment option for sensitive PRDs


Cost & Trait Analysis
CRITICALITY DISTRIBUTION:
├── Critical (3): Curator, Advocate, Guardian
├── High (2):     Analyst, Architect
└── Budget-optimized: Curator (via GLM-4.7 MIT license)

SPECIAL TRAITS UTILIZED:
├── [WEB-SEARCH]        Advocate, Analyst  — Customer & competitive intelligence
├── [X-SEARCH]          Advocate, Analyst  — Social listening, startup tracking
├── [SELF-VERIFYING]    Architect, Guardian — Technical & logical verification
├── [VISIBLE-COT]       Architect, Guardian — Transparent reasoning for decisions
├── [TOOL-SEEKER]       Curator            — Structured document management
└── [LONG-HORIZON]      Curator, Advocate  — Sustained PRD coherence

EFFICIENCY TIERS:
├── Premium reasoning:  Architect (#128), Guardian (#128)
├── Search-enabled:     Advocate (#138), Analyst (#138)
└── Cost-optimized:     Curator (#5) — open-source MIT license

PROVIDER DIVERSITY: ✓
Zhipu (1), xAI (2 roles), DeepSeek (2 roles)

ROLE CONSOLIDATION OPPORTUNITIES:
├── Advocate + Analyst: Both use Grok 4.1 Fast for search capabilities
│   — Sharing model acceptable; roles are complementary (customer vs. market)
│   — Could run different instances with specialized prompts
│
└── Architect + Guardian: Both use DeepSeek R1 for verification
    — Sharing model ideal; both need visible reasoning
    — Watchdog roles naturally aligned (technical vs. logical verification)

CONTEXT REQUIREMENTS:
├── Curator:  Entire PRD structure (potentially 100K+ tokens) → Tool-based retrieval
├── Advocate: Customer interview corpus → 2M context ideal
├── Analyst:  Competitive landscape docs → 2M context ideal
├── Architect: Technical context + dependencies → Reasoning compensates
└── Guardian: Entire spec for conflict checking → Reasoning compensates

ALTERNATIVE SCENARIO (Budget-Conscious):
If cost is primary concern, could consolidate to 3 models:
├── GLM-4.7 (#5):          Curator only
├── Grok 4.1 Fast (#138):  Advocate + Analyst (shared search role)
└── DeepSeek R1 (#128):    Architect + Guardian (shared verification role)
