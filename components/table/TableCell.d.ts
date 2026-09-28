import * as React from 'react';

/**
 * A single data cell.
 * Renders the Polaris 2.0 web component <s-table-cell>. Slots: (default).
 */
export interface TableCellProps {
  /** A unique identifier for the element. */
  id?: string | undefined;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function TableCell(props: TableCellProps): JSX.Element;
