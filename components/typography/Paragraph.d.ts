import * as React from 'react';

/**
 * Block of body text.
 * Renders the Polaris 2.0 web component <s-paragraph>. Slots: (default).
 */
export interface ParagraphProps {
  /** Modify the color to be more or less intense. */
  color?: "subdued" | "base";
  /** The semantic tone that's applied to the paragraph text, which changes its color to convey meaning. */
  tone?: "auto" | "neutral" | "info" | "success" | "caution" | "warning" | "critical";
  /** Font size of the paragraph. */
  fontSize?: "base" | "auto" | "small-200" | "small-100" | "small" | "large" | "large-100";
  /** Font weight of the paragraph. */
  fontWeight?: "base" | "auto" | "medium" | "semibold" | "bold";
  /** Set the numeric properties of the font. */
  fontVariantNumeric?: "auto" | "normal" | "tabular-nums";
  /** Changes the visibility of the element. */
  accessibilityVisibility?: "visible" | "hidden" | "exclusive";
  /** Indicates the directionality of the element’s text. */
  dir?: "auto" | "ltr" | "rtl";
  /** Truncates the text content to the specified number of lines. */
  lineClamp?: number;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Paragraph(props: ParagraphProps): JSX.Element;
