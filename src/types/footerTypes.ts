export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  id: string;
  icon: string;
  href: string;
  label: string;
}

export interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  email?: string;
  phone?: string;
  location?: string;
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  copyrightText?: string;
  newsletterTitle?: string;
  newsletterDescription?: string;
  onSubscribe?: (email: string) => void;
  className?: string;
}
