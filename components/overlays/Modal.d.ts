import * as React from 'react';

/**
 * Dialog that interrupts the flow for a focused task or confirmation; opened via command/commandfor.
 * Renders the Polaris 2.0 web component <s-modal>. Slots: (default), primary-action, secondary-actions.
 */
export interface ModalProps {
  /** The size of the modal component, controlling its width and height. */
  size?: "base" | "small-100" | "small" | "large" | "large-100";
  /** A title that describes the content of the modal. */
  heading?: string;
  /** A label that describes the purpose of the modal. */
  accessibilityLabel?: string;
  /** Adjust the padding around the modal content. */
  padding?: "base" | "none";
  /** Method to hide an overlay. */
  hideOverlay?: () => void;
  /** Method to show an overlay. */
  showOverlay?: () => void;
  /** Method to toggle the visiblity of an overlay. */
  toggleOverlay?: () => void;
  /** Native "hide" event. */
  onHide?: (event: Event) => void;
  /** Native "show" event. */
  onShow?: (event: Event) => void;
  /** Native "afterhide" event. */
  onAfterHide?: (event: Event) => void;
  /** Native "aftershow" event. */
  onAfterShow?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Modal(props: ModalProps): JSX.Element;
