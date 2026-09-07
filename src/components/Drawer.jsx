import React, { useEffect, useMemo, useState } from 'react';
import { enrichPhase } from '../phases.js';
import { Pill } from './Editable.jsx';
import { VideoPreviewCard, VideoModal } from './VideoPreview.jsx';

function SectionEyebrow({ children }) {
  return (
    <span
      style={{
        fontSize: 'var(--text-utility-lg)',
        lineHeight: 'var(--lh-utility-lg)',
        color: 'var(--text-secondary)',
        fontWeight: 'var(--fw-bold)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase'
      }}
    >
      {children}
    </span>
  );
}

function SectionShell({ title, background, children }) {
  return (
    <div
      className="fm-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        padding: '24px 28px',
        borderTop: '1px solid var(--border-light)',
        background: background || 'var(--bg-level-1)'
      }}
    >
      <SectionEyebrow>{title}</SectionEyebrow>
      {children}
    </div>
  );
}

/* ──────────── Sections ──────────── */

function OverviewSection({ rawPhase }) {
  return (
    <SectionShell title="Översikt">
      <p
        style={{
          margin: 0,
          fontSize: 'var(--text-base)',
          lineHeight: 'var(--lh-base)',
          color: 'var(--text-secondary)',
          textWrap: 'pretty'
        }}
      >
        {rawPhase.desc}
      </p>
    </SectionShell>
  );
}

function InsightSection({ rawPhase, enriched }) {
  return (
    <SectionShell title="Key insight">
      <Pill background={enriched.insightBg} color={enriched.insightFg} style={{ alignSelf: 'flex-start' }}>
        {enriched.insightType}
      </Pill>
      <div
        style={{
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--fw-semibold)',
          lineHeight: 'var(--lh-base)'
        }}
      >
        {rawPhase.insight.title}
      </div>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-sm)' }}>
        {rawPhase.insight.text}
      </div>
      {rawPhase.citat && (
        <div
          style={{
            fontSize: 'var(--text-sm)',
            fontStyle: 'italic',
            color: 'var(--text-tertiary)',
            lineHeight: 'var(--lh-sm)',
            borderLeft: '2px solid var(--border-default)',
            paddingLeft: 12,
            marginTop: 4
          }}
        >
          {rawPhase.citat}
        </div>
      )}
    </SectionShell>
  );
}

function PainsSection({ rawPhase }) {
  return (
    <SectionShell title="Pain points" background="var(--bg-viewport)">
      {rawPhase.pains.map((pain, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <img
            src="/assets/icons/alert-triangle.svg"
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
              {pain.title}
            </div>
            {pain.text && (
              <div
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--lh-xs)',
                  marginTop: 2
                }}
              >
                {pain.text}
              </div>
            )}
          </div>
        </div>
      ))}
    </SectionShell>
  );
}

function VisualiseringSection({ rawPhase, onOpenVideo }) {
  if (rawPhase.visualisering?.type !== 'video') return null;
  return (
    <SectionShell title="Visualisering" background="var(--bg-viewport)">
      <VideoPreviewCard visual={rawPhase.visualisering} onOpen={onOpenVideo} />
    </SectionShell>
  );
}

function BusinessAreasSection({ rawPhase }) {
  if (!rawPhase.businessAreas?.length) return null;
  return (
    <SectionShell title="Påverkade affärsområden">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {rawPhase.businessAreas.map((area, i) => (
          <Pill key={i} background="var(--neutral-bg-default)" color="var(--neutral-text-default)">
            {area}
          </Pill>
        ))}
      </div>
    </SectionShell>
  );
}

function SolutionCard({ solution }) {
  return (
    <div
      className="fm-section"
      style={{
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        background: 'var(--bg-level-1)'
      }}
    >
      <div
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--fw-semibold)',
          lineHeight: 'var(--lh-sm)'
        }}
      >
        {solution.title}
      </div>
      {solution.text && (
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-xs)' }}>
          {solution.text}
        </div>
      )}
      {(solution.impact || solution.effort) && (
        <div style={{ display: 'flex', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
          {solution.impact && (
            <Pill
              background={solution.impact === 'Hög' ? 'var(--success-bg-default)' : 'var(--neutral-bg-default)'}
              color={solution.impact === 'Hög' ? 'var(--success-text-default)' : 'var(--neutral-text-default)'}
            >
              Effekt: {solution.impact.toLowerCase()}
            </Pill>
          )}
          {solution.effort && (
            <Pill background="var(--neutral-bg-default)" color="var(--neutral-text-default)">
              Insats: {solution.effort.toLowerCase()}
            </Pill>
          )}
        </div>
      )}
    </div>
  );
}

function SolutionsSection({ rawPhase }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        padding: '24px 28px',
        borderTop: '1px solid var(--border-light)',
        background: 'var(--bg-level-1)'
      }}
    >
      <SectionEyebrow>Möjliga lösningar</SectionEyebrow>
      {rawPhase.solutions.map((s, i) => (
        <SolutionCard key={i} solution={s} />
      ))}
    </div>
  );
}

/* ──────────── Drawer ──────────── */

export default function Drawer({ idx, rawPhase, onClose }) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(!!rawPhase);
  const [openVideo, setOpenVideo] = useState(null);

  useEffect(() => {
    if (rawPhase) {
      setMounted(true);
      const t = setTimeout(() => setVisible(true), 20);
      return () => clearTimeout(t);
    }
    setVisible(false);
    const t = setTimeout(() => setMounted(false), 300);
    return () => clearTimeout(t);
  }, [rawPhase]);

  useEffect(() => {
    if (!rawPhase) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [rawPhase, onClose]);

  const enriched = useMemo(() => (rawPhase ? enrichPhase(rawPhase, idx) : null), [rawPhase, idx]);

  if (!mounted || !rawPhase || !enriched) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--utility-overlay-60)',
          zIndex: 90,
          opacity: visible ? 1 : 0,
          transition: 'opacity .25s cubic-bezier(0.2, 0, 0, 1)',
          cursor: 'pointer'
        }}
      />
      <aside
        aria-label="Detaljpanel"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 580,
          maxWidth: '94vw',
          background: 'var(--bg-level-1)',
          zIndex: 100,
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          transform: visible ? 'translateX(0)' : 'translateX(40px)',
          opacity: visible ? 1 : 0,
          transition: 'transform .3s cubic-bezier(0.2, 0, 0, 1), opacity .2s cubic-bezier(0.2, 0, 0, 1)'
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '22px 28px',
            borderBottom: '1px solid var(--border-default)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12
          }}
        >
          <span
            style={{
              width: 36,
              height: 36,
              flex: 'none',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--brand-soft)',
              color: 'var(--success-text-contrast)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--fw-bold)',
              fontVariantNumeric: 'tabular-nums'
            }}
          >
            {enriched.num}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 'var(--lh-xl)',
                fontWeight: 'var(--fw-bold)',
                letterSpacing: '-0.01em'
              }}
            >
              {rawPhase.fas}
            </div>
          </div>
          <button
            onClick={onClose}
            title="Stäng"
            className="fm-iconbtn"
            style={{
              width: 32,
              height: 32,
              flex: 'none',
              border: 'none',
              background: 'transparent',
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background .15s'
            }}
          >
            <img src="/assets/icons/x.svg" width={16} height={16} alt="Stäng" />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <OverviewSection rawPhase={rawPhase} />
          <InsightSection rawPhase={rawPhase} enriched={enriched} />
          <PainsSection rawPhase={rawPhase} />
          <SolutionsSection rawPhase={rawPhase} />
          <VisualiseringSection rawPhase={rawPhase} onOpenVideo={() => setOpenVideo(rawPhase.visualisering)} />
          <BusinessAreasSection rawPhase={rawPhase} />
        </div>
      </aside>
      <VideoModal visual={openVideo} onClose={() => setOpenVideo(null)} />
    </>
  );
}
