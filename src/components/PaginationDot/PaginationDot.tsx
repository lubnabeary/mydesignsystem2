import './PaginationDot.css';

interface PaginationDotProps {
  /** Total number of dots */
  count: number;
  /** Currently active dot (0-indexed) */
  active: number;
  onChange?: (index: number) => void;
  className?: string;
}

/**
 * PaginationDot — Row of small circles for carousels and multi-step flows.
 *
 * Inactive dot: grey circle (10 × 10).
 * Active dot: teal elongated pill (24 × 10).
 * Figma source: D3C-FINAL — Myth Card carousel bottom indicator.
 * Token file:   src/styles/design-tokens.ts
 */
export function PaginationDot({
  count,
  active,
  onChange,
  className = '',
}: PaginationDotProps) {
  const wrapperCls = ['pagination-dots', className].filter(Boolean).join(' ');

  return (
    <div className={wrapperCls} role="tablist" aria-label="Slide indicators">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-label={`Go to slide ${i + 1}`}
          className="pagination-dots__btn"
          onClick={() => onChange?.(i)}
        >
          <span
            className={`pagination-dots__dot${i === active ? ' pagination-dots__dot--active' : ''}`}
          />
        </button>
      ))}
    </div>
  );
}

PaginationDot.displayName = 'PaginationDot';
export default PaginationDot;
