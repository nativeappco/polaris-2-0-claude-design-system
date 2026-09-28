import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-select> — Dropdown for choosing one option from a list of s-option. */
export function Select(props) {
  return <PolarisElement tag="s-select" {...props} />;
}
