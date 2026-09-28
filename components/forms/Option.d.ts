import * as React from 'react';

/**
 * A single option inside s-select.
 * Renders the Polaris 2.0 web component <s-option>. Slots: (default).
 */
export interface OptionProps {
  /** Disables the control, disallowing any interaction. */
  disabled?: boolean;
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

export declare function Option(props: OptionProps): JSX.Element;
