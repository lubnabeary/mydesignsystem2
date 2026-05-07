import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';
import type { DropdownProps } from './Dropdown.types';

/**
 * Dropdown — ARISE design system pill-shaped selector.
 *
 * Two variants: "year" (Freshman–Senior) and "topic" (All, Anxiety, …).
 * Closed: dark pill with label + chevron.
 * Open: card below with options; selected option highlighted salmon.
 * Active pill (has value): teal border + teal text.
 *
 * Figma source: D3C-FINAL — Mood Tracker and Student Experiences filter bars.
 * Token file:   src/styles/design-tokens.ts
 */
export function Dropdown({
  options,
  value,
  placeholder = 'Select…',
  onChange,
  disabled = false,
  className = '',
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find(o => o.value === value)?.label ?? placeholder;
  const hasValue = value !== undefined && value !== '';

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [open]);

  function handleSelect(optValue: string) {
    onChange?.(optValue);
    setOpen(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'Escape') setOpen(false);
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(prev => !prev);
    }
  }

  const triggerCls = [
    'dropdown__trigger',
    hasValue && 'dropdown__trigger--active',
  ]
    .filter(Boolean)
    .join(' ');

  const wrapperCls = [
    'dropdown',
    disabled && 'dropdown--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperCls} ref={rootRef}>
      <button
        type="button"
        className={triggerCls}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        onKeyDown={handleKeyDown}
      >
        <span>{selectedLabel}</span>
        <span className={`dropdown__chevron${open ? ' dropdown__chevron--open' : ''}`} aria-hidden="true">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      {open && (
        <ul
          className="dropdown__menu"
          role="listbox"
          aria-label="Options"
        >
          {options.map(opt => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              className={`dropdown__option${opt.value === value ? ' dropdown__option--selected' : ''}`}
              onClick={() => handleSelect(opt.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelect(opt.value);
                }
              }}
              tabIndex={0}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Dropdown.displayName = 'Dropdown';
export default Dropdown;
