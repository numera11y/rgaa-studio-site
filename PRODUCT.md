# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro with Tailwind CSS 4, Lucide icons, and a static build deployed to GitHub Pages.

## Users

Accessibility auditors (independent, agency, and organizational teams) evaluating RGAA/WCAG websites, and public-sector organizations or product teams exploring how to structure an accessibility audit.

## Product Purpose

Present RGAA Studio as an installable desktop workbench for page-centered accessibility audits, helping visitors understand the workflow and discover the available application release.

## Positioning

The product keeps the audited page, reference, human decisions, and evidence connected in one local audit dossier. Automated suggestions assist review; they do not determine conformity.

## Operating Context

- The public site is French-first.
- The primary action is “Découvrir l’application” and goes directly to the latest GitHub release; visitors can explore the product journey in-page before downloading.
- The site is maintained in a standalone public repository, `numera11y/rgaa-studio-site`, and prepared for GitHub Pages.
- The currently published GitHub release is `v0.1.0`; the site should resolve the latest release dynamically rather than hard-code a future version.

## Capabilities and Constraints

- The desktop application targets Windows and Linux; website copy must not overstate unvalidated Linux/browser capabilities.
- RGAA and WCAG are supported, with an explicit WCAG target level.
- The audited website, pages, automated suggestions, evidence, and human decisions are separate concepts.
- Human conformity decisions remain authoritative; axe-core and other automated analyses are only review aids.
- Audit dossiers are local to the desktop application.
- Current page-navigation and inspection capabilities are an early product slice; avoid implying exhaustive automated coverage.
- The site uses Astro, Tailwind CSS 4, and Lucide Astro icons.
- No custom domain has been selected yet.

## Brand Commitments

- Present the product primarily as **RGAA Studio**, using its supplied application icon and the interface's navy/blue/light-surface vocabulary.
- Preserve factual attribution to numera11y without making the publisher's separate services brand the product's main identity.
- Interface examples and supplied press-kit screenshots are genuine captures. The site may use public pages from numera11y.fr as the application example.

## Evidence on Hand

- `media/press-kit/` contains 26 application screenshots, store-sized images, four editorial compositions, WebP derivatives, a contact sheet, and an animation storyboard.
- The screenshots use `https://www.numera11y.fr` and were captured on 2026-10-30. axe-core results represent the public site's content at capture time.
- No human conformity decisions are prefilled in the demonstration dossier.
- Do not invent customer testimonials, audit outcomes, conformity scores, performance benchmarks, pricing, or release capabilities.

## Product Principles

1. Make the auditor's judgment visibly authoritative.
2. Show the connection between a page, its reference, review aids, and durable evidence.
3. Describe suggestions as candidates to examine, never as a complete audit.
4. Keep the difference between an automated signal and a human decision clear.

## Accessibility & Inclusion

- The marketing site itself must support keyboard navigation, readable contrast, reduced motion, and accessible names and structure.
- Motion is an enhancement; the core story and actions remain usable without it.
