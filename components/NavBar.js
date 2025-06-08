import Link from 'next/link';
import Image from 'next/image';

const routes = [
  ['/',          'Home'],
  ['/about',     'About Us'],
  ['/fleet',     'Fleet'],
  ['/vision',    'Vision'],
  ['/mission',   'Mission'],
  ['/services',  'Services'],
  ['/contact',   'Contact'],
  ['/calculator','Calculator'],
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-card">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-3">
        <Link href="/" className="shrink-0" aria-label="Home">
          <Image src="/logo.png" alt="SDD Shipping" width={140} height={40} className="object-contain" priority />
        </Link>

        <ul className="hidden gap-8 md:flex">
          {routes.map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="text-sm font-medium text-neutral-700 hover:text-brand">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}