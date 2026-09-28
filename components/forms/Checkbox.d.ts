import * as React from 'react';

/**
 * Binary choice, or one of several independent choices.
 * Renders the Polaris 2.0 web component <s-checkbox>. Slots: error, details.
 */
export interface CheckboxProps {
  /** Whether the checkbox displays in an indeterminate state (neither checked nor unchecked), typically used to indicate partial selection in hierarchical lists. */
  indeterminate?: boolean;
  /** The initial indeterminate state for uncontrolled components. */
  defaultIndeterminate?: boolean;
  /** Whether the field needs a value. */
  required?: boolean;
  /** Changes the visibility of the component's label. */
  labelAccessibilityVisibility?: "visible" | "exclusive";
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
  /** An identifier for the control that is unique within the nearest containing `Form` component. */
  name?: string;
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

export declare function Checkbox(props: CheckboxProps): JSX.Element;
