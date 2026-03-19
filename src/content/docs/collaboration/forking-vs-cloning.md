---
title: Cloning vs. Forking
description: Understand the core collaboration patterns on GitHub.
---

On GitHub, there are two primary ways to start working on a project: **Cloning** and **Forking**. Choosing the right one depends on your permissions and the project's goals.

## 👯 The Workflow

```mermaid
graph LR
    A[Original Repo (Upstream)] -->|Fork| B[Your Copy (Origin)]
    B -->|Clone| C[Your Local Machine]
    C -->|Push| B
    B -->|Pull Request| A
```

### 📦 Cloning (The Direct Pathway)
*   **What**: Downloads a full copy of a repository to your local computer.
*   **When**: You are a **collaborator** on the project or it's your own repository.
*   **Command**: `git clone <repo-url>`

### 🍴 Forking (The Open Source Pathway)
*   **What**: Creates a personal copy of someone else's repository on **GitHub**.
*   **When**: You want to contribute to an open-source project or use it as a starting point where you don't have write access.
*   **Workflow**: Fork on GitHub → Clone your fork → Push to your fork → Pull Request to the original repository.

---

## 🏗️ Syncing Your Fork (Pro Workflow)

The biggest challenge with forking is keeping your copy up-to-date with the original repository (often called the `upstream`).

<Steps>
1. **Add the upstream remote**
   ```bash
   git remote add upstream https://github.com/original-owner/original-repo.git
   ```

2. **Fetch the changes**
   ```bash
   git fetch upstream
   ```

3. **Merge the upstream changes into your local main**
   ```bash
   git switch main
   git merge upstream/main
   ```

4. **Push the updates to your origin**
   ```bash
   git push origin main
   ```
</Steps>

:::tip
Most GitHub pages now have a "Sync fork" button, but knowing the terminal commands is essential for resolving conflicts during the sync.
:::

## 🔄 Comparison Table

| Feature | Cloning | Forking |
| :--- | :--- | :--- |
| **Write Access** | Required for push | Not required initially |
| **Location** | Local machine | GitHub account |
| **Connection** | Direct to original | Through your copy |
| **Best For** | Internal teams | Open-source contributions |

:::caution
When you clone a repository you don't own, you can't push changes back unless you're an invited collaborator. Use a fork instead!
:::
