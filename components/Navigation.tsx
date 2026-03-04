"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "프로젝트", href: "/#projects" },
  { label: "소개", href: "/#about" },
  { label: "경력", href: "/#career" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold text-gray-900 tracking-tight">조민택</Link>
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
