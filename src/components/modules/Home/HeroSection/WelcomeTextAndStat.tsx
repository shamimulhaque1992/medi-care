import React from "react";
import { Button } from "@/components/ui/button";
import { WelcomeTextAndStatProps } from "@/types/heroProps";
import { ArrowRight } from "lucide-react";

const WelcomeTextAndStat = ({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
  stats,
}: WelcomeTextAndStatProps) => {
  const Icon = badge?.icon;
  return (
    <div className="space-y-8 z-10">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-purple-200 rounded-full shadow-sm backdrop-blur-sm">
        <span className="text-purple-700"> {Icon && <Icon />}</span>
        <span className="text-xs sm:text-sm font-medium text-purple-700">
          {badge?.text}
        </span>
      </div>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a0a2e] leading-tight">
          {title.line1}
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a0a2e] leading-tight">
          {title.line2}
        </h1>
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg text-[#6b5b8a] max-w-xl leading-relaxed">
        {description}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          onClick={primaryButton?.onClick}
        >
          {primaryButton?.text}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-purple-200 bg-white hover:bg-purple-50 text-[#1a0a2e] rounded-full shadow-sm"
          onClick={secondaryButton?.onClick}
        >
          {secondaryButton?.text}
        </Button>
      </div>

      {/* Stats */}
      {stats && stats.length > 0 && (
        <div className="flex flex-wrap gap-6 lg:gap-8 pt-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-700">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#6b5b8a] mt-1">
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-purple-200 mx-6 lg:mx-8" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WelcomeTextAndStat;
