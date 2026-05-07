import { useState } from 'react';
import './DropdownShowcase.css';
import { Dropdown } from '../components/Dropdown';
import type { DropdownOption } from '../components/Dropdown';

// ── Option sets ────────────────────────────────────────────────────────────

const YEAR_OPTIONS: DropdownOption[] = [
  { value: 'freshman',  label: 'Freshman'  },
  { value: 'sophomore', label: 'Sophomore' },
  { value: 'junior',    label: 'Junior'    },
  { value: 'senior',    label: 'Senior'    },
];

const TOPIC_OPTIONS: DropdownOption[] = [
  { value: 'all',             label: 'All'            },
  { value: 'anxiety',         label: 'Anxiety'        },
  { value: 'academic-stress', label: 'Academic Stress' },
  { value: 'self-care',       label: 'Self-Care'      },
  { value: 'social-life',     label: 'Social Life'    },
];

// ── Section shell ──────────────────────────────────────────────────────────

function Section({ id, num, title, desc, children }: {
  id: string; num: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="dsc-section">
      <div className="dsc-section-head">
        <span className="dsc-section-num">{num}</span>
        <div>
          <h2 className="dsc-section-title">{title}</h2>
          <p className="dsc-section-desc">{desc}</p>
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
      desc="Extracted from D3C-FINAL — Mood Tracker year selector and Student Experiences topic filter. Pill shape, dark background, teal active state, salmon selected option.">
      <div className="dsc-demo-row">
        <div className="dsc-demo-label">
          <span>Year selector</span>
          <span>Mood Tracker filter bar — node area: Mood Tracker section</span>
        </div>
        <Dropdown variant="year" options={YEAR_OPTIONS} placeholder="Select Year" />
      </div>
      <div className="dsc-demo-row">
        <div className="dsc-demo-label">
          <span>Topic selector</span>
          <span>Student Experiences filter — node area: Student Experiences section</span>
        </div>
        <Dropdown variant="topic" options={TOPIC_OPTIONS} placeholder="All Topics" />
      </div>
    </Section>
  );
}

// ── 02 — All States ────────────────────────────────────────────────────────

function StatesSection() {
  const [yearVal,  setYearVal]  = useState('');
  const [topicVal, setTopicVal] = useState('anxiety');

  return (
    <Section id="states" num="02" title="All States"
      desc="Closed (no value), active/selected (teal pill), open (dropdown card visible), disabled.">
      <div className="dsc-states">
        <div className="dsc-state-card">
          <div className="dsc-state-label">Closed — no value</div>
          <div className="dsc-state-sub">Default dark pill · white border</div>
          <Dropdown options={YEAR_OPTIONS} placeholder="Select Year" />
        </div>

        <div className="dsc-state-card">
          <div className="dsc-state-label">Active — has value (teal)</div>
          <div className="dsc-state-sub">border: rgba(49,187,225,0.5) · color: #31bbe1</div>
          <Dropdown
            options={YEAR_OPTIONS}
            value={yearVal || 'junior'}
            onChange={setYearVal}
            placeholder="Select Year"
          />
        </div>

        <div className="dsc-state-card">
          <div className="dsc-state-label">Topic — with selection</div>
          <div className="dsc-state-sub">Selected option: bg rgba(255,142,142,0.2) · color #ff8e8e</div>
          <Dropdown
            options={TOPIC_OPTIONS}
            value={topicVal}
            onChange={setTopicVal}
            placeholder="All Topics"
          />
        </div>

        <div className="dsc-state-card">
          <div className="dsc-state-label">Disabled</div>
          <div className="dsc-state-sub">opacity 0.4 · pointer-events none</div>
          <Dropdown options={YEAR_OPTIONS} placeholder="Select Year" disabled />
        </div>
      </div>
    </Section>
  );
}

// ── 03 — Props API ─────────────────────────────────────────────────────────

function PropsAPI() {
  const rows = [
    { name: 'options',     type: 'DropdownOption[]', def: '—',           req: true,  desc: 'Array of { value, label } objects.' },
    { name: 'variant',     type: '"year" | "topic"', def: 'undefined',   req: false, desc: 'Semantic label for the selector type (does not affect appearance).' },
    { name: 'value',       type: 'string',           def: 'undefined',   req: false, desc: 'Controlled selected value. Activates teal pill state.' },
    { name: 'placeholder', type: 'string',           def: '"Select…"',   req: false, desc: 'Label shown when no value is selected.' },
    { name: 'onChange',    type: '(value: string) => void', def: 'undefined', req: false, desc: 'Called when user selects an option.' },
    { name: 'disabled',    type: 'boolean',          def: 'false',       req: false, desc: 'Disables trigger; opacity 0.4.' },
    { name: 'className',   type: 'string',           def: '""',          req: false, desc: 'Appended to root element for local overrides.' },
  ];

  return (
    <Section id="api" num="03" title="Props API"
      desc="Full TypeScript interface. Import types from 'src/components/Dropdown'.">
      <div className="dsc-table-wrap">
        <table className="dsc-table">
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
    { label: 'Year selector — Mood Tracker',
      code: `const YEAR_OPTIONS = [
  { value: 'freshman',  label: 'Freshman' },
  { value: 'sophomore', label: 'Sophomore' },
  { value: 'junior',    label: 'Junior' },
  { value: 'senior',    label: 'Senior' },
];

const [year, setYear] = useState('');

<Dropdown
  variant="year"
  options={YEAR_OPTIONS}
  value={year}
  placeholder="Select Year"
  onChange={setYear}
/>` },
    { label: 'Topic filter — Student Experiences',
      code: `const [topic, setTopic] = useState('all');

<Dropdown
  variant="topic"
  options={TOPIC_OPTIONS}
  value={topic}
  onChange={setTopic}
/>` },
    { label: 'Disabled state',
      code: `<Dropdown options={YEAR_OPTIONS} disabled />` },
  ];

  return (
    <Section id="snippets" num="04" title="Copy-Ready Snippets"
      desc="Import: import { Dropdown } from '../components/Dropdown'">
      <div className="dsc-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="dsc-snippet">
            <span className="dsc-snippet-label">{ex.label}</span>
            <pre className="dsc-code">{ex.code}</pre>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function DropdownShowcase() {
  return (
    <div className="dsc">
      <div className="dsc-body">
        <FigmaSource />
        <StatesSection />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
