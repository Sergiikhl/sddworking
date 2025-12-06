// components/NavBar.js

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-slate-800 bg-slate-900 text-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Логотип */}
        <Link href="/" className="text-lg font-semibold">
          SDD Shipping
        </Link>

        {/* Кнопка бургер */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          className="flex flex-col"
        >
          <span className="block h-0.5 w-6 bg-slate-200 mb-1" />
          <span className="block h-0.5 w-6 bg-slate-200" />
        </button>
      </div>

      {/* Меню */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-900 px-4 py-3">
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/calculator" className="hover:text-cyan-400">
                Calculator
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cyan-400">
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
