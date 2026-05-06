/*
  MythFlipCard — ARISE Design System
  ────────────────────────────────────
  Figma source: D3C-FINAL node 639:9503 (Frame 68 — Myths vs. Truths)
  Canvas size : 1367 px wide, card 652×787 px

  Front face (Myth):
    bg       — #1e1a2c gradient + rgba(60,37,37,0.5) red tint
    glow     — box-shadow 0 4 4 15px rgba(245,16,16,0.1)
    border   — 1.23px solid rgba(255,255,255,0.3)
    heading  — Be Vietnam Pro ExtraBold 55px #ff7f7f
    body     — Be Vietnam Pro Medium 35px #ffffff

  Back face (Truth):
    bg       — same gradient + rgba(37,60,38,0.4) green tint
    glow     — box-shadow 0 4 4 15px rgba(142,245,16,0.1)
    heading  — Be Vietnam Pro Bold 55px #ff7f7f
    body     — Be Vietnam Pro Medium 35px #ffffff

  Carousel: 6 dots, first active (teal), rest grey
*/

import { useState } from 'react';
import './MythFlipCard.css';
import type { MythFlipCardProps } from './MythFlipCard.types';

const DEFAULT_CAT_MYTH  = '/images/cat-myth.png';
const DEFAULT_CAT_TRUTH = '/images/cat-truth.png';

const DEFAULT_DATA = [
  {
    myth:  '"Anxiety is just being nervous, everyone has it, it\'s not a real condition."',
    truth: '"Anxiety disorders are recognized medical conditions that can significantly impair daily functioning and quality of life."',
  },
  {
    myth:  '"You should just avoid stressful situations to manage anxiety."',
    truth: '"Avoidance reinforces anxiety. Gradual, supported exposure is one of the most effective treatments."',
  },
  {
    myth:  '"Anxiety means you\'re weak or can\'t handle pressure."',
    truth: '"Anxiety is a brain response, not a character flaw. Many high-achievers manage anxiety every day."',
  },
  {
    myth:  '"Lifestyle changes like diet and exercise can cure GAD."',
    truth: '"Lifestyle changes support mental health but GAD often requires professional treatment such as therapy or medication."',
  },
  {
    myth:  '"Generalized Anxiety Disorder is rare."',
    truth: '"GAD affects around 1 in 20 people. It is one of the most common mental health conditions worldwide."',
  },
  {
    myth:  '"GAD is always obvious — you can tell when someone has it."',
    truth: '"Many people with GAD appear calm and high-functioning on the outside while struggling significantly on the inside."',
  },
];

export function MythFlipCard({
  data          = DEFAULT_DATA,
  mythCatImage  = DEFAULT_CAT_MYTH,
  truthCatImage = DEFAULT_CAT_TRUTH,
  className,
}: MythFlipCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flipped,     setFlipped]     = useState(false);

  function goTo(i: number) {
    setActiveIndex(i);
    setFlipped(false);
  }

  const entry = data[activeIndex];

  return (
    <div className={`mfc${className ? ` ${className}` : ''}`}>
      {/* 3-D flip scene */}
      <div
        className={`mfc__scene${flipped ? ' mfc__scene--flipped' : ''}`}
        onClick={() => setFlipped(f => !f)}
        role="button"
        tabIndex={0}
        aria-label={flipped ? 'Showing truth — click to see myth' : 'Click to reveal truth'}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setFlipped(f => !f)}
      >
        {/* Front — Myth */}
        <div className="mfc__face mfc__face--front" aria-hidden={flipped}>
          <div className="mfc__face-header">
            <span className="mfc__icon" aria-hidden="true">❌</span>
            <span className="mfc__label mfc__label--myth">Myth</span>
          </div>
          <div className="mfc__cat-wrap">
            <img src={mythCatImage} alt="Pixel art cat" className="mfc__cat" />
          </div>
          <p className="mfc__quote">{entry.myth}</p>
          <span className="mfc__hint">Click to reveal truth</span>
        </div>

        {/* Back — Truth */}
        <div className="mfc__face mfc__face--back" aria-hidden={!flipped}>
          <div className="mfc__face-header">
            <span className="mfc__icon" aria-hidden="true">✅</span>
            <span className="mfc__label mfc__label--truth">Truth</span>
          </div>
          <div className="mfc__cat-wrap">
            <img src={truthCatImage} alt="Pixel art cat" className="mfc__cat" />
          </div>
          <p className="mfc__quote">{entry.truth}</p>
          <span className="mfc__hint">Click to see myth</span>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="mfc__dots" role="tablist" aria-label="Card navigation">
        {data.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Card ${i + 1}`}
            className={`mfc__dot${i === activeIndex ? ' mfc__dot--active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default MythFlipCard;
