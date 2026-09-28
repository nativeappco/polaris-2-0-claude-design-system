import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-link> — Inline text link for navigation inside copy. */
export function Link(props) {
  return <PolarisElement tag="s-link" {...props} />;
}
