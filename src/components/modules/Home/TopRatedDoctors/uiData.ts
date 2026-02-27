import { Doctor } from "@/types/topRatedDoctorsType";

export const sampleDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Mitchell",
    specialty: "Cardiologist",
    imageUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 234,
    yearsOfExperience: 15,
    location: "New York, NY",
    availabilityStatus: "available",
    nextAvailableTime: "10:30 AM",
  },
  {
    id: "2",
    name: "Dr. James Chen",
    specialty: "Neurologist",
    imageUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 189,
    yearsOfExperience: 12,
    location: "Los Angeles, CA",
    availabilityStatus: "available",
    nextAvailableTime: "2:00 PM",
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatologist",
    imageUrl:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 312,
    yearsOfExperience: 10,
    location: "Chicago, IL",
    availabilityStatus: "busy",
    nextAvailableTime: "Tomorrow",
  },
  {
    id: "4",
    name: "Dr. Michael Park",
    specialty: "Psychiatrist",
    imageUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 156,
    yearsOfExperience: 8,
    location: "Boston, MA",
    availabilityStatus: "available",
    nextAvailableTime: "11:00 AM",
  },
];
