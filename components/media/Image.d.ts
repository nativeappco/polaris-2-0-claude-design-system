import * as React from 'react';

/**
 * Responsive image with aspect ratio and object-fit.
 * Renders the Polaris 2.0 web component <s-image>. Slots: none.
 */
export interface ImageProps {
  /** The loading strategy for the image. */
  loading?: "eager" | "lazy";
  /** The semantic meaning of the component’s content. */
  accessibilityRole?: "presentation" | "none" | "img";
  /** The displayed inline width of the image. */
  inlineSize?: "auto" | "fill";
  /** The aspect ratio of the image. */
  aspectRatio?: string;
  /** The image resizing behavior to fit within its container. */
  objectFit?: "contain" | "cover";
  /** The image source (either a remote URL or a local file resource). */
  src?: string;
  /** An alternative text description that describe the image for the reader to understand what it is about. */
  alt?: string;
  /** A set of image sources and their width or pixel density descriptors. */
  srcSet?: string;
  /** A set of media conditions and their corresponding sizes. */
  sizes?: string;
  /** A border applied using shorthand syntax to specify width, color, and style in a single property. */
  border?: string;
  /** The color of the border using the design system's color scale. */
  borderColor?: "subdued" | "base" | "strong";
  /** The roundedness of the element's corners using the design system's radius scale. */
  borderRadius?: string;
  /** The visual style of the border on all sides, such as solid, dashed, or dotted. */
  borderStyle?: string;
  /** The thickness of the border on all sides. */
  borderWidth?: string;
  /** Native "error" event. */
  onError?: (event: Event) => void;
  /** Native "load" event. */
  onLoad?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Image(props: ImageProps): JSX.Element;
