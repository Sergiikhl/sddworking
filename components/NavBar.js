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
    <nav className="backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="h-10 w-auto drop-shadow-lg" alt="Logo" />
        </Link>

        {/* MOBILE MENU BUTTON */}
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
              className="
                text-white 
                font-semibold 
                tracking-wide 
                px-3 py-1 
                rounded-md
                transition-all 
                duration-200
                hover:bg-white/20
                hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.45)]
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-white/20 bg-white/10 backdrop-blur-xl px-4 py-3 flex flex-col gap-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                text-white 
                font-medium
                py-2 px-2 
                rounded-md
                hover:bg-white/20
                transition-all
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
