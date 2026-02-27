import { FooterSection, SocialLink } from "@/types/footerTypes";

export const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Find Doctors", href: "/doctors" },
      { label: "Pricing", href: "/pricing" },
      { label: "Mobile App", href: "/app" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { id: "1", icon: "𝕏", href: "https://twitter.com", label: "Twitter" },
  { id: "2", icon: "in", href: "https://linkedin.com", label: "LinkedIn" },
  { id: "3", icon: "f", href: "https://facebook.com", label: "Facebook" },
  { id: "4", icon: "📷", href: "https://instagram.com", label: "Instagram" },
];
