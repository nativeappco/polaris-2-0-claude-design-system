import * as React from 'react';

/**
 * Inline text link for navigation inside copy.
 * Renders the Polaris 2.0 web component <s-link>. Slots: (default).
 */
export interface LinkProps {
  /** The semantic meaning and color treatment of the component. */
  tone?: "auto" | "neutral" | "critical";
  /** A label that describes the purpose or content of the component for assistive technologies like screen readers. */
  accessibilityLabel?: string;
  /** The language of the text content. */
  lang?: string;
  /** ID of a component that should respond to interest (e.g. */
  interestFor?: string;
  /** Causes the browser to treat the linked URL as a download with the string being the file name. */
  download?: string;
  /** Specifies where to display the linked URL. */
  target?: "auto" | "_blank" | "_self" | "_parent" | "_top";
  /** Sets the action the `commandFor` should take when this clickable is activated. */
  command?: "--auto" | "--show" | "--hide" | "--toggle" | "--copy";
  /** ID of a component that should respond to activations (e.g. */
  commandFor?: string;
  /** The URL to link to. */
  href?: string;
  /** Native "click" event. */
  onClick?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Link(props: LinkProps): JSX.Element;
