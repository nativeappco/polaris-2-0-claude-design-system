import * as React from 'react';

/**
 * Date input with a popover calendar.
 * Renders the Polaris 2.0 web component <s-date-field>. Slots: error, details.
 */
export interface DateFieldProps {
  /** The currently selected date in `YYYY-MM-DD` format. */
  value?: string;
  /** The initial date value when the field first renders, in `YYYY-MM-DD` format. */
  defaultValue?: string;
  /** A unique identifier for the element. */
  id?: string;
  /** Disables the field, disallowing any interaction. */
  disabled?: boolean;
  /** An identifier for the field that is unique within the nearest containing form. */
  name?: string;
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
  /** A short hint that describes the expected value of the field. */
  placeholder?: string;
  /** The field cannot be edited by the user. */
  readOnly?: boolean;
  /** A hint as to the intended content of the field. */
  autocomplete?: "bday-day" | "bday-month" | "bday-year" | "bday" | "cc-expiry-month" | "cc-expiry-year" | "cc-expiry";
  /** Displayed month in `YYYY-MM` format. */
  view?: string;
  /** Default month to display in `YYYY-MM` format. */
  defaultView?: string;
  /** Dates that can be selected. */
  allow?: string;
  /** Dates that cannot be selected. */
  disallow?: string;
  /** Days of the week that can be selected. */
  allowDays?: string;
  /** Days of the week that cannot be selected. */
  disallowDays?: string;
  /** Native "blur" event. */
  onBlur?: (event: Event) => void;
  /** Native "change" event. */
  onChange?: (event: Event) => void;
  /** Native "focus" event. */
  onFocus?: (event: Event) => void;
  /** Native "input" event. */
  onInput?: (event: Event) => void;
  /** Native "invalid" event. */
  onInvalid?: (event: Event) => void;
  /** Native "viewchange" event. */
  onViewChange?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function DateField(props: DateFieldProps): JSX.Element;
