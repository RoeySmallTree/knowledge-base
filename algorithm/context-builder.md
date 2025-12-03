# Context Builder and Prompt System

## Purpose
Defines the context builder/state envelope, entity schemas, and prompt structuring rules for all roles. Establishes master prompter bootstrap, step-specific outputs, and requirements for mission briefs and directives.

## State Envelope (Context Builder)
- Context builder produces a full state envelope from the context tree before any step executes. Nothing is emitted without a traceable link to prior rounds, chair directives, or reflections.
- The system must remain team- and domain-agnostic: works for academic research labs, startup crews, book authors, legal teams, or split debate squads.

### Entities (minimal)
- Member: name, role, team-role, id, owned products count, owned pending products count
- Session: status, current round
- Collab: id, author (id), to (id), about product (id), content
- Product (minimal): name, id, type, selected version, owner, description, DoD, summary, collab count, version ids
- Version: id, content, last directive, reflection note, change summary

### Product detail tiers
- Product - extra: minimal plus current version
- Product - full: extra plus changelog[] (version, change summary, reflection note, collabs)

### Mission and structure
- Mission charter, objectives, and constraints are required; absence blocks output.
- Product tree shown in minimal detail by default; decision nodes carry deltas and structural changes.

### Structural actions
- Action types: add, remove, change param, etc., against products (id, name, parent, current versions[], content, author, accepted?, version id, reflection note, last version reflection note, change summary, collabs).

### Global system structures and rules
- Personas: role plus team-role and chair-authored motivation context.
- Rules and structures: enforce product tree integrity, no duplicate products, no duplicate comments.
- Last note and step-specific payloads live in the envelope (reflect, plan/assign, write, peer review, inspect, envoy).
- Outputs carry a reasoning field and use Markdown for rich, styled content.
- Prefer enumerated product/member ids in output schemas when supported by clients.
- Maintain a session context artifact that records the current envelope for inspection/debugging.

## Master Prompter (Bootstrap)
- Takes advantage of the context tree. Bootstrap prompt includes raw initial user prompt, teammates (with personas), and current state envelope.
- Returns: mission statement/charter, customized persona prompts per operative, underlying mission objectives, and missing details. Persist these fields in storage for reuse.

## Prompt Structuring (Native, Chronological)
- Each step prompt is structured with clear system context and user task text. Example for Reflect:
```
[SYSTEM]:
You are ${name}, part of team ${teamName}. Your team members: ${members.map(memberMinimalIntro)}.
${chairDefinedPersona}
Skills: ${skills.map(skillSpread)}
Characteristics: ${characteristics.join(', ')}
CRITICAL: follow base system rules, reflect-step rules, output structure, common mistakes to avoid, and token rules.

[USER]:
${reflectBasePrompt}

Reminder:
Current project structure:
${projectTree.toText({ step: Steps.Reflect, memberId })}

Recent activity:
- Your recent collabs: ${latestCollabs.map(seeCollab)}
- Products you worked on last round: ${lastWrittenProducts.map(displayProduct)}
  - History: ${product.changelog.map(changelogFullSpread)}
  - Last directive: ${lastChairDirective}
  - Last version diff: ${versionDelta(product.lastVersion)}
  - Collabs received: ${product.collabs.map(showCollab)}

Last chair personal note: ${lastChairPersonalNote}
Mission charter: ${upToDateMissionCharterFromChair}
```
- Token discipline: always provide context slices in a native, chronological order (recent first where relevant) and avoid duplication.

## Step-Specific Output Expectations
- Reflect and Plan & Assign share common envelope fields and reasoning.
- Plan & Assign must emit assignments with:
  - product id
  - relevant products (minimal) and highly relevant products (extra details)
  - referenced product ids that should be surfaced (with latest versions) to the operative during the write step
  - directive payload: importance, motivation note, personalized operative note (specialties, what is left, on-track status, satisfaction signal, bigger-picture linkage, component importance)
- Write: produce versions with change summary, last directive reference, and reflection note.
- Peer Review: apply no-duplication rule; if agreeing, state agreement without restating content.
- Inspect: watchdog flags completeness, order, and DoD adherence; no duplicates.
- Envoy: may not originate new content; only reports existing deltas.

## Additional Notes
- Mission directives must be meaningful and deadline-aware; pair plan/assign steps with operative-facing directives.
- Prompts must encourage breaking work into explicit steps/parts and offer relevant considerations.
- Chair composes motivation and persona framing; avoid flat role statements.
- Team name and description should be present in context to keep collaborators aligned.
