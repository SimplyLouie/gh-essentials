# Spec: GitHub Essentials Content Expansion

## 🎯 Goal
Transform the existing brief documentation into a comprehensive, premium resource for both beginners and professional developers, covering core GitHub workflows and best practices.

## 🏗️ Architecture

### Folder Structure & Sidebar
- **Fundamentals**
  - `fundamentals/getting-started.md`: Git overview, basic cycle (init, add, commit, push, pull).
  - `fundamentals/branching.md`: [NEW] Parallel work, branch naming conventions, HEAD, merge basics.
- **Collaboration**
  - `collaboration/cloning-and-forking.md`: [RENAME/EXPAND] Fork-and-Pull model, Upstream vs. Origin syncing.
  - `collaboration/pull-requests.md`: [NEW] Lifecycle of a PR, code reviews, atomic commits.
- **Expert Tools**
  - `power-tools.md`: Rebase vs Merge, Cherry-picking, Reflog.

## 🎨 Design Components

### 1. Visual Aids
- **Mermaid Diagrams**: Used on every page to show local vs remote data movement.
- **Call-to-Action Buttons**: In `index.mdx` to act as a portal to major sections.

### 2. Information Hierarchy
- **Starlight Steps**: For multi-step procedures (e.g., "How to resolve a merge conflict").
- **Custom Asides**:
  - `:::tip`: Best practices (e.g., 'Use git commit --amend' for fixups).
  - `:::caution`: Common pitfalls (e.g., 'Don't push to main directly').
  - `:::badge`: To signify "Beginner" or "Advanced" difficulty on specific sections.

### 3. Formatting
- Use **Tabs** to toggle between 'Terminal Commands' and 'GitHub Desktop/UI' methods.
- Ensure all code blocks use clear comments explaining the *why* behind each command.

## 📝 Content Plan

### Phase 1: Fundamentals
- Refine `getting-started.md` to be more descriptive.
- Create `branching.md` with a focus on "Atomic Features".

### Phase 2: Collaboration
- Expand `cloning-and-forking.md` with the "Syncing from Upstream" workflow.
- Create `pull-requests.md` with best practices for descriptions and labels.

### Phase 3: Expert Tools
- Expand existing power tools with real-world scenarios (e.g., "I committed to the wrong branch, now what?").

## ✅ Success Criteria
- [ ] Build completes without errors.
- [ ] Sidebar is intuitive and reflects the new structure.
- [ ] Every page includes at least one "Best Practice" or "Pro Tip".
- [ ] No broken internal links.
