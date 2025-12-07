"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 py-4 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-gray-800">
          SDD Shipping
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/#home" className="hover:text-blue-600">Home</Link>
          <Link href="/#about" className="hover:text-blue-600">About</Link>
          <Link href="/#fleet" className="hover:text-blue-600">Fleet</Link>
          <Link href="/#vision" className="hover:text-blue-600">Vision</Link>
          <Link href="/#mission" className="hover:text-blue-600">Mission</Link>
          <Link href="/#services" className="hover:text-blue-600">Services</Link>
          <Link href="/#contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/calculator" className="text-blue-600 font-semibold">
            Calculator
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden flex flex-col items-center"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-50 px-4 py-3 border-t border-gray-200 flex flex-col gap-2 text-gray-700">
          <Link href="/#home" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/#fleet" onClick={() => setOpen(false)}>Fleet</Link>
          <Link href="/#vision" onClick={() => setOpen(false)}>Vision</Link>
          <Link href="/#mission" onClick={() => setOpen(false)}>Mission</Link>
          <Link href="/#services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/calculator" onClick={() => setOpen(false)} className="font-semibold text-blue-600">
            Calculator
          </Link>
        </div>
      )}
    </nav>
  );
}
