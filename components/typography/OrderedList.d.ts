import * as React from 'react';

/**
 * Numbered list of s-list-item.
 * Renders the Polaris 2.0 web component <s-ordered-list>. Slots: (default).
 */
export interface OrderedListProps {
  /** A unique identifier for the element. */
  id?: string | undefined;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function OrderedList(props: OrderedListProps): JSX.Element;
