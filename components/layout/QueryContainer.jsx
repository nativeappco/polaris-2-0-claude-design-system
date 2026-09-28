import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-query-container> — Establishes a container-query context so children can respond to their container width. */
export function QueryContainer(props) {
  return <PolarisElement tag="s-query-container" {...props} />;
}
