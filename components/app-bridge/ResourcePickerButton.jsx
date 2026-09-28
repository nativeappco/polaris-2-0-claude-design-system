import React from 'react';
import { PolarisElement } from '../core/PolarisElement.jsx';

const SAMPLE = [
  { id: 'gid://shopify/Product/1', title: 'Salmon Supreme Sneakers', status: 'Active', inventory: 'Inventory not tracked' },
  { id: 'gid://shopify/Product/2', title: 'Marlin Motion Fitness Tracker', status: 'Active', inventory: '12 in stock' },
  { id: 'gid://shopify/Product/3', title: 'Trout Traveler Suitcase', status: 'Active', inventory: '4 in stock' },
  { id: 'gid://shopify/Product/4', title: 'Swordfish Slim Wallet', status: 'Draft', inventory: '0 in stock' },
  { id: 'gid://shopify/Product/5', title: 'Clownfish Color-Changing Mug', status: 'Active', inventory: '31 in stock' },
];

/**
 * Button that opens the App Bridge Resource Picker (shopify.resourcePicker) for products, variants or collections.
 * Outside the admin it opens a simulated picker built from Polaris components so prototypes stay clickable.
 */
export function ResourcePickerButton({ slot, type = 'product', multiple = true, label = 'Browse', variant = 'secondary', icon, onSelect, sampleItems = SAMPLE }) {
  const id = React.useMemo(() => 'rp-' + Math.random().toString(36).slice(2, 8), []);
  const [picked, setPicked] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const modalRef = React.useRef(null);
  const open = async () => {
    if (window.shopify && window.shopify.resourcePicker) {
      const res = await window.shopify.resourcePicker({ type, multiple, action: 'select' });
      if (res && onSelect) onSelect(res);
      return;
    }
    setPicked([]);
    modalRef.current && modalRef.current.showOverlay && modalRef.current.showOverlay();
  };
  const close = () => modalRef.current && modalRef.current.hideOverlay && modalRef.current.hideOverlay();
  const toggle = (itemId) => setPicked((p) => (p.includes(itemId) ? p.filter((x) => x !== itemId) : multiple ? [...p, itemId] : [itemId]));
  const rows = sampleItems.filter((s) => s.title.toLowerCase().includes(query.toLowerCase()));
  const noun = type === 'collection' ? 'collections' : type === 'variant' ? 'variants' : 'products';
  return (
    <>
      <PolarisElement tag="s-button" slot={slot} variant={variant} icon={icon} onClick={open}>{label}</PolarisElement>
      {React.createElement('s-modal', { id, ref: modalRef, heading: 'Select ' + noun, size: 'base' },
        <PolarisElement tag="s-stack" gap="base">
          <PolarisElement tag="s-search-field" label={'Search ' + noun} labelAccessibilityVisibility="exclusive" placeholder={'Search ' + noun} onInput={(e) => setQuery(e.target.value || '')}></PolarisElement>
          <PolarisElement tag="s-stack" gap="none">
            {rows.map((r, i) => (
              <React.Fragment key={r.id}>
                {i > 0 ? <PolarisElement tag="s-divider"></PolarisElement> : null}
                <PolarisElement tag="s-clickable" paddingBlock="small-200" onClick={() => toggle(r.id)}>
                  <PolarisElement tag="s-stack" direction="inline" gap="small-100" alignItems="center">
                    <PolarisElement tag="s-checkbox" label={r.title} labelAccessibilityVisibility="exclusive" checked={picked.includes(r.id)}></PolarisElement>
                    <PolarisElement tag="s-thumbnail" size="small-200" alt=""></PolarisElement>
                    <PolarisElement tag="s-stack" gap="none">
                      <PolarisElement tag="s-text">{r.title}</PolarisElement>
                      <PolarisElement tag="s-text" color="subdued">{r.inventory}</PolarisElement>
                    </PolarisElement>
                  </PolarisElement>
                </PolarisElement>
              </React.Fragment>
            ))}
          </PolarisElement>
        </PolarisElement>,
        <PolarisElement tag="s-button" slot="primary-action" variant="primary" disabled={!picked.length} onClick={() => { onSelect && onSelect(sampleItems.filter((s) => picked.includes(s.id))); close(); }}>Select</PolarisElement>,
        <PolarisElement tag="s-button" slot="secondary-actions" onClick={close}>Cancel</PolarisElement>
      )}
    </>
  );
}
