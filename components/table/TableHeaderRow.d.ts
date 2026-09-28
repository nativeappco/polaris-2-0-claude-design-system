import * as React from 'react';

/**
 * Header row of s-table; contains s-table-header.
 * Renders the Polaris 2.0 web component <s-table-header-row>. Slots: (default).
 */
export interface TableHeaderRowProps {
  /** A unique identifier for the element. */
  id?: string | undefined;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function TableHeaderRow(props: TableHeaderRowProps): JSX.Element;
