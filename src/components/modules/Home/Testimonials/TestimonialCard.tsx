import { TestimonialCardProps } from "@/types/testimonials";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export function TestimonialCard({
  testimonial,
  className = "",
}: TestimonialCardProps) {
  const { name, role, avatarUrl, quote, rating } = testimonial;

  // Generate array of 5 stars for rating display
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div
      className={`relative bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-3xl p-8 pt-12 h-full flex flex-col ${className}`}
    >
      {/* Quote Icon */}
      <div className="absolute -top-5 left-8 bg-white rounded-xl shadow-lg p-2.5 w-10 h-10 flex items-center justify-center">
        <Quote className="w-5 h-5 text-purple-600 fill-purple-600" />
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-6">
        {stars.map((filled, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              filled
                ? "fill-yellow-400 stroke-yellow-400"
                : "fill-gray-200 stroke-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Quote */}
      <blockquote className="text-gray-900 text-sm leading-relaxed mb-8 flex-1">
        <p>"{quote}"</p>
      </blockquote>

      {/* Patient Info */}
      <div className="flex items-center gap-4 mt-auto">
        <Image
          height={50}
          width={50}
          src={avatarUrl}
          blurDataURL={avatarUrl}
          placeholder="blur"
          quality={85}
          alt={name}
          className="w-12 h-12 rounded-full object-cover shadow-sm"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
          <p className="text-xs text-gray-500 mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}
