import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-table-row> — A record row; clickdelegate points at the id of the link that makes the row clickable. */
export function TableRow(props) {
  return <PolarisElement tag="s-table-row" {...props} />;
}
