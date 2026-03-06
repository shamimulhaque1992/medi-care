import { HeroSectionProps } from "@/types/heroProps";
import { Sparkles } from "lucide-react";

export const heroSectionData: HeroSectionProps = {
  badge: {
    icon: Sparkles,
    text: "AI-Powered Healthcare",
  },
  title: {
    line1: "Find Your Perfect",
    line2: "Doctor Match",
  },
  description:
    "Our intelligent AI analyzes your symptoms and connects you with the most qualified specialists. Experience healthcare that truly understands you.",
  primaryButton: {
    text: "Start Consultation",
  },
  secondaryButton: {
    text: "Learn More",
  },
  stats: [
    { value: "50K+", label: "Happy Patients" },
    { value: "2K+", label: "Expert Doctors" },
    { value: "98%", label: "Satisfaction" },
  ],
  searchPlaceholder: "E.g., I've been having headaches and dizziness...",
  commonSymptoms: ["Headache", "Fatigue", "Chest pain", "Skin rash", "Anxiety"],
  showInteractiveCard: true,
  notifications: {
    matchFound: {
      title: "Match Found!",
      subtitle: "3 specialists available",
    },
    onlineUsers: {
      count: 12,
      text: "online now",
    },
  },
};
