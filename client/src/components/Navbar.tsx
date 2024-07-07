import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-black text-primary-foreground py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="font-bold text-lg">AgriTwin</span>
        </Link>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Icon for mobile menu can go here */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#" className="hover:bg-black hover:text-white px-3 py-2 rounded" prefetch={false}>
            Home
          </Link>
          <Link href="/Dashboard" className="hover:bg-black hover:text-white px-3 py-2 rounded" prefetch={false}>
            DashBoard
          </Link>
          <Link href="#" className="hover:bg-black hover:text-white px-3 py-2 rounded" prefetch={false}>
            Sensors
          </Link>
          <Link href="#" className="hover:bg-black hover:text-white px-3 py-2 rounded" prefetch={false}>
            User
          </Link>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;






























