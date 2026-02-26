import { circularSvgIcon } from "@/assets/images/svg/svgPaths";
import {
  Heart,
  Pill,
  Dna,
  Stethoscope,
  Activity,
  Brain,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

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

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Decorative Visualization */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-[568px] mx-auto">
              {/* Main Card */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-lg"
                style={{
                  background:
                    "linear-gradient(136.236deg, rgb(245, 240, 255) 25%, rgb(237, 229, 255) 95.711%)",
                  paddingBottom: "95.77%", // Aspect ratio 568/544
                }}
              >
                <div className="absolute inset-0 p-4 md:p-6 lg:p-8">
                  {/* Circular Visualization */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Outer dashed circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[85%] h-[85%] border-2 border-[#b8a0e0] border-dashed rounded-full"></div>
                    </div>

                    {/* Inner solid circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[65%] h-[65%] border-2 border-[#d4c5f0] rounded-full"></div>
                    </div>

                    {/* Center circle with glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-[52%] h-[52%] rounded-full flex items-center justify-center"
                        style={{
                          boxShadow: "0px 0px 40px 0px rgba(109,40,217,0.15)",
                        }}
                      >
                        {/* Center Icon */}
                        <div className="w-12 h-12 md:w-16 md:h-16 text-white">
                          <svg
                            className="w-full h-full"
                            fill="none"
                            viewBox="0 0 64 64"
                          >
                            <g>
                              <path
                                d={circularSvgIcon.p8281980}
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <path
                                d={circularSvgIcon.p31beed00}
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <path
                                d={circularSvgIcon.p35b8e8c0}
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <path
                                d={circularSvgIcon.p1e89ec00}
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <path
                                d={circularSvgIcon.p291a4680}
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <path
                                d={circularSvgIcon.p1dd87600}
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <path
                                d={circularSvgIcon.p3ef6b400}
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <path
                                d={circularSvgIcon.p48d2a00}
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <path
                                d={circularSvgIcon.p30c0e100}
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Floating Icons */}
                    <FloatingIcon
                      emoji="🩺"
                      className="absolute top-[35%] right-[12%]"
                    />
                    <FloatingIcon
                      emoji="💊"
                      className="absolute top-[23%] right-[20%]"
                      size="lg"
                    />
                    <FloatingIcon
                      emoji="❤️"
                      className="absolute top-[16%] right-[28%]"
                      size="lg"
                    />
                    <FloatingIcon
                      emoji="🧬"
                      className="absolute top-[46%] left-[5%]"
                    />
                  </div>

                  {/* Stats Bar at bottom */}
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                    <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl px-4 py-4 md:px-6 md:py-5">
                      <div className="flex items-center justify-around">
                        <div className="text-center">
                          <p className="text-purple-700 font-bold text-base md:text-lg">
                            99.2%
                          </p>
                          <p className="text-[#6b5b8a] text-[10px] md:text-xs">
                            Accuracy
                          </p>
                        </div>
                        <div className="h-8 w-px bg-[#d4c5f0]"></div>
                        <div className="text-center">
                          <p className="text-purple-700 font-bold text-base md:text-lg">
                            &lt;2s
                          </p>
                          <p className="text-[#6b5b8a] text-[10px] md:text-xs">
                            Response
                          </p>
                        </div>
                        <div className="h-8 w-px bg-[#d4c5f0]"></div>
                        <div className="text-center">
                          <p className="text-purple-700 font-bold text-base md:text-lg">
                            24/7
                          </p>
                          <p className="text-[#6b5b8a] text-[10px] md:text-xs">
                            Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-5">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FloatingIconProps {
  emoji: string;
  className?: string;
  size?: "sm" | "lg";
}

function FloatingIcon({
  emoji,
  className = "",
  size = "sm",
}: FloatingIconProps) {
  const sizeClasses =
    size === "lg"
      ? "w-14 h-14 md:w-[68px] md:h-[68px]"
      : "w-12 h-12 md:w-14 md:h-14";

  return (
    <div
      className={`bg-white rounded-full shadow-lg flex items-center justify-center ${sizeClasses} ${className}`}
      style={{
        boxShadow: "0px 4px 20px 0px rgba(74,29,150,0.08)",
      }}
    >
      <span className="text-xl md:text-2xl">{emoji}</span>
    </div>
  );
}

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
}

interface StepCardProps {
  step: Step;
}

function StepCard({ step }: StepCardProps) {
  const Icon = step.icon;

  return (
    <div className="bg-[#fafafa] rounded-2xl p-4 md:p-6 transition-all hover:shadow-md group">
      <div className="flex items-start gap-4 md:gap-6">
        {/* Icon */}
        <div className={`${step.bgColor} rounded-xl p-3 flex-shrink-0`}>
          <Icon
            className="w-6 h-6"
            style={{ color: step.iconColor }}
            strokeWidth={2}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-700 font-semibold text-xs">
                  {step.number}
                </span>
              </div>
              <h3 className="font-semibold text-[#1a0a2e] text-sm md:text-base">
                {step.title}
              </h3>
            </div>
            <ArrowRight
              className="w-5 h-5 text-[#B8A0E0] flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
              strokeWidth={2}
            />
          </div>
          <p className="text-[#6b5b8a] text-xs md:text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}
