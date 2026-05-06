export interface MythTruth {
  myth:  string;
  truth: string;
}

export interface MythFlipCardProps {
  data:           MythTruth[];
  mythCatImage?:  string;
  truthCatImage?: string;
  className?:     string;
}
