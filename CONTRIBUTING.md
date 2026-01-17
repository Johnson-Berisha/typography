# Contributing to Fontiq 🤝✨
Thank you very much for contributing, please read the rules below!

## Setup
1. **Fork the repo**
2. **Clone your fork**
```bash
git clone https://github.com/your-username/repo-name.git
```
3. **Install all packages**
```bash
npm install
```
4. **Lastly, start a dev server**
```bash
npm run dev
```

## Code Guidelines
- Tailwind CSS is discouraged
- Clean, readable CSS
- Semantic HTML first
- Either JS or TS allowed 

## Commits
Use conventional commits:
- feat:
- fix:
- docs:
- refactor:

## Pull Requests
- One purpose per PR
- Clear title and description
- Screenshots preferred, not forced

## How to make your changes a reality
For a further understanding on how everything works take a look at the project structure:
### Project Structure

```text
├─ public/
│  └─ icon.svg # favicon
├─ src/
│  ├─ app/
│  │  ├─ code-snippet-app/   # Code snippets feature routes
│  │  ├─ docs/               # Documentation pages/routes
│  │  ├─ page.js             # Homepage
│  │  ├─ layout.js           # Root layout
│  │  ├─ globals.css         # Global styles
│  │  ├─ homepage.css        # Homepage-specific styles
│  │  └─ ContentList.jsx     # CMS related
│  └─ context                # Content provider
│ 
├─ README.md
├─ CONTRIBUTING.md
├─ LICENSE
└─ package.json
```
### Scope
Fontiq focuses on typography and helping devs make better UI with typography.
Unrelated features will be unfortunately rejected.

Once again, I thank you very much for being interested on the growth of Fontiq 💙🚀
