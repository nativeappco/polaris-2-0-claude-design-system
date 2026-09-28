import * as React from 'react';

/**
 * Static label chip, optionally removable (e.g. applied tags).
 * Renders the Polaris 2.0 web component <s-chip>. Slots: (default), graphic.
 */
export interface ChipProps {
  /** The color emphasis level that controls visual intensity. */
  color?: "subdued" | "base" | "strong";
  /** A label that describes the purpose or content of the component for assistive technologies like screen readers. */
  accessibilityLabel?: string;
  /** Whether the chip is removable. */
  removable?: boolean;
  /** Native "remove" event. */
  onRemove?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Chip(props: ChipProps): JSX.Element;
