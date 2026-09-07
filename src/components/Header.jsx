import React from 'react';
import { asset } from '../assetUrl.js';

export default function Header() {
  return (
    <header
      style={{
        background: 'var(--bg-level-1)',
        borderBottom: '1px solid var(--border-default)',
        padding: '0 32px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        position: 'sticky',
        top: 0,
        zIndex: 40
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <img src={asset('/assets/fortnox-mark.svg')} style={{ height: 28, display: 'block' }} alt="Fortnox" />
      </div>
      <div style={{ width: 1, height: 24, background: 'var(--border-default)' }} />
      <div style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
        <div
          style={{
            fontSize: 'var(--text-lg)',
            fontWeight: 'var(--fw-bold)',
            letterSpacing: '-0.01em',
            lineHeight: '22px'
          }}
        >
          Betalresan i Fortnox
        </div>
      </div>
      <div style={{ flex: 1 }} />
    </header>
  );
}
