import React from 'react';

export default function GoalBand() {
  return (
    <div
      style={{
        background: 'var(--brand-dark)',
        color: 'var(--text-on-dark)',
        padding: '24px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: 48,
        flexWrap: 'wrap'
      }}
    >
      <div style={{ flex: 1, minWidth: 420 }}>
        <div
          style={{
            fontSize: 'var(--text-utility-lg)',
            lineHeight: 'var(--lh-utility-lg)',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: 'var(--brand-live-green)',
            fontWeight: 600,
            marginBottom: 6
          }}
        >
          Objective
        </div>
        <div
          style={{
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--lh-lg)',
            maxWidth: 840,
            textWrap: 'pretty'
          }}
        >
          Göra betalning i Fortnox till en enhetlig, enkel och trygg upplevelse oavsett vad som betalas, och därigenom
          öka användningen av betalningar i plattformen samt driva adoption av inbäddad finansiering.
        </div>
      </div>
    </div>
  );
}
