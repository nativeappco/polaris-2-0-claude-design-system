import * as React from 'react';

/**
 * Formats and displays a number with tabular figures (wraps <s-number>).
 * Renders the Polaris 2.0 web component <s-number>. Slots: (default).
 */
export interface NumberTextProps {
  /** The semantic tone that's applied to the number, which changes its color to convey meaning. */
  tone?: "auto" | "neutral" | "info" | "success" | "caution" | "warning" | "critical";
  /** The color emphasis applied to the number. */
  color?: "subdued" | "base";
  /** Font size of the number. */
  fontSize?: "base" | "auto" | "small-200" | "small-100" | "small" | "large" | "large-100";
  /** Font weight of the number. */
  fontWeight?: "base" | "auto" | "medium" | "semibold" | "bold";
  /** Changes the visibility of the element. */
  accessibilityVisibility?: "visible" | "hidden" | "exclusive";
  /** Indicates the directionality of the element’s text. */
  dir?: "auto" | "ltr" | "rtl";

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function NumberText(props: NumberTextProps): JSX.Element;
