// Mock of the Shopify admin HOST frame (not app UI). The admin draws this around the app iframe;
// it is custom-styled with tokens only so prototypes look embedded. Never ship it inside an app.
(() => {
  const { Icon, TextField, NavMenu, Avatar } = window.Polaris20AppHomeDesignSystem_b76c1a;
  const D = window.KitData;

  function NavItem({ icon, label, badge, active, sub, onClick }) {
    return (
      <button type="button" className={'af-item' + (active ? ' is-active' : '') + (sub ? ' is-sub' : '')} onClick={onClick}>
        {icon ? <span className="af-ico"><Icon type={icon} size="base"></Icon></span> : <span className="af-ico"></span>}
        <span className="af-label">{label}</span>
        {badge ? <span className="af-badge">{badge}</span> : null}
      </button>
    );
  }

  function AdminFrame({ route, onNavigate, children }) {
    const [open, setOpen] = React.useState(false);
    const go = (id) => { onNavigate(id); setOpen(false); };
    return (
      <div className="af">
        <NavMenu items={D.nav.map((n) => ({ label: n.label, href: '#' + n.id }))} />
        <header className="af-mobilebar">
          <button type="button" className="af-burger" aria-label="Menu" onClick={() => setOpen(!open)}><Icon type="menu"></Icon></button>
          <span className="af-word">Shopify</span>
          <span className="af-ico"><Icon type="search"></Icon></span>
        </header>
        <aside className={'af-nav' + (open ? ' is-open' : '')}>
          <div className="af-top"><span className="af-word">Shopify</span></div>
          <div className="af-search"><Icon type="search" size="small"></Icon><span>Search</span><kbd>⌘K</kbd></div>
          <nav className="af-list">
            {D.adminNav.map(([i, l, b]) => <NavItem key={l} icon={i} label={l} badge={b} />)}
            <div className="af-group">Sales channels <Icon type="chevron-right" size="small"></Icon></div>
            <NavItem icon="store-online" label="Online Store" />
            <NavItem icon="point-of-sale" label="Point of Sale" />
            <div className="af-group">Apps <Icon type="chevron-right" size="small"></Icon></div>
            <NavItem icon="apps" label={D.appName} active={route === 'home'} onClick={() => go('home')} />
            {D.nav.slice(1).map((n) => <NavItem key={n.id} sub label={n.label} active={route === n.id || (route === 'edit' && n.id === 'bundles')} onClick={() => go(n.id)} />)}
          </nav>
          <div className="af-foot"><NavItem icon="settings" label="Settings" /></div>
        </aside>
        {open ? <div className="af-scrim" onClick={() => setOpen(false)}></div> : null}
        <main className="af-main">
          <div className="af-canvas">{children}</div>
        </main>
      </div>
    );
  }
  window.AdminFrame = AdminFrame;
})();
