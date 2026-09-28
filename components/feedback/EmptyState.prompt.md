Zero-records state with heading, subheading, graphic and a primary action.

```jsx
<EmptyState heading="No bundles yet"><Paragraph slot="subheading">Create your first bundle.</Paragraph></EmptyState>
```

Renders `<s-empty-state>`. Props (camelCase → lowercase attribute): heading.
Slots: primary-action, secondary-actions, graphic, subheading. Events: none.
Plain-HTML equivalent (preferred in production): `<s-empty-state heading="No bundles yet">…</s-empty-state>`.
