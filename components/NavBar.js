import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          SDD Shipping
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          className="flex flex-col items-center justify-center md:hidden"
        >
          <span className="block h-0.5 w-6 bg-white mb-1" />
          <span className="block h-0.5 w-6 bg-white mb-1" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/calculator">Calculator</Link>
        </div>
      </div>

      {/* Mobile menu (dropdown) */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-3 bg-slate-800 p-3 rounded-lg">
          <Link href="/calculator" onClick={() => setOpen(false)}>
            Calculator
          </Link>
        </div>
      )}
    </nav>
  );
}
