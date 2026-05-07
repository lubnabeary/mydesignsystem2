import { useState } from 'react';
import './MoodRatingTileShowcase.css';
import { MoodRatingTile, MoodRatingGroup } from '../components/MoodRatingTile';

// ── Section shell ──────────────────────────────────────────────────────────

function Section({ id, num, title, desc, children }: {
  id: string; num: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="msc-section">
      <div className="msc-section-head">
        <span className="msc-section-num">{num}</span>
        <div>
          <h2 className="msc-section-title">{title}</h2>
          <p className="msc-section-desc">{desc}</p>
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
      desc="Extracted from D3C-FINAL — Mood Tracker rating input row. 10 square tiles, dark background, purple selected state. 52×52 px, border-radius 10px.">
      <div className="msc-demo-box">
        <MoodRatingGroup value={7} />
      </div>
    </Section>
  );
}

// ── 02 — All States ────────────────────────────────────────────────────────

function StatesSection() {
  const [rating, setRating] = useState<number | undefined>(undefined);

  return (
    <Section id="states" num="02" title="Tile States"
      desc="Default (dark), selected (purple), hover (try it), disabled (opacity 0.4). Click tiles to see live state changes.">
      <div className="msc-states">
        <div className="msc-state-card">
          <div className="msc-state-label">Default</div>
          <div className="msc-state-sub">bg #1a1229 · border rgba(255,255,255,0.12)</div>
          <MoodRatingTile value={5} />
        </div>

        <div className="msc-state-card">
          <div className="msc-state-label">Selected — purple</div>
          <div className="msc-state-sub">bg rgba(107,79,160,0.6) · border rgba(107,79,160,0.8)</div>
          <MoodRatingTile value={5} selected />
        </div>

        <div className="msc-state-card">
          <div className="msc-state-label">Disabled</div>
          <div className="msc-state-sub">opacity 0.4 · cursor not-allowed</div>
          <MoodRatingTile value={5} disabled />
        </div>

        <div className="msc-state-card">
          <div className="msc-state-label">Hover — try it</div>
          <div className="msc-state-sub">bg rgba(255,255,255,0.07) on hover</div>
          <MoodRatingTile value={5} />
        </div>
      </div>

      <div className="msc-subsection">
        <span className="msc-sublabel">Live group — click to select</span>
        <div className="msc-demo-box">
          <MoodRatingGroup value={rating} onChange={setRating} />
        </div>
        {rating !== undefined && (
          <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
            Selected: <strong style={{ color: '#31bbe1' }}>{rating}</strong>
          </p>
        )}
      </div>
    </Section>
  );
}

// ── 03 — Props API ─────────────────────────────────────────────────────────

function PropsAPI() {
  const tileRows = [
    { name: 'value',     type: 'number',              def: '—',       req: true,  desc: 'Rating number displayed inside the tile (1–10).' },
    { name: 'selected',  type: 'boolean',             def: 'false',   req: false, desc: 'Purple selected state.' },
    { name: 'onClick',   type: '(value: number) => void', def: 'undefined', req: false, desc: 'Called with the tile\'s value when clicked.' },
    { name: 'disabled',  type: 'boolean',             def: 'false',   req: false, desc: 'opacity 0.4, cursor not-allowed.' },
    { name: 'className', type: 'string',              def: '""',      req: false, desc: 'Extra classes for local overrides.' },
  ];

  const groupRows = [
    { name: 'max',      type: 'number',              def: '10',      req: false, desc: 'Number of tiles to render.' },
    { name: 'value',    type: 'number',              def: 'undefined', req: false, desc: 'Controlled selected tile.' },
    { name: 'onChange', type: '(value: number) => void', def: 'undefined', req: false, desc: 'Called when a tile is clicked.' },
    { name: 'disabled', type: 'boolean',             def: 'false',   req: false, desc: 'Disables all tiles.' },
  ];

  return (
    <Section id="api" num="03" title="Props API"
      desc="MoodRatingTile and MoodRatingGroup are both exported from the same module.">
      <div className="msc-subsection">
        <span className="msc-sublabel">MoodRatingTile props</span>
        <div className="msc-table-wrap">
          <table className="msc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Req</th><th>Description</th></tr></thead>
            <tbody>
              {tileRows.map(r => (
                <tr key={r.name}>
                  <td><code>{r.name}</code></td>
                  <td><code>{r.type}</code></td>
                  <td><code>{r.def}</code></td>
                  <td style={{ color: r.req ? '#f95757' : 'rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 700 }}>{r.req ? 'Yes' : 'No'}</td>
                  <td style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{r.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="msc-subsection">
        <span className="msc-sublabel">MoodRatingGroup props</span>
        <div className="msc-table-wrap">
          <table className="msc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Req</th><th>Description</th></tr></thead>
            <tbody>
              {groupRows.map(r => (
                <tr key={r.name}>
                  <td><code>{r.name}</code></td>
                  <td><code>{r.type}</code></td>
                  <td><code>{r.def}</code></td>
                  <td style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 700 }}>No</td>
                  <td style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{r.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

// ── 04 — Snippets ──────────────────────────────────────────────────────────

function Snippets() {
  const examples = [
    { label: 'Controlled group — Mood Tracker form',
      code: `const [mood, setMood] = useState<number | undefined>(undefined);

<MoodRatingGroup value={mood} onChange={setMood} />` },
    { label: 'Pre-selected group',
      code: `<MoodRatingGroup value={7} />` },
    { label: 'Custom max (1–5 scale)',
      code: `<MoodRatingGroup max={5} value={3} onChange={setMood} />` },
    { label: 'Single tile',
      code: `<MoodRatingTile value={8} selected onClick={(v) => console.log(v)} />` },
  ];

  return (
    <Section id="snippets" num="04" title="Copy-Ready Snippets"
      desc="Import: import { MoodRatingTile, MoodRatingGroup } from '../components/MoodRatingTile'">
      <div className="msc-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="msc-snippet">
            <span className="msc-snippet-label">{ex.label}</span>
            <pre className="msc-code">{ex.code}</pre>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function MoodRatingTileShowcase() {
  return (
    <div className="msc">
      <div className="msc-body">
        <FigmaSource />
        <StatesSection />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
