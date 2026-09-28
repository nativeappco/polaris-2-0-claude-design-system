import * as React from 'react';

/**
 * Horizontal progress bar for determinate progress.
 * Renders the Polaris 2.0 web component <s-progress>. Slots: none.
 */
export interface ProgressProps {
  /** A label that describes the purpose or content of the component for assistive technologies like screen readers. */
  accessibilityLabel?: string;
  /** How much work the task requires in total. */
  max?: number;
  /** The semantic meaning and color treatment of the component. */
  tone?: "auto" | "neutral" | "info" | "success" | "caution" | "warning" | "critical";
  /** How much of the task has been completed, as a number between `0` and `max`. */
  value?: number;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Progress(props: ProgressProps): JSX.Element;
