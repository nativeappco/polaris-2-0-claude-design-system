import * as React from 'react';

/**
 * A record row; clickdelegate points at the id of the link that makes the row clickable.
 * Renders the Polaris 2.0 web component <s-table-row>. Slots: (default).
 */
export interface TableRowProps {
  /** The ID of an interactive element, such as `s-link`, in the row that will be the target of the click when the row is clicked. */
  clickDelegate?: string | undefined;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function TableRow(props: TableRowProps): JSX.Element;
