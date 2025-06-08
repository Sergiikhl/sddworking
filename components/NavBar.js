import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-16 px-4">
        {/* ЛОГОТИП */}
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* БУРГЕР-КНОПКА */}
        <button
          className="sm:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* НАВИГАЦИЯ — десктоп */}
        <div className="hidden sm:flex space-x-4">
          <Link href="/" className="text-sm text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-sm text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/calculator" className="text-sm text-gray-700 hover:text-blue-600">Calculator</Link>
        </div>
      </div>

      {/* МЕНЮ ДЛЯ МОБИЛОК */}
      {open && (
        <div className="sm:hidden bg-white px-4 pb-4">
          <Link href="/" className="block py-2 text-sm text-gray-800">Home</Link>
          <Link href="/about" className="block py-2 text-sm text-gray-800">About</Link>
          <Link href="/calculator" className="block py-2 text-sm text-gray-800">Calculator</Link>
        </div>
      )}
    </nav>
  );
}
