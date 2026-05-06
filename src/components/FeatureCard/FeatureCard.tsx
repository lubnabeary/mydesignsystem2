/*
  FeatureCard — ARISE Design System
  ────────────────────────────────────
  Figma source: D3C-FINAL node 585:4764 (Awareness page — infographic cards)
  Canvas size : 1880 px  →  scale ×0.681 at 1280 px viewport

  Figma card measurements:
    Width           461.7 px  →  314 px
    Height          437.9 px  →  298 px
    Border-radius   42.75 px  →  29 px  (Awareness)
    Border          1.084 px solid rgba(255,255,255,0.3)
    Background      #1e1a2c
    Icon area       ~300 px square
    Title font      Be Vietnam Pro Bold 44 px  →  30 px, white
    Subtitle font   Be Vietnam Pro Bold 20 px  →  14 px, #d0d0d0
    Shadow          0 3 8 rgba(0,0,0,0.15)  (shadows.card)

  3 card variants:
    awareness           — icon: financial/awareness imagery
    moodTracker         — icon: mood tracking imagery
    studentExperiences  — icon: student/social imagery
*/

import { Link } from 'react-router-dom';
import './FeatureCard.css';
import type { FeatureCardProps } from './FeatureCard.types';
import { Button } from '../Button';

const VARIANT_DEFAULTS = {
  awareness: {
    title:       'Awareness',
    subtitle:    'Understanding anxiety & GAD',
    icon:        '/images/icon-academic.png',
    href:        '/awareness',
    accentColor: 'rgba(127, 223, 255, 0.12)',
    accentBorder: 'rgba(127, 223, 255, 0.25)',
  },
  moodTracker: {
    title:       'Mood Tracker',
    subtitle:    'Track your daily mental wellness',
    icon:        '/images/icon-financial.png',
    href:        '/mood-tracker',
    accentColor: 'rgba(255, 143, 143, 0.1)',
    accentBorder: 'rgba(255, 143, 143, 0.22)',
  },
  studentExperiences: {
    title:       'Student Experiences',
    subtitle:    'Shared journeys & community',
    icon:        '/images/icon-social.png',
    href:        '/student-experiences',
    accentColor: 'rgba(49, 187, 225, 0.1)',
    accentBorder: 'rgba(49, 187, 225, 0.22)',
  },
} as const;

export function FeatureCard({
  variant,
  title,
  subtitle,
  icon,
  description,
  onExplore,
  href,
  className,
}: FeatureCardProps) {
  const defaults = VARIANT_DEFAULTS[variant];

  const resolvedTitle    = title    ?? defaults.title;
  const resolvedSubtitle = subtitle ?? defaults.subtitle;
  const resolvedIcon     = icon     ?? defaults.icon;
  const resolvedHref     = href     ?? defaults.href;

  const card = (
    <article
      className={`fc fc--${variant}${className ? ` ${className}` : ''}`}
      style={{
        '--fc-accent':        defaults.accentColor,
        '--fc-accent-border': defaults.accentBorder,
      } as React.CSSProperties}
    >
      {/* Icon area */}
      <div className="fc__icon-wrap">
        <img src={resolvedIcon} alt="" aria-hidden="true" className="fc__icon" />
      </div>

      {/* Text */}
      <div className="fc__body">
        <h3 className="fc__title">{resolvedTitle}</h3>
        <p className="fc__subtitle">{resolvedSubtitle}</p>
        {description && <p className="fc__desc">{description}</p>}
      </div>

      {/* CTA */}
      <div className="fc__footer">
        <Button
          variant="secondary"
          size="sm"
          rightIcon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12,5 19,12 12,19"/>
            </svg>
          }
          onClick={onExplore}
          tabIndex={-1}
        >
          Explore
        </Button>
      </div>
    </article>
  );

  return resolvedHref ? (
    <Link to={resolvedHref} className="fc__link-wrapper">
      {card}
    </Link>
  ) : card;
}

export default FeatureCard;
