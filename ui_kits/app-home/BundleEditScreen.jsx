(() => {
  const { Link, Page, Section, Stack, Grid, Badge, Button, Text, Paragraph, TextField, TextArea, NumberField, MoneyField, Select, Option, ChoiceList, Choice, Checkbox, Thumbnail, Divider, SaveBar, AppModal, ResourcePickerButton, QueryContainer, Banner } = window.Polaris20AppHomeDesignSystem_b76c1a;
  const D = window.KitData;
  const INITIAL = { title: 'Summer gift set', description: 'Three bestsellers, one price.', status: 'active', discount: 'percentage', amount: '15', minItems: '2', showOnProduct: true, products: D.products.slice(0, 3) };

  function BundleEditScreen({ onNavigate, onToast }) {
    const [form, setForm] = React.useState(INITIAL);
    const [saved, setSaved] = React.useState(INITIAL);
    const [saving, setSaving] = React.useState(false);
    const [confirm, setConfirm] = React.useState(false);
    const dirty = JSON.stringify(form) !== JSON.stringify(saved);
    const set = (k) => (e) => { const v = e.target.value; setForm((f) => ({ ...f, [k]: v })); };
    const save = () => { setSaving(true); setTimeout(() => { setSaved(form); setSaving(false); onToast('Bundle saved'); }, 700); };
    const titleError = form.title.trim() ? undefined : 'Title is required';
    return (
      <Page heading={form.title || 'Untitled bundle'} inlineSize="base">
        <Link slot="breadcrumb-actions" onClick={() => onNavigate('bundles')}>Bundles</Link>
        <Button slot="secondary-actions">Duplicate</Button>
        <Button slot="secondary-actions" tone="critical" onClick={() => setConfirm(true)}>Delete</Button>
        <SaveBar open={dirty} saving={saving} onSave={save} onDiscard={() => setForm(saved)} />
        <Stack gap="large">
          <Section heading="Details">
            <Stack gap="base">
              <TextField label="Title" value={form.title} error={titleError} maxLength="70" onInput={set('title')}></TextField>
              <TextArea label="Description" rows="3" value={form.description} details="Shown on the bundle product page" onInput={set('description')}></TextArea>
            </Stack>
          </Section>
          <Section heading="Products">
            <ResourcePickerButton slot="secondary-actions" variant="tertiary" label="Browse" sampleItems={D.products}
              onSelect={(items) => setForm((f) => ({ ...f, products: [...f.products, ...items.filter((i) => !f.products.some((p) => p.id === i.id))] }))} />
            {form.products.length ? (
              <Stack gap="none">
                {form.products.map((p, i) => (
                  <React.Fragment key={p.id}>
                    {i ? <Divider></Divider> : null}
                    <Stack direction="inline" gap="small-100" alignItems="center" justifyContent="space-between" paddingBlock="small-200">
                      <Stack direction="inline" gap="small-100" alignItems="center">
                        <Thumbnail size="small" alt=""></Thumbnail>
                        <Stack gap="none"><Text>{p.title}</Text><Text color="subdued">{p.inventory}</Text></Stack>
                      </Stack>
                      <Button variant="tertiary" icon="x" accessibilityLabel={'Remove ' + p.title} onClick={() => setForm((f) => ({ ...f, products: f.products.filter((x) => x.id !== p.id) }))}></Button>
                    </Stack>
                  </React.Fragment>
                ))}
              </Stack>
            ) : <Paragraph color="subdued">Add at least two products to create a bundle.</Paragraph>}
          </Section>
          <Section heading="Pricing">
            <Stack gap="base">
              <ChoiceList label="Discount type" name="discount" values={[form.discount]} onChange={(e) => setForm((f) => ({ ...f, discount: (e.target.values || [])[0] || f.discount }))}>
                <Choice value="percentage" selected={form.discount === 'percentage'}>Percentage</Choice>
                <Choice value="fixed" selected={form.discount === 'fixed'}>Fixed amount</Choice>
                <Choice value="none" selected={form.discount === 'none'}>No discount</Choice>
              </ChoiceList>
              <QueryContainer>
                <Grid gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr, 1fr" gap="base">
                  {form.discount === 'fixed'
                    ? <MoneyField label="Discount amount" currencyCode="USD" value={form.amount} onInput={set('amount')}></MoneyField>
                    : <NumberField label="Discount" suffix="%" min="0" max="100" value={form.amount} disabled={form.discount === 'none'} onInput={set('amount')}></NumberField>}
                  <NumberField label="Minimum items" min="1" max="10" value={form.minItems} onInput={set('minItems')}></NumberField>
                </Grid>
              </QueryContainer>
              <Checkbox label="Show bundle offer on product pages" checked={form.showOnProduct} onChange={(e) => setForm((f) => ({ ...f, showOnProduct: e.target.checked }))}></Checkbox>
            </Stack>
          </Section>
        </Stack>
        <Section slot="aside" heading="Status">
          <Select label="Status" labelAccessibilityVisibility="exclusive" value={form.status} onChange={set('status')}>
            <Option value="active">Active</Option>
            <Option value="draft">Draft</Option>
            <Option value="archived">Archived</Option>
          </Select>
        </Section>
        <Section slot="aside" heading="Summary">
          <Stack gap="small-200">
            <Text>{form.products.length} products</Text>
            <Text color="subdued">{form.discount === 'none' ? 'No discount' : form.discount === 'fixed' ? '$' + form.amount + ' off' : form.amount + '% off'} · minimum {form.minItems} items</Text>
            <Badge tone={form.status === 'active' ? 'success' : form.status === 'draft' ? 'info' : undefined}>{form.status[0].toUpperCase() + form.status.slice(1)}</Badge>
          </Stack>
        </Section>
        <AppModal id="delete-bundle" heading="Delete bundle?" open={confirm} onHide={() => setConfirm(false)}
          primaryAction={{ label: 'Delete', tone: 'critical', onClick: () => { setConfirm(false); onToast('Bundle deleted'); onNavigate('bundles'); } }}
          secondaryActions={[{ label: 'Cancel', onClick: () => setConfirm(false) }]}>
          <Paragraph>This permanently deletes "{form.title}" and its bundle product. This can't be undone.</Paragraph>
        </AppModal>
      </Page>
    );
  }
  window.BundleEditScreen = BundleEditScreen;
})();
