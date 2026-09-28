import * as React from 'react';

/**
 * App Bridge <ui-title-bar>: the admin-rendered page title bar with primary/secondary actions; renders a Polaris preview outside the admin.
 */
export interface TitleBarProps {
  /** Page title shown in the admin title bar. */
  title: string;
  primaryAction?: { label: string; onClick?: () => void; loading?: boolean; disabled?: boolean };
  secondaryActions?: { label: string; onClick?: () => void; tone?: 'critical' }[];
  breadcrumb?: { label: string; href?: string; onClick?: () => void };
  /** Render the in-iframe preview when not inside the Shopify admin. Default true. */
  preview?: boolean;
  children?: React.ReactNode;
}

export declare function TitleBar(props: TitleBarProps): JSX.Element;
