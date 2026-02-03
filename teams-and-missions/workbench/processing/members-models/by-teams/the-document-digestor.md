The Document Digestor — Model Assignments
Team ID: 81dd2789-f2c1-4307-8a4c-8002575a04c7
Folder: cortex
File: document-digestor.md

Assignment Summary
| Role | Function | Model ID | Alternative | Alt ID |
|------|----------|----------|-------------|--------|
| Parser | Document Intake/Structure Detection | Gemini 3 Pro Preview | InternVL3 78B | #189 |
| Extractor | Component Extraction | Claude Opus 4.5 | Qwen3 235B Thinking | #169 |
| Architect | Hierarchy Building | MiniMax M2.1 | Trinity Mini | #120 |
| Linker | Relationships/Cross-refs | DeepSeek R1 0528 | QwQ-32B | #181 |
| Verifier | Completeness Verification | DeepSeek V3.2-Speciale | Phi 4 | #212 |

Detailed Reasoning

Parser (Document Intake/Structure Detection)
Model: Gemini 3 Pro Preview #14
Alternative: InternVL3 78B #189

- Logic 10.0 handles complex document structure analysis
- [MULTIMODAL-MASTER] — Critical for processing PDFs and document images
- [DEEP-THINK] capability for unusual/malformed document formats
- "Most-Intelligent, Research-Grade" matches "sees structure in any document"
- Can handle any document type gracefully
- Efficiency 7.0 acceptable for critical intake role

Extractor (Component Extraction)
Model: Claude Opus 4.5 #135
Alternative: Qwen3 235B Thinking #169

- Logic 9.5 for precise component identification and categorization
- Long context (200K+) critical for Memory: 10 requirement — must hold full document
- [COMPUTER-USE] indicates strong structured extraction capabilities
- "Deep-Thinker, Agentic" matches "reads for extractable atoms"
- Excellent at preserving exact quotes with source locations
- Never adds interpretation — pure extraction focus
- #2 global ranking ensures highest quality for critical role

Architect (Hierarchy Building)
Model: MiniMax M2.1 #3
Alternative: Trinity Mini #120

- Logic 8.5 for category reasoning and structure logic
- Efficiency 9.5 for high-importance but supporting role
- [STRUCTURED-OUTPUT] — perfect for building organized hierarchies
- [BROWSER-CONTROL] could format rich outputs with navigation
- "Precise, Self-Correcting, Tool-Seeker" matches organization-focused persona
- Multi-source synthesis capability handles multiple organization schemes
- Native structured output ensures clean hierarchies

Linker (Relationships/Cross-references)
Model: DeepSeek R1 0528 #128
Alternative: QwQ-32B #181

- Logic 9.0 for identifying relationships and contradictions
- [SELF-VERIFYING, VISIBLE-COT] — shows relationship reasoning explicitly
- Chain-of-thought visibility helps trace connection logic
- "Deep-Thinker, Self-Correcting" matches "naturally sees connections"
- Excellent at spotting contradictions and overlaps
- Avoids spurious connections through visible reasoning
- Efficiency 7.5 acceptable for high-importance role

Verifier (Completeness Verification)
Model: DeepSeek V3.2-Speciale #122
Alternative: Phi 4 #212

- Logic 10.0 — Critical for "must reason about completeness"
- [COMPETITION-MATH] precision translates to exhaustive verification
- Handles complex comparison logic systematically
- "Precise, Stepwise" matches section-by-section verification approach
- Can track coverage percentages with mathematical rigor
- No tools needed — pure logical verification
- Efficiency 5.0 acceptable for critical completeness promise


Cost & Trait Analysis

CRITICALITY DISTRIBUTION:
├── Critical (3): Parser, Extractor, Verifier
├── High (2):     Architect, Linker
└── Budget-optimized: Architect only

SPECIAL TRAITS UTILIZED:
├── [MULTIMODAL-MASTER]  Parser     — PDF/image document processing
├── [DEEP-THINK]         Parser     — Unusual format handling
├── [COMPUTER-USE]       Extractor  — Structured extraction capability
├── [STRUCTURED-OUTPUT]  Architect  — Native hierarchy building
├── [SELF-VERIFYING]     Linker     — Relationship verification
├── [VISIBLE-COT]        Linker     — Connection reasoning transparency
└── [COMPETITION-MATH]   Verifier   — Precision completeness checking

EFFICIENCY TIERS:
├── Premium reasoning:  Parser (#14), Extractor (#135), Verifier (#122)
├── Self-verifying:     Linker (#128)
└── Cost-optimized:     Architect (#3)

PROVIDER DIVERSITY: ✓
Google (1), Anthropic (1), MiniMax (1), DeepSeek (2)

CONTEXT REQUIREMENTS:
├── Ultra-long (10):  Extractor (#135 - 200K+), Verifier (#122 - 128K+)
├── Long (9):         Parser (#14 - 2M), Architect (#3 - ~100K), Linker (#128 - 128K)
└── All members need substantial context for document analysis

MEMORY-LOGIC BALANCE:
- Parser:    Logic 9, Memory 9  → #14 (Logic 10, multimodal)
- Extractor: Logic 9, Memory 10 → #135 (Logic 9.5, ultra-long context)
- Architect: Logic 9, Memory 9  → #3 (Logic 8.5, Efficiency 9.5)
- Linker:    Logic 9, Memory 9  → #128 (Logic 9.0, visible reasoning)
- Verifier:  Logic 10, Memory 10 → #122 (Logic 10, precision)

VISION REQUIREMENTS:
- Parser MUST have vision for PDF/image documents (#14 multimodal-master)
- All others are text-focused

ROLE-SPECIFIC OPTIMIZATIONS:
- Parser:    Vision + structure detection → Multimodal flagship
- Extractor: Context + precision → Long-context reasoning leader
- Architect: Structure building → Native structured output
- Linker:    Relationships → Visible chain-of-thought
- Verifier:  Completeness → Mathematical precision
