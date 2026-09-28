App Bridge <ui-nav-menu>: declares the app's navigation links, which the admin renders in its sidebar (renders nothing in the iframe).

```jsx
<NavMenu items={[{ label: 'Home', href: '/app' }, { label: 'Bundles', href: '/app/bundles' }, { label: 'Settings', href: '/app/settings' }]} />
```

Production HTML (App Bridge, rendered by the admin):

```html
<ui-nav-menu>
  <a href="/app" rel="home">Home</a>
  <a href="/app/settings">Settings</a>
</ui-nav-menu>
```
