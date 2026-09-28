import * as React from 'react';

/**
 * List of actions shown inside an s-popover, e.g. a "More actions" menu.
 * Renders the Polaris 2.0 web component <s-menu>. Slots: (default).
 */
export interface MenuProps {
  /** A label that describes the purpose or content of the component for assistive technologies like screen readers. */
  accessibilityLabel?: string;
  /** A unique identifier for the element. */
  id?: string;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Menu(props: MenuProps): JSX.Element;
