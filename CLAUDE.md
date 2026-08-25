# CLAUDE.md

Behavioral guidelines for working in this repo. Merge with any task-specific
instructions the user gives in a session.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use
judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work")
require constant clarification.

---

## Project context

**andrers.dev** is the personal professional website of André Ruiz Sandoval, a technology professional working at the intersection of product, software, and data.

The site is a single-page professional portfolio designed to complement LinkedIn and the resume, not reproduce them. Its purpose is to communicate André’s professional positioning, career progression, way of working, technical capabilities, and selected experience in a concise and credible way.

The central narrative is the progression from software engineering into broader product, data, architecture, and technical leadership responsibilities, with a long-term direction toward Technical Product Management and technology leadership.

The primary audience is recruiters, hiring managers, technology leaders, and potential professional collaborators in Mexico, the United States, and international markets.

The site should feel personal, technically credible, product-oriented, and professional without sounding corporate, exaggerated, or overly promotional.

The page contains nine sections:

`Hero` · `Scale` · `About` · `Principles` · `Experience` · `Education` · `Certifications` · `Skills` · `Contact`

Across the site, the three recurring ideas are **Data, Product, and Impact**: using reliable data as a foundation for action, building the right products around real needs, and judging success by the change those products create.

## Commit & push rules (this repo only)

- **Always ask before committing or pushing** — even right after finishing a
  requested change. Never commit/push without the user's explicit go-ahead in that
  moment.
- Commits must read as authored by the repo owner, not by Claude. **Do not add**
  any AI/tool attribution — no `Co-Authored-By: Claude` line, no mention of Claude
  Code, sessions, or AI assistance anywhere in the commit message.
- Write commit messages in **English**, following Conventional Commits and
  standard industry practice: `type: imperative subject` (`feat`, `fix`, `chore`,
  `refactor`, `docs`, `style`, …), subject line ≤72 characters, optional body
  explaining _why_ when the change isn't self-evident from the diff.
- Every commit's author and committer must be **Andre Ruiz
  <andre@andrers.dev>** (their GitHub identity for this project). Do not run
  `git config` (local or global) to set this — instead pass it per commit, e.g.:
  ```
  GIT_AUTHOR_NAME="Andre Ruiz" GIT_AUTHOR_EMAIL="andre@andrers.dev" \
  GIT_COMMITTER_NAME="Andre Ruiz" GIT_COMMITTER_EMAIL="andre@andrers.dev" \
  git commit -m "..."
  ```
