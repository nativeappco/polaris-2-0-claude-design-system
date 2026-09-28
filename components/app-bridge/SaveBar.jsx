import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

const inAdmin = () => typeof window !== 'undefined' && !!window.shopify;

/**
 * <ui-save-bar> — App Bridge contextual save bar for unsaved changes. Inside the admin the host draws it over the top bar.
 * Outside the admin it renders a preview of the admin's dark save bar (host chrome — the only place tokens are applied directly).
 */
export function SaveBar({ id = 'save-bar', open = false, message = 'Unsaved changes', onSave, onDiscard, saving = false, preview = true }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !inAdmin()) return;
    try { open ? el.show() : el.hide(); } catch (e) { /* not in admin */ }
  }, [open]);
  const native = React.createElement('ui-save-bar', inAdmin() ? { id, ref } : { id, ref, hidden: '' },
    React.createElement('button', { variant: 'primary', onClick: onSave, loading: saving ? '' : undefined }, 'Save'),
    React.createElement('button', { onClick: onDiscard }, 'Discard'));
  if (!preview || inAdmin() || !open) return native;
  return (
    <>
      {native}
      <div role="region" aria-label={message} style={{ position: 'sticky', top: 0, zIndex: 'var(--p-z-index-12, 520)', background: 'var(--p-color-bg-inverse)', color: 'var(--p-color-text-inverse)', padding: 'var(--p-space-200) var(--p-space-400)', borderRadius: 'var(--p-border-radius-300)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--p-space-300)', font: 'var(--p-font-weight-medium) var(--p-font-size-325)/var(--p-font-line-height-500) var(--p-font-family-sans)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--p-space-200)' }}>
          <PolarisElement tag="s-icon" type="alert-triangle" size="small" color="subdued"></PolarisElement>
          {message}
        </span>
        <span style={{ display: 'flex', gap: 'var(--p-space-200)' }}>
          <button type="button" onClick={onDiscard} style={{ font: 'inherit', fontSize: 'var(--p-font-size-300)', color: 'var(--p-color-text-inverse)', background: 'var(--p-color-bg-fill-inverse)', border: 0, borderRadius: 'var(--p-border-radius-full)', padding: 'var(--p-space-150) var(--p-space-300)', cursor: 'pointer' }}>Discard</button>
          <button type="button" onClick={onSave} style={{ font: 'inherit', fontSize: 'var(--p-font-size-300)', color: 'var(--p-color-text)', background: 'var(--p-color-bg-surface)', border: 0, borderRadius: 'var(--p-border-radius-full)', padding: 'var(--p-space-150) var(--p-space-300)', cursor: 'pointer' }}>{saving ? 'Saving…' : 'Save'}</button>
        </span>
      </div>
    </>
  );
}
