Data table for lists of records, with filters slot, pagination and a list variant for narrow widths.

```jsx
<Table paginate hasNextPage>…</Table>
```

Renders `<s-table>`. Props (camelCase → lowercase attribute): variant, loading, paginate, hasPreviousPage, hasNextPage.
Slots: (default), filters. Events: nextpage, previouspage.
Plain-HTML equivalent (preferred in production): `<s-table paginate hasnextpage>…</s-table>`.
