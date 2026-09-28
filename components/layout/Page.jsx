import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

/** <s-page> — Outer wrapper of every route: page heading, primary/secondary/breadcrumb actions and an aside column. */
export function Page(props) {
  return <PolarisElement tag="s-page" {...props} />;
}
