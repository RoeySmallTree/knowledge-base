# Team Roster

Contains all team definitions organized by district. Each team has members and sample missions.

## Structure

```
roster/
└── [district]/
    └── [team-name]/
        ├── team.md           # Team description & metadata
        ├── members/
        │   └── [team-role]-[role].md
        └── missions/
            └── [mission-name].md
```

---

## Templates

### Team Description (`team.md`)

```markdown
# [Team Name]

## Rational
Why this team exists. The core problem it solves.

## Premise
The operational context and assumptions.

## Tags
- `[tag1]`
- `[tag2]`

## Must-Haves
- [ ] Required capability 1
- [ ] Required capability 2

## Composition
| Role | Team Role | Member File |
|------|-----------|-------------|
| Chair | [title] | `members/[filename].md` |
| Operative | [title] | `members/[filename].md` |
| Envoy | [title] | `members/[filename].md` |
| Watchdog | [title] | `members/[filename].md` |
```

---

### Member Document (`[team-role]-[role].md`)

**Filename format**: `[team-role-in-kebab-case]-[role].md`  
Example: `lead-analyst-chair.md`, `domain-expert-operative.md`

```markdown
# [Team Role Title]

## Example Names
- [Name 1]
- [Name 2]
- [Name 3]

## Role
[operative | chair | envoy | watchdog]

## Team Role
[Specific role title within this team, e.g., "Lead Analyst", "Ethics Advisor"]

## Professional Characteristics
- [Expertise 1]
- [Expertise 2]
- [Skill 1]

## Personality Characteristics
- [Trait 1]
- [Trait 2]
- [Communication style]

## Life Story
[2-3 paragraph background narrative for the persona. Include education, career trajectory, 
defining experiences, and motivations. This provides context for the LLM to embody the character.]

## Knowledge & Instructions
[Custom prompt section that defines this member's specific behavior, decision-making patterns,
and how they fulfill their role. The Chair's section is most critical as it determines team flow.]

### Core Behaviors
- [Behavior 1]
- [Behavior 2]

### Decision Framework
[How this member approaches decisions]

### Interaction Style
[How they engage with other team members]
```

> [!IMPORTANT]
> **Chair members** require the most detailed Knowledge & Instructions section, as their behavior 
> determines the entire team flow and discussion dynamics.

---

### Mission Document (`[mission-name].md`)

```markdown
# [Mission Name]

## Description
[What this mission accomplishes]

## Input
[Expected input format/context]

## Expected Output
[Detailed expected output structure and content]

## Success Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## Sample Run
[Optional: Example execution with actual content]
```

---

## Checklist: Adding a New Team

- [ ] Create team folder: `roster/[district]/[team-name]/`
- [ ] Create `team.md` with all required sections
- [ ] Create `members/` folder with all member documents
- [ ] Create `missions/` folder with at least one sample mission
- [ ] Update district roster in `../rationals/districts/[district].md`
- [ ] Add relevant tags to `../rationals/tags.md`
