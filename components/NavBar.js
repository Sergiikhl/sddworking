// components/NavBar.js
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={menuOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu links for desktop */}
          <div className="hidden sm:flex sm:space-x-4">
            {["Home", "About", "Fleet", "Vision", "Mission", "Services", "Contact", "Calculator"].map((page) => (
              <Link key={page} href={`/${page.toLowerCase()}`} className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                {page}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
          {["Home", "About", "Fleet", "Vision", "Mission", "Services", "Contact", "Calculator"].map((page) => (
            <Link
              key={page}
              href={`/${page.toLowerCase()}`}
              className="block text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {page}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
