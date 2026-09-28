import * as React from 'react';

/**
 * URL input.
 * Renders the Polaris 2.0 web component <s-url-field>. Slots: error, details.
 */
export interface UrlFieldProps {
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
  autocomplete?: "photo" | "url" | "impp" | "home impp" | "mobile impp" | "fax impp" | "pager impp" | "on" | "off" | "shipping photo" | "shipping url" | "shipping impp" | "shipping home impp" | "shipping mobile impp" | "shipping fax impp" | "shipping pager impp" | "billing photo" | "billing url" | "billing impp" | "billing home impp" | "billing mobile impp" | "billing fax impp" | "billing pager impp";
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

export declare function UrlField(props: UrlFieldProps): JSX.Element;
