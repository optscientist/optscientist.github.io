# OptScientist — Project Website

A complete, ready-to-publish **static GitHub Pages website** for

> **OptScientist: Automated Discovery of Optimization Laws**  
> ZhenYao Ma, Yue Liang, Jian-Qiao Zhu (2026 preprint).

Designed with the supplied Behavior Learning (BL) project website as a structural reference, with a distinct muted terracotta / Morandi-orange palette. The scientific narrative follows the supplied OptScientist preprint, **especially its Introduction**: optimization-based scientific theories → expert-formulation bottleneck → beyond input–output equation discovery → the OptScientist Model (OptLearner / OptDiscover) → the agentic research loop → OptFeynman, risky choice, monetary policy → cross-disciplinary scientific implications and boundaries.

## Publish on GitHub Pages

1. Create a public GitHub repository. Suggested name: `optscientist.github.io` (to use a dedicated site, this must be the GitHub **account name** itself; otherwise GitHub Pages will publish a project URL at `https://YOUR_USERNAME.github.io/REPO_NAME/`). Or use a regular project repo such as `optscientist-website`.
2. Upload **all files inside this website folder to the repository root**, including `index.html`, `static/`, `paper/`, and `.nojekyll`.
3. Commit to the `main` branch.
4. In GitHub, go to **Settings → Pages → Build and deployment**, select **Deploy from a branch**, **main**, **/(root)**; Save.
5. Open the URL shown in GitHub Pages settings. All local links use relative paths, so the site works as either an account site or a project site.

No Jekyll, npm, React, build step, CI secrets, analytics, cookies, tracking, or external API keys are required.

### Local preview

```bash
python -m http.server 8000
```

Open `http://localhost:8000/` from this folder. Directly opening `index.html` also works for most content, but a local server is the recommended test.

## Contents

- `index.html` — complete scientific narrative, author information, equations, evidence, references, links, and accessible semantic HTML.
- `static/styles.css` — responsive styling (muted warm orange, cream, espresso), dark and light section treatments.
- `static/site.js` — functional mobile navigation, figure enlargement, BibTeX copy.
- `static/images/*.webp` — figure exports made from the manuscript's original figure PDFs; everything is self-hosted.
- `static/icons/favicon.svg` — original visual mark matching the website.
- `static/icons/og-cover.png` and `og-cover.svg` — Open Graph social preview and its editable vector source.
- `paper/OptScientist_Preprint.pdf` — manuscript compiled from the supplied `main.tex` and `references.bib` with locally available TeX Live tools.
- `.nojekyll` — static site compatibility with GitHub Pages.

The Google Fonts stylesheet is optional: if unavailable, the site falls back to Georgia and system fonts. The scientific figures and PDF are all local. The site does not use MathJax, third-party scripts, or remote figures.

## Before publishing

- **Paper status:** The bundled PDF is compiled from the exact supplied source snapshot, not pulled from an external publication server. Replace it if a newer finalized preprint supersedes the upload. The source was compiled with `pdflatex` and `bibtex8`; BibTeX reported two nonfatal source-data warnings, but the final PDF contains resolved citations.
- **Links:** The website intentionally does not invent a DOI, arXiv URL, code repository, or published venue. Add such links only when available. The paper button opens the bundled local PDF. There is one intentional outbound research link to the BL project website.
- **Authorship:** Names, affiliations and the corresponding-author email were taken from the uploaded manuscript. Check against the version you want public.
- **Preprint citation:** The provided BibTeX is provisional, without an identifier, to avoid suggesting a publication record not established by the supplied manuscript.
- **Scientific scope:** Biological applications appear as a *future direction*, not as an experimentally validated result. Real-world discovered laws are interpretable models with held-out evaluations, not uniquely proven causal mechanisms.

## Design and provenance

This is an original website implementation rather than a copy of the BL site's visual design. It reuses no BL figures, and its substantive descriptions and figure assets derive from the uploaded OptScientist manuscript. The scientific content should be edited together with the paper when results change.
