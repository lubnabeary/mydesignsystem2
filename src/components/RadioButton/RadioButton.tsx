import { useId } from 'react';
import './RadioButton.css';
import type { RadioButtonProps, RadioGroupProps } from './RadioButton.types';

/**
 * RadioButton — ARISE design system single radio option.
 *
 * Figma source: Student Experiences credit preference selector.
 * Token file:   src/styles/design-tokens.ts
 */
export function RadioButton({
  label,
  value,
  checked = false,
  onChange,
  disabled = false,
  name,
  className = '',
}: RadioButtonProps) {
  const id = useId();

  const handleChange = () => {
    if (!disabled) {
      onChange?.(value);
    }
  };

  const rootCls = [
    'radio-root',
    disabled && 'radio-root--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={rootCls} htmlFor={id}>
      {/* Hidden native input for accessibility */}
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="radio-native"
        aria-checked={checked}
      />
      {/* Custom styled radio circle */}
      <span className={`radio-circle${checked ? ' radio-circle--checked' : ''}`} aria-hidden="true">
        {checked && <span className="radio-dot" />}
      </span>
      <span className="radio-label">{label}</span>
    </label>
  );
}

/**
 * RadioGroup — wraps multiple RadioButton options with shared state and layout.
 */
export function RadioGroup({
  label,
  name,
  value,
  onChange,
  options,
  disabled = false,
  direction = 'vertical',
  className = '',
}: RadioGroupProps) {
  const groupLabelId = useId();

  const groupCls = [
    'radio-group',
    `radio-group--${direction}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      role="radiogroup"
      aria-labelledby={label ? groupLabelId : undefined}
      className={groupCls}
    >
      {label && (
        <span id={groupLabelId} className="radio-group-label">
          {label}
        </span>
      )}
      <div className={`radio-group-options radio-group-options--${direction}`}>
        {options.map(opt => (
          <RadioButton
            key={opt.value}
            label={opt.label}
            value={opt.value}
            name={name}
            checked={value === opt.value}
            onChange={onChange}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default RadioButton;
