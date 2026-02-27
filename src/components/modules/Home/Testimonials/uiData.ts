import { Testimonial, TrustedOrganization } from "@/types/testimonials";

export const sampleTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jennifer Adams",
    role: "Marketing Executive",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote:
      "The AI matching system found me the perfect cardiologist within minutes. The consultation was seamless, and I received excellent care without leaving my home.",
    rating: 5,
  },
  {
    id: "2",
    name: "Robert Chen",
    role: "Software Engineer",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote:
      "As someone with a busy schedule, MediMatch has been a game-changer. The doctors are highly qualified, and the platform makes healthcare accessible and convenient.",
    rating: 5,
  },
  {
    id: "3",
    name: "Maria Santos",
    role: "Small Business Owner",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote:
      "I was skeptical about telemedicine, but the quality of care I received exceeded my expectations. The AI accurately identified my condition and matched me with a specialist.",
    rating: 5,
  },
];

// Sample trusted organizations
export const trustedOrganizations: TrustedOrganization[] = [
  { id: "1", name: "HealthCare+" },
  { id: "2", name: "MedTrust" },
  { id: "3", name: "CareFirst" },
  { id: "4", name: "WellnessHub" },
  { id: "5", name: "LifeHealth" },
];
