import { useState } from 'react';
import './RadioButtonShowcase.css';
import { RadioButton, RadioGroup } from '../components/RadioButton';

// ── Section shell ──────────────────────────────────────────────────────────

function Section({ id, num, title, desc, children }: {
  id: string; num: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="rbsc-section">
      <div className="rbsc-section-head">
        <span className="rbsc-section-num">{num}</span>
        <div>
          <h2 className="rbsc-section-title">{title}</h2>
          <p className="rbsc-section-desc">{desc}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

const CREDIT_OPTIONS = [
  { value: 'full',      label: 'Full name — publicly credited' },
  { value: 'anonymous', label: 'Anonymously — no name shown' },
  { value: 'initials',  label: 'Initials only' },
];

// ── 01 — Figma Source ──────────────────────────────────────────────────────

function FigmaSource() {
  const [credit, setCredit] = useState('anonymous');

  const specs = [
    { key: 'Figma source',    val: 'Student Experiences form' },
    { key: 'Usage',           val: 'Credit preference selector' },
    { key: 'Circle size',     val: '18px' },
    { key: 'Border',          val: '2px solid rgba(255,255,255,0.35)' },
    { key: 'Checked border',  val: '#31bbe1' },
    { key: 'Inner dot',       val: '10px · #31bbe1' },
    { key: 'Hover border',    val: 'rgba(255,255,255,0.6)' },
    { key: 'Label font',      val: '14px · rgba(255,255,255,0.85)' },
    { key: 'Group gap',       val: '10px vertical' },
    { key: 'Transition',      val: '150ms cubic-bezier(0.4,0,0.2,1)' },
  ];

  return (
    <Section id="figma" num="01" title="Figma Source"
      desc="Extracted from the ARISE Student Experiences form — the credit preference radio group. Custom circle with teal checked state, hidden native input for full keyboard and screen-reader support.">
      <RadioGroup
        label="How should we credit you?"
        name="credit-figma"
        options={CREDIT_OPTIONS}
        value={credit}
        onChange={setCredit}
      />
      <div className="rbsc-spec-grid" style={{ marginTop: 8 }}>
        {specs.map(s => (
          <div key={s.key} className="rbsc-spec-item">
            <span className="rbsc-spec-key">{s.key}</span>
            <span className="rbsc-spec-val">{s.val}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 02 — All States ────────────────────────────────────────────────────────

function StatesSection() {
  const [vertVal, setVertVal] = useState('option-b');
  const [horizVal, setHorizVal] = useState('yes');

  return (
    <Section id="states" num="02" title="All States & Variants"
      desc="Unchecked, checked (teal), disabled, vertical group, horizontal group. Hover any circle to see the brightened border.">
      <div className="rbsc-demos">
        <div className="rbsc-demo-card">
          <div className="rbsc-demo-label">Single — unchecked</div>
          <div className="rbsc-demo-sub">border rgba(255,255,255,0.35) · no dot</div>
          <RadioButton label="Unchecked option" value="unchecked" name="demo-unchecked" />
        </div>

        <div className="rbsc-demo-card">
          <div className="rbsc-demo-label">Single — checked (teal)</div>
          <div className="rbsc-demo-sub">border #31bbe1 · inner dot 10px teal</div>
          <RadioButton label="Checked option" value="checked" checked name="demo-checked" />
        </div>

        <div className="rbsc-demo-card">
          <div className="rbsc-demo-label">Single — disabled unchecked</div>
          <div className="rbsc-demo-sub">opacity 0.4 · cursor not-allowed</div>
          <RadioButton label="Disabled option" value="dis" name="demo-dis" disabled />
        </div>

        <div className="rbsc-demo-card">
          <div className="rbsc-demo-label">Single — disabled checked</div>
          <div className="rbsc-demo-sub">opacity 0.4 · teal circle still visible</div>
          <RadioButton label="Disabled checked" value="disc" checked name="demo-disc" disabled />
        </div>

        <div className="rbsc-demo-card">
          <div className="rbsc-demo-label">Group — vertical (default)</div>
          <div className="rbsc-demo-sub">flex-column · gap 10px · interactive</div>
          <RadioGroup
            name="demo-vert"
            options={[
              { value: 'option-a', label: 'Option A' },
              { value: 'option-b', label: 'Option B' },
              { value: 'option-c', label: 'Option C' },
            ]}
            value={vertVal}
            onChange={setVertVal}
          />
        </div>

        <div className="rbsc-demo-card">
          <div className="rbsc-demo-label">Group — horizontal</div>
          <div className="rbsc-demo-sub">flex-row · gap 20px</div>
          <RadioGroup
            name="demo-horiz"
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'no',  label: 'No' },
            ]}
            value={horizVal}
            onChange={setHorizVal}
            direction="horizontal"
          />
        </div>

        <div className="rbsc-demo-card">
          <div className="rbsc-demo-label">Group — with label + disabled</div>
          <div className="rbsc-demo-sub">group-label: 14px 600 · group opacity 0.4</div>
          <RadioGroup
            label="Preference (disabled)"
            name="demo-disabled"
            options={CREDIT_OPTIONS}
            value="full"
            disabled
          />
        </div>
      </div>
    </Section>
  );
}

// ── 03 — Props API ─────────────────────────────────────────────────────────

function PropsAPI() {
  const radioRows = [
    { name: 'label',    type: 'string',               def: '—',         req: true,  desc: 'Text label rendered next to the radio circle.' },
    { name: 'value',    type: 'string',               def: '—',         req: true,  desc: 'Value submitted and used for checked comparison.' },
    { name: 'checked',  type: 'boolean',              def: 'false',     req: false, desc: 'Whether this option is selected.' },
    { name: 'onChange', type: '(value: string) => void', def: 'undefined', req: false, desc: 'Called with value string when user selects this option.' },
    { name: 'disabled', type: 'boolean',              def: 'false',     req: false, desc: 'Opacity 0.4, cursor not-allowed, prevents selection.' },
    { name: 'name',     type: 'string',               def: 'undefined', req: false, desc: 'Native name attribute for form grouping.' },
    { name: 'className',type: 'string',               def: '""',        req: false, desc: 'Appended to root for local overrides.' },
  ];

  const groupRows = [
    { name: 'name',      type: 'string',                       def: '—',           req: true,  desc: 'Shared name for all radio inputs in the group.' },
    { name: 'options',   type: '{ value, label }[]',           def: '—',           req: true,  desc: 'Array of option objects to render.' },
    { name: 'label',     type: 'string',                       def: 'undefined',   req: false, desc: 'Group legend rendered above the options.' },
    { name: 'value',     type: 'string',                       def: 'undefined',   req: false, desc: 'Currently selected value (controlled).' },
    { name: 'onChange',  type: '(value: string) => void',      def: 'undefined',   req: false, desc: 'Called when any option is selected.' },
    { name: 'disabled',  type: 'boolean',                      def: 'false',       req: false, desc: 'Disables all options in the group.' },
    { name: 'direction', type: '"vertical" | "horizontal"',    def: '"vertical"',  req: false, desc: 'Layout direction of the options.' },
    { name: 'className', type: 'string',                       def: '""',          req: false, desc: 'Appended to root for local overrides.' },
  ];

  return (
    <Section id="api" num="03" title="Props API"
      desc="RadioButton — single option. RadioGroup — managed group wrapper. Import types from 'src/components/RadioButton'.">
      <div className="rbsc-subsection">
        <span className="rbsc-sublabel">RadioButton props</span>
        <div className="rbsc-table-wrap">
          <table className="rbsc-table">
            <thead>
              <tr><th>Prop</th><th>Type</th><th>Default</th><th>Req</th><th>Description</th></tr>
            </thead>
            <tbody>
              {radioRows.map(r => (
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

      <div className="rbsc-subsection">
        <span className="rbsc-sublabel">RadioGroup props</span>
        <div className="rbsc-table-wrap">
          <table className="rbsc-table">
            <thead>
              <tr><th>Prop</th><th>Type</th><th>Default</th><th>Req</th><th>Description</th></tr>
            </thead>
            <tbody>
              {groupRows.map(r => (
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
    </Section>
  );
}

// ── 04 — Code Snippets ─────────────────────────────────────────────────────

function Snippets() {
  const examples = [
    { label: 'RadioGroup — Figma credit preference selector',
      code: `const [credit, setCredit] = useState('anonymous');

<RadioGroup
  label="How should we credit you?"
  name="credit"
  options={[
    { value: 'full',      label: 'Full name — publicly credited' },
    { value: 'anonymous', label: 'Anonymously — no name shown' },
    { value: 'initials',  label: 'Initials only' },
  ]}
  value={credit}
  onChange={setCredit}
/>` },
    { label: 'Horizontal layout',
      code: `<RadioGroup
  name="consent"
  direction="horizontal"
  options={[
    { value: 'yes', label: 'Yes' },
    { value: 'no',  label: 'No' },
  ]}
  value={consent}
  onChange={setConsent}
/>` },
    { label: 'Standalone RadioButton (custom controlled)',
      code: `<RadioButton
  label="Anonymous submission"
  value="anonymous"
  checked={mode === 'anonymous'}
  onChange={setMode}
  name="submission-mode"
/>` },
    { label: 'Disabled group',
      code: `<RadioGroup
  label="Locked preference"
  name="locked"
  options={options}
  value={savedValue}
  disabled
/>` },
  ];

  return (
    <Section id="snippets" num="04" title="Copy-Ready Snippets"
      desc="Import: import { RadioButton, RadioGroup } from '../components/RadioButton'">
      <div className="rbsc-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="rbsc-snippet">
            <span className="rbsc-snippet-label">{ex.label}</span>
            <pre className="rbsc-code">{ex.code}</pre>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function RadioButtonShowcase() {
  return (
    <div className="rbsc">
      <div className="rbsc-body">
        <FigmaSource />
        <StatesSection />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
