# tokenwright-site

The public specification site for Tokenwright. Deployed to `tokenwright.ai`.

This is a static Astro site. The aesthetic is deliberate: an engineering blueprint
rendered as a webpage, not a marketing site. It exists to let a first-time visitor
understand what Tokenwright is. No waitlist, no CTA, no signup.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and
deploys it to GitHub Pages.

## Notes

- Draft revision marker: `DRAFT.00.01`.
- Source of truth for the roster content is `tokenwright/docs/roster.md` in the
  sibling design repo. The homepage is a distilled presentation of that document.
