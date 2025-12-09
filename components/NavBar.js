import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/fleet", label: "Fleet" },
  { href: "/vision", label: "Vision" },
  { href: "/mission", label: "Mission" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/calculator", label: "Calculator" },
];

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/">
          <img src="/logo.png" alt="SDD Shipping" className="h-10 w-auto" />
        </Link>
        <ul className="hidden md:flex space-x-8 text-gray-900 font-medium">
          {navItems.map(({ href, label }) => (
            <li key={href} className="relative group">
              <Link href={href}>{label}</Link>
              <span className="absolute inset-0 rounded-lg bg-blue-100 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 -z-10"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
