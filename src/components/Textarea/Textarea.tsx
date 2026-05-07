import React, { useId } from 'react';
import './Textarea.css';
import type { TextareaProps } from './Textarea.types';

/**
 * Textarea — ARISE design system multi-line text field.
 *
 * Figma source: Student Experiences form "Share your experience" field.
 * Token file:   src/styles/design-tokens.ts
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      hint,
      error,
      fullWidth = false,
      rows = 5,
      disabled,
      className = '',
      id: idProp,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;
    const hintId = `${id}-hint`;
    const errorId = `${id}-error`;

    const describedBy = [
      error ? errorId : null,
      hint ? hintId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    const rootCls = [
      'textarea-root',
      fullWidth && 'textarea-root--full',
      error && 'textarea-root--error',
      disabled && 'textarea-root--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={rootCls}>
        {label && (
          <label className="textarea-label" htmlFor={id}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className="textarea-field"
          rows={rows}
          disabled={disabled}
          aria-invalid={!!error || undefined}
          aria-describedby={describedBy}
          {...rest}
        />
        {error ? (
          <span id={errorId} className="textarea-error" role="alert">
            {error}
          </span>
        ) : hint ? (
          <span id={hintId} className="textarea-hint">
            {hint}
          </span>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
