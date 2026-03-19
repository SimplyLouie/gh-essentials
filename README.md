# 🚀 GitHub Essentials

The ultimate companion for developers mastering Git and GitHub. Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), this project provides a high-quality, topic-based reference for everything from basic commits to advanced rebasing workflows.

## 📚 What's Inside?

Our documentation is structured into three core paths to guide developers from beginner to pro:

- **Fundamentals**: Local Git lifecycle, staging, commits, and branching basics.
- **Collaboration**: Mastering the Fork-and-Pull model, Syncing Upstream, and PR etiquette.
- **Expert Tools**: Handling advanced scenarios with Rebase, Cherry-pick, Stash, and Reflog.

## 🛠️ Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18.14.1 or higher) installed on your machine.

### Local Development
1. **Clone the repository**:
   ```bash
   git clone https://github.com/SimplyLouie/gh-essentials.git
   cd gh-essentials
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the dev server**:
   ```bash
   npm run dev
   ```
   *Visit [http://localhost:4321/gh-essentials/](http://localhost:4321/gh-essentials/) to view the site locally.*

## 🚀 Deployment

This project is deployed to **GitHub Pages** using a manual branch-sync model (bypassing GitHub Actions to avoid billing/limitations).

### How to Deploy
Whenever you want to push new changes to the live site:
```bash
npm run deploy
```
*This will build the production site and push the `dist/` directory to the `gh-pages` branch automatically.*

## 📂 Project Structure

```text
.
├── src/
│   ├── assets/       # Images and media
│   └── content/
│       └── docs/     # Markdown documentation (topic-based)
├── public/           # Static assets (favicons, etc.)
├── astro.config.mjs  # Starlight & Astro configuration
└── package.json      # Build & Deploy scripts
```

## 🤝 Contributing

Found a mistake or have a "Power Tool" you'd like to document?
1. Fork the repo.
2. Create your feature branch.
3. Submit a Pull Request.

---
*Created with ❤️ by [SimplyLouie](https://github.com/SimplyLouie)*
