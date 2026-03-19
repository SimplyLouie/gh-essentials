---
title: Advanced Git Power Tools
description: Master rebasing, cherry-picking, and fixing mistakes with the Git "time machine".
---

Once you've mastered the basics, these tools will make you a Git power user. They allow you to clean up your history, recover lost work, and collaborate more effectively.

## 🛠️ Rebase vs. Merge

Both commands are used to integrate changes from one branch into another, but they do it in different ways.

### Git Merge
- **What**: Combines two branches' histories while preserving the timeline of both.
- **Why**: Good for a "true" representation of history, showing exactly when features were merged.
- **Command**: `git merge main`

### Git Rebase
- **What**: Moves your feature branch's base to the newest commit on the target branch.
- **Why**: Creates a **clean, linear history** without redundant "merge commits".
- **Command**: `git rebase main`

:::tip[Pro Tip]
Always rebase your local feature branch onto `main` before opening a Pull Request. It ensures your PR is up-to-date and easy to merge!
:::

## 🍒 Cherry-picking

Sometimes you want a single commit from another branch without merging the entire branch.

- **What**: Apply a specific commit from any branch to your current location.
- **When**: You fix a bug on a feature branch but need it in `main` right now.
- **Command**: `git cherry-pick [commit-hash]`

## 🕒 The Time Machine: Git Reflog

Did you delete a branch by mistake? Did a rebase go wrong? Don't panic!

- **What**: Shows a list of every move your Git `HEAD` has made.
- **Why**: You can find the hash of any commit, even if it's no longer on any branch.
- **Command**: `git reflog`

### How to use Reflog
1. Run `git reflog`.
2. Find the entry before the mistake (e.g., `HEAD@{5}`).
3. Restore it with `git reset --hard HEAD@{5}`.

## 🔒 Git Stash

- **What**: Temporarily shelves uncommitted changes.
- **When**: You're in the middle of a feature and need to switch branches to fix a bug immediately.
- **Command**:
  ```bash
  # Save your work
  git stash

  # List your stashed items
  git stash list

  # Bring back the most recent stash
  git stash pop
  ```

:::caution[Wait!]
`git reset --hard` is destructive. Always make sure you've committed your current work or stashed it before using it!
:::
