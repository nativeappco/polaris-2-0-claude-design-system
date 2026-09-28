Page- or section-level status message with tone, heading and actions.

```jsx
<Banner tone="warning" heading="7 days left in your trial">Upgrade to keep the widget active.</Banner>
```

Renders `<s-banner>`. Props (camelCase → lowercase attribute): tone, heading, dismissible, hidden.
Slots: (default), secondary-actions. Events: dismiss, afterhide.
Plain-HTML equivalent (preferred in production): `<s-banner tone="warning" heading="7 days left in your trial">…</s-banner>`.
