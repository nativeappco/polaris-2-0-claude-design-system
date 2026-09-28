import * as React from 'react';

/**
 * Section or content heading; level is inferred from nesting inside s-page/s-section.
 * Renders the Polaris 2.0 web component <s-heading>. Slots: (default).
 */
export interface HeadingProps {
  /** The font size of the heading. */
  fontSize?: "base" | "auto" | "small" | "large" | "large-100" | "large-200" | "large-300" | "large-400";
  /** The semantic meaning of the component’s content. */
  accessibilityRole?: "heading" | "presentation" | "none";
  /** Changes the visibility of the element. */
  accessibilityVisibility?: "visible" | "hidden" | "exclusive";
  /** Truncates the text content to the specified number of lines. */
  lineClamp?: number;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Heading(props: HeadingProps): JSX.Element;
