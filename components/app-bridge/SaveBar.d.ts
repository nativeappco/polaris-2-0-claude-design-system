import * as React from 'react';

/**
 * App Bridge <ui-save-bar>: contextual save bar shown while a form has unsaved changes; renders a preview of the admin bar outside the admin.
 */
export interface SaveBarProps {
  id?: string;
  /** Show the bar (form is dirty). */
  open?: boolean;
  message?: string;
  onSave?: () => void;
  onDiscard?: () => void;
  saving?: boolean;
  preview?: boolean;
}

export declare function SaveBar(props: SaveBarProps): JSX.Element;
