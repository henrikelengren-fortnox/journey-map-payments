import React, { useState } from 'react';
import { VideoPreviewCard, VideoModal } from './VideoPreview.jsx';
import { asset } from '../assetUrl.js';

const LABEL_WIDTH = 116;
const COL_MIN_WIDTH = 248;
const COL_GAP = 12;
const FLEX_GAP = 16;
const SIDE_PADDING = 32;

function eyebrowStyle() {
  return {
    fontSize: 'var(--text-utility-lg)',
    lineHeight: 'var(--lh-utility-lg)',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: 'var(--text-tertiary)',
    fontWeight: 'var(--fw-semibold)'
  };
}

function StaticLabel({ children, align = 'center' }) {
  return (
    <div
      style={{
        width: LABEL_WIDTH,
        flex: 'none',
        display: 'flex',
        alignItems: align === 'top' ? 'flex-start' : 'center',
        paddingTop: align === 'top' ? 12 : 0
      }}
    >
      <span style={eyebrowStyle()}>{children}</span>
    </div>
  );
}

function ToggleLabel({ open, onToggle, children }) {
  return (
    <div style={{ width: LABEL_WIDTH, flex: 'none', paddingTop: 6 }}>
      <button
        onClick={onToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          padding: 0,
          textAlign: 'left'
        }}
      >
        <img
          src={asset('/assets/icons/chevron-down.svg')}
          width={14}
          height={14}
          alt=""
          style={{
            transition: 'transform .15s',
            transform: open ? 'rotate(0deg)' : 'rotate(-90deg)',
            flex: 'none'
          }}
        />
        <span style={eyebrowStyle()}>{children}</span>
      </button>
    </div>
  );
}

function Grid({ count, children }) {
  return (
    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: `repeat(${count}, 1fr)`,
        gap: COL_GAP
      }}
    >
      {children}
    </div>
  );
}

function PhaseButton({ phase, onOpen }) {
  return (
    <button
      onClick={onOpen}
      title="Visa detaljer och lösningsförslag"
      className="fm-hover"
      style={{
        width: '100%',
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        border: '1px solid var(--border-brand)',
        background: 'var(--brand-soft)',
        color: 'var(--success-text-contrast)',
        borderRadius: 'var(--radius-lg)',
        padding: '10px 14px',
        cursor: 'pointer',
        textAlign: 'left'
      }}
    >
      <span
        style={{
          flex: 'none',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--fw-bold)',
          opacity: 0.55,
          fontVariantNumeric: 'tabular-nums'
        }}
      >
        {phase.num}
      </span>
      <span
        style={{
          flex: 1,
          minWidth: 0,
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--fw-semibold)',
          lineHeight: 'var(--lh-sm)',
          textWrap: 'pretty'
        }}
      >
        {phase.fas}
      </span>
      <img
        src={asset('/assets/icons/chevron-right.svg')}
        width={14}
        height={14}
        alt=""
        style={{ marginLeft: 'auto', opacity: 0.5, flex: 'none' }}
      />
    </button>
  );
}

export default function KartaView({
  phases,
  rows,
  onToggleRow,
  onOpen,
  swimlanes
}) {
  const [openVideo, setOpenVideo] = useState(null);
  const N = phases.length;
  const cols = N;
  const minWidth = Math.max(
    1620,
    LABEL_WIDTH + FLEX_GAP + cols * COL_MIN_WIDTH + (N - 1) * COL_GAP + SIDE_PADDING * 2
  );

  return (
    <div style={{ overflowX: 'auto', padding: '24px 0 8px' }}>
      <div
        style={{
          minWidth,
          padding: `0 ${SIDE_PADDING}px`,
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }}
      >
        {/* OMRÅDE row */}
        <div style={{ display: 'flex', gap: FLEX_GAP }}>
          <StaticLabel>Område</StaticLabel>
          <Grid count={cols}>
            {phases.map((p, i) => (
              <PhaseButton key={p.id} phase={p} onOpen={() => onOpen(i)} />
            ))}
          </Grid>
        </div>

        {/* KEY INSIGHTS row */}
        <div style={{ display: 'flex', gap: FLEX_GAP }}>
          <ToggleLabel open={rows.insights} onToggle={() => onToggleRow('insights')}>
            Key insights
          </ToggleLabel>
          <div style={{ flex: 1 }}>
            {rows.insights && (
              <Grid count={cols}>
                {phases.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      background: 'var(--bg-level-1)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-xl)',
                      padding: 14,
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8
                    }}
                  >
                    <span
                      style={{
                        alignSelf: 'flex-start',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--fw-semibold)',
                        background: p.insightBg,
                        color: p.insightFg
                      }}
                    >
                      {p.insightType}
                    </span>
                    <div
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: 'var(--fw-semibold)',
                        lineHeight: 'var(--lh-sm)',
                        textWrap: 'pretty'
                      }}
                    >
                      {p.insight.title}
                    </div>
                    <div
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--text-secondary)',
                        lineHeight: 'var(--lh-xs)'
                      }}
                    >
                      {p.insight.text}
                    </div>
                  </div>
                ))}
              </Grid>
            )}
          </div>
        </div>

        {/* CITAT row */}
        <div style={{ display: 'flex', gap: FLEX_GAP }}>
          <ToggleLabel open={rows.citat} onToggle={() => onToggleRow('citat')}>
            Citat
          </ToggleLabel>
          <div style={{ flex: 1 }}>
            {rows.citat && (
              <Grid count={cols}>
                {phases.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      background: 'var(--bg-level-1)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-xl)',
                      padding: 14,
                      boxShadow: 'var(--shadow-sm)',
                      fontSize: 'var(--text-xs)',
                      fontStyle: 'italic',
                      color: 'var(--text-secondary)',
                      lineHeight: 'var(--lh-xs)'
                    }}
                  >
                    {p.citat}
                  </div>
                ))}
              </Grid>
            )}
          </div>
        </div>

        {/* PAIN POINTS row */}
        <div style={{ display: 'flex', gap: FLEX_GAP }}>
          <ToggleLabel open={rows.pains} onToggle={() => onToggleRow('pains')}>
            Pain points
          </ToggleLabel>
          <div style={{ flex: 1 }}>
            {rows.pains && (
              <Grid count={cols}>
                {phases.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      background: 'var(--bg-level-1)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-xl)',
                      padding: 14,
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10
                    }}
                  >
                    {p.pains.map((pain, j) => (
                      <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <img
                          src={asset('/assets/icons/alert-triangle.svg')}
                          width={14}
                          height={14}
                          alt=""
                          style={{ flex: 'none', marginTop: 2, opacity: 0.55 }}
                        />
                        <span
                          style={{
                            fontSize: 'var(--text-xs)',
                            fontWeight: 'var(--fw-semibold)',
                            color: 'var(--text-secondary)',
                            lineHeight: 'var(--lh-xs)'
                          }}
                        >
                          {pain.title}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </Grid>
            )}
          </div>
        </div>

        {/* OBJECTIVE row */}
        <div style={{ display: 'flex', gap: FLEX_GAP }}>
          <ToggleLabel open={rows.objective} onToggle={() => onToggleRow('objective')}>
            Objective
          </ToggleLabel>
          <div style={{ flex: 1 }}>
            {rows.objective && (
              <Grid count={cols}>
                {phases.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      background: 'var(--bg-level-1)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-xl)',
                      padding: 14,
                      boxShadow: 'var(--shadow-sm)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-secondary)',
                      lineHeight: 'var(--lh-xs)'
                    }}
                  >
                    {p.desc}
                  </div>
                ))}
              </Grid>
            )}
          </div>
        </div>

        {/* SOLUTIONS row */}
        <div style={{ display: 'flex', gap: FLEX_GAP }}>
          <ToggleLabel open={rows.solutions} onToggle={() => onToggleRow('solutions')}>
            Solutions
          </ToggleLabel>
          <div style={{ flex: 1 }}>
            {rows.solutions && (
              <Grid count={cols}>
                {phases.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      background: 'var(--bg-level-1)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-xl)',
                      padding: 14,
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10
                    }}
                  >
                    {p.solutions.map((s, j) => (
                      <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <img
                          src={asset('/assets/icons/circle-check.svg')}
                          width={14}
                          height={14}
                          alt=""
                          style={{ flex: 'none', marginTop: 2, opacity: 0.55 }}
                        />
                        <span
                          style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--text-secondary)',
                            lineHeight: 'var(--lh-xs)'
                          }}
                        >
                          {s.title}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </Grid>
            )}
          </div>
        </div>

        {/* VISUALISERING row */}
        <div style={{ display: 'flex', gap: FLEX_GAP }}>
          <ToggleLabel open={rows.visualisering} onToggle={() => onToggleRow('visualisering')}>
            Visualisering
          </ToggleLabel>
          <div style={{ flex: 1 }}>
            {rows.visualisering && (
              <Grid count={cols}>
                {phases.map((p) =>
                  p.visualisering?.type === 'video' ? (
                    <VideoPreviewCard
                      key={p.id}
                      visual={p.visualisering}
                      onOpen={() => setOpenVideo(p.visualisering)}
                    />
                  ) : (
                    <div
                      key={p.id}
                      style={{
                        background: 'var(--bg-level-1)',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-xl)',
                        padding: 14,
                        boxShadow: 'var(--shadow-sm)',
                        minHeight: 56,
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        lineHeight: 'var(--lh-sm)'
                      }}
                    />
                  )
                )}
              </Grid>
            )}
          </div>
        </div>

        {/* PÅVERKADE AFFÄRSOMRÅDEN row */}
        <div style={{ display: 'flex', gap: FLEX_GAP }}>
          <ToggleLabel open={rows.businessAreas} onToggle={() => onToggleRow('businessAreas')}>
            Påverkade affärsområden
          </ToggleLabel>
          <div style={{ flex: 1 }}>
            {rows.businessAreas && (
              <Grid count={cols}>
                {phases.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      background: 'var(--bg-level-1)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-xl)',
                      padding: 14,
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignContent: 'flex-start',
                      gap: 6
                    }}
                  >
                    {(p.businessAreas || []).map((area, j) => (
                      <span
                        key={j}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: 'var(--text-xs)',
                          fontWeight: 'var(--fw-semibold)',
                          background: 'var(--neutral-bg-default)',
                          color: 'var(--neutral-text-default)'
                        }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                ))}
              </Grid>
            )}
          </div>
        </div>

        {/* CUSTOM SWIMLANES */}
        {swimlanes.map((sw) => (
          <div key={sw.id} style={{ display: 'flex', gap: FLEX_GAP }}>
            <div
              style={{
                width: LABEL_WIDTH,
                flex: 'none',
                paddingTop: 12,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 4
              }}
            >
              <span
                style={{
                  ...eyebrowStyle(),
                  flex: 1,
                  minWidth: 0
                }}
              >
                {sw.name}
              </span>
            </div>
            <Grid count={cols}>
              {phases.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: 'var(--bg-level-1)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 14,
                    boxShadow: 'var(--shadow-sm)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    lineHeight: 'var(--lh-sm)',
                    minHeight: 56
                  }}
                >
                  {sw.cells[p.id] ?? ''}
                </div>
              ))}
            </Grid>
          </div>
        ))}
      </div>
      <VideoModal visual={openVideo} onClose={() => setOpenVideo(null)} />
    </div>
  );
}
