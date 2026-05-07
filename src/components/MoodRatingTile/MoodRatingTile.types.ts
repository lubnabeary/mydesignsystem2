export interface MoodRatingTileProps {
  /** Rating value, 1–10 */
  value: number;
  selected?: boolean;
  onClick?: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

export interface MoodRatingGroupProps {
  /** Maximum rating — defaults to 10 */
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
}
