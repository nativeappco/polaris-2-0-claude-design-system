import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-number> — Formats and displays a number with tabular figures (wraps <s-number>). */
export function NumberText(props) {
  return <PolarisElement tag="s-number" {...props} />;
}
