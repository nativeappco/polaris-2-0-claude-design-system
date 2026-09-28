import * as React from 'react';

/**
 * Labeled group of options inside s-select.
 * Renders the Polaris 2.0 web component <s-option-group>. Slots: (default).
 */
export interface OptionGroupProps {
  /** Whether the options within this group can be selected or not. */
  disabled?: boolean;
  /** The user-facing label for this group of options. */
  label?: string;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function OptionGroup(props: OptionGroupProps): JSX.Element;
