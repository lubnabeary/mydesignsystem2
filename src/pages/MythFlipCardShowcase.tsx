import { useState } from 'react';
import './MythFlipCardShowcase.css';
import { MythFlipCard } from '../components/MythFlipCard';
import type { MythTruth } from '../components/MythFlipCard';
import { colors, typography } from '../styles/design-tokens';

function Section({ id, num, title, desc, children }: {
  id: string; num: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="mfs-section">
      <div className="mfs-section-head">
        <span className="mfs-section-num">{num}</span>
        <div>
          <h2 className="mfs-section-title">{title}</h2>
          <p className="mfs-section-desc">{desc}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

// ── 01 — Figma Source ──────────────────────────────────────────────────────

function FigmaSource() {
  const faces = [
    {
      label:   'Front — Myth',
      bg:      'linear-gradient(180deg, #1e1a2c 20%, #341f42 104%, #51314c 110%)',
      overlay: 'rgba(60, 37, 37, 0.5)',
      glow:    '0 4px 4px 15px rgba(245, 16, 16, 0.1)',
      icon:    '❌',
      heading: 'Myth',
      color:   '#ff7f7f',
    },
    {
      label:   'Back — Truth',
      bg:      'linear-gradient(180deg, #1e1a2c 20%, #341f42 104%, #51314c 110%)',
      overlay: 'rgba(37, 60, 38, 0.4)',
      glow:    '0 4px 4px 15px rgba(142, 245, 16, 0.1)',
      icon:    '✅',
      heading: 'Truth',
      color:   '#ff7f7f',
    },
  ];

  return (
    <Section id="figma" num="01" title="Figma Source"
      desc="Two card faces from D3C-FINAL node 639:9503 (Frame 68 — Myths vs. Truths). Canvas 1367 px, card 652×787 px.">
      <div className="mfs-figma-grid">
        {faces.map(f => (
          <div key={f.label} className="mfs-figma-card">
            <span className="mfs-sublabel">{f.label}</span>
            <div className="mfs-face-preview" style={{
              background: f.bg,
              boxShadow: f.glow,
              border: '1.23px solid rgba(255,255,255,0.3)',
              borderRadius: 20,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position:'absolute', inset:0, background: f.overlay, borderRadius: 20 }} />
              <div style={{ position:'relative', zIndex:1, display:'flex', gap:8, alignItems:'center', marginBottom:8 }}>
                <span style={{ fontSize:22 }}>{f.icon}</span>
                <span style={{ fontFamily:"'Be Vietnam Pro',sans-serif", fontWeight:800, fontSize:22, color: f.color }}>{f.heading}</span>
              </div>
              <p style={{ position:'relative', zIndex:1, fontFamily:"'Be Vietnam Pro',sans-serif", fontWeight:500, fontSize:14, color:'#fff', margin:0, lineHeight:1.4 }}>
                "Anxiety is just being nervous, everyone has it, it's not a real condition."
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mfs-spec-grid">
        <div className="mfs-spec-item"><span className="mfs-spec-key">Card canvas size</span><span className="mfs-spec-val">652×787 px</span></div>
        <div className="mfs-spec-item"><span className="mfs-spec-key">Border-radius (canvas)</span><span className="mfs-spec-val">49 px → 33 px scaled</span></div>
        <div className="mfs-spec-item"><span className="mfs-spec-key">Heading font</span><span className="mfs-spec-val">Be Vietnam Pro ExtraBold 55 px</span></div>
        <div className="mfs-spec-item"><span className="mfs-spec-key">Quote font</span><span className="mfs-spec-val">Be Vietnam Pro Medium 35 px</span></div>
        <div className="mfs-spec-item"><span className="mfs-spec-key">Heading color</span><span className="mfs-spec-val">#ff7f7f (both faces)</span></div>
        <div className="mfs-spec-item"><span className="mfs-spec-key">Front glow</span><span className="mfs-spec-val">rgba(245,16,16,0.1)</span></div>
        <div className="mfs-spec-item"><span className="mfs-spec-key">Back glow</span><span className="mfs-spec-val">rgba(142,245,16,0.1)</span></div>
        <div className="mfs-spec-item"><span className="mfs-spec-key">Carousel dots</span><span className="mfs-spec-val">6 total, first #31bbe1</span></div>
      </div>
    </Section>
  );
}

// ── 02 — Design Tokens ─────────────────────────────────────────────────────

function TokenPreview() {
  const tokens = [
    { token: 'front tint overlay', value: 'rgba(60, 37, 37, 0.5)',  label: 'Myth face — red tint' },
    { token: 'back tint overlay',  value: 'rgba(37, 60, 38, 0.4)',  label: 'Truth face — green tint' },
    { token: 'heading color',      value: '#ff7f7f',                 label: 'Both face headings' },
    { token: 'colors.accent.teal', value: colors.accent.teal,        label: 'Active dot' },
    { token: 'dot inactive',       value: 'rgba(255,255,255,0.3)',   label: 'Inactive dots' },
    { token: 'text.primary',       value: '#ffffff',                 label: 'Quote text' },
    { token: 'border.subtle',      value: colors.border.subtle,      label: 'Card border' },
  ];

  return (
    <Section id="tokens" num="02" title="Design Tokens"
      desc="Color and animation tokens used by the flip card.">
      <div className="mfs-token-grid">
        {tokens.map(t => (
          <div key={t.token} className="mfs-token-card">
            <div className="mfs-token-swatch" style={{ background: t.value, border: t.value === '#ffffff' ? '1px solid rgba(255,255,255,0.2)' : 'none' }} />
            <div className="mfs-token-info">
              <span className="mfs-mono mfs-token-name">{t.token}</span>
              <span className="mfs-mono mfs-token-hex">{t.value}</span>
              <span className="mfs-token-desc">{t.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mfs-subsection" style={{ marginTop: 12 }}>
        <span className="mfs-sublabel">Typography</span>
        <div className="mfs-spec-list">
          <div className="mfs-spec-row">
            <span className="mfs-mono" style={{ color: '#7eb5d7' }}>{typography.fontFamily.primary}</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize:12 }}>headings + quotes</span>
          </div>
          <div className="mfs-spec-row">
            <span className="mfs-mono" style={{ color: '#7eb5d7' }}>ExtraBold 800</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize:12 }}>Myth heading</span>
          </div>
          <div className="mfs-spec-row">
            <span className="mfs-mono" style={{ color: '#7eb5d7' }}>Bold 700</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize:12 }}>Truth heading</span>
          </div>
          <div className="mfs-spec-row">
            <span className="mfs-mono" style={{ color: '#7eb5d7' }}>Medium 500</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize:12 }}>Quote body text</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ── 03 — Live Demo ─────────────────────────────────────────────────────────

function LiveDemo() {
  const singleEntry: MythTruth[] = [
    {
      myth:  '"Anxiety is just being nervous, everyone has it, it\'s not a real condition."',
      truth: '"Anxiety disorders are recognized medical conditions that can significantly impair daily functioning and quality of life."',
    },
  ];

  return (
    <Section id="demo" num="03" title="Live Demo"
      desc="Click or press Enter/Space on the card to flip between Myth and Truth. Use the dots to navigate between cards.">
      <div className="mfs-demo-row">
        <div className="mfs-demo-block">
          <span className="mfs-sublabel">Single card</span>
          <MythFlipCard data={singleEntry} />
        </div>
        <div className="mfs-demo-block">
          <span className="mfs-sublabel">Full dataset (6 cards)</span>
          <MythFlipCard />
        </div>
      </div>
    </Section>
  );
}

// ── 04 — Interaction ───────────────────────────────────────────────────────

function Interaction() {
  return (
    <Section id="interaction" num="04" title="Interaction Model"
      desc="How the flip and navigation work under the hood.">
      <div className="mfs-spec-list">
        {[
          { k: 'Flip trigger',   v: 'Click or Enter/Space on the card' },
          { k: 'Animation',      v: 'CSS rotateY(180deg), perspective 1000px, 650ms ease' },
          { k: 'ARIA',           v: 'role=button, aria-label updates with face state' },
          { k: 'Dot navigation', v: 'role=tablist / role=tab, navigating resets to front' },
          { k: 'Focus ring',     v: '3px teal ring on keyboard focus (colors.accent.teal)' },
          { k: 'backface-visibility', v: 'hidden — prevents bleed-through between faces' },
        ].map(({ k, v }) => (
          <div key={k} className="mfs-spec-row">
            <span className="mfs-mono" style={{ color: '#7eb5d7', minWidth: 180 }}>{k}</span>
            <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>{v}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 05 — Props API ─────────────────────────────────────────────────────────

function PropsAPI() {
  const rows = [
    { name:'data',          type:'MythTruth[]', def:'DEFAULT_DATA (6)',  req:false, desc:'Array of { myth, truth } strings.' },
    { name:'mythCatImage',  type:'string',       def:'/images/cat-myth.png',  req:false, desc:'Path to the front-face pixel cat image.' },
    { name:'truthCatImage', type:'string',       def:'/images/cat-truth.png', req:false, desc:'Path to the back-face pixel cat image.' },
    { name:'className',     type:'string',       def:'""',               req:false, desc:'Appended to root wrapper class.' },
  ];

  return (
    <Section id="api" num="05" title="Props API"
      desc="Full TypeScript interface. Import types from 'src/components/MythFlipCard'.">
      <div className="mfs-table-wrap">
        <table className="mfs-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Req</th><th>Description</th></tr></thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.name}>
                <td><code>{r.name}</code></td>
                <td><code>{r.type}</code></td>
                <td><code>{r.def}</code></td>
                <td style={{ color: r.req ? '#f95757':'rgba(255,255,255,0.3)', fontSize:11, fontWeight:700 }}>{r.req ? 'Yes':'No'}</td>
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
    { label: 'Default — 6 built-in myth/truth pairs',
      code: `<MythFlipCard />` },
    { label: 'Custom data',
      code: `const data = [\n  {\n    myth:  '"Everyone with anxiety is always worried."',\n    truth: '"Anxiety can present in many ways — some people appear calm."',\n  },\n];\n\n<MythFlipCard data={data} />` },
    { label: 'Custom cat images',
      code: `<MythFlipCard\n  mythCatImage="/images/my-cat-front.png"\n  truthCatImage="/images/my-cat-back.png"\n/>` },
  ];

  return (
    <Section id="snippets" num="06" title="Copy-Ready Snippets"
      desc="Import: import { MythFlipCard } from '../components/MythFlipCard'">
      <div className="mfs-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="mfs-snippet">
            <span className="mfs-snippet-label">{ex.label}</span>
            <pre className="mfs-code">{ex.code}</pre>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function MythFlipCardShowcase() {
  return (
    <div className="mfs">
      <div className="mfs-body">
        <FigmaSource />
        <TokenPreview />
        <LiveDemo />
        <Interaction />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
