# OptScientist: Automated Discovery of Optimization Laws

**Official Project Website:** https://optscientist.github.io/

Source repository for the OptScientist project website.

## Publish on GitHub Pages

1. Create a public GitHub repository, for example `optscientist.github.io`.
2. Upload **all the files inside this folder** to the repository root (with `index.html` at the root).
3. Open **Settings → Pages** in GitHub. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. Open your GitHub Pages URL once deployment finishes.

For a project repository, the address is `https://<username>.github.io/<repository>/`; for a repository named `<username>.github.io`, the address is `https://<username>.github.io/`.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Site contents

- `index.html` — page content, scientific narrative, and accessible markup
- `static/styles.css` — responsive editorial layout in a muted terracotta palette
- `static/site.js` — full-resolution figure viewer and citation-copy interaction
- `static/images/` — paper illustrations and complete experimental figures
- `paper/OptScientist_Preprint.pdf` — included research paper
- `static/favicon.svg` — site favicon

The site uses the Source Serif 4, Source Sans 3, and Source Code Pro font families. Typekit alternatives are not required; system fallbacks remain available. MathJax is loaded through its public CDN for mathematical notation. No build step or package installation is required.

## Credits and rights

Website © 2026 OptScientist authors. Research text, figures, and the paper are credited to the paper authors; the `LICENSE` file governs the website's code only.
