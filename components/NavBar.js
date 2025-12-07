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
    <nav className="navbar-3d sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="h-10 w-auto drop-shadow-lg" alt="Logo" />
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          className="flex flex-col items-center justify-center md:hidden"
        >
          <span className="block h-0.5 w-6 bg-white mb-1 rounded" />
          <span className="block h-0.5 w-6 bg-white mb-1 rounded" />
          <span className="block h-0.5 w-6 bg-white rounded" />
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-3d-link"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden navbar-3d px-4 py-3 flex flex-col gap-2">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="nav-3d-link"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
