import * as React from 'react';

/**
 * Short label shown on hover/focus of an element that references it with interestfor.
 * Renders the Polaris 2.0 web component <s-tooltip>. Slots: (default).
 */
export interface TooltipProps {
  /** A unique identifier for the element. */
  id?: string;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Tooltip(props: TooltipProps): JSX.Element;
