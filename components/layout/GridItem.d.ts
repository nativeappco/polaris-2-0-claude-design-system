import * as React from 'react';

/**
 * A single cell inside s-grid that controls column/row span.
 * Renders the Polaris 2.0 web component <s-grid-item>. Slots: (default).
 */
export interface GridItemProps {
  /** The number of columns the item will span across. */
  gridColumn?: "auto";
  /** The number of rows the item will span across. */
  gridRow?: "auto";
  /** The background color of the component. */
  background?: "subdued" | "base" | "strong" | "transparent";
  /** A border applied using shorthand syntax to specify width, color, and style in a single property. */
  border?: string;
  /** The thickness of the border on all sides. */
  borderWidth?: string;
  /** The visual style of the border on all sides, such as solid, dashed, or dotted. */
  borderStyle?: string;
  /** The color of the border using the design system's color scale. */
  borderColor?: "subdued" | "base" | "strong";
  /** The roundedness of the element's corners using the design system's radius scale. */
  borderRadius?: string;
  /** The padding applied to all edges of the component. */
  padding?: string;
  /** The block-direction padding (top and bottom in horizontal writing modes). */
  paddingBlock?: string;
  /** The block-start padding (top in horizontal writing modes). */
  paddingBlockStart?: "base" | "small-200" | "small-100" | "small" | "large" | "large-100" | "small-500" | "small-400" | "small-300" | "large-200" | "large-300" | "large-400" | "large-500" | "none";
  /** The block-end padding (bottom in horizontal writing modes). */
  paddingBlockEnd?: "base" | "small-200" | "small-100" | "small" | "large" | "large-100" | "small-500" | "small-400" | "small-300" | "large-200" | "large-300" | "large-400" | "large-500" | "none";
  /** The inline-direction padding (left and right in horizontal writing modes). */
  paddingInline?: string;
  /** The inline-start padding (left in LTR writing modes, right in RTL). */
  paddingInlineStart?: "base" | "small-200" | "small-100" | "small" | "large" | "large-100" | "small-500" | "small-400" | "small-300" | "large-200" | "large-300" | "large-400" | "large-500" | "none";
  /** The inline-end padding (right in LTR writing modes, left in RTL). */
  paddingInlineEnd?: "base" | "small-200" | "small-100" | "small" | "large" | "large-100" | "small-500" | "small-400" | "small-300" | "large-200" | "large-300" | "large-400" | "large-500" | "none";
  /** The outer [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) type of the component. */
  display?: "auto" | "none";
  /** The vertical size of the element in standard layouts (height in left-to-right or right-to-left writing modes). */
  blockSize?: "auto" | "0";
  /** The minimum height in horizontal writing modes, or minimum width in vertical writing modes. */
  minBlockSize?: "0";
  /** The maximum height in horizontal writing modes, or maximum width in vertical writing modes. */
  maxBlockSize?: "none" | "0";
  /** The width in horizontal writing modes, or height in vertical writing modes. */
  inlineSize?: "auto" | "0";
  /** The minimum width in horizontal writing modes, or minimum height in vertical writing modes. */
  minInlineSize?: "0";
  /** The maximum width in horizontal writing modes, or maximum height in vertical writing modes. */
  maxInlineSize?: "none" | "0";
  /** Changes the visibility of the element. */
  accessibilityVisibility?: "visible" | "hidden" | "exclusive";
  /** Sets the semantic meaning of the component’s content. */
  accessibilityRole?: "generic" | "status" | "main" | "header" | "footer" | "section" | "region" | "aside" | "navigation" | "ordered-list" | "list-item" | "list-item-separator" | "unordered-list" | "separator" | "alert" | "presentation" | "none";
  /** A label that describes the purpose or contents of the element. */
  accessibilityLabel?: string;
  /** Sets the overflow behavior of the element. */
  overflow?: "visible" | "hidden";

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function GridItem(props: GridItemProps): JSX.Element;
