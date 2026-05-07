export interface RadioButtonProps {
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  className?: string;
}

export interface RadioGroupProps {
  label?: string;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  options: { value: string; label: string }[];
  disabled?: boolean;
  direction?: 'vertical' | 'horizontal';
  className?: string;
}
