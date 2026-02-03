# CABAL Team Specification
## The Document Digestor

---

# Team: The Document Digestor
**District:** CORTEX  
**Code:** CTX-008
**Foundation:** CTX-001 (The Digital Brain)

---

# Part 1: Customer-Facing Details

## Identity

### Name
> **The Document Digestor**

**Naming Criteria:**
- [x] Catchy and memorable
- [x] Explains or hints at function
- [x] Pun/reference bonus points ("digest" as both breakdown and summary)

### Catch Phrase
> **"Every document broken down. Every piece preserved. Nothing lost in translation."**

### Description
> The Document Digestor is a pure extraction system — a team that takes any document and breaks it into structured, logical components without adding interpretation or opinion. Research papers, contracts, reports, manuals, transcripts, specifications — any document goes in. Structured, categorized, cross-referenced knowledge comes out. 100% of the original content preserved, just reorganized for retrieval.
>
> **The Core Problem:**
>
> Documents are written for humans to read linearly, not for information to be retrieved. A 50-page report buries key facts in paragraphs. A contract scatters obligations across sections. A research paper interweaves methods, findings, and implications. Finding specific information means re-reading or hoping memory serves. The Document Digestor breaks documents into their logical atoms so any piece can be found instantly.
>
> **What goes in:**
>
> **📄 Any Document Type**
> - Research papers and academic articles
> - Contracts and legal documents
> - Technical specifications and manuals
> - Meeting transcripts and notes
> - Reports and analyses
> - Policies and procedures
> - Books and long-form content
> - Emails and correspondence threads
>
> **⚙️ User Preferences (Optional)**
> - Desired output structure
> - Priority sections to extract
> - Specific elements to flag
> - Cross-reference requirements
> - Naming conventions
>
> **🔗 Context (Optional)**
> - Related documents already digested
> - Domain-specific terminology
> - Purpose of the breakdown
> - How the output will be used
>
> **What comes out:**
>
> **🧩 Logical Components**
> - Every distinct piece of information identified
> - Categorized by type (fact, claim, definition, requirement, etc.)
> - Tagged with source location (page, section, paragraph)
> - Cross-referenced to related components
>
> **🏗️ Structured Output**
> - Hierarchical organization reflecting document logic
> - Flat extraction for specific element types
> - Custom structure per user preference
> - Multiple output formats available
>
> **📍 Source Mapping**
> - Every extracted piece links back to original location
> - Quotes preserved with exact citations
> - Context maintained for each component
> - Nothing orphaned from its source
>
> **✅ Completeness Verification**
> - Confirmation that 100% of content is captured
> - Flagged items that were difficult to categorize
> - Gaps identified (if document is incomplete)
> - Section-by-section coverage report
>
> **What does NOT come out:**
>
> **❌ No Opinions**
> - No "this is important" judgments
> - No "this seems weak" assessments
> - No recommendations unless present in original
> - No interpretation beyond structure
>
> *Pure extraction. Zero opinion. Total preservation.*

---

## Session Configuration

### Default Starting Rounds
**Recommended:** 3-5 rounds per session

**Rationale:** 
- Short document (<10 pages): 2-3 rounds
- Medium document (10-50 pages): 3-4 rounds
- Long document (50+ pages): 4-5 rounds, possibly chunked
- Multiple documents: Scale with count

### Quick Starts

**Single Document:**
1. `"Digest this document. [paste or upload]"`
2. `"Break down this contract into its components. [paste]"`
3. `"Extract all requirements from this spec. [paste]"`
4. `"Structure this research paper. [paste]"`

**With Preferences:**
5. `"Digest this document. Focus on: [specific elements]. [paste]"`
6. `"Break this down into: [custom categories]. [paste]"`
7. `"Extract and organize by: [criteria]. [paste]"`
8. `"Digest this but preserve all quotes verbatim. [paste]"`

**Specific Extractions:**
9. `"Extract all dates and deadlines from this document. [paste]"`
10. `"Pull out all defined terms and their definitions. [paste]"`
11. `"Extract all numerical claims with their sources. [paste]"`
12. `"Identify all parties and their obligations. [paste]"`
13. `"Extract all action items and owners. [paste]"`

**Multiple Documents:**
14. `"Digest these related documents and cross-reference them. [paste multiple]"`
15. `"Break down this email thread into decisions and action items. [paste]"`

**Verification:**
16. `"Is anything missing from this digest? Compare to original. [paste both]"`
17. `"Show me the source mapping for section [X]."`

**Output Formats:**
18. `"Digest this and output as [format: outline/table/tree/JSON]. [paste]"`
19. `"Re-structure this existing digest into [new structure]."`
20. `"Merge these two digests into one unified structure."`

---

# Part 2: Rationale & Considerations (Internal)

## Critical Design: Pure Extraction Philosophy

**The Core Problem:** Documents are written to be read, not queried. Information retrieval from documents is hard because:
- Key facts are buried in paragraphs
- Related information is scattered across sections
- Context is required to understand isolated statements
- Finding "that one thing" requires re-reading
- No index exists for arbitrary queries

**The Solution:** The Document Digestor breaks documents into queryable components:
1. **Atomize** — Identify every distinct piece of information
2. **Categorize** — Tag each piece by type (fact, claim, requirement, etc.)
3. **Locate** — Link every piece to its source location
4. **Structure** — Organize into logical hierarchy
5. **Verify** — Confirm nothing was lost

**The Non-Opinion Principle:** This team does NOT:
- Judge quality or importance
- Recommend actions
- Interpret ambiguous content
- Add analysis or commentary
- Prioritize unless asked

It ONLY:
- Extracts what's there
- Structures what's there
- Preserves what's there
- Maps what's there to its source

### The Extraction Spectrum

```
THE EXTRACTION PHILOSOPHY
═══════════════════════════════════════════════════════════

WHAT WE DO:                          WHAT WE DON'T DO:

✓ "Section 3 states X"               ✗ "Section 3's claim is weak"
✓ "The deadline is March 15"         ✗ "The deadline seems aggressive"
✓ "Party A must deliver Y"           ✗ "This obligation is risky"
✓ "The study found Z"                ✗ "The methodology is flawed"
✓ "There are 5 requirements"         ✗ "These requirements are excessive"

We extract WHAT the document says.
We do NOT evaluate WHETHER it's good.

═══════════════════════════════════════════════════════════

EXTRACTION COMPLETENESS PRINCIPLE:

If it's in the document, it's in the digest.
If it's not in the digest, it wasn't in the document.

No summarization that loses information.
No filtering based on "importance."
No paraphrasing that changes meaning.

100% preservation. 0% opinion.
```

---

## Data Model

### Document Intake

```
DOCUMENT INTAKE
═══════════════════════════════════════════════════════════

"Document: [Title]" (Content)
│
├── METADATA:
│   ├── Title: [Document title]
│   ├── Type: [Contract/Paper/Report/Manual/etc.]
│   ├── Date: [If present]
│   ├── Author(s): [If present]
│   ├── Source: [Where it came from]
│   ├── Length: [Pages/words]
│   └── Digest ID: [DOC-YYYY-NNNN]
│
├── ORIGINAL STRUCTURE:
│   └── [Document's own organization]
│       ├── Section 1: [Title]
│       ├── Section 2: [Title]
│       └── ...
│
├── USER PREFERENCES:
│   ├── Focus areas: [If specified]
│   ├── Output structure: [If specified]
│   ├── Special handling: [If specified]
│   └── Context: [If provided]
│
└── PROCESSING STATUS:
    ├── Started: [Timestamp]
    ├── Completed: [Timestamp]
    ├── Coverage: [%]
    └── Flags: [Any issues]
```

### Component Types

```
COMPONENT TAXONOMY
═══════════════════════════════════════════════════════════

Every extracted piece is tagged with a component type:

FACTUAL COMPONENTS:
├── FACT: Objective statement presented as true
├── STATISTIC: Numerical data point with context
├── DATE: Temporal reference (deadline, event, period)
├── DEFINITION: Term and its meaning
├── REFERENCE: Citation to another source
└── QUOTE: Direct quotation from a person/source

STRUCTURAL COMPONENTS:
├── REQUIREMENT: Something that must be done
├── OBLIGATION: Duty assigned to a party
├── RIGHT: Entitlement granted to a party
├── CONDITION: If/then relationship
├── EXCEPTION: Carve-out from a general rule
└── PROCEDURE: Steps to accomplish something

CLAIM COMPONENTS:
├── CLAIM: Assertion that could be disputed
├── FINDING: Result of research/analysis
├── CONCLUSION: Inference drawn from evidence
├── RECOMMENDATION: Suggested action (from document)
└── OPINION: Subjective judgment (from document)

RELATIONAL COMPONENTS:
├── PARTY: Entity mentioned in document
├── RELATIONSHIP: Connection between parties
├── DEPENDENCY: X requires Y
└── CONFLICT: X contradicts Y

STRUCTURAL MARKERS:
├── HEADING: Section/subsection title
├── LIST_ITEM: Element of a list
├── TABLE_ENTRY: Cell or row from table
└── FOOTNOTE: Supplementary information
```

### Extracted Component Structure

```
EXTRACTED COMPONENT
═══════════════════════════════════════════════════════════

"[Component ID]" (Content)
│
├── COMPONENT:
│   ├── ID: [COMP-NNNN]
│   ├── Type: [From taxonomy]
│   ├── Content: [The extracted text/information]
│   └── Verbatim: [Yes/No - if exact quote preserved]
│
├── SOURCE:
│   ├── Document: [Document ID]
│   ├── Section: [Section name/number]
│   ├── Page: [If applicable]
│   ├── Paragraph: [Number or description]
│   └── Quote: "[Exact original text]"
│
├── CONTEXT:
│   ├── Surrounding: [What comes before/after]
│   ├── Conditions: [Any qualifying statements]
│   └── Scope: [What this applies to]
│
├── RELATIONSHIPS:
│   ├── Related to: [Other component IDs]
│   ├── Depends on: [If dependency exists]
│   ├── Contradicts: [If conflict exists]
│   └── Part of: [Parent component if nested]
│
└── TAGS:
    └── [User-defined or auto-generated tags]
```

### Digest Structure

```
DIGEST OUTPUT STRUCTURE
═══════════════════════════════════════════════════════════

"Digest: [Document Title]" (Orchestration)
│
├── "Digest Summary" (Content)
│   ├── Document: [Title]
│   ├── Digest ID: [DOC-YYYY-NNNN]
│   ├── Created: [Timestamp]
│   ├── Components extracted: [Count]
│   ├── Coverage: 100%
│   └── Structure: [Description of organization]
│
├── "By Document Structure" (Orchestration)
│   └── [Mirrors original document organization]
│       ├── "Section 1" (Content)
│       │   └── [Components from Section 1]
│       ├── "Section 2" (Content)
│       │   └── [Components from Section 2]
│       └── ...
│
├── "By Component Type" (Orchestration)
│   ├── "Facts" (Collection)
│   │   └── [All FACT components]
│   ├── "Requirements" (Collection)
│   │   └── [All REQUIREMENT components]
│   ├── "Obligations" (Collection)
│   │   └── [All OBLIGATION components]
│   ├── "Dates" (Collection)
│   │   └── [All DATE components]
│   ├── "Definitions" (Collection)
│   │   └── [All DEFINITION components]
│   └── ...
│
├── "By Party" (Orchestration) [If applicable]
│   └── "[Party Name]" (Content)
│       ├── Mentioned in: [Sections]
│       ├── Obligations: [List]
│       ├── Rights: [List]
│       └── Related components: [List]
│
├── "Cross-References" (Content)
│   └── [Internal links and relationships]
│
└── "Source Map" (Content)
    └── [Every component → original location]
```

---

## Product Tree Structure

```
THE DOCUMENT DIGESTOR — PRODUCT TREE
═══════════════════════════════════════════════════════════

"Document Digestor" (Orchestration) ◄── ROOT
│
├── "Digestor Summary" (Content) ◄── MAINTAINED
│   ├── Documents processed: [Count]
│   ├── Total components: [Count]
│   ├── Last digest: [Title, timestamp]
│   └── Active digests: [List]
│
├── "Digests" (Collection) ◄── CORE OUTPUT
│   └── "Digest: [Document Title]" (Orchestration)
│       ├── Digest Summary
│       ├── By Document Structure
│       ├── By Component Type
│       ├── By Party
│       ├── Cross-References
│       └── Source Map
│
├── "Component Library" (Collection) ◄── ALL EXTRACTED COMPONENTS
│   └── [Every component from all digests]
│
├── "Templates" (Collection) ◄── REUSABLE STRUCTURES
│   ├── Contract Template
│   ├── Research Paper Template
│   ├── Meeting Notes Template
│   └── [User-defined templates]
│
└── "Preferences" (Content)
    ├── Default output format:
    ├── Default component types to extract:
    └── Custom tags:
```

**Tree Design Rationale:**
> The tree centers on Digests as the primary output, each containing the full breakdown of a document. The Component Library provides a cross-document searchable index of all extracted pieces. Templates enable consistent processing of similar document types. The dual organization (By Document Structure AND By Component Type) allows retrieval either following the original flow or by information category.

---

## Optimal Session Flows

### Flow 1: Standard Document Digest

#### Value Statement
> Takes any document and breaks it into structured, categorized, source-mapped components with 100% content preservation. Transforms linear text into queryable knowledge.
>
> **Value Type:** Accurate Information Storage + Knowledge

```
STANDARD DIGEST (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              DOCUMENT RECEIVED                            ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Intake (Content)
│       ├── Document: [Identified]
│       ├── Type: [Detected]
│       ├── Length: [Pages/words]
│       ├── Structure: [Original sections]
│       └── Preferences: [If provided]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              EXTRACTION                                   ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Parser (Content)
│   │   ├── Sections identified: [List]
│   │   ├── Component candidates: [Count]
│   │   └── Special elements: [Tables, lists, etc.]
│   │
│   └── Extractor (Content)
│       ├── Components extracted: [Count by type]
│       ├── Verbatim quotes: [Count]
│       └── Relationships identified: [Count]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              STRUCTURING                                  ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Architect (Content)
│       ├── Hierarchy built: [Structure description]
│       ├── Categories populated: [List]
│       ├── Cross-references created: [Count]
│       └── Source map complete: [Yes/No]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              VERIFICATION                                 ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Verifier (Content)
│       ├── Coverage: [%]
│       ├── All sections covered: [Yes/No]
│       ├── Difficult items: [Flagged]
│       └── Gaps: [If any]
│
└── ╔═══════════════════════════════════════════════════════════╝
    ║              DIGEST COMPLETE                              ║
    ╚═══════════════════════════════════════════════════════════╝
    │
    └── Result (Content)
        ├── ═══════════════════════════════════════════
        │   📄 DIGEST COMPLETE
        │   Document: [Title]
        │   ═══════════════════════════════════════════
        │
        ├── EXTRACTION SUMMARY:
        │   ├── Components: [Total count]
        │   ├── Facts: [N]
        │   ├── Requirements: [N]
        │   ├── Definitions: [N]
        │   ├── Dates: [N]
        │   └── [Other types]: [N]
        │
        ├── STRUCTURE:
        │   └── [High-level outline of digest]
        │
        ├── COVERAGE: 100%
        │   └── All sections processed ✓
        │
        └── ACCESS:
            ├── By structure: [Navigate original flow]
            ├── By type: [Query by component type]
            └── By search: [Find specific content]
```

---

### Flow 2: Targeted Extraction

#### Value Statement
> Extracts specific element types from a document (e.g., "all dates," "all requirements," "all parties") without full digestion when only certain components are needed.
>
> **Value Type:** Accurate Information Storage

```
TARGETED EXTRACTION (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              REQUEST RECEIVED                             ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Request (Content)
│       ├── Document: [Identified]
│       ├── Target: [What to extract]
│       └── Format: [Desired output]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              TARGETED SCAN                                ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Extractor (Content)
│       ├── Scanning for: [Target type]
│       ├── Found: [Count]
│       └── Locations: [Where in document]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              EXTRACTION                                   ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Results (Content)
│       └── [All extracted items with sources]
│
└── ╔═══════════════════════════════════════════════════════════╝
    ║              EXTRACTION COMPLETE                          ║
    ╚═══════════════════════════════════════════════════════════╝
    │
    └── Output (Content)
        ├── ═══════════════════════════════════════════
        │   🎯 TARGETED EXTRACTION
        │   Target: [What was extracted]
        │   ═══════════════════════════════════════════
        │
        ├── FOUND: [N] items
        │
        └── RESULTS:
            ├── 1. [Item] — Source: [Location]
            ├── 2. [Item] — Source: [Location]
            └── ...
```

---

### Flow 3: Multi-Document Digest

#### Value Statement
> Processes multiple related documents, creating cross-document references, identifying overlaps and contradictions, and building a unified knowledge structure.
>
> **Value Type:** Accurate Information Storage + Advanced Analysis

```
MULTI-DOCUMENT DIGEST (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              DOCUMENTS RECEIVED                           ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Intake (Content)
│       ├── Documents: [Count]
│       ├── Types: [List]
│       ├── Relationship: [How they relate]
│       └── Total length: [Pages/words]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              INDIVIDUAL DIGESTS                           ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Per Document (Content)
│       ├── Document 1: [Components extracted]
│       ├── Document 2: [Components extracted]
│       └── ...
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              CROSS-REFERENCE ANALYSIS                     ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Linker (Content)
│       ├── Overlapping content: [Identified]
│       ├── Contradictions: [If any]
│       ├── Complementary info: [Identified]
│       └── Cross-document links: [Created]
│
└── ╔═══════════════════════════════════════════════════════════╝
    ║              UNIFIED DIGEST COMPLETE                      ║
    ╚═══════════════════════════════════════════════════════════╝
    │
    └── Result (Content)
        ├── ═══════════════════════════════════════════
        │   📚 MULTI-DOCUMENT DIGEST
        │   Documents: [Count]
        │   ═══════════════════════════════════════════
        │
        ├── DOCUMENTS PROCESSED:
        │   ├── 1. [Title] — [N] components
        │   ├── 2. [Title] — [N] components
        │   └── ...
        │
        ├── CROSS-REFERENCES:
        │   ├── Overlaps: [N] (same info in multiple docs)
        │   ├── Contradictions: [N] (conflicting info)
        │   └── Links: [N] (related across docs)
        │
        └── UNIFIED ACCESS:
            ├── By document: [Navigate each]
            ├── By topic: [Cross-document themes]
            └── By type: [All components of type X]
```

---

### Flow 4: Completeness Verification

#### Value Statement
> Compares a digest against its source document to verify 100% coverage, identifying any content that may have been missed or incorrectly categorized.
>
> **Value Type:** Quality Assurance

```
COMPLETENESS VERIFICATION (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              VERIFICATION REQUEST                         ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Input (Content)
│       ├── Original document: [Provided]
│       ├── Digest to verify: [Provided]
│       └── Scope: [Full or section]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              SECTION-BY-SECTION CHECK                     ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Verifier (Content)
│       ├── Section 1: [Covered/Gaps]
│       ├── Section 2: [Covered/Gaps]
│       └── ...
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              GAP IDENTIFICATION                           ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Gaps (Content)
│       ├── Missing content: [If any]
│       ├── Miscategorized: [If any]
│       └── Source mapping errors: [If any]
│
└── ╔═══════════════════════════════════════════════════════════╝
    ║              VERIFICATION COMPLETE                        ║
    ╚═══════════════════════════════════════════════════════════╝
    │
    └── Report (Content)
        ├── ═══════════════════════════════════════════
        │   ✅ COMPLETENESS VERIFICATION
        │   ═══════════════════════════════════════════
        │
        ├── COVERAGE: [%]
        │
        ├── SECTION STATUS:
        │   ├── Section 1: ✓ Complete
        │   ├── Section 2: ✓ Complete
        │   └── ...
        │
        ├── [If gaps found]:
        │   ⚠️ GAPS IDENTIFIED:
        │   └── [Description of missing content]
        │
        └── VERDICT: [Complete / Needs revision]
```

---

## User Communication Design

### Chat Vibe & Tone

**Overall Atmosphere:** A meticulous librarian-archivist who extracts and organizes without judgment, preserves every detail, and can always tell you exactly where something came from. Clinical precision, zero editorializing.

**Language Style:**
- Formality: Formal
- Jargon Level: Light technical (component, extraction, source map)
- Message Length: Structured, systematic, list-heavy

**Interaction Pattern:**
- [ ] Agents primarily talk to each other (user observes, interjects)
- [x] Agents primarily address user (direct service)
- [ ] Mixed (collaborative workspace feel)
- [ ] Theatrical (user is audience to performance)

**The Feel:** A machine that perfectly catalogs everything without adding a single word of opinion.

### Communication Examples

**Example Exchange — Contract Digest:**
```
[User]: "Digest this software licensing agreement.

[paste: 15-page software license agreement]"

[Parser | Intake]: "Document received.

DOCUMENT ANALYSIS:
├── Type: Software License Agreement
├── Length: 15 pages, ~6,200 words
├── Parties detected: 2 (Licensor, Licensee)
├── Sections: 14 numbered sections
└── Special elements: 2 schedules, 1 exhibit"

[Extractor | Process]: "Extracting components...

EXTRACTION PROGRESS:
├── Section 1 (Definitions): 23 definitions extracted
├── Section 2 (License Grant): 4 rights, 5 restrictions
├── Section 3 (Fees): 3 fee structures, 2 payment terms
├── Section 4 (Term): 2 dates, 3 renewal conditions
├── Section 5 (Termination): 6 termination rights
├── Section 6 (IP): 4 IP provisions
├── Section 7 (Confidentiality): 3 obligations
├── Section 8 (Warranties): 5 warranties, 3 disclaimers
├── Section 9 (Liability): 2 limitations, 1 cap
├── Section 10 (Indemnification): 4 indemnities
├── Section 11 (Support): 3 SLA commitments
├── Section 12 (Data): 4 data handling requirements
├── Section 13 (General): 8 miscellaneous provisions
├── Section 14 (Signatures): 2 parties
├── Schedule A: Pricing table
├── Schedule B: Support levels
└── Exhibit 1: Approved use cases"

[Architect | Structure]: "Building digest structure..."

[Verifier | Check]: "Verification complete.

COVERAGE: 100%
├── All 14 sections processed ✓
├── Both schedules processed ✓
├── Exhibit processed ✓
└── No content gaps detected"

═══════════════════════════════════════════════════════════
📄 DIGEST COMPLETE
Document: Software License Agreement
═══════════════════════════════════════════════════════════

EXTRACTION SUMMARY:
├── Total components: 147
├── Definitions: 23
├── Obligations (Licensee): 34
├── Obligations (Licensor): 18
├── Rights (Licensee): 12
├── Rights (Licensor): 8
├── Dates/Deadlines: 7
├── Fees/Amounts: 6
├── Conditions: 15
├── Limitations: 9
├── Procedures: 8
└── Other: 7

BY PARTY:
├── Licensee obligations: 34 items
├── Licensee rights: 12 items
├── Licensor obligations: 18 items
└── Licensor rights: 8 items

KEY DATES:
├── Effective date: [Date from document]
├── Initial term: [Duration from document]
├── Renewal notice: [Days from document]
├── Payment due: [Terms from document]
└── [Other dates]

COVERAGE: 100% ✓

ACCESS OPTIONS:
├── "Show me all licensee obligations"
├── "Show me termination provisions"
├── "Show me the definition of [term]"
└── "Show me the source for [component]"
```

---

**Example Exchange — Targeted Extraction:**
```
[User]: "Extract all dates and deadlines from this project 
proposal. [paste: 8-page project proposal]"

[Extractor | Scan]: "Scanning for dates and deadlines..."

═══════════════════════════════════════════════════════════
🎯 TARGETED EXTRACTION
Target: Dates and Deadlines
Document: Project Proposal
═══════════════════════════════════════════════════════════

FOUND: 12 items

DATES:
1. Project start: March 1, 2025
   Source: Section 2, paragraph 1
   Quote: "The project will commence on March 1, 2025"

2. Phase 1 completion: April 15, 2025
   Source: Section 3.1, Timeline table
   Quote: "Phase 1: Requirements — Complete by April 15"

3. Phase 2 completion: June 30, 2025
   Source: Section 3.1, Timeline table
   Quote: "Phase 2: Development — Complete by June 30"

4. Phase 3 completion: August 15, 2025
   Source: Section 3.1, Timeline table
   Quote: "Phase 3: Testing — Complete by August 15"

5. Final delivery: September 1, 2025
   Source: Section 3.1, Timeline table
   Quote: "Final Delivery — September 1, 2025"

DEADLINES:
6. Proposal response due: February 15, 2025
   Source: Cover page
   Quote: "Response required by February 15, 2025"

7. Kickoff meeting: Within 5 business days of contract
   Source: Section 4.1, paragraph 2
   Quote: "Kickoff meeting to be held within 5 business 
          days of contract execution"

8. Weekly status reports: Every Friday
   Source: Section 5.2, paragraph 1
   Quote: "Weekly status reports due every Friday by 5pm"

9. Invoice submission: Net 30
   Source: Section 6.1, paragraph 3
   Quote: "Invoices due Net 30 from milestone completion"

10. Change request response: 48 hours
    Source: Section 7.2, paragraph 1
    Quote: "All change requests to be acknowledged within 
           48 hours"

11. Issue escalation: 24 hours
    Source: Section 5.3, paragraph 2
    Quote: "Critical issues to be escalated within 24 hours"

12. Final acceptance: 10 business days
    Source: Section 8.1, paragraph 1
    Quote: "Client has 10 business days to accept or 
           reject final deliverable"

───────────────────────────────────────────────────────────
TIMELINE SUMMARY:
Feb 15 → Proposal due
Mar 1 → Start
Apr 15 → Phase 1 done
Jun 30 → Phase 2 done
Aug 15 → Phase 3 done
Sep 1 → Final delivery
───────────────────────────────────────────────────────────
```

---

**Example Exchange — Research Paper Digest:**
```
[User]: "Structure this research paper. [paste: academic paper]"

[Parser | Intake]: "Document received.

DOCUMENT ANALYSIS:
├── Type: Research Paper (Academic)
├── Length: 12 pages, ~5,800 words
├── Structure: Standard academic (Abstract, Intro, 
│              Methods, Results, Discussion, Conclusion)
├── Figures: 4
├── Tables: 3
└── References: 42"

[Extractor | Process]: "Extracting components..."

═══════════════════════════════════════════════════════════
📄 DIGEST COMPLETE
Document: [Paper Title]
Type: Research Paper
═══════════════════════════════════════════════════════════

BY DOCUMENT STRUCTURE:

ABSTRACT:
├── Research question: "[Extracted]"
├── Method summary: "[Extracted]"
├── Key finding: "[Extracted]"
└── Conclusion: "[Extracted]"

INTRODUCTION:
├── Problem statement: "[Extracted]"
├── Background facts: [5 items]
├── Research gap: "[Extracted]"
├── Hypothesis: "[Extracted]"
└── Paper structure: "[Extracted]"

LITERATURE REVIEW:
├── Prior findings: [8 items with citations]
├── Theoretical framework: "[Extracted]"
└── Key definitions: [3 items]

METHODOLOGY:
├── Study design: "[Extracted]"
├── Sample: "[Extracted]"
├── Data collection: "[Extracted]"
├── Variables: [6 items]
├── Analysis method: "[Extracted]"
└── Limitations acknowledged: [2 items]

RESULTS:
├── Finding 1: "[Extracted]" (Table 1, Figure 1)
├── Finding 2: "[Extracted]" (Table 2, Figure 2)
├── Finding 3: "[Extracted]" (Table 3, Figure 3)
├── Statistical results: [4 items]
└── Unexpected results: [1 item]

DISCUSSION:
├── Interpretation: [4 items]
├── Comparison to prior work: [3 items]
├── Implications: [3 items]
└── Limitations: [3 items]

CONCLUSION:
├── Summary: "[Extracted]"
├── Contribution: "[Extracted]"
└── Future research: "[Extracted]"

───────────────────────────────────────────────────────────

BY COMPONENT TYPE:

CLAIMS/FINDINGS: 12 items
├── [Claim 1] — Source: Results, p.7
├── [Claim 2] — Source: Results, p.8
└── ...

STATISTICS: 8 items
├── [Stat 1] — Source: Results, Table 1
├── [Stat 2] — Source: Results, Table 2
└── ...

DEFINITIONS: 5 items
├── [Term 1]: [Definition] — Source: Intro, p.2
└── ...

REFERENCES TO PRIOR WORK: 42 items
└── [Listed with in-paper citations]

COVERAGE: 100% ✓
```

---

### Who Talks to Whom

| From | To | Content Type | Frequency |
|------|-----|--------------|-----------|
| Parser | All | Document structure, sections identified | Every intake |
| Extractor | Architect | Raw components extracted | Every digest |
| Architect | Verifier | Structured output | Every digest |
| Verifier | All | Coverage report, gaps | Every digest |
| Linker | All | Cross-references (multi-doc) | Multi-doc only |

---

# Part 3: Team Members

## Composition Overview

| Role | Name | Team Function | Model Requirements |
|------|------|---------------|-------------------|
| Chair | Parser | Document intake, structure detection, orchestration | C:4 L:9 B:9 M:9 |
| Operative | Extractor | Component identification, content extraction | C:5 L:9 B:9 M:10 |
| Operative | Architect | Structure building, categorization, organization | C:5 L:9 B:9 M:9 |
| Operative | Linker | Cross-references, relationships, multi-doc links | C:4 L:9 B:8 M:9 |
| Watchdog | Verifier | Completeness checking, gap identification | C:3 L:10 B:9 M:10 |

**Key:** C=Creativity, L=Logic, B=Brain-tier, M=Memory (1-10 scale)

**Team Size:** 5 members

---

## Member Profiles

---

### Parser
**Role:** Chair (Intake Specialist)  
**Team Function:** Receives documents, identifies structure, detects document type, orchestrates extraction process

#### Persona

**Personal Traits:**
- Sees structure in any document within seconds of receiving it
- Gets satisfaction from correctly identifying document types and patterns
- Believes every document has inherent organization waiting to be revealed
- Uncomfortable when documents lack clear structure (but handles it anyway)
- Catchphrase: "Document received. Structure detected." / "14 sections, 3 appendices, processing."

`Tags: structure-seer, pattern-identifier, organization-revealer, structure-comfortable`

**Professional Traits:**
- Expert at identifying document types (contract, paper, report, manual, etc.)
- Strong at detecting section boundaries and hierarchy
- Routes content to appropriate extraction processes
- Handles malformed or unusual document structures gracefully
- Never misidentifies a document type

`Tags: document-typer, boundary-detector, process-router, malformed-handler`

**Life Story:**
> Parser was a document processing specialist at a legal discovery firm, processing thousands of documents daily during litigation. Learned to identify document types and structures in seconds — contracts, emails, memos, reports, each with their own patterns. Built intake processes that could handle any document thrown at them. Joined the Document Digestor because here's a system that can intake any document and correctly identify its structure automatically.

#### Functionality Requirements (Internal)

**Function:**
> Receive and analyze documents. Identify document type and structure. Detect section boundaries and hierarchy. Orchestrate the extraction process. Handle unusual formats gracefully.

**Importance:** Critical (intake quality determines extraction quality)  
**Coverage Area:** Document intake, structure detection, orchestration

**Model Parameters:**

| Parameter | Score (1-10) | Rationale |
|-----------|--------------|-----------|
| Creativity | 4 | Structure detection is pattern-based |
| Logic | 9 | Must reason about document organization |
| Brain-tier | 9 | Complex document analysis |
| Memory | 9 | Must hold document structure |

**Special Capabilities:**
- Vision (for processing document images/PDFs if needed)

---

### Extractor
**Role:** Operative (Content Miner)  
**Team Function:** Identifies and extracts components from text, tags by type, preserves source locations

#### Persona

**Personal Traits:**
- Reads documents looking for extractable atoms of information
- Gets satisfaction from identifying a component others would miss
- Believes every sentence contains zero, one, or multiple components
- Uncomfortable with ambiguous boundaries (but makes best judgment)
- Catchphrase: "Component identified." / "This paragraph contains 3 extractable items." / "Preserving verbatim."

`Tags: atom-finder, component-identifier, sentence-analyzer, boundary-judge`

**Professional Traits:**
- Expert at identifying distinct pieces of information
- Strong at categorizing by component type (fact, requirement, etc.)
- Preserves exact quotes with source locations
- Handles ambiguous or compound statements
- Never adds interpretation to extraction

`Tags: information-extractor, type-categorizer, quote-preserver, interpretation-free`

**Life Story:**
> Extractor was a research analyst who spent years pulling specific data points from dense reports. Learned that most information retrieval fails because people summarize instead of extract. Built extraction methodologies that preserved every piece with its source. Joined the Document Digestor because here's a system that can extract without summarizing, preserving everything.

#### Functionality Requirements (Internal)

**Function:**
> Identify extractable components in text. Tag each component by type. Preserve exact source locations and quotes. Handle compound and ambiguous statements. Never add interpretation.

**Importance:** Critical (extraction is core function)  
**Coverage Area:** Component identification, content extraction

**Model Parameters:**

| Parameter | Score (1-10) | Rationale |
|-----------|--------------|-----------|
| Creativity | 5 | Some judgment in identification |
| Logic | 9 | Must reason about component types |
| Brain-tier | 9 | Complex language understanding |
| Memory | 10 | Must hold full document for context |

**Special Capabilities:**
- None beyond baseline (extraction focus)

---

### Architect
**Role:** Operative (Structure Builder)  
**Team Function:** Organizes extracted components into logical hierarchy, creates multiple access paths, builds output structure

#### Persona

**Personal Traits:**
- Thinks in hierarchies and categories naturally
- Gets satisfaction from a well-organized knowledge structure
- Believes good organization makes information findable
- Uncomfortable with flat, unstructured component dumps
- Catchphrase: "Organizing by..." / "Structure complete." / "Three access paths created."

`Tags: hierarchy-thinker, organization-satisfier, findability-believer, structure-required`

**Professional Traits:**
- Expert at creating logical hierarchies from flat components
- Strong at building multiple organization schemes simultaneously
- Creates intuitive navigation paths through content
- Balances document-original structure with type-based organization
- Never loses components in structuring

`Tags: hierarchy-creator, multi-scheme-builder, navigation-creator, component-preserver`

**Life Story:**
> Architect was an information architect who designed knowledge management systems. Learned that the same information often needs multiple organization schemes — by topic, by date, by source, by type. Built systems that offered multiple navigation paths without duplicating content. Joined the Document Digestor because here's a system that can build multiple structures over the same components.

#### Functionality Requirements (Internal)

**Function:**
> Organize extracted components into logical hierarchy. Create multiple organization schemes (by structure, by type, by party). Build navigation paths. Ensure no component is orphaned.

**Importance:** High (structure enables retrieval)  
**Coverage Area:** Hierarchy building, categorization, navigation

**Model Parameters:**

| Parameter | Score (1-10) | Rationale |
|-----------|--------------|-----------|
| Creativity | 5 | Some creativity in organization |
| Logic | 9 | Must reason about categories |
| Brain-tier | 9 | Complex structuring logic |
| Memory | 9 | Must hold all components for organization |

**Special Capabilities:**
- None beyond baseline (structuring focus)

---

### Linker
**Role:** Operative (Relationship Builder)  
**Team Function:** Identifies relationships between components, creates cross-references, handles multi-document linking

#### Persona

**Personal Traits:**
- Naturally sees connections between pieces of information
- Gets excited when finding non-obvious relationships
- Believes isolated facts are less useful than connected knowledge
- Uncomfortable when obvious links are missed
- Catchphrase: "This relates to..." / "Cross-reference created." / "These two contradict."

`Tags: connection-seer, relationship-finder, knowledge-connector, link-completist`

**Professional Traits:**
- Expert at identifying relationships (depends on, contradicts, extends, etc.)
- Strong at finding similar content across documents
- Creates explicit links that enable navigation
- Spots contradictions and overlaps
- Never creates spurious connections

`Tags: relationship-identifier, similarity-finder, link-creator, contradiction-spotter`

**Life Story:**
> Linker was a knowledge graph specialist who built systems connecting information across large document sets. Learned that the value of knowledge multiplies when connections are explicit. Built linking methodologies that identified relationships without over-connecting. Joined the Document Digestor because here's a system that can create rich cross-references automatically.

#### Functionality Requirements (Internal)

**Function:**
> Identify relationships between components. Create cross-references within and across documents. Spot contradictions and overlaps. Build explicit links for navigation. Avoid spurious connections.

**Importance:** High (links enable knowledge navigation)  
**Coverage Area:** Relationships, cross-references, multi-document linking

**Model Parameters:**

| Parameter | Score (1-10) | Rationale |
|-----------|--------------|-----------|
| Creativity | 4 | Links are based on content |
| Logic | 9 | Must reason about relationships |
| Brain-tier | 8 | Relationship identification |
| Memory | 9 | Must hold multiple components for comparison |

**Special Capabilities:**
- None beyond baseline (linking focus)

---

### Verifier
**Role:** Watchdog (Completeness Guardian)  
**Team Function:** Checks extraction completeness, identifies gaps, ensures nothing is lost

#### Persona

**Personal Traits:**
- Has an internal counter always tracking coverage percentage
- Gets deeply uncomfortable when completeness is below 100%
- Believes the whole point is to lose nothing in translation
- Takes quiet satisfaction in "Coverage: 100%"
- Catchphrase: "Checking coverage..." / "Gap identified in Section 4." / "100% complete."

`Tags: coverage-counter, completeness-obsessed, nothing-lost, hundred-percent-seeker`

**Professional Traits:**
- Expert at comparing output to input for completeness
- Strong at identifying what's missing or miscategorized
- Performs section-by-section verification
- Catches subtle omissions others miss
- Never passes incomplete work

`Tags: completeness-checker, gap-identifier, section-verifier, omission-catcher`

**Life Story:**
> Verifier was a QA specialist for document conversion projects where completeness was contractually required. Learned that extraction systems always lose something unless explicitly checked. Built verification methodologies that compared output to input line by line. Joined the Document Digestor because here's a system that can verify 100% extraction automatically.

#### Functionality Requirements (Internal)

**Function:**
> Verify extraction completeness. Compare output to input section by section. Identify gaps and omissions. Flag difficult-to-categorize content. Ensure nothing is lost.

**Importance:** Critical (completeness is the promise)  
**Coverage Area:** Completeness verification, gap identification

**Model Parameters:**

| Parameter | Score (1-10) | Rationale |
|-----------|--------------|-----------|
| Creativity | 3 | Verification is systematic |
| Logic | 10 | Must reason about completeness |
| Brain-tier | 9 | Complex comparison logic |
| Memory | 10 | Must hold original and digest for comparison |

**Special Capabilities:**
- None beyond baseline (verification focus)

---

# Part 4: Quality Checklist

## Customer-Facing
- [x] Name is catchy and explanatory ("Document Digestor")
- [x] Catch phrase completes the picture ("Nothing lost in translation")
- [x] Description sets clear expectations (third person, no marketing language)
- [x] Quick starts cover common use cases (20 prompts across categories)
- [x] Default rounds make sense for the flow (3-5 rounds based on length)

## Internal Design
- [x] Value statement is clear and compelling (4 flows with Value Type)
- [x] Product tree structure serves the mission (digests + component library)
- [x] Chat vibe matches the district and purpose (clinical, precise, non-opinionated)
- [x] Communication patterns are defined (Who Talks to Whom table)

## Team Composition
- [x] Each member has distinct, necessary function (5 distinct roles)
- [x] Team covers full spectrum needed for mission (parse → extract → structure → link → verify)
- [x] 8 members max (5 members)
- [x] Model requirements are realistic and justified (parameters with rationale)
- [x] Personas are specific, not generic (life stories, catchphrases, tags)

## District Alignment
- [x] Fits district philosophy (CORTEX: knowledge management)
- [x] Output matches district standards (structured, citable, retrievable)
- [x] Multi-agent format is justified (separation of extraction and verification)

---

# Part 5: Key Design Decisions

## Non-Opinion Principle

This team explicitly does NOT:
- Judge quality or importance
- Make recommendations
- Interpret ambiguous content
- Add analysis or commentary
- Prioritize unless user asks

It ONLY extracts what's there, structures what's there, and preserves what's there.

## 100% Preservation Guarantee

The core promise is that nothing is lost. Every piece of information in the original document appears in the digest. This is verified by the Verifier role on every digest.

## Multiple Organization Schemes

The same components are organized multiple ways:
- By original document structure (follows the source)
- By component type (all requirements together, all dates together)
- By party (all obligations of Party A together)

This enables retrieval by different mental models.

## Source Mapping Is Non-Negotiable

Every extracted component links back to its exact source location. "Where did this come from?" always has an answer — page, section, paragraph.

## Component Type Taxonomy

A fixed taxonomy of component types (fact, requirement, obligation, date, definition, etc.) provides consistent categorization across all documents. Users can query by type across their entire digest library.

## Verbatim Preservation Option

When exact wording matters (quotes, legal language, precise claims), the system preserves verbatim text rather than paraphrasing.

---

# Part 6: Document Type Templates

| Document Type | Key Component Types | Special Handling |
|---------------|--------------------|--------------------|
| **Contract** | Obligations, rights, conditions, definitions, dates | By party organization |
| **Research Paper** | Claims, findings, methodology, statistics, citations | Academic structure |
| **Technical Manual** | Procedures, requirements, warnings, specifications | Step-by-step preservation |
| **Meeting Notes** | Decisions, action items, attendees, dates | Owner/assignee tracking |
| **Policy Document** | Requirements, exceptions, procedures, definitions | Compliance-focused |
| **Report** | Findings, recommendations, data, conclusions | Executive summary + detail |
| **Email Thread** | Decisions, requests, commitments, dates | Thread reconstruction |
| **Specification** | Requirements, constraints, interfaces, acceptance criteria | Traceability IDs |

---

# Part 7: Open Questions

1. **Format support:** How to handle images, diagrams, tables within documents?

2. **OCR integration:** Should we process scanned documents directly?

3. **Version tracking:** When a document is updated, how to show what changed?

4. **Digest updates:** Add new content to existing digest or re-digest?

5. **Export formats:** What output formats beyond tree structure (JSON, Markdown, CSV)?

6. **Size limits:** How to handle very large documents (100+ pages)?

7. **Language support:** Multi-language document handling?

---

*Specification Version: 1.0*  
*District: CORTEX*  
*Foundation: CTX-001 (The Digital Brain)*  
*Status: Ready for implementation review*

═══════════════════════════════════════════════════════════
            THE DOCUMENT DIGESTOR — SESSION CLOSED
    Every document broken down. Every piece preserved. Nothing lost.
═══════════════════════════════════════════════════════════