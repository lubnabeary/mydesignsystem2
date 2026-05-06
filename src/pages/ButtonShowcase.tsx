import { useState } from 'react';
import './ButtonShowcase.css';
import { Button } from '../components/Button';
import type { ButtonVariant, ButtonSize, ButtonShape } from '../components/Button';

// ── Inline SVG icons ───────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" />
  </svg>
);

// ── Section wrapper ────────────────────────────────────────────────────────

function Section({ id, eyebrow, title, desc, children }: {
  id: string; eyebrow: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="bsc-section">
      <div className="bsc-section-header">
        <span className="bsc-section-eyebrow">{eyebrow}</span>
        <h2 className="bsc-section-title">{title}</h2>
        <p className="bsc-section-desc">{desc}</p>
      </div>
      {children}
    </section>
  );
}

// ── 01 Design Token Usage ──────────────────────────────────────────────────

function TokenUsage() {
  const tokens = [
    { name: 'colors.accent.teal',             value: 'rgba(49,187,225,0.69)', dot: '#31bbe1' },
    { name: 'colors.accent.blue',             value: '#7eb5d7',               dot: '#7eb5d7' },
    { name: 'colors.state.destructive',       value: '#dc3a3a',               dot: '#dc3a3a' },
    { name: 'colors.text.primary',            value: '#ffffff',               dot: '#ffffff' },
    { name: 'borderRadius.button',            value: '37px',                  dot: '#31bbe1' },
    { name: 'borderRadius.pill',              value: '58px',                  dot: '#31bbe1' },
    { name: 'shadows.card',                   value: '0px 3px 8px …',        dot: '#80438b' },
    { name: 'shadows.nav',                    value: '0px 5px 12px …',       dot: '#80438b' },
    { name: 'typography.fontFamily.primary',  value: 'Be Vietnam Pro',        dot: '#7eb5d7' },
    { name: 'typography.fontWeight.bold',     value: '700',                   dot: '#ff7c2b' },
    { name: 'animation.duration.base',        value: '150ms',                 dot: '#2ab0fe' },
    { name: 'animation.easing.default',       value: 'cubic-bezier(…)',       dot: '#2ab0fe' },
  ];

  return (
    <Section id="tokens" eyebrow="01 — Design Tokens" title="Token Usage"
      desc="Every visual property of the Button component maps to a named token in design-tokens.ts.">
      <div className="bsc-tokens">
        {tokens.map(t => (
          <div key={t.name} className="bsc-token">
            <span className="bsc-token-dot" style={{ background: t.dot, border: t.dot === '#ffffff' ? '1px solid rgba(255,255,255,0.2)' : undefined }} />
            <span className="bsc-token-name">{t.name}</span>
            <span className="bsc-token-value">{t.value}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 02 Variants ────────────────────────────────────────────────────────────

function VariantsSection() {
  const variants: { v: ButtonVariant; label: string; note: string }[] = [
    { v: 'primary',     label: 'Primary',     note: 'Teal fill — main CTA' },
    { v: 'secondary',   label: 'Secondary',   note: 'Outlined — secondary action' },
    { v: 'ghost',       label: 'Ghost',       note: 'Transparent — tertiary' },
    { v: 'destructive', label: 'Destructive', note: 'Red fill — irreversible action' },
    { v: 'link',        label: 'Link',        note: 'Text only — inline action' },
  ];

  return (
    <Section id="variants" eyebrow="02 — Variants" title="All Variants"
      desc="Five variants cover every intent level from primary CTA to inline navigation.">
      <div className="bsc-group">
        <div className="bsc-row">
          {variants.map(({ v, label }) => (
            <Button key={v} variant={v}>{label}</Button>
          ))}
        </div>
        {/* Side-by-side with notes */}
        {variants.map(({ v, label, note }) => (
          <div key={v} className="bsc-group" style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 160 }}>
              <Button variant={v}>{label}</Button>
            </div>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{note}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 03 Sizes ───────────────────────────────────────────────────────────────

function SizesSection() {
  const sizes: { s: ButtonSize; label: string; spec: string }[] = [
    { s: 'sm', label: 'Small',      spec: '32 px · 13 px font · px 12' },
    { s: 'md', label: 'Medium',     spec: '40 px · 15 px font · px 20  (default)' },
    { s: 'lg', label: 'Large',      spec: '48 px · 17 px font · px 24' },
    { s: 'xl', label: 'XLarge',     spec: '58 px · 20 px font · px 32  (Figma Explore)' },
  ];

  return (
    <Section id="sizes" eyebrow="03 — Sizes" title="Size Scale"
      desc="Four tiers scaled from the Figma Explore button (XL = exact Figma height of 58 px).">
      <div className="bsc-group">
        {sizes.map(({ s, label, spec }) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ width: 140 }}>
              <Button size={s}>{label}</Button>
            </div>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: 'ui-monospace, monospace' }}>{spec}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 04 Shapes ──────────────────────────────────────────────────────────────

function ShapesSection() {
  const shapes: { sh: ButtonShape; label: string; token: string }[] = [
    { sh: 'rounded', label: 'Rounded', token: 'borderRadius.button → 37px' },
    { sh: 'pill',    label: 'Pill',    token: 'borderRadius.full → 9999px' },
    { sh: 'square',  label: 'Square',  token: 'borderRadius.sm → 4px' },
  ];

  return (
    <Section id="shapes" eyebrow="04 — Shapes" title="Border Radius Shapes"
      desc="Three radius presets. Rounded is the Figma-native shape; Pill matches the CONTACT button.">
      <div className="bsc-row">
        {shapes.map(({ sh, label, token }) => (
          <div key={sh} style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
            <Button shape={sh} size="lg">{label}</Button>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'ui-monospace, monospace' }}>{token}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── 05 With Icons ──────────────────────────────────────────────────────────

function IconsSection() {
  return (
    <Section id="icons" eyebrow="05 — Icons" title="Icon Compositions"
      desc="Pass leftIcon / rightIcon for inline icons. Set iconOnly + aria-label for square icon buttons.">

      <div className="bsc-group">
        <span className="bsc-group-label">Left icon</span>
        <div className="bsc-row">
          <Button leftIcon={<SearchIcon />} size="sm">Search</Button>
          <Button leftIcon={<SearchIcon />}>Search</Button>
          <Button leftIcon={<SearchIcon />} size="lg">Search</Button>
          <Button leftIcon={<SearchIcon />} size="xl">Search</Button>
        </div>
      </div>

      <div className="bsc-group">
        <span className="bsc-group-label">Right icon</span>
        <div className="bsc-row">
          <Button rightIcon={<ArrowRight />} size="sm">Continue</Button>
          <Button rightIcon={<ArrowRight />}>Continue</Button>
          <Button rightIcon={<ArrowRight />} size="lg">Continue</Button>
          <Button rightIcon={<DownloadIcon />} size="xl">Download</Button>
        </div>
      </div>

      <div className="bsc-group">
        <span className="bsc-group-label">Icon only — all sizes</span>
        <div className="bsc-row">
          <Button iconOnly size="sm" aria-label="Search"><SearchIcon /></Button>
          <Button iconOnly aria-label="Add"><PlusIcon /></Button>
          <Button iconOnly size="lg" aria-label="Like"><HeartIcon /></Button>
          <Button iconOnly size="xl" aria-label="Close"><XIcon /></Button>
        </div>
      </div>

      <div className="bsc-group">
        <span className="bsc-group-label">Icon only — all variants</span>
        <div className="bsc-row">
          <Button iconOnly variant="primary"     aria-label="Add"><PlusIcon /></Button>
          <Button iconOnly variant="secondary"   aria-label="Search"><SearchIcon /></Button>
          <Button iconOnly variant="ghost"       aria-label="Close"><XIcon /></Button>
          <Button iconOnly variant="destructive" aria-label="Delete"><TrashIcon /></Button>
        </div>
      </div>
    </Section>
  );
}

// ── 06 States ──────────────────────────────────────────────────────────────

function StatesSection() {
  return (
    <Section id="states" eyebrow="06 — States" title="Interactive States"
      desc="Hover and Active are CSS-driven — interact with the buttons below to see them live.">
      <div className="bsc-state-grid">
        <div className="bsc-state-card">
          <span className="bsc-state-label">Default</span>
          <Button>Explore</Button>
        </div>
        <div className="bsc-state-card">
          <span className="bsc-state-label">Hover me</span>
          <Button>Explore</Button>
        </div>
        <div className="bsc-state-card">
          <span className="bsc-state-label">Focus (Tab to it)</span>
          <Button>Explore</Button>
        </div>
        <div className="bsc-state-card">
          <span className="bsc-state-label">Loading</span>
          <Button loading>Saving…</Button>
        </div>
        <div className="bsc-state-card">
          <span className="bsc-state-label">Disabled</span>
          <Button disabled>Unavailable</Button>
        </div>
        <div className="bsc-state-card">
          <span className="bsc-state-label">Loading (secondary)</span>
          <Button variant="secondary" loading>Uploading…</Button>
        </div>
        <div className="bsc-state-card">
          <span className="bsc-state-label">Loading (destructive)</span>
          <Button variant="destructive" loading>Deleting…</Button>
        </div>
        <div className="bsc-state-card">
          <span className="bsc-state-label">Disabled (ghost)</span>
          <Button variant="ghost" disabled>Action</Button>
        </div>
      </div>
    </Section>
  );
}

// ── 07 Live Playground ─────────────────────────────────────────────────────

function Playground() {
  const [variant,       setVariant]       = useState<ButtonVariant>('primary');
  const [size,          setSize]          = useState<ButtonSize>('md');
  const [shape,         setShape]         = useState<ButtonShape>('rounded');
  const [disabled,      setDisabled]      = useState(false);
  const [loading,       setLoading]       = useState(false);
  const [fullWidth,     setFullWidth]     = useState(false);
  const [label,         setLabel]         = useState('Explore');
  const [showLeftIcon,  setShowLeftIcon]  = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(false);

  const props = [
    `variant="${variant}"`,
    size !== 'md' ? `size="${size}"` : null,
    shape !== 'rounded' ? `shape="${shape}"` : null,
    showLeftIcon ? `leftIcon={<SearchIcon />}` : null,
    showRightIcon ? `rightIcon={<ArrowRight />}` : null,
    disabled ? 'disabled' : null,
    loading ? 'loading' : null,
    fullWidth ? 'fullWidth' : null,
  ].filter(Boolean);

  const code = props.length <= 2
    ? `<Button ${props.join(' ')}>${label}</Button>`
    : `<Button\n  ${props.join('\n  ')}\n>\n  ${label}\n</Button>`;

  return (
    <Section id="playground" eyebrow="07 — Playground" title="Live Prop Playground"
      desc="Adjust props to see the button update in real time and copy the ready-to-use code snippet.">
      <div className="bsc-playground">
        <div className="bsc-playground-left">
          <div className="bsc-preview">
            <Button
              variant={variant}
              size={size}
              shape={shape}
              disabled={disabled}
              loading={loading}
              fullWidth={fullWidth}
              leftIcon={showLeftIcon ? <SearchIcon /> : undefined}
              rightIcon={showRightIcon ? <ArrowRight /> : undefined}
            >
              {label}
            </Button>
          </div>
          <pre className="bsc-code-block">{code}</pre>
        </div>

        <div className="bsc-controls">
          <p className="bsc-controls-title">Props</p>

          <div className="bsc-control">
            <label>variant</label>
            <select value={variant} onChange={e => setVariant(e.target.value as ButtonVariant)}>
              {(['primary','secondary','ghost','destructive','link'] as ButtonVariant[]).map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className="bsc-control">
            <label>size</label>
            <select value={size} onChange={e => setSize(e.target.value as ButtonSize)}>
              {(['sm','md','lg','xl'] as ButtonSize[]).map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="bsc-control">
            <label>shape</label>
            <select value={shape} onChange={e => setShape(e.target.value as ButtonShape)}>
              {(['rounded','pill','square'] as ButtonShape[]).map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="bsc-control">
            <label>children (label)</label>
            <input type="text" value={label} onChange={e => setLabel(e.target.value)} />
          </div>

          <label className="bsc-control-row">
            <input type="checkbox" checked={showLeftIcon} onChange={e => setShowLeftIcon(e.target.checked)} />
            <span>leftIcon</span>
          </label>
          <label className="bsc-control-row">
            <input type="checkbox" checked={showRightIcon} onChange={e => setShowRightIcon(e.target.checked)} />
            <span>rightIcon</span>
          </label>
          <label className="bsc-control-row">
            <input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} />
            <span>disabled</span>
          </label>
          <label className="bsc-control-row">
            <input type="checkbox" checked={loading} onChange={e => setLoading(e.target.checked)} />
            <span>loading</span>
          </label>
          <label className="bsc-control-row">
            <input type="checkbox" checked={fullWidth} onChange={e => setFullWidth(e.target.checked)} />
            <span>fullWidth</span>
          </label>
        </div>
      </div>
    </Section>
  );
}

// ── 08 Props API ───────────────────────────────────────────────────────────

function PropsAPI() {
  const rows = [
    { name: 'children',  type: 'ReactNode',      def: '—',         req: true,  desc: 'Button label text, or the icon when iconOnly is true.' },
    { name: 'variant',   type: 'ButtonVariant',  def: '"primary"', req: false, desc: 'primary | secondary | ghost | destructive | link' },
    { name: 'size',      type: 'ButtonSize',     def: '"md"',      req: false, desc: 'sm (32 px) | md (40 px) | lg (48 px) | xl (58 px)' },
    { name: 'shape',     type: 'ButtonShape',    def: '"rounded"', req: false, desc: 'rounded (37 px) | pill (9999 px) | square (4 px)' },
    { name: 'leftIcon',  type: 'ReactNode',      def: 'undefined', req: false, desc: 'Icon rendered before the label. Suppressed during loading.' },
    { name: 'rightIcon', type: 'ReactNode',      def: 'undefined', req: false, desc: 'Icon rendered after the label. Suppressed during loading.' },
    { name: 'iconOnly',  type: 'boolean',        def: 'false',     req: false, desc: 'Square icon-only button. children = the icon. Must set aria-label.' },
    { name: 'loading',   type: 'boolean',        def: 'false',     req: false, desc: 'Replaces leftIcon with spinner. Disables all interaction.' },
    { name: 'disabled',  type: 'boolean',        def: 'false',     req: false, desc: 'Renders at 40 % opacity; pointer-events: none.' },
    { name: 'fullWidth', type: 'boolean',        def: 'false',     req: false, desc: 'Stretches button to 100 % of its container.' },
    { name: 'className', type: 'string',         def: '""',        req: false, desc: 'Appended to the root class list for local overrides.' },
    { name: '...rest',   type: 'ButtonHTMLAttributes', def: '—',   req: false, desc: 'All native <button> attributes (onClick, type, form, …).' },
  ];

  return (
    <Section id="api" eyebrow="08 — API" title="Props Reference"
      desc="Full TypeScript interface. All Figma measurements are pre-applied — no manual sizing needed.">
      <div className="bsc-table-wrap">
        <table className="bsc-table">
          <thead>
            <tr>
              <th>Prop</th><th>Type</th><th>Default</th><th>Required</th><th>Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.name}>
                <td><code>{r.name}</code></td>
                <td><code>{r.type}</code></td>
                <td><code>{r.def}</code></td>
                <td className={r.req ? 'bsc-required' : ''} style={{ color: r.req ? '#dc3a3a' : 'rgba(255,255,255,0.35)', fontSize: 12, fontWeight: 600 }}>{r.req ? 'Yes' : 'No'}</td>
                <td style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

// ── 09 Code Snippets ───────────────────────────────────────────────────────

function Snippets() {
  const examples = [
    { label: 'Primary CTA',
      code: `<Button variant="primary">Explore</Button>` },
    { label: 'Secondary action',
      code: `<Button variant="secondary">Cancel</Button>` },
    { label: 'Destructive with icon',
      code: `<Button variant="destructive" leftIcon={<TrashIcon />}>\n  Delete account\n</Button>` },
    { label: 'Full-width large pill (matches ARISE CTA)',
      code: `<Button variant="primary" size="xl" shape="pill" fullWidth>\n  Get Started\n</Button>` },
    { label: 'Icon-only (requires aria-label)',
      code: `<Button iconOnly variant="ghost" aria-label="Close">\n  <XIcon />\n</Button>` },
    { label: 'Loading state',
      code: `<Button variant="primary" loading>\n  Saving changes…\n</Button>` },
    { label: 'As submit button',
      code: `<Button type="submit" size="lg" leftIcon={<SearchIcon />}>\n  Search\n</Button>` },
    { label: 'Link variant — inline action',
      code: `<Button variant="link" onClick={handleViewAll}>\n  View all resources →\n</Button>` },
  ];

  return (
    <Section id="snippets" eyebrow="09 — Snippets" title="Copy-Ready Examples"
      desc="Common usage patterns ready to paste into your project.">
      <div className="bsc-snippets">
        {examples.map(ex => (
          <div key={ex.label} className="bsc-snippet">
            <span className="bsc-snippet-label">{ex.label}</span>
            <pre className="bsc-code-block">{ex.code}</pre>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function ButtonShowcase() {
  return (
    <div className="bsc">
      <div className="bsc-body">
        <TokenUsage />
        <VariantsSection />
        <SizesSection />
        <ShapesSection />
        <IconsSection />
        <StatesSection />
        <Playground />
        <PropsAPI />
        <Snippets />
      </div>
    </div>
  );
}
