import * as React from 'react';

/**
 * Data table for lists of records, with filters slot, pagination and a list variant for narrow widths.
 * Renders the Polaris 2.0 web component <s-table>. Slots: (default), filters.
 */
export interface TableProps {
  /** The layout variant of the table component. */
  variant?: "auto" | "list";
  /** Whether the table is in a loading state, such as initial page load or loading the next page in a paginated table. */
  loading?: boolean;
  /** Whether to use pagination controls. */
  paginate?: boolean;
  /** Whether there's a previous page of data. */
  hasPreviousPage?: boolean;
  /** Whether there's an additional page of data. */
  hasNextPage?: boolean;
  /** Native "nextpage" event. */
  onNextPage?: (event: Event) => void;
  /** Native "previouspage" event. */
  onPreviousPage?: (event: Event) => void;
  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Table(props: TableProps): JSX.Element;
