import * as React from 'react';

/**
 * Button that opens the App Bridge Resource Picker (shopify.resourcePicker) for products, variants or collections; simulated with Polaris outside the admin.
 */
export interface ResourcePickerButtonProps {
  /** Slot for the trigger button (e.g. "secondary-actions" of an s-section). */
  slot?: string;
  type?: 'product' | 'variant' | 'collection';
  multiple?: boolean;
  label?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  icon?: string;
  /** Receives the selection (App Bridge payload in the admin, sample items in prototypes). */
  onSelect?: (selection: unknown[]) => void;
  sampleItems?: { id: string; title: string; status?: string; inventory?: string }[];
}

export declare function ResourcePickerButton(props: ResourcePickerButtonProps): JSX.Element;
