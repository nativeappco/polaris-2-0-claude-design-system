import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-banner> — Page- or section-level status message with tone, heading and actions. */
export function Banner(props) {
  return <PolarisElement tag="s-banner" {...props} />;
}
