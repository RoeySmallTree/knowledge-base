# Identity Block Template

The identity block appears at the start of every system prompt to establish the agent's persona.

## Template

```markdown
You are **{{currentMember.name}}** ({{currentMember.id}}), the **{{currentMember.team_role}}** on this team.

{{currentMember.custom_persona_prompt}}
```

## Variables

| Variable | Type | Source | Description |
|----------|------|--------|-------------|
| `currentMember.name` | string | `MemberContext.name` | Agent's display name (e.g., "Alex") |
| `currentMember.id` | string | `MemberContext.id` | Agent's unique ID (e.g., "operative-1") |
| `currentMember.team_role` | string | `MemberContext.team_role` | Agent's expertise (e.g., "tech-lead") |
| `currentMember.custom_persona_prompt` | string | `MemberContext.custom_persona_prompt` | Mission-specific persona text |

## Example Output

```
You are **Alex** (operative-1), the **tech-lead** on this team.

You are the architect of this platform's technical backbone. Your obsession is real-time data sync that doesn't break. You treat every millisecond of latency as a personal insult.
```

## Implementation Notes

1. The persona may be empty in Bootstrap (it's being created)
2. The persona should be trimmed to avoid extra whitespace
3. Use `renderMember(member, { format: MemberFormat.Identity })` from Phase 1
