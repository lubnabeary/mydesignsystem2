import React from 'react';
import './MoodRatingTile.css';
import type { MoodRatingTileProps, MoodRatingGroupProps } from './MoodRatingTile.types';

/**
 * MoodRatingTile — Single numbered square tile for mood input (1–10).
 *
 * Three states: default (dark), selected (purple), hover (light).
 * Figma source: D3C-FINAL — Mood Tracker rating row.
 * Token file:   src/styles/design-tokens.ts
 */
export function MoodRatingTile({
  value,
  selected = false,
  onClick,
  disabled = false,
  className = '',
}: MoodRatingTileProps) {
  const cls = [
    'mood-tile',
    selected  && 'mood-tile--selected',
    disabled  && 'mood-tile--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!disabled) onClick?.(value);
    }
  }

  return (
    <button
      type="button"
      className={cls}
      disabled={disabled}
      aria-pressed={selected}
      aria-label={`Rate ${value}`}
      onClick={() => !disabled && onClick?.(value)}
      onKeyDown={handleKeyDown}
    >
      {value}
    </button>
  );
}

/**
 * MoodRatingGroup — Renders a full row of MoodRatingTile (1–max).
 * Controlled via value + onChange.
 */
export function MoodRatingGroup({
  max = 10,
  value,
  onChange,
  disabled = false,
}: MoodRatingGroupProps) {
  return (
    <div className="mood-rating-group" role="group" aria-label="Mood rating">
      {Array.from({ length: max }, (_, i) => i + 1).map(n => (
        <MoodRatingTile
          key={n}
          value={n}
          selected={value === n}
          disabled={disabled}
          onClick={onChange}
        />
      ))}
    </div>
  );
}

MoodRatingTile.displayName = 'MoodRatingTile';
MoodRatingGroup.displayName = 'MoodRatingGroup';
export default MoodRatingTile;
