import * as React from 'react';

/**
 * Groups related content with an optional heading and actions; the Polaris 2.0 replacement for cards.
 * Renders the Polaris 2.0 web component <s-section>. Slots: (default), primary-action, secondary-actions, graphic, accessory, supplemental.
 * @startingPoint section="Layout" subtitle="s-section with heading and actions" viewport="700x400"
 */
export interface SectionProps {
  /** A label that describes the purpose or content of the component for assistive technologies like screen readers. */
  accessibilityLabel?: string;
  /** The heading text displayed at the top of the section. */
  heading?: string;
  /** Supporting text that expands on the heading, rendered beneath it in a subdued treatment. */
  subheading?: string;
  /** The padding applied to all edges of the element's content. */
  padding?: "base" | "none";

  /** Place this element in a named slot of its parent (e.g. "primary-action", "aside", "filters"). */
  slot?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare function Section(props: SectionProps): JSX.Element;
