import * as React from 'react';

/**
 * Floating container anchored to a trigger (menus, pickers).
 * Renders the Polaris 2.0 web component <s-popover>. Slots: (default).
 */
export interface PopoverProps {
  /** Adjust the block size. */
  blockSize?: "auto" | "0";
  /** Adjust the inline size. */
  inlineSize?: "auto" | "0";
  /** Adjust the maximum block size. */
  maxBlockSize?: "none" | "0";
  /** Adjust the maximum inline size. */
  maxInlineSize?: "none" | "0";
  /** Adjust the minimum block size. */
  minBlockSize?: "0";
  /** Adjust the minimum inline size. */
  minInlineSize?: "0";
  /** Native "hide" event. */
  onHide?: (event: Event) => void;
  /** Native "show" event. */
  onShow?: (event: Event) => void;
  /** Native "afterhide" event. */
  onAfterHide?: (event: Event) => void;
  /** Native "aftershow" event. */
  onAfterShow?: (event: Event) => void;
  /** Native "toggle" event. */
  onToggle?: (event: Event) => void;
  /** Native "aftertoggle" event. */
  onAfterToggle?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Popover(props: PopoverProps): JSX.Element;
