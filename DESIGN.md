---
name: RGAA Studio Website
description: A clear route from a public website to a traceable accessibility audit.
colors:
  action: "#214b9a"
  action-strong: "#193c7e"
  ink: "#171f3b"
  neutral-bg: "#eef2fa"
  neutral-paper: "#fffdf7"
  secondary-text: "#45536d"
  rule: "#cfd7e5"
  quiet-surface: "#e8edf7"
  focus: "#6c3fd1"
  route-line: "#adc0df"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, sans-serif"
    fontSize: "clamp(3.25rem, 5.1vw, 5rem)"
    fontWeight: 760
    lineHeight: 0.99
    letterSpacing: "-0.048em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 4.5vw, 4.4rem)"
    fontWeight: 730
    lineHeight: 1.04
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, sans-serif"
    fontSize: "clamp(1.2rem, 2vw, 1.55rem)"
    fontWeight: 710
    lineHeight: 1.2
  body:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.58
  label:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 720
rounded:
  control: "0.45rem"
  image: "0.65rem"
  panel: "0.75rem"
  node: "50%"
spacing:
  small: "0.5rem"
  compact: "0.8rem"
  medium: "1rem"
  large: "1.5rem"
  section: "clamp(5.5rem, 10vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "3.15rem"
    typography: "{typography.label}"
  button-light:
    backgroundColor: "{colors.neutral-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "3.15rem"
    typography: "{typography.label}"
---

# Design System: RGAA Studio Website

## Overview

**Creative North Star: “Le fil de l’audit.”**

The site makes the connection between an observed page, review aids, the auditor’s decision, and recorded evidence visible as a route. It keeps the product itself in view: supplied application screenshots are evidence of the interface, while the route line shows how its parts relate. The language is direct and French-first, for auditors and organizations evaluating the tool.

The visual system extends RGAA Studio’s actual desktop palette and icon, with a legible self-hosted typeface and open, low-density page sections. The publisher remains a factual footer attribution; the product icon and name carry the main identity.

**Key Characteristics:**
- Route structure instead of a row of equal feature cards.
- Blue signals actions and navigable audit stages.
- Genuine application screenshots, captioned and described.
- Automated analyses are presented as review aids, never as conformity results.

## Colors

Deep navy anchors the product; a clear working blue marks actions and journey nodes, while pale blue and warm paper separate reading surfaces without adding visual noise.

### Primary
- **Audit Blue** ({colors.primary}): Main calls to action, selected route nodes, and links that move the visitor into the product journey.
- **Deeper Audit Blue** ({colors.primary-strong}): Pressed or hover state on the primary action.

### Neutral
- **Studio Ink** ({colors.ink}): Main headings and navigation text.
- **Mist Surface** ({colors.neutral-bg}): Global page ground and quiet regions around product captures.
- **Paper Surface** ({colors.neutral-paper}): Long-form content and open disclosures.
- **Slate Reading** ({colors.secondary-text}): Supporting text and explanatory copy.
- **Soft Rule** ({colors.rule}): Section boundaries and screenshot frames.
- **Quiet Blue Surface** ({colors.quiet-surface}): Secondary grouping and subtle control states.
- **Keyboard Focus Violet** ({colors.focus}): Strong focus outline, distinct from the route blue.

**The Route-Blue Rule.** Audit Blue marks navigation and action; it never communicates a conformity result by itself.

## Typography

**Display Font:** Atkinson Hyperlegible Next (with Segoe UI, sans-serif fallback)

**Body Font:** Atkinson Hyperlegible Next

**Label/Mono Font:** No mono face; product labels remain in the same accessible sans family.

**Character:** Open, easy-to-distinguish letterforms support an accessibility-focused product. Large headings use weight and scale, not decorative effects.

### Hierarchy
- **Display** (760, `clamp(3.25rem, 5.1vw, 5rem)`, `0.99` line-height): Homepage proposition, at most two lines.
- **Headline** (730, `clamp(2.5rem, 4.5vw, 4.4rem)`, `1.04` line-height): Major page sections.
- **Title** (710, `clamp(1.2rem, 2vw, 1.55rem)`, `1.2` line-height): Journey steps and feature statements.
- **Body** (400, `1.0625rem`, `1.58` line-height): Explanations, optimized for comfortable scanning.
- **Label** (720, `0.94rem`): Navigation, route labels, and concise action text.

## Layout

Content uses a centered `82rem` maximum width and fluid side gutters (`min(100% - 3rem, 82rem)`). The first viewport establishes the product proposition and release action with the top of an authentic application capture. The audit route follows immediately below, then expands into native disclosures; technical views, audiences, and release actions are separated by large vertical pauses and thin rules rather than a repeating card grid.

At widths up to `1100px`, evidence layouts stack and audience rows simplify. At `720px`, navigation becomes a native disclosure, the route becomes vertical, and feature sections stack. At `390px`, headings and metadata tighten without horizontal overflow. The page was exercised at widths from 390px to 1600px.

## Elevation & Depth

The site is flat at rest. Separation comes from full-width tonal fields, thin rules, and the intrinsic frame of a screenshot; there is no decorative drop-shadow system. A single, small vertical lift marks a hovered action. The audit route draws once on load and stays fully legible in a reduced-motion setting.

## Shapes

Buttons use restrained rounded corners (`0.45rem`), image frames use a slightly broader radius (`0.65rem`), and larger panels use `0.75rem`. Journey markers are circular, while page sections remain square-edged and separated by lines. The screenshot frame never imitates a device shell.

## Components

### Navigation
- Product icon plus “RGAA Studio” wordmark; primary links describe destinations.
- Desktop navigation remains inline; mobile navigation uses native `<details>` disclosure semantics.
- The mobile disclosure closes on Escape, outside click, or link activation, with focus returned to the summary on Escape.

### Primary Button
- **Shape:** Gently rounded (`0.45rem`).
- **Primary:** Audit Blue with white text; minimum height `3.15rem` and generous horizontal padding.
- **Hover / Focus:** Deeper Audit Blue and a high-contrast keyboard focus outline.
- **Secondary:** A transparent, text-forward link with the same arrow motif and no competing solid fill.

### Audit Journey Disclosure
- Each native `<details>` step exposes one genuine screenshot, a caption, and an explanation.
- Only one step is open at a time; the step title and destination remain visible when closed.
- The five-step route links directly to the corresponding disclosure.

### Product Screenshot
- Uses supplied application captures, preserved at their source ratio and given descriptive alt text.
- A thin frame and caption establish context; the image is never treated as a completed conformity result.

### FAQ Disclosure
- Native `<details>` elements retain browser keyboard behavior and expose answers without scripting.

## Do's and Don'ts

### Do:
- **Do** keep the route between page, review aids, human judgment, and evidence explicit.
- **Do** keep release discovery direct and label each external destination.
- **Do** describe automated signals as suggestions and actual decisions as the auditor’s responsibility.
- **Do** use supplied product screenshots with their provenance and meaningful alternatives.

### Don't:
- **Don't** imply that the tool issues a compliance verdict or that its automated coverage is complete.
- **Don't** imply audit-dossier synchronization or collaborative account features.
- **Don't** add testimonial, client, benchmark, pricing, or outcome claims without verified source material.
- **Don't** hide essential content behind motion or replace the product interface with a generic device mockup.
