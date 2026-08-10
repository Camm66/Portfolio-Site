# Portfolio-Site — cameronmorales.com

Next.js (App Router) static-export portfolio, deployed to GitHub Pages at https://www.cameronmorales.com.

## Stack

- Next.js 16 with `output: "export"` (static export to `out/`), React 19
- Tailwind CSS 3, TypeScript
- Pages live in `app/` (`app/page.tsx` is the homepage, `app/resume/page.tsx` is /resume)

## Deploy pipeline

Pushing to `master` deploys the site. GitHub Actions (`.github/workflows/ci.yml`) runs lint → build → deploys `out/` to GitHub Pages. No manual deploy step. Deploys take ~1–2 minutes after push.

To ship a change:

1. Make edits in `app/` (or config files)
2. Verify locally: `npm run lint && npm run build`
3. Commit and push to `master`
4. Check the deploy: `gh run watch` (or the Actions tab). Live at https://www.cameronmorales.com once green.

## Rules

- Never commit `out/`, `.next/`, `node_modules/`, or `.claude/` (all gitignored)
- Do not remove `output: "export"` or `images.unoptimized` from `next.config.ts` — GitHub Pages requires a static export
- Keep `trailingSlash: true` — Pages serves `foo/index.html`, not `foo.html`
- The custom domain is configured in GitHub Pages settings; the root `CNAME` file is legacy from the branch-deploy era, leave it alone
- Always run `npm run lint && npm run build` before pushing — a failed build blocks deploy
- Work directly on `master` for small changes; use a branch + PR only if asked
