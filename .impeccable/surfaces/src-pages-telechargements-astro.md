---
version: 1
slug: "src-pages-telechargements-astro"
primary_target: "src/pages/telechargements.astro"
related_targets:
  - "src/styles/global.css"
  - "src/components/SiteHeader.astro"
  - "src/components/SiteFooter.astro"
  - "src/pages/index.astro"
---

## Scope and audience

Operate surface: French download catalog for RGAA Studio users choosing a release and package for their operating system.

## Task and proof

- Browse all published releases, find installable and portable packages, download the chosen file, and verify its exact SHA-256 against the value exposed by GitHub Releases.
- Group assets by platform; label macOS packages as experimental and unsigned, matching the release notes.
- Use only user-facing installers and portable archives; omit updater internals such as `.nupkg`, `RELEASES`, and `assets.*.json`.

## Constraints

- Keep the existing RGAA Studio visual system and public-site navigation.
- Read release and asset metadata from GitHub's public Releases API; show GitHub's asset digest verbatim as SHA-256, never calculate or infer a value from metadata filenames.
- If an asset has no SHA-256 digest, say so explicitly and retain the GitHub release link.
- GitHub Pages remains static. Generate the version catalog at build time and refresh deployments on a schedule so new releases appear without manual edits.
- Keep a direct link to the GitHub Releases page as a fallback if the catalog cannot be populated.

## Direction contract

### THESIS

The page is a versioned checksum register: every downloadable asset stays next to its SHA-256, so the visitor can select and verify the same file without switching context.

### OWN-WORLD

Inherit the established RGAA Studio navy, action blue, teal, warm cream and paper surfaces. Inter handles labels and reading; JetBrains Mono is reserved for version indices, file names where useful, and full hashes. Hairline rules distinguish rows; familiar buttons and disclosure controls remain standard web affordances.

### STORY

The visitor chooses a version, identifies the platform package, downloads it from GitHub, and copies or selects the GitHub-provided SHA-256 for verification.

### FIRST VIEWPORT

The page heading and source-of-hashes explanation lead into the latest release. An ordered version index sits beside the selected release manifest; Windows, Linux and clearly marked experimental macOS assets each show filename, size, download action, and full digest.

### FORM

“Registre des empreintes”, assigned composition 3 of the grounded candidates, selected by the user. Interaction signature: copy one asset's SHA-256 directly from its manifest row. Seed reference: `seed:caeab0bf98357845`.

### FINISH

unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
