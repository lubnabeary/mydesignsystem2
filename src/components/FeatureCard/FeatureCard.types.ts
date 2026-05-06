export type FeatureCardVariant = 'awareness' | 'moodTracker' | 'studentExperiences';

export interface FeatureCardProps {
  variant:      FeatureCardVariant;
  title?:       string;
  subtitle?:    string;
  icon?:        string;
  description?: string;
  onExplore?:   () => void;
  href?:        string;
  className?:   string;
}
