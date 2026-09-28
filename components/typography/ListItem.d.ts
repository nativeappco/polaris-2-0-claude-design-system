import * as React from 'react';

/**
 * One entry of an ordered or unordered list.
 * Renders the Polaris 2.0 web component <s-list-item>. Slots: (default).
 */
export interface ListItemProps {
  /** A unique identifier for the element. */
  id?: string | undefined;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function ListItem(props: ListItemProps): JSX.Element;
