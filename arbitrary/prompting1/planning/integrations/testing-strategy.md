# Testing Strategy for Phase 2

## Overview

Phase 2 step builders require comprehensive testing to ensure:
1. Generated prompts match expected structure
2. All required sections are present
3. Phase 1 renderers integrate correctly
4. Output is backward compatible

## Testing Layers

### Layer 1: Unit Tests (Per Step Builder)

Test each step builder in isolation:

```typescript
// tests/unit/step-builders/write.test.ts
import { buildWriteSystemPrompt, buildWriteUserPrompt } from '../../src/templates/step-builders/write/index.js';

describe('Write Step Builder', () => {
  describe('buildWriteSystemPrompt', () => {
    it('includes identity block with member info', () => {
      const ctx = createMockContext({
        currentMember: mockOperative('tech-lead', 'Alex'),
      });
      
      const result = buildWriteSystemPrompt(ctx);
      
      expect(result).toContain('You are **Alex**');
      expect(result).toContain('tech-lead');
    });
    
    it('includes all required sections', () => {
      const ctx = createMockContext();
      const result = buildWriteSystemPrompt(ctx);
      
      expect(result).toContain('### Your Responsibilities');
      expect(result).toContain('### Output Schema');
      expect(result).toContain('### Common Mistakes');
    });
    
    it('includes persona when available', () => {
      const ctx = createMockContext({
        currentMember: {
          ...mockOperative(),
          custom_persona_prompt: 'You are the architect...',
        },
      });
      
      const result = buildWriteSystemPrompt(ctx);
      
      expect(result).toContain('You are the architect');
    });
  });
  
  describe('buildWriteUserPrompt', () => {
    it('includes mission section', () => {
      const ctx = createMockContext({
        session: { mission_charter: 'Build a SaaS platform...' },
      });
      
      const result = buildWriteUserPrompt(ctx, ['product-1']);
      
      expect(result).toContain('[MISSION]');
      expect(result).toContain('Build a SaaS platform');
    });
    
    it('renders assigned products with work history', () => {
      const ctx = createMockContext({
        products: mockProductsWithVersions(),
      });
      
      const result = buildWriteUserPrompt(ctx, ['product-1']);
      
      expect(result).toContain('[PRODUCT:');
      expect(result).toContain('[HISTORY]');
      expect(result).toContain('[CURRENT CONTENT]');
    });
    
    it('includes valid IDs section', () => {
      const ctx = createMockContext({
        products: mockProducts(),
        members: mockMembers(),
      });
      
      const result = buildWriteUserPrompt(ctx, ['product-1']);
      
      expect(result).toContain('[VALID IDS]');
      expect(result).toContain('product-1');
    });
  });
});
```

### Layer 2: Integration Tests (Full Builder)

Test the complete builder flow:

```typescript
// tests/integration/step-builders/write.test.ts
import { buildWritePrompt } from '../../src/prompter/builders/write.js';

describe('Write Builder Integration', () => {
  it('returns valid StepPromptResult', async () => {
    const ctx = await loadTestContext('write-scenario');
    const productIds = ['test-product-1'];
    
    const result = await buildWritePrompt(ctx, productIds);
    
    expect(result).toHaveProperty('system');
    expect(result).toHaveProperty('user');
    expect(typeof result.system).toBe('string');
    expect(typeof result.user).toBe('string');
  });
  
  it('system prompt is well-formed markdown', async () => {
    const ctx = await loadTestContext('write-scenario');
    const { system } = await buildWritePrompt(ctx, ['test-product-1']);
    
    // Check markdown structure
    expect(system).toMatch(/^You are \*\*\w+\*\*/);  // Starts with identity
    expect(system).toContain('```json');  // Has schema block
  });
  
  it('user prompt contains all required sections', async () => {
    const ctx = await loadTestContext('write-scenario');
    const { user } = await buildWritePrompt(ctx, ['test-product-1']);
    
    const requiredSections = [
      '[MISSION]',
      '[OBJECTIVES]',
      '[TEAM]',
      '[ROUND]',
      '[PRODUCT:',
      '[VALID IDS]',
    ];
    
    for (const section of requiredSections) {
      expect(user).toContain(section);
    }
  });
});
```

### Layer 3: Snapshot Tests

Capture and compare prompt outputs:

```typescript
// tests/snapshots/write-prompts.test.ts
describe('Write Prompt Snapshots', () => {
  it('system prompt matches snapshot', async () => {
    const ctx = await loadStableTestContext('write-standard');
    const { system } = await buildWritePrompt(ctx, ['product-1']);
    
    expect(system).toMatchSnapshot('write-system-prompt');
  });
  
  it('user prompt matches snapshot', async () => {
    const ctx = await loadStableTestContext('write-standard');
    const { user } = await buildWritePrompt(ctx, ['product-1']);
    
    expect(user).toMatchSnapshot('write-user-prompt');
  });
});
```

### Layer 4: Backward Compatibility Tests

Compare new builders against legacy:

```typescript
// tests/compatibility/step-builders.test.ts
import * as legacyBuilders from '../../src/prompter/builders-legacy/index.js';
import * as newBuilders from '../../src/prompter/builders/index.js';

describe('Backward Compatibility', () => {
  const testCases = [
    { step: 'write', ctx: 'write-scenario', params: { productIds: ['p1'] } },
    { step: 'peer-review', ctx: 'review-scenario', params: { productIds: ['p1'] } },
    // ... more cases
  ];
  
  for (const { step, ctx: ctxName, params } of testCases) {
    it(`${step} builder produces compatible output`, async () => {
      const ctx = await loadTestContext(ctxName);
      
      const legacy = await legacyBuilders[`build${capitalize(step)}Prompt`](ctx, ...Object.values(params));
      const newResult = await newBuilders[`build${capitalize(step)}Prompt`](ctx, ...Object.values(params));
      
      // Structure should match
      expect(hasSameStructure(legacy.user, newResult.user)).toBe(true);
      
      // Schema section should be identical
      expect(extractSchema(legacy.system)).toEqual(extractSchema(newResult.system));
    });
  }
});
```

### Layer 5: LLM Behavior Tests (Optional)

Test that LLM produces valid output with new prompts:

```typescript
// tests/e2e/llm-behavior.test.ts
describe('LLM Behavior with New Prompts', () => {
  it('Write step produces valid JSON', async () => {
    const ctx = await loadTestContext('write-scenario');
    const { system, user } = await buildWritePrompt(ctx, ['product-1']);
    
    const response = await callLLM({ system, user });
    const parsed = JSON.parse(response);
    
    expect(parsed).toHaveProperty('reasoning');
    expect(parsed).toHaveProperty('content');
    expect(parsed).toHaveProperty('changeSummary');
  }, 60000);  // Long timeout for LLM
});
```

## Test Fixtures

### Mock Context Factory

```typescript
// tests/fixtures/context-factory.ts

export function createMockContext(overrides: Partial<ContextTree> = {}): ContextTree {
  return {
    session: mockSession(),
    members: mockMembers(),
    products: new Map(),
    collabs: [],
    currentMember: mockOperative(),
    ...overrides,
  };
}

export function mockSession(overrides = {}): SessionContext {
  return {
    id: 'session-1',
    name: 'Test Session',
    mission_charter: 'Build a test product',
    underlying_objectives: '1. Test objective',
    current_round: 1,
    status: 'in_progress',
    ...overrides,
  };
}

export function mockOperative(teamRole = 'tech-lead', name = 'Alex'): MemberContext {
  return {
    id: 'operative-1',
    name,
    role: 'operative',
    team_role: teamRole,
    custom_persona_prompt: null,
    operative_responsibility: 'Technical architecture',
    operative_area: 'Backend',
  };
}
```

## Running Tests

```bash
# Unit tests only
npm run test:unit -- --grep "step-builders"

# Integration tests
npm run test:integration -- --grep "Step Builder"

# Snapshot tests (update with -u)
npm run test:snapshots

# All tests
npm run test
```

## CI Pipeline

```yaml
# .github/workflows/test.yml
jobs:
  test-step-builders:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm ci
      - name: Run unit tests
        run: npm run test:unit
      - name: Run integration tests
        run: npm run test:integration
      - name: Check snapshots
        run: npm run test:snapshots -- --ci
```

## Coverage Goals

| Component | Target Coverage |
|-----------|----------------|
| System prompt builders | 90% |
| User prompt builders | 85% |
| Common utilities | 95% |
| Integration paths | 80% |
