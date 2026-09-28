(() => {
  const { Page, Section, Stack, Button, Text, Paragraph, Switch, Checkbox, Select, Option, ColorField, EmailField, Banner, Box, Icon, Clickable, Divider, Badge } = window.Polaris20AppHomeDesignSystem_b76c1a;

  function LinkRow({ icon, title, detail, badge }) {
    return (
      <Clickable paddingBlock="small-100" paddingInline="small-100" borderRadius="base">
        <Stack direction="inline" gap="small-100" alignItems="center" justifyContent="space-between">
          <Stack direction="inline" gap="small-100" alignItems="center">
            <Icon type={icon}></Icon>
            <Stack gap="none">
              <Stack direction="inline" gap="small-200" alignItems="center"><Text>{title}</Text>{badge ? <Badge tone="info">{badge}</Badge> : null}</Stack>
              <Text color="subdued">{detail}</Text>
            </Stack>
          </Stack>
          <Icon type="chevron-right"></Icon>
        </Stack>
      </Clickable>
    );
  }

  function SettingsScreen({ onToast }) {
    const [enabled, setEnabled] = React.useState(true);
    return (
      <Page heading="Settings" inlineSize="base">
        <Stack gap="large">
          <Section heading="Storefront widget">
            <Stack gap="base">
              <Banner tone="info" heading="Your app embed is turned off">Turn on the app embed in the theme editor so bundles appear on product pages.<Button slot="secondary-actions">Open theme editor</Button></Banner>
              <Switch label="Show bundle widget" checked={enabled} details="Applies to all active bundles" onChange={(e) => { setEnabled(e.target.checked); onToast(e.target.checked ? 'Widget turned on' : 'Widget turned off'); }}></Switch>
              <Select label="Placement">
                <Option value="below" selected>Below add to cart</Option>
                <Option value="above">Above add to cart</Option>
                <Option value="tab">Product description tab</Option>
              </Select>
              <ColorField label="Button color" value="#101010" details="Uses your theme colors when left blank"></ColorField>
            </Stack>
          </Section>
          <Section heading="Notifications">
            <Stack gap="base">
              <EmailField label="Sender email" value="store@fiftysevenapps.com" details="Low-stock alerts for bundle components are sent here"></EmailField>
              <Checkbox label="Email me when a component is out of stock" checked></Checkbox>
            </Stack>
          </Section>
          <Section padding="none">
            <Box padding="small-200">
              <LinkRow icon="plan" title="Plan" detail="Basic · $4.99 USD every 30 days" />
              <Divider></Divider>
              <LinkRow icon="lock" title="Customer privacy" detail="Data requests and retention" badge="Recommended" />
              <Divider></Divider>
              <LinkRow icon="code" title="Webhooks" detail="Send bundle events to a URL" />
            </Box>
          </Section>
          <Section heading="Uninstall">
            <Stack gap="base">
              <Paragraph color="subdued">Bundle products stay in your store after you uninstall. Discounts stop applying.</Paragraph>
              <Stack direction="inline"><Button tone="critical">Uninstall app</Button></Stack>
            </Stack>
          </Section>
        </Stack>
      </Page>
    );
  }
  window.SettingsScreen = SettingsScreen;
})();
