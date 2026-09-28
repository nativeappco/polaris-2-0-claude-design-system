import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-section> — Groups related content with an optional heading and actions; the Polaris 2.0 replacement for cards. */
export function Section(props) {
  return <PolarisElement tag="s-section" {...props} />;
}
