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
    <nav className="navbar-shell sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="SDD Shipping"
            className="h-10 w-auto logo-glow"
          />
        </Link>

        {/* Кнопка мобильного меню */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          className="flex flex-col items-center justify-center md:hidden"
        >
          <span className="block h-0.5 w-6 bg-slate-800 mb-1 rounded" />
          <span className="block h-0.5 w-6 bg-slate-800 mb-1 rounded" />
          <span className="block h-0.5 w-6 bg-slate-800 rounded" />
        </button>

        {/* Меню для десктопа */}
        <div className="hidden md:flex gap-4 text-sm">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link-main"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pb-3 flex flex-col gap-1">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="nav-link-main py-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
