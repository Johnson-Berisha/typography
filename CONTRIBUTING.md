# Contributing to Fontiq 🤝✨
Thank you very much for contributing, please read the rules below!

## Local Setup
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
- Do not reformat or touch unrelated files

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
### Testing out the changes
1. **To make sure all the changes work, please rebuild using `npm run build`.**
2. **Commit and push your code**
3. **Make a PR following the rules above**
4. **Wait for me or a mod to merge your PR**
   
Thank you for understanding, we are just trying to keep everything clean, so help us continue that!

### Scope
Fontiq focuses on typography and helping devs make better UI with typography.
Unrelated features will be unfortunately rejected.

Once again, I thank you very much for being interested on the growth of Fontiq 💙🚀

And if you want to, please star this repo!

[Fontiq](https://fontiq.vercel.app/)
