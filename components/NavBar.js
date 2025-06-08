import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/fleet", label: "Fleet" },
    { href: "/vision", label: "Vision" },
    { href: "/mission", label: "Mission" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/calculator", label: "Calculator" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* ЛОГОТИП */}
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* БУРГЕР ДЛЯ МОБИЛЬНОЙ ВЕРСИИ СПРАВА */}
        <div className="flex items-center space-x-4">
          {/* МЕНЮ ДЛЯ ДЕСКТОПА */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map(({ href, label }) => (
              <Link key={href} href={href} className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                {label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* МЕНЮ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2">
            {menuItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="block text-gray-700 hover:text-blue-600 text-base font-medium" onClick={() => setIsOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
