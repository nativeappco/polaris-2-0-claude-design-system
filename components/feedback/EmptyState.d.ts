import * as React from 'react';

/**
 * Zero-records state with heading, subheading, graphic and a primary action.
 * Renders the Polaris 2.0 web component <s-empty-state>. Slots: primary-action, secondary-actions, graphic, subheading.
 */
export interface EmptyStateProps {
  /** The heading of the EmptyState. */
  heading?: string;

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function EmptyState(props: EmptyStateProps): JSX.Element;
