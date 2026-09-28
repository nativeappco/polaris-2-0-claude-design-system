import * as React from 'react';

/**
 * Drag-and-drop file upload area.
 * Renders the Polaris 2.0 web component <s-drop-zone>. Slots: (default).
 */
export interface DropZoneProps {
  /** A label that describes the purpose or contents of the item. */
  accessibilityLabel?: string;
  /** Whether multiple files can be selected or dropped at once. */
  multiple?: boolean;
  /** A string representing the types of files that are accepted by the drop zone. */
  accept?: string;
  /** Disables the field, disallowing any interaction. */
  disabled?: boolean;
  /** Indicate an error to the user. */
  error?: string;
  /** Content to use as the field label. */
  label?: string;
  /** Whether the field needs a value. */
  required?: boolean;
  /** An identifier for the field that is unique within the nearest containing form. */
  name?: string;
  /** Changes the visibility of the component's label. */
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** A string that represents the path to the selected file(s). */
  value?: string;
  /** An array of File objects representing the files currently selected by the user. */
  files?: File[];
  /** Native "change" event. */
  onChange?: (event: Event) => void;
  /** Native "input" event. */
  onInput?: (event: Event) => void;
  /** Native "droprejected" event. */
  onDropRejected?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function DropZone(props: DropZoneProps): JSX.Element;
