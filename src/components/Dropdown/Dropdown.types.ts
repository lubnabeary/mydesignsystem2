export type DropdownVariant = 'year' | 'topic';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  variant?: DropdownVariant;
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}
