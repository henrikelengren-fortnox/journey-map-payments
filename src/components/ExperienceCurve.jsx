import React from 'react';
import { expColor, expLabel } from '../phases.js';

const W = 1200;
const H = 180;

function yOf(v) {
  return 90 - v * 32;
}

function buildPath(points) {
  let d = 'M ' + points[0][0] + ' ' + points[0][1];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d +=
      ' C ' +
      c1[0].toFixed(1) +
      ' ' +
      c1[1].toFixed(1) +
      ', ' +
      c2[0].toFixed(1) +
      ' ' +
      c2[1].toFixed(1) +
      ', ' +
      p2[0].toFixed(1) +
      ' ' +
      p2[1].toFixed(1);
  }
  return d;
}

export default function ExperienceCurve({ phases, onPick }) {
  const n = phases.length;
  const points = phases.map((p, i) => [(i + 0.5) * (W / n), yOf(p.exp)]);
  const d = buildPath(points);
  const stops = phases.map((p, i) => (
    <stop key={i} offset={((i + 0.5) / n) * 100 + '%'} stopColor={expColor(p.exp)} />
  ));

  const Grid = ({ y, dashed }) => (
    <line
      x1={0}
      x2={W}
      y1={y}
      y2={y}
      stroke={dashed ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.06)'}
      strokeDasharray={dashed ? '4 4' : 'none'}
      vectorEffect="non-scaling-stroke"
    />
  );

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, display: 'block' }}
      >
        <defs>
          <linearGradient id="expGrad" x1="0" y1="0" x2="1" y2="0">
            {stops}
          </linearGradient>
        </defs>
        <Grid y={yOf(2)} />
        <Grid y={yOf(0)} dashed />
        <Grid y={yOf(-2)} />
        <path
          d={d}
          fill="none"
          stroke="url(#expGrad)"
          strokeWidth={3}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {phases.map((p, i) => (
        <button
          key={p.id}
          title={`${p.fas} · upplevelse ${expLabel(p.exp)}`}
          onClick={() => onPick(i)}
          style={{
            position: 'absolute',
            left: `calc(${((i + 0.5) / n) * 100}% - 7px)`,
            top: `${(yOf(p.exp) / H) * 100}%`,
            transform: 'translateY(-50%)',
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: expColor(p.exp),
            border: '2.5px solid var(--bg-level-1)',
            boxShadow: 'var(--shadow-sm)',
            cursor: 'pointer',
            padding: 0
          }}
        />
      ))}
      {[
        ['+2', yOf(2)],
        ['0', yOf(0)],
        ['−2', yOf(-2)]
      ].map(([t, y]) => (
        <span
          key={t}
          style={{
            position: 'absolute',
            left: 10,
            top: `${(y / H) * 100}%`,
            transform: 'translateY(-50%)',
            fontSize: 10,
            color: 'var(--text-tertiary)',
            fontVariantNumeric: 'tabular-nums'
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
