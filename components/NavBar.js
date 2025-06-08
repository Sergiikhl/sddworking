import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
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
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Burger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="block md:hidden p-2 focus:outline-none"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-gray-800 hover:text-indigo-600">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="block md:hidden px-4 pb-4 bg-white shadow">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <div className="py-2 text-gray-800 border-b">{link.label}</div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
