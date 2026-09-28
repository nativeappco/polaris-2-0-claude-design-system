import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-modal> — Dialog that interrupts the flow for a focused task or confirmation; opened via command/commandfor. */
export function Modal(props) {
  return <PolarisElement tag="s-modal" {...props} />;
}
