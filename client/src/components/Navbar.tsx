"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  label: string;
}

function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/Dashboard', label: 'Dashboard' },
    { href: '/Sensors', label: 'Sensors' },
    { href: '#', label: 'User' },
  ];

  return (
    <nav className="bg-black text-primary-foreground py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="font-bold text-lg">AgriTwin</span>
        </Link>
        <div className="md:hidden">
          {/* Mobile menu button */}
        </div>
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-3 py-2 rounded group ${
                isActive(href) ? 'text-lime-300' : 'hover:text-lime-300'
              }`}
              prefetch={false}
            >
              {label}
              <span
                className={`absolute left-0 bottom-0 w-full h-[3px] bg-lime-300 transition-transform duration-300 origin-left ${
                  isActive(href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;