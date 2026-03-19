---
title: Getting Started with Git
description: Learn the essential Git commands for local development.
---

Git is a distributed version control system that helps you track changes in your code. Whether you're a beginner or an experienced developer, mastering the Git workflow is the first step toward effective collaboration on GitHub.

## 🏁 Installation & Configuration

Before you start coding, you need to set up your identity. This information is attached to every commit you make.

### 1. Install Git
If you haven't already, download Git from [git-scm.com](https://git-scm.com/).

### 2. Configure your identity
Open your terminal and run the following commands:

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (use the same one as your GitHub account)
git config --global user.email "your.email@example.com"
```

:::tip
You can verify your configuration by running `git config --list`.
:::

## 🚀 The Local Workflow

The core Git cycle involves three main areas: the **Working Directory**, the **Staging Area**, and the **Repository**.

### 1. Initialize
Start tracking a project by initializing a new repository.
```bash
git init
```

### 2. Stage Changes
When you've made changes, you need to "stage" them. This tells Git which changes you want to include in your next snapshot.
```bash
# Stage a specific file
git add filename.txt

# Stage all changes in the current directory
git add .
```

### 3. Commit
A commit is a snapshot of your staged changes. Always include a clear, descriptive message.
```bash
git commit -m "feat: implement user authentication"
```

## 🌿 Branching & Merging

Branches allow you to work on new features or bug fixes without affecting the stable `main` branch.

| Command | Action |
| :--- | :--- |
| `git branch [name]` | Create a new branch |
| `git switch -c [name]` | Create and switch to a new branch |
| `git switch [name]` | Switch to an existing branch |
| `git merge [branch]` | Merge changes into your current branch |

:::caution
Always keep your `main` branch clean. Never work on it directly; instead, create a feature branch for every task.
:::
