import * as React from 'react';

/**
 * Numeric input with min, max, step, prefix and suffix.
 * Renders the Polaris 2.0 web component <s-number-field>. Slots: error, details.
 */
export interface NumberFieldProps {
  /**  */
  value?: string;
  /** The type of virtual keyboard to display on mobile devices. */
  inputMode?: "decimal" | "numeric";
  /** A unique identifier for the element. */
  id?: string;
  /** Disables the field, disallowing any interaction. */
  disabled?: boolean;
  /** Additional text to provide context or guidance for the field. */
  details?: string;
  /** Indicate an error to the user. */
  error?: string;
  /** Content to use as the field label. */
  label?: string;
  /** Whether the field needs a value. */
  required?: boolean;
  /** An identifier for the field that is unique within the nearest containing form. */
  name?: string;
  /** Changes the visibility of the component's label. */
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** The default value for the field. */
  defaultValue?: string;
  /** A short hint that describes the expected value of the field. */
  placeholder?: string;
  /** The field cannot be edited by the user. */
  readOnly?: boolean;
  /** A hint as to the intended content of the field. */
  autocomplete?: "one-time-code" | "cc-number" | "cc-csc" | "on" | "off" | "shipping one-time-code" | "billing one-time-code" | "shipping cc-number" | "shipping cc-csc" | "billing cc-number" | "billing cc-csc";
  /** The highest decimal or integer to be accepted for the field. */
  max?: number;
  /** A value to be displayed immediately after the editable portion of the field. */
  suffix?: string;
  /** A value to be displayed immediately before the editable portion of the field. */
  prefix?: string;
  /** The lowest decimal or integer to be accepted for the field. */
  min?: number;
  /** The amount the value can increase or decrease by. */
  step?: number;
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

export declare function NumberField(props: NumberFieldProps): JSX.Element;
