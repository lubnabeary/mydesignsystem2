export interface NavLink {
  label: string;
  href:  string;
  active?: boolean;
}

export interface NavbarProps {
  links?:          NavLink[];
  onContactClick?: () => void;
  className?:      string;
}
