import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-stack> — Lays out children in a block or inline direction with token gaps. */
export function Stack(props) {
  return <PolarisElement tag="s-stack" {...props} />;
}
