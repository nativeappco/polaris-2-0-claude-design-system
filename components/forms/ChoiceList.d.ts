import * as React from 'react';

/**
 * Group of radio (single) or checkbox (multiple) choices.
 * Renders the Polaris 2.0 web component <s-choice-list>. Slots: (default).
 */
export interface ChoiceListProps {
  /** Whether the field is disabled, preventing any user interaction. */
  disabled?: boolean;
  /** Whether multiple choices can be selected. */
  multiple?: boolean;
  /** Additional text to provide context or guidance for the field. */
  details?: string;
  /** Indicate an error to the user. */
  error?: string;
  /** Content to use as the field label. */
  label?: string;
  /** An identifier for the field that is unique within the nearest containing form. */
  name?: string;
  /** Changes the visibility of the component's label. */
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** An array of the `value`s of the selected options. */
  values?: string[];
  /**  */
  [internals]?: string;
  /** Native "change" event. */
  onChange?: (event: Event) => void;
  /** Native "input" event. */
  onInput?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function ChoiceList(props: ChoiceListProps): JSX.Element;
