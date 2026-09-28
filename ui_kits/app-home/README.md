# App Home UI kit — Bundle Factory (sample embedded app)

Click-through recreation of a typical embedded app inside a **mocked Shopify admin frame**.

- `index.html` — entry; routes between screens (persisted in localStorage `kit-route`).
- `AdminFrame.jsx` — host chrome mock (dark admin sidebar with the app's `ui-nav-menu` links under Apps, white rounded canvas, mobile drawer < 768px). Styled with tokens in `index.html` because it imitates the admin, not app UI.
- `HomeScreen.jsx` — trial banner, setup guide with progress, stat sections in a container-query grid, recent bundles table.
- `BundlesScreen.jsx` — index table with search + filter chips, badges, thumbnails, pagination; toggle to the empty state.
- `BundleEditScreen.jsx` — detail page: breadcrumb, Details/Products/Pricing sections, aside Status/Summary, `SaveBar` when dirty, `ResourcePickerButton`, delete `AppModal`.
- `SettingsScreen.jsx` — switches, select, color/email fields, link rows (from the admin Notifications/Privacy pattern), critical action.
- `SetupScreen.jsx` — onboarding stepper from `reference/examples/page-patterns.html` pattern 3.
- `data.js` — sample bundles/products (product names from the admin Products screenshot).

App screens use only the design-system wrappers (`s-*` underneath). Everything reflows at 375px: grids use `@container (inline-size > …)` values inside `s-query-container`, tables use `listSlot` for the mobile list layout.
