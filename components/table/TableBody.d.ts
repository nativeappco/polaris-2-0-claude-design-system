import * as React from 'react';

/**
 * Body of s-table; contains s-table-row.
 * Renders the Polaris 2.0 web component <s-table-body>. Slots: (default).
 */
export interface TableBodyProps {
  /** A unique identifier for the element. */
  id?: string | undefined;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function TableBody(props: TableBodyProps): JSX.Element;
