export interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  className?: string;
}

export interface CheckboxGroupProps {
  label?: string;
  options: { value: string; label: string }[];
  value?: string[];
  onChange?: (values: string[]) => void;
  disabled?: boolean;
  direction?: 'vertical' | 'horizontal';
  columns?: number;
  className?: string;
}
