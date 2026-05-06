import { useState } from 'react';
import './NavbarShowcase.css';
import { Navbar } from '../components/Navbar';
import type { NavLink } from '../components/Navbar';
import { colors, typography } from '../styles/design-tokens';

function Section({ id, num, title, desc, children }: {
  id: string; num: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="nbs-section">
      <div className="nbs-section-head">
        <span className="nbs-section-num">{num}</span>
        <div>
          <h2 className="nbs-section-title">{title}</h2>
          <p className="nbs-section-desc">{desc}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

// ── 01 — Figma Source ──────────────────────────────────────────────────────

function FigmaSource() {
  return (
    <Section id="figma" num="01" title="Figma Source"
      desc="Extracted from D3C-FINAL node 2019:3817 (header). Canvas 1880×236 px, scale ×0.681 to 1280 px viewport.">
      <div className="nbs-preview-box">
        <Navbar />
      </div>
      <div className="nbs-spec-grid">
        <div className="nbs-spec-item"><span className="nbs-spec-key">Canvas height</span><span className="nbs-spec-val">236 px</span></div>
        <div className="nbs-spec-item"><span className="nbs-spec-key">Canvas width</span><span className="nbs-spec-val">1880 px</span></div>
        <div className="nbs-spec-item"><span className="nbs-spec-key">Scale factor</span><span className="nbs-spec-val">×0.681 → 1280 px</span></div>
        <div className="nbs-spec-item"><span className="nbs-spec-key">Logo font</span><span className="nbs-spec-val">Arya Bold 62.8 → 29 px</span></div>
        <div className="nbs-spec-item"><span className="nbs-spec-key">Nav pill radius</span><span className="nbs-spec-val">36 → 25 px</span></div>
        <div className="nbs-spec-item"><span className="nbs-spec-key">Nav link font</span><span className="nbs-spec-val">Be Vietnam Pro Bold 28.3 → 13 px</span></div>
        <div className="nbs-spec-item"><span className="nbs-spec-key">Contact radius</span><span className="nbs-spec-val">57.5 px → pill (999px)</span></div>
        <div className="nbs-spec-item"><span className="nbs-spec-key">Nav shadow</span><span className="nbs-spec-val">0 5 12 rgba(0,0,0,0.25)</span></div>
      </div>
    </Section>
  );
}

// ── 02 — Design Tokens ─────────────────────────────────────────────────────

function TokenPreview() {
  const colorTokens = [
    { token: 'colors.background.primary', value: colors.background.primary, label: 'Header background' },
    { token: 'colors.text.primary',       value: '#ffffff',                  label: 'Nav links, contact' },
    { token: 'colors.accent.orange',      value: colors.accent.orange,       label: 'Logo "R"' },
    { token: 'colors.accent.brandBlue',   value: colors.accent.brandBlue,    label: 'Logo "ISE"' },
    { token: 'colors.border.subtle',      value: colors.border.subtle,       label: 'Nav pill glass' },
    { token: 'colors.accent.teal',        value: colors.accent.teal,         label: 'Focus ring' },
  ];

  const typeTokens = [
    { token: 'typography.fontFamily.display', value: typography.fontFamily.display, note: 'Logo text' },
    { token: 'typography.fontFamily.primary', value: typography.fontFamily.primary, note: 'Nav links, contact' },
    { token: 'typography.fontWeight.bold',    value: '700', note: 'Nav links' },
    { token: 'typography.fontWeight.semiBold', value: '600', note: 'Contact button' },
  ];

  return (
    <Section id="tokens" num="02" title="Design Tokens"
      desc="Every color, font, and spacing value is derived from src/styles/design-tokens.ts.">
      <div className="nbs-subsection">
        <span className="nbs-sublabel">Color tokens</span>
        <div className="nbs-token-grid">
          {colorTokens.map(t => (
            <div key={t.token} className="nbs-token-card">
              <div className="nbs-token-swatch" style={{ background: t.value, border: t.value === '#ffffff' ? '1px solid rgba(255,255,255,0.2)' : 'none' }} />
              <div className="nbs-token-info">
                <span className="nbs-mono nbs-token-name">{t.token}</span>
                <span className="nbs-mono nbs-token-hex">{t.value}</span>
                <span className="nbs-token-desc">{t.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="nbs-subsection">
        <span className="nbs-sublabel">Typography tokens</span>
        <div className="nbs-spec-list">
          {typeTokens.map(t => (
            <div key={t.token} className="nbs-spec-row">
              <span className="nbs-mono" style={{ color: '#7eb5d7' }}>{t.token}</span>
              <span className="nbs-mono" style={{ color: 'rgba(255,255,255,0.55)' }}>{t.value}</span>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>{t.note}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── 03 — States ────────────────────────────────────────────────────────────

function StatesSection() {
  const noLinkLinks: NavLink[] = [
    { label: 'HOME',                href: '/',                   active: true },
    { label: 'AWARENESS',           href: '/awareness' },
    { label: 'MOOD TRACKER',        href: '/mood-tracker' },
    { label: 'STUDENT EXPERIENCES', href: '/student-experiences' },
  ];

  return (
    <Section id="states" num="03" title="Active Link State"
      desc="Pass active: true on any NavLink to highlight the current page.">
      <div className="nbs-state-box">
        <span className="nbs-sublabel">Active: HOME</span>
        <Navbar links={noLinkLinks} />
      </div>
    </Section>
  );
}

// ── 04 — Logo Anatomy ──────────────────────────────────────────────────────

function LogoAnatomy() {
  return (
    <Section id="logo" num="04" title="Logo Anatomy"
      desc="Three-color wordmark extracted from Figma node 639:10007.">
      <div className="nbs-logo-card">
        <div className="nbs-logo-preview">
          <span style={{ fontFamily: "'Arya', sans-serif", fontWeight: 700, fontSize: 52, letterSpacing: '-2.6px', lineHeight: 1 }}>
            <span style={{ color: '#ffffff' }}>A</span>
            <span style={{ color: '#ff7c2b' }}>R</span>
            <span style={{ color: '#2ab0fe' }}>ISE</span>
          </span>
        </div>
        <div className="nbs-logo-specs">
          <div className="nbs-spec-row">
            <span className="nbs-mono" style={{ color: '#7eb5d7' }}>A</span>
            <span className="nbs-mono" style={{ color: '#ffffff' }}>#ffffff</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>colors.text.primary</span>
          </div>
          <div className="nbs-spec-row">
            <span className="nbs-mono" style={{ color: '#7eb5d7' }}>R</span>
            <span className="nbs-mono" style={{ color: '#ff7c2b' }}>#ff7c2b</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>colors.accent.orange</span>
          </div>
          <div className="nbs-spec-row">
            <span className="nbs-mono" style={{ color: '#7eb5d7' }}>ISE</span>
            <span className="nbs-mono" style={{ color: '#2ab0fe' }}>#2ab0fe</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>colors.accent.brandBlue</span>
          </div>
          <div className="nbs-spec-row">
            <span className="nbs-mono" style={{ color: '#7eb5d7' }}>font-family</span>
            <span className="nbs-mono" style={{ color: 'rgba(255,255,255,0.55)' }}>Arya Bold</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>typography.fontFamily.display</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ── 05 — Props API ─────────────────────────────────────────────────────────

function PropsAPI() {
  const rows = [
    { name:'links',          type:'NavLink[]',   def:'DEFAULT_LINKS', req:false, desc:'Array of { label, href, active? } nav items.' },
    { name:'onContactClick', type:'() => void',  def:'undefined',     req:false, desc:'Called when the CONTACT button is clicked.' },
    { name:'className',      type:'string',      def:'""',            req:false, desc:'Appended to root <header> class list.' },
  ];
  const linkRows = [
    { name:'label',  type:'string',  def:'—',     req:true,  desc:'Visible text for the link (e.g. "HOME").' },
    { name:'href',   type:'string',  def:'—',     req:true,  desc:'React Router path for the link.' },
    { name:'active', type:'boolean', def:'false', req:false, desc:'Highlights the link as the current page.' },
  ];

  return (
    <Section id="api" num="05" title="Props API"
      desc="NavbarProps and the NavLink object shape.">
      <span className="nbs-sublabel" style={{ marginBottom: 8, display: 'block' }}>NavbarProps</span>
      <div className="nbs-table-wrap">
        <table className="nbs-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Req</th><th>Description</th></tr></thead>
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
      <span className="nbs-sublabel" style={{ marginTop: 20, marginBottom: 8, display: 'block' }}>NavLink</span>
      <div className="nbs-table-wrap">
        <table className="nbs-table">
          <thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Req</th><th>Description</th></tr></thead>
          <tbody>
            {linkRows.map(r => (
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
    </Section>
  );
}

// ── 06 — Snippets ──────────────────────────────────────────────────────────

function Snippets() {
  const [showContact, setShowContact] = useState(false);
  const examples = [
    { label: 'Default (all links, no active state)',
      code: `<Navbar />` },
    { label: 'With active link',
      code: `<Navbar links={[\n  { label: 'HOME',      href: '/',         active: true },\n  { label: 'AWARENESS', href: '/awareness' },\n]} />` },
    { label: 'With contact handler',
      code: `<Navbar onContactClick={() => openContactModal()} />` },
    { label: 'Custom links',
      code: `<Navbar\n  links={[\n    { label: 'RESOURCES', href: '/resources' },\n    { label: 'ABOUT',     href: '/about' },\n  ]}\n/>` },
  ];

  return (
    <Section id="snippets" num="06" title="Copy-Ready Snippets"
      desc="Import: import { Navbar } from '../components/Navbar'">
      <div className="nbs-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="nbs-snippet">
            <span className="nbs-snippet-label">{ex.label}</span>
            <pre className="nbs-code">{ex.code}</pre>
          </div>
        ))}
      </div>
      {showContact && (
        <p style={{ marginTop: 12, color: '#31bbe1', fontSize: 13 }}>Contact handler fired.</p>
      )}
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 16 }}>
        Live example: <button
          style={{ background: 'none', border: 'none', color: '#7eb5d7', cursor: 'pointer', fontSize: 12, textDecoration: 'underline' }}
          onClick={() => { setShowContact(true); setTimeout(() => setShowContact(false), 2000); }}
        >click to fire onContactClick</button>
      </p>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function NavbarShowcase() {
  return (
    <div className="nbs">
      <div className="nbs-body">
        <FigmaSource />
        <TokenPreview />
        <StatesSection />
        <LogoAnatomy />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
