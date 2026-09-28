import * as React from 'react';

/**
 * Indeterminate loading indicator.
 * Renders the Polaris 2.0 web component <s-spinner>. Slots: none.
 */
export interface SpinnerProps {
  /** The size of the loading spinner. */
  size?: "base" | "large" | "large-100";
  /** A label that describes the purpose or content of the component for assistive technologies like screen readers. */
  accessibilityLabel?: string;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Spinner(props: SpinnerProps): JSX.Element;
