import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-30 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 bg-gradient-to-b from-blue-100/80 to-white/80 backdrop-blur-lg">
        <Link href="/" className="flex items-center gap-3">
          <img src="/sdd-logo.png" alt="SDD Shipping" className="h-10 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-800 hover:underline underline-offset-4 decoration-blue-400">Home</Link>
          <Link href="/calculator" className="text-gray-800 hover:underline underline-offset-4 decoration-blue-400">Calculator</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg px-4 pt-2 pb-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/calculator" onClick={() => setOpen(false)}>Calculator</Link>
        </div>
      )}
    </nav>
  );
}
