"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Bell, User, Menu, X, Heart, Activity } from "lucide-react";

const PublicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Consultation", href: "/consultation" },
    { label: "Health plans", href: "/health-plans" },
    { label: "Diagnostics", href: "/diagnostics" },
    { label: "NGOs", href: "/ngos" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-xl font-bold">
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
              <div className="flex">
                <span className="text-gray-900">Medi</span>
                <span className="text-purple-600">Care</span>
              </div>
            </div>
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side items - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-4">
            {/* Notification Bell */}
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Login Button */}
            <Button variant="outline" className="text-gray-700 border-gray-300">
              Login
            </Button>

            {/* Profile Button */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
              <User size={18} />
              <span className="hidden sm:inline">Dr. Sarah</span>
            </Button>
          </div>

          {/* Mobile Menu - Visible on mobile only */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b">
                  <div className="flex items-center gap-2 text-xl font-bold">
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
                    <div className="flex">
                      <span className="text-gray-900">Medi</span>
                      <span className="text-purple-600">Care</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <SheetClose key={link.label} asChild>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all font-medium text-base px-4 py-3 rounded-xl"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Spacer */}
                <div className="flex-1"></div>

                {/* Bottom Actions */}
                <div className="border-t pt-6 space-y-3">
                  {/* Notification */}
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-all">
                    <div className="relative">
                      <Bell size={20} />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </div>
                    <span className="font-medium">Notifications</span>
                  </button>

                  {/* Login Button */}
                  <SheetClose asChild>
                    <Button
                      variant="outline"
                      className="w-full text-purple-600 border-purple-200 hover:bg-purple-50 h-12 rounded-xl font-medium"
                    >
                      Login
                    </Button>
                  </SheetClose>

                  {/* Profile Button */}
                  <SheetClose asChild>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2 h-12 rounded-xl font-medium">
                      <User size={18} />
                      Register
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
