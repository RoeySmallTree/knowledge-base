# Segments Index

Master list of all system prompt segments with status tracking.

---

## Legend
- `[ ]` Not started
- `[C]` Considered (design decision made)
- `[E]` Embedded (written in prompt file)
- `[I]` Implemented (backend supports it)
- `[T]` Tested (verified working)

---

## Universal Segments (All Steps)

| Segment | File | Status |
|---------|------|--------|
| [ ] KERNEL | [kernel__v1.md](./kernel__v1.md) | |
| [ ] STEP_DEFINITION | [step_definition__v1.md](./step_definition__v1.md) | |
| [ ] TASK | [task__v1.md](./task__v1.md) | |
| [ ] CHECKLIST | [checklist__v1.md](./checklist__v1.md) | |
| [ ] OUTPUT_OPTIONS | [output_options__v1.md](./output_options__v1.md) | |
| [ ] OUTPUT_FORMAT | [output_format__v1.md](./output_format__v1.md) | Step files only |
| [ ] SCHEMA | [schema__v1.md](./schema__v1.md) | Aggregated only |
| [ ] SCHEMA_REFERENCE | [schema_reference__v1.md](./schema_reference__v1.md) | Step files only |
| [ ] IDENTITY | [identity__v1.md](./identity__v1.md) | |
| [ ] FIELD_LIMITS | [field_limits__v1.md](./field_limits__v1.md) | Step files only |

---

## Step-Specific Segments

### Bootstrap Only
| Segment | File | Status |
|---------|------|--------|
| [ ] META_PRODUCTS_GUIDANCE | [meta_products_guidance__v1.md](./meta_products_guidance__v1.md) | |

### Reflect
| Segment | File | Status |
|---------|------|--------|
| [ ] COLLABS_VS_REMARKS | [collabs_vs_remarks__v1.md](./collabs_vs_remarks__v1.md) | Also in Peer Review |
| [ ] IMPORTANCE_SCALE | [importance_scale__v1.md](./importance_scale__v1.md) | Also in Peer Review, Inspect |
| [ ] COLLAB_TYPES | [collab_types__v1.md](./collab_types__v1.md) | Also in Write, PR, Inspect |

### Plan & Assign Only
| Segment | File | Status |
|---------|------|--------|
| [ ] TREE_OPERATIONS | [tree_operations__v1.md](./tree_operations__v1.md) | |
| [ ] DIRECTIVE_FORMAT | [directive_format__v1.md](./directive_format__v1.md) | |
| [ ] CONTEXT_ATTACHMENTS | [context_attachments__v1.md](./context_attachments__v1.md) | |
| [ ] CHAIR_AUTHORING | [chair_authoring__v1.md](./chair_authoring__v1.md) | |
| [ ] BOOTSTRAP_OVERRIDES | [bootstrap_overrides__v1.md](./bootstrap_overrides__v1.md) | |

### Write Only
| Segment | File | Status |
|---------|------|--------|
| [ ] CONTENT_TEMPLATES | [content_templates__v1.md](./content_templates__v1.md) | |
| [ ] CONTENT_REQUIREMENTS | [content_requirements__v1.md](./content_requirements__v1.md) | Step file only |

### Peer Review Only
| Segment | File | Status |
|---------|------|--------|
| [ ] YOUR_ROLE_MATTERS | [your_role_matters__v1.md](./your_role_matters__v1.md) | Step file only |
| [ ] FULL_TREE_ACCESS | [full_tree_access__v1.md](./full_tree_access__v1.md) | |

### Inspect Only
| Segment | File | Status |
|---------|------|--------|
| [ ] ASSESSMENT_CRITERIA | [assessment_criteria__v1.md](./assessment_criteria__v1.md) | |

### Presentation Only
| Segment | File | Status |
|---------|------|--------|
| [ ] SPEAKER_RULES | [speaker_rules__v1.md](./speaker_rules__v1.md) | |
| [ ] MESSAGE_GUIDELINES | [message_guidelines__v1.md](./message_guidelines__v1.md) | Step file only |

---

## Segment Usage Matrix

| Segment | Boot | Refl | P&A | Write | PR | Insp | Pres |
|---------|------|------|-----|-------|-----|------|------|
| KERNEL | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| STEP_DEFINITION | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| TASK | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| CHECKLIST | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| OUTPUT_OPTIONS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| OUTPUT_FORMAT | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| SCHEMA_REFERENCE | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| IDENTITY | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| FIELD_LIMITS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| META_PRODUCTS_GUIDANCE | ✓ | | | | | | |
| COLLABS_VS_REMARKS | | ✓ | | | ✓ | | |
| IMPORTANCE_SCALE | | ✓ | | | ✓ | ✓ | |
| COLLAB_TYPES | | ✓ | | ✓ | ✓ | ✓ | |
| TREE_OPERATIONS | | | ✓ | | | | |
| DIRECTIVE_FORMAT | | | ✓ | | | | |
| CONTEXT_ATTACHMENTS | | | ✓ | | | | |
| CHAIR_AUTHORING | | | ✓ | | | | |
| BOOTSTRAP_OVERRIDES | | | ✓ | | | | |
| CONTENT_TEMPLATES | | | | ✓ | | | |
| CONTENT_REQUIREMENTS | | | | ✓ | | | |
| YOUR_ROLE_MATTERS | | | | | ✓ | | |
| FULL_TREE_ACCESS | | | | | ✓ | | |
| ASSESSMENT_CRITERIA | | | | | | ✓ | |
| SPEAKER_RULES | | | | | | | ✓ |
| MESSAGE_GUIDELINES | | | | | | | ✓ |

---

## Key Discrepancies to Resolve

1. **KERNEL**: Aggregated uses `{{KERNEL}}` placeholder, step files expand inline
2. **IDENTITY**: Aggregated uses `{{IDENTITY}}`, step files use `${agent_persona}`
3. **IMPORTANCE_SCALE**: Aggregated restricts to 6-10, step files allow 1-10
4. **COLLAB_TYPES**: Missing from aggregated SCHEMA entirely
5. **OUTPUT_FORMAT vs SCHEMA**: Aggregated has JSON Schema, step files have inline+TypeScript
6. **Request context**: Aggregated shows Peer Review/Inspect/Pres as final_output only; step files have request_context option

---

## Files Count

**Total: 26 segment files**
- Universal: 10
- Step-specific: 16
