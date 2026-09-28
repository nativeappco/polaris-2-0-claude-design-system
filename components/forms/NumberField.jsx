import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-number-field> — Numeric input with min, max, step, prefix and suffix. */
export function NumberField(props) {
  return <PolarisElement tag="s-number-field" {...props} />;
}
