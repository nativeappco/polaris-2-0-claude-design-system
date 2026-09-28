import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-heading> — Section or content heading; level is inferred from nesting inside s-page/s-section. */
export function Heading(props) {
  return <PolarisElement tag="s-heading" {...props} />;
}
