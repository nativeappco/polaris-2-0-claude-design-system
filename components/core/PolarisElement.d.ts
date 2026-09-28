import * as React from 'react';

/**
 * Generic renderer for any Polaris 2.0 (s-*) or App Bridge (ui-*) custom element. Loads the Polaris runtime from Shopify's CDN once.
 * Use the named wrappers (Button, Section…) instead where they exist; reach for this only for tags without a wrapper.
 */
export interface PolarisElementProps {
  /** Custom element tag, e.g. "s-button" or "ui-title-bar". */
  tag: string;
  slot?: string;
  id?: string;
  children?: React.ReactNode;
  [attribute: string]: unknown;
}

export declare function PolarisElement(props: PolarisElementProps): JSX.Element;
export declare function loadPolarisRuntime(): void;
export declare const POLARIS_RUNTIME_URL: string;
