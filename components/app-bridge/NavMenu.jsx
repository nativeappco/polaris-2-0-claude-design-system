import React from 'react';

/**
 * <ui-nav-menu> — App Bridge app navigation. The admin renders these links in its sidebar under the app name;
 * the element itself renders nothing in the iframe. The first link must have rel="home".
 */
export function NavMenu({ items = [] }) {
  const inAdmin = typeof window !== 'undefined' && !!window.shopify;
  return React.createElement('ui-nav-menu', inAdmin ? null : { hidden: '' },
    items.map((it, i) => React.createElement('a', { key: it.href || i, href: it.href, rel: i === 0 ? 'home' : undefined }, it.label)));
}
