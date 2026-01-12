# Pattern: Persistent Adversary

## The Insight
Some work benefits from continuous adversarial pressure—not a one-time race, but a persistent role whose job is to attack, challenge, and find problems. The Red Team does this, but it's a pattern any team could use.

## How It Differs From Existing
- **Not Race (Diagnostic)** — Race is one-time; Adversary is persistent role
- **Not Peer Review** — Review is balanced; Adversary is OPPOSITION
- **Not Watchdog** — Watchdog verifies DoD; Adversary tries to BREAK things

## The Flow

```
EVERY ROUND:
                                    
CREATOR(S)                    ADVERSARY
    │                             │
    ▼                             ▼
Propose/Create ──────────────► Attack/Critique
    │                             │
    │◄────────────────────────────┘
    │                             
    ▼                             
Defend/Revise                     
    │                             
    └─────► Next Round (repeat)
```

## Key Mechanics
- Adversary is a **permanent role assignment**
- Adversary's job is to **find problems, not solutions**
- Adversary **doesn't need to be fair**—they're opposition
- Creator must **address or defend** against adversary's attacks
- Different from Watchdog: Adversary is creative attacker, Watchdog is criteria checker

## Adversary Modes

| Mode | Adversary Behavior | Best For |
|------|-------------------|----------|
| **Red Team** | Find security/failure vulnerabilities | Security, risk, resilience |
| **Devil's Advocate** | Argue the opposite position | Decisions, strategy |
| **Skeptic** | Question assumptions, demand evidence | Research, claims |
| **Customer Proxy** | Represent unhappy customer | Product, UX |
| **Competitor** | Attack as competitor would | Strategy, positioning |
| **Regulator** | Find compliance issues | Legal, regulated industries |

## High-Value Use Cases

| Team | Adversary Role | What They Attack |
|------|---------------|------------------|
| The Red Team | Security attacker | Vulnerabilities, failure modes |
| The Firm | Opposing counsel | Contract weaknesses, loopholes |
| The Incubator | VC Skeptic | Business model, assumptions |
| Consulting Strategy | Competitor strategist | Strategy weaknesses |
| Product Management | Angry customer | Feature gaps, UX issues |
| The Think Tank | Principled opposition | Argument weaknesses |

## Implementation

**Bootstrap:**
```
Assign adversary role:
Persona for operative-3: "You are THE ADVERSARY. Your job is to find 
problems, attack proposals, and surface weaknesses. You are not trying
to be fair or balanced—you are opposition. If you can't find problems,
look harder. Your success = their improvement."
```

**Plan & Assign:**
```
Every round with creator work:
1. Creators produce/revise
2. Adversary attacks (via collabs or adversary product)
3. Creators must respond to attacks in next version

Chair can modulate adversary intensity:
- "Adversary: go harder, they're not stress-tested enough"
- "Adversary: ease off, focus on biggest issues only"
```
