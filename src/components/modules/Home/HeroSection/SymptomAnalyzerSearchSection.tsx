import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SymptomAnalyzerSearchSectionProps } from "@/types/heroProps";
import { ArrowRight, CheckCircle2, Search, Sparkles } from "lucide-react";
import React from "react";

const SymptomAnalyzerSearchSection = ({
  showInteractiveCard,
  searchPlaceholder,
  searchValue,
  setSearchValue,
  commonSymptoms,
  notifications,
  primaryButton,
}: SymptomAnalyzerSearchSectionProps) => {
  return (
    <div>
      {showInteractiveCard && (
        <div className="relative z-10">
          <div className="bg-white/70 backdrop-blur-lg border border-white/50 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6">
            {/* Card Header */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1a0a2e]">
                  AI Symptom Analyzer
                </h3>
                <p className="text-sm text-[#6b5b8a] mt-1">
                  Describe how you&lsquo;re feeling
                </p>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
              <Input
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-12 pr-4 py-6 text-base border-purple-200 rounded-2xl focus-visible:ring-purple-600"
              />
            </div>

            {/* Common Symptoms */}
            {commonSymptoms && commonSymptoms.length > 0 && (
              <div className="space-y-3">
                <p className="text-xs text-[#6b5b8a]">Common symptoms:</p>
                <div className="flex flex-wrap gap-2">
                  {commonSymptoms.map((symptom, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-purple-50 hover:bg-purple-100 text-[#6b5b8a] border border-purple-100 rounded-full px-3 py-1 text-xs cursor-pointer transition-colors"
                      onClick={() => setSearchValue(symptom)}
                    >
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Action Button */}
            <Button
              className="w-full bg-linear-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-2xl shadow-lg py-6 group"
              onClick={primaryButton.onClick}
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Find Matching Doctors
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Floating Notification Cards */}
          {notifications && (
            <>
              {/* Match Found Card */}
              {notifications.matchFound && (
                <div className="absolute -left-4 sm:-left-8 bottom-12 sm:-bottom-2.5 bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl shadow-lg p-4 max-w-50 fade-in slide-in-from-left-4 duration-500 animate-[float_4s_ease-in-out_infinite]">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[#1a0a2e]">
                        {notifications.matchFound.title}
                      </h4>
                      <p className="text-xs text-[#6b5b8a] mt-1">
                        {notifications.matchFound.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Online Users Card */}
              {notifications.onlineUsers && (
                <div className="absolute -right-4 sm:-right-8 -top-8 bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl shadow-lg p-4 max-w-50 fade-in slide-in-from-right-4 duration-500 delay-200 animate-[floatCard_4s_ease-in-out_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-purple-300 border-2 border-white rounded-full" />
                      <div className="w-8 h-8 bg-purple-400 border-2 border-white rounded-full" />
                      <div className="w-8 h-8 bg-purple-500 border-2 border-white rounded-full" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6b5b8a]">
                        +{notifications.onlineUsers.count}{" "}
                        {notifications.onlineUsers.text}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SymptomAnalyzerSearchSection;
