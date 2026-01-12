# Output Format Rules

Common output format rules that apply to most steps.

## JSON-Only Output Rule

Used for: Plan & Assign, Peer Review

```markdown
### Output Format

**Your response must be pure JSON only.**

- Start directly with `{`
- End with `}`
- No explanation before the JSON
- No markdown code fences (no \`\`\`json)
- No rationale after the JSON

Put your reasoning INSIDE the `reasoning` field.
```

## Standard Output Rule

Used for: Bootstrap, Write, Reflect, Inspect, Presentation

These steps allow the default model output behavior (JSON in the response).

## Common Mistakes Block

```markdown
### ⚠️ Common Mistakes to Avoid

**ID Errors:**
- ✅ Use ONLY IDs from the `[VALID IDS]` section
- ❌ Never invent or guess IDs
```

## Implementation Notes

1. Steps that require strict JSON parsing should include the JSON-only block
2. The "Common Mistakes" section should be customized per step
3. Each step has its own schema - see step-specific files
