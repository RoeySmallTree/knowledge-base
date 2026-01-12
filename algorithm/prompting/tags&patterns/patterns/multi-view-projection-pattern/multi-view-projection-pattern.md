# Pattern: Multi-View Projection (Same Data, Many Lenses)

## The Gap

Current patterns store ONE structure. But the same knowledge often needs MULTIPLE presentations:

```
Same content, different needs:
- Reference view (look up quickly)
- Learning view (progressive disclosure)
- Quiz view (test understanding)
- Summary view (high-level overview)
- Debug view (troubleshooting path)
```

## The Insight

CORTEX teams shouldn't duplicate content for different views. They should have ONE source of truth with MULTIPLE projections.

## The Mechanism

```
"Source: [Content]" (Content)
├── The actual content (source of truth)
└── References: depends_on, related_to

"View: Reference" (Content)
├── projection_of: [[p:source]]
├── view_type: reference
└── [structured for quick lookup]

"View: Tutorial" (Content)  
├── projection_of: [[p:source]]
├── view_type: tutorial
└── [structured for learning]

"View: Quiz" (Content)
├── projection_of: [[p:source]]
├── view_type: quiz
└── [structured for testing]
```

## Product Structure

```
"API: Authentication" (Orchestration)
├── "Source: Auth Concepts" (Content) — the truth
│   └── [Complete auth documentation]
│
├── "Views" (Collection)
│   ├── "Reference: Auth" (Content)
│   │   ├── projection_of: [[p:source-auth]]
│   │   └── [Quick reference format, code snippets first]
│   │
│   ├── "Tutorial: Auth" (Content)
│   │   ├── projection_of: [[p:source-auth]]
│   │   └── [Step-by-step, progressive, with exercises]
│   │
│   ├── "Troubleshoot: Auth" (Content)
│   │   ├── projection_of: [[p:source-auth]]
│   │   └── [Problem → Solution tree]
│   │
│   └── "Quiz: Auth" (Content)
│       ├── projection_of: [[p:source-auth]]
│       └── [Questions to test understanding]
│
└── "View Registry" (Content)
    └── What views exist, when to use each
```

## Chair Behaviors

**On Source Update:**
```
Source content changes:
1. Check all views with projection_of: [[p:this-source]]
2. Flag views as potentially stale
3. Assign view regeneration OR
4. Auto-regenerate if transformation is deterministic
```

**On View Request:**
```
User asks for specific view:
1. Check if view exists
2. If exists and current → present
3. If exists but stale → regenerate then present
4. If doesn't exist → generate from source
```

**On View Generation:**
```
Generating a view:
1. Attach source as context
2. Directive specifies view type:
   "Transform [[p:source]] into reference format:
    - Code snippets first
    - Minimal explanation
    - Quick copy-paste ready"
```

## View Types

| View Type | Structure | Use Case |
|-----------|-----------|----------|
| **Reference** | Dense, lookup-optimized | "How do I call X?" |
| **Tutorial** | Progressive, step-by-step | "Teach me X" |
| **Troubleshoot** | Problem → Solution tree | "X isn't working" |
| **Quiz** | Questions + hidden answers | "Test my knowledge" |
| **Summary** | High-level, executive | "What is X about?" |
| **Deep-Dive** | Comprehensive, all details | "I want to understand everything" |
| **Cheatsheet** | Ultra-condensed | "Quick reminder" |

## High-Value For

| Team | View Use |
|------|----------|
| Technical Documentation Hub | API reference vs tutorial vs troubleshoot |
| The Personal University | Learning vs quiz vs reference |
| Policy & Procedure Vault | Full policy vs quick reference vs decision tree |
| The Living Codex | Rule text vs simplified vs examples |
| Organization Core | Full knowledge vs executive summary |
