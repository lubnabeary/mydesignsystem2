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

const VARIANT_DEFAULTS = {
  awareness: {
    title:    'Awareness',
    subtitle: 'Understanding anxiety & GAD',
    icon:     '/images/icon-academic.png',
    href:     '/awareness',
  },
  moodTracker: {
    title:    'Mood Tracker',
    subtitle: 'Track your daily mental wellness',
    icon:     '/images/icon-financial.png',
    href:     '/mood-tracker',
  },
  studentExperiences: {
    title:    'Student Experiences',
    subtitle: 'Shared journeys & community',
    icon:     '/images/icon-social.png',
    href:     '/student-experiences',
  },
} as const;

export function FeatureCard({
  variant,
  title,
  subtitle,
  icon,
  href,
  className,
}: FeatureCardProps) {
  const defaults = VARIANT_DEFAULTS[variant];

  const resolvedTitle    = title    ?? defaults.title;
  const resolvedSubtitle = subtitle ?? defaults.subtitle;
  const resolvedIcon     = icon     ?? defaults.icon;
  const resolvedHref     = href     ?? defaults.href;

  const card = (
    <article className={`fc fc--${variant}${className ? ` ${className}` : ''}`}>
      <div className="fc__icon-wrap">
        <img src={resolvedIcon} alt="" aria-hidden="true" className="fc__icon" />
      </div>
      <div className="fc__body">
        <h3 className="fc__title">{resolvedTitle}</h3>
        <p className="fc__subtitle">{resolvedSubtitle}</p>
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
