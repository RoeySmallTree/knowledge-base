# Artifacts and Structure

## Purpose
Defines product node types, structural operations, and cross-domain examples to keep orchestration artifacts consistent and complete.

## 3) Product Model (Node Types) -- Specification

### 3.1 Content Product
- Purpose: a single atomic piece of content
- Structure: `[Title | Description/Context | Actual Content]`
- Types: text, code, document, diagram, data, analysis
- Rules: self-contained; ONE artifact; no children; may live alone or inside other nodes

### 3.2 Decision Product
- Purpose: place to evaluate options and make a decision
- Structure: `[Decision Statement | Supporting Analysis]`
- Rules: has a clear decision question; may have children of any type for context/research/options/trade-offs; the decision is documented in the node; output affects downstream work

### 3.3 Collection Product
- Purpose: groups multiple content nodes of the same semantic type
- Structure: `[Collection Title | Semantic Category]`
- Rules: only Content children; all children share a semantic relationship; no Decision/Orchestration/Collection as direct children; organizes without adding hierarchy

### 3.4 Orchestration Product
- Purpose: organizes complex, multi-domain work
- Structure: `[Title | Purpose/Scope]`
- Rules: may contain any node type (Content, Decision, Collection, Orchestration); provides hierarchical structure; no depth/breadth limit

### 3.5 Composition Rules
```
- Orchestration
  - Can contain: Content, Decision, Collection, Orchestration
- Decision
  - Can contain: Content, Decision, Collection, Orchestration (to support the decision)
- Collection
  - Can contain: ONLY Content nodes (group similar items)
- Content
  - Cannot contain children (leaf)
```

### 3.6 Selection Guide
Use Content when: single complete artifact; atomic; one file/document/info piece.
Use Decision when: a choice impacts direction; options must be evaluated with support.
Use Collection when: multiple same-type content items share a semantic relationship (e.g., chapters, DTOs, migrations, test cases).
Use Orchestration when: structuring cross-domain work; building a module/system/domain; needing hierarchy.

### 3.7 Structural Notes
- Completeness: structure must include everything needed to execute.
- No external dependencies: do not refer to tasks that live outside the structure.
- Hierarchical clarity: each level's purpose/scope is explicit.
- Semantic consistency: collections group truly similar items.
- Decision traceability: decisions document rationale and inform downstream nodes.

## 11) Structural Operations

### 11.1 Nested Product Creation (single pass)
- The chair can create nested nodes in one output.

**Examples:**
- Create FE code Orchestration and, within it, a 'repo-structure' Content Product simultaneously.
- Create 'book chapters' Collection with 'chapter 1' Content Product in one output.

### 11.2 Structural Change (comfort & authority)
- The chair should be comfortable changing the structure at any time: add/remove nodes, alter hierarchy--whatever improves accuracy.

### 11.3 Integrity Constraints (from Section 3.7)
- Enforce completeness, no external dependencies, hierarchical clarity, semantic consistency, and decision traceability at all times.

## 12) Examples Across Domains (unchanged, for reference)

**Research Project**
```
Orchestration | Research Project
- Decision | Research Question
  - Content | Literature Review
  - Content | Hypothesis
- Orchestration | Methodology
  - Collection | Experiment Protocols
    - Content | Protocol 1
    - Content | Protocol 2
- Collection | Data Sets
  - Content | Dataset A
  - Content | Dataset B
```

**Book Writing**
```
Orchestration | Book
- Decision | Book Structure & Themes
  - Content | Target Audience Analysis
  - Content | Core Message
- Content | Outline
- Collection | Chapters
  - Content | Chapter 1
  - Content | Chapter 2
  - Content | Chapter 3
```

**Business Strategy**
```
Orchestration | Company Strategy
- Decision | Market Entry Strategy
  - Content | Market Analysis
  - Content | Competitive Landscape
  - Decision | Geographic Focus
    - Content | Region A Feasibility
    - Content | Region B Feasibility
- Orchestration | Execution Plan
  - Collection | Milestones
    - Content | Q1 Goals
    - Content | Q2 Goals
  - Content | Budget
```
