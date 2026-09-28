(() => {
  const { Page, Section, Stack, Badge, Button, Link, Text, Paragraph, Table, TableHeaderRow, TableHeader, TableBody, TableRow, TableCell, SearchField, ClickableChip, Thumbnail, EmptyState, Popover, Menu } = window.Polaris20AppHomeDesignSystem_b76c1a;
  const D = window.KitData;
  const tone = (s) => (s === 'Active' ? 'success' : s === 'Draft' ? 'info' : undefined);
  const FILTERS = ['All', 'Active', 'Draft', 'Archived'];

  function BundlesScreen({ onNavigate }) {
    const [filter, setFilter] = React.useState('All');
    const [q, setQ] = React.useState('');
    const [empty, setEmpty] = React.useState(false);
    const rows = empty ? [] : D.bundles.filter((b) => (filter === 'All' || b.status === filter) && b.title.toLowerCase().includes(q.toLowerCase()));
    return (
      <Page heading="Bundles" inlineSize="large">
        <Button slot="primary-action" variant="primary" onClick={() => onNavigate('edit')}>Create bundle</Button>
        <Button slot="secondary-actions">Import</Button>
        <Button slot="secondary-actions">Export</Button>
        <Button slot="secondary-actions" onClick={() => setEmpty(!empty)}>{empty ? 'Show sample data' : 'Show empty state'}</Button>
        {empty ? (
          <Section>
            <EmptyState heading="No bundles yet">
              <Paragraph slot="subheading">Group products into a bundle and sell them as a single product.</Paragraph>
              <Button slot="primary-action" variant="primary" onClick={() => onNavigate('edit')}>Create bundle</Button>
              <Button slot="secondary-actions">Learn more</Button>
            </EmptyState>
          </Section>
        ) : (
          <Section padding="none">
            <Table paginate hasNextPage>
              <Stack slot="filters" gap="small-200">
                <SearchField label="Search bundles" labelAccessibilityVisibility="exclusive" placeholder="Search and filter" onInput={(e) => setQ(e.target.value || '')}></SearchField>
                <Stack direction="inline" gap="small-300">
                  {FILTERS.map((f) => <ClickableChip key={f} color={filter === f ? 'strong' : 'base'} onClick={() => setFilter(f)}>{f}</ClickableChip>)}
                </Stack>
              </Stack>
              <TableHeaderRow>
                <TableHeader listSlot="primary">Bundle</TableHeader>
                <TableHeader listSlot="inline">Status</TableHeader>
                <TableHeader listSlot="labeled" format="numeric">Products</TableHeader>
                <TableHeader listSlot="labeled" format="currency">Price</TableHeader>
                <TableHeader listSlot="labeled" format="numeric">Sales</TableHeader>
                <TableHeader listSlot="secondary">Updated</TableHeader>
              </TableHeaderRow>
              <TableBody>
                {rows.map((b) => (
                  <TableRow key={b.id} clickDelegate={'lnk-' + b.id}>
                    <TableCell>
                      <Stack direction="inline" gap="small-100" alignItems="center">
                        <Thumbnail size="small-200" alt=""></Thumbnail>
                        <Link id={'lnk-' + b.id} onClick={() => onNavigate('edit')}>{b.title}</Link>
                      </Stack>
                    </TableCell>
                    <TableCell><Badge tone={tone(b.status)}>{b.status}</Badge></TableCell>
                    <TableCell>{b.products}</TableCell>
                    <TableCell>${b.price}</TableCell>
                    <TableCell>{b.sales}</TableCell>
                    <TableCell>{b.updated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Section>
        )}
      </Page>
    );
  }
  window.BundlesScreen = BundlesScreen;
})();
