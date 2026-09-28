import * as React from 'react';

/**
 * Groups related buttons with consistent spacing; supports primary-action and secondary-actions slots.
 * Renders the Polaris 2.0 web component <s-button-group>. Slots: (default), primary-action, secondary-actions.
 */
export interface ButtonGroupProps {
  /** A label that describes the purpose or content of the component for assistive technologies like screen readers. */
  accessibilityLabel?: string;
  /** The spacing between buttons in the group. */
  gap?: "base" | "none";

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function ButtonGroup(props: ButtonGroupProps): JSX.Element;
