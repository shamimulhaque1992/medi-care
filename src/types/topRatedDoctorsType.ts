export type AvailabilityStatus = "available" | "busy";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  yearsOfExperience: number;
  location: string;
  availabilityStatus: AvailabilityStatus;
  nextAvailableTime: string;
}

export interface DoctorCardProps {
  doctor: Doctor;
  onConsultationClick?: (doctorId: string) => void;
  className?: string;
}

export interface TopRatedDoctorsProps {
  className?: string;
}
