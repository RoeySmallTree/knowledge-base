# Phase 1: Implementation Plan

**Date:** 2025-12-11  
**Goal:** Build the template engine and entity renderers  

---

## Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Step 1: Create Type Definitions](#step-1-create-type-definitions)
4. [Step 2: Create Template Engine](#step-2-create-template-engine)
5. [Step 3: Create Entity Renderers](#step-3-create-entity-renderers)
6. [Step 4: Create Composite Renderers](#step-4-create-composite-renderers)
7. [Step 5: Create Renderer Registry](#step-5-create-renderer-registry)
8. [Validation Checklist](#validation-checklist)

---

## Overview

### What We're Building

A modular prompt rendering system with:

1. **Template Engine** — Interpolates `{{variables}}` in markdown templates
2. **Entity Renderers** — Render domain objects with configurable includes
3. **Composite Renderers** — Combine entity renderers for complex sections
4. **Renderer Registry** — Central access point for all renderers

### Key Concept: Format + Includes

Every renderer uses TWO configuration options:

| Option | Purpose |
|--------|---------|
| `format` | HOW to structure the output (inline, block, tree-node, etc.) |
| `includes` | WHAT data to include in the output |

**Presets** are shortcuts for common `includes` combinations:

| Preset | Use Case | Token Budget |
|--------|----------|--------------|
| `minimal` | ID lists, quick references | ~10-20 tokens |
| `standard` | Normal context sections | ~50-80 tokens |
| `full` | Focus products, full detail | ~200-500+ tokens |

### Reference Files

Entity specifications (READ THESE FIRST):
- [Product Entity](./entities/product.md)
- [Version Entity](./entities/version.md)
- [Collab Entity](./entities/collab.md)
- [Member Entity](./entities/member.md)
- [Session Entity](./entities/session.md)

Composite specifications:
- [Product Tree](./composites/product_tree.md)
- [Valid IDs](./composites/valid_ids.md)
- [Work History](./composites/work_history.md)

---

## File Structure

Create these files in this order:

```
src/orchestrator/prompter/templates/
├── types.ts                    # Step 1: Type definitions
├── engine.ts                   # Step 2: Template engine
│
├── renderers/
│   ├── base.ts                 # Step 3a: Base utilities
│   ├── product.ts              # Step 3b: Product renderer
│   ├── version.ts              # Step 3c: Version renderer
│   ├── collab.ts               # Step 3d: Collab renderer
│   ├── member.ts               # Step 3e: Member renderer
│   ├── session.ts              # Step 3f: Session renderer
│   │
│   ├── product-tree.ts         # Step 4a: Product tree composite
│   ├── valid-ids.ts            # Step 4b: Valid IDs composite
│   ├── work-history.ts         # Step 4c: Work history composite
│   │
│   └── registry.ts             # Step 5: Registry
│
└── index.ts                    # Exports
```

---

## Step 1: Create Type Definitions

**File:** `src/orchestrator/prompter/templates/types.ts`

```typescript
// src/orchestrator/prompter/templates/types.ts
// Type definitions for the template rendering system
// RULE: No loose strings. All options use enums.

import type {
  ProductContext,
  VersionContext,
  CollabContext,
  MemberContext,
  SessionContext,
  ContextTree,
  UUID,
} from '../types.js';

// Re-export for convenience
export type {
  ProductContext,
  VersionContext,
  CollabContext,
  MemberContext,
  SessionContext,
  ContextTree,
  UUID,
};

// ============================================================================
// RENDER CONTEXT
// ============================================================================

/**
 * Context passed to all renderers containing shared data lookups.
 */
export interface RenderContext {
  productsById: Map<UUID, ProductContext>;
  versionsById: Map<UUID, VersionContext>;
  collabsById: Map<UUID, CollabContext>;
  memberMap: Map<string, MemberContext>;
  currentMemberId?: string;
  session: SessionContext;
}

export function createRenderContext(ctx: ContextTree): RenderContext {
  return {
    productsById: ctx.productsById,
    versionsById: ctx.versionsById,
    collabsById: ctx.collabsById,
    memberMap: ctx.members,
    currentMemberId: ctx.currentMember?.id,
    session: ctx.session,
  };
}

// ============================================================================
// PRODUCT ENUMS & TYPES
// ============================================================================

export enum ProductFormat {
  Inline = 'inline',
  Block = 'block',
  TreeNode = 'tree-node',
}

export enum ProductInclude {
  Id = 'id',
  Type = 'type',
  Status = 'status',
  Owner = 'owner',
  Dod = 'dod',
  Description = 'description',
  RoundFocus = 'round_focus',
  LatestVersion = 'latest_version',
  VersionTitle = 'version_title',
  VersionContent = 'version_content',
  VersionHistory = 'version_history',  // Chronological: directive, summary, feedback, reflection
  Collabs = 'collabs',
  CollabCount = 'collab_count',
  OwnershipMarker = 'ownership_marker',
  SinceThen = 'since_then',  // Current round: directive, feedback, last reflection
}

export const ProductPresets = {
  minimal: [ProductInclude.Id, ProductInclude.Type, ProductInclude.Status],
  standard: [
    ProductInclude.Id, ProductInclude.Type, ProductInclude.Status,
    ProductInclude.Owner, ProductInclude.Dod, ProductInclude.RoundFocus,
  ],
  full: [
    ProductInclude.Id, ProductInclude.Type, ProductInclude.Status,
    ProductInclude.Owner, ProductInclude.Dod, ProductInclude.Description,
    ProductInclude.RoundFocus, ProductInclude.LatestVersion,
    ProductInclude.VersionTitle, ProductInclude.VersionContent,
    ProductInclude.VersionHistory, ProductInclude.Collabs,
  ],
  write: [
    ProductInclude.Id, ProductInclude.Type, ProductInclude.Status,
    ProductInclude.Owner, ProductInclude.Dod, ProductInclude.Description,
    ProductInclude.RoundFocus, ProductInclude.LatestVersion,
    ProductInclude.VersionTitle, ProductInclude.VersionContent,
    ProductInclude.SinceThen,
  ],
};

export interface ProductRenderOptions {
  format?: ProductFormat;
  includes?: ProductInclude[];
  highlightOwnedBy?: string;
  indent?: number;
}

// ============================================================================
// VERSION ENUMS & TYPES
// ============================================================================

export enum VersionFormat {
  Inline = 'inline',
  Block = 'block',
  Changelog = 'changelog',
}

export enum VersionInclude {
  VersionNumber = 'version_number',
  RoundNumber = 'round_number',
  Title = 'title',
  Author = 'author',
  AuthorKind = 'author_kind',
  ChangeSummary = 'change_summary',
  Directive = 'directive',
  Content = 'content',
  ReflectionNote = 'reflection_note',
  CreatedAt = 'created_at',
  Delta = 'delta',
}

export const VersionPresets = {
  minimal: [VersionInclude.VersionNumber, VersionInclude.Author, VersionInclude.ChangeSummary],
  standard: [
    VersionInclude.VersionNumber, VersionInclude.Author,
    VersionInclude.AuthorKind, VersionInclude.ChangeSummary, VersionInclude.CreatedAt,
  ],
  full: [
    VersionInclude.VersionNumber, VersionInclude.Author,
    VersionInclude.AuthorKind, VersionInclude.ChangeSummary,
    VersionInclude.CreatedAt, VersionInclude.Content,
  ],
  history: [
    VersionInclude.VersionNumber, VersionInclude.RoundNumber, VersionInclude.Author,
    VersionInclude.Directive, VersionInclude.ChangeSummary, VersionInclude.ReflectionNote,
  ],
};

export interface VersionRenderOptions {
  format?: VersionFormat;
  includes?: VersionInclude[];
  previousVersion?: VersionContext;
}

// ============================================================================
// COLLAB ENUMS & TYPES
// ============================================================================

export enum CollabFormat {
  Inline = 'inline',
  Block = 'block',
  Directive = 'directive',
  FeedbackItem = 'feedback-item',
}

export enum CollabInclude {
  Status = 'status',
  Author = 'author',
  AuthorKind = 'author_kind',
  ProductName = 'product_name',
  ProductId = 'product_id',
  Importance = 'importance',
  Content = 'content',
  Summary = 'summary',
  Addressees = 'addressees',
  References = 'references',
  CreatedAt = 'created_at',
}

export const CollabPresets = {
  minimal: [CollabInclude.Status, CollabInclude.Author, CollabInclude.ProductName, CollabInclude.Importance],
  standard: [
    CollabInclude.Status, CollabInclude.Author, CollabInclude.AuthorKind,
    CollabInclude.ProductName, CollabInclude.Importance, CollabInclude.Content,
  ],
  full: [
    CollabInclude.Status, CollabInclude.Author, CollabInclude.AuthorKind,
    CollabInclude.ProductName, CollabInclude.ProductId, CollabInclude.Importance,
    CollabInclude.Content, CollabInclude.Summary, CollabInclude.Addressees,
    CollabInclude.References,
  ],
};

export interface CollabRenderOptions {
  format?: CollabFormat;
  includes?: CollabInclude[];
  filterResolved?: boolean;
}

// ============================================================================
// MEMBER ENUMS & TYPES
// ============================================================================

export enum MemberFormat {
  Inline = 'inline',
  ListItem = 'list-item',
  Block = 'block',
  IdReference = 'id-reference',
}

export enum MemberInclude {
  Id = 'id',
  Name = 'name',
  Role = 'role',
  TeamRole = 'team_role',
  Responsibility = 'responsibility',
  Area = 'area',
  Persona = 'persona',
  LifeStory = 'life_story',
  SpecialOrders = 'special_orders',
  OwnedProducts = 'owned_products',
  CurrentMarker = 'current_marker',
}

export const MemberPresets = {
  minimal: [MemberInclude.Name, MemberInclude.Id, MemberInclude.Role],
  standard: [
    MemberInclude.Name, MemberInclude.Id, MemberInclude.Role,
    MemberInclude.TeamRole, MemberInclude.Responsibility,
  ],
  full: [
    MemberInclude.Name, MemberInclude.Id, MemberInclude.Role,
    MemberInclude.TeamRole, MemberInclude.Responsibility,
    MemberInclude.Area, MemberInclude.Persona,
  ],
  assignment: [
    MemberInclude.Name, MemberInclude.Id, MemberInclude.Role,
    MemberInclude.TeamRole, MemberInclude.Responsibility,
    MemberInclude.Area, MemberInclude.OwnedProducts,
  ],
};

export interface MemberRenderOptions {
  format?: MemberFormat;
  includes?: MemberInclude[];
  filterRole?: string;
  operativesOnly?: boolean;
  isCurrentMember?: boolean;
}

// ============================================================================
// SESSION ENUMS & TYPES
// ============================================================================

export enum SessionFormat {
  Inline = 'inline',
  Header = 'header',
  Full = 'full',
}

export enum SessionInclude {
  Name = 'name',
  Round = 'round',
  Status = 'status',
  MissionCharter = 'mission_charter',
  Objectives = 'objectives',
  MissingDetails = 'missing_details',
}

export const SessionPresets = {
  minimal: [SessionInclude.Name, SessionInclude.Round],
  standard: [SessionInclude.Name, SessionInclude.Round, SessionInclude.Status],
  full: [
    SessionInclude.Name, SessionInclude.Round, SessionInclude.Status,
    SessionInclude.MissionCharter, SessionInclude.Objectives,
    SessionInclude.MissingDetails,
  ],
};

export interface SessionRenderOptions {
  format?: SessionFormat;
  includes?: SessionInclude[];
}
```

---

## Step 2: Create Template Engine

**File:** `src/orchestrator/prompter/templates/engine.ts`

```typescript
// src/orchestrator/prompter/templates/engine.ts
// Template utilities

/**
 * Interpolate variables in a template string.
 * Supports: {{name}} and {{nested.variable}}
 */
export function interpolate(
  template: string,
  variables: Record<string, unknown>,
): string {
  const variablePattern = /\{\{([a-zA-Z_][a-zA-Z0-9_\.]*)\}\}/g;
  
  return template.replace(variablePattern, (match, path) => {
    const value = getNestedValue(variables, path);
    if (value === undefined || value === null) return '';
    return String(value);
  });
}

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const parts = path.split('.');
  let current: unknown = obj;
  
  for (const part of parts) {
    if (current === null || current === undefined) return undefined;
    if (typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  
  return current;
}

/**
 * Join sections with double newlines, filtering empty ones.
 */
export function joinSections(sections: Array<string | undefined | null>): string {
  return sections
    .filter((s): s is string => !!s && s.trim().length > 0)
    .join('\n\n');
}

/**
 * Create indentation string.
 */
export function indent(depth: number, chars: string = '  '): string {
  return chars.repeat(depth);
}

/**
 * Check if an include is present in the includes array.
 */
export function has<T>(includes: T[], item: T): boolean {
  return includes.includes(item);
}
```

---

## Step 3: Create Entity Renderers

### Step 3a: Base Utilities

**File:** `src/orchestrator/prompter/templates/renderers/base.ts`

```typescript
// src/orchestrator/prompter/templates/renderers/base.ts
// Base utilities shared by all renderers

import type { MemberContext, UUID } from '../types.js';

/**
 * Look up member name from ID, with fallback.
 */
export function getMemberName(
  memberId: string | null | undefined,
  memberMap: Map<string, MemberContext>,
): string {
  if (!memberId) return 'Unassigned';
  const member = memberMap.get(memberId);
  return member?.name ?? memberId;
}

/**
 * Truncate text at word boundary.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const truncateAt = text.lastIndexOf(' ', maxLength);
  const finalIndex = truncateAt === -1 ? maxLength : truncateAt;
  return text.substring(0, finalIndex).trim() + '...';
}
```

### Step 3b: Product Renderer

**File:** `src/orchestrator/prompter/templates/renderers/product.ts`

**Reference:** [entities/product.md](./entities/product.md)

```typescript
// src/orchestrator/prompter/templates/renderers/product.ts
// Product entity renderer

import type {
  ProductContext,
  ProductRenderOptions,
  RenderContext,
} from '../types.js';
import { ProductFormat, ProductInclude, ProductPresets } from '../types.js';
import { getMemberName } from './base.js';
import { has, indent as indentStr, joinSections } from '../engine.js';

/**
 * Render a ProductContext with configurable format and includes.
 * 
 * Format determines structure (inline/block/tree-node).
 * Includes determines what data to show.
 */
export function renderProduct(
  product: ProductContext,
  options: ProductRenderOptions = {},
  context: RenderContext,
): string {
  const format = options.format ?? ProductFormat.Block;
  const includes = options.includes ?? ProductPresets.minimal;
  
  switch (format) {
    case ProductFormat.Inline:
      return renderInline(product, includes, options, context);
    case ProductFormat.TreeNode:
      return renderTreeNode(product, includes, options, context);
    case ProductFormat.Block:
    default:
      return renderBlock(product, includes, options, context);
  }
}

function renderInline(
  product: ProductContext,
  includes: ProductInclude[],
  options: ProductRenderOptions,
  context: RenderContext,
): string {
  const parts: string[] = [product.name];
  
  if (has(includes, ProductInclude.Type) || has(includes, ProductInclude.Status)) {
    const typeStatus = [
      has(includes, ProductInclude.Type) ? product.type : null,
      has(includes, ProductInclude.Status) ? product.status : null,
    ].filter(Boolean).join(', ');
    parts.push(`[${typeStatus}]`);
  }
  
  if (has(includes, ProductInclude.Id)) {
    parts.push(`(${product.id})`);
  }
  
  if (has(includes, ProductInclude.Owner)) {
    const ownerName = getMemberName(product.owner_id, context.memberMap);
    parts.push(`Owner: ${ownerName}`);
  }
  
  if (has(includes, ProductInclude.RoundFocus) && product.is_round_focus) {
    parts.push('★');
  }
  
  if (has(includes, ProductInclude.OwnershipMarker) && options.highlightOwnedBy === product.owner_id) {
    parts.push('← YOU');
  }
  
  return parts.join(' ');
}

function renderTreeNode(
  product: ProductContext,
  includes: ProductInclude[],
  options: ProductRenderOptions,
  context: RenderContext,
): string {
  const prefix = indentStr(options.indent ?? 0);
  const lines: string[] = [];
  
  // Header line
  const owned = has(includes, ProductInclude.OwnershipMarker) && options.highlightOwnedBy === product.owner_id
    ? ' ← YOU' : '';
  lines.push(`${prefix}[${product.type}] **${product.name}** (${product.id})${owned}`);
  
  // Status and owner line
  const statusParts: string[] = [];
  if (has(includes, ProductInclude.Status)) statusParts.push(`Status: ${product.status}`);
  if (has(includes, ProductInclude.Owner)) {
    const ownerName = getMemberName(product.owner_id, context.memberMap);
    statusParts.push(`Owner: ${ownerName}`);
  }
  if (statusParts.length > 0) {
    lines.push(`${prefix}  ${statusParts.join(' | ')}`);
  }
  
  // DoD
  if (has(includes, ProductInclude.Dod)) {
    lines.push(`${prefix}  DoD: ${product.definition_of_done}`);
  }
  
  // Latest version
  if (has(includes, ProductInclude.LatestVersion) && product.selected_version_id) {
    const version = context.versionsById.get(product.selected_version_id);
    if (version) {
      const authorName = getMemberName(version.author_id, context.memberMap);
      lines.push(`${prefix}  Latest: V${version.version_number} by ${authorName}`);
      lines.push(`${prefix}  → ${version.change_summary}`);
    }
  }
  
  // Round focus
  if (has(includes, ProductInclude.RoundFocus) && product.is_round_focus) {
    lines.push(`${prefix}  ★ ROUND FOCUS`);
  }
  
  return lines.join('\n');
}

function renderBlock(
  product: ProductContext,
  includes: ProductInclude[],
  options: ProductRenderOptions,
  context: RenderContext,
): string {
  const sections: string[] = [];
  
  // Header
  const owned = has(includes, ProductInclude.OwnershipMarker) && options.highlightOwnedBy === product.owner_id
    ? ' ← YOU' : '';
  sections.push(`### ${product.name}${owned}`);
  
  // Core info lines
  const coreLines: string[] = [];
  
  if (has(includes, ProductInclude.Id)) {
    coreLines.push(`**ID:** \`${product.id}\``);
  }
  
  // Type | Status | Round Focus line
  const typeLine: string[] = [];
  if (has(includes, ProductInclude.Type)) typeLine.push(`**Type:** ${product.type}`);
  if (has(includes, ProductInclude.Status)) typeLine.push(`**Status:** ${product.status}`);
  if (has(includes, ProductInclude.RoundFocus) && product.is_round_focus) typeLine.push('★ ROUND FOCUS');
  if (typeLine.length > 0) coreLines.push(typeLine.join(' | '));
  
  if (has(includes, ProductInclude.Owner)) {
    const ownerName = getMemberName(product.owner_id, context.memberMap);
    coreLines.push(`**Owner:** ${ownerName}`);
  }
  
  if (has(includes, ProductInclude.Dod)) {
    coreLines.push(`**DoD:** ${product.definition_of_done}`);
  }
  
  if (has(includes, ProductInclude.Description) && product.description) {
    coreLines.push(`**Description:** ${product.description}`);
  }
  
  if (coreLines.length > 0) {
    sections.push(coreLines.join('\n'));
  }
  
  // Current version with explicit title and content labels
  if (product.selected_version_id) {
    const version = context.versionsById.get(product.selected_version_id);
    if (version) {
      const authorName = getMemberName(version.author_id, context.memberMap);
      sections.push('---');
      
      const versionLines = [`#### Current Version (V${version.version_number})`, ''];
      versionLines.push(`**Author:** ${authorName}`);
      
      // Version title (explicit)
      if (has(includes, ProductInclude.VersionTitle)) {
        versionLines.push('');
        versionLines.push(`**Title:** ${version.title ?? product.name + ' V' + version.version_number}`);
      }
      
      // Version content (explicitly labeled)
      if (has(includes, ProductInclude.VersionContent)) {
        versionLines.push('');
        versionLines.push('**Content:**');
        versionLines.push('```');
        versionLines.push(version.content);
        versionLines.push('```');
      }
      
      sections.push(versionLines.join('\n'));
    }
  }
  
  // Version history (chronological with directive, summary, feedback, reflection)
  if (has(includes, ProductInclude.VersionHistory) && product.version_ids.length > 0) {
    const versions = product.version_ids
      .map(id => context.versionsById.get(id))
      .filter((v): v is NonNullable<typeof v> => !!v)
      .sort((a, b) => a.version_number - b.version_number);
    
    const historyLines = ['---', '', '#### Version History (chronological)', ''];
    
    for (const version of versions) {
      const authorName = getMemberName(version.author_id, context.memberMap);
      historyLines.push(`**V${version.version_number}** by ${authorName} (Round ${version.round_number ?? '?'})`);
      
      // Directive that initiated this version
      if (version.directive) {
        historyLines.push(`- **Directed:** "${version.directive}"`);
      }
      
      // Summary of changes
      historyLines.push(`- **Summary:** ${version.change_summary}`);
      
      // Feedback received for this version
      const versionCollabs = Array.from(context.collabsById.values())
        .filter(c => c.about_product_id === product.id && c.about_version_id === version.id);
      if (versionCollabs.length > 0) {
        historyLines.push('- **Feedback:**');
        for (const collab of versionCollabs) {
          const collabAuthor = getMemberName(collab.author_id, context.memberMap);
          const status = collab.resolved ? '[✓]' : '[OPEN]';
          historyLines.push(`  - **${collabAuthor}** (${collab.author_kind}, ${collab.importance}/10) ${status}: "${collab.content}"`);
        }
      }
      
      // Reflection note
      if (version.reflection_note) {
        historyLines.push(`- **Reflected:** "${version.reflection_note}"`);
      }
      
      historyLines.push('');
    }
    
    sections.push(historyLines.join('\n'));
  }
  
  // Collabs (all, not version-specific)
  if (has(includes, ProductInclude.Collabs)) {
    const productCollabs = Array.from(context.collabsById.values())
      .filter(c => c.about_product_id === product.id);
    
    if (productCollabs.length > 0) {
      const collabLines = ['---', '', `#### Feedback (${productCollabs.length} collabs)`, ''];
      for (const collab of productCollabs) {
        const authorName = getMemberName(collab.author_id, context.memberMap);
        const status = collab.resolved ? '[✓]' : '[OPEN]';
        collabLines.push(`- **${authorName}** (${collab.author_kind}, ${collab.importance}/10) ${status}:`);
        collabLines.push(`  > "${collab.content}"`);
      }
      sections.push(collabLines.join('\n'));
    }
  }
  
  // Collab count
  if (has(includes, ProductInclude.CollabCount) && product.collab_count > 0) {
    const productCollabs = Array.from(context.collabsById.values())
      .filter(c => c.about_product_id === product.id);
    const openCount = productCollabs.filter(c => !c.resolved).length;
    const resolvedCount = productCollabs.filter(c => c.resolved).length;
    sections.push(`**Collabs:** ${openCount} open, ${resolvedCount} resolved`);
  }
  
  // Since Then (current round: directive, feedback, last reflection)
  if (has(includes, ProductInclude.SinceThen)) {
    const sinceThenLines = ['---', '', '#### Since Then (Current Round)', ''];
    
    // Current directive (Chair collab for this product in current round)
    const directive = Array.from(context.collabsById.values()).find(
      c => c.author_kind === 'chair' && c.about_product_id === product.id && !c.resolved
    );
    if (directive) {
      sinceThenLines.push('**Directive received:**');
      sinceThenLines.push(`> "${directive.content}"`);
      sinceThenLines.push('');
    }
    
    // Recent feedback (open collabs from non-Chair)
    const recentFeedback = Array.from(context.collabsById.values())
      .filter(c => c.about_product_id === product.id && c.author_kind !== 'chair' && !c.resolved);
    if (recentFeedback.length > 0) {
      sinceThenLines.push('**Feedback received:**');
      for (const collab of recentFeedback) {
        const authorName = getMemberName(collab.author_id, context.memberMap);
        sinceThenLines.push(`- **${authorName}** (${collab.author_kind}, ${collab.importance}/10) [OPEN]: "${collab.content}"`);
      }
      sinceThenLines.push('');
    }
    
    // Last reflection (from latest version)
    if (product.selected_version_id) {
      const latestVersion = context.versionsById.get(product.selected_version_id);
      if (latestVersion?.reflection_note) {
        sinceThenLines.push('**Last reflection:**');
        sinceThenLines.push(`> "${latestVersion.reflection_note}"`);
      }
    }
    
    if (sinceThenLines.length > 4) { // Has content beyond header
      sections.push(sinceThenLines.join('\n'));
    }
  }
  
  return joinSections(sections);
}
```

### Step 3c: Version Renderer

**File:** `src/orchestrator/prompter/templates/renderers/version.ts`

**Reference:** [entities/version.md](./entities/version.md)

```typescript
// src/orchestrator/prompter/templates/renderers/version.ts
// Version entity renderer

import type {
  VersionContext,
  VersionRenderOptions,
  RenderContext,
} from '../types.js';
import { VersionFormat, VersionInclude, VersionPresets } from '../types.js';
import { getMemberName } from './base.js';
import { has, joinSections } from '../engine.js';

/**
 * Render a VersionContext with configurable format and includes.
 */
export function renderVersion(
  version: VersionContext,
  options: VersionRenderOptions = {},
  context: RenderContext,
): string {
  const format = options.format ?? VersionFormat.Inline;
  const includes = options.includes ?? VersionPresets.minimal;
  
  switch (format) {
    case VersionFormat.Changelog:
      return renderChangelog(version, includes, options, context);
    case VersionFormat.Block:
      return renderBlock(version, includes, options, context);
    case VersionFormat.Inline:
    default:
      return renderInline(version, includes, options, context);
  }
}

function renderInline(
  version: VersionContext,
  includes: VersionInclude[],
  options: VersionRenderOptions,
  context: RenderContext,
): string {
  const parts: string[] = [];
  
  if (has(includes, VersionInclude.VersionNumber)) {
    parts.push(`**V${version.version_number}**`);
  }
  
  if (has(includes, VersionInclude.Author)) {
    const authorName = getMemberName(version.author_id, context.memberMap);
    parts.push(`by ${authorName}`);
  }
  
  if (has(includes, VersionInclude.ChangeSummary)) {
    parts.push(`— ${version.change_summary}`);
  }
  
  return parts.join(' ');
}

function renderChangelog(
  version: VersionContext,
  includes: VersionInclude[],
  options: VersionRenderOptions,
  context: RenderContext,
): string {
  return `- ${renderInline(version, includes, options, context)}`;
}

function renderBlock(
  version: VersionContext,
  includes: VersionInclude[],
  options: VersionRenderOptions,
  context: RenderContext,
): string {
  const sections: string[] = [];
  const lines: string[] = [];
  
  // Header
  if (has(includes, VersionInclude.VersionNumber)) {
    sections.push(`#### Version ${version.version_number}`);
  }
  
  // Metadata
  if (has(includes, VersionInclude.Author)) {
    const authorName = getMemberName(version.author_id, context.memberMap);
    const kindSuffix = has(includes, VersionInclude.AuthorKind) ? ` (${version.author_kind})` : '';
    lines.push(`**Author:** ${authorName}${kindSuffix}`);
  }
  
  if (has(includes, VersionInclude.CreatedAt)) {
    lines.push(`**Created:** ${version.created_at}`);
  }
  
  if (has(includes, VersionInclude.ChangeSummary)) {
    lines.push(`**Summary:** ${version.change_summary}`);
  }
  
  if (lines.length > 0) {
    sections.push(lines.join('\n'));
  }
  
  // Content
  if (has(includes, VersionInclude.Content)) {
    sections.push('---');
    sections.push(version.content);
  }
  
  // Delta
  if (has(includes, VersionInclude.Delta) && options.previousVersion) {
    sections.push('---');
    sections.push(`**Changes from V${options.previousVersion.version_number}:**\n\n\`\`\`diff\n${computeDelta(options.previousVersion.content, version.content)}\n\`\`\``);
  }
  
  return joinSections(sections);
}

/**
 * Compute a simple line-by-line delta between two versions.
 */
export function computeDelta(oldText: string, newText: string): string {
  const oldLines = oldText.split('\n');
  const newLines = newText.split('\n');
  const delta: string[] = [];
  const maxLines = Math.max(oldLines.length, newLines.length);
  
  for (let i = 0; i < maxLines; i++) {
    const oldLine = oldLines[i];
    const newLine = newLines[i];
    
    if (oldLine !== newLine) {
      if (oldLine !== undefined) delta.push(`- ${oldLine}`);
      if (newLine !== undefined) delta.push(`+ ${newLine}`);
    }
  }
  
  return delta.length > 0 ? delta.join('\n') : '(No changes)';
}
```

### Step 3d: Collab Renderer

**File:** `src/orchestrator/prompter/templates/renderers/collab.ts`

**Reference:** [entities/collab.md](./entities/collab.md)

```typescript
// src/orchestrator/prompter/templates/renderers/collab.ts
// Collab entity renderer

import type {
  CollabContext,
  CollabRenderOptions,
  RenderContext,
} from '../types.js';
import { CollabFormat, CollabInclude, CollabPresets } from '../types.js';
import { getMemberName } from './base.js';
import { has, joinSections } from '../engine.js';

/**
 * Render a CollabContext with configurable format and includes.
 */
export function renderCollab(
  collab: CollabContext,
  options: CollabRenderOptions = {},
  context: RenderContext,
): string {
  const format = options.format ?? CollabFormat.FeedbackItem;
  const includes = options.includes ?? CollabPresets.minimal;
  
  switch (format) {
    case CollabFormat.Directive:
      return renderDirective(collab, includes, context);
    case CollabFormat.Block:
      return renderBlock(collab, includes, context);
    case CollabFormat.Inline:
      return renderInline(collab, includes, context);
    case CollabFormat.FeedbackItem:
    default:
      return renderFeedbackItem(collab, includes, context);
  }
}

function renderInline(
  collab: CollabContext,
  includes: CollabInclude[],
  context: RenderContext,
): string {
  const parts: string[] = [];
  
  // Status
  if (has(includes, CollabInclude.Status)) {
    parts.push(collab.resolved ? '[✓]' : '[OPEN]');
  }
  
  // Author
  if (has(includes, CollabInclude.Author)) {
    const authorName = getMemberName(collab.author_id, context.memberMap);
    parts.push(authorName);
  }
  
  // Product
  if (has(includes, CollabInclude.ProductName)) {
    const product = context.productsById.get(collab.about_product_id);
    const productName = product?.name ?? collab.about_product_id;
    parts.push(`→ ${productName}`);
  }
  
  // Importance
  if (has(includes, CollabInclude.Importance)) {
    parts.push(`(${collab.importance}/10)`);
  }
  
  return parts.join(' ');
}

function renderFeedbackItem(
  collab: CollabContext,
  includes: CollabInclude[],
  context: RenderContext,
): string {
  const lines: string[] = [];
  
  // Header line
  const headerParts: string[] = [];
  
  if (has(includes, CollabInclude.Status)) {
    headerParts.push(collab.resolved ? '[✓ RESOLVED]' : '[OPEN]');
  }
  
  if (has(includes, CollabInclude.Author)) {
    const authorName = getMemberName(collab.author_id, context.memberMap);
    const kindSuffix = has(includes, CollabInclude.AuthorKind) ? ` (${collab.author_kind})` : '';
    headerParts.push(`**${authorName}**${kindSuffix}`);
  }
  
  if (has(includes, CollabInclude.ProductName)) {
    const product = context.productsById.get(collab.about_product_id);
    const productName = product?.name ?? collab.about_product_id;
    headerParts.push(`→ ${productName}`);
  }
  
  if (has(includes, CollabInclude.Importance)) {
    headerParts.push(`(importance: ${collab.importance}/10)`);
  }
  
  lines.push(headerParts.join(' ') + ':');
  
  // Content
  if (has(includes, CollabInclude.Content)) {
    lines.push(`> "${collab.content}"`);
  }
  
  return lines.join('\n');
}

function renderBlock(
  collab: CollabContext,
  includes: CollabInclude[],
  context: RenderContext,
): string {
  const sections: string[] = [];
  const lines: string[] = [];
  
  // Header
  const authorName = getMemberName(collab.author_id, context.memberMap);
  sections.push(`### Collab from ${authorName}`);
  
  // Metadata
  if (has(includes, CollabInclude.ProductId)) {
    lines.push(`**ID:** \`${collab.id}\``);
  }
  
  if (has(includes, CollabInclude.Status)) {
    lines.push(`**Status:** ${collab.resolved ? '✓ Resolved' : '⚠️ Open'}`);
  }
  
  if (has(includes, CollabInclude.ProductName) || has(includes, CollabInclude.ProductId)) {
    const product = context.productsById.get(collab.about_product_id);
    const productName = product?.name ?? collab.about_product_id;
    lines.push(`**About:** ${productName} (\`${collab.about_product_id}\`)`);
  }
  
  if (has(includes, CollabInclude.Importance)) {
    lines.push(`**Importance:** ${collab.importance}/10`);
  }
  
  if (has(includes, CollabInclude.Addressees) && collab.addressee_ids.length > 0) {
    const names = collab.addressee_ids.map(id => getMemberName(id, context.memberMap));
    lines.push(`**Addressees:** ${names.join(', ')}`);
  }
  
  if (lines.length > 0) {
    sections.push(lines.join('\n'));
  }
  
  // Content
  if (has(includes, CollabInclude.Content)) {
    sections.push('---');
    sections.push(collab.content);
  }
  
  // Summary
  if (has(includes, CollabInclude.Summary) && collab.shortest_summary) {
    sections.push(`**TL;DR:** ${collab.shortest_summary}`);
  }
  
  return joinSections(sections);
}

function renderDirective(
  collab: CollabContext,
  includes: CollabInclude[],
  context: RenderContext,
): string {
  const product = context.productsById.get(collab.about_product_id);
  const productName = product?.name ?? collab.about_product_id;
  
  const lines = [
    '#### Chair Directive',
    '',
    `**For:** ${productName} (\`${collab.about_product_id}\`)`,
    `**Importance:** ${collab.importance}/10`,
    '',
    collab.content,
  ];
  
  return lines.join('\n');
}

/**
 * Render multiple collabs with optional filtering.
 */
export function renderCollabs(
  collabs: CollabContext[],
  options: CollabRenderOptions = {},
  context: RenderContext,
): string {
  let filtered = collabs;
  
  // Apply resolved filter
  if (options.filterResolved === true) {
    filtered = filtered.filter(c => c.resolved);
  } else if (options.filterResolved === false) {
    filtered = filtered.filter(c => !c.resolved);
  }
  
  if (filtered.length === 0) {
    return '(No feedback)';
  }
  
  return filtered
    .map(c => renderCollab(c, options, context))
    .join('\n\n');
}
```

### Step 3e: Member Renderer

**File:** `src/orchestrator/prompter/templates/renderers/member.ts`

**Reference:** [entities/member.md](./entities/member.md)

```typescript
// src/orchestrator/prompter/templates/renderers/member.ts
// Member entity renderer

import type {
  MemberContext,
  MemberRenderOptions,
  RenderContext,
} from '../types.js';
import { MemberFormat, MemberInclude, MemberPresets } from '../types.js';
import { has, joinSections } from '../engine.js';

/**
 * Render a MemberContext with configurable format and includes.
 */
export function renderMember(
  member: MemberContext,
  options: MemberRenderOptions = {},
  context?: RenderContext,
): string {
  const format = options.format ?? MemberFormat.Inline;
  const includes = options.includes ?? MemberPresets.minimal;
  
  switch (format) {
    case MemberFormat.IdReference:
      return renderIdReference(member, includes, options);
    case MemberFormat.ListItem:
      return renderListItem(member, includes, options);
    case MemberFormat.Block:
      return renderBlock(member, includes, options);
    case MemberFormat.Inline:
    default:
      return renderInline(member, includes, options);
  }
}

function renderInline(
  member: MemberContext,
  includes: MemberInclude[],
  options: MemberRenderOptions,
): string {
  const parts: string[] = [];
  
  if (has(includes, MemberInclude.Name)) {
    parts.push(member.name);
  }
  
  if (has(includes, MemberInclude.Id)) {
    parts.push(`(${member.id})`);
  }
  
  if (has(includes, MemberInclude.Role)) {
    parts.push(`- ${member.role}`);
  }
  
  if (has(includes, MemberInclude.CurrentMarker) && options.isCurrentMember) {
    parts.push('← YOU');
  }
  
  return parts.join(' ');
}

function renderIdReference(
  member: MemberContext,
  includes: MemberInclude[],
  options: MemberRenderOptions,
): string {
  const teamRole = member.team_role ?? member.role;
  return `${member.id} → ${member.name} (${teamRole})`;
}

function renderListItem(
  member: MemberContext,
  includes: MemberInclude[],
  options: MemberRenderOptions,
): string {
  const lines: string[] = [];
  
  // Header line
  const headerParts: string[] = [`- **${member.name}**`];
  if (has(includes, MemberInclude.Id)) headerParts.push(`(${member.id})`);
  if (has(includes, MemberInclude.Role)) headerParts.push(`: ${member.role}`);
  if (has(includes, MemberInclude.TeamRole) && member.team_role) headerParts.push(`/ ${member.team_role}`);
  lines.push(headerParts.join(' '));
  
  // Sub-details
  if (has(includes, MemberInclude.Responsibility) && member.operative_responsibility) {
    lines.push(`  - Responsibility: ${member.operative_responsibility}`);
  }
  
  if (has(includes, MemberInclude.Area) && member.operative_area) {
    lines.push(`  - Area: ${member.operative_area}`);
  }
  
  if (has(includes, MemberInclude.OwnedProducts)) {
    lines.push(`  - Products: ${member.owned_products_count} total, ${member.owned_pending_products_count} pending`);
  }
  
  return lines.join('\n');
}

function renderBlock(
  member: MemberContext,
  includes: MemberInclude[],
  options: MemberRenderOptions,
): string {
  const sections: string[] = [];
  
  // Identity line
  sections.push(`You are **${member.name}** (${member.id}), the **${member.team_role ?? member.role}** on this team.`);
  
  // Persona
  if (has(includes, MemberInclude.Persona) && member.custom_persona_prompt) {
    sections.push(member.custom_persona_prompt);
  }
  
  sections.push('---');
  
  // Domain info
  if (has(includes, MemberInclude.Responsibility) || has(includes, MemberInclude.Area)) {
    const domainLines: string[] = ['**Your Domain:**'];
    if (has(includes, MemberInclude.Responsibility) && member.operative_responsibility) {
      domainLines.push(`- **Responsibility:** ${member.operative_responsibility}`);
    }
    if (has(includes, MemberInclude.Area) && member.operative_area) {
      domainLines.push(`- **Area:** ${member.operative_area}`);
    }
    if (domainLines.length > 1) {
      sections.push(domainLines.join('\n'));
    }
  }
  
  // Life story
  if (has(includes, MemberInclude.LifeStory) && member.life_story) {
    sections.push(`**Background:** ${member.life_story}`);
  }
  
  // Special orders
  if (has(includes, MemberInclude.SpecialOrders) && member.special_orders) {
    sections.push(`**Special Instructions:** ${member.special_orders}`);
  }
  
  return joinSections(sections);
}

/**
 * Render the full team roster.
 */
export function renderTeamRoster(
  members: Map<string, MemberContext>,
  options: MemberRenderOptions = {},
  context?: RenderContext,
): string {
  const lines = ['### TEAM', ''];
  
  for (const member of members.values()) {
    // Apply filters
    if (options.operativesOnly && member.role !== 'operative') continue;
    if (options.filterRole && member.role !== options.filterRole) continue;
    
    lines.push(renderMember(member, { ...options, format: MemberFormat.ListItem }, context));
    lines.push('');
  }
  
  return lines.join('\n').trim();
}

/**
 * Render operatives only for valid IDs.
 */
export function renderOperativesList(
  members: Map<string, MemberContext>,
): string {
  const lines = ['Team Members (Operatives only for assignments):'];
  
  for (const member of members.values()) {
    if (member.role === 'operative') {
      lines.push(`  ${renderMember(member, { format: MemberFormat.IdReference })}`);
    }
  }
  
  return lines.join('\n');
}
```

### Step 3f: Session Renderer

**File:** `src/orchestrator/prompter/templates/renderers/session.ts`

**Reference:** [entities/session.md](./entities/session.md)

```typescript
// src/orchestrator/prompter/templates/renderers/session.ts
// Session entity renderer

import type {
  SessionContext,
  SessionRenderOptions,
} from '../types.js';
import { SessionFormat, SessionInclude, SessionPresets } from '../types.js';
import { has, joinSections } from '../engine.js';

/**
 * Render a SessionContext with configurable format and includes.
 */
export function renderSession(
  session: SessionContext,
  options: SessionRenderOptions = {},
): string {
  const format = options.format ?? SessionFormat.Header;
  const includes = options.includes ?? SessionPresets.minimal;
  
  switch (format) {
    case SessionFormat.Inline:
      return renderInline(session, includes);
    case SessionFormat.Full:
      return renderFull(session, includes);
    case SessionFormat.Header:
    default:
      return renderHeader(session, includes);
  }
}

function renderInline(
  session: SessionContext,
  includes: SessionInclude[],
): string {
  const parts: string[] = [];
  
  if (has(includes, SessionInclude.Name)) {
    parts.push(`**Session:** ${session.name}`);
  }
  
  if (has(includes, SessionInclude.Round)) {
    parts.push(`**Round:** ${session.current_round}`);
  }
  
  return parts.join(' | ');
}

function renderHeader(
  session: SessionContext,
  includes: SessionInclude[],
): string {
  const lines = ['### SESSION', ''];
  
  if (has(includes, SessionInclude.Name)) {
    lines.push(`**Name:** ${session.name}`);
  }
  
  if (has(includes, SessionInclude.Round)) {
    lines.push(`**Round:** ${session.current_round}`);
  }
  
  if (has(includes, SessionInclude.Status)) {
    lines.push(`**Status:** ${session.status}`);
  }
  
  return lines.join('\n');
}

function renderFull(
  session: SessionContext,
  includes: SessionInclude[],
): string {
  const sections: string[] = [];
  
  // Header - filter to header-relevant includes
  const headerIncludes = includes.filter(i => 
    i === SessionInclude.Name || i === SessionInclude.Round || i === SessionInclude.Status
  );
  sections.push(renderHeader(session, headerIncludes));
  
  // Mission charter
  if (has(includes, SessionInclude.MissionCharter) && session.mission_charter) {
    sections.push('---\n\n### MISSION\n\n' + session.mission_charter);
  }
  
  // Objectives
  if (has(includes, SessionInclude.Objectives) && session.underlying_objectives) {
    sections.push('---\n\n### OBJECTIVES\n\n' + session.underlying_objectives);
  }
  
  // Missing details
  if (has(includes, SessionInclude.MissingDetails) && session.missing_details?.length) {
    const detailLines = ['---', '', '### OPEN QUESTIONS', ''];
    for (const detail of session.missing_details) {
      detailLines.push(`- ${detail}`);
    }
    sections.push(detailLines.join('\n'));
  }
  
  return joinSections(sections);
}

/**
 * Render just the mission charter.
 */
export function renderMissionCharter(session: SessionContext): string {
  if (!session.mission_charter) return '';
  return ['### MISSION', '', session.mission_charter].join('\n');
}

/**
 * Render just the objectives.
 */
export function renderObjectives(session: SessionContext): string {
  if (!session.underlying_objectives) return '';
  return ['### OBJECTIVES', '', session.underlying_objectives].join('\n');
}
```

---

## Step 4: Create Composite Renderers

### Step 4a: Product Tree Renderer

**File:** `src/orchestrator/prompter/templates/renderers/product-tree.ts`

```typescript
// src/orchestrator/prompter/templates/renderers/product-tree.ts
// Product tree composite renderer

import type {
  ProductContext,
  ProductRenderOptions,
  RenderContext,
  UUID,
} from '../types.js';
import { ProductFormat, ProductInclude, ProductPresets } from '../types.js';
import { renderProduct } from './product.js';

interface ProductTreeRenderOptions {
  includes?: ProductInclude[];
  highlightOwnedBy?: string;
}

/**
 * Render the product tree recursively.
 */
export function renderProductTree(
  rootId: UUID,
  options: ProductTreeRenderOptions = {},
  context: RenderContext,
): string {
  const root = context.productsById.get(rootId);
  if (!root) return '(No products)';
  
  const includes = options.includes ?? ProductPresets.standard;
  const lines: string[] = ['### PRODUCT TREE', ''];
  
  function renderNode(product: ProductContext, depth: number) {
    const productOptions: ProductRenderOptions = {
      format: ProductFormat.TreeNode,
      includes,
      highlightOwnedBy: options.highlightOwnedBy,
      indent: depth,
    };
    
    lines.push(renderProduct(product, productOptions, context));
    lines.push('');
    
    // Recurse children
    for (const childId of product.children_ids) {
      const child = context.productsById.get(childId);
      if (child) renderNode(child, depth + 1);
    }
  }
  
  renderNode(root, 0);
  
  return lines.join('\n').trim();
}
```

### Step 4b: Valid IDs Renderer

**File:** `src/orchestrator/prompter/templates/renderers/valid-ids.ts`

```typescript
// src/orchestrator/prompter/templates/renderers/valid-ids.ts
// Valid IDs composite renderer

import type { RenderContext } from '../types.js';

interface ValidIdsRenderOptions {
  includeProducts?: boolean;
  includeMembers?: boolean;
  operativesOnly?: boolean;
}

/**
 * Render the valid IDs reference section.
 */
export function renderValidIds(
  context: RenderContext,
  options: ValidIdsRenderOptions = {},
): string {
  const lines: string[] = ['### VALID IDS', ''];
  
  // Products
  if (options.includeProducts !== false) {
    lines.push('Products:');
    for (const product of context.productsById.values()) {
      lines.push(`  ${product.id} → "${product.name}" [${product.type}, ${product.status}]`);
    }
    lines.push('');
  }
  
  // Members
  if (options.includeMembers !== false) {
    const operativesOnly = options.operativesOnly !== false;
    const header = operativesOnly
      ? 'Team Members (Operatives only for assignments):'
      : 'Team Members:';
    lines.push(header);
    
    for (const member of context.memberMap.values()) {
      if (operativesOnly && member.role !== 'operative') continue;
      lines.push(`  ${member.id} → ${member.name} (${member.team_role ?? member.role})`);
    }
  }
  
  return lines.join('\n');
}
```

### Step 4c: Work History Renderer

**File:** `src/orchestrator/prompter/templates/renderers/work-history.ts`

```typescript
// src/orchestrator/prompter/templates/renderers/work-history.ts
// Work history composite renderer

import type { ProductContext, RenderContext } from '../types.js';
import { ActorKind } from '../../../../domain/enums.js';
import { getMemberName } from './base.js';
import { computeDelta } from './version.js';

interface WorkHistoryRenderOptions {
  includeDirective?: boolean;
  includeLatestContent?: boolean;
  includeDelta?: boolean;
  includePeerFeedback?: boolean;
  includeHistory?: boolean;
}

/**
 * Render complete work history for a product.
 */
export function renderWorkHistory(
  product: ProductContext,
  options: WorkHistoryRenderOptions = {},
  context: RenderContext,
): string {
  const ownerName = getMemberName(product.owner_id, context.memberMap);
  const lines: string[] = [];
  
  // Header
  lines.push(`### Product: ${product.name}`);
  lines.push('');
  lines.push(`**ID:** \`${product.id}\``);
  lines.push(`**Type:** ${product.type} | **Status:** ${product.status}`);
  lines.push(`**Owner:** ${ownerName}`);
  lines.push(`**DoD:** ${product.definition_of_done}`);
  if (product.description) lines.push(`**Description:** ${product.description}`);
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('**THIS ROUND:**');
  lines.push('');
  
  // Chair directive
  if (options.includeDirective !== false) {
    const directive = Array.from(context.collabsById.values()).find(
      c => c.author_kind === ActorKind.Chair && c.about_product_id === product.id
    );
    
    if (directive) {
      lines.push('You received this directive:');
      lines.push('');
      lines.push(`  "${directive.content}"`);
      lines.push('');
    }
  }
  
  // Latest version content
  if (options.includeLatestContent !== false && product.version_ids.length > 0) {
    const versions = product.version_ids
      .map(id => context.versionsById.get(id))
      .filter((v): v is NonNullable<typeof v> => !!v)
      .sort((a, b) => a.version_number - b.version_number);
    
    const latest = versions[versions.length - 1];
    const previous = versions.length > 1 ? versions[versions.length - 2] : null;
    
    if (latest) {
      lines.push('And made this version:');
      lines.push('');
      lines.push(`  **V${latest.version_number}** (${latest.change_summary})`);
      lines.push('');
      lines.push('  **Full content:**');
      lines.push('  ```');
      lines.push(latest.content);
      lines.push('  ```');
      lines.push('');
      
      if (options.includeDelta !== false && previous) {
        lines.push(`  **Changes from V${previous.version_number}:**`);
        lines.push('  ```diff');
        lines.push(computeDelta(previous.content, latest.content));
        lines.push('  ```');
        lines.push('');
      }
    }
  }
  
  // Peer feedback
  if (options.includePeerFeedback !== false) {
    const peerCollabs = Array.from(context.collabsById.values()).filter(
      c => c.about_product_id === product.id && c.author_kind !== ActorKind.Chair
    );
    
    if (peerCollabs.length > 0) {
      lines.push('Since then, you\'ve received the following feedback:');
      lines.push('');
      
      for (const collab of peerCollabs) {
        const authorName = getMemberName(collab.author_id, context.memberMap);
        const status = collab.resolved ? '[✓]' : '[OPEN]';
        lines.push(`  - **${authorName}** (${collab.author_kind}, ${collab.importance}/10) ${status}:`);
        lines.push(`    ${collab.content}`);
        lines.push('');
      }
    }
  }
  
  lines.push('---');
  
  // Version history
  if (options.includeHistory !== false && product.version_ids.length > 1) {
    const versions = product.version_ids
      .map(id => context.versionsById.get(id))
      .filter((v): v is NonNullable<typeof v> => !!v)
      .sort((a, b) => a.version_number - b.version_number);
    
    lines.push('');
    lines.push('**HISTORY:**');
    lines.push('');
    
    for (const version of versions) {
      const isYou = version.author_id === context.currentMemberId;
      const authorName = isYou ? 'you' : getMemberName(version.author_id, context.memberMap);
      lines.push(`  V${version.version_number} (${authorName}): ${version.change_summary}`);
    }
  }
  
  return lines.join('\n');
}
```

---

## Step 5: Create Renderer Registry

**File:** `src/orchestrator/prompter/templates/renderers/registry.ts`

```typescript
// src/orchestrator/prompter/templates/renderers/registry.ts
// Central registry for all renderers

import { renderProduct } from './product.js';
import { renderVersion, computeDelta } from './version.js';
import { renderCollab, renderCollabs } from './collab.js';
import { renderMember, renderTeamRoster, renderOperativesList } from './member.js';
import { renderSession, renderMissionCharter, renderObjectives } from './session.js';
import { renderProductTree } from './product-tree.js';
import { renderValidIds } from './valid-ids.js';
import { renderWorkHistory } from './work-history.js';

// Re-export enums and presets for easy access
export {
  // Format enums
  ProductFormat,
  VersionFormat,
  CollabFormat,
  MemberFormat,
  SessionFormat,
  // Include enums
  ProductInclude,
  VersionInclude,
  CollabInclude,
  MemberInclude,
  SessionInclude,
  // Presets
  ProductPresets,
  VersionPresets,
  CollabPresets,
  MemberPresets,
  SessionPresets,
} from '../types.js';

/**
 * Central registry providing access to all renderers.
 */
export const Renderers = {
  // Entity renderers
  product: renderProduct,
  version: renderVersion,
  collab: renderCollab,
  collabs: renderCollabs,
  member: renderMember,
  session: renderSession,
  
  // Composite renderers
  productTree: renderProductTree,
  validIds: renderValidIds,
  workHistory: renderWorkHistory,
  
  // Specialized renderers
  teamRoster: renderTeamRoster,
  operativesList: renderOperativesList,
  missionCharter: renderMissionCharter,
  objectives: renderObjectives,
  
  // Utilities
  computeDelta,
};

export type RenderersType = typeof Renderers;
```

---

## Validation Checklist

### Code Completeness

- [ ] All files created in `src/orchestrator/prompter/templates/`
- [ ] All imports resolve correctly
- [ ] TypeScript compiles without errors
- [ ] **No loose string literals** — all format and include values use enums

### Entity Coverage

| Entity | Formats (Enum) | Includes (Enum) | Presets |
|--------|----------------|-----------------|---------|
| Product | `ProductFormat.Inline`, `.Block`, `.TreeNode` | 13 `ProductInclude.*` values | minimal, standard, full |
| Version | `VersionFormat.Inline`, `.Block`, `.Changelog` | 7 `VersionInclude.*` values | minimal, standard, full |
| Collab | `CollabFormat.Inline`, `.Block`, `.Directive`, `.FeedbackItem` | 11 `CollabInclude.*` values | minimal, standard, full |
| Member | `MemberFormat.Inline`, `.ListItem`, `.Block`, `.IdReference` | 11 `MemberInclude.*` values | minimal, standard, full, assignment |
| Session | `SessionFormat.Inline`, `.Header`, `.Full` | 6 `SessionInclude.*` values | minimal, standard, full |

### Key Fixes Verified

- [ ] Member minimal includes `MemberInclude.Role`
- [ ] Member standard includes `MemberInclude.Responsibility`
- [ ] Member assignment includes `MemberInclude.OwnedProducts`
- [ ] Collab handles open vs resolved with `CollabInclude.Status`
- [ ] All renderers use single function with conditional includes (no separate minimal/standard/full functions)
- [ ] **All format and include values are enum members, never string literals**

---

## Testing Instructions

```typescript
import {
  Renderers,
  ProductFormat,
  ProductInclude,
  ProductPresets,
  MemberFormat,
  MemberPresets,
} from './templates/renderers/registry.js';
import { createRenderContext } from './templates/types.js';

// Create context from ContextTree
const context = createRenderContext(contextTree);

// Render product with minimal preset (inline)
Renderers.product(product, { format: ProductFormat.Inline }, context);

// Render product with standard preset (block)
Renderers.product(product, {
  format: ProductFormat.Block,
  includes: ProductPresets.standard,
}, context);

// Render product with custom includes (using enum values)
Renderers.product(product, {
  format: ProductFormat.Block,
  includes: [
    ProductInclude.Id,
    ProductInclude.Type,
    ProductInclude.Status,
    ProductInclude.Owner,
    ProductInclude.Dod,
    ProductInclude.Collabs,
  ],
}, context);

// Render member for Chair's team overview (with workload)
Renderers.member(member, {
  format: MemberFormat.ListItem,
  includes: MemberPresets.assignment,
}, context);
```
