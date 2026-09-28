import * as React from 'react';

/**
 * On/off setting that applies immediately.
 * Renders the Polaris 2.0 web component <s-switch>. Slots: none.
 */
export interface SwitchProps {
  /** The value used in form data when the control is checked. */
  value?: string;
  /** Disables the control, disallowing any interaction. */
  disabled?: boolean;
  /** A label used for users using assistive technologies like screen readers. */
  accessibilityLabel?: string;
  /** Whether the control is active. */
  checked?: boolean;
  /** Whether the control is active by default. */
  defaultChecked?: boolean;
  /** Additional text to provide context or guidance for the field. */
  details?: string;
  /** Indicate an error to the user. */
  error?: string;
  /** Visual content to use as the control label. */
  label?: string;
  /** Whether the field needs a value. */
  required?: boolean;
  /** An identifier for the control that is unique within the nearest containing `Form` component. */
  name?: string;
  /** Changes the visibility of the component's label. */
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** Native "change" event. */
  onChange?: (event: Event) => void;
  /** Native "input" event. */
  onInput?: (event: Event) => void;
  /** Native "blur" event. */
  onBlur?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Switch(props: SwitchProps): JSX.Element;
