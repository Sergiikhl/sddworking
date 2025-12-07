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
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Логотип / бренд */}
       <Link href="/" className="flex items-center gap-2">
  <img src="/logo.png" className="h-8 w-auto" alt="Logo" />
</Link>
        {/* Кнопка для мобильного меню */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          className="flex flex-col items-center justify-center md:hidden"
        >
          <span className="block h-0.5 w-6 bg-gray-800 mb-1" />
          <span className="block h-0.5 w-6 bg-gray-800 mb-1" />
          <span className="block h-0.5 w-6 bg-gray-800" />
        </button>

        {/* Меню для десктопа */}
        <div className="hidden md:flex gap-6 text-sm text-gray-700">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 flex flex-col gap-2">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 py-1"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
