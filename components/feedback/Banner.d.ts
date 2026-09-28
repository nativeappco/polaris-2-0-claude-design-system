import * as React from 'react';

/**
 * Page- or section-level status message with tone, heading and actions.
 * Renders the Polaris 2.0 web component <s-banner>. Slots: (default), secondary-actions.
 */
export interface BannerProps {
  /** The semantic meaning and color treatment of the component. */
  tone?: "auto" | "info" | "success" | "warning" | "critical";
  /** The heading text displayed at the top of the banner. */
  heading?: string;
  /** Whether the banner displays a close button that allows users to dismiss it. */
  dismissible?: boolean;
  /** Controls whether the banner is visible or hidden. */
  hidden?: boolean;
  /** Native "dismiss" event. */
  onDismiss?: (event: Event) => void;
  /** Native "afterhide" event. */
  onAfterHide?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Banner(props: BannerProps): JSX.Element;
