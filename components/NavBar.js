import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center py-3 px-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/sdd-logo.png"
            alt="SDD Shipping"
            className="h-12 w-auto"
          />
        </Link>
      </div>
    </nav>
  );
}
