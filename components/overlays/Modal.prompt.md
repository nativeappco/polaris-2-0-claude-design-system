Dialog that interrupts the flow for a focused task or confirmation; opened via command/commandfor.

```jsx
<Modal id="delete-modal" heading="Delete bundle?">…</Modal>
```

Renders `<s-modal>`. Props (camelCase → lowercase attribute): size, heading, accessibilityLabel, padding, hideOverlay, showOverlay, toggleOverlay.
Slots: (default), primary-action, secondary-actions. Events: hide, show, afterhide, aftershow.
Plain-HTML equivalent (preferred in production): `<s-modal id="delete-modal" heading="Delete bundle?">…</s-modal>`.
