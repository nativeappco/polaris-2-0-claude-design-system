Outer wrapper of every route: page heading, primary/secondary/breadcrumb actions and an aside column.

```jsx
<Page heading="Bundles">…sections…</Page>
```

Renders `<s-page>`. Props (camelCase → lowercase attribute): inlineSize, heading.
Slots: (default), aside, primary-action, secondary-actions, breadcrumb-actions, supplemental-start. Events: none.
Plain-HTML equivalent (preferred in production): `<s-page heading="Bundles">…</s-page>`.

Breadcrumb: the runtime only accepts `s-link` in `breadcrumb-actions` — `<Link slot="breadcrumb-actions" href="/app/bundles">Bundles</Link>`. (The reference page-patterns.html uses an s-button there; the runtime rejects it.)
