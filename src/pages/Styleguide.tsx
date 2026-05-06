import './Styleguide.css';
import {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
} from '../styles/design-tokens';

// ── Helpers ────────────────────────────────────────────────────────────────

function Section({
  id,
  label,
  title,
  desc,
  children,
}: {
  id: string;
  label: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="sg-section">
      <div className="sg-section-header">
        <span className="sg-section-label">{label}</span>
        <h2 className="sg-section-title">{title}</h2>
        <p className="sg-section-desc">{desc}</p>
      </div>
      {children}
    </section>
  );
}

// ── Colors ─────────────────────────────────────────────────────────────────

type SwatchProps = { name: string; value: string; light?: boolean };

function Swatch({ name, value, light }: SwatchProps) {
  return (
    <div className="sg-swatch">
      <div className="sg-swatch-color" style={{ background: value }}>
        <span
          className="sg-swatch-check"
          style={{ color: light ? '#000' : '#fff' }}
        >
          Aa
        </span>
      </div>
      <div className="sg-swatch-info">
        <span className="sg-swatch-name">{name}</span>
        <span className="sg-swatch-value">{value}</span>
      </div>
    </div>
  );
}

function ColorSection() {
  const backgroundSwatches: SwatchProps[] = [
    { name: 'background.primary',      value: colors.background.primary },
    { name: 'background.secondary',    value: colors.background.secondary },
    { name: 'background.gradientFrom', value: colors.background.gradientFrom },
    { name: 'background.gradientVia',  value: colors.background.gradientVia },
    { name: 'background.gradientTo',   value: colors.background.gradientTo },
  ];

  const accentSwatches: SwatchProps[] = [
    { name: 'accent.teal',      value: colors.accent.teal },
    { name: 'accent.blue',      value: colors.accent.blue },
    { name: 'accent.orange',    value: colors.accent.orange },
    { name: 'accent.brandBlue', value: colors.accent.brandBlue },
    { name: 'accent.purple',    value: colors.accent.purple },
  ];

  const utilitySwatches: SwatchProps[] = [
    { name: 'text.primary',    value: colors.text.primary,   light: true },
    { name: 'text.highlight',  value: colors.text.highlight },
    { name: 'text.muted',      value: colors.text.muted },
    { name: 'border.subtle',   value: colors.border.subtle },
    { name: 'overlay.dark',    value: colors.overlay.dark },
  ];

  return (
    <Section
      id="colors"
      label="01 — Colors"
      title="Color Palette"
      desc="All color tokens extracted from the ARISE Figma file, grouped by purpose."
    >
      <div className="sg-group">
        <span className="sg-group-name">Background</span>
        <div className="sg-color-grid">
          {backgroundSwatches.map((s) => (
            <Swatch key={s.name} {...s} />
          ))}
        </div>
      </div>

      <div className="sg-group">
        <span className="sg-group-name">Accent</span>
        <div className="sg-color-grid">
          {accentSwatches.map((s) => (
            <Swatch key={s.name} {...s} />
          ))}
        </div>
      </div>

      <div className="sg-group">
        <span className="sg-group-name">Text & Utility</span>
        <div className="sg-color-grid">
          {utilitySwatches.map((s) => (
            <Swatch key={s.name} {...s} />
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── Typography ─────────────────────────────────────────────────────────────

type TypeRow = {
  token: string;
  size: string;
  weight: number;
  family: string;
  sample: string;
  letterSpacing?: string;
};

function TypographySection() {
  const rows: TypeRow[] = [
    {
      token: 'fontSize.display',
      size: typography.fontSize.display,
      weight: typography.fontWeight.bold,
      family: typography.fontFamily.primary,
      sample: 'ARISE',
      letterSpacing: typography.letterSpacing.tight,
    },
    {
      token: 'fontSize.h1',
      size: typography.fontSize.h1,
      weight: typography.fontWeight.bold,
      family: typography.fontFamily.primary,
      sample: 'Awareness',
      letterSpacing: typography.letterSpacing.tight,
    },
    {
      token: 'fontSize.h2',
      size: typography.fontSize.h2,
      weight: typography.fontWeight.medium,
      family: typography.fontFamily.primary,
      sample: 'ARISE aims to create a safe space',
    },
    {
      token: 'fontSize.h3',
      size: typography.fontSize.h3,
      weight: typography.fontWeight.regular,
      family: typography.fontFamily.primary,
      sample: 'Learn about mental health conditions',
    },
    {
      token: 'fontSize.nav',
      size: typography.fontSize.nav,
      weight: typography.fontWeight.bold,
      family: typography.fontFamily.primary,
      sample: 'HOME  AWARENESS  MOOD TRACKER',
      letterSpacing: typography.letterSpacing.nav,
    },
    {
      token: 'fontSize.button',
      size: typography.fontSize.button,
      weight: typography.fontWeight.bold,
      family: typography.fontFamily.primary,
      sample: 'Explore',
    },
    {
      token: 'fontSize.sm',
      size: typography.fontSize.sm,
      weight: typography.fontWeight.semiBold,
      family: typography.fontFamily.primary,
      sample: 'CONTACT',
    },
  ];

  return (
    <Section
      id="typography"
      label="02 — Typography"
      title="Type Scale"
      desc={`Primary: ${typography.fontFamily.primary}  ·  Display: ${typography.fontFamily.display}`}
    >
      <div className="sg-type-rows">
        {rows.map((row) => (
          <div key={row.token} className="sg-type-row">
            <div className="sg-type-meta">
              <span className="sg-type-token">{row.token}</span>
              <span className="sg-type-detail">
                {row.size} / weight {row.weight}
                {row.letterSpacing ? ` / ls ${row.letterSpacing}` : ''}
              </span>
            </div>
            <span
              className="sg-type-sample"
              style={{
                fontFamily: row.family,
                fontSize: row.size,
                fontWeight: row.weight,
                letterSpacing: row.letterSpacing ?? typography.letterSpacing.normal,
              }}
            >
              {row.sample}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Spacing ────────────────────────────────────────────────────────────────

function SpacingSection() {
  const visible = [
    ['px', spacing.px],
    ['1', spacing[1]],
    ['2', spacing[2]],
    ['3', spacing[3]],
    ['4', spacing[4]],
    ['5', spacing[5]],
    ['6', spacing[6]],
    ['8', spacing[8]],
    ['10', spacing[10]],
    ['12', spacing[12]],
    ['14', spacing[14]],
    ['16', spacing[16]],
    ['20', spacing[20]],
    ['24', spacing[24]],
    ['32', spacing[32]],
    ['40', spacing[40]],
    ['48', spacing[48]],
    ['64', spacing[64]],
    ['80', spacing[80]],
    ['96', spacing[96]],
  ] as [string, string][];

  return (
    <Section
      id="spacing"
      label="03 — Spacing"
      title="Spacing Scale"
      desc="Tailwind-compatible padding scale — base unit 4 px (1 = 4 px, 2 = 8 px, …)"
    >
      <div className="sg-spacing-rows">
        {visible.map(([token, val]) => {
          const px = parseInt(val, 10);
          const barWidth = Math.min(px * 1.5, 640);
          return (
            <div key={token} className="sg-spacing-row">
              <span className="sg-spacing-token">{token}</span>
              <div className="sg-spacing-bar-wrap">
                <div
                  className="sg-spacing-bar"
                  style={{ width: barWidth > 0 ? barWidth : 2 }}
                />
              </div>
              <span className="sg-spacing-val">{val}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// ── Border Radius ──────────────────────────────────────────────────────────

function BorderRadiusSection() {
  const radii = Object.entries(borderRadius) as [string, string][];

  return (
    <Section
      id="border-radius"
      label="04 — Border Radius"
      title="Border Radius"
      desc="Radius tokens applied from flat to full pill — named for their intended use."
    >
      <div className="sg-radius-grid">
        {radii.map(([token, val]) => (
          <div key={token} className="sg-radius-card">
            <div
              className="sg-radius-shape"
              style={{ borderRadius: val }}
            />
            <div className="sg-radius-meta">
              <span className="sg-radius-token">{token}</span>
              <span className="sg-radius-value">{val}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Shadows ────────────────────────────────────────────────────────────────

function ShadowSection() {
  const shadowList = Object.entries(shadows) as [string, string][];

  return (
    <Section
      id="shadows"
      label="05 — Shadows"
      title="Shadows"
      desc="Box and text shadow definitions extracted from ARISE component layers."
    >
      <div className="sg-shadow-grid">
        {shadowList.map(([token, val]) => (
          <div
            key={token}
            className="sg-shadow-card"
            style={{ boxShadow: val.startsWith('0px') && !val.includes('rgba(0, 0, 0, 1)') ? val : undefined }}
          >
            <div className="sg-shadow-preview">
              <span className="sg-shadow-token">shadows.{token}</span>
            </div>
            <span className="sg-shadow-value">{val}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function Styleguide() {
  return (
    <div className="sg">
      <nav className="sg-nav">
        <span className="sg-nav-title">ARISE · Design Tokens</span>
        <a href="#colors">Colors</a>
        <a href="#typography">Typography</a>
        <a href="#spacing">Spacing</a>
        <a href="#border-radius">Radius</a>
        <a href="#shadows">Shadows</a>
        <a href="/app/components">Components →</a>
        <a href="/">← Back</a>
      </nav>

      <div className="sg-body">
        <ColorSection />
        <TypographySection />
        <SpacingSection />
        <BorderRadiusSection />
        <ShadowSection />
      </div>
    </div>
  );
}
