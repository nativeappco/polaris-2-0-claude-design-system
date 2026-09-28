import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-button-group> — Groups related buttons with consistent spacing; supports primary-action and secondary-actions slots. */
export function ButtonGroup(props) {
  return <PolarisElement tag="s-button-group" {...props} />;
}
