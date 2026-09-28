import React from 'react';

export const POLARIS_RUNTIME_URL = 'https://cdn.shopify.com/shopifycloud/polaris-2.0-rc.js';

/** Injects the Polaris 2.0 runtime once. In a real embedded app, put the <script> tag in <head> instead. */
export function loadPolarisRuntime() {
  if (typeof document === 'undefined') return;
  if (window.__polarisRuntimeRequested || (window.customElements && customElements.get('s-button'))) return;
  if (document.querySelector('script[src="' + POLARIS_RUNTIME_URL + '"]')) { window.__polarisRuntimeRequested = true; return; }
  window.__polarisRuntimeRequested = true;
  const s = document.createElement('script');
  s.src = POLARIS_RUNTIME_URL;
  document.head.appendChild(s);
}
loadPolarisRuntime();

const LIVE_PROPS = ['value', 'checked', 'values', 'selected', 'pressed', 'indeterminate'];

/**
 * Renders any Polaris / App Bridge custom element from React props.
 * camelCase props become lowercase attributes (inlineSize → inlinesize), true → present, false/null → omitted,
 * onX handlers become native event listeners (onChange → "change"), value/checked/values are also set as properties.
 */
export function PolarisElement({ tag = 's-box', children, ...props }) {
  loadPolarisRuntime();
  const ref = React.useRef(null);
  const attrs = {};
  const events = {};
  const live = {};
  for (const k of Object.keys(props)) {
    const v = props[k];
    if (k === 'className' || k === 'style' || k === 'key') { attrs[k] = v; continue; }
    if (/^on[A-Z]/.test(k) && typeof v === 'function') { events[k.slice(2).toLowerCase()] = v; continue; }
    if (LIVE_PROPS.includes(k) && v != null) live[k] = v;
    if (v === false || v == null) continue;
    const name = /^(aria|data)[A-Z]/.test(k) ? k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()) : (k.includes('-') ? k : k.toLowerCase());
    attrs[name] = v === true ? '' : Array.isArray(v) ? v.join(',') : String(v);
  }
  const handlers = React.useRef(events);
  handlers.current = events;
  const eventKey = Object.keys(events).sort().join(',');
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !eventKey) return undefined;
    const bound = eventKey.split(',').map((n) => {
      const fn = (e) => handlers.current[n] && handlers.current[n](e);
      el.addEventListener(n, fn);
      return [n, fn];
    });
    return () => bound.forEach(([n, fn]) => el.removeEventListener(n, fn));
  }, [eventKey]);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    for (const k of Object.keys(live)) { try { if (el[k] !== live[k]) el[k] = live[k]; } catch (e) { /* read-only */ } }
  });
  return React.createElement(tag, { ref, ...attrs }, children);
}
