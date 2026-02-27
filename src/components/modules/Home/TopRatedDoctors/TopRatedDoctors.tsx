"use client";
import { TopRatedDoctorsProps } from "@/types/topRatedDoctorsType";
import { DoctorCard } from "./DoctorsCard";
import { sampleDoctors } from "./uiData";

export function TopRatedDoctors({ className = "" }: TopRatedDoctorsProps) {
  const handleConsultationClick = (doctorId: string) => {
    console.log(`Starting consultation with doctor ID: ${doctorId}`);
  };

  const handleViewAllClick = () => {
    console.log("View all doctors clicked");
  };

  return (
    <div className="min-h-screen w-full bg-[#fefcff] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgb(173 216 230 / 6%), #00000000 60%), 
        radial-gradient(circle at 70% 30%, rgb(255 241 241 / 40%), #cf9a9a00 60%)`,
        }}
      />
      <section className={`w-full py-12 md:py-16 lg:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-white border border-purple-100 rounded-full mb-4">
              <span className="text-sm font-medium text-purple-700">
                Our Specialists
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Top-Rated Doctors
            </h2>

            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with board-certified specialists who are ready to provide
              exceptional care tailored to your unique health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {sampleDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onConsultationClick={handleConsultationClick}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleViewAllClick}
              className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-xl border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              View All Doctors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
