import './ReactionButton.css';
import type { ReactionButtonProps } from './ReactionButton.types';

/**
 * ReactionButton — ARISE design system heart reaction pill.
 *
 * Default: dark pill. Active/liked: purple. Loading: spinner replaces heart.
 * Used on Student Experience post cards.
 *
 * Figma source: D3C-FINAL — Student Experiences card reaction row.
 * Token file:   src/styles/design-tokens.ts
 */
export function ReactionButton({
  count = 0,
  active = false,
  loading = false,
  onClick,
  disabled = false,
  className = '',
}: ReactionButtonProps) {
  const cls = [
    'reaction-btn',
    active  && 'reaction-btn--active',
    loading && 'reaction-btn--loading',
    (disabled && !loading) && 'reaction-btn--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      className={cls}
      disabled={isDisabled}
      aria-pressed={active}
      aria-label="React with heart"
      onClick={onClick}
    >
      {loading ? (
        <span className="reaction-btn__spinner" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12" cy="12" r="9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="56.549"
              strokeDashoffset="14.137"
            />
          </svg>
        </span>
      ) : (
        <span className="reaction-btn__heart" aria-hidden="true">❤️</span>
      )}
      <span className="reaction-btn__count">{count}</span>
    </button>
  );
}

ReactionButton.displayName = 'ReactionButton';
export default ReactionButton;
