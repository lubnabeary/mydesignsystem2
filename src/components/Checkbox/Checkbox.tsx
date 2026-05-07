import React, { useId, useEffect, useRef } from 'react';
import './Checkbox.css';
import type { CheckboxProps, CheckboxGroupProps } from './Checkbox.types';

/**
 * Checkbox — ARISE design system checkbox with indeterminate support.
 *
 * Figma source: Student Experiences topic category selector (2-column grid).
 * Token file:   src/styles/design-tokens.ts
 */
export function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  indeterminate = false,
  className = '',
}: CheckboxProps) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  // Apply indeterminate via DOM property (not a standard HTML attribute)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange?.(e.target.checked);
    }
  };

  const boxCls = [
    'checkbox-box',
    checked && 'checkbox-box--checked',
    indeterminate && 'checkbox-box--indeterminate',
  ]
    .filter(Boolean)
    .join(' ');

  const rootCls = [
    'checkbox-root',
    disabled && 'checkbox-root--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={rootCls} htmlFor={id}>
      {/* Hidden native input for accessibility */}
      <input
        ref={inputRef}
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="checkbox-native"
        aria-checked={indeterminate ? 'mixed' : checked}
      />
      {/* Custom styled box */}
      <span className={boxCls} aria-hidden="true">
        {indeterminate ? (
          /* Dash for indeterminate */
          <svg width="10" height="2" viewBox="0 0 10 2" fill="none" aria-hidden="true">
            <rect x="0" y="0" width="10" height="2" rx="1" fill="white" />
          </svg>
        ) : checked ? (
          /* Checkmark */
          <svg width="11" height="8" viewBox="0 0 11 8" fill="none" aria-hidden="true">
            <path
              d="M1 3.5L4 6.5L10 1"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </span>
      <span className="checkbox-label">{label}</span>
    </label>
  );
}

/**
 * CheckboxGroup — wraps multiple Checkbox options with shared state and layout.
 * Supports columns prop for CSS grid layout (e.g., columns=2 for the Figma 2-column grid).
 */
export function CheckboxGroup({
  label,
  options,
  value = [],
  onChange,
  disabled = false,
  direction = 'vertical',
  columns,
  className = '',
}: CheckboxGroupProps) {
  const groupLabelId = useId();

  const handleChange = (optValue: string, checked: boolean) => {
    if (disabled) return;
    const next = checked
      ? [...value, optValue]
      : value.filter(v => v !== optValue);
    onChange?.(next);
  };

  const groupCls = [
    'checkbox-group',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const optionsStyle: React.CSSProperties = columns
    ? { display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '10px 24px' }
    : direction === 'horizontal'
    ? { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px 24px' }
    : { display: 'flex', flexDirection: 'column', gap: '10px' };

  return (
    <div
      role="group"
      aria-labelledby={label ? groupLabelId : undefined}
      className={groupCls}
    >
      {label && (
        <span id={groupLabelId} className="checkbox-group-label">
          {label}
        </span>
      )}
      <div style={optionsStyle}>
        {options.map(opt => (
          <Checkbox
            key={opt.value}
            label={opt.label}
            checked={value.includes(opt.value)}
            onChange={checked => handleChange(opt.value, checked)}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default Checkbox;
