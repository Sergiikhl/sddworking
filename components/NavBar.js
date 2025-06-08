import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Desktop links */}
          <div className="hidden sm:flex space-x-4">
            {["Home", "About Us", "Fleet", "Vision", "Mission", "Services", "Contact", "Calculator"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(/ /g, "")}`}>
                <span className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="sm:hidden bg-white px-4 pt-2 pb-4 space-y-1">
          {["Home", "About Us", "Fleet", "Vision", "Mission", "Services", "Contact", "Calculator"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(/ /g, "")}`}>
              <div className="block text-gray-700 px-3 py-2 rounded-md text-base font-medium">
                {item}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
