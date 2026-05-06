// Design tokens extracted from D3C-FINAL Figma file (ARISE mental health app)
// Source: https://www.figma.com/design/GiWAOYZ4BamCKOXSL6PslJ/D3C-FINAL

// ── Colors ─────────────────────────────────────────────────────────────────

export const colors = {
  // Brand button colors — extracted from Figma nodes 639:8591 / 639:8595
  brand: {
    salmon:       '#ff8e8e',  // Button default (Figma Frame 63)
    salmonMuted:  '#f3c0c0',  // Button disabled / muted state (Figma Frame 64)
    salmonActive: '#f95757',  // Button active / pressed (Figma Frame 65)
    dark:         '#1b1828',  // Button text — very dark purple (Figma label color)
  },
  state: {
    destructive:      '#f95757',           // Re-mapped to Figma active state color
    destructiveHover: '#ff6060',
    destructiveMuted: 'rgba(249,87,87,0.15)',
  },
  background: {
    primary:      '#1a1229',  // Darkest – header, footer, base layer
    secondary:    '#1e1a2c',  // Main content containers and cards
    gradientFrom: '#2f1f3b',  // Gradient start (content sections)
    gradientVia:  '#44213a',  // Gradient midpoint
    gradientTo:   '#392648',  // Gradient end
  },
  accent: {
    teal:      '#31bbe1',  // CTA buttons (source: rgba(49,187,225,0.69))
    blue:      '#7eb5d7',  // Highlighted text and links
    orange:    '#ff7c2b',  // Brand orange (logo R)
    brandBlue: '#2ab0fe',  // Brand blue (logo ISE)
    purple:    '#80438b',  // Card gradient overlay purple
  },
  text: {
    primary:   '#ffffff',
    highlight: '#7eb5d7',                 // Alias of accent.blue
    muted:     'rgba(255, 255, 255, 0.6)',
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.3)',
  },
  overlay: {
    dark: 'rgba(0, 0, 0, 0.35)',
  },
} as const;

// ── Typography ─────────────────────────────────────────────────────────────

export const typography = {
  fontFamily: {
    primary: "'Be Vietnam Pro', sans-serif",  // Body, headings, UI
    display:  "'Arya', sans-serif",            // Logo wordmark
  },
  fontSize: {
    display: '64px',  // Page-level section headings (Vision, Resources, …)
    h1:      '54px',  // Card headings (Awareness, Mood Tracker, …)
    h2:      '40px',  // Large body text inside cards
    h3:      '35px',  // Card descriptions
    nav:     '28px',  // Navigation links
    button:  '25px',  // Button labels
    sm:      '24px',  // Small text, contact button
  },
  fontWeight: {
    regular:    400,
    medium:     500,
    semiBold:   600,
    bold:       700,
    extraBold:  800,
  },
  letterSpacing: {
    tight:  '-3.2px',   // Section headings
    nav:    '-0.85px',  // Navigation links
    normal: '0px',
  },
  lineHeight: {
    normal: 'normal',
  },
} as const;

// ── Spacing (Tailwind padding scale — base 4 px) ───────────────────────────

export const spacing = {
  px:   '1px',
  0.5:  '2px',
  1:    '4px',
  1.5:  '6px',
  2:    '8px',
  2.5:  '10px',
  3:    '12px',
  3.5:  '14px',
  4:    '16px',
  5:    '20px',
  6:    '24px',
  7:    '28px',
  8:    '32px',
  9:    '36px',
  10:   '40px',
  11:   '44px',
  12:   '48px',
  14:   '56px',
  16:   '64px',
  20:   '80px',
  24:   '96px',
  28:   '112px',
  32:   '128px',
  36:   '144px',
  40:   '160px',
  44:   '176px',
  48:   '192px',
  52:   '208px',
  56:   '224px',
  60:   '240px',
  64:   '256px',
  72:   '288px',
  80:   '320px',
  96:   '384px',
} as const;

// ── Border Radius ──────────────────────────────────────────────────────────

export const borderRadius = {
  none:      '0px',
  sm:        '4px',   // Small inline elements
  md:        '8px',   // General-purpose
  cardInner: '22px',  // Inner content cards (Vision, Mission text boxes)
  card:      '25px',  // Feature cards (Awareness, Mood Tracker)
  navPill:   '36px',  // Navigation bar pill
  button:    '37px',  // Explore / action buttons
  pill:      '58px',  // Contact button (max roundness)
  full:      '9999px',
} as const;

// ── Shadows ────────────────────────────────────────────────────────────────

export const shadows = {
  card:   '0px 3px 8px 0px rgba(0, 0, 0, 0.15)',   // Feature cards
  nav:    '0px 5px 12px 0px rgba(0, 0, 0, 0.25)',   // Navigation bar
  button: '0px 9px 9px 0px rgba(0, 0, 0, 0.25)',    // Contact button
  textSm: '0px 3px 3px rgba(0, 0, 0, 0.36)',        // Heading text shadows
  textXs: '0px 1px 1px rgba(0, 0, 0, 1)',           // Logo text shadow
} as const;

// ── Animation ──────────────────────────────────────────────────────────────

export const animation = {
  duration: {
    instant:    '0ms',
    fast:       '100ms',
    base:       '150ms',
    slow:       '200ms',
    deliberate: '300ms',
    spinner:    '750ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in:      'cubic-bezier(0.4, 0, 1, 1)',
    out:     'cubic-bezier(0, 0, 0.2, 1)',
    spring:  'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;
