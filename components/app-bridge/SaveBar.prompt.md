App Bridge <ui-save-bar>: contextual save bar shown while a form has unsaved changes; renders a preview of the admin bar outside the admin.

```jsx
<SaveBar open={dirty} onSave={save} onDiscard={reset} />
```

Production HTML (App Bridge, rendered by the admin):

```html
<ui-save-bar id="save-bar">
  <button variant="primary">Save</button>
  <button>Discard</button>
</ui-save-bar>
<script>shopify.saveBar.show('save-bar')</script>
```
