import * as React from 'react';

/**
 * Represents a person or business with an image or initials.
 * Renders the Polaris 2.0 web component <s-avatar>. Slots: none.
 */
export interface AvatarProps {
  /** The size of the avatar image. */
  size?: "base" | "small-200" | "small-100" | "small" | "large" | "large-100" | "large-200";
  /** Alternative text that describes the avatar for accessibility. */
  alt?: string;
  /** The URL or path to the avatar image. */
  src?: string;
  /** The initials to display in the avatar when no image is provided or fails to load. */
  initials?: string;
  /** Native "load" event. */
  onLoad?: (event: Event) => void;
  /** Native "error" event. */
  onError?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
