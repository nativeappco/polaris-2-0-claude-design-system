import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

const inAdmin = () => typeof window !== 'undefined' && !!window.shopify;

/**
 * Modal that must escape the app iframe. In the admin it renders App Bridge <ui-modal> (+ <ui-title-bar> for actions);
 * outside the admin it falls back to Polaris <s-modal>, which is visually equivalent.
 */
export function AppModal({ id, heading, open = false, onHide, primaryAction, secondaryActions = [], size = 'base', children }) {
  const ref = React.useRef(null);
  const admin = inAdmin();
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fn = () => onHide && onHide();
    el.addEventListener(admin ? 'hide' : 'afterhide', fn);
    return () => el.removeEventListener(admin ? 'hide' : 'afterhide', fn);
  }, [onHide, admin]);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!admin && !open && !el.showOverlay) return;
    const run = () => {
      try {
        if (admin) { open ? el.show() : el.hide(); }
        else if (el.showOverlay) { open ? el.showOverlay() : el.hideOverlay(); }
        else return false;
      } catch (e) { return false; }
      return true;
    };
    if (!run()) customElements.whenDefined('s-modal').then(() => requestAnimationFrame(run));
  }, [open, admin]);
  if (admin) {
    return React.createElement('ui-modal', { id, ref, variant: size === 'large' ? 'large' : size === 'small' ? 'small' : 'base' },
      React.createElement('div', null, children),
      React.createElement('ui-title-bar', { title: heading },
        primaryAction ? React.createElement('button', { variant: 'primary', tone: primaryAction.tone, onClick: primaryAction.onClick }, primaryAction.label) : null,
        secondaryActions.map((a, i) => React.createElement('button', { key: i, onClick: a.onClick }, a.label))));
  }
  return React.createElement('s-modal', { id, ref, heading, size },
    children,
    primaryAction ? <PolarisElement tag="s-button" slot="primary-action" variant="primary" tone={primaryAction.tone} loading={primaryAction.loading} onClick={primaryAction.onClick}>{primaryAction.label}</PolarisElement> : null,
    secondaryActions.map((a, i) => <PolarisElement key={i} tag="s-button" slot="secondary-actions" onClick={a.onClick}>{a.label}</PolarisElement>));
}
