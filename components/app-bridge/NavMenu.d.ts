import * as React from 'react';

/**
 * App Bridge <ui-nav-menu>: declares the app's navigation links, which the admin renders in its sidebar (renders nothing in the iframe).
 */
export interface NavMenuProps {
  /** First item is the app home (rel="home"). */
  items: { label: string; href: string }[];
}

export declare function NavMenu(props: NavMenuProps): JSX.Element;
