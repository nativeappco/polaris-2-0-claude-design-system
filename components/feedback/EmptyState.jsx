import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-empty-state> — Zero-records state with heading, subheading, graphic and a primary action. */
export function EmptyState(props) {
  return <PolarisElement tag="s-empty-state" {...props} />;
}
