
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow z-50">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-800">Home</Link>
          <Link href="/about" className="text-gray-800">About</Link>
          <Link href="/calculator" className="text-gray-800">Calculator</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block text-gray-800">Home</Link>
          <Link href="/about" className="block text-gray-800">About</Link>
          <Link href="/calculator" className="block text-gray-800">Calculator</Link>
        </div>
      )}
    </nav>
  );
}
