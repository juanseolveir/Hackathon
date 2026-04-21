/* global React */
// Shared primitives used across post templates.

const { useState } = React;

const Brand = {
  blue: '#1E40AF',
  blueHover: '#1E3A8A',
  ink: '#0B1324',
  paper: '#F6F8FC',
  white: '#FFFFFF',
  slate300: '#C3CBD9',
  slate500: '#64708A',
  slate700: '#2F3749',
  teal: '#2FA39C',
  blue50: '#EEF3FC',
  blue100: '#D9E4F8',
};

// Wordmark — inline SVG version so it scales cleanly inside posts
function Wordmark({ color = Brand.ink, dot = Brand.blue, size = 22 }) {
  const h = size;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 0, fontFamily: 'Manrope', fontWeight: 800, letterSpacing: '-0.02em', fontSize: h, lineHeight: 1, color }}>
      JUANSEAI
      <span style={{ display: 'inline-block', width: h * 0.18, height: h * 0.18, borderRadius: '999px', background: dot, marginLeft: -h * 0.07, marginBottom: h * 0.05 }} />
    </span>
  );
}

// Avatar — profile photo of Juanse, ringed by brand color
function Avatar({ size = 36, variant = 'brand' }) {
  return (
    <div style={{ width: size, height: size, borderRadius: '999px', overflow: 'hidden', flexShrink: 0 }}>
      <img src="assets/juanse-profile.jpg" alt="Juanse" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  );
}

// Eyebrow (uppercase small label)
function Eyebrow({ children, color = Brand.blue }) {
  return (
    <span style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color }}>
      {children}
    </span>
  );
}

// Tag pill
function Tag({ children, variant = 'brand' }) {
  const styleMap = {
    brand: { bg: Brand.blue50, fg: Brand.blue },
    ink:   { bg: Brand.ink, fg: Brand.paper },
    signal:  { bg: '#F4FFB8', fg: '#5A6B04' },
    outline: { bg: 'transparent', fg: Brand.ink, border: `1.5px solid ${Brand.slate300}` },
  };
  const s = styleMap[variant] || styleMap.brand;
  return (
    <span style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: 13, padding: '6px 14px', borderRadius: 999, background: s.bg, color: s.fg, border: s.border, display: 'inline-block' }}>
      {children}
    </span>
  );
}

// Circled word using hand-drawn SVG
function Circled({ children, color = Brand.blue }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', padding: '4px 20px' }}>
      {children}
      <svg viewBox="0 0 220 80" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <path d="M 14,38 C 10,16 60,10 120,9 C 180,8 210,18 208,40 C 206,62 160,72 108,72 C 56,72 16,62 16,42"
          fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" opacity="0.85"/>
      </svg>
    </span>
  );
}

// Underlined word (squiggle)
function Squiggled({ children, color = Brand.blue }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', paddingBottom: '0.12em' }}>
      {children}
      <svg viewBox="0 0 220 28" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, right: 0, bottom: '-0.22em', width: '100%', height: '0.4em' }}>
        <path d="M 6,16 C 20,8 34,22 50,14 C 66,6 80,22 96,14 C 112,6 126,22 142,14 C 158,6 172,22 188,14 C 200,8 210,14 214,16"
          fill="none" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

// Canvas wrapper — gives us a fixed pixel post frame that scales to fit
function PostFrame({ width, height, children, background = Brand.paper, cornerLabel }) {
  return (
    <div style={{ width, height, background, position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15,31,74,0.10), 0 6px 12px rgba(15,31,74,0.06)', borderRadius: 20, fontFamily: 'Manrope' }}>
      {cornerLabel && (
        <div style={{ position: 'absolute', top: 12, right: 14, fontSize: 11, fontWeight: 600, color: Brand.slate500, fontFamily: 'JetBrains Mono', letterSpacing: '0.04em' }}>
          {cornerLabel}
        </div>
      )}
      {children}
    </div>
  );
}

// Footer lockup used on posts (bottom of square posts)
function PostFooter({ handle = '@juanseai', right, invert = false }) {
  const fg = invert ? Brand.paper : Brand.ink;
  const muted = invert ? Brand.blue100 : Brand.slate500;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Avatar size={40} variant={invert ? 'ink' : 'brand'} />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <Wordmark color={fg} dot={invert ? Brand.paper : Brand.blue} size={20} />
          <span style={{ fontSize: 13, color: muted, fontWeight: 500 }}>{handle}</span>
        </div>
      </div>
      {right}
    </div>
  );
}

window.Brand = Brand;
window.Wordmark = Wordmark;
window.Avatar = Avatar;
window.Eyebrow = Eyebrow;
window.Tag = Tag;
window.Circled = Circled;
window.Squiggled = Squiggled;
window.PostFrame = PostFrame;
window.PostFooter = PostFooter;
