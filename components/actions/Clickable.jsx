import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-clickable> — Unstyled interactive container that makes a region of content clickable (row-style navigation). */
export function Clickable(props) {
  return <PolarisElement tag="s-clickable" {...props} />;
}
