import { useState } from 'react';
import './PaginationDotShowcase.css';
import { PaginationDot } from '../components/PaginationDot';

// ── Section shell ──────────────────────────────────────────────────────────

function Section({ id, num, title, desc, children }: {
  id: string; num: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="psc-section">
      <div className="psc-section-head">
        <span className="psc-section-num">{num}</span>
        <div>
          <h2 className="psc-section-title">{title}</h2>
          <p className="psc-section-desc">{desc}</p>
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
      desc="Extracted from D3C-FINAL — Myth Card carousel bottom indicator. Inactive: grey 10px circle. Active: teal 24px elongated pill. Transition: all 200ms.">
      <div className="psc-demo-box">
        <PaginationDot count={5} active={2} />
        <span className="psc-demo-label">5 dots · active index 2</span>
      </div>
    </Section>
  );
}

// ── 02 — All States ────────────────────────────────────────────────────────

function StatesSection() {
  const [active, setActive] = useState(0);

  return (
    <Section id="states" num="02" title="States & Variants"
      desc="Different counts, different active positions. Click dots to change active index in the live example.">
      <div className="psc-states">
        <div className="psc-state-card">
          <div className="psc-state-label">3 dots — index 0</div>
          <div className="psc-state-sub">active at start</div>
          <PaginationDot count={3} active={0} />
        </div>

        <div className="psc-state-card">
          <div className="psc-state-label">3 dots — index 1</div>
          <div className="psc-state-sub">active in middle</div>
          <PaginationDot count={3} active={1} />
        </div>

        <div className="psc-state-card">
          <div className="psc-state-label">5 dots — index 4</div>
          <div className="psc-state-sub">active at end</div>
          <PaginationDot count={5} active={4} />
        </div>

        <div className="psc-state-card">
          <div className="psc-state-label">8 dots — index 3</div>
          <div className="psc-state-sub">longer carousel</div>
          <PaginationDot count={8} active={3} />
        </div>
      </div>

      <div className="psc-subsection">
        <span className="psc-sublabel">Live — click a dot to navigate</span>
        <div className="psc-demo-box">
          <PaginationDot count={6} active={active} onChange={setActive} />
          <span className="psc-demo-label">Active index: {active}</span>
        </div>
      </div>
    </Section>
  );
}

// ── 03 — Props API ─────────────────────────────────────────────────────────

function PropsAPI() {
  const rows = [
    { name: 'count',     type: 'number',              def: '—',        req: true,  desc: 'Total number of dots to render.' },
    { name: 'active',    type: 'number',              def: '—',        req: true,  desc: '0-indexed active dot position.' },
    { name: 'onChange',  type: '(index: number) => void', def: 'undefined', req: false, desc: 'Called with clicked dot index.' },
    { name: 'className', type: 'string',              def: '""',       req: false, desc: 'Extra classes for root container.' },
  ];

  return (
    <Section id="api" num="03" title="Props API"
      desc="Import: import { PaginationDot } from '../components/PaginationDot'">
      <div className="psc-table-wrap">
        <table className="psc-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Req</th><th>Description</th></tr>
          </thead>
          <tbody>
            {rows.map(r => (
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
    </Section>
  );
}

// ── 04 — Snippets ──────────────────────────────────────────────────────────

function Snippets() {
  const examples = [
    { label: 'Myth card carousel',
      code: `const [slide, setSlide] = useState(0);

<PaginationDot
  count={mythCards.length}
  active={slide}
  onChange={setSlide}
/>` },
    { label: 'Display only (no interaction)',
      code: `<PaginationDot count={5} active={currentIndex} />` },
    { label: '3-step onboarding flow',
      code: `<PaginationDot count={3} active={step} onChange={setStep} />` },
  ];

  return (
    <Section id="snippets" num="04" title="Copy-Ready Snippets"
      desc="Import: import { PaginationDot } from '../components/PaginationDot'">
      <div className="psc-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="psc-snippet">
            <span className="psc-snippet-label">{ex.label}</span>
            <pre className="psc-code">{ex.code}</pre>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function PaginationDotShowcase() {
  return (
    <div className="psc">
      <div className="psc-body">
        <FigmaSource />
        <StatesSection />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
