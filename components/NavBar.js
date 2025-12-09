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
          <img src="/logo.png" alt="SDD Shipping" className="h-6 w-auto" />
        </Link>
        <ul className="hidden md:flex space-x-8 text-gray-900 font-medium">
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              <Link href={item.href}>{item.label}</Link>
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
