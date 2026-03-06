import { HeroSection } from "@/components/modules/Home/HeroSection/HeroSection";
import HowItWorks from "@/components/modules/Home/HowItWorks/HowItWorks";
import { PatientTestimonials } from "@/components/modules/Home/Testimonials/PatientTestimonials";
import { TopRatedDoctors } from "@/components/modules/Home/TopRatedDoctors/TopRatedDoctors";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MediCare - Your Health is Our Priority</title>
        <meta
          name="description"
          content="MediCare is a leading healthcare platform providing top-quality medical services."
        />
      </Head>
      <main>
        <HeroSection />
        <HowItWorks />
        <TopRatedDoctors />
        <PatientTestimonials />
      </main>
    </>
  );
}
