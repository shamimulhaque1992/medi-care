export interface HeroSectionProps {
  badge?: {
    icon?: React.ReactNode;
    text: string;
  };
  title: {
    line1: string;
    line2: string;
  };
  description: string;
  primaryButton?: {
    text: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
  searchPlaceholder?: string;
  commonSymptoms?: string[];
  showInteractiveCard?: boolean;
  notifications?: {
    matchFound?: {
      title: string;
      subtitle: string;
    };
    onlineUsers?: {
      count: number;
      text: string;
    };
  };
}
