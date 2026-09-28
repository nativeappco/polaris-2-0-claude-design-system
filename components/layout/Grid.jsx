import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-grid> — CSS-grid layout with token gaps; use for multi-column forms and dashboards. */
export function Grid(props) {
  return <PolarisElement tag="s-grid" {...props} />;
}
