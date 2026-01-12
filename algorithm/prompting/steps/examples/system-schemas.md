[5 tools called]

Here's the **complete schema outline for each step** with all response type options:

---

## Response Type System (Discriminated Union)

Every step response uses `responseType` as a discriminator with 3 possible values:

```typescript
enum ResponseType {
  RequestContext = 'request_context',  // Agent needs more info
  Halt = 'halt',                       // Pause for user interaction
  FinalOutput = 'final_output',        // Step completed with output
}
```

---

## Shared Response Types

### `RequestContextResponse` (available on ALL steps)
```typescript
{
  responseType: 'request_context';
  contextRequests: Array<{
    productId: string;           // Temp ID (p1, p2, etc.)
    need: ContextNeed;           // 'full_content' | 'version_history' | 'all_feedback' | 'peer_content'
    reason: string;              // Max 500 chars
  }>;  // min: 1, max: 5
}
```

### `HaltResponse` (only on Bootstrap & PlanAssign)
```typescript
{
  responseType: 'halt';
  halt: {
    type: HaltType;              // 'question' | 'done'
    to: string[];                // Recipients: ["user-1"] or ["u:all"]
    message: string;             // Max 2000 chars
    options?: string[];          // Optional choices for questions
  };
}
```

---

## Shared Output Components

### `CollabOutput`
```typescript
{
  refersToProduct: string;       // Product temp ID
  type: 'feedback' | 'question' | 'suggestion' | 'endorsement' | 'concern';
  importance: number;            // 1-10
  comment: string;               // Max 5000 chars
  shortestSummary: string;       // Max 120 chars
  refersToVersion?: string;      // Version temp ID
  referencesProductIds?: string[];
  addresseeIds?: string[];
  respondingToCollabIds?: string[];
}
```

### `RemarkOutput`
```typescript
{
  recipients: string[];          // ['user'], ['chair'], ['team'], ['operative-1']
  type: 'question' | 'suggestion' | 'observation' | 'note' | 'missing_detail' | 'blocker' | 'comment';
  content: string;               // Max 2000 chars
  isBlocker?: boolean;
}
```

### `TreeOperation` (discriminated union by `action`)
```typescript
// ADD operation
{
  action: 'ADD';
  newId: string;                 // Format: new-N (new-1, new-2, etc.)
  parentId: string;              // Existing product temp ID
  product: {
    name: string;                // Max 200 chars
    type: 'Content' | 'Decision' | 'Collection' | 'Orchestration';
    dod: string;                 // Max 1000 chars
    description?: string;
    assignee?: string;
  };
  reason?: string;
}

// REMOVE operation
{
  action: 'REMOVE';
  productId: string;             // Existing product temp ID
  reason: string;
}

// MOVE operation
{
  action: 'MOVE';
  productId: string;             // Existing product temp ID
  parentId: string;              // New parent temp ID
  reason?: string;
}

// UPDATE operation
{
  action: 'UPDATE';
  productId: string;             // Existing product temp ID
  product: {
    name?: string;
    type?: 'Content' | 'Decision' | 'Collection' | 'Orchestration';
    dod?: string;
    description?: string;
    assignee?: string | null;
  };
  reason?: string;
}
```

### `AssignmentOutput`
```typescript
{
  productId: string;
  assignee: string;              // e.g., 'operative-1'
  directive: {
    objective: string;
    dod: string;
    why: string;
    context?: string;
  };
  attachedContext?: Array<{
    productId: string;
    include: ('content' | 'feedback')[];
    reason: string;
  }>;
}
```

### `AcceptanceDecision`
```typescript
{
  productId: string;
  accepted: boolean;
  versionId?: string;            // If accepted
  rejectionReason?: string;      // If rejected
}
```

### `ChairVersion`
```typescript
{
  productId: string;
  content: string;
  changeSummary: string;
}
```

---

## Step-Specific Schemas

---

### Step.Bootstrap

**Response Options:** `RequestContext` | `Halt` | `FinalOutput`

```typescript
// BootstrapFinalOutput
{
  responseType: 'final_output';
  thinking: {
    interpretation: string;
    scopeDecisions: string;
  };
  mission: string;               // Max 2000 chars
  objectives: string;
  constraints: string;
  personas: Record<string, string>;  // agentId → persona description
  operativeDomains: Record<string, {
    responsibility: string;
    area: string;
  }>;  // operativeId → domain
  initialProducts: Array<{
    name: string;
    type: 'Content' | 'Decision' | 'Collection' | 'Orchestration';
    dod: string;
    owner: string | null;
  }>;
  missingDetails?: string[];
}
```

---

### Step.Reflect

**Response Options:** `RequestContext` | `FinalOutput` *(no Halt)*

```typescript
// ReflectFinalOutput
{
  responseType: 'final_output';
  reflections: Array<{
    refersToProduct: string;       // Product temp ID
    dodStatus: 'met' | 'partially_met' | 'not_met';
    dodGaps?: string[];
    feedbackResponses: Array<{
      collabId: string;
      action: 'accept' | 'defer' | 'reject';
      rationale: string;
      plannedChange?: string;
    }>;
    nextVersionDelta: string;
    blockers?: string[];
  }>;
  collabs: CollabOutput[];       // Default: []
  remarks: RemarkOutput[];       // Default: []
}
```

---

### Step.PlanAssign

**Response Options:** `RequestContext` | `Halt` | `FinalOutput`

```typescript
// PlanAssignFinalOutput
{
  responseType: 'final_output';
  thinking: {
    roundStrategy: string;
    acceptanceRationale: string;
  };
  treeOperations: TreeOperation[];      // Default: []
  assignments: AssignmentOutput[];      // Default: []
  acceptance: AcceptanceDecision[];     // Default: []
  chairVersions?: ChairVersion[];
  remarks: RemarkOutput[];              // Default: []
  bootstrapOverrides?: {                // Optional mid-session overrides
    mission?: string;                   // Max 2000 chars
    objectives?: string;                // Max 1000 chars
    personas?: Record<string, string>;  // Max 500 chars each
    operativeDomains?: Record<string, {
      responsibility?: string;          // Max 500 chars
      area?: string;                    // Max 100 chars
    }>;
  };
}
```

---

### Step.Write

**Response Options:** `RequestContext` | `FinalOutput` *(no Halt)*

```typescript
// WriteFinalOutput
{
  responseType: 'final_output';
  versions: Array<{
    productId: string;
    newVersion: {
      contentTitle: string;        // Max 200 chars
      content: string;             // Min 50 chars, must be plain text (no JSON)
      changeSummary: string;
    };
  }>;  // Default: []
  collabs: CollabOutput[];         // Default: []
  remarks: RemarkOutput[];         // Default: []
}
```

---

### Step.PeerReview

**Response Options:** `RequestContext` | `FinalOutput` *(no Halt)*

```typescript
// PeerReviewFinalOutput
{
  responseType: 'final_output';
  reviews: Array<{
    productId: string;             // Product temp ID
    versionId: string;             // Version temp ID
    assessment: 'approved' | 'needs_revision';
    summary: string;
  }>;
  collabs: CollabOutput[];         // Default: []
  remarks: RemarkOutput[];         // Default: []
}
```

---

### Step.Inspection

**Response Options:** `RequestContext` | `FinalOutput` *(no Halt)*

```typescript
// InspectFinalOutput
{
  responseType: 'final_output';
  inspections: Array<{
    productId: string;             // Product temp ID
    versionId: string;             // Version temp ID
    assessment: 'approved' | 'needs_revision' | 'blocked';
    findings: Array<{
      category: 'security' | 'completeness' | 'coherence' | 'integration' | 'quality';
      severity: number;            // 1-10
      issue: string;
      recommendation: string;
      dodCriterion?: string;
    }>;
  }>;
  collabs: CollabOutput[];         // Default: []
  remarks: RemarkOutput[];         // Default: []
}
```

---

### Step.Presentation

**Response Options:** `RequestContext` | `FinalOutput` *(no Halt)*

```typescript
// PresentationFinalOutput
{
  responseType: 'final_output';
  messages: Array<{
    content: string;
    asAgent: string;               // Agent speaking
  }>;  // min: 1, max: 10
}
```

---

## Summary Matrix

| Step | RequestContext | Halt | FinalOutput |
|------|:--------------:|:----:|:-----------:|
| Bootstrap | ✅ | ✅ | ✅ |
| Reflect | ✅ | ❌ | ✅ |
| PlanAssign | ✅ | ✅ | ✅ |
| Write | ✅ | ❌ | ✅ |
| PeerReview | ✅ | ❌ | ✅ |
| Inspection | ✅ | ❌ | ✅ |
| Presentation | ✅ | ❌ | ✅ |

---

## Enums Reference

```typescript
enum ContextNeed {
  FullContent = 'full_content',
  VersionHistory = 'version_history',
  AllFeedback = 'all_feedback',
  PeerContent = 'peer_content',
}

enum HaltType {
  Question = 'question',
  Done = 'done',
}
```