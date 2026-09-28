import * as React from 'react';

/**
 * Small square preview of a product or file image.
 * Renders the Polaris 2.0 web component <s-thumbnail>. Slots: none.
 */
export interface ThumbnailProps {
  /** The size of the product thumbnail image. */
  size?: "base" | "small-200" | "small-100" | "small" | "large" | "large-100";
  /** The image source (either a remote URL or a local file resource). */
  src?: string;
  /** An alternative text description that describe the image for the reader to understand what it is about. */
  alt?: string;
  /** Native "load" event. */
  onLoad?: (event: Event) => void;
  /** Native "error" event. */
  onError?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Thumbnail(props: ThumbnailProps): JSX.Element;
