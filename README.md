# Portfolio

A personal portfolio for a frontend-leaning software engineer. Read the work, scan the timeline, open the resume, get in touch.

**Live:** [joshuam-portfolio.vercel.app](https://joshuam-portfolio.vercel.app/)

![The portfolio hero: the words Building Accessible Interfaces set large over a slowly drifting node mesh, with Clear, Responsive, And Built To Last set opposite](docs/screenshots/hero.png)

<details>
<summary>See the full page</summary>

![The complete page: hero, personal overview with a milestone timeline, full-stack and UI/UX project grids, experience, and contact](docs/screenshots/home-full.png)

</details>

<details>
<summary>See the previous design</summary>

The first version. Same structure and the same navigation mechanics, a very different surface.

![The previous portfolio hero: a warm peach gradient with the name set in a monospaced face beside a photograph of downtown Austin](docs/screenshots/before-hero.png)

![The complete previous page in the warm palette: hero, personal overview, UI/UX projects, full-stack apps, experience, and contact](docs/screenshots/before-full.png)

</details>

**Stack:** React 19 · TypeScript · Tailwind v4 · React Aria Components · Vite 8 · Vercel

A single-page site, deliberately. Everything is one route with anchor navigation, so there is no router, no data fetching, and no state beyond what a dialog needs. That makes it a project about presentation rather than plumbing: the interesting decisions are in the design system, the layout, and the accessibility, because there is nothing else for them to hide behind.

---

## Design decisions

**Content lives in one file, sections read from it.** `src/data.ts` exports the projects, the timeline, the experience, the competencies, and the contact details. Every section maps over that data rather than hard-coding markup, so adding a project is one object rather than a copied block. It also means a fact appears once: the resume modal and the experience section render the same role from the same entry, which is the fix for a bug where the two disagreed about a job title and a date range for several commits.

**Design tokens in the stylesheet, not the markup.** `src/App.css` defines the palette as ink for surfaces, bone for type, one accent for live states, and hairline rules for structure. Component classes are built from those tokens and live in `@layer components`, which matters more than it sounds: without the layer, a plain class and a Tailwind utility have identical specificity, so whichever loads last wins. Putting them in the layer means utilities always win, which is what you want when you reach for one.

**Sizing with `clamp()` rather than breakpoints.** The shell, the section padding, the display type, and the experience card all interpolate between a floor and a ceiling. Fewer breakpoints means fewer places for the layout to jump, and a ceiling is what stops a text column from stretching past a readable measure on a wide screen.

**React Aria for the one interactive component.** The resume modal is the only real widget on the site. Focus trapping, escape handling, scroll locking, and the labelling relationship between the dialog and its heading are all things I would have got subtly wrong by hand.

**Motion that yields.** There are three animations: a node mesh behind the hero, a highlight that travels across the headlines, and a light orbiting the "new" badge. The mesh pauses when it scrolls out of view and paints a single static frame under `prefers-reduced-motion`; the others are covered by a reduced-motion block that neutralises them globally. Nothing animates that a visitor cannot opt out of.

**Contrast checked against the surface, not the page.** Type sits on three different grounds here. A token verified against the darkest one is not automatically safe on a lighter card, which is exactly how a label ended up at 4.44:1 on the experience surface while passing everywhere else.

---

## Challenges faced

**Images that would not fit their frames.** The project screenshots are all 2560x1230, but the card was `aspect-16/10`, so `object-cover` was quietly trimming about 11% off each side. Setting the box to the screenshots' own ratio meant `object-cover` could fill it and crop nothing. The overview portrait had the opposite problem: it is portrait, and it sat in a fixed-height box that showed 27% of it.

**A phantom gap that moved between breakpoints.** An offset heading was positioned with an empty spacer `div` in a grid. Below the breakpoint the grid collapsed to one column, and the spacer became a zero-height row that still paid the row gap, pushing the heading down by an extra 48px. Positioning with `col-start` instead of an empty element removed both the gap and the element.

**Percentages that travel backwards.** The highlight sweeping across the hero ran the wrong way. When `background-size` is larger than the element, the offset resolves to `(container - image) * position`, and that term is negative, so a percentage moves the image opposite to the number. The fix was counting down instead of up.

**A highlight with no headroom.** Once the headline went back to solid bone, the sweep vanished. Bone is already 244 of 255, so a white band can only add about 4% luminance. It reads now because the band carries a slight darkening on either side of its core, and it is that dip against the peak that the eye registers as a highlight.

**Filling a column without knowing its height.** The timeline sits beside a portrait whose height depends on the viewport. Rather than guessing, it uses `justify-between` inside a growing flex column, so it distributes across whatever height the image sets. When the entries later grew long enough to consume the column, the gap had to become a floor rather than the spacing, or they touched.

---

## What I learned, and what I want to improve

**A design system is mostly decisions about where things live.** Most of the work was not choosing colours. It was deciding that colours belong in tokens, that structure belongs in hairlines, that a repeated motif belongs in a component, and then not breaking those rules when something was faster to do inline.

**Duplication is where facts drift apart.** The same role was written into two places and they disagreed within a fortnight. Anything stated twice will eventually be stated differently.

**Accessibility is measurable, so measure it.** Contrast is arithmetic, not taste. Every text style on the page was checked against the surface it actually renders on, and two of them failed on a surface they had never been checked against.

**Animation is cheap to add and expensive to get right.** Three small animations took more iterations than the entire layout.

What I'd do differently next time:

- **Decide the image pipeline before collecting images.** Three project screenshots are still PNGs totalling roughly 4MB, which is most of the deployed weight. Converting one image to WebP took it from 1.4MB to 45KB. Deciding on a format and a target size before adding the first screenshot would have avoided a retrofit.

- **Write the copy before designing around it.** Several layout problems were really copy problems: a heading that squished around a hyphen, a timeline entry that outgrew its column, a paragraph that ran 112 characters per line. Fixing type after the words change is a different job than choosing type to fit them.

- **Check contrast at the token level, against every surface.** The tokens were verified once, against the page background, and then surfaces were added underneath them.

- **No tests.** There is no automated check that the anchors resolve, that every project renders, or that the modal opens. On a site this size that is a defensible trade, but "defensible" is doing some work in that sentence.

---

## What AI tooling helped with

I used [Claude Code](https://claude.com/claude-code) for a visual overhaul, on a branch and merged by pull request.

**The overhaul was a re-skin, not a rebuild.** The brief was a design reference and one constraint: keep the mechanics. The sticky header, the anchor navigation, the native smooth scrolling, and the React Aria resume modal all came through unchanged, because those were working and the problem was the surface. What changed was the design language underneath them, from ad-hoc utility classes to a documented token system with a type scale, hairline structure, and reusable component classes. The section order, the navigation model, and the content hierarchy from the first version were carried over deliberately: the previous design's UX decisions were sound, and re-deciding them would have made the diff impossible to review.

It also caught things I had not gone looking for. A project image path was relative, so it broke anywhere but the root. The mobile navigation overflowed the viewport. `scroll-padding-top` did not clear the sticky header, so anchored sections landed underneath it. The resume modal duplicated its own markup in the header. A colour token failed WCAG AA on a card surface. Every rendered text node on the page now clears AA, which was not true before.

**The project card hover states.** The subtle hover behaviour on the project cards came out of the same pass: the card lifts slightly and its border brightens, the screenshot desaturates back toward colour, and the technology tags pick up the accent. Each is a small transition on its own, but they are timed and eased together so the card responds as one object rather than four independent effects firing at once.

The tool did the sweep. The direction, and roughly forty rounds of "that is not quite right, try this instead," stayed mine, which is most of what the commit history after the merge actually is.

---

Built by [Joshua M.](https://github.com/JoshuaM04)
