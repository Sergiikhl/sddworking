// components/NavBar.js
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Логотип / название */}
        <Link href="/" className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-lg bg-cyan-500/80" />
          <span className="text-sm font-semibold tracking-wide text-slate-100">
            SDD Shipping
          </span>
        </Link>

        {/* Десктоп меню */}
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/calculator" className="hover:text-white">
            Big-bag calculator
          </Link>
        </nav>

        {/* Кнопка-бургер (мобилка) */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-100 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-400 md:hidden"
        >
          {/* Комментарий должен быть внутри JSX, а не между атрибутами */}
          <span className="sr-only">Open main menu</span>
          <span className="block h-0.5 w-5 bg-slate-200 mb-1" />
          <span className="block h-0.5 w-5 bg-slate-200 mb-1" />
          <span className="block h-0.5 w-5 bg-slate-200" />
        </button>
      </div>

      {/* Выпадающее меню на мобилке */}
      {open && (
        <nav className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-4 py-2 text-sm text-slate-200">
            <Link
              href="/"
              className="py-2"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/calculator"
              className="py-2"
              onClick={() => setOpen(false)}
            >
              Big-bag calculator
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
