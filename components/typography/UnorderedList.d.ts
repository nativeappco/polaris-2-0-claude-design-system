import * as React from 'react';

/**
 * Bulleted list of s-list-item.
 * Renders the Polaris 2.0 web component <s-unordered-list>. Slots: (default).
 */
export interface UnorderedListProps {
  /** A unique identifier for the element. */
  id?: string | undefined;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function UnorderedList(props: UnorderedListProps): JSX.Element;
