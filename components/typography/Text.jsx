import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-text> — Inline text with tone, color, weight and type (strong, address…). */
export function Text(props) {
  return <PolarisElement tag="s-text" {...props} />;
}
