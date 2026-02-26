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
import { Bell, User, Menu, X } from "lucide-react";

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
            <div className="text-xl font-bold">
              <span className="text-gray-900">Medi</span>
              <span className="text-purple-600">Match</span>
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
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.label} asChild>
                      <Link
                        href={link.href}
                        className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-base"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="border-t pt-6">
                  {/* Mobile Right side items */}
                  <div className="flex flex-col gap-3">
                    {/* Login Button */}
                    <SheetClose asChild>
                      <Button
                        variant="outline"
                        className="w-full text-gray-700 border-gray-300"
                      >
                        Login
                      </Button>
                    </SheetClose>

                    {/* Profile Button */}
                    <SheetClose asChild>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2">
                        <User size={18} />
                        Dr. Sarah
                      </Button>
                    </SheetClose>
                  </div>
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
