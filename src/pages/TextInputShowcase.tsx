import { useState } from 'react';
import './TextInputShowcase.css';
import { TextInput } from '../components/TextInput';

// ── Section shell ──────────────────────────────────────────────────────────

function Section({ id, num, title, desc, children }: {
  id: string; num: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="tisc-section">
      <div className="tisc-section-head">
        <span className="tisc-section-num">{num}</span>
        <div>
          <h2 className="tisc-section-title">{title}</h2>
          <p className="tisc-section-desc">{desc}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

// ── 01 — Figma Source ──────────────────────────────────────────────────────

function FigmaSource() {
  const specs = [
    { key: 'Figma source',       val: 'Student Experiences form' },
    { key: 'Field label',        val: '"Give your story a title"' },
    { key: 'Height',             val: '44px' },
    { key: 'Background',         val: 'rgba(255,255,255,0.05)' },
    { key: 'Border',             val: '1px solid rgba(255,255,255,0.12)' },
    { key: 'Border-radius',      val: '8px' },
    { key: 'Focus ring',         val: '#31bbe1 + rgba(49,187,225,0.2)' },
    { key: 'Placeholder opacity', val: '35%' },
    { key: 'Label font-weight',  val: '600 · 14px' },
    { key: 'Font family',        val: 'Be Vietnam Pro' },
  ];

  return (
    <Section id="figma" num="01" title="Figma Source"
      desc="Extracted from the ARISE Student Experiences form — the 'Give your story a title' text field. Dark background with subtle border, teal focus ring, white label above.">
      <div style={{ maxWidth: 480 }}>
        <TextInput
          label="Give your story a title"
          placeholder="Enter a title…"
          fullWidth
        />
      </div>
      <div className="tisc-spec-grid" style={{ marginTop: 8 }}>
        {specs.map(s => (
          <div key={s.key} className="tisc-spec-item">
            <span className="tisc-spec-key">{s.key}</span>
            <span className="tisc-spec-val">{s.val}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 02 — All States ────────────────────────────────────────────────────────

function StatesSection() {
  const [controlled, setControlled] = useState('My experience at ARISE');

  return (
    <Section id="states" num="02" title="All States"
      desc="Default, with value, hint, error, disabled, and full-width. Focus each field to see the teal ring; the error field shows the red variant.">
      <div className="tisc-states">
        <div className="tisc-state-card">
          <div className="tisc-state-label">Default — empty</div>
          <div className="tisc-state-sub">border rgba(255,255,255,0.12) · placeholder 35%</div>
          <TextInput placeholder="Enter text…" fullWidth />
        </div>

        <div className="tisc-state-card">
          <div className="tisc-state-label">With label</div>
          <div className="tisc-state-sub">label: 14px · font-weight 600 · 85% white</div>
          <TextInput label="Story title" placeholder="Enter a title…" fullWidth />
        </div>

        <div className="tisc-state-card">
          <div className="tisc-state-label">Controlled — has value</div>
          <div className="tisc-state-sub">white text · same border until focused</div>
          <TextInput
            label="Title"
            value={controlled}
            onChange={e => setControlled(e.target.value)}
            fullWidth
          />
        </div>

        <div className="tisc-state-card">
          <div className="tisc-state-label">With hint text</div>
          <div className="tisc-state-sub">hint: 12px · rgba(255,255,255,0.4) · margin-top 6px</div>
          <TextInput
            label="Username"
            placeholder="e.g. student_2026"
            hint="This will be shown publicly on your post."
            fullWidth
          />
        </div>

        <div className="tisc-state-card">
          <div className="tisc-state-label">Error state</div>
          <div className="tisc-state-sub">border-color #f95757 · error msg 12px red · focus glow red</div>
          <TextInput
            label="Title"
            placeholder="Enter a title…"
            error="Title is required."
            fullWidth
          />
        </div>

        <div className="tisc-state-card">
          <div className="tisc-state-label">Disabled</div>
          <div className="tisc-state-sub">opacity 0.4 · cursor not-allowed</div>
          <TextInput
            label="Title"
            placeholder="Disabled field"
            disabled
            fullWidth
          />
        </div>
      </div>
    </Section>
  );
}

// ── 03 — Props API ─────────────────────────────────────────────────────────

function PropsAPI() {
  const rows = [
    { name: 'label',     type: 'string',                       def: 'undefined',  req: false, desc: 'Label rendered above the input and associated via htmlFor/id.' },
    { name: 'hint',      type: 'string',                       def: 'undefined',  req: false, desc: 'Helper text below the input. Hidden when error is set.' },
    { name: 'error',     type: 'string',                       def: 'undefined',  req: false, desc: 'Error message below input. Sets red border + aria-invalid.' },
    { name: 'fullWidth', type: 'boolean',                      def: 'false',      req: false, desc: 'Stretches the root wrapper to width: 100%.' },
    { name: 'disabled',  type: 'boolean',                      def: 'false',      req: false, desc: 'Opacity 0.4, cursor not-allowed on label and input.' },
    { name: 'id',        type: 'string',                       def: 'useId()',    req: false, desc: 'Custom id. Auto-generated via useId() if omitted.' },
    { name: '...rest',   type: 'InputHTMLAttributes<input>',   def: '—',          req: false, desc: 'All native <input> attributes (type, value, onChange, ref…).' },
  ];

  return (
    <Section id="api" num="03" title="Props API"
      desc="Full TypeScript interface. Import types from 'src/components/TextInput'. Ref-forwarded to <input>.">
      <div className="tisc-table-wrap">
        <table className="tisc-table">
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

// ── 04 — Code Snippets ─────────────────────────────────────────────────────

function Snippets() {
  const examples = [
    { label: 'Basic — Figma "Give your story a title" field',
      code: `<TextInput
  label="Give your story a title"
  placeholder="Enter a title…"
  fullWidth
/>` },
    { label: 'Controlled with hint',
      code: `const [title, setTitle] = useState('');

<TextInput
  label="Story title"
  value={title}
  onChange={e => setTitle(e.target.value)}
  hint="Up to 80 characters."
  fullWidth
/>` },
    { label: 'Validation error state',
      code: `<TextInput
  label="Email"
  type="email"
  value={email}
  onChange={e => setEmail(e.target.value)}
  error={emailError}
  fullWidth
/>` },
    { label: 'Disabled field',
      code: `<TextInput label="Read-only field" value="Locked value" disabled fullWidth />` },
    { label: 'Ref forwarding',
      code: `const inputRef = useRef<HTMLInputElement>(null);
<TextInput ref={inputRef} label="Focus me" fullWidth />` },
  ];

  return (
    <Section id="snippets" num="04" title="Copy-Ready Snippets"
      desc="Import: import { TextInput } from '../components/TextInput'">
      <div className="tisc-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="tisc-snippet">
            <span className="tisc-snippet-label">{ex.label}</span>
            <pre className="tisc-code">{ex.code}</pre>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function TextInputShowcase() {
  return (
    <div className="tisc">
      <div className="tisc-body">
        <FigmaSource />
        <StatesSection />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
