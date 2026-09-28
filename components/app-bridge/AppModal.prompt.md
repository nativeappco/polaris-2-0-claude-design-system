Modal that escapes the app iframe: App Bridge <ui-modal> inside the admin, Polaris <s-modal> fallback elsewhere; controlled via open/onHide.

```jsx
<AppModal id="delete" heading="Delete bundle?" open={open} onHide={() => setOpen(false)}
  primaryAction={{ label: 'Delete', tone: 'critical', onClick: remove }}
  secondaryActions={[{ label: 'Cancel', onClick: () => setOpen(false) }]}>
  <Paragraph>This can't be undone.</Paragraph>
</AppModal>
```

Production HTML (App Bridge, rendered by the admin):

```html
<ui-modal id="delete">
  <p>This can't be undone.</p>
  <ui-title-bar title="Delete bundle?">
    <button variant="primary" tone="critical">Delete</button>
    <button onclick="shopify.modal.hide('delete')">Cancel</button>
  </ui-title-bar>
</ui-modal>
```
