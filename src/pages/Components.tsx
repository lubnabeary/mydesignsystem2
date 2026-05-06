import { useState } from 'react';
import './Components.css';
import ButtonShowcase       from './ButtonShowcase';
import NavbarShowcase       from './NavbarShowcase';
import MythFlipCardShowcase from './MythFlipCardShowcase';
import FeatureCardShowcase  from './FeatureCardShowcase';

// ── Tab registry — add new component tabs here ─────────────────────────────

const TABS = [
  {
    id:    'button',
    label: 'Button',
    title: 'Button',
    desc:  'Primary interactive element extracted from ARISE Figma nodes 639:8591 / 639:8595. Five variants, four sizes, three shapes, icon support, loading and disabled states.',
    file:  'src/components/Button/Button.tsx',
    component: ButtonShowcase,
  },
  {
    id:    'navbar',
    label: 'Navbar',
    title: 'Navbar',
    desc:  'Site-wide navigation header extracted from ARISE Figma node 2019:3817. ARISE logo with brand colors, glass-morphism nav pill, and CONTACT button.',
    file:  'src/components/Navbar/Navbar.tsx',
    component: NavbarShowcase,
  },
  {
    id:    'myth-flip-card',
    label: 'Myth Flip Card',
    title: 'Myth Flip Card',
    desc:  'Interactive flip card component from ARISE Figma node 639:9503. CSS 3D flip reveals Myth vs. Truth with cat mascot imagery and carousel pagination.',
    file:  'src/components/MythFlipCard/MythFlipCard.tsx',
    component: MythFlipCardShowcase,
  },
  {
    id:    'feature-card',
    label: 'Feature Card',
    title: 'Feature Card',
    desc:  'Hoverable section card from ARISE Figma node 585:4764. Three variants (Awareness, Mood Tracker, Student Experiences) with icon, title, subtitle, and Explore button.',
    file:  'src/components/FeatureCard/FeatureCard.tsx',
    component: FeatureCardShowcase,
  },
] as const;

type TabId = (typeof TABS)[number]['id'];

// ── Page ───────────────────────────────────────────────────────────────────

export default function Components() {
  const [active, setActive] = useState<TabId>('button');

  const tab     = TABS.find(t => t.id === active) ?? TABS[0];
  const Content = tab.component;

  return (
    <div className="comp">
      {/* Top navigation */}
      <nav className="comp-nav">
        <span className="comp-nav-title">ARISE · Components</span>
        <a href="/app/styleguide">Tokens</a>
        <a href="/">← Home</a>
      </nav>

      {/* Component tab bar */}
      <div className="comp-tabs" role="tablist" aria-label="Components">
        {TABS.map(t => (
          <button
            key={t.id}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`panel-${t.id}`}
            className={`comp-tab${active === t.id ? ' comp-tab--active' : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Active component header */}
      <div className="comp-header">
        <span className="comp-header-eyebrow">Component</span>
        <h1 className="comp-header-title">{tab.title}</h1>
        <p className="comp-header-desc">{tab.desc}</p>
        <div className="comp-header-meta">
          <span className="comp-badge">📄 {tab.file}</span>
          <span className="comp-badge">Figma D3C-FINAL</span>
          <span className="comp-badge">React 19 · TypeScript</span>
        </div>
      </div>

      {/* Content panel */}
      <div
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="comp-content"
      >
        <Content />
      </div>
    </div>
  );
}
