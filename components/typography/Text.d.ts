import * as React from 'react';

/**
 * Inline text with tone, color, weight and type (strong, address…).
 * Renders the Polaris 2.0 web component <s-text>. Slots: (default).
 */
export interface TextProps {
  /** Modify the color to be more or less intense. */
  color?: "subdued" | "base";
  /** The semantic type and styling treatment for the text content. */
  type?: "strong" | "address" | "redundant" | "generic";
  /** The semantic tone that's applied to the text, which changes its color to convey meaning. */
  tone?: "auto" | "neutral" | "info" | "success" | "caution" | "warning" | "critical";
  /** Set the numeric properties of the font. */
  fontVariantNumeric?: "auto" | "normal" | "tabular-nums";
  /** Font size of the text. */
  fontSize?: "base" | "auto" | "small-200" | "small-100" | "small" | "large" | "large-100";
  /** Font weight of the text. */
  fontWeight?: "base" | "auto" | "medium" | "semibold" | "bold";
  /** Changes the visibility of the element. */
  accessibilityVisibility?: "visible" | "hidden" | "exclusive";
  /** Indicates the directionality of the element’s text. */
  dir?: "auto" | "ltr" | "rtl";
  /** ID of a component that should respond to interest (e.g. */
  interestFor?: string;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Text(props: TextProps): JSX.Element;
