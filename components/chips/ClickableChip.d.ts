import * as React from 'react';

/**
 * Interactive chip that acts as a link or button (filters, tags).
 * Renders the Polaris 2.0 web component <s-clickable-chip>. Slots: (default), graphic.
 */
export interface ClickableChipProps {
  /** Whether the chip is hidden from view. */
  hidden?: boolean;
  /** Whether the chip is disabled, preventing any user interaction. */
  disabled?: boolean;
  /** The URL to navigate to when clicked. */
  href?: string;
  /** Whether the chip displays a remove button for dismissal. */
  removable?: boolean;
  /** Modify the color to be more or less intense. */
  color?: "subdued" | "base" | "strong";
  /** ID of a component that should respond to interest (e.g. */
  interestFor?: string;
  /** A label that describes the purpose or contents of the Chip. */
  accessibilityLabel?: string;
  /** Sets the action the `commandFor` should take when this clickable is activated. */
  command?: "--auto" | "--show" | "--hide" | "--toggle" | "--copy";
  /** ID of a component that should respond to activations (e.g. */
  commandFor?: string;
  /** Native "click" event. */
  onClick?: (event: Event) => void;
  /** Native "remove" event. */
  onRemove?: (event: Event) => void;
  /** Native "afterhide" event. */
  onAfterHide?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function ClickableChip(props: ClickableChipProps): JSX.Element;
