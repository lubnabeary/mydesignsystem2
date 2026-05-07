import { useState } from 'react';
import './CheckboxShowcase.css';
import { Checkbox, CheckboxGroup } from '../components/Checkbox';

// ── Section shell ──────────────────────────────────────────────────────────

function Section({ id, num, title, desc, children }: {
  id: string; num: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="cbsc-section">
      <div className="cbsc-section-head">
        <span className="cbsc-section-num">{num}</span>
        <div>
          <h2 className="cbsc-section-title">{title}</h2>
          <p className="cbsc-section-desc">{desc}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

const TOPIC_OPTIONS = [
  { value: 'anxiety',        label: 'Anxiety' },
  { value: 'academic',       label: 'Academic Stress' },
  { value: 'social',         label: 'Social Life' },
  { value: 'self-care',      label: 'Self-Care' },
  { value: 'identity',       label: 'Identity' },
  { value: 'relationships',  label: 'Relationships' },
  { value: 'finances',       label: 'Finances' },
  { value: 'family',         label: 'Family' },
];

// ── 01 — Figma Source ──────────────────────────────────────────────────────

function FigmaSource() {
  const [topics, setTopics] = useState(['anxiety', 'self-care']);

  const specs = [
    { key: 'Figma source',       val: 'Student Experiences form' },
    { key: 'Usage',              val: 'Topic category selector' },
    { key: 'Layout',             val: '2-column CSS grid' },
    { key: 'Box size',           val: '18px × 18px' },
    { key: 'Border-radius',      val: '4px' },
    { key: 'Unchecked border',   val: '2px solid rgba(255,255,255,0.3)' },
    { key: 'Checked bg',         val: '#31bbe1' },
    { key: 'Indeterminate bg',   val: 'rgba(49,187,225,0.5)' },
    { key: 'Hover border',       val: 'rgba(255,255,255,0.6)' },
    { key: 'Checkmark',          val: 'white SVG path · stroke 1.75' },
    { key: 'Transition',         val: '150ms cubic-bezier(0.4,0,0.2,1)' },
  ];

  return (
    <Section id="figma" num="01" title="Figma Source"
      desc="Extracted from the ARISE Student Experiences form — the 2-column topic category grid. Teal checked state with white SVG checkmark, indeterminate dash for partial selections.">
      <CheckboxGroup
        label="Select topic categories"
        options={TOPIC_OPTIONS}
        value={topics}
        onChange={setTopics}
        columns={2}
      />
      <div className="cbsc-spec-grid" style={{ marginTop: 8 }}>
        {specs.map(s => (
          <div key={s.key} className="cbsc-spec-item">
            <span className="cbsc-spec-key">{s.key}</span>
            <span className="cbsc-spec-val">{s.val}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 02 — All States ────────────────────────────────────────────────────────

function StatesSection() {
  const [groupVal, setGroupVal] = useState(['academic', 'social']);

  return (
    <Section id="states" num="02" title="All States & Variants"
      desc="Unchecked, checked (teal), indeterminate (semi-teal), disabled, group with columns, horizontal layout.">
      <div className="cbsc-demos">
        <div className="cbsc-demo-card">
          <div className="cbsc-demo-label">Single — unchecked</div>
          <div className="cbsc-demo-sub">border rgba(255,255,255,0.3) · no fill</div>
          <Checkbox label="Unchecked option" checked={false} onChange={() => {}} />
        </div>

        <div className="cbsc-demo-card">
          <div className="cbsc-demo-label">Single — checked (teal)</div>
          <div className="cbsc-demo-sub">bg #31bbe1 · white checkmark SVG</div>
          <Checkbox label="Checked option" checked onChange={() => {}} />
        </div>

        <div className="cbsc-demo-card">
          <div className="cbsc-demo-label">Indeterminate state</div>
          <div className="cbsc-demo-sub">bg rgba(49,187,225,0.5) · white dash SVG</div>
          <Checkbox label="Partially selected" checked={false} indeterminate onChange={() => {}} />
        </div>

        <div className="cbsc-demo-card">
          <div className="cbsc-demo-label">Disabled — unchecked</div>
          <div className="cbsc-demo-sub">opacity 0.4 · cursor not-allowed</div>
          <Checkbox label="Disabled option" checked={false} disabled onChange={() => {}} />
        </div>

        <div className="cbsc-demo-card">
          <div className="cbsc-demo-label">Disabled — checked</div>
          <div className="cbsc-demo-sub">opacity 0.4 · teal fill persists</div>
          <Checkbox label="Disabled checked" checked disabled onChange={() => {}} />
        </div>

        <div className="cbsc-demo-card">
          <div className="cbsc-demo-label">Group — 2-column grid</div>
          <div className="cbsc-demo-sub">columns=2 · CSS grid layout</div>
          <CheckboxGroup
            label="Topics"
            options={TOPIC_OPTIONS}
            value={groupVal}
            onChange={setGroupVal}
            columns={2}
          />
        </div>

        <div className="cbsc-demo-card">
          <div className="cbsc-demo-label">Group — vertical (default)</div>
          <div className="cbsc-demo-sub">flex-column · gap 10px</div>
          <CheckboxGroup
            label="Preferences"
            options={TOPIC_OPTIONS.slice(0, 4)}
            value={groupVal}
            onChange={setGroupVal}
          />
        </div>

        <div className="cbsc-demo-card">
          <div className="cbsc-demo-label">Group — horizontal</div>
          <div className="cbsc-demo-sub">flex-row · gap 10px 24px</div>
          <CheckboxGroup
            options={TOPIC_OPTIONS.slice(0, 3)}
            value={groupVal}
            onChange={setGroupVal}
            direction="horizontal"
          />
        </div>

        <div className="cbsc-demo-card">
          <div className="cbsc-demo-label">Group — disabled</div>
          <div className="cbsc-demo-sub">all options at 0.4 opacity</div>
          <CheckboxGroup
            label="Locked categories"
            options={TOPIC_OPTIONS.slice(0, 3)}
            value={['anxiety']}
            disabled
          />
        </div>
      </div>
    </Section>
  );
}

// ── 03 — Props API ─────────────────────────────────────────────────────────

function PropsAPI() {
  const checkboxRows = [
    { name: 'label',         type: 'string',              def: '—',         req: true,  desc: 'Text label rendered next to the checkbox.' },
    { name: 'checked',       type: 'boolean',             def: 'false',     req: false, desc: 'Whether the checkbox is checked.' },
    { name: 'onChange',      type: '(checked: boolean) => void', def: 'undefined', req: false, desc: 'Called with new boolean when toggled.' },
    { name: 'indeterminate', type: 'boolean',             def: 'false',     req: false, desc: 'Shows dash; sets aria-checked="mixed". Uses DOM property.' },
    { name: 'disabled',      type: 'boolean',             def: 'false',     req: false, desc: 'Opacity 0.4, cursor not-allowed.' },
    { name: 'className',     type: 'string',              def: '""',        req: false, desc: 'Appended to root for local overrides.' },
  ];

  const groupRows = [
    { name: 'options',    type: '{ value, label }[]',         def: '—',         req: true,  desc: 'Array of option objects to render.' },
    { name: 'label',      type: 'string',                     def: 'undefined', req: false, desc: 'Group legend above the options.' },
    { name: 'value',      type: 'string[]',                   def: '[]',        req: false, desc: 'Array of currently selected values (controlled).' },
    { name: 'onChange',   type: '(values: string[]) => void', def: 'undefined', req: false, desc: 'Called with updated values array on any change.' },
    { name: 'disabled',   type: 'boolean',                    def: 'false',     req: false, desc: 'Disables all checkboxes in the group.' },
    { name: 'direction',  type: '"vertical" | "horizontal"',  def: '"vertical"', req: false, desc: 'Flex layout when columns is not set.' },
    { name: 'columns',    type: 'number',                     def: 'undefined', req: false, desc: 'When set, uses CSS grid with that many columns (overrides direction).' },
    { name: 'className',  type: 'string',                     def: '""',        req: false, desc: 'Appended to root for local overrides.' },
  ];

  return (
    <Section id="api" num="03" title="Props API"
      desc="Checkbox — single item with indeterminate support. CheckboxGroup — multi-select with grid layout. Import types from 'src/components/Checkbox'.">
      <div className="cbsc-subsection">
        <span className="cbsc-sublabel">Checkbox props</span>
        <div className="cbsc-table-wrap">
          <table className="cbsc-table">
            <thead>
              <tr><th>Prop</th><th>Type</th><th>Default</th><th>Req</th><th>Description</th></tr>
            </thead>
            <tbody>
              {checkboxRows.map(r => (
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

      <div className="cbsc-subsection">
        <span className="cbsc-sublabel">CheckboxGroup props</span>
        <div className="cbsc-table-wrap">
          <table className="cbsc-table">
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
    { label: 'CheckboxGroup — Figma 2-column topic grid',
      code: `const [topics, setTopics] = useState<string[]>([]);

<CheckboxGroup
  label="Select topic categories"
  options={[
    { value: 'anxiety',   label: 'Anxiety' },
    { value: 'academic',  label: 'Academic Stress' },
    { value: 'social',    label: 'Social Life' },
    { value: 'self-care', label: 'Self-Care' },
  ]}
  value={topics}
  onChange={setTopics}
  columns={2}
/>` },
    { label: 'Single controlled Checkbox',
      code: `const [agreed, setAgreed] = useState(false);

<Checkbox
  label="I agree to the community guidelines"
  checked={agreed}
  onChange={setAgreed}
/>` },
    { label: 'Indeterminate — "Select all" pattern',
      code: `const allSelected = selected.length === options.length;
const someSelected = selected.length > 0 && !allSelected;

<Checkbox
  label="Select all topics"
  checked={allSelected}
  indeterminate={someSelected}
  onChange={checked => setSelected(checked ? options.map(o => o.value) : [])}
/>` },
    { label: 'Horizontal layout',
      code: `<CheckboxGroup
  options={options}
  value={selected}
  onChange={setSelected}
  direction="horizontal"
/>` },
    { label: 'Disabled group',
      code: `<CheckboxGroup
  label="Locked selections"
  options={options}
  value={savedSelections}
  disabled
/>` },
  ];

  return (
    <Section id="snippets" num="04" title="Copy-Ready Snippets"
      desc="Import: import { Checkbox, CheckboxGroup } from '../components/Checkbox'">
      <div className="cbsc-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="cbsc-snippet">
            <span className="cbsc-snippet-label">{ex.label}</span>
            <pre className="cbsc-code">{ex.code}</pre>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function CheckboxShowcase() {
  return (
    <div className="cbsc">
      <div className="cbsc-body">
        <FigmaSource />
        <StatesSection />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
