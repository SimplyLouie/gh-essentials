# GitHub Essentials Content Expansion Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the documentation into a comprehensive Beginner-to-Pro guide for GitHub essentials.

**Architecture:** Topic-based reference structure with Fundamentals, Collaboration, and Expert Tools. Uses Starlight's `Steps`, `Tabs`, and `Aside` components for high-quality formatting.

**Tech Stack:** Astro, Starlight, MDX, Mermaid.js.

---

### Task 1: Fundamentals - Getting Started Refinement

**Files:**
- Modify: `src/content/docs/fundamentals/getting-started.md`

- [ ] **Step 1: Update Frontmatter and Intro**
Add a more welcoming intro and structured "What you will learn" section.
- [ ] **Step 2: Add Installation & Configuration section**
Cover `git config --global user.name` and `user.email`.
- [ ] **Step 3: Expand the Basic Workflow**
Explain the *why* behind `add`, `commit`, and `push`.
- [ ] **Step 4: Commit**
`git add src/content/docs/fundamentals/getting-started.md && git commit -m "docs: refine getting started guide"`

### Task 2: Fundamentals - New Branching Guide

**Files:**
- Create: `src/content/docs/fundamentals/branching.md`

- [ ] **Step 1: Create file with basic branching concepts**
Explain the `main` branch vs `feature` branches.
- [ ] **Step 2: Add "Pro Tips" for naming conventions**
Recommend `feat/`, `fix/`, `refactor/` prefixes.
- [ ] **Step 3: Add Merge Conflict resolution guide**
Use the `Steps` component to show how to resolve conflicts in the terminal.
- [ ] **Step 4: Commit**
`git add src/content/docs/fundamentals/branching.md && git commit -m "docs: add branching guide"`

### Task 3: Collaboration - Cloning vs. Forking expansion

**Files:**
- Modify: `src/content/docs/collaboration/forking-vs-cloning.md`

- [ ] **Step 1: Expand "Syncing your fork" section**
Explain the `upstream` remote concept and `git remote add upstream`.
- [ ] **Step 2: Add comparison table**
Direct Clone vs. Fork-and-Pull workflows.
- [ ] **Step 3: Commit**
`git commit -am "docs: expand cloning/forking guide with upstream syncing"`

### Task 4: Collaboration - New Pull Request Lifecycle

**Files:**
- Create: `src/content/docs/collaboration/pull-requests.md`

- [ ] **Step 1: Document the PR lifecycle**
From 'Draft' to 'Review' to 'Merge'.
- [ ] **Step 2: Add "PR Best Practices"**
Atomic commits, descriptive titles, and adding screenshots.
- [ ] **Step 3: Commit**
`git add src/content/docs/collaboration/pull-requests.md && git commit -m "docs: add pull request guide"`

### Task 5: Expert Tools - Power Tools expansion

**Files:**
- Rename: `src/content/docs/advanced/rebasing.md` -> `src/content/docs/advanced/power-tools.md`
- Modify: `src/content/docs/advanced/power-tools.md`

- [ ] **Step 1: Add Rebase vs Merge section**
Visual comparison of history.
- [ ] **Step 2: Add Cherry-pick and Reflog scenarios**
"How to recover a deleted branch" using `reflog`.
- [ ] **Step 3: Commit**
`git add . && git commit -m "docs: expand advanced power tools"`

### Task 6: Homepage & Sidebar Finalization

**Files:**
- Modify: `src/content/docs/index.mdx`
- Modify: `astro.config.mjs`

- [ ] **Step 1: Update Homepage (index.mdx)**
Create a clear "Beginner" and "Pro" entry point using `LinkCard` or custom buttons.
- [ ] **Step 2: Update Sidebar config in `astro.config.mjs`**
Ensure all new files are logically grouped.
- [ ] **Step 3: Commit**
`git commit -am "docs: finalize homepage and navigation"`

### Task 7: Final Verification

- [ ] **Step 1: Run Build**
`npm run build`
- [ ] **Step 2: Check for broken links**
Verify all internal cross-references.
- [ ] **Step 3: Commit**
`git commit -m "docs: final verification complete"`
