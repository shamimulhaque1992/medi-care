import { Activity, Brain, Users, ShieldCheck } from "lucide-react";
import AIVisualization from "./AIVisualization";
import StepCard from "./StepCard";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Symptom Analysis",
      description:
        "Our AI processes your symptoms using advanced natural language understanding to identify potential conditions.",
      icon: Activity,
      bgColor: "bg-rose-100",
      iconColor: "#E11D48",
    },
    {
      number: 2,
      title: "Intelligent Matching",
      description:
        "Machine learning algorithms match your needs with doctors based on expertise, availability, and patient outcomes.",
      icon: Brain,
      bgColor: "bg-purple-100",
      iconColor: "#6D28D9",
    },
    {
      number: 3,
      title: "Personalized Selection",
      description:
        "Receive a curated list of specialists perfectly suited to your unique health profile and preferences.",
      icon: Users,
      bgColor: "bg-emerald-100",
      iconColor: "#059669",
    },
    {
      number: 4,
      title: "Verified Consultation",
      description:
        "Connect with board-certified doctors through secure video consultations with complete privacy.",
      icon: ShieldCheck,
      bgColor: "bg-amber-100",
      iconColor: "#D97706",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center px-6 py-2 mb-6 bg-purple-50 border border-purple-200 rounded-full">
            <span className="text-purple-700 font-medium text-xs md:text-sm">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a0a2e] mb-4 md:mb-6">
            AI-Powered Doctor Matching
          </h2>
          <p className="text-[#6b5b8a] text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
            Experience the future of healthcare with our intelligent system that
            understands your needs and connects you with the perfect specialist.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <AIVisualization />
          </div>

          <div className="order-1 lg:order-2 space-y-4 md:space-y-5">
            {steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
