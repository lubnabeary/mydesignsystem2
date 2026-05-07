import { useState } from 'react';
import './TextareaShowcase.css';
import { Textarea } from '../components/Textarea';

// ── Section shell ──────────────────────────────────────────────────────────

function Section({ id, num, title, desc, children }: {
  id: string; num: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="tasc-section">
      <div className="tasc-section-head">
        <span className="tasc-section-num">{num}</span>
        <div>
          <h2 className="tasc-section-title">{title}</h2>
          <p className="tasc-section-desc">{desc}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

// ── 01 — Figma Source ──────────────────────────────────────────────────────

function FigmaSource() {
  const specs = [
    { key: 'Figma source',     val: 'Student Experiences form' },
    { key: 'Field label',      val: '"Share your experience"' },
    { key: 'Min-height',       val: '120px' },
    { key: 'Default rows',     val: '5' },
    { key: 'Background',       val: 'rgba(255,255,255,0.05)' },
    { key: 'Border',           val: '1px solid rgba(255,255,255,0.12)' },
    { key: 'Border-radius',    val: '8px' },
    { key: 'Padding',          val: '12px 14px' },
    { key: 'Focus ring',       val: '#31bbe1 + rgba(49,187,225,0.2)' },
    { key: 'Line-height',      val: '1.6' },
    { key: 'Resize',           val: 'vertical' },
  ];

  return (
    <Section id="figma" num="01" title="Figma Source"
      desc="Extracted from the ARISE Student Experiences form — the 'Share your experience' long-form text area. Same visual language as TextInput with a vertically resizable multi-line body.">
      <div style={{ maxWidth: 560 }}>
        <Textarea
          label="Share your experience"
          placeholder="Tell us your story…"
          fullWidth
        />
      </div>
      <div className="tasc-spec-grid" style={{ marginTop: 8 }}>
        {specs.map(s => (
          <div key={s.key} className="tasc-spec-item">
            <span className="tasc-spec-key">{s.key}</span>
            <span className="tasc-spec-val">{s.val}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 02 — All States ────────────────────────────────────────────────────────

function StatesSection() {
  const [controlled, setControlled] = useState(
    'Being part of ARISE changed how I approach mental wellness. The community support made all the difference.'
  );

  return (
    <Section id="states" num="02" title="All States"
      desc="Default, with value, hint, error, disabled, and custom row count. Focus each textarea to see the teal glow.">
      <div className="tasc-states">
        <div className="tasc-state-card">
          <div className="tasc-state-label">Default — empty</div>
          <div className="tasc-state-sub">rows=5 · min-height 120px · resize vertical</div>
          <Textarea placeholder="Tell us your story…" fullWidth />
        </div>

        <div className="tasc-state-card">
          <div className="tasc-state-label">With label</div>
          <div className="tasc-state-sub">label: 14px · font-weight 600 · 85% white</div>
          <Textarea label="Share your experience" placeholder="Write here…" fullWidth />
        </div>

        <div className="tasc-state-card">
          <div className="tasc-state-label">Controlled — has value</div>
          <div className="tasc-state-sub">white text · line-height 1.6</div>
          <Textarea
            label="Experience"
            value={controlled}
            onChange={e => setControlled(e.target.value)}
            fullWidth
          />
        </div>

        <div className="tasc-state-card">
          <div className="tasc-state-label">With hint text</div>
          <div className="tasc-state-sub">hint: 12px · rgba(255,255,255,0.4) · margin-top 6px</div>
          <Textarea
            label="Your story"
            placeholder="Share what happened…"
            hint="You can post anonymously. Minimum 50 characters."
            fullWidth
          />
        </div>

        <div className="tasc-state-card">
          <div className="tasc-state-label">Error state</div>
          <div className="tasc-state-sub">border-color #f95757 · error msg 12px red</div>
          <Textarea
            label="Experience"
            placeholder="Tell us your story…"
            error="Please share at least 50 characters."
            fullWidth
          />
        </div>

        <div className="tasc-state-card">
          <div className="tasc-state-label">Disabled</div>
          <div className="tasc-state-sub">opacity 0.4 · cursor not-allowed · resize none</div>
          <Textarea
            label="Experience"
            placeholder="Disabled"
            disabled
            fullWidth
          />
        </div>

        <div className="tasc-state-card">
          <div className="tasc-state-label">Custom rows (rows=3)</div>
          <div className="tasc-state-sub">shorter height for compact forms</div>
          <Textarea
            label="Short note"
            placeholder="Brief comment…"
            rows={3}
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
    { name: 'label',     type: 'string',                          def: 'undefined', req: false, desc: 'Label rendered above the textarea, associated via htmlFor/id.' },
    { name: 'hint',      type: 'string',                          def: 'undefined', req: false, desc: 'Helper text below the textarea. Hidden when error is set.' },
    { name: 'error',     type: 'string',                          def: 'undefined', req: false, desc: 'Error message. Sets red border + aria-invalid.' },
    { name: 'fullWidth', type: 'boolean',                         def: 'false',     req: false, desc: 'Stretches the root wrapper to width: 100%.' },
    { name: 'rows',      type: 'number',                          def: '5',         req: false, desc: 'Native rows attribute — controls default visible height.' },
    { name: 'disabled',  type: 'boolean',                         def: 'false',     req: false, desc: 'Opacity 0.4, cursor not-allowed, resize disabled.' },
    { name: 'id',        type: 'string',                          def: 'useId()',   req: false, desc: 'Custom id. Auto-generated via useId() if omitted.' },
    { name: '...rest',   type: 'TextareaHTMLAttributes<textarea>', def: '—',         req: false, desc: 'All native <textarea> attributes (value, onChange, ref…).' },
  ];

  return (
    <Section id="api" num="03" title="Props API"
      desc="Full TypeScript interface. Import types from 'src/components/Textarea'. Ref-forwarded to <textarea>.">
      <div className="tasc-table-wrap">
        <table className="tasc-table">
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
    { label: 'Basic — Figma "Share your experience" field',
      code: `<Textarea
  label="Share your experience"
  placeholder="Tell us your story…"
  fullWidth
/>` },
    { label: 'Controlled with character hint',
      code: `const [text, setText] = useState('');

<Textarea
  label="Your story"
  value={text}
  onChange={e => setText(e.target.value)}
  hint={\`\${text.length} / 500 characters\`}
  fullWidth
/>` },
    { label: 'Validation error',
      code: `<Textarea
  label="Experience"
  value={experience}
  onChange={e => setExperience(e.target.value)}
  error={experienceError}
  fullWidth
/>` },
    { label: 'Short compact form (3 rows)',
      code: `<Textarea label="Comment" rows={3} fullWidth />` },
    { label: 'Disabled / read-only',
      code: `<Textarea label="Submitted story" value={story} disabled fullWidth />` },
  ];

  return (
    <Section id="snippets" num="04" title="Copy-Ready Snippets"
      desc="Import: import { Textarea } from '../components/Textarea'">
      <div className="tasc-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="tasc-snippet">
            <span className="tasc-snippet-label">{ex.label}</span>
            <pre className="tasc-code">{ex.code}</pre>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function TextareaShowcase() {
  return (
    <div className="tasc">
      <div className="tasc-body">
        <FigmaSource />
        <StatesSection />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
