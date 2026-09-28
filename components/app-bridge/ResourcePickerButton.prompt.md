Button that opens the App Bridge Resource Picker (shopify.resourcePicker) for products, variants or collections; simulated with Polaris outside the admin.

```jsx
<ResourcePickerButton type="product" label="Browse" onSelect={(items) => setProducts(items)} />
```

Production HTML (App Bridge, rendered by the admin):

```html
<s-button onclick="shopify.resourcePicker({ type: 'product', multiple: true })">Browse</s-button>
```
