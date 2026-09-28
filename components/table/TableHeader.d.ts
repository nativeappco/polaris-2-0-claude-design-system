import * as React from 'react';

/**
 * Column heading; listslot controls placement in the mobile list variant.
 * Renders the Polaris 2.0 web component <s-table-header>. Slots: (default).
 */
export interface TableHeaderProps {
  /** The content designation for this column when the table displays in list variant on mobile devices. */
  listSlot?: "primary" | "secondary" | "inline" | "kicker" | "labeled";
  /** The format of the column that controls styling and alignment of cell content. */
  format?: "base" | "numeric" | "currency";

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function TableHeader(props: TableHeaderProps): JSX.Element;
