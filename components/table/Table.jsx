import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-table> — Data table for lists of records, with filters slot, pagination and a list variant for narrow widths. */
export function Table(props) {
  return <PolarisElement tag="s-table" {...props} />;
}
