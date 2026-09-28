import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-button> — Primary way to trigger an action or navigate; one primary per page or section. */
export function Button(props) {
  return <PolarisElement tag="s-button" {...props} />;
}
