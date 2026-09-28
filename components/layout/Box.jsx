import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-box> — Generic container for token-based padding, background, border and radius. */
export function Box(props) {
  return <PolarisElement tag="s-box" {...props} />;
}
