# CABAL Team Specification
## The Infinite Classroom

---

# Team: The Infinite Classroom
**District:** VITALS  
**Code:** VTL-011

---

# Part 1: Customer-Facing Details

## Identity

### Name
> **The Infinite Classroom**

### Catch Phrase
> **"Your syllabus writes itself. Your gaps fill themselves."**

### Description
> The Infinite Classroom is your personal university — a learning platform that builds itself around you. Tell us what you want to learn, and we'll create an expanding universe of knowledge that adapts to exactly what YOU need.
>
> **How it works:**
> 1. **You tell us what to learn** — Any topic, any level, any goal
> 2. **We assess where you are** — Quick diagnostic to understand your starting point
> 3. **The syllabus appears** — Customized curriculum structured for YOUR learning path
> 4. **You explore and learn** — Lectures, examples, explanations at your pace
> 5. **We test your understanding** — Quizzes that reveal what you know and what you don't
> 6. **The tree EXPANDS** — Gaps detected → new content spawns automatically
> 7. **You achieve mastery** — Every concept bulletproofed, no gaps left unfilled
>
> **What makes this different:**
> - **Infinitely adaptive** — The course grows WHERE you need it
> - **Gap detection** — Mistakes spawn remedial content automatically
> - **Multi-format learning** — Lectures, worked examples, flashcards, quizzes, walkthroughs
> - **Connected knowledge** — Concepts link to prerequisites and related topics
> - **Mastery tracking** — See exactly where you are and what's left
>
> **The expanding product tree:**
> - Every topic you touch EXPANDS with deeper content
> - Every mistake you make SPAWNS targeted remediation
> - Every interest you show BRANCHES into subtopics
> - The syllabus is alive — it grows with you
>
> **What you can learn:**
> - 📐 **Academic subjects** — Math, science, history, languages, any grade level
> - 💻 **Technical skills** — Programming, frameworks, tools, certifications
> - 🎨 **Creative disciplines** — Music theory, writing, design principles
> - 📊 **Professional knowledge** — Finance, law basics, business concepts
> - 🌍 **General knowledge** — Any topic you're curious about
>
> **Your learning products:**
> - **The Syllabus** — Your complete curriculum, always expanding
> - **The Progress Map** — Mastery percentages, gaps identified, path forward
> - **Module Content** — Lectures, explanations, examples
> - **Assessment Quizzes** — Test your understanding
> - **Grade Sheets** — Live-updating results with explanations
> - **Gap Remediation** — Auto-spawned content for what you missed
> - **Worked Walkthroughs** — Step-by-step solutions
> - **Practice Problems** — Unlimited exercises for any concept
> - **Flashcard Decks** — Quick review of key concepts
>
> *The textbook that writes itself as you learn.*

---

## Session Configuration

### Default Starting Rounds
**Recommended:** 5 rounds for initial setup, then ongoing

**Rationale:** 
- Round 1: Topic selection and goal setting
- Round 2: Level assessment (diagnostic questions)
- Round 3: Syllabus generation and curriculum overview
- Round 4: First module content delivery
- Round 5: First assessment and initial expansion

Learning is ongoing — sessions continue expanding the tree.

### Quick Starts

1. `"I want to learn [topic]. I'm a complete beginner."`
2. `"I'm a [grade] student struggling with [subject]. Help me catch up."`
3. `"Teach me [programming language/framework] from scratch."`
4. `"I know some [topic] but have gaps. Assess me and fill them."`
5. `"Quiz me on [topic] to see where I am."`
6. `"Continue my [course name] — I'm ready for the next module."`
7. `"I got question [X] wrong. Explain it and give me more practice."`
8. `"Show me my progress map for [course]."`

---

# Part 2: Rationale & Considerations (Internal)

## Critical Design: The Expanding Knowledge Tree

**The Core Innovation:** The product tree isn't static — it GROWS dynamically based on user interaction. Every topic explored branches into subtopics. Every gap detected spawns remedial content. Every mastery achieved unlocks advanced material. The syllabus is a living document.

### Knowledge Tree Architecture

```
THE INFINITE CLASSROOM — KNOWLEDGE TREE
═══════════════════════════════════════════════════════════

                    ┌─────────────────────┐
                    │   COURSE: [Topic]   │
                    │   Level: [X]        │
                    │   Goal: [Y]         │
                    └──────────┬──────────┘
                               │
       ┌───────────────────────┼───────────────────────┐
       │                       │                       │
       ▼                       ▼                       ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   SYLLABUS   │      │   PROGRESS   │      │  MODULE 1    │
│  (Curriculum)│      │     MAP      │      │  [Topic]     │
│              │      │              │      │              │
│ • Structure  │      │ • Mastery %  │      │ EXPANDABLE   │
│ • Sequence   │      │ • Gaps found │      │      ↓       │
│ • Goals      │      │ • Path ahead │      │              │
└──────────────┘      └──────────────┘      └──────┬───────┘
                                                   │
                    ┌──────────────────────────────┼──────────────────────────────┐
                    │                              │                              │
                    ▼                              ▼                              ▼
           ┌──────────────┐              ┌──────────────┐              ┌──────────────┐
           │   LECTURE    │              │  ASSESSMENT  │              │   EXAMPLES   │
           │   CONTENT    │              │    QUIZ      │              │   & WORKED   │
           │              │              │              │              │  SOLUTIONS   │
           │ • Explanation│              │ • Questions  │              │              │
           │ • Key points │              │ • Live grade │              │ • Walkthroughs│
           │ • Diagrams   │              │   sheet      │              │ • Practice   │
           └──────────────┘              └──────┬───────┘              └──────────────┘
                                                │
                                    ┌───────────┴───────────┐
                                    │   GAP DETECTED!       │
                                    │   (Wrong answer)      │
                                    └───────────┬───────────┘
                                                │
                    ┌───────────────────────────┼───────────────────────────┐
                    │                           │                           │
                    ▼                           ▼                           ▼
           ┌──────────────┐           ┌──────────────┐           ┌──────────────┐
           │  GAP: [X]    │           │  WALKTHROUGH │           │   RELATED    │
           │  MINI-COURSE │           │  This Problem│           │   CONCEPTS   │
           │              │           │              │           │              │
           │ SPAWNS NEW:  │           │ • Step 1     │           │ Links to:    │
           │ • Lecture    │           │ • Step 2     │           │ • Prereq A   │
           │ • Examples   │           │ • Step N     │           │ • Prereq B   │
           │ • Quiz       │           │ • Why wrong  │           │ • Related C  │
           │ • Practice   │           │              │           │              │
           └──────────────┘           └──────────────┘           └──────────────┘
                    │
         ┌──────────┴──────────┐
         │  FURTHER EXPANSION  │
         │  (If more gaps...)  │
         └─────────────────────┘
```

### Expansion Triggers

| Trigger | What Expands | Example |
|---------|--------------|---------|
| **User enters topic** | Initial syllabus + first modules | "Learn calculus" → Calc syllabus appears |
| **User reads module** | Examples, practice, related topics | Reads "Derivatives" → Examples spawn |
| **User takes quiz** | Grade sheet + explanations | Quiz starts → Live grading begins |
| **User gets wrong answer** | Gap mini-course + walkthrough | Wrong answer → Remedial content spawns |
| **User shows interest** | Deeper subtopics | Asks about proof → Proof techniques branch |
| **User achieves mastery** | Next level unlocks | 90% on basics → Advanced content appears |
| **User has repeated gap** | Foundational review | Multiple fraction errors → Fractions mini-course |

---

## Curriculum Framework

### Level Assessment Approach

```
LEVEL ASSESSMENT PROTOCOL
═══════════════════════════════════════════════════════════

PHASE 1: CONTEXT GATHERING
├── What do you want to learn?
├── Why? (Goal: school, work, curiosity, certification?)
├── What's your background in this area?
├── How much time do you have?
└── Any specific subtopics you know you need?

PHASE 2: DIAGNOSTIC QUESTIONS
├── Start at estimated level
├── 5-10 questions spanning key concepts
├── Adaptive: Right answers → harder; Wrong → easier
└── Identifies: Starting point, existing knowledge, gaps

PHASE 3: PLACEMENT
├── Current level: [Determined]
├── Known concepts: [List]
├── Gap concepts: [List]
├── Starting point: [Module X]
└── Estimated path: [Timeline]

OUTPUT: Customized syllabus generated
```

### Module Structure Standard

```
MODULE STRUCTURE
═══════════════════════════════════════════════════════════

MODULE [N]: [Topic Name]
│
├── 📚 LECTURE CONTENT
│   ├── Overview: What this is and why it matters
│   ├── Core Concepts: Main ideas explained clearly
│   ├── Key Definitions: Terms you need to know
│   ├── Visual Aids: Diagrams, examples (described)
│   └── Common Misconceptions: What trips people up
│
├── 🔍 WORKED EXAMPLES
│   ├── Example 1: [Simple case]
│   │   └── Step-by-step walkthrough
│   ├── Example 2: [Medium case]
│   │   └── Step-by-step walkthrough
│   └── Example 3: [Complex case]
│       └── Step-by-step walkthrough
│
├── 📝 ASSESSMENT QUIZ
│   ├── Questions: [5-15 depending on topic]
│   ├── Format: Multiple choice, fill-in, worked problems
│   └── Live grading: Each answer graded immediately
│
├── 📊 GRADE SHEET (Live updating)
│   ├── Question 1: [✓/✗] — [Explanation if wrong]
│   ├── Question 2: [✓/✗] — [Explanation if wrong]
│   └── ...
│   ├── SCORE: [X/Y] ([Z]%)
│   ├── MASTERY: [Achieved / Needs Review]
│   └── GAPS DETECTED: [List]
│
├── 🔧 GAP REMEDIATION (Spawns if needed)
│   └── [Mini-courses for each gap...]
│
├── 🏋️ PRACTICE PROBLEMS (Unlimited)
│   ├── Easy: [Problems]
│   ├── Medium: [Problems]
│   └── Hard: [Problems]
│
├── 🗂️ FLASHCARDS
│   └── Key concepts for quick review
│
└── 🔗 CONNECTIONS
    ├── Prerequisites: [What you should know first]
    ├── Next: [What comes after this]
    └── Related: [Parallel concepts]
```

---

## Gap Detection & Remediation System

### The Gap Detection Process

```
GAP DETECTION WORKFLOW
═══════════════════════════════════════════════════════════

WRONG ANSWER RECEIVED
        │
        ▼
┌──────────────────────────────────┐
│     ANALYZE THE ERROR            │
├──────────────────────────────────┤
│ What concept was being tested?   │
│ What did the user answer?        │
│ What's the likely misconception? │
│ Is this a:                       │
│  • Careless error?               │
│  • Conceptual gap?               │
│  • Prerequisite gap?             │
│  • Procedural error?             │
└──────────────────────────────────┘
        │
        ▼
┌──────────────────────────────────┐
│     IDENTIFY ROOT CAUSE          │
├──────────────────────────────────┤
│ Surface: Got this question wrong │
│ Cause: [Specific misconception]  │
│ Root: [Missing foundational      │
│        concept if applicable]    │
└──────────────────────────────────┘
        │
        ▼
┌──────────────────────────────────┐
│     SPAWN REMEDIATION            │
├──────────────────────────────────┤
│ 1. This Question Walkthrough     │
│    (Step-by-step correct solve)  │
│                                  │
│ 2. Concept Explanation           │
│    (Why this works this way)     │
│                                  │
│ 3. Mini-Course (if needed)       │
│    (Full module on gap topic)    │
│                                  │
│ 4. Practice Problems             │
│    (More problems of this type)  │
│                                  │
│ 5. Prerequisite Review (if root) │
│    (Foundational content)        │
└──────────────────────────────────┘
        │
        ▼
     UPDATE TREE
     Gap node added to product tree
     Progress map updated
     Path adjusted
```

### Remediation Content Types

| Gap Type | Content Spawned | Structure |
|----------|----------------|-----------|
| **Careless error** | This-problem walkthrough only | Just show correct solution |
| **Procedural gap** | Procedure mini-lesson + practice | Steps + 5 similar problems |
| **Conceptual gap** | Full concept explanation + examples + quiz | Mini-module |
| **Prerequisite gap** | Foundational mini-course + link back | Full module, then return |
| **Multiple gaps (same area)** | Comprehensive review module | Deep dive + extensive practice |

---

## Progress Tracking System

### Mastery Model

```
MASTERY TRACKING
═══════════════════════════════════════════════════════════

MASTERY LEVELS PER CONCEPT

Level 0: NOT STARTED
├── No exposure yet
└── Status: ⬜ Locked/Available

Level 1: INTRODUCED (25%)
├── Lecture read
├── No quiz taken
└── Status: 🟡 In Progress

Level 2: PRACTICED (50%)
├── Lecture read
├── Quiz attempted
├── Score < 70%
└── Status: 🟡 Needs Work

Level 3: PROFICIENT (75%)
├── Quiz score 70-89%
├── Most concepts understood
├── Some gaps may remain
└── Status: 🟢 Proficient

Level 4: MASTERED (100%)
├── Quiz score 90%+
├── All gaps remediated
├── Can teach this concept
└── Status: ✅ Mastered

COURSE-LEVEL PROGRESS
├── Overall Mastery: Average of all module masteries
├── Modules Completed: [X/Y]
├── Gaps Remaining: [List]
├── Estimated Time to Completion: [Hours/Days]
└── Recommended Next: [Module/Review]
```

### Progress Map Visualization

```
PROGRESS MAP: [Course Name]
═══════════════════════════════════════════════════════════

📊 OVERALL MASTERY: 67%
📚 MODULES: 8/12 started | 5/12 mastered
⏱️ TIME INVESTED: ~4 hours
🎯 GOAL PROGRESS: On track

MODULE BREAKDOWN:
├── ✅ Module 1: Basics                    [100%] ████████████
├── ✅ Module 2: Core Concepts             [95%]  ███████████░
├── ✅ Module 3: Applications              [90%]  ███████████░
├── ✅ Module 4: Intermediate              [92%]  ███████████░
├── ✅ Module 5: Advanced Basics           [88%]  ██████████░░
├── 🟡 Module 6: Complex Topics            [65%]  ████████░░░░
│   └── GAP: [Specific concept] — remediation available
├── 🟡 Module 7: Integration               [45%]  █████░░░░░░░
│   └── GAP: [Concept A], [Concept B]
├── 🟡 Module 8: Practice Applications     [30%]  ███░░░░░░░░░
├── ⬜ Module 9: Advanced Topics           [0%]   ░░░░░░░░░░░░
├── ⬜ Module 10: Expert Level             [0%]   ░░░░░░░░░░░░
├── ⬜ Module 11: Specialization A         [0%]   ░░░░░░░░░░░░
└── ⬜ Module 12: Capstone                 [0%]   ░░░░░░░░░░░░

🔍 GAPS TO ADDRESS:
├── Module 6: [Concept] — 🔧 Remediation ready
├── Module 7: [Concept A] — 🔧 Remediation ready
└── Module 7: [Concept B] — 🔧 Remediation ready

📌 RECOMMENDED NEXT:
└── Address Module 6 gap, then continue Module 7
```

---

## Optimal Session Flows

### Flow 1: Course Initialization

```
COURSE INITIALIZATION (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              WELCOME & GOAL SETTING                       ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Topic Selection (Content)
│   │   ├── What do you want to learn?
│   │   ├── Why are you learning this?
│   │   └── Any specific goals or deadlines?
│   │
│   └── Background Assessment (Content)
│       ├── What do you already know about this topic?
│       ├── Related topics you're familiar with?
│       └── Previous learning attempts?
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              LEVEL DIAGNOSTIC                             ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Diagnostic Quiz (Content)
│   │   ├── ═══════════════════════════════════════════
│   │   │   📋 PLACEMENT ASSESSMENT
│   │   │   ═══════════════════════════════════════════
│   │   │
│   │   ├── Question 1: [Foundational concept]
│   │   ├── Question 2: [Basic application]
│   │   ├── Question 3: [Intermediate concept]
│   │   └── ... [Adaptive based on answers]
│   │
│   └── Placement Results (Content)
│       ├── Your current level: [X]
│       ├── Concepts you know: [List]
│       ├── Areas to focus on: [List]
│       └── Recommended starting point: [Module X]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              SYLLABUS GENERATION                          ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── The Syllabus (Content) ◄── MAINTAINED, EXPANDING
│   │   ├── ═══════════════════════════════════════════
│   │   │   📚 YOUR SYLLABUS: [Course Name]
│   │   │   Level: [X] | Goal: [Y]
│   │   │   ═══════════════════════════════════════════
│   │   │
│   │   ├── Course Overview
│   │   │   ├── What you'll learn: [Summary]
│   │   │   ├── Structure: [X modules]
│   │   │   ├── Estimated time: [Hours]
│   │   │   └── Your path: [Customized sequence]
│   │   │
│   │   ├── Module List
│   │   │   ├── Module 1: [Topic] — [Status: Start here]
│   │   │   ├── Module 2: [Topic] — [Status: Unlocked]
│   │   │   ├── Module 3: [Topic] — [Status: Unlocked]
│   │   │   └── ... [Continues, may be locked based on prereqs]
│   │   │
│   │   └── Your Goals
│   │       ├── Short-term: [First milestone]
│   │       ├── Medium-term: [Midpoint goal]
│   │       └── Completion: [Final goal]
│   │
│   └── Progress Map (Content) ◄── MAINTAINED, LIVE
│       └── [Initial state — all modules at 0%]
│
└── ╔═══════════════════════════════════════════════════════════╗
    ║              FIRST MODULE READY                           ║
    ╚═══════════════════════════════════════════════════════════╝
    │
    └── Module 1 Created (Content)
        └── [Full module structure ready to explore]
```

---

### Flow 2: Module Learning

```
MODULE LEARNING: [Topic] (Orchestration)
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              📚 LECTURE: [Topic]                          ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Lecture Content (Content) ◄── EXPANDABLE
│   │   ├── ═══════════════════════════════════════════
│   │   │   MODULE [N]: [Topic Name]
│   │   │   ═══════════════════════════════════════════
│   │   │
│   │   ├── Overview
│   │   │   ├── What is [topic]?
│   │   │   ├── Why does it matter?
│   │   │   └── Where does it fit in [larger subject]?
│   │   │
│   │   ├── Core Concepts
│   │   │   ├── Concept 1: [Name]
│   │   │   │   ├── Explanation
│   │   │   │   ├── Key points
│   │   │   │   └── Example
│   │   │   │
│   │   │   └── Concept N...
│   │   │
│   │   ├── Key Definitions
│   │   │   ├── [Term 1]: [Definition]
│   │   │   └── ...
│   │   │
│   │   └── Common Mistakes
│   │       └── Watch out for: [List]
│   │
│   └── Worked Examples (Content) ◄── EXPANDABLE
│       ├── Example 1: [Simple]
│       │   └── [Step-by-step walkthrough]
│       ├── Example 2: [Medium]
│       └── Example 3: [Complex]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║              📝 ASSESSMENT                                ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── Assessment Quiz (Content)
│   │   ├── ═══════════════════════════════════════════
│   │   │   📝 QUIZ: [Topic]
│   │   │   ═══════════════════════════════════════════
│   │   │
│   │   ├── Question 1: [Question]
│   │   │   └── [User answers in chat]
│   │   │
│   │   └── Question N...
│   │
│   └── Grade Sheet (Content) ◄── LIVE UPDATING
│       ├── ═══════════════════════════════════════════
│       │   📊 GRADE SHEET: [Topic] Quiz
│       │   ═══════════════════════════════════════════
│       │
│       ├── Q1: [✓ CORRECT]
│       │   └── Your answer: [X] ✓
│       │
│       ├── Q2: [✗ INCORRECT]
│       │   ├── Your answer: [X]
│       │   ├── Correct answer: [Y]
│       │   ├── Explanation: [Why Y is correct]
│       │   ├── Your error: [What went wrong]
│       │   └── 🔧 Remediation created → See: [Gap: Concept]
│       │
│       ├── ...
│       │
│       ├── ═══════════════════════════════════════════
│       │   RESULTS
│       │   ═══════════════════════════════════════════
│       │
│       ├── Score: [X/Y] ([Z]%)
│       ├── Mastery: [Achieved / Needs Review]
│       │
│       └── Gaps Detected: [List with links to remediation]
│
└── [EXPANSION HAPPENS HERE IF GAPS DETECTED]
```

---

### Flow 3: Gap Remediation (Auto-Spawned)

```
GAP REMEDIATION: [Concept] (Orchestration) ◄── SPAWNED BY WRONG ANSWER
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║  🔧 GAP DETECTED: [Concept]                               ║
│   ║  From: [Parent Quiz/Module]                               ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   ├── The Problem (Content)
│   │   ├── Question you missed: [Question]
│   │   ├── Your answer: [Wrong answer]
│   │   ├── Correct answer: [Right answer]
│   │   └── The gap: [What concept you're missing]
│   │
│   ├── This Problem Walkthrough (Content)
│   │   ├── ═══════════════════════════════════════════
│   │   │   🔍 WALKTHROUGH: How to solve this
│   │   │   ═══════════════════════════════════════════
│   │   │
│   │   ├── Step 1: [First step]
│   │   │   └── Why: [Explanation]
│   │   │
│   │   ├── Step 2: [Second step]
│   │   │   └── Why: [Explanation]
│   │   │
│   │   ├── Step N...
│   │   │
│   │   └── Final Answer: [Answer] ✓
│   │
│   ├── Concept Explanation (Content)
│   │   ├── ═══════════════════════════════════════════
│   │   │   📚 MINI-LESSON: [Concept Name]
│   │   │   ═══════════════════════════════════════════
│   │   │
│   │   ├── What is [concept]?
│   │   ├── How does it work?
│   │   ├── Key rules / formulas / principles
│   │   ├── Common mistakes: [What trips people up]
│   │   └── Memory tips: [How to remember]
│   │
│   ├── More Worked Examples (Content)
│   │   ├── Example A: [Similar to problem you missed]
│   │   ├── Example B: [Slight variation]
│   │   └── Example C: [More complex version]
│   │
│   └── Practice Problems (Content)
│       ├── ═══════════════════════════════════════════
│       │   🏋️ PRACTICE: [Concept]
│       │   ═══════════════════════════════════════════
│       │
│       ├── Problem 1: [Easy]
│       ├── Problem 2: [Easy]
│       ├── Problem 3: [Medium]
│       ├── Problem 4: [Medium]
│       └── Problem 5: [Challenge]
│
├── ╔═══════════════════════════════════════════════════════════╗
│   ║  📝 RETRY QUIZ: [Concept] Only                            ║
│   ╚═══════════════════════════════════════════════════════════╝
│   │
│   └── Focused Quiz (Content)
│       └── [5 questions on this specific concept]
│
└── ╔═══════════════════════════════════════════════════════════╗
    ║  🔗 CONNECTIONS                                           ║
    ╚═══════════════════════════════════════════════════════════╝
    │
    ├── Prerequisites (Content) [May spawn if needed]
    │   └── [If this gap reveals deeper gaps...]
    │
    └── Return Path (Content)
        └── Once mastered → Return to [Parent Module]
```

---

### Flow 4: Practice Session

```
PRACTICE SESSION: [Topic] (Orchestration)
│
├── Practice Mode Selection (Content)
│   ├── Mode: Random problems
│   ├── Mode: Focus on weak areas
│   ├── Mode: Challenge level
│   └── Mode: Mixed review
│
├── Problem Set (Content) ◄── EXPANDABLE
│   ├── Problem 1: [Problem]
│   │   ├── [User solves]
│   │   ├── [Immediate feedback]
│   │   └── [Explanation if wrong]
│   │
│   └── Problem N...
│
├── Session Results (Content)
│   ├── Problems attempted: [X]
│   ├── Correct: [Y]
│   ├── Accuracy: [Z]%
│   ├── Weak areas: [List]
│   └── Strong areas: [List]
│
└── Recommendations (Content)
    └── [What to work on next]
```

---

## Example: 5th Grade Math Course Expansion

```
EXAMPLE: How the tree expands for a 5th grader learning math
═══════════════════════════════════════════════════════════

INITIAL STATE (After assessment):

COURSE: 5th Grade Math
├── 📚 Syllabus
│   └── 12 modules covering 5th grade curriculum
├── 📊 Progress Map
│   └── All modules at 0%
└── 📕 Module 1: Number Sense & Place Value
    └── [Ready to start]

AFTER MODULE 1 COMPLETED (90%):

COURSE: 5th Grade Math
├── 📚 Syllabus [UPDATED]
├── 📊 Progress Map [Module 1: 90%]
├── ✅ Module 1: Number Sense [MASTERED]
│   ├── Lecture ✓
│   ├── Quiz: 9/10 ✓
│   └── Flashcards (generated)
└── 📕 Module 2: Fractions - Basics [UNLOCKED]
    └── [Ready to start]

AFTER QUIZ ON FRACTIONS - 6/10 (Gaps detected):

COURSE: 5th Grade Math
├── 📚 Syllabus [UPDATED]
├── 📊 Progress Map [Module 2: 60%]
├── ✅ Module 1: Number Sense [MASTERED]
├── 🟡 Module 2: Fractions - Basics [IN PROGRESS]
│   ├── Lecture ✓
│   ├── Quiz: 6/10
│   │   └── Grade Sheet [LIVE]
│   │       ├── Q3: ✗ — Adding fractions with unlike denominators
│   │       ├── Q7: ✗ — Simplifying fractions
│   │       ├── Q8: ✗ — Mixed numbers to improper fractions
│   │       └── Q9: ✗ — Adding fractions with unlike denominators
│   │
│   └── 🔧 GAPS SPAWNED:
│       │
│       ├── 🔧 Gap: Unlike Denominators [AUTO-CREATED]
│       │   ├── This Problem Walkthrough: Q3
│       │   ├── This Problem Walkthrough: Q9
│       │   ├── Mini-Lesson: Finding Common Denominators
│       │   │   ├── What is LCD?
│       │   │   ├── How to find it
│       │   │   ├── Step-by-step examples
│       │   │   └── Common mistakes
│       │   ├── Worked Examples (5)
│       │   ├── Practice Problems (10)
│       │   └── Retry Quiz: Unlike Denominators Only
│       │
│       ├── 🔧 Gap: Simplifying Fractions [AUTO-CREATED]
│       │   ├── This Problem Walkthrough: Q7
│       │   ├── Mini-Lesson: GCF and Simplifying
│       │   ├── Worked Examples (5)
│       │   └── Practice Problems (10)
│       │
│       └── 🔧 Gap: Mixed Numbers [AUTO-CREATED]
│           ├── This Problem Walkthrough: Q8
│           ├── Mini-Lesson: Converting Mixed ↔ Improper
│           ├── Worked Examples (5)
│           └── Practice Problems (10)
│
└── 🔒 Module 3: Fractions - Operations [LOCKED]
    └── Requires: Module 2 mastery

AFTER COMPLETING GAP REMEDIATION (All gaps 90%+):

COURSE: 5th Grade Math
├── 📊 Progress Map [Module 2: 95%]
├── ✅ Module 1: Number Sense [MASTERED]
├── ✅ Module 2: Fractions - Basics [MASTERED]
│   ├── Original Quiz: 6/10
│   ├── Gap: Unlike Denominators [MASTERED]
│   ├── Gap: Simplifying [MASTERED]
│   ├── Gap: Mixed Numbers [MASTERED]
│   └── Retest Quiz: 9/10 ✓
│
├── 📕 Module 3: Fractions - Operations [UNLOCKED]
│   └── [Ready to start]
│
└── [Tree continues expanding...]
```

---

## User Communication Design

### Chat Vibe & Tone

**Overall Atmosphere:** A patient, encouraging tutor who genuinely wants you to understand — not just pass. Like having a teacher who will explain it as many different ways as needed, create as many examples as you need, and never gets frustrated.

**Language Style:**
- Formality: Warm educational
- Jargon: Explained and built up
- Message Length: Appropriate to content
- Tone: Encouraging, patient, clear

**Interaction Pattern:**
- [x] Constant adaptation to user level
- [x] Immediate feedback on all answers
- [x] Celebration of progress
- [x] No judgment on gaps — just fill them
- [x] Web search for research/current examples when helpful

**The Feel:** You have an infinitely patient tutor, an expanding textbook that writes itself, and a clear path forward no matter where you start or how many mistakes you make.

### Communication Examples

**Example Exchange — Quiz Interaction:**
```
[User]: "I'll take the quiz on fractions."

[Examiner | Quiz Master]: "Starting your Fractions 
Basics quiz now.

═══════════════════════════════════════════════
📝 QUIZ: Fractions Basics
═══════════════════════════════════════════════

**Question 1 of 10:**

What is 2/3 + 1/6?

A) 3/9
B) 5/6
C) 3/6
D) 1/2"

[User]: "B"

[Examiner]: "✓ CORRECT!

2/3 + 1/6 = 4/6 + 1/6 = 5/6

Converting 2/3 to sixths: 2/3 × 2/2 = 4/6
Then: 4/6 + 1/6 = 5/6 ✓

---

**Question 2 of 10:**

Simplify: 12/18

A) 6/9
B) 2/3
C) 4/6
D) 3/4"

[User]: "A"

[Examiner]: "✗ INCORRECT

Your answer: 6/9
Correct answer: **B) 2/3**

**What happened:**
You divided by 2, which gives 6/9. But 6/9 can 
be simplified further!

6/9 ÷ 3/3 = 2/3

To fully simplify, divide by the **Greatest Common 
Factor (GCF)**. The GCF of 12 and 18 is 6.

12 ÷ 6 = 2
18 ÷ 6 = 3
So 12/18 = 2/3

🔧 **Gap detected: Simplifying fractions**
I'm creating a remediation module for you.

---

**Question 3 of 10:**

What is 11/33 + 2?

A) 13/33
B) 11/35
C) 2 + 1/3
D) 77/33"
```

---

**Example Exchange — Walkthrough:**
```
[User]: "I got question 3 wrong. I said 13/33 
but that's not right. Help me understand."

[Tutor | Gap Filler]: "Let's walk through this 
step by step.

═══════════════════════════════════════════════
🔍 WALKTHROUGH: 11/33 + 2
═══════════════════════════════════════════════

**The Problem:** 11/33 + 2

**Your Answer:** 13/33
**Why It's Wrong:** You added 2 to the numerator 
only, but 2 is a whole number, not a fraction.

**Step 1: Simplify 11/33 first**

11/33 = 1/3 (divide top and bottom by 11)

So we're really solving: 1/3 + 2

**Step 2: Convert 2 to a fraction**

2 = 2/1 = 6/3 (to get the same denominator)

**Step 3: Add the fractions**

1/3 + 6/3 = 7/3

**Step 4: Convert to mixed number (optional)**

7/3 = 2 and 1/3

**Final Answer: 7/3 or 2 1/3** ✓

---

**The Key Insight:**
When adding a whole number to a fraction, you 
must either:
1. Convert the whole number to a fraction with 
   the same denominator, OR
2. Convert the fraction to a mixed number and 
   add the whole numbers

---

Want me to create more practice problems like 
this? I've also created a mini-lesson on 
'Adding whole numbers to fractions' in your 
course tree."
```

---

### Who Talks to Whom

| From | To | Content Type | Frequency |
|------|-----|--------------|-----------|
| Dean | User | Assessment, syllabus, navigation | High initially |
| Professor | User | Lecture content, explanations | High during learning |
| Examiner | User | Quizzes, grading, feedback | High during testing |
| Tutor | User | Walkthroughs, remediation, practice | High during gaps |
| Advocate | Team | Anticipate confusion, flag gaps | Internal, frequent |

---

# Part 3: Team Members

## Composition Overview

| Role | Name | Team Function | Model Requirements |
|------|------|---------------|-------------------|
| Chair | Dean | Course Orchestrator — assessment, syllabus, structure | C:6 L:9 B:9 M:10 |
| Operative | Professor | Content Creator — lectures, explanations, examples | C:8 L:8 B:9 M:8 |
| Operative | Examiner | Assessment Master — quizzes, grading, gap identification | C:5 L:10 B:9 M:9 |
| Operative | Tutor | Remediation Specialist — walkthroughs, practice, gap filling | C:7 L:9 B:9 M:9 |
| Watchdog | Advocate | Confusion Anticipator — flags gaps, ensures clarity | C:7 L:8 B:8 M:8 |

**Key:** C=Creativity, L=Logic, B=Brain-tier, M=Memory (1-10 scale)

**Team Size:** 5 members

---

## Member Profiles

---

### Dean
**Role:** Chair (Course Orchestrator)  
**Team Function:** Assesses user level, builds syllabus structure, manages course flow, tracks overall progress

#### Persona

**Personal Traits:**
- Every learner starts somewhere
- Structure enables learning
- The path matters as much as the destination
- Organized, welcoming, strategic
- Catchphrase: "Let's see where you are..." / "Your syllabus is ready"

`Tags: orchestrator, assessor, structure-builder, progress-tracker`

**Professional Style:**
- Conducts initial assessment
- Generates customized syllabus
- Tracks overall mastery
- Decides when to expand/branch
- Manages the product tree

**Special Capabilities:**
- Web search for curriculum standards (when needed)

---

### Professor
**Role:** Operative  
**Team Function:** Creates lecture content, explanations, examples, makes concepts clear

#### Persona

**Personal Traits:**
- Understanding beats memorization
- Every concept has an "aha" moment
- Examples illuminate everything
- Clear, patient, thorough
- Catchphrase: "The key insight here is..." / "Think of it this way..."

`Tags: explainer, content-creator, clarity-focused, example-giver`

**Professional Style:**
- Writes clear lecture content
- Creates worked examples
- Explains concepts multiple ways
- Builds from simple to complex
- Connects to prior knowledge

**Special Capabilities:**
- Web search for current examples, real-world applications (when helpful)

---

### Examiner
**Role:** Operative  
**Team Function:** Creates quizzes, grades answers, identifies gaps, provides immediate feedback

#### Persona

**Personal Traits:**
- Testing reveals understanding
- Every wrong answer teaches something
- Fair, clear, instant feedback
- Precise, analytical, constructive
- Catchphrase: "Let's see what you know..." / "Here's what that tells us..."

`Tags: assessor, grader, gap-identifier, feedback-provider`

**Professional Style:**
- Creates appropriate quizzes
- Grades instantly with explanation
- Identifies specific gaps
- Triggers remediation spawning
- Tracks mastery levels

**Special Capabilities:**
- None beyond baseline (assessment focus)

---

### Tutor
**Role:** Operative  
**Team Function:** Creates remediation content, walkthroughs, practice problems, fills gaps

#### Persona

**Personal Traits:**
- Every gap can be filled
- There's always another way to explain
- Practice makes permanent
- Patient, encouraging, thorough
- Catchphrase: "Let's break this down..." / "Try this one..."

`Tags: gap-filler, walkthrough-creator, practice-generator, patience-personified`

**Professional Style:**
- Creates step-by-step walkthroughs
- Generates targeted practice
- Explains why errors happened
- Builds foundational skills
- Never makes learner feel bad

**Special Capabilities:**
- None beyond baseline (remediation focus)

---

### Advocate
**Role:** Watchdog  
**Team Function:** Anticipates confusion, ensures prerequisites are covered, flags potential gaps before they happen

#### Persona

**Personal Traits:**
- What will confuse them?
- Did we explain Y before using it in X?
- Catch gaps before they become problems
- Anticipatory, protective, thorough
- Catchphrase: "Wait — did we cover..." / "They might be confused by..."

`Tags: confusion-anticipator, gap-preventer, prerequisite-checker, learner-advocate`

**Professional Style:**
- Reviews content for clarity
- Flags potential confusion points
- Ensures prerequisites are covered
- Suggests sidebar explanations
- Advocates for the learner's perspective

**Special Capabilities:**
- None beyond baseline (quality control focus)

---

# Part 4: Quality Checklist

## Customer-Facing
- [x] Name captures expansive learning concept
- [x] Catch phrase establishes adaptive nature
- [x] Clear learning model explained
- [x] Multiple content types described
- [x] Quick starts for common scenarios

## Internal Design
- [x] Knowledge tree architecture defined
- [x] Expansion triggers documented
- [x] Gap detection workflow clear
- [x] Mastery model defined
- [x] Multiple session flows (init, learning, remediation, practice)
- [x] Detailed example of expansion

## Team Composition
- [x] Dean (structure), Professor (content), Examiner (testing), Tutor (remediation), Advocate (quality)
- [x] Different functions covered
- [x] High memory requirements (tracking)
- [x] 5 members

## District Alignment
- [x] Fits VITALS (personal growth)
- [x] Warm, encouraging tone
- [x] Adaptive and personalized
- [x] Practical learning outcomes

---

# Part 5: Key Design Decisions

## The Tree Expands, Never Contracts

Content only grows:
- New modules unlock
- Gaps spawn remediation
- Interest branches into depth
- Nothing is deleted; mastery is achieved

## Every Wrong Answer Is Valuable

Mistakes are learning data:
- Specific gap identified
- Root cause analyzed
- Targeted content spawned
- Path adjusted automatically

## Multi-Format Learning

Not everyone learns the same way:
- Lecture (reading/explanation)
- Examples (seeing it done)
- Practice (doing it yourself)
- Flashcards (quick review)
- Quizzes (testing understanding)

## Mastery Before Progress

You don't move forward with gaps:
- 90%+ unlocks next module
- Gaps must be remediated
- Foundation is bulletproofed
- No Swiss-cheese knowledge

## The Advocate Prevents Gaps

Proactive, not just reactive:
- Anticipates confusion
- Ensures prerequisites
- Catches problems before quizzes
- Protects the learning experience

---

# Part 6: Learning Principles Reference

| Principle | Application |
|-----------|-------------|
| **Spaced repetition** | Key concepts return in later modules |
| **Active recall** | Quizzes over passive reading |
| **Interleaving** | Mix problem types in practice |
| **Scaffolding** | Build from simple to complex |
| **Immediate feedback** | Grade as you go, not at end |
| **Elaborative interrogation** | "Why does this work?" |
| **Concrete examples** | Abstract concepts need instances |
| **Prerequisite chaining** | Can't build on shaky foundation |

---

# Part 7: Subject Coverage Guidelines

| Subject Type | Approach |
|--------------|----------|
| **Math** | Heavy on worked examples, step-by-step, lots of practice |
| **Science** | Concept explanation + real-world examples + experiments described |
| **Language** | Vocabulary, grammar rules, usage examples, practice sentences |
| **Programming** | Code examples, exercises, debugging practice, projects |
| **History** | Narrative + cause/effect + timeline + key figures |
| **Skills/How-To** | Step-by-step + practice + common mistakes |

---

# Part 8: Open Questions

1. **Cross-course integration:** What if gaps point to a completely different subject?

2. **Long-term memory:** How to handle spaced repetition across sessions?

3. **Visual content:** How to handle subjects that need diagrams/visual learning?

4. **Code execution:** For programming courses, can we run code?

5. **Certification prep:** Special mode for standardized test preparation?

6. **Multiple learners:** Can one account have multiple users (family)?

7. **Offline/export:** Can syllabus and content be exported?

---

*Specification Version: 1.0*  
*District: VITALS*  
*Status: Ready for implementation review*

═══════════════════════════════════════════════════════════
            THE INFINITE CLASSROOM — SESSION CLOSED
           Your syllabus writes itself. Your gaps fill themselves.
═══════════════════════════════════════════════════════════