import * as React from 'react';

/**
 * A single option inside s-choice-list.
 * Renders the Polaris 2.0 web component <s-choice>. Slots: (default), details, secondary-content.
 */
export interface ChoiceProps {
  /** Disables the control, disallowing any interaction. */
  disabled?: boolean;
  /** A label used for users using assistive technologies like screen readers. */
  accessibilityLabel?: string;
  /** The value used in form data when the control is checked. */
  value?: string;
  /** Whether the control is active. */
  selected?: boolean;
  /** Whether the control is active by default. */
  defaultSelected?: boolean;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Choice(props: ChoiceProps): JSX.Element;
