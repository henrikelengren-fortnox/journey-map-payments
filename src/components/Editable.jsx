import React from 'react';

const baseInputStyle = {
  font: 'inherit',
  color: 'var(--text-primary)',
  background: 'var(--bg-level-1)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-md)',
  padding: '6px 10px',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box'
};

export function TextInput({ value, onChange, placeholder, style, autoFocus }) {
  return (
    <input
      type="text"
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className="fm-input"
      style={{ ...baseInputStyle, ...style }}
    />
  );
}

export function TextArea({ value, onChange, placeholder, rows = 3, style }) {
  return (
    <textarea
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="fm-input"
      style={{ ...baseInputStyle, padding: '8px 10px', resize: 'vertical', lineHeight: 1.4, ...style }}
    />
  );
}

export function Select({ value, onChange, options, style }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="fm-input"
      style={{
        ...baseInputStyle,
        padding: '6px 30px 6px 10px',
        width: 'auto',
        appearance: 'none',
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' stroke='%234b4b4b' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px center',
        ...style
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function SmallButton({ children, onClick, variant = 'secondary', disabled, title, type = 'button' }) {
  const isPrimary = variant === 'primary';
  const isGhost = variant === 'ghost';
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={{
        flex: 'none',
        height: 28,
        padding: isGhost ? '0 8px' : '0 12px',
        border: isPrimary
          ? '1px solid var(--brand-default)'
          : isGhost
          ? 'none'
          : '1px solid var(--border-default)',
        background: isPrimary ? 'var(--brand-default)' : isGhost ? 'transparent' : 'var(--bg-level-1)',
        color: isPrimary ? 'var(--text-on-dark)' : 'var(--text-primary)',
        borderRadius: 'var(--radius-lg)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--fw-semibold)',
        transition: 'background .15s, opacity .15s'
      }}
    >
      {children}
    </button>
  );
}

export function Pill({ background, color, dot, children, style }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: '2px 8px',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--fw-semibold)',
        background,
        color,
        ...style
      }}
    >
      {dot ? (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: dot
          }}
        />
      ) : null}
      {children}
    </span>
  );
}
