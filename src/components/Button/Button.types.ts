import type React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'link';
export type ButtonSize    = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonShape   = 'rounded' | 'pill' | 'square';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant — maps to Figma design intent */
  variant?: ButtonVariant;
  /** Height tier. md is the design-system default (40 px) */
  size?: ButtonSize;
  /** Border-radius preset. rounded = borderRadius.button (37 px) */
  shape?: ButtonShape;
  /** Icon node rendered to the left of the label */
  leftIcon?: React.ReactNode;
  /** Icon node rendered to the right of the label */
  rightIcon?: React.ReactNode;
  /**
   * Renders a square icon-only button. children becomes the icon.
   * Must supply aria-label when true.
   */
  iconOnly?: boolean;
  /** Replaces leftIcon with a spinner and disables interaction */
  loading?: boolean;
  /** Stretches button to 100 % of its container */
  fullWidth?: boolean;
}
