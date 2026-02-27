export interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
}

export interface StepCardProps {
  step: Step;
}

export interface FloatingIconProps {
  emoji: string;
  className?: string;
  size?: "sm" | "lg";
}

export interface Stat {
  value: string;
  label: string;
}

export interface AIVisualizationProps {
  stats?: Stat[];
}
