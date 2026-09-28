(() => {
  const { Page, Section, Stack, Grid, Banner, Badge, Button, Text, Paragraph, Heading, NumberText, Progress, Icon, Link, Table, TableHeaderRow, TableHeader, TableBody, TableRow, TableCell, Box, QueryContainer, Divider } = window.Polaris20AppHomeDesignSystem_b76c1a;
  const D = window.KitData;
  const tone = (s) => (s === 'Active' ? 'success' : s === 'Draft' ? 'info' : undefined);

  function Stat({ label, value, detail }) {
    return (
      <Section>
        <Stack gap="small-300">
          <Text color="subdued">{label}</Text>
          <Text fontSize="large" fontWeight="semibold"><NumberText>{value}</NumberText></Text>
          <Text color="subdued">{detail}</Text>
        </Stack>
      </Section>
    );
  }

  function HomeScreen({ onNavigate }) {
    const [trial, setTrial] = React.useState(true);
    return (
      <Page heading={D.appName} inlineSize="base">
        <Button slot="secondary-actions" onClick={() => onNavigate('settings')}>Settings</Button>
        <Button slot="primary-action" variant="primary" onClick={() => onNavigate('edit')}>Create bundle</Button>
        <Stack gap="large">
          {trial ? (
            <Banner tone="warning" heading="7 days left in your trial" dismissible onDismiss={() => setTrial(false)}>
              Choose a plan to keep bundles visible on your storefront. <Link href="#">View plans</Link>
            </Banner>
          ) : null}
          <Section heading="Setup guide">
            <Badge slot="accessory">2 of 3 tasks complete</Badge>
            <Stack gap="base">
              <Progress value="66" max="100" accessibilityLabel="Setup progress"></Progress>
              <Stack gap="small-200">
                <Stack direction="inline" gap="small-200" alignItems="center"><Icon type="check-circle-filled" tone="success"></Icon><Text>Select a theme</Text></Stack>
                <Stack direction="inline" gap="small-200" alignItems="center"><Icon type="check-circle-filled" tone="success"></Icon><Text>Create your first bundle</Text></Stack>
                <Stack direction="inline" gap="small-200" alignItems="center"><Icon type="circle-dashed" color="subdued"></Icon><Text>Enable app embed</Text></Stack>
              </Stack>
              <Stack direction="inline" gap="small-200"><Button onClick={() => onNavigate('setup')}>Continue setup</Button></Stack>
            </Stack>
          </Section>
          <QueryContainer>
            <Grid gridTemplateColumns="@container (inline-size > 560px) 1fr 1fr 1fr, 1fr" gap="base">
              <Stat label="Bundle sales" value="421" detail="Last 30 days" />
              <Stat label="Bundle revenue" value="$18,240.00" detail="Last 30 days" />
              <Stat label="Active bundles" value="3" detail="of 5 bundles" />
            </Grid>
          </QueryContainer>
          <Section heading="Recent bundles" padding="none">
            <Button slot="secondary-actions" variant="tertiary" onClick={() => onNavigate('bundles')}>View all</Button>
            <Table variant="auto">
              <TableHeaderRow>
                <TableHeader listSlot="primary">Bundle</TableHeader>
                <TableHeader listSlot="inline">Status</TableHeader>
                <TableHeader format="numeric">Sales</TableHeader>
              </TableHeaderRow>
              <TableBody>
                {D.bundles.slice(0, 3).map((b) => (
                  <TableRow key={b.id}>
                    <TableCell><Link onClick={() => onNavigate('edit')}>{b.title}</Link></TableCell>
                    <TableCell><Badge tone={tone(b.status)}>{b.status}</Badge></TableCell>
                    <TableCell>{b.sales}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Section>
        </Stack>
      </Page>
    );
  }
  window.HomeScreen = HomeScreen;
})();
