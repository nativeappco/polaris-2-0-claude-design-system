import * as React from 'react';

/**
 * Password input with hidden characters.
 * Renders the Polaris 2.0 web component <s-password-field>. Slots: error, details.
 */
export interface PasswordFieldProps {
  /** A unique identifier for the element. */
  id?: string;
  /** Disables the field, disallowing any interaction. */
  disabled?: boolean;
  /** An identifier for the field that is unique within the nearest containing form. */
  name?: string;
  /** The current value for the field. */
  value?: string;
  /** Additional text to provide context or guidance for the field. */
  details?: string;
  /** Indicate an error to the user. */
  error?: string;
  /** Content to use as the field label. */
  label?: string;
  /** Whether the field needs a value. */
  required?: boolean;
  /** Changes the visibility of the component's label. */
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** The default value for the field. */
  defaultValue?: string;
  /** A short hint that describes the expected value of the field. */
  placeholder?: string;
  /** The field cannot be edited by the user. */
  readOnly?: boolean;
  /** A hint as to the intended content of the field. */
  autocomplete?: "current-password" | "new-password" | "on" | "off" | "shipping current-password" | "shipping new-password" | "billing current-password" | "billing new-password";
  /** Specifies the maximum number of characters allowed. */
  maxLength?: number;
  /** Specifies the min number of characters allowed. */
  minLength?: number;
  /** Native "input" event. */
  onInput?: (event: Event) => void;
  /** Native "change" event. */
  onChange?: (event: Event) => void;
  /** Native "focus" event. */
  onFocus?: (event: Event) => void;
  /** Native "blur" event. */
  onBlur?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function PasswordField(props: PasswordFieldProps): JSX.Element;
