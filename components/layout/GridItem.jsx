import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-grid-item> — A single cell inside s-grid that controls column/row span. */
export function GridItem(props) {
  return <PolarisElement tag="s-grid-item" {...props} />;
}
