import React from 'react';

function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="fm-hover"
      style={{
        border: 'none',
        background: 'var(--brand-default)',
        color: 'var(--text-on-dark)',
        height: 36,
        padding: '0 18px',
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--fw-semibold)'
      }}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="fm-hover"
      style={{
        border: '1px solid var(--border-default)',
        background: 'var(--bg-level-1)',
        color: 'var(--text-primary)',
        height: 36,
        padding: '0 18px',
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--fw-semibold)'
      }}
    >
      {children}
    </button>
  );
}

export default function PresentationView({ phases, idx, onPrev, onNext, onJump }) {
  const p = phases[idx];
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: 32 }}>
      <div
        style={{
          background: 'var(--bg-level-1)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-2xl)',
          boxShadow: 'var(--shadow-sm)',
          padding: 48,
          minHeight: 480,
          display: 'flex',
          flexDirection: 'column',
          gap: 32
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--brand-soft)',
                  color: 'var(--success-text-contrast)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--fw-bold)',
                  fontVariantNumeric: 'tabular-nums'
                }}
              >
                Område {p.num} av {String(phases.length).padStart(2, '0')}
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--fw-semibold)',
                  background: p.insightBg,
                  color: p.insightFg
                }}
              >
                Upplevelse: {p.expLabel}
              </span>
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: 'var(--text-3xl)',
                lineHeight: 'var(--lh-3xl)',
                fontWeight: 'var(--fw-bold)',
                letterSpacing: '-0.01em'
              }}
            >
              {p.fas}
            </h1>
            <div
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--lh-lg)'
              }}
            >
              {p.steg}
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--lh-base)',
                color: 'var(--text-secondary)',
                maxWidth: 640,
                textWrap: 'pretty'
              }}
            >
              {p.desc}
            </p>
          </div>
          <div
            style={{
              width: 300,
              flex: 'none',
              background: 'var(--bg-level-2)',
              borderRadius: 'var(--radius-xl)',
              padding: 20
            }}
          >
            <div
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--fw-semibold)',
                color: 'var(--text-secondary)'
              }}
            >
              {p.metric.label}
            </div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 2 }}>
              {p.metric.period}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 12,
                marginTop: 10
              }}
            >
              <div
                style={{
                  fontSize: 'var(--text-5xl)',
                  lineHeight: '52px',
                  fontWeight: 'var(--fw-bold)',
                  letterSpacing: '-0.02em',
                  fontVariantNumeric: 'tabular-nums'
                }}
              >
                {p.metric.value}
                <span
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--fw-semibold)',
                    color: 'var(--text-tertiary)'
                  }}
                >
                  {' '}
                  {p.metric.unit}
                </span>
              </div>
              <svg width="100" height="40" viewBox="0 0 100 40" style={{ flex: 'none', display: 'block' }}>
                <path d={p.sparkAreaLg} fill="var(--aux-bg-default)" />
                <path d={p.sparkLineLg} fill="none" stroke="var(--aux-bg-strong)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--fw-semibold)',
                  background: p.pillBg,
                  color: p.pillFg
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.pillDot }} />
                {p.pillText}
              </span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{p.metric.target}</span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            borderTop: '1px solid var(--border-light)',
            paddingTop: 32
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span
              style={{
                fontSize: 'var(--text-utility-lg)',
                lineHeight: 'var(--lh-utility-lg)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                fontWeight: 'var(--fw-semibold)'
              }}
            >
              Key insight
            </span>
            <div
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--fw-semibold)',
                lineHeight: 'var(--lh-base)',
                textWrap: 'pretty'
              }}
            >
              {p.insight.title}
            </div>
            <div
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--lh-sm)'
              }}
            >
              {p.insight.text}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span
              style={{
                fontSize: 'var(--text-utility-lg)',
                lineHeight: 'var(--lh-utility-lg)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                fontWeight: 'var(--fw-semibold)'
              }}
            >
              Pain points
            </span>
            {p.pains.map((pain, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <img
                  src="/assets/icons/alert-triangle.svg"
                  width={16}
                  height={16}
                  alt=""
                  style={{ flex: 'none', marginTop: 2, opacity: 0.55 }}
                />
                <span
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--fw-semibold)',
                    color: 'var(--text-secondary)',
                    lineHeight: 'var(--lh-sm)'
                  }}
                >
                  {pain.title}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span
              style={{
                fontSize: 'var(--text-utility-lg)',
                lineHeight: 'var(--lh-utility-lg)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                fontWeight: 'var(--fw-semibold)'
              }}
            >
              Möjliga lösningar
            </span>
            {p.solutions.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <img
                  src="/assets/icons/circle-check.svg"
                  width={16}
                  height={16}
                  alt=""
                  style={{ flex: 'none', marginTop: 2, opacity: 0.55 }}
                />
                <div>
                  <div
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--fw-semibold)',
                      lineHeight: 'var(--lh-sm)'
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-secondary)',
                      lineHeight: 'var(--lh-xs)',
                      marginTop: 2
                    }}
                  >
                    {s.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 20 }}>
        <SecondaryButton onClick={onPrev}>Föregående</SecondaryButton>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 8 }}>
          {phases.map((d, i) => (
            <button
              key={d.id}
              onClick={() => onJump(i)}
              title={d.fas}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                background: i === idx ? 'var(--brand-default)' : 'var(--neutral-bg-component)',
                transition: 'background .15s'
              }}
            />
          ))}
        </div>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
          Tips: använd piltangenterna
        </span>
        <PrimaryButton onClick={onNext}>Nästa</PrimaryButton>
      </div>
    </div>
  );
}
