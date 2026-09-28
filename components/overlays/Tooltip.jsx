import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-tooltip> — Short label shown on hover/focus of an element that references it with interestfor. */
export function Tooltip(props) {
  return <PolarisElement tag="s-tooltip" {...props} />;
}
