// components/NavBar.js
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/fleet", label: "Fleet" },
              { href: "/vision", label: "Vision" },
              { href: "/mission", label: "Mission" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
              { href: "/calculator", label: "Calculator" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
