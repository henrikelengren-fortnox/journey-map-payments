import React from 'react';

export function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flex: 'none' }}>
      <rect x="1.5" y="3.5" width="21" height="17" rx="4" stroke="var(--text-secondary)" strokeWidth="1.6" />
      <path d="M9.75 8.75L16 12L9.75 15.25V8.75Z" fill="var(--text-secondary)" />
    </svg>
  );
}

export function VideoPreviewCard({ visual, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="fm-hover fm-hover-tint"
      style={{
        width: '100%',
        cursor: 'pointer',
        background: 'var(--bg-level-1)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: 14,
        boxShadow: 'var(--shadow-sm)',
        minHeight: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        textAlign: 'left'
      }}
    >
      <PlayIcon />
      <span
        style={{
          fontSize: 'var(--text-xs)',
          color: 'var(--text-secondary)',
          lineHeight: 'var(--lh-xs)'
        }}
      >
        Visa preview
      </span>
    </button>
  );
}

export function VideoModal({ visual, onClose }) {
  if (!visual) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--utility-overlay-60)',
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          background: '#000',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-xl)'
        }}
      >
        <button
          onClick={onClose}
          title="Stäng"
          className="fm-iconbtn"
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            width: 32,
            height: 32,
            border: 'none',
            background: 'rgba(0,0,0,0.5)',
            borderRadius: 'var(--radius-lg)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}
        >
          <img src="/assets/icons/x.svg" width={16} height={16} alt="Stäng" style={{ filter: 'invert(1)' }} />
        </button>
        <video
          src={visual.src}
          controls
          autoPlay
          style={{ display: 'block', maxWidth: '90vw', maxHeight: '90vh' }}
        />
      </div>
    </div>
  );
}
