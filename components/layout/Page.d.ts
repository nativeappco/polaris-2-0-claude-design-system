import * as React from 'react';

/**
 * Outer wrapper of every route: page heading, primary/secondary/breadcrumb actions and an aside column.
 * Renders the Polaris 2.0 web component <s-page>. Slots: (default), aside, primary-action, secondary-actions, breadcrumb-actions, supplemental-start.
 * @startingPoint section="Layout" subtitle="Blank s-page with primary action and sections" viewport="1100x700"
 */
export interface PageProps {
  /** The inline size of the page - `base` corresponds to a set default inline size - `large` full width with whitespace */
  inlineSize?: "base" | "small" | "large";
  /** The main page heading */
  heading?: string;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Page(props: PageProps): JSX.Element;
