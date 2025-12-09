import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-30 transition-shadow duration-300 ${
        isScrolled ? "shadow-xl" : "shadow-md"
      }`}
    >
      <div className="bg-gradient-to-b from-blue-100/80 to-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
          {/* Logo with new image */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/sdd-logo.png"
              alt="SDD Shipping"
              className="h-10 w-auto md:h-12"
            />
          </Link>
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex flex-col items-center justify-center gap-[3px] md:hidden rounded-full p-1.5 transition hover:bg-slate-200/70 active:scale-95"
          >
            <span
              className={`block h-0.5 w-6 rounded-full bg-slate-800 transition-transform duration-200 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-slate-800 transition-opacity duration-150 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-slate-800 transition-transform duration-200 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 text-base font-medium">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link-main relative px-2 py-1 transition-transform duration-150 hover:-translate-y-[1px]"
              >
                <span className="relative group">
                  {item.label}
                  <span className="pointer-events-none absolute left-0 right-0 -bottom-0.5 h-[2px] scale-x-0 origin-center rounded-full bg-gradient-to-r from-blue-400 to-sky-500 transition-transform duration-200 group-hover:scale-x-100" />
                </span>
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white/90 px-4 pb-3 flex flex-col gap-1">
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
      </div>
    </nav>
  );
}
