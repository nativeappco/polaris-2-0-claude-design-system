import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-search-field> — Search input; the filters slot of s-table typically holds one. */
export function SearchField(props) {
  return <PolarisElement tag="s-search-field" {...props} />;
}
