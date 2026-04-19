# ASII Domain + GitHub Pages Final Checklist

Last verified: **2026-04-19 (UTC)**

## Primary Domain Strategy
- [x] Use **asii.is-a.dev** as the canonical ASII domain
- [x] Treat **asiihq.is-a.dev** as a redirect/support domain
- [x] Treat **asii-ai.is-a.dev** as a redirect/support domain

## GitHub Pages
- [ ] Open GitHub Pages settings for `sukhrob-ziyovuddinov.github.io` (manual in GitHub UI)
- [ ] Confirm custom domain is set to **asii.is-a.dev** (manual in GitHub UI)
- [ ] Confirm `CNAME` file contains only `asii.is-a.dev`
- [ ] Enable **Enforce HTTPS**
- [ ] Wait for certificate issuance if HTTPS is still pending

## is-a.dev Domain Status
- [ ] Confirm PR for `asii.is-a.dev` was merged
- [ ] Confirm PR for `asiihq.is-a.dev` was merged
- [ ] Confirm PR for `asii-ai.is-a.dev` was merged
- [ ] Confirm DNS propagation completed for all three

## Domain Routing (Automated check result)

### Canonical
- [ ] `asii.is-a.dev` resolves to GitHub Pages and opens the live ASII site

### Redirects
- [ ] `asiihq.is-a.dev` redirects to `https://asii.is-a.dev`
- [ ] `asii-ai.is-a.dev` redirects to `https://asii.is-a.dev`

Current result from `curl -I` for all 3 domains: **HTTP 403** (not yet pointing to expected site/redirect).

## If direct CNAME approach fails
- [ ] Use the allowed alternative route from `is-a.dev` documentation
- [ ] Check TXT verification path if required
- [ ] Re-check GitHub Pages domain verification status

## Final Validation
- [ ] `https://asii.is-a.dev` loads correctly
- [ ] `https://asiihq.is-a.dev` redirects correctly
- [ ] `https://asii-ai.is-a.dev` redirects correctly
- [ ] HTTPS works on all three
- [ ] No browser certificate warning
- [ ] No 404 on root domain

## Website Alignment
- [x] Replace placeholder links with `https://asii.is-a.dev` (repository README updated)
- [ ] Use the canonical domain in:
  - [ ] GitHub profile README
  - [x] repository READMEs
  - [ ] website footer
  - [ ] contact page
  - [ ] LinkedIn profile
  - [ ] investor materials
  - [ ] one-pager
  - [ ] outreach emails

## Final Rule
- [x] **Canonical brand domain = `asii.is-a.dev`**
- [x] **All other ASII subdomains should support or redirect to it**

## Quick commands used for verification

```bash
dig +short asii.is-a.dev A
dig +short asiihq.is-a.dev A
dig +short asii-ai.is-a.dev A
curl -I https://asii.is-a.dev
curl -I https://asiihq.is-a.dev
curl -I https://asii-ai.is-a.dev
```
