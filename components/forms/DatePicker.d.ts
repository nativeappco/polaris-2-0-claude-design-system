import * as React from 'react';

/**
 * Inline calendar for a single date or a range.
 * Renders the Polaris 2.0 web component <s-date-picker>. Slots: none.
 */
export interface DatePickerProps {
  /** The type of date selection allowed. */
  type?: "single" | "range";
  /** The currently selected date(s). */
  value?: string;
  /** The initially selected date(s) when the component first renders. */
  defaultValue?: string;
  /** Specifies which dates can be selected as a comma-separated list. */
  allow?: string;
  /** Specifies which days of the week can be selected as a comma-separated list. */
  allowDays?: string;
  /** Specifies which dates can't be selected as a comma-separated list. */
  disallow?: string;
  /** Specifies which days of the week can't be selected as a comma-separated list. */
  disallowDays?: string;
  /** The currently displayed month in `YYYY-MM` format. */
  view?: string;
  /** The default month to display in `YYYY-MM` format. */
  defaultView?: string;
  /** Controls how many months are displayed. */
  visibleMonths?: "auto" | "1" | "2";
  /** An identifier for the field that is unique within the nearest containing form. */
  name?: string;
  /** Native "viewchange" event. */
  onViewChange?: (event: Event) => void;
  /** Native "focus" event. */
  onFocus?: (event: Event) => void;
  /** Native "blur" event. */
  onBlur?: (event: Event) => void;
  /** Native "input" event. */
  onInput?: (event: Event) => void;
  /** Native "change" event. */
  onChange?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function DatePicker(props: DatePickerProps): JSX.Element;
