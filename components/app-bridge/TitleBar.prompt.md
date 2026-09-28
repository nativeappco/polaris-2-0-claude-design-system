App Bridge <ui-title-bar>: the admin-rendered page title bar with primary/secondary actions; renders a Polaris preview outside the admin.

```jsx
<TitleBar title="Bundles" primaryAction={{ label: 'Create bundle' }} secondaryActions={[{ label: 'Import' }]} />
```

Production HTML (App Bridge, rendered by the admin):

```html
<ui-title-bar title="Bundles">
  <button variant="primary">Create bundle</button>
  <button>Import</button>
</ui-title-bar>
```
