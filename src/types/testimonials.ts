/**
 * Type definitions for Patient Testimonials component
 */

/**
 * Interface for a patient testimonial
 */
export interface Testimonial {
  /** Unique identifier for the testimonial */
  id: string;

  /** Patient's full name */
  name: string;

  /** Patient's job title or role */
  role: string;

  /** Patient's avatar/profile image URL */
  avatarUrl: string;

  /** Testimonial quote text */
  quote: string;

  /** Rating score (1-5 stars) */
  rating: number;
}

/**
 * Interface for trusted organization
 */
export interface TrustedOrganization {
  /** Unique identifier for the organization */
  id: string;

  /** Organization name */
  name: string;
}

/**
 * Props for TestimonialCard component
 */
export interface TestimonialCardProps {
  /** Testimonial data */
  testimonial: Testimonial;

  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Props for PatientTestimonials component
 */
export interface PatientTestimonialsProps {
  /** Array of testimonial data */
  testimonials: Testimonial[];

  /** Optional array of trusted organization names */
  trustedOrganizations?: TrustedOrganization[];

  /** Optional custom badge text (defaults to "Patient Stories") */
  badgeText?: string;

  /** Optional custom title (defaults to "What Our Patients Say") */
  title?: string;

  /** Optional custom description */
  description?: string;

  /** Optional additional CSS classes */
  className?: string;
}
