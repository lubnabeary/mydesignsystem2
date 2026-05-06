import React from 'react';
import './Button.css';
import type { ButtonProps, ButtonSize } from './Button.types';

// Spinner sizes match the --_icon-size CSS variable per size token
const ICON_PX: Record<ButtonSize, number> = { sm: 14, md: 16, lg: 18, xl: 20 };

function Spinner({ size }: { size: ButtonSize }) {
  const s = ICON_PX[size];
  // Circumference of r=9 circle ≈ 56.55px. dashoffset = 25% for open arc.
  return (
    <svg
      className="btn__spinner"
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="56.549"
        strokeDashoffset="14.137"
      />
    </svg>
  );
}

/**
 * Button — ARISE design system primary interactive element.
 *
 * Figma source: D3C-FINAL › node 2019:3818 (header) — Explore & CONTACT buttons
 * Token file:   src/styles/design-tokens.ts
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant   = 'primary',
      size      = 'md',
      shape     = 'rounded',
      leftIcon,
      rightIcon,
      iconOnly  = false,
      loading   = false,
      disabled  = false,
      fullWidth = false,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const cls = [
      'btn',
      `btn--${variant}`,
      `btn--${size}`,
      `btn--shape-${shape}`,
      iconOnly  && 'btn--icon-only',
      loading   && 'btn--loading',
      fullWidth && 'btn--full',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cls}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        {...rest}
      >
        {/* Left slot: spinner during loading, leftIcon otherwise */}
        {loading ? (
          <Spinner size={size} />
        ) : leftIcon ? (
          <span className="btn__icon btn__icon--left" aria-hidden="true">
            {leftIcon}
          </span>
        ) : null}

        {/* Content slot */}
        {iconOnly ? (
          !loading && (
            <span className="btn__icon" aria-hidden="true">
              {children}
            </span>
          )
        ) : (
          <span className="btn__label">{children}</span>
        )}

        {/* Right slot: suppressed during loading and icon-only mode */}
        {!loading && !iconOnly && rightIcon && (
          <span className="btn__icon btn__icon--right" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
