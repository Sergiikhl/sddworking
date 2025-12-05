// components/NavBar.js
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Fleet", href: "/#fleet" },
  { label: "Vision", href: "/#vision" },
  { label: "Mission", href: "/#mission" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
  { label: "Calculator", href: "/calculator" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Лого / название */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border border-cyan-400 flex items-center justify-center text-xs font-bold">
            SDD
          </div>
          <span className="text-sm sm:text-base font-semibold tracking-wide">
            SDD Shipping
          </span>
        </Link>

        {/* Десктоп-меню */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-2 py-1 rounded-md hover:bg-slate-800 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Кнопка бургер (мобилка) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden border border-slate-700"
          aria-label="Toggle navigation menu"
        >
          {/* этот кусок кода гарантирует что кнопка корректно отрисовывается, а не ломает вёрстку */}
          <span className="block h-0.5 w-5 bg-slate-200 mb-1" />
          <span className="block h-0.5 w-5 bg-slate-200 mb-1" />
          <span className="block h-0.5 w-5 bg-slate-200" />
        </button>
      </nav>

      {/* Мобильное меню */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 border-b border-slate-900 last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
