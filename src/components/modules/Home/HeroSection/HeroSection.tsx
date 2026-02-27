"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { HeroSectionProps } from "@/types/heroProps";
import WelcomeTextAndStat from "./WelcomeTextAndStat";
import SymptomAnalyzerSearchSection from "./SymptomAnalyzerSearchSection";

export function HeroSection({
  badge = {
    icon: <Sparkles className="w-4 h-4" />,
    text: "AI-Powered Healthcare",
  },
  title = {
    line1: "Find Your Perfect",
    line2: "Doctor Match",
  },
  description = "Our intelligent AI analyzes your symptoms and connects you with the most qualified specialists. Experience healthcare that truly understands you.",
  primaryButton = {
    text: "Start Consultation",
  },
  secondaryButton = {
    text: "Learn More",
  },
  stats = [
    { value: "50K+", label: "Happy Patients" },
    { value: "2K+", label: "Expert Doctors" },
    { value: "98%", label: "Satisfaction" },
  ],
  searchPlaceholder = "E.g., I've been having headaches and dizziness...",
  commonSymptoms = [
    "Headache",
    "Fatigue",
    "Chest pain",
    "Skin rash",
    "Anxiety",
  ],
  showInteractiveCard = true,
  notifications = {
    matchFound: {
      title: "Match Found!",
      subtitle: "3 specialists available",
    },
    onlineUsers: {
      count: 12,
      text: "online now",
    },
  },
}: HeroSectionProps) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-full relative">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
        }}
      />
      {/* Your Content/Components */}
      <section className="relative w-full min-h-screen bg-linear-to-br from-purple-50/50 via-white to-violet-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Main Content */}
            <WelcomeTextAndStat
              badge={badge}
              title={title}
              description={description}
              primaryButton={primaryButton}
              secondaryButton={secondaryButton}
              stats={stats}
            />

            {/* Right Column - Interactive Card */}
            <SymptomAnalyzerSearchSection
              searchPlaceholder={searchPlaceholder}
              commonSymptoms={commonSymptoms}
              showInteractiveCard={showInteractiveCard}
              notifications={notifications}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              primaryButton={primaryButton}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
