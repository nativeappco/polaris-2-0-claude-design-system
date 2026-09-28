import * as React from 'react';

/**
 * Horizontal or vertical rule that separates content.
 * Renders the Polaris 2.0 web component <s-divider>. Slots: none.
 */
export interface DividerProps {
  /** The orientation of the divider line, using [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values). */
  direction?: "block" | "inline";
  /** The visual prominence of the divider line. */
  color?: "base" | "strong";

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Divider(props: DividerProps): JSX.Element;
