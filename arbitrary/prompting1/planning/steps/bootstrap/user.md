# Bootstrap User Prompt (V4.10)

**Step:** Bootstrap  
**Role:** Chair  
**Version:** 4.10

---

## Variables Required

| Variable | Source | Description |
|----------|--------|-------------|
| `rawUserPrompt` | `BootstrapUserParams.rawUserPrompt` | User's mission request |
| `members` | `stepContext.members` | All team members |
| `member.id` | `MemberContext.id` | Member's unique ID |
| `member.name` | `MemberContext.name` | Member's name |
| `member.role` | `MemberContext.role` | System role (chair/operative/watchdog/envoy) |
| `member.team_role` | `MemberContext.team_role` | Expertise role (tech-lead, etc.) |
| `member.characteristics` | `MemberContext.characteristics` | Professional/personality traits |
| `member.life_story` | `MemberContext.life_story` | Background narrative |

---

## User Prompt Template

```markdown
## The User's Request

> {{rawUserPrompt}}

---

## Your Team

These are the team members you'll be working with. Use their backgrounds to craft mission-specific personas.

{{#each members}}
### {{this.name}} ({{this.id}})

**Role:** {{this.role}} / {{this.team_role}}

{{#if this.characteristics.professional}}
**Expertise:** {{this.characteristics.professional}}
{{/if}}

{{#if this.characteristics.personality_style}}
**Style:** {{this.characteristics.personality_style}}
{{/if}}

{{#if this.life_story}}
**Background:** {{this.life_story}}
{{/if}}

{{/each}}

---

## Output Requirements

Your response must include personas for each team member and domains for each operative.

**Personas needed** (for `customized_personas`):
{{#each members}}
- `"{{this.id}}"`: persona for {{this.name}}
{{/each}}

**Domains needed** (for `operative_domains` — operatives only):
{{#each operatives}}
- `"{{this.id}}"`: responsibility and area for {{this.name}}
{{/each}}
```

---

## Phase 1 Renderers Used

| Renderer | Usage |
|----------|-------|
| `renderMember` | Team member list (format: Block, includes: full with characteristics) |

---

## Composition Logic

```typescript
function buildBootstrapUserPrompt(params: BootstrapParams): string {
  const { ctx, rawUserPrompt } = params;
  const members = Array.from(ctx.members.values());
  const operatives = members.filter(m => m.role === 'operative');
  
  const sections: string[] = [];
  
  // 1. User Request (blockquote for user input)
  sections.push(`## The User's Request\n\n> ${rawUserPrompt}`);
  
  // 2. Team
  const teamSection = members.map(m => 
    renderMember(m, { 
      format: MemberFormat.Block, 
      includes: MemberPresets.full 
    })
  ).join('\n\n');
  sections.push(`---\n\n## Your Team\n\nThese are the team members you'll be working with. Use their backgrounds to craft mission-specific personas.\n\n${teamSection}`);
  
  // 3. Output Requirements
  const personasNeeded = members.map(m => 
    `- \`"${m.id}"\`: persona for ${m.name}`
  ).join('\n');
  
  const domainsNeeded = operatives.map(m => 
    `- \`"${m.id}"\`: responsibility and area for ${m.name}`
  ).join('\n');
  
  sections.push(`---\n\n## Output Requirements\n\nYour response must include personas for each team member and domains for each operative.\n\n**Personas needed** (for \`customized_personas\`):\n${personasNeeded}\n\n**Domains needed** (for \`operative_domains\` — operatives only):\n${domainsNeeded}`);
  
  return sections.join('\n\n');
}
```

---

## Example Output

```markdown
## The User's Request

> I want to build a SaaS for restaurants to manage online menus.

---

## Your Team

These are the team members you'll be working with. Use their backgrounds to craft mission-specific personas.

### Richard (chair-1)

**Role:** chair / project-lead
**Expertise:** strategic-thinker, user-focused
**Style:** collaborative, decisive

### Alex (operative-1)

**Role:** operative / tech-lead
**Expertise:** TypeScript, React, Node.js, PostgreSQL
**Style:** pragmatic, solution-oriented
**Background:** 10 years building scalable systems. Led engineering at two successful startups. Obsessed with API design and performance.

### Jordan (operative-2)

**Role:** operative / product-manager
**Expertise:** UX research, user flows, feature prioritization
**Style:** user-focused, empathetic, articulate
**Background:** Former restaurant owner turned product manager. Knows the pain of menu management firsthand.

### Casey (operative-3)

**Role:** operative / growth-marketer
**Expertise:** customer acquisition, positioning, funnel optimization
**Style:** data-driven, creative, persistent
**Background:** Grew three B2B SaaS products from 0 to 1000 customers. Expertise in SMB markets.

### Marcus (watchdog-1)

**Role:** watchdog / security-specialist
**Expertise:** security, quality assurance, API testing
**Style:** thorough, methodical, paranoid (in a good way)

### Taylor (envoy-1)

**Role:** envoy / communications-lead
**Expertise:** technical writing, stakeholder communication
**Style:** clear, empathetic, user-focused

---

## Output Requirements

Your response must include personas for each team member and domains for each operative.

**Personas needed** (for `customized_personas`):
- `"chair-1"`: persona for Richard
- `"operative-1"`: persona for Alex
- `"operative-2"`: persona for Jordan
- `"operative-3"`: persona for Casey
- `"watchdog-1"`: persona for Marcus
- `"envoy-1"`: persona for Taylor

**Domains needed** (for `operative_domains` — operatives only):
- `"operative-1"`: responsibility and area for Alex
- `"operative-2"`: responsibility and area for Jordan
- `"operative-3"`: responsibility and area for Casey
```
