"use client";

import Link from "next/link";
import { useState } from "react";
//import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#1f2937] border-b border-[#f8f8f8] sticky top-0 z-10 py-4">
      <div className="mx-auto max-w-7xl px-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-3">
            <img
              src="CV-logo.png"
              alt="Profile Picture"
              className="h-12 w-12 rounded-full object-cover md:h-17 md:w-17"
            />
            <div>
              <h1 className="text-xl font-bold md:text-2xl text-[#ff00ff]">
                Nate Perry
              </h1>
              <p className="text-sm md:text-base">Software Engineer</p>
            </div>
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="w-6 h-1 bg-[#ffff00]"></span>
          <span className="w-6 h-1 bg-[#ffff00]"></span>
          <span className="w-6 h-1 bg-[#ffff00]"></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          {[
            "About",
            "Skills",
            "Experience",
            "Projects",
            "Education",
            "Contact",
          ].map((section) => (
            <Link
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-[#ffff00] hover:text-[#f8f8f8] transition-colors duration-200"
            >
              {section}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#1f2937] absolute top-full left-0 w-full z-10 border-b border-[#f8f8f8]">
          <div className="flex flex-col gap-2 px-4 py-4">
            {[
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Education",
              "Contact",
            ].map((section) => (
              <Link
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-[#ffff00] hover:text-[#f8f8f8] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {section}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
