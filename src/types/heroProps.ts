import { LucideIcon } from "lucide-react";

export interface Badge {
  icon: LucideIcon;
  text: string;
}

export interface Title {
  line1: string;
  line2: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export interface Stat {
  value: string;
  label: string;
}

export interface MatchFoundNotification {
  title: string;
  subtitle: string;
}

export interface OnlineUsersNotification {
  count: number;
  text: string;
}

export interface Notifications {
  matchFound?: MatchFoundNotification;
  onlineUsers?: OnlineUsersNotification;
}

export interface WelcomeTextAndStatProps {
  badge?: Badge;
  title: Title;
  description: string;
  primaryButton: ButtonProps;
  secondaryButton?: ButtonProps;
  stats?: Stat[];
}
export interface SymptomAnalyzerSearchSectionProps {
  searchPlaceholder?: string;
  commonSymptoms?: string[];
  showInteractiveCard?: boolean;
  notifications?: Notifications;
  primaryButton: ButtonProps;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export interface HeroSectionProps
  extends
    WelcomeTextAndStatProps,
    Omit<
      SymptomAnalyzerSearchSectionProps,
      "searchValue" | "setSearchValue" | "primaryButton"
    > {}
