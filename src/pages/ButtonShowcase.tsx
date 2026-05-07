import { useState } from 'react';
import './ButtonShowcase.css';
import { Button } from '../components/Button';
import type { ButtonVariant, ButtonSize, ButtonShape } from '../components/Button';
import { colors, typography, animation } from '../styles/design-tokens';

// ── Inline SVG icons ───────────────────────────────────────────────────────

const SearchIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const ArrowRight  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>;
const XIcon       = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const HeartIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const PlusIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const SendIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const TrashIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>;

// ── Section shell ──────────────────────────────────────────────────────────

function Section({ id, num, title, desc, children }: {
  id: string; num: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="bsc-section">
      <div className="bsc-section-head">
        <span className="bsc-section-num">{num}</span>
        <div>
          <h2 className="bsc-section-title">{title}</h2>
          <p className="bsc-section-desc">{desc}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

// ── 01 — Figma Source ──────────────────────────────────────────────────────

function FigmaSource() {
  // Extracted from Figma node 585:4704 (RISE homepage) via MCP — 1880px canvas
  const figmaButtons = [
    {
      label:   'Explore (Secondary CTA)',
      node:    'I639:9942;585:6260',
      bg:      'rgba(49,187,225,0.69)',
      text:    '#ffffff',
      height:  '60.8px',
      width:   '276.6px',
      radius:  '37.0px',
      font:    'Be Vietnam Pro Bold · 25px',
      token:   'colors.accent.teal',
      usage:   'Feature card CTAs — Awareness / Mood Tracker / Student Experiences',
    },
    {
      label:   'CONTACT (Glass)',
      node:    '639:10003',
      bg:      'rgba(255,255,255,0.40) + blur(12px)',
      text:    '#ffffff',
      height:  '62.2px',
      width:   '198px',
      radius:  '57.6px',
      font:    'Be Vietnam Pro SemiBold · 24px',
      token:   'glassmorphism overlay',
      usage:   'Navigation header CONTACT button',
    },
    {
      label:   'Post Story (Primary)',
      node:    '639:8591',
      bg:      '#ff8e8e',
      text:    '#1b1828',
      height:  '131px (at canvas)',
      width:   'auto',
      radius:  '60px (at canvas)',
      font:    'Be Vietnam Pro ExtraBold · 40px',
      token:   'colors.brand.salmon',
      usage:   'Student Experiences form submit (Post Story, Submit Anonymously)',
    },
  ];

  // Raw Figma measurements at 1880 px canvas width
  const canvasSpecs = [
    { key: 'Canvas width',              val: '1880 px' },
    { key: 'Explore height (canvas)',   val: '60.809 px' },
    { key: 'CONTACT height (canvas)',   val: '62.163 px' },
    { key: 'Post Story height (canvas)',val: '131 px' },
    { key: 'Scale → 1280 px',          val: '× 0.681' },
    { key: 'Scale → XL (88 px)',        val: '× 1.469 (full canvas)' },
    { key: 'Nav font (canvas)',         val: '28.3 px Bold · −0.85 px spacing' },
    { key: 'Card shadow',               val: '0px 3px 7.6px rgba(0,0,0,0.15)' },
  ];

  return (
    <Section id="figma" num="01" title="Figma Source"
      desc="Design data extracted from D3C-FINAL via Figma MCP. Node 553:3603 (FOR DEVELOPERS page). Three button types sourced across nodes 639:8591, 639:10003, and I639:9942;585:6260.">

      <div className="bsc-figma-buttons">
        {figmaButtons.map(b => (
          <div key={b.label} className="bsc-figma-btn-card">
            <div className="bsc-figma-btn-preview"
              style={{ background: b.bg, backdropFilter: b.bg.includes('blur') ? 'blur(12px)' : undefined }}>
              <span style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: b.font.includes('Extra') ? 800 : b.font.includes('Semi') ? 600 : 700,
                fontSize: 14,
                color: b.text,
              }}>
                {b.label.split(' ')[0]}
              </span>
            </div>
            <div className="bsc-figma-btn-meta">
              <span className="bsc-figma-btn-label">{b.label}</span>
              <span className="bsc-mono" style={{ color: '#7eb5d7', fontSize: 11 }}>node {b.node}</span>
              <div className="bsc-figma-btn-specs">
                <span className="bsc-mono">{b.height} × {b.width}</span>
                <span className="bsc-mono">r: {b.radius}</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{b.font}</span>
                <span className="bsc-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>{b.token}</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>{b.usage}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bsc-spec-grid" style={{ marginTop: 8 }}>
        {canvasSpecs.map(s => (
          <div key={s.key} className="bsc-spec-item">
            <span className="bsc-spec-key">{s.key}</span>
            <span className="bsc-spec-val">{s.val}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 02 — Design Tokens ─────────────────────────────────────────────────────

function TokenPreview() {
  const colorTokens = [
    { token: 'colors.brand.salmon',       value: colors.brand.salmon,       label: 'Primary default' },
    { token: 'colors.brand.salmonMuted',  value: colors.brand.salmonMuted,  label: 'Primary disabled' },
    { token: 'colors.brand.salmonActive', value: colors.brand.salmonActive, label: 'Primary active / destructive' },
    { token: 'colors.brand.dark',         value: colors.brand.dark,         label: 'Primary text' },
    { token: 'colors.accent.teal',        value: '#31bbe1',                  label: 'Secondary variant' },
    { token: 'colors.accent.blue',        value: '#7eb5d7',                  label: 'Link variant' },
    { token: 'colors.text.primary',       value: '#ffffff',                  label: 'Ghost / glass / secondary text' },
    { token: 'glass overlay',             value: 'rgba(255,255,255,0.10)',   label: 'Glass variant bg' },
  ];

  const typeTokens = [
    { token: 'typography.fontFamily.primary', value: typography.fontFamily.primary },
    { token: 'typography.fontWeight.extraBold', value: '800' },
    { token: 'typography.fontWeight.bold', value: '700' },
    { token: 'typography.fontWeight.semiBold', value: '600' },
  ];

  const spacingTokens = [
    { token: 'sm — px 18 · gap 6',  desc: 'h: 40px · r: 20px · fs: 14px' },
    { token: 'md — px 28 · gap 8',  desc: 'h: 52px · r: 26px · fs: 17px  (default)' },
    { token: 'lg — px 36 · gap 10', desc: 'h: 64px · r: 32px · fs: 20px' },
    { token: 'xl — px 48 · gap 12', desc: 'h: 88px · r: 44px · fs: 28px  (Figma native)' },
  ];

  const radiusTokens = [
    { token: 'sm radius',  value: '20px' },
    { token: 'md radius',  value: '26px' },
    { token: 'lg radius',  value: '32px' },
    { token: 'xl radius',  value: '44px' },
    { token: 'pill',       value: '9999px' },
    { token: 'square',     value: '6px' },
  ];

  const animTokens = [
    { token: 'animation.duration.base',    value: animation.duration.base,    label: 'bg / border / shadow' },
    { token: 'animation.duration.fast',    value: animation.duration.fast,    label: 'transform (lift)' },
    { token: 'animation.duration.spinner', value: animation.duration.spinner, label: 'loading rotation' },
    { token: 'animation.easing.default',   value: animation.easing.default,   label: 'all transitions' },
  ];

  return (
    <Section id="tokens" num="02" title="Design Tokens Used"
      desc="Every value in this component is derived from a named token in src/styles/design-tokens.ts.">

      <div className="bsc-subsection">
        <span className="bsc-sublabel">Color tokens</span>
        <div className="bsc-token-grid">
          {colorTokens.map(t => (
            <div key={t.token} className="bsc-token-card">
              <div className="bsc-token-swatch" style={{
                background: t.value,
                border: t.value === '#ffffff' || t.value === colors.brand.dark
                  ? '1px solid rgba(255,255,255,0.2)'
                  : 'none',
              }} />
              <div className="bsc-token-info">
                <span className="bsc-mono bsc-token-name">{t.token}</span>
                <span className="bsc-mono bsc-token-hex">{t.value}</span>
                <span className="bsc-token-desc">{t.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bsc-subsection">
        <span className="bsc-sublabel">Typography tokens</span>
        <div className="bsc-type-list">
          {typeTokens.map(t => (
            <div key={t.token} className="bsc-type-row">
              <span className="bsc-mono bsc-token-name">{t.token}</span>
              <span className="bsc-type-sample" style={{
                fontFamily: t.token.includes('Family') ? typography.fontFamily.primary : undefined,
                fontWeight: t.value === '800' ? 800 : t.value === '700' ? 700 : 600,
              }}>
                {t.value === '800' ? 'ExtraBold 800 — Post Story'
                 : t.value === '700' ? 'Bold 700 — Explore'
                 : t.value === '600' ? 'SemiBold 600 — CONTACT / Link'
                 : t.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bsc-two-col">
        <div className="bsc-subsection">
          <span className="bsc-sublabel">Spacing per size</span>
          <div className="bsc-spec-list">
            {spacingTokens.map(t => (
              <div key={t.token} className="bsc-spec-row">
                <span className="bsc-mono" style={{ color: '#7eb5d7' }}>{t.token}</span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{t.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bsc-subsection">
          <span className="bsc-sublabel">Border radius per size &amp; shape</span>
          <div className="bsc-spec-list">
            {radiusTokens.map(t => (
              <div key={t.token} className="bsc-spec-row">
                <span className="bsc-mono" style={{ color: '#7eb5d7' }}>{t.token}</span>
                <span className="bsc-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bsc-subsection">
        <span className="bsc-sublabel">Animation tokens</span>
        <div className="bsc-spec-list">
          {animTokens.map(t => (
            <div key={t.token} className="bsc-spec-row">
              <span className="bsc-mono" style={{ color: '#7eb5d7' }}>{t.token}</span>
              <span className="bsc-mono" style={{ color: 'rgba(255,255,255,0.55)' }}>{t.value}</span>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── 03 — Variants ──────────────────────────────────────────────────────────

function VariantsSection() {
  return (
    <Section id="variants" num="03" title="All Variants"
      desc="Six variants mapped directly from Figma. Primary and glass are direct 1:1 Figma extractions. Secondary uses the Explore card teal. Destructive uses the Figma active-state red.">
      <div className="bsc-variant-grid">
        {([
          { v: 'primary',     label: 'Post Story',           note: 'Figma node 639:8591 — #ff8e8e salmon · dark text' },
          { v: 'secondary',   label: 'Explore',              note: 'Figma node I639:9942;585:6260 — rgba(49,187,225,0.69) teal' },
          { v: 'ghost',       label: 'Skip',                 note: 'Transparent + 1.5px white border · 85% opacity text' },
          { v: 'glass',       label: 'CONTACT',              note: 'Figma node 639:10003 — glassmorphism · backdrop-filter blur(12px)' },
          { v: 'destructive', label: 'Delete Entry',         note: 'Figma Frame 65 — #f95757 · danger signal' },
          { v: 'link',        label: 'View all resources →', note: 'Text only · no bg · teal #7eb5d7 · underline on hover' },
        ] as { v: ButtonVariant; label: string; note: string }[]).map(({ v, label, note }) => (
          <div key={v} className="bsc-variant-row">
            <div className="bsc-variant-demo" style={{
              background: v === 'glass' ? 'rgba(26,18,41,0.8)' : undefined,
              borderRadius: 8,
              padding: v === 'glass' ? '8px 12px' : undefined,
            }}>
              <Button variant={v} size="md">{label}</Button>
            </div>
            <div className="bsc-variant-meta">
              <span className="bsc-mono bsc-token-name">variant="{v}"</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{note}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 04 — Sizes ─────────────────────────────────────────────────────────────

function SizesSection() {
  return (
    <Section id="sizes" num="04" title="Size Scale"
      desc="Four tiers scaled from Figma canvas measurements (1880 px). XL is the 1:1 Figma canvas height (60.8 px × 1.469 scale = 88 px).">
      <div className="bsc-size-list">
        {([
          { s: 'sm' as ButtonSize, h: '40px', r: '20px', fs: '14px', px: '18px', figma: '27.3px at canvas', note: 'Compact — inline forms' },
          { s: 'md' as ButtonSize, h: '52px', r: '26px', fs: '17px', px: '28px', figma: '35.4px at canvas', note: 'Default — general purpose' },
          { s: 'lg' as ButtonSize, h: '64px', r: '32px', fs: '20px', px: '36px', figma: '43.6px at canvas', note: 'Prominent — section CTAs' },
          { s: 'xl' as ButtonSize, h: '88px', r: '44px', fs: '28px', px: '48px', figma: '60.8px at canvas ✓', note: 'Figma native — hero / form submit' },
        ]).map(({ s, h, r, fs, px, figma, note }) => (
          <div key={s} className="bsc-size-row">
            <div className="bsc-size-preview">
              <Button size={s} fullWidth>Post Story</Button>
            </div>
            <div className="bsc-size-specs">
              <div className="bsc-size-badge">{s}</div>
              <div className="bsc-size-detail">
                <span className="bsc-mono">h:{h} · r:{r} · fs:{fs} · px:{px}</span>
                <span className="bsc-mono" style={{ color: '#31bbe1', fontSize: 11 }}>{figma}</span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>{note}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 05 — States ────────────────────────────────────────────────────────────

function StatesSection() {
  return (
    <Section id="states" num="05" title="Interactive States"
      desc="Hover and Active are CSS-driven — interact to see them live. Primary disabled maps to Figma Frame 64 (#f3c0c0). Glass uses backdrop-filter blur(12px).">
      <div className="bsc-states-grid">
        {[
          { label: 'Default',           sub: 'Frame 63 · #ff8e8e salmon',     el: <Button>Post Story</Button> },
          { label: 'Hover — try it',    sub: 'Brightens → #ff7070 + lift',    el: <Button>Post Story</Button> },
          { label: 'Active / Pressed',  sub: 'Frame 65 · #f95757 salmonActive',el: <Button>Post Story</Button> },
          { label: 'Focus (Tab to)',    sub: '2px teal ring · 3px offset',    el: <Button>Post Story</Button> },
          { label: 'Disabled',          sub: 'Frame 64 · #f3c0c0 salmonMuted', el: <Button disabled>Post Story</Button> },
          { label: 'Loading',           sub: 'Spinner + aria-busy=true',      el: <Button loading>Submitting…</Button> },
          { label: 'Secondary hover',   sub: 'Teal brightens + translateY',   el: <Button variant="secondary">Explore</Button> },
          { label: 'Glass',             sub: 'Glassmorphism + blur(12px)',     el: <div style={{ background: 'rgba(26,18,41,0.85)', borderRadius: 8, padding: '8px 10px' }}><Button variant="glass">CONTACT</Button></div> },
          { label: 'Destructive',       sub: '#f95757 · danger signal',       el: <Button variant="destructive">Delete</Button> },
          { label: 'Link',              sub: 'Text only · teal · auto height', el: <Button variant="link">View all →</Button> },
        ].map(({ label, sub, el }) => (
          <div key={label} className="bsc-state-card">
            <div className="bsc-state-label">{label}</div>
            <div className="bsc-state-sub">{sub}</div>
            <div className="bsc-state-demo">{el}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 06 — Icons ─────────────────────────────────────────────────────────────

function IconsSection() {
  return (
    <Section id="icons" num="06" title="Icon Compositions"
      desc="leftIcon / rightIcon accept any ReactNode. iconOnly renders a square button — must include aria-label.">
      {[
        { label: 'Left icon — all sizes',
          items: [
            <Button key="sm" size="sm" leftIcon={<SendIcon />}>Post Story</Button>,
            <Button key="md" leftIcon={<SendIcon />}>Post Story</Button>,
            <Button key="lg" size="lg" leftIcon={<SendIcon />}>Post Story</Button>,
            <Button key="xl" size="xl" leftIcon={<SendIcon />}>Post Story</Button>,
          ]},
        { label: 'Right icon',
          items: [
            <Button key="a" rightIcon={<ArrowRight />}>Continue</Button>,
            <Button key="b" variant="secondary" rightIcon={<SearchIcon />}>Search</Button>,
            <Button key="c" variant="ghost" rightIcon={<ArrowRight />}>Skip</Button>,
          ]},
        { label: 'Icon only — all variants',
          items: [
            <Button key="p"  iconOnly variant="primary"     size="lg" aria-label="Submit"><SendIcon /></Button>,
            <Button key="s"  iconOnly variant="secondary"   size="lg" aria-label="Search"><SearchIcon /></Button>,
            <Button key="g"  iconOnly variant="ghost"       size="lg" aria-label="Close"><XIcon /></Button>,
            <Button key="gl" iconOnly variant="glass"       size="lg" aria-label="Contact"><SendIcon /></Button>,
            <Button key="d"  iconOnly variant="destructive" size="lg" aria-label="Delete"><TrashIcon /></Button>,
          ]},
        { label: 'Icon only — all sizes',
          items: [
            <Button key="sm" iconOnly size="sm" aria-label="Like"><HeartIcon /></Button>,
            <Button key="md" iconOnly aria-label="Add"><PlusIcon /></Button>,
            <Button key="lg" iconOnly size="lg" aria-label="Send"><SendIcon /></Button>,
            <Button key="xl" iconOnly size="xl" aria-label="Search"><SearchIcon /></Button>,
          ]},
      ].map(({ label, items }) => (
        <div key={label} className="bsc-subsection">
          <span className="bsc-sublabel">{label}</span>
          <div className="bsc-icon-row">{items}</div>
        </div>
      ))}
    </Section>
  );
}

// ── 07 — Theme Variations ──────────────────────────────────────────────────

function ThemeSection() {
  type ThemeId = 'dark' | 'light' | 'contrast';
  const themes: { id: ThemeId; label: string; bg: string; surface: string; desc: string }[] = [
    { id: 'dark',     label: 'Dark (Figma native)',  bg: '#1a1229', surface: '#1e1a2c', desc: 'ARISE default — deep purple brand' },
    { id: 'light',    label: 'Light',               bg: '#f5f5f7', surface: '#ffffff', desc: 'Inverted for light-mode contexts' },
    { id: 'contrast', label: 'High Contrast',       bg: '#000000', surface: '#111111', desc: 'WCAG AAA accessible — maximum contrast' },
  ];

  const variantsForTheme: { v: ButtonVariant; label: string }[] = [
    { v: 'primary',     label: 'Primary' },
    { v: 'secondary',   label: 'Secondary' },
    { v: 'ghost',       label: 'Ghost' },
    { v: 'glass',       label: 'Glass' },
    { v: 'destructive', label: 'Destructive' },
    { v: 'link',        label: 'Link' },
  ];

  return (
    <Section id="themes" num="07" title="Theme Variations"
      desc="All six variants rendered across Dark (Figma native), Light, and High Contrast surfaces. The component uses CSS custom properties, making theme overrides straightforward.">
      <div className="bsc-theme-grid">
        {themes.map(t => (
          <div key={t.id} className="bsc-theme-panel" style={{ background: t.bg }}>
            <div className="bsc-theme-header" style={{ background: t.surface }}>
              <span className="bsc-theme-label" style={{ color: t.id === 'light' ? '#1a1229' : '#ffffff' }}>{t.label}</span>
              <span className="bsc-theme-desc" style={{ color: t.id === 'light' ? 'rgba(26,18,41,0.5)' : 'rgba(255,255,255,0.4)' }}>{t.desc}</span>
            </div>
            <div className="bsc-theme-body">
              {variantsForTheme.map(({ v, label }) => (
                <div key={v} className="bsc-theme-row">
                  <span className="bsc-mono" style={{ color: t.id === 'light' ? 'rgba(26,18,41,0.45)' : 'rgba(255,255,255,0.3)', fontSize: 11, minWidth: 80 }}>{label}</span>
                  <Button variant={v} size="sm">{label}</Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bsc-theme-note">
        <span className="bsc-sublabel" style={{ display: 'block', marginBottom: 8 }}>CSS override pattern</span>
        <pre className="bsc-code">{`.my-light-surface .btn--primary {
  --_bg:     #e07070;   /* darkened salmon for light bg */
  --_color:  #ffffff;
}
.my-light-surface .btn--ghost {
  --_color:  #1a1229;
  --_border: rgba(26, 18, 41, 0.35);
}`}</pre>
      </div>
    </Section>
  );
}

// ── 08 — Live Playground ───────────────────────────────────────────────────

function Playground() {
  const [variant,  setVariant]  = useState<ButtonVariant>('primary');
  const [size,     setSize]     = useState<ButtonSize>('md');
  const [shape,    setShape]    = useState<ButtonShape>('rounded');
  const [disabled, setDisabled] = useState(false);
  const [loading,  setLoading]  = useState(false);
  const [full,     setFull]     = useState(false);
  const [label,    setLabel]    = useState('Post Story');
  const [leftIc,   setLeftIc]   = useState(false);
  const [rightIc,  setRightIc]  = useState(false);

  const attrs = [
    `variant="${variant}"`,
    size    !== 'md'      ? `size="${size}"`     : null,
    shape   !== 'rounded' ? `shape="${shape}"`   : null,
    leftIc  ? 'leftIcon={<SendIcon />}'          : null,
    rightIc ? 'rightIcon={<ArrowRight />}'       : null,
    disabled ? 'disabled'                        : null,
    loading  ? 'loading'                         : null,
    full     ? 'fullWidth'                       : null,
  ].filter(Boolean) as string[];

  const short = attrs.length <= 2;
  const code  = short
    ? `<Button ${attrs.join(' ')}>${label}</Button>`
    : `<Button\n  ${attrs.join('\n  ')}\n>\n  ${label}\n</Button>`;

  const needsGlassBg = variant === 'glass';

  return (
    <Section id="playground" num="08" title="Live Playground"
      desc="Adjust any prop — the preview and code snippet update instantly.">
      <div className="bsc-playground">
        <div className="bsc-play-left">
          <div className="bsc-preview-box" style={{ background: needsGlassBg ? 'rgba(26,18,41,0.85)' : undefined }}>
            <Button
              variant={variant} size={size} shape={shape}
              disabled={disabled} loading={loading} fullWidth={full}
              leftIcon={leftIc ? <SendIcon /> : undefined}
              rightIcon={rightIc ? <ArrowRight /> : undefined}
            >
              {label}
            </Button>
          </div>
          <pre className="bsc-code">{code}</pre>
        </div>

        <div className="bsc-controls">
          <p className="bsc-ctrl-head">Props</p>

          <div className="bsc-ctrl">
            <label>variant</label>
            <select value={variant} onChange={e => setVariant(e.target.value as ButtonVariant)}>
              {(['primary','secondary','ghost','glass','destructive','link'] as ButtonVariant[]).map(v =>
                <option key={v} value={v}>{v}</option>)}
            </select>
          </div>

          <div className="bsc-ctrl">
            <label>size</label>
            <select value={size} onChange={e => setSize(e.target.value as ButtonSize)}>
              {(['sm','md','lg','xl'] as ButtonSize[]).map(s =>
                <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="bsc-ctrl">
            <label>shape</label>
            <select value={shape} onChange={e => setShape(e.target.value as ButtonShape)}>
              {(['rounded','pill','square'] as ButtonShape[]).map(s =>
                <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="bsc-ctrl">
            <label>label text</label>
            <input type="text" value={label} onChange={e => setLabel(e.target.value)} />
          </div>

          {([
            [leftIc,   setLeftIc,   'leftIcon'],
            [rightIc,  setRightIc,  'rightIcon'],
            [disabled, setDisabled, 'disabled'],
            [loading,  setLoading,  'loading'],
            [full,     setFull,     'fullWidth'],
          ] as [boolean, (v: boolean) => void, string][]).map(([val, set, lbl]) => (
            <label key={lbl} className="bsc-ctrl-check">
              <input type="checkbox" checked={val} onChange={e => set(e.target.checked)} />
              <span>{lbl}</span>
            </label>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── 09 — Props API ─────────────────────────────────────────────────────────

function PropsAPI() {
  const rows = [
    { name:'children',  type:'ReactNode',          def:'—',         req:true,  desc:'Label text. When iconOnly=true, provide the icon node instead.' },
    { name:'variant',   type:'ButtonVariant',       def:'"primary"', req:false, desc:'primary | secondary | ghost | glass | destructive | link' },
    { name:'size',      type:'ButtonSize',          def:'"md"',      req:false, desc:'sm(40px) | md(52px) | lg(64px) | xl(88px ≈ Figma canvas)' },
    { name:'shape',     type:'ButtonShape',         def:'"rounded"', req:false, desc:'rounded (per-size radius) | pill (9999px) | square (6px)' },
    { name:'leftIcon',  type:'ReactNode',           def:'undefined', req:false, desc:'Icon before label. Hidden during loading.' },
    { name:'rightIcon', type:'ReactNode',           def:'undefined', req:false, desc:'Icon after label. Visible during loading — suppress if needed.' },
    { name:'iconOnly',  type:'boolean',             def:'false',     req:false, desc:'Square icon button. children = icon. Must set aria-label.' },
    { name:'loading',   type:'boolean',             def:'false',     req:false, desc:'Shows spinner, sets aria-busy, disables all interaction.' },
    { name:'disabled',  type:'boolean',             def:'false',     req:false, desc:'Primary: Figma Frame 64 muted (#f3c0c0). Others: 40% opacity.' },
    { name:'fullWidth', type:'boolean',             def:'false',     req:false, desc:'width: 100% — matches Figma\'s full-width form buttons.' },
    { name:'className', type:'string',              def:'""',        req:false, desc:'Appended to root class list for local overrides.' },
    { name:'...rest',   type:'ButtonHTMLAttributes',def:'—',         req:false, desc:'All native <button> attributes (onClick, type, form, ref…).' },
  ];

  return (
    <Section id="api" num="09" title="Props API"
      desc="Full TypeScript interface. Import types from 'src/components/Button'. Ref-forwarded to <button>.">
      <div className="bsc-table-wrap">
        <table className="bsc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Req</th><th>Description</th></tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.name}>
                <td><code>{r.name}</code></td>
                <td><code>{r.type}</code></td>
                <td><code>{r.def}</code></td>
                <td style={{ color: r.req ? '#f95757' : 'rgba(255,255,255,0.3)', fontSize:11, fontWeight:700 }}>{r.req ? 'Yes' : 'No'}</td>
                <td style={{ color:'rgba(255,255,255,0.5)', fontSize:12 }}>{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bsc-subsection" style={{ marginTop: 16 }}>
        <span className="bsc-sublabel">Validation rules &amp; constraints</span>
        <div className="bsc-spec-list">
          {[
            { rule: 'iconOnly + no aria-label', severity: 'error',   detail: 'Button has no accessible name — screen readers will announce nothing.' },
            { rule: 'variant="link" + size',    severity: 'warning', detail: 'Link variant ignores size — height is auto, not the fixed tier.' },
            { rule: 'loading + rightIcon',      severity: 'info',    detail: 'rightIcon remains visible during loading. Suppress explicitly if undesired.' },
            { rule: 'glass on white bg',        severity: 'warning', detail: 'backdrop-filter blur has no effect without a translucent surface below.' },
            { rule: 'variant="link" as href',   severity: 'info',    detail: 'Button does not render <a>. Wrap in react-router-dom <Link> for navigation.' },
          ].map(r => (
            <div key={r.rule} className="bsc-spec-row" style={{ gap: 10 }}>
              <span className="bsc-mono" style={{ color: r.severity === 'error' ? '#f95757' : r.severity === 'warning' ? '#ff7c2b' : '#7eb5d7', minWidth: 220 }}>{r.rule}</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{r.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── 10 — Code Snippets ─────────────────────────────────────────────────────

function Snippets() {
  const examples = [
    { label: 'Default — exact Figma Post Story button',
      code: `<Button>Post Story</Button>` },
    { label: 'Submit Anonymously (full-width XL, matches Figma canvas)',
      code: `<Button size="xl" fullWidth>\n  Submit Anonymously\n</Button>` },
    { label: 'Secondary teal — Figma Explore card button',
      code: `<Button variant="secondary">Explore</Button>` },
    { label: 'Glass — Figma CONTACT button style',
      code: `{/* Wrap in a dark/translucent surface for blur effect */}\n<Button variant="glass" shape="pill">CONTACT</Button>` },
    { label: 'With icon — left',
      code: `<Button leftIcon={<SendIcon />}>Post Story</Button>` },
    { label: 'Destructive action',
      code: `<Button variant="destructive" leftIcon={<TrashIcon />}>\n  Delete Entry\n</Button>` },
    { label: 'Loading state (async submit)',
      code: `const [submitting, setSubmitting] = useState(false);\n\n<Button loading={submitting} onClick={handleSubmit}>\n  Post Story\n</Button>` },
    { label: 'Icon only — needs aria-label',
      code: `<Button iconOnly variant="ghost" aria-label="Close">\n  <XIcon />\n</Button>` },
    { label: 'Full-width pill',
      code: `<Button size="xl" shape="pill" fullWidth>\n  Submit Anonymously\n</Button>` },
    { label: 'Link variant — inline action',
      code: `<Button variant="link">\n  View all resources →\n</Button>` },
    { label: 'Ref forwarding',
      code: `const btnRef = useRef<HTMLButtonElement>(null);\n<Button ref={btnRef}>Focused button</Button>` },
  ];

  return (
    <Section id="snippets" num="10" title="Copy-Ready Snippets"
      desc="Common usage patterns. Import: import { Button } from '../components/Button'">
      <div className="bsc-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="bsc-snippet">
            <span className="bsc-snippet-label">{ex.label}</span>
            <pre className="bsc-code">{ex.code}</pre>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function ButtonShowcase() {
  return (
    <div className="bsc">
      <div className="bsc-body">
        <FigmaSource />
        <TokenPreview />
        <VariantsSection />
        <SizesSection />
        <StatesSection />
        <IconsSection />
        <ThemeSection />
        <Playground />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
