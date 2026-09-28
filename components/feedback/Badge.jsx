import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-badge> — Short status label for a record (Active, Draft, Archived). */
export function Badge(props) {
  return <PolarisElement tag="s-badge" {...props} />;
}
