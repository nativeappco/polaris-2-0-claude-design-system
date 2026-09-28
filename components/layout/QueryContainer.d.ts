import * as React from 'react';

/**
 * Establishes a container-query context so children can respond to their container width.
 * Renders the Polaris 2.0 web component <s-query-container>. Slots: (default).
 */
export interface QueryContainerProps {
  /** An identifier for this container that you can reference in CSS container queries to apply styles based on this specific container's size. */
  containerName?: string;
  /** A unique identifier for the element. */
  id?: string;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function QueryContainer(props: QueryContainerProps): JSX.Element;
