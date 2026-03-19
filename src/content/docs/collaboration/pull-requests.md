---
title: The Pull Request Lifecycle
description: Master the art of proposing, reviewing, and merging changes on GitHub.
---

A Pull Request (PR) is more than just a code transfer; it's a conversation about a feature. It's the primary way teams ensure code quality and share knowledge.

## 🔄 The PR Process

<Steps>
1. **Push your feature branch**
   After committing your changes locally, push your branch to GitHub.
   ```bash
   git push origin feat/awesome-feature
   ```

2. **Open the PR on GitHub**
   Navigate to the repository on GitHub. You'll usually see a "Compare & pull request" button.

3. **Write a great description**
   Explain *what* you changed and *why*. Link any related issues using `Closes #123`.

4. **Review and Respond**
   Team members will review your code. They might request changes or leave comments. Be open to feedback!

5. **Merge**
   Once approved (and all tests pass), the PR can be merged into the `main` branch.
</Steps>

## 💡 PR Best Practices

### 1. Keep PRs "Atomic"
Small PRs are easier to review, less likely to have bugs, and get merged faster. Try to focus one PR on a single task or fix.

### 2. Craft Quality Commit Messages
Use the Imperative Mood (e.g., "Add user login" instead of "Added user login").

:::tip[Pro Tip: Conventional Commits]
Use prefixes to categorize your work:
- `feat:` for a new feature
- `fix:` for a bug fix
- `docs:` for documentation changes
- `test:` for adding or fixing tests
:::

### 3. Add Context
If you're changing the UI, add **before and after screenshots** or a GIF of the new interaction. It saves reviewers a lot of time!

## 🤝 Reviewing Others' Code

When you're the reviewer, remember:
- **Be kind**: Critique the code, not the person.
- **Explain the "Why"**: If you suggest a change, explain the benefit (performance, readability, etc.).
- **Ask, don't tell**: "Could we use a `map` here?" instead of "Use a `map` here."

:::caution
Never merge your own PR unless you're working alone or in a designated "emergency" situation. Peer review is the best defense against technical debt!
:::
