(() => {
  const { Link, Page, Section, Stack, Button, Badge, Select, Option, Paragraph, Text, OrderedList, ListItem, Spinner } = window.Polaris20AppHomeDesignSystem_b76c1a;

  function SetupScreen({ onNavigate, onToast }) {
    const [done, setDone] = React.useState({ theme: true, embed: false, bundle: true });
    const [verifying, setVerifying] = React.useState(false);
    const verify = () => { setVerifying(true); setTimeout(() => { setVerifying(false); setDone((d) => ({ ...d, embed: true })); onToast('App embed is on'); }, 900); };
    const badge = (k) => <Badge slot="accessory" tone={done[k] ? 'success' : undefined}>{done[k] ? 'Done' : 'Not done'}</Badge>;
    return (
      <Page heading="Setup guide" inlineSize="small">
        <Link slot="breadcrumb-actions" onClick={() => onNavigate('home')}>Home</Link>
        <Stack gap="large">
          <Section heading="1. Select theme" subheading="Choose where the bundle widget is installed">
            {badge('theme')}
            <Select label="Theme">
              <Option value="dawn" selected>Dawn (published)</Option>
              <Option value="sense">Sense</Option>
            </Select>
          </Section>
          <Section heading="2. Enable app embed" subheading="Lets the widget load on your storefront">
            {badge('embed')}
            <Stack gap="base">
              <OrderedList>
                <ListItem>Open the theme editor</ListItem>
                <ListItem>Go to App embeds and turn on Bundle Factory</ListItem>
                <ListItem>Save the theme, then come back and verify</ListItem>
              </OrderedList>
              <Stack direction="inline" gap="small-200">
                <Button variant="primary" icon="external">Open theme editor</Button>
                <Button loading={verifying} onClick={verify}>Verify</Button>
                <Button variant="tertiary" onClick={() => setDone((d) => ({ ...d, embed: !d.embed }))}>{done.embed ? 'Mark as not done' : 'Mark as done'}</Button>
              </Stack>
            </Stack>
          </Section>
          <Section heading="3. Create your first bundle">
            {badge('bundle')}
            <Stack direction="inline" gap="small-200"><Button onClick={() => onNavigate('edit')}>Create bundle</Button></Stack>
          </Section>
        </Stack>
      </Page>
    );
  }
  window.SetupScreen = SetupScreen;
})();
