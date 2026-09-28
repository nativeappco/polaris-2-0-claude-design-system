import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

const inAdmin = () => typeof window !== 'undefined' && !!window.shopify;

/**
 * <ui-title-bar> — App Bridge page title bar. Inside the Shopify admin the host renders it above the iframe.
 * Outside the admin (prototypes, this design system) it renders a Polaris-built preview of the admin's title bar.
 */
export function TitleBar({ title, primaryAction, secondaryActions = [], breadcrumb, preview = true, children }) {
  const native = (
    <PolarisElement tag="ui-title-bar" title={title} hidden={!inAdmin()}>
      {breadcrumb ? <a variant="breadcrumb" href={breadcrumb.href || '#'}>{breadcrumb.label}</a> : null}
      {secondaryActions.map((a, i) => <button key={i} onClick={a.onClick} tone={a.tone}>{a.label}</button>)}
      {primaryAction ? <button variant="primary" onClick={primaryAction.onClick}>{primaryAction.label}</button> : null}
      {children}
    </PolarisElement>
  );
  if (!preview || inAdmin()) return native;
  return (
    <>
      {native}
      <PolarisElement tag="s-box" paddingBlock="small-200" paddingInline="base">
        <PolarisElement tag="s-stack" direction="inline" justifyContent="space-between" alignItems="center" gap="base">
          <PolarisElement tag="s-stack" direction="inline" gap="small-200" alignItems="center">
            {breadcrumb ? <PolarisElement tag="s-button" variant="tertiary" icon="arrow-left" accessibilityLabel={breadcrumb.label} onClick={breadcrumb.onClick}></PolarisElement> : null}
            {breadcrumb ? <PolarisElement tag="s-text" color="subdued">{breadcrumb.label}</PolarisElement> : null}
            {breadcrumb ? <PolarisElement tag="s-icon" type="chevron-right" size="small" color="subdued"></PolarisElement> : null}
            <PolarisElement tag="s-text" fontWeight="semibold">{title}</PolarisElement>
          </PolarisElement>
          <PolarisElement tag="s-stack" direction="inline" gap="small-200" alignItems="center">
            {secondaryActions.map((a, i) => <PolarisElement key={i} tag="s-button" tone={a.tone} onClick={a.onClick}>{a.label}</PolarisElement>)}
            {primaryAction ? <PolarisElement tag="s-button" variant="primary" loading={primaryAction.loading} disabled={primaryAction.disabled} onClick={primaryAction.onClick}>{primaryAction.label}</PolarisElement> : null}
          </PolarisElement>
        </PolarisElement>
      </PolarisElement>
    </>
  );
}
