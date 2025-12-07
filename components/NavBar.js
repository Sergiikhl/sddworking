// components/NavBar.js
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wide">
          SDD Shipping
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/#home" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <Link
            href="/#about"
            className="hover:text-cyan-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/#fleet"
            className="hover:text-cyan-400 transition-colors"
          >
            Fleet
          </Link>
          <Link
            href="/#vision"
            className="hover:text-cyan-400 transition-colors"
          >
            Vision
          </Link>
          <Link
            href="/#mission"
            className="hover:text-cyan-400 transition-colors"
          >
            Mission
          </Link>
          <Link
            href="/#services"
            className="hover:text-cyan-400 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#contact"
            className="hover:text-cyan-400 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/calculator"
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Calculator
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={toggle}
          aria-label="Toggle navigation menu"
          className="flex flex-col items-center justify-center md:hidden"
        >
          <span className="block h-0.5 w-6 bg-white mb-1" />
          <span className="block h-0.5 w-6 bg-white mb-1" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-2 bg-slate-800 p-3 rounded-lg max-w-6xl mx-auto">
          <Link href="/#home" onClick={close}>
            Home
          </Link>
          <Link href="/#about" onClick={close}>
            About
          </Link>
          <Link href="/#fleet" onClick={close}>
            Fleet
          </Link>
          <Link href="/#vision" onClick={close}>
            Vision
          </Link>
          <Link href="/#mission" onClick={close}>
            Mission
          </Link>
          <Link href="/#services" onClick={close}>
            Services
          </Link>
          <Link href="/#contact" onClick={close}>
            Contact
          </Link>
          <Link href="/calculator" onClick={close} className="font-semibold">
            Calculator
          </Link>
        </div>
      )}
    </nav>
  );
}
