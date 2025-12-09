import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/">
          <img src="/sdd-logo.png" alt="SDD Shipping" className="h-6 w-auto" />
        </Link>
        <ul className="hidden md:flex space-x-8 text-gray-900 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/fleet">Fleet</Link></li>
          <li><Link href="/vision">Vision</Link></li>
          <li><Link href="/mission">Mission</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/calculator">Calculator</Link></li>
        </ul>
      </div>
    </nav>
  );
}
