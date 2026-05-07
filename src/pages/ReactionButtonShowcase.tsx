import { useState } from 'react';
import './ReactionButtonShowcase.css';
import { ReactionButton } from '../components/ReactionButton';

// ── Section shell ──────────────────────────────────────────────────────────

function Section({ id, num, title, desc, children }: {
  id: string; num: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="rsc-section">
      <div className="rsc-section-head">
        <span className="rsc-section-num">{num}</span>
        <div>
          <h2 className="rsc-section-title">{title}</h2>
          <p className="rsc-section-desc">{desc}</p>
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
      desc="Extracted from D3C-FINAL — Student Experiences card reaction row. Heart emoji pill, height 40px, border-radius 9999px. Default dark, active purple.">
      <div className="rsc-demo-row">
        <ReactionButton count={24} />
        <ReactionButton count={24} active />
      </div>
    </Section>
  );
}

// ── 02 — All States ────────────────────────────────────────────────────────

function StatesSection() {
  const [count, setCount] = useState(42);
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(prev => !prev);
    setCount(prev => liked ? prev - 1 : prev + 1);
  }

  return (
    <Section id="states" num="02" title="All States"
      desc="Default, active/liked (purple), loading (spinner), disabled. Try the live button below.">
      <div className="rsc-states">
        <div className="rsc-state-card">
          <div className="rsc-state-label">Default</div>
          <div className="rsc-state-sub">bg rgba(255,255,255,0.06) · border rgba(255,255,255,0.12)</div>
          <ReactionButton count={18} />
        </div>

        <div className="rsc-state-card">
          <div className="rsc-state-label">Active / Liked — purple</div>
          <div className="rsc-state-sub">bg rgba(107,79,160,0.35) · border rgba(107,79,160,0.6)</div>
          <ReactionButton count={19} active />
        </div>

        <div className="rsc-state-card">
          <div className="rsc-state-label">Loading</div>
          <div className="rsc-state-sub">spinner · opacity 0.7 · cursor wait</div>
          <ReactionButton count={18} loading />
        </div>

        <div className="rsc-state-card">
          <div className="rsc-state-label">Disabled</div>
          <div className="rsc-state-sub">opacity 0.4 · pointer-events none</div>
          <ReactionButton count={18} disabled />
        </div>
      </div>

      <div className="rsc-subsection">
        <span className="rsc-sublabel">Live toggle — click to react</span>
        <div className="rsc-demo-row">
          <ReactionButton count={count} active={liked} onClick={handleLike} />
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
            {liked ? 'Liked!' : 'Click to like'}
          </span>
        </div>
      </div>
    </Section>
  );
}

// ── 03 — Props API ─────────────────────────────────────────────────────────

function PropsAPI() {
  const rows = [
    { name: 'count',    type: 'number',   def: '0',         req: false, desc: 'Number displayed next to the heart.' },
    { name: 'active',   type: 'boolean',  def: 'false',     req: false, desc: 'Purple liked state; sets aria-pressed.' },
    { name: 'loading',  type: 'boolean',  def: 'false',     req: false, desc: 'Shows spinner, disables click, cursor wait.' },
    { name: 'onClick',  type: '() => void', def: 'undefined', req: false, desc: 'Called on button click.' },
    { name: 'disabled', type: 'boolean',  def: 'false',     req: false, desc: 'opacity 0.4, pointer-events none.' },
    { name: 'className',type: 'string',   def: '""',        req: false, desc: 'Extra classes for root element.' },
  ];

  return (
    <Section id="api" num="03" title="Props API"
      desc="Full TypeScript interface. Import: import { ReactionButton } from '../components/ReactionButton'">
      <div className="rsc-table-wrap">
        <table className="rsc-table">
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
    { label: 'Toggle reaction on a post',
      code: `const [liked, setLiked] = useState(false);
const [count, setCount] = useState(post.reactions);

function handleLike() {
  setLiked(prev => !prev);
  setCount(prev => liked ? prev - 1 : prev + 1);
}

<ReactionButton count={count} active={liked} onClick={handleLike} />` },
    { label: 'Async reaction with loading state',
      code: `const [liked, setLiked] = useState(false);
const [loading, setLoading] = useState(false);

async function handleLike() {
  setLoading(true);
  await api.toggleReaction(postId);
  setLiked(prev => !prev);
  setLoading(false);
}

<ReactionButton count={count} active={liked} loading={loading} onClick={handleLike} />` },
    { label: 'Read-only display',
      code: `<ReactionButton count={42} disabled />` },
  ];

  return (
    <Section id="snippets" num="04" title="Copy-Ready Snippets"
      desc="Import: import { ReactionButton } from '../components/ReactionButton'">
      <div className="rsc-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="rsc-snippet">
            <span className="rsc-snippet-label">{ex.label}</span>
            <pre className="rsc-code">{ex.code}</pre>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function ReactionButtonShowcase() {
  return (
    <div className="rsc">
      <div className="rsc-body">
        <FigmaSource />
        <StatesSection />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
