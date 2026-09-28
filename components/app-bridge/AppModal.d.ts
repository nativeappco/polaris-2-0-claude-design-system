import * as React from 'react';

/**
 * Modal that escapes the app iframe: App Bridge <ui-modal> inside the admin, Polaris <s-modal> fallback elsewhere; controlled via open/onHide.
 */
export interface AppModalProps {
  id: string;
  heading: string;
  open?: boolean;
  onHide?: () => void;
  primaryAction?: { label: string; onClick?: () => void; tone?: 'critical'; loading?: boolean };
  secondaryActions?: { label: string; onClick?: () => void }[];
  size?: 'small' | 'base' | 'large';
  children?: React.ReactNode;
}

export declare function AppModal(props: AppModalProps): JSX.Element;
