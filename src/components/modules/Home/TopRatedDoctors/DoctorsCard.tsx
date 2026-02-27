"use client";
import { DoctorCardProps } from "@/types/topRatedDoctorsType";
import { Clock, MapPin, Star } from "lucide-react";
import Image from "next/image";

export function DoctorCard({
  doctor,
  onConsultationClick,
  className = "",
}: DoctorCardProps) {
  const {
    id,
    name,
    specialty,
    imageUrl,
    rating,
    reviewCount,
    yearsOfExperience,
    location,
    availabilityStatus,
    nextAvailableTime,
  } = doctor;

  const isAvailable = availabilityStatus === "available";

  const handleConsultationClick = () => {
    onConsultationClick?.(id);
  };

  return (
    <div
      className={`bg-white rounded-3xl shadow-[0px_4px_20px_0px_rgba(74,29,150,0.08)] overflow-hidden flex flex-col h-full ${className}`}
    >
      {/* Doctor Image with Status Badge */}
      <div className="relative p-6">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-purple-50">
          <Image
            height={280}
            width={280}
            src={imageUrl}
            blurDataURL={imageUrl}
            quality={85}
            placeholder="blur"
            alt={`Dr. ${name}`}
            className="w-full h-full object-cover"
          />

          {/* Availability Badge */}
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full flex items-center gap-2 ${
              isAvailable ? "bg-emerald-100" : "bg-gray-100"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                isAvailable ? "bg-emerald-500" : "bg-gray-400"
              }`}
            />
            <span
              className={`text-xs font-medium ${
                isAvailable ? "text-emerald-700" : "text-gray-600"
              }`}
            >
              {isAvailable ? "Available" : "Busy"}
            </span>
          </div>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="px-6 pb-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>

        <p className="text-sm font-medium text-purple-700 mb-4">{specialty}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">
              {rating.toFixed(1)}
            </span>
          </div>
          <span className="text-xs text-gray-500">
            ({reviewCount.toLocaleString()} reviews)
          </span>
        </div>

        {/* Experience and Location */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{yearsOfExperience} years experience</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        {/* Footer with Next Available and CTA */}
        <div className="mt-auto pt-4 border-t border-purple-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-gray-500">Next available</span>
            <span className="text-sm font-semibold text-purple-700">
              {nextAvailableTime}
            </span>
          </div>

          <button
            onClick={handleConsultationClick}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 active:scale-[0.98]"
          >
            Start Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
