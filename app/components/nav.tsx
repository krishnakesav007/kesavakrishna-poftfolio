"use client";

import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Scenarios", href: "#scenarios" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Name */}
        <Link href="#home" className="text-xl font-bold text-white tracking-wide">
          Krishna <span className="text-cyan-400">Portfolio</span>
        </Link>

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Top Right Resume Button */}
        <a
          href="/resume.pdf"
          download="Krishna_Kesav_Resume.pdf"
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/50 bg-purple-950/30 text-xs font-semibold text-white hover:bg-purple-900/50 transition shadow-sm shadow-purple-500/20"
        >
          <FaDownload className="text-xs text-purple-300" />
          Resume
        </a>
      </div>
    </header>
  );
}