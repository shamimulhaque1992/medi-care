import { StepCardProps } from "@/types/howItWorksProps";
import { ArrowRight } from "lucide-react";

export default function StepCard({ step }: StepCardProps) {
  const Icon = step.icon;

  return (
    <div className="bg-[#fafafa] rounded-2xl p-4 md:p-6 transition-all hover:shadow-md group">
      <div className="flex items-start gap-4 md:gap-6">
        <div className={`${step.bgColor} rounded-xl p-3 flex-shrink-0`}>
          <Icon
            className="w-6 h-6"
            style={{ color: step.iconColor }}
            strokeWidth={2}
          />
        </div>

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
