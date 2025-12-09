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
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-30 transition-shadow duration-300 ${isScrolled ? "shadow-2xl" : "shadow-md"}`}>
      <div className="bg-slate-900 text-slate-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex items-center">
              <img
                src="/sdd-logo.png"
                alt="SDD Shipping"
                className="h-10 w-auto md:h-11"
              />
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex flex-col items-center justify-center gap-[3px] md:hidden rounded-full p-1.5 transition hover:bg-slate-700/60 active:scale-95"
          >
            <span
              className={`block h-0.5 w-6 rounded-full bg-slate-50 transition-transform duration-200 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-slate-50 transition-opacity duration-150 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-slate-50 transition-transform duration-200 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
          <div className="hidden md:flex gap-5 text-sm font-medium">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link-main relative px-1.5 py-1 transition-transform duration-150 hover:-translate-y-[1px]"
              >
                <span className="relative">
                  {item.label}
                  <span className="pointer-events-none absolute left-0 right-0 -bottom-0.5 h-[2px] scale-x-0 origin-center rounded-full bg-sky-400/90 transition-transform duration-200 group-hover:scale-x-100" />
                </span>
              </Link>
            ))}
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-600/60 bg-slate-900 px-4 pb-3 flex flex-col gap-1">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="nav-link-main py-2 text-slate-50/90"
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
