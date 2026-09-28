import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-image> — Responsive image with aspect ratio and object-fit. */
export function Image(props) {
  return <PolarisElement tag="s-image" {...props} />;
}
