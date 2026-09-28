# Polaris 2.0 · App Home design system

Design system for **embedded Shopify apps** (App Home) built with **Polaris 2.0 web components** (`s-*` custom elements) in the **new Shopify admin visual style (September 2026)**, plus the App Bridge elements `ui-nav-menu`, `ui-title-bar`, `ui-save-bar`, `ui-modal` and the Resource Picker.

The goal of every screen: the merchant should feel they never left the Shopify admin. An app has no brand look of its own; it inherits the admin's.

## Sources
- Attached codebase `polaris2-reference/` (read-only): `README.md`, `DESIGN.md`, `COMPONENTS.md`, `types/polaris.d.ts`, `types/custom-elements.json` (`@shopify/polaris-types@2.0.0-rc.0`), `examples/kitchen-sink.html`, `examples/page-patterns.html`. Copies live in `reference/`.
- Runtime: `https://cdn.shopify.com/shopifycloud/polaris-2.0-rc.js`. **All token values in `tokens/` were computed from this runtime** (its shadow-DOM styles resolve to the "admin-next" theme), not guessed.
- Official docs: https://shopify.dev/docs/api/app-home/v2.0-rc/web-components · migration: https://shopify.dev/docs/apps/build/app-home/polaris2
- Seven admin screenshots (Settings › Payments, Apps, Notifications, Domains, Customer privacy; Home; Products) in `uploads/` — used for the host chrome and layout rhythm only.

## How this system works
The runtime **is** the component library. The React components here are thin wrappers (`components/core/PolarisElement.jsx`) that render the real `s-*` element, lowercase camelCase props into attributes (`inlineSize` → `inlinesize`) and bind `onX` props to native events. Importing any component injects the runtime script once. In production, write plain HTML `s-*` tags and load the script in `<head>`.

Rules (from `DESIGN.md`):
- Only `s-*` components + App Bridge `ui-*`. Never Polaris React (`@shopify/polaris`), Tailwind, Material, shadcn or custom-styled components.
- **No custom CSS for color, spacing, type, radius or shadow.** Use component attributes (`gap="base"`, `tone="critical"`, `background="subdued"`). The `--p-*` tokens document what those keywords resolve to; they are for specimens and host-chrome mocks only.
- Don't build pickers, tabs, dropdowns or cards by hand. Products/collections come from `shopify.resourcePicker()`.
- Every screen works at desktop and 375px.

---

## CONTENT FUNDAMENTALS
- **Sentence case everywhere**: page titles, section headings, buttons, badges, menu items. "Customer privacy", "Add product", "Buy new domain" — never Title Case.
- **Shopify admin vocabulary**: products, variants, collections, orders, customers, inventory, sales channels, markets, theme, app embed, storefront, checkout, metafields. Say "store", not "shop"; "merchant" only in docs, never in UI (address the merchant as *you*).
- **Voice**: second person, plain, calm, factual. The admin speaks as "you/your store" ("The email your store uses to send and receive emails from your customers"). The app never says "I" or "we" in UI chrome; "we" is acceptable in onboarding copy sparingly.
- **Buttons are verbs** (+ object when ambiguous): "Save", "Add", "Disable", "Turn on", "Verify", "Create bundle", "Connect existing". One primary per page/section.
- **Headings are nouns**: "Sender email", "Privacy settings", "Additional payment providers".
- **Descriptions are one line, no period** when a fragment: "Notify customers about order and account events". Full sentences take a period in banners and paragraphs.
- **Status badges are single adjectives**: Active, Draft, Archived, Inactive, Connected, Enabled, Recommended, Primary.
- **Banners**: heading states the situation ("Development stores can only process test payments"); body says what to do; one action ("Turn on").
- **Numbers**: currency with code where ambiguous ("$4.99 USD every 30 days", "A$0.00"); dates like "Aug 27–Sep 25, 2026" or "26 Sep"; en dash for ranges; "·" / "•" as inline separator ("No transaction fees • Card rates starting at 1.35% + $0.30").
- **No emoji**, no exclamation marks except the Home greeting ("Good morning!"). No marketing superlatives inside the app.
- **Empty states**: heading "No bundles yet", one sentence of why, one primary action.

## VISUAL FOUNDATIONS
- **Overall vibe**: monochrome, quiet, dense-but-breathable. Near-black on white; color appears only as semantic tone (badges, banners, icons). New admin style = white page (`--p-color-bg: #fff`), sections as floating white panels with a soft ring shadow, pill-shaped actions.
- **Color**: text `#101010`, secondary `#4a4a4a`, tertiary `#606060`; borders `#ddd`; subdued surface `#f7f7f7`; strong `#f2f2f2`. **Primary buttons are near-black (`#101010`)**, not green. Link blue `#0048e3`, focus ring `#4680ff`. Tones: info cyan (`#d0f6ff` surface / `#7de3fe` badge), success lime (`#e6fdd4` / `#aafb6a`), caution yellow (`#ffefcc` / `#ffdc72`), warning orange (`#ffeddb` / `#ffbf80`), critical red (`#ffe7e6` / `#ffd0cc`, accent `#de0004`). Badges use the *saturated* fill ("Active" is bright lime `#aafb6a`), banners the pale surface.
- **Type**: ShopifyInter (variable Inter with ss03 + cv alternates). Page title 29/36 weight 500, −2% tracking. Section heading 15/22 medium. Body 13/20. Labels 13 medium; button labels 12 medium; details 12. Only weights 400/500/600 (bold = 600).
- **Spacing**: keyword scale — small-500 2, small-400 4, small-300 6, small-200 8, small-100/small 12, base 16, large 20, large-200 24, large-300 32, large-400 40, large-500 48 (px). Section padding 16; field gap 16; section-to-section ≈ 20–32.
- **Layout**: `s-page` centers content (~1000px `base`, wider `large`), page title top-left of the column, optional `aside` column. Admin chrome (dark sidebar + app title bar) is supplied by the host, not the app.
- **Cards → sections**: `s-section` is white, **20px radius** (`--p-border-radius-container`), no visible border; elevation is a 2px low-opacity ring + faint 12–48px blurs (`--p-shadow-section`). Section heading sits *outside/above* the panel at top level (see Notifications, Payments). Nested sections/boxes use subdued `#f7f7f7` fills and 12px radius, or 1px `#ddd` hairline rows.
- **Corner radii**: sections 20, dialogs 24, popovers 16, banners inner 16, controls/inputs 12, option items 12, badges/tags 8, checkboxes 4, **buttons and actions fully pill-shaped**. Corner shape uses `superellipse(1.333)` where supported (squircle).
- **Shadows**: section/container/banner share the soft ring; popover and dialog step up; primary buttons get an inner glow (inset white highlight on black); inputs have a 1px ring + tiny drop; no hard drop shadows anywhere.
- **Borders**: 1px `#ddd` hairlines for rows and outline inputs; dividers between list rows inside sections; no colored left-border accents.
- **Backgrounds**: flat white/grey. No gradients except the subtle radial highlight inside primary buttons. No textures or patterns in app UI. Imagery appears only as product thumbnails and empty-state graphics (the admin Home uses soft 3D renders; apps should not imitate).
- **Hover**: secondary buttons darken fill (`#ebebeb` → `#e3e3e3`), tertiary gain a transparent fill (`#0000000d`); rows get subdued fill. **Press**: slightly darker fill + inset shadow (`--p-shadow-button-inset`); no scale transforms.
- **Focus**: 2px blue ring `#4680ff` (`--p-color-border-focus`), inputs glow with a blue ring + faint blue inner shadow.
- **Motion**: short and functional — 100–250ms, `ease` / `ease-out` `cubic-bezier(.19,.91,.38,1)`; modals/popovers fade + small translate (appear-above/below); spinners linear. No bounces in app UI.
- **Transparency/blur**: only the modal backdrop (`#000000b5`) and transparent fills for tertiary controls. No glassmorphism.
- **Dark surfaces**: only the admin navigation (`#0a0a0a`) and save bar. App content is always light.

## ICONOGRAPHY
- **Polaris admin icon set** (560 glyphs, 20px, 1.5px-ish monoline stroke, rounded joins, with a few `-filled` variants). Rendered by `<s-icon type="…">` and by the `icon` attribute on buttons, badges, text fields and selects. The runtime fetches each SVG from `https://cdn.shopify.com/shopifycloud/admin-ui-foundations/icons/<hash>.svg` and inlines it.
- `assets/icons/icon-map.json` lists every valid name → CDN URL (e.g. `product`, `order`, `home`, `settings`, `apps`, `check-circle`, `alert-triangle`). Note it's `product`, not `products`.
- The SVGs could not be copied into the project (the CDN blocks cross-origin reads from this sandbox), so icons are **linked from Shopify's CDN** through the runtime. Never hand-draw icons.
- Icon color follows `color` (`base` / `subdued`) or `tone`. Sizes: `base` 20px, `small` 16px.
- **No emoji. No unicode glyphs as icons** (use `check`, `chevron-right`, `x` icons). The "✓" checklist on the Payments screenshot is admin-internal; in apps use `s-unordered-list` or `s-icon type="check"`.
- **Logo**: none provided and none should be drawn. Apps never show a logo in the iframe; the admin frame shows the Shopify mark and the app icon from the Partner Dashboard.

## Intentional additions
- `PolarisElement` — generic renderer; the bridge that lets React render any `s-*`/`ui-*` tag.
- `NumberText` — the wrapper for `<s-number>` (named to avoid shadowing JavaScript's global `Number`).
- `TitleBar`, `SaveBar`, `NavMenu`, `AppModal`, `ResourcePickerButton` — App Bridge wrappers. Outside the admin, TitleBar/SaveBar render a *preview* of the host chrome, AppModal falls back to `s-modal`, and the picker opens a Polaris-built simulation, so prototypes stay clickable.
- `ui_kits/app-home/AdminFrame.jsx` — mock of the Shopify admin host (dark sidebar, app title bar) for prototypes. Host chrome only; never ship it.

---

## Index
- `styles.css` — entry point (imports only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css` (+ border widths), `shadows.css`, `motion.css`, `breakpoints.css`, `zindex.css`, `sizing.css`, `attribute-scales.css` (keyword → value maps + semantic aliases).
- `assets/fonts/` — ShopifyInter variable (latin, latin-ext). `assets/icons/icon-map.json` — 560 icon names.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Radius, Shadows, Motion, Brand).
- `components/` — React wrappers, one `.jsx` + `.d.ts` + `.prompt.md` each, one card per folder.
- `ui_kits/app-home/` — embedded-app recreation (dashboard, list, detail/edit, settings, onboarding).
- `reference/` — copies of the source docs, types and examples.
- `SKILL.md` — agent-skill entry point.

### Components
- **actions**: Button, ButtonGroup, PressButton, Link, Clickable, Menu
- **layout**: Page, Section, Stack, Grid, GridItem, Box, Divider, QueryContainer, ScrollBox
- **typography**: Heading, Paragraph, Text, NumberText, OrderedList, UnorderedList, ListItem
- **forms**: TextField, TextArea, NumberField, MoneyField, EmailField, UrlField, PasswordField, SearchField, DateField, DatePicker, ColorField, ColorPicker, Select, Option, OptionGroup, Checkbox, Switch, ChoiceList, Choice, DropZone
- **feedback**: Banner, Badge, Progress, Spinner, EmptyState
- **overlays**: Modal, Popover, Tooltip
- **media**: Avatar, Thumbnail, Image, Icon
- **chips**: Chip, ClickableChip
- **table**: Table, TableHeaderRow, TableHeader, TableBody, TableRow, TableCell
- **app-bridge**: TitleBar, SaveBar, NavMenu, AppModal, ResourcePickerButton
- **core**: PolarisElement

### UI kits
- `ui_kits/app-home/index.html` — "Bundles" sample app inside a mocked admin frame: Home, Bundles list, Bundle editor (save bar, resource picker, delete modal), Settings, Setup guide.
