import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/fleet", label: "Fleet" },
  { href: "/vision", label: "Vision" },
  { href: "/mission", label: "Mission" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/calculator", label: "Calculator" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="SDD Shipping" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-8 text-gray-900 font-medium">
          {navItems.map(({ href, label }) => (
            <li key={href} className="relative group">
              <Link href={href} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
              <span className="absolute inset-0 rounded-lg bg-blue-100 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 -z-10" />
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-7 h-7"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <ul className="space-y-2 text-gray-900 font-medium">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} onClick={() => setIsOpen(false)} className="block py-2">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
