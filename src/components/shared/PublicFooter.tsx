"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Heart, Activity } from "lucide-react";
import { FooterProps } from "@/types/footerTypes";
import { footerSections, socialLinks } from "./uiData";

export function PublicFooter({
  brandName = "MediMatch",
  brandDescription = "Revolutionizing healthcare through AI-powered doctor matching. Quality care, accessible to everyone.",
  email = "hello@medimatch.com",
  phone = "1-800-MEDIMATCH",
  location = "San Francisco, CA",
  copyrightText = "© 2024 MediMatch. All rights reserved.",
  newsletterTitle = "Stay Updated",
  newsletterDescription = "Get the latest health tips and platform updates.",
  onSubscribe,
  className = "",
}: FooterProps) {
  const [emailInput, setEmailInput] = useState("");

  const handleSubscribe = () => {
    if (emailInput.trim()) {
      onSubscribe?.(emailInput);
      setEmailInput("");
    }
  };

  return (
    <footer className={`bg-[#1a0a2e] text-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-700 rounded-xl p-2.5">
                <div className="relative w-5 h-5">
                  <Heart
                    className="w-5 h-5 text-white absolute"
                    strokeWidth={2}
                  />
                  <Activity
                    className="w-5 h-5 text-white absolute"
                    strokeWidth={2}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-semibold">Medi</span>
                <span className="text-lg font-semibold text-purple-400">
                  Care
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              {brandDescription}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{location}</span>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold mb-5">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold mb-5">{newsletterTitle}</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {newsletterDescription}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSubscribe()}
                className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
              />
              <button
                onClick={handleSubscribe}
                className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">{copyrightText}</p>

            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  >
                    <span className="text-sm font-semibold">{social.icon}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
