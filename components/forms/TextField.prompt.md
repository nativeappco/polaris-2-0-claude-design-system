Single-line text input with label, details and error.

```jsx
<TextField label="Bundle name" details="Shown to customers"></TextField>
```

Renders `<s-text-field>`. Props (camelCase → lowercase attribute): id, disabled, name, value, details, error, label, required, labelAccessibilityVisibility, defaultValue, placeholder, readOnly, autocomplete, icon….
Slots: accessory, error, details. Events: input, change, focus, blur.
Plain-HTML equivalent (preferred in production): `<s-text-field label="Bundle name" details="Shown to customers">…</s-text-field>`.
