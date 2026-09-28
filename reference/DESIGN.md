# DESIGN.md: Polaris 2.0 (Shopify admin, App Home)

## 1. Visual theme and atmosphere
Embedded Shopify app UI that is indistinguishable from the Shopify admin. Calm, dense-but-breathable, utilitarian. The app never has its own brand look; it inherits the Shopify admin's new visual style (rolled out from September 2026): refreshed neutrals, typography, spacing and icons. Merchants should feel they never left the admin.

## 2. Color palette and roles
Never hard-code colors. Colors come from Polaris tokens applied through component attributes:
- Surfaces: `s-box`/`s-section` `background` values (`base`, `subdued`, `strong`, `transparent`).
- Semantic tones on `s-badge`, `s-banner`, `s-text`, `s-button`, `s-icon`: `info`, `success`, `warning`, `critical`, `caution`, `neutral`, `auto`.
- Badge colors: `base`, `strong`; button tones: `auto`, `neutral`, `critical`.
- Text color roles: `base`, `subdued`.

## 3. Typography rules
Only `s-heading`, `s-paragraph`, `s-text`, `s-number`. Sizes via `fontsize` (`small`, `base`, `medium`, `large`, `large-100`… as typed in `types/polaris.d.ts`), weights via `fontweight` (`regular`, `medium`, `semibold`, `bold`). Headings are sentence case. No custom fonts; the system font stack is provided by Polaris.

## 4. Component stylings
All components are the `s-*` custom elements listed in `COMPONENTS.md`. Key ones:
- Page chrome: `s-page` (heading, `primary-action`, `secondary-actions`, `breadcrumb-actions`, `aside` slots) or App Bridge `ui-title-bar`.
- Content grouping: `s-section` (heading, subheading, `primary-action`, `secondary-actions`, `accessory`, `supplemental` slots). Sections replace "cards".
- Layout: `s-stack` (direction `block`/`inline`, `gap`), `s-grid` + `s-grid-item`, `s-box`, `s-divider`, `s-query-container` for container queries, `s-scroll-box`.
- Actions: `s-button` (`variant`: `primary`, `secondary`, `tertiary`, `auto`; `tone`; `icon`; `loading`), `s-button-group`, `s-press-button`, `s-link`, `s-clickable`, `s-menu` (inside `s-popover`).
- Data: `s-table` with `s-table-header-row`, `s-table-header`, `s-table-body`, `s-table-row`, `s-table-cell`; `variant`, `loading`, `paginate`, `filters` slot.
- Forms: `s-text-field`, `s-text-area`, `s-number-field`, `s-money-field`, `s-email-field`, `s-url-field`, `s-password-field`, `s-search-field`, `s-date-field`, `s-date-picker`, `s-color-field`, `s-color-picker`, `s-select` + `s-option` + `s-option-group`, `s-checkbox`, `s-switch`, `s-choice-list` + `s-choice`, `s-drop-zone`. Every field has a `label`; use `details` for help text and `error` for validation text.
- Feedback: `s-banner` (tone, heading, dismissible), `s-badge`, `s-progress`, `s-spinner`, `s-empty-state` (heading, `subheading`, `graphic`, `primary-action`, `secondary-actions`).
- Overlays: `s-modal` (size, heading, `primary-action`, `secondary-actions`) triggered via `command`/`commandfor`; `s-popover`; `s-tooltip`.
- Media: `s-thumbnail`, `s-avatar`, `s-image`, `s-icon`.
- Chips: `s-chip`, `s-clickable-chip`.
- App Bridge (not Polaris but standard in App Home): `ui-nav-menu` for app navigation, `ui-title-bar` for the page title bar, `ui-save-bar` for unsaved changes, `ui-modal` for modals that must escape the iframe, `shopify.resourcePicker()` for choosing products, variants and collections.

## 5. Layout principles
- One `s-page` per route. Content is a `s-stack` or `s-grid` of `s-section`s.
- Two-column detail layouts use `s-page`'s default slot for main content and `aside` for the sidebar.
- Spacing only through `gap` and `padding` attributes with token values (`none`, `small-300`… `base` … `large-300`).
- Forms are vertical stacks; related short fields may sit inline with `s-grid`.
- Tables for lists of records with actions; empty states for zero records.

## 6. Depth and elevation
No custom shadows or borders. Elevation is expressed only by `s-section`, `s-modal`, `s-popover` and `s-box` `border`/`background` attributes.

## 7. Do's and don'ts
Do:
- Use `s-section` headings and primary/secondary action slots for section-level actions.
- Use `s-banner` for page-level status and `s-badge` for record status (Active, Draft, Archived).
- Use `s-empty-state` with a clear primary action.
- Use `ui-save-bar` for unsaved changes; disable Save until dirty.
- Write sentence case; button labels are verbs ("Create bundle", "Save", "Verify").
Don't:
- Don't use Polaris React (`@shopify/polaris`), Tailwind, Material, shadcn, or custom CSS classes.
- Don't invent components (no custom cards, custom dropdowns, custom pickers, custom tabs styling).
- Don't hard-code hex colors, pixel spacing, font families or box shadows.
- Don't build a product/collection picker; use the App Bridge Resource Picker.

## 8. Responsive behavior
Every screen works at desktop and at 375px. `s-grid` collapses to one column on narrow widths; `s-query-container` enables container queries. `s-page` `inlinesize` may be `base` or `large`. Fixed-bottom UI must respect `var(--shopify-safe-area-inset-bottom, 0px)`.

## 9. Agent prompt guide
When generating UI for this system:
1. Output HTML using only the tags in `COMPONENTS.md` plus the App Bridge `ui-*` elements.
2. Load the runtime with `<script src="https://cdn.shopify.com/shopifycloud/polaris-2.0-rc.js"></script>`.
3. Attach a component map per screen naming the `s-*`/`ui-*` element for each region.
4. If a requirement cannot be met with these elements, compose existing ones and say so explicitly instead of styling a `div`.
