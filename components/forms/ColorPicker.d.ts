import * as React from 'react';

/**
 * Inline color picker.
 * Renders the Polaris 2.0 web component <s-color-picker>. Slots: none.
 */
export interface ColorPickerProps {
  /** The currently selected color value. */
  value?: string;
  /** The initial color value when the field first loads. */
  defaultValue?: string;
  /** Whether to enable alpha (transparency) channel selection in the color picker, allowing users to choose semi-transparent colors. */
  alpha?: boolean;
  /** A unique identifier for the element. */
  id?: string;
  /** An identifier for the field that is unique within the nearest containing form. */
  name?: string;
  /**  */
  [internals]?: string;
  /** Native "input" event. */
  onInput?: (event: Event) => void;
  /** Native "change" event. */
  onChange?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function ColorPicker(props: ColorPickerProps): JSX.Element;
