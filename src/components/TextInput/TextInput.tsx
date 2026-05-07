import React, { useId } from 'react';
import './TextInput.css';
import type { TextInputProps } from './TextInput.types';

/**
 * TextInput — ARISE design system single-line text field.
 *
 * Figma source: Student Experiences form "Give your story a title" field.
 * Token file:   src/styles/design-tokens.ts
 */
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      hint,
      error,
      fullWidth = false,
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
      'text-input-root',
      fullWidth && 'text-input-root--full',
      error && 'text-input-root--error',
      disabled && 'text-input-root--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={rootCls}>
        {label && (
          <label className="text-input-label" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className="text-input-field"
          disabled={disabled}
          aria-invalid={!!error || undefined}
          aria-describedby={describedBy}
          {...rest}
        />
        {error ? (
          <span id={errorId} className="text-input-error" role="alert">
            {error}
          </span>
        ) : hint ? (
          <span id={hintId} className="text-input-hint">
            {hint}
          </span>
        ) : null}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
export default TextInput;
