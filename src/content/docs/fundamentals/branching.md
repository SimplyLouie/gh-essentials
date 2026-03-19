---
title: Branching & Parallel Work
description: Learn how to manage multiple features and collaborate using branches.
---

Branches are the power tool of Git. They allow you to deviate from the main line of development and continue to work without messing with that main line.

## 🌿 Why Branch?

In a professional environment, the `main` branch usually represents the "production-ready" code. By creating a branch, you can:
- Work on a new feature in isolation.
- Fix a bug without breaking other features.
- Experiment with new ideas safely.

### Creating and Switching Branches

```bash
# Create a new branch
git branch feat/new-login

# Switch to the new branch
git switch feat/new-login

# Shortcut: Create AND switch in one command
git switch -c feat/awesome-feature
```

## 🏷️ Branch Naming Conventions

Using a consistent naming scheme helps your fellow devs understand what you're working on at a glance.

:::tip[Best Practice]
Combine a **type** and a **description** for your branch names:
- `feat/name` — For new features
- `fix/issue-id` — For bug fixes
- `docs/refactor` — For documentation or non-functional changes
:::

## ⚔️ Handling Merge Conflicts

Sometimes, two people change the same line in the same file. When you try to merge, Git will get confused and ask for your help.

<Steps>
1. **Identify the conflict**
   Git will tell you which files are conflicted during a merge or pull.
   
2. **Open the file**
   Look for the merge markers:
   ```text
   <<<<<<< HEAD
   Your changes
   =======
   Changes from the other branch
   >>>>>>> main
   ```

3. **Choose the winner**
   Delete the markers and keep the code you want (or combine both).

4. **Stage and Commit**
   ```bash
   git add .
   git commit -m "chore: resolve merge conflict in index.html"
   ```
</Steps>

:::caution
Never force-push (`--force`) to a shared branch like `main` or `develop` unless you are absolutely sure of what you're doing. It can overwrite your teammates' work!
:::
