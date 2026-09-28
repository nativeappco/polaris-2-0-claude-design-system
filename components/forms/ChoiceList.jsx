import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-choice-list> — Group of radio (single) or checkbox (multiple) choices. */
export function ChoiceList(props) {
  return <PolarisElement tag="s-choice-list" {...props} />;
}
