import { HeroSection } from "@/components/modules/Home/HeroSection/HeroSection";
import HowItWorks from "@/components/modules/Home/HowItWorks/HowItWorks";
import { PatientTestimonials } from "@/components/modules/Home/Testimonials/PatientTestimonials";
import { TopRatedDoctors } from "@/components/modules/Home/TopRatedDoctors/TopRatedDoctors";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HowItWorks />
      <TopRatedDoctors />
      <PatientTestimonials />
    </div>
  );
}
