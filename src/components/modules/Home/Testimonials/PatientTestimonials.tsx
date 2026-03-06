import { TestimonialCard } from "./TestimonialCard";
import {
  sampleTestimonials,
  testimonialsUiData,
  trustedOrganizations,
} from "./uiData";

export function PatientTestimonials() {
  const { badgeText, title, description, className } = testimonialsUiData;
  return (
    <section className={`w-full py-12 md:py-16 lg:py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-6 py-2 bg-purple-50 border border-purple-100 rounded-full mb-4">
            <span className="text-sm font-medium text-purple-700">
              {badgeText}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sampleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Trusted Organizations Footer */}
        {trustedOrganizations.length > 0 && (
          <div className="border-t border-purple-100 pt-12">
            <p className="text-center text-sm text-gray-500 mb-8">
              Trusted by leading healthcare organizations
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {trustedOrganizations.map((org) => (
                <div
                  key={org.id}
                  className="text-gray-500 font-semibold text-base md:text-lg"
                >
                  {org.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
