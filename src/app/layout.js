"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Blog App</title>
      </head>
      <body>
        <nav className="bg-gray-800 p-4 text-white">
          <ul className="flex space-x-4">
            <li className={pathname === '/' ? 'font-bold' : ''}>
              <Link href="/">Home</Link>
            </li>
            <li className={pathname === '/about' ? 'font-bold' : ''}>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
