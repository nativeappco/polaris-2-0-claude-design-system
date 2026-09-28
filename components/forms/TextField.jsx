import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-text-field> — Single-line text input with label, details and error. */
export function TextField(props) {
  return <PolarisElement tag="s-text-field" {...props} />;
}
