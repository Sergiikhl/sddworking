import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Fleet", path: "/fleet" },
    { name: "Vision", path: "/vision" },
    { name: "Mission", path: "/mission" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Calculator", path: "/calculator" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
          <div className="hidden sm:flex space-x-4">
            {links.map((link) => (
              <Link key={link.name} href={link.path}>
                <span className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-white border-t px-4 pt-2 pb-4 space-y-1">
          {links.map((link) => (
            <Link key={link.name} href={link.path}>
              <div className="block text-gray-700 px-3 py-2 rounded-md text-base font-medium">
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
