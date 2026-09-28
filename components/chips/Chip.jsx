import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-chip> — Static label chip, optionally removable (e.g. applied tags). */
export function Chip(props) {
  return <PolarisElement tag="s-chip" {...props} />;
}
