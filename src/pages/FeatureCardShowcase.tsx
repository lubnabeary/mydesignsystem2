import './FeatureCardShowcase.css';
import { FeatureCard } from '../components/FeatureCard';
import type { FeatureCardVariant } from '../components/FeatureCard';
import { colors, typography, borderRadius, shadows } from '../styles/design-tokens';

function Section({ id, num, title, desc, children }: {
  id: string; num: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="fcs-section">
      <div className="fcs-section-head">
        <span className="fcs-section-num">{num}</span>
        <div>
          <h2 className="fcs-section-title">{title}</h2>
          <p className="fcs-section-desc">{desc}</p>
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
      desc="Extracted from D3C-FINAL node 585:4764 (Awareness page — infographic cards). Canvas 1880 px, scale ×0.681 to 1280 px viewport. 3 card types correspond to the ARISE app's main navigation sections.">
      <div className="fcs-spec-grid">
        <div className="fcs-spec-item"><span className="fcs-spec-key">Card width (canvas)</span><span className="fcs-spec-val">461.7 px → 314 px</span></div>
        <div className="fcs-spec-item"><span className="fcs-spec-key">Card height (canvas)</span><span className="fcs-spec-val">437.9 px → 298 px</span></div>
        <div className="fcs-spec-item"><span className="fcs-spec-key">Border-radius</span><span className="fcs-spec-val">42.75 → 29 px</span></div>
        <div className="fcs-spec-item"><span className="fcs-spec-key">Border</span><span className="fcs-spec-val">1.084 px solid rgba(255,255,255,0.3)</span></div>
        <div className="fcs-spec-item"><span className="fcs-spec-key">Background</span><span className="fcs-spec-val">#1e1a2c (background.secondary)</span></div>
        <div className="fcs-spec-item"><span className="fcs-spec-key">Shadow</span><span className="fcs-spec-val">0 3 8 rgba(0,0,0,0.15)</span></div>
        <div className="fcs-spec-item"><span className="fcs-spec-key">Title font</span><span className="fcs-spec-val">Be Vietnam Pro Bold 44 → 30 px</span></div>
        <div className="fcs-spec-item"><span className="fcs-spec-key">Subtitle font</span><span className="fcs-spec-val">Be Vietnam Pro Bold 20 → 14 px, #d0d0d0</span></div>
      </div>
    </Section>
  );
}

// ── 02 — Design Tokens ─────────────────────────────────────────────────────

function TokenPreview() {
  const colorTokens = [
    { token: 'colors.background.secondary', value: colors.background.secondary, label: 'Card background' },
    { token: 'colors.border.subtle',         value: colors.border.subtle,         label: 'Card border' },
    { token: '#7fdfff (awareness)',           value: '#7fdfff',                    label: 'Awareness title accent' },
    { token: 'colors.brand.salmon',          value: colors.brand.salmon,          label: 'Mood Tracker title' },
    { token: 'colors.accent.teal',           value: colors.accent.teal,           label: 'Student Exp. title' },
    { token: '#d0d0d0 (subtitle)',            value: '#d0d0d0',                    label: 'Subtitle text (Figma exact)' },
  ];

  return (
    <Section id="tokens" num="02" title="Design Tokens"
      desc="Every value references a named token from src/styles/design-tokens.ts.">
      <div className="fcs-token-grid">
        {colorTokens.map(t => (
          <div key={t.token} className="fcs-token-card">
            <div className="fcs-token-swatch" style={{ background: t.value, border: t.value === '#ffffff' ? '1px solid rgba(255,255,255,0.2)':undefined }} />
            <div className="fcs-token-info">
              <span className="fcs-mono fcs-token-name">{t.token}</span>
              <span className="fcs-mono fcs-token-hex">{t.value}</span>
              <span className="fcs-token-desc">{t.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="fcs-two-col" style={{ marginTop:16 }}>
        <div className="fcs-subsection">
          <span className="fcs-sublabel">Typography</span>
          <div className="fcs-spec-list">
            {[
              { k: 'fontFamily.primary', v: typography.fontFamily.primary, n: 'titles + subtitles' },
              { k: 'fontWeight.bold',    v: '700', n: 'title (30px)' },
              { k: 'fontWeight.bold',    v: '700', n: 'subtitle (14px)' },
            ].map(({ k,v,n }, i) => (
              <div key={i} className="fcs-spec-row">
                <span className="fcs-mono" style={{ color:'#7eb5d7' }}>{k}</span>
                <span className="fcs-mono" style={{ color:'rgba(255,255,255,0.55)' }}>{v}</span>
                <span style={{ color:'rgba(255,255,255,0.35)', fontSize:12 }}>{n}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="fcs-subsection">
          <span className="fcs-sublabel">Spacing & radius</span>
          <div className="fcs-spec-list">
            {[
              { k: 'borderRadius.card',  v: borderRadius.card,    n: 'card corners' },
              { k: 'shadows.card',       v: shadows.card,          n: 'resting shadow' },
              { k: 'shadows.nav',        v: shadows.nav,           n: 'hover shadow' },
            ].map(({ k,v,n }) => (
              <div key={k} className="fcs-spec-row">
                <span className="fcs-mono" style={{ color:'#7eb5d7' }}>{k}</span>
                <span className="fcs-mono" style={{ color:'rgba(255,255,255,0.55)', fontSize:11 }}>{v}</span>
                <span style={{ color:'rgba(255,255,255,0.35)', fontSize:12 }}>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ── 03 — Three Variants ────────────────────────────────────────────────────

function VariantsSection() {
  const variants: { v: FeatureCardVariant; desc: string }[] = [
    { v: 'awareness',           desc: 'Teal (#7fdfff) title — links to the Awareness information page' },
    { v: 'moodTracker',         desc: 'Salmon (#ff8e8e) title — links to the Mood Tracker tool' },
    { v: 'studentExperiences',  desc: 'Teal (#31bbe1) title — links to shared student stories' },
  ];

  return (
    <Section id="variants" num="03" title="Three Variants"
      desc="Each variant has a distinct accent color for its title, matching the ARISE app section palette. Hover each card to see the lift animation.">
      <div className="fcs-cards-row">
        {variants.map(({ v, desc }) => (
          <div key={v} className="fcs-card-demo">
            <FeatureCard variant={v} />
            <div className="fcs-card-meta">
              <span className="fcs-mono fcs-token-name">variant="{v}"</span>
              <span style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 04 — Hover Animation ───────────────────────────────────────────────────

function HoverSection() {
  return (
    <Section id="hover" num="04" title="Hover & Interaction"
      desc="CSS transitions — no JS required. Hover the card to see the full effect.">
      <div className="fcs-spec-list">
        {[
          { k: 'Resting',       v: 'translateY(0), shadow 0 3 8 rgba(0,0,0,0.15)' },
          { k: 'Hover',         v: 'translateY(-6px), shadow 0 12 28 rgba(0,0,0,0.3) + accent border' },
          { k: 'Active',        v: 'translateY(-2px), shadow 0 6 14 rgba(0,0,0,0.25)' },
          { k: 'Icon scale',    v: 'scale(1.08) on hover — spring easing (animation.easing.spring)' },
          { k: 'Duration',      v: '150ms (animation.duration.base)' },
          { k: 'Easing',        v: 'cubic-bezier(0.4, 0, 0.2, 1) (animation.easing.default)' },
          { k: 'Focus ring',    v: '2px teal outline, 3px offset — WCAG 2.1 AA' },
        ].map(({ k, v }) => (
          <div key={k} className="fcs-spec-row">
            <span className="fcs-mono" style={{ color:'#7eb5d7', minWidth:160 }}>{k}</span>
            <span style={{ color:'rgba(255,255,255,0.55)', fontSize:12 }}>{v}</span>
          </div>
        ))}
      </div>
      <div className="fcs-hover-demo">
        <FeatureCard variant="awareness" description="Hover me to see the lift animation and accent border." />
      </div>
    </Section>
  );
}

// ── 05 — Props API ─────────────────────────────────────────────────────────

function PropsAPI() {
  const rows = [
    { name:'variant',     type:'FeatureCardVariant', def:'—',          req:true,  desc:"'awareness' | 'moodTracker' | 'studentExperiences'" },
    { name:'title',       type:'string',              def:'variant def', req:false, desc:'Override the card title text.' },
    { name:'subtitle',    type:'string',              def:'variant def', req:false, desc:'Short descriptor below the title.' },
    { name:'icon',        type:'string (URL)',         def:'variant def', req:false, desc:'Image URL for the icon area.' },
    { name:'description', type:'string',              def:'undefined',   req:false, desc:'Optional body paragraph below subtitle.' },
    { name:'onExplore',   type:'() => void',          def:'undefined',   req:false, desc:'Click handler for the Explore button.' },
    { name:'href',        type:'string',              def:'variant def', req:false, desc:'React Router path — wraps card in <Link>.' },
    { name:'className',   type:'string',              def:'""',          req:false, desc:'Extra class appended to the card element.' },
  ];

  return (
    <Section id="api" num="05" title="Props API"
      desc="Full TypeScript interface. Import types from 'src/components/FeatureCard'.">
      <div className="fcs-table-wrap">
        <table className="fcs-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Req</th><th>Description</th></tr></thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.name}>
                <td><code>{r.name}</code></td>
                <td><code>{r.type}</code></td>
                <td><code>{r.def}</code></td>
                <td style={{ color:r.req?'#f95757':'rgba(255,255,255,0.3)', fontSize:11, fontWeight:700 }}>{r.req?'Yes':'No'}</td>
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
  const examples = [
    { label: 'Default Awareness card (uses built-in title, icon, href)',
      code: `<FeatureCard variant="awareness" />` },
    { label: 'All three cards side by side',
      code: `<div style={{ display: 'flex', gap: 24 }}>\n  <FeatureCard variant="awareness" />\n  <FeatureCard variant="moodTracker" />\n  <FeatureCard variant="studentExperiences" />\n</div>` },
    { label: 'Custom title and description',
      code: `<FeatureCard\n  variant="moodTracker"\n  title="Track Your Mood"\n  subtitle="Daily check-ins"\n  description="Log how you're feeling each day and spot patterns over time."\n/>` },
    { label: 'With onExplore handler (no navigation)',
      code: `<FeatureCard\n  variant="awareness"\n  href={undefined}\n  onExplore={() => openAwarenessSection()}\n/>` },
  ];

  return (
    <Section id="snippets" num="06" title="Copy-Ready Snippets"
      desc="Import: import { FeatureCard } from '../components/FeatureCard'">
      <div className="fcs-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="fcs-snippet">
            <span className="fcs-snippet-label">{ex.label}</span>
            <pre className="fcs-code">{ex.code}</pre>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function FeatureCardShowcase() {
  return (
    <div className="fcs">
      <div className="fcs-body">
        <FigmaSource />
        <TokenPreview />
        <VariantsSection />
        <HoverSection />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
