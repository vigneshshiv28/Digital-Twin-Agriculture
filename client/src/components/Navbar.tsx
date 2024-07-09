"use client";
import React from 'react';
import Link from 'next/link';

function Navbar() {
  const [selected, setSelected] = React.useState('Home');

  return (
    <nav className="bg-black text-primary-foreground py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="font-bold text-lg">AgriTwin</span>
        </Link>
        <div className="md:hidden">
          {/*<button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
  </button>*/}
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/" onClick={() => setSelected("Home")} className={`relative px-3 py-2 rounded group ${selected === 'Home' ? 'text-lime-300' : 'hover:text-lime-300'}`} prefetch={false}>
            Home
            <span className={`absolute left-0 bottom-0 w-full h-[3px] bg-lime-300 transition-transform duration-300 origin-left ${selected === 'Home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link href="/Dashboard" onClick={() => setSelected("Dashboard")} className={`relative px-3 py-2 rounded group ${selected === 'Dashboard' ? 'text-lime-300' : 'hover:text-lime-300'}`} prefetch={false}>
            Dashboard
            <span className={`absolute left-0 bottom-0 w-full h-[3px] bg-lime-300 transition-transform duration-300 origin-left ${selected === 'Dashboard' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link href="/Sensors" onClick={() => setSelected("Sensors")} className={`relative px-3 py-2 rounded group ${selected === 'Sensors' ? 'text-lime-300' : 'hover:text-lime-300'}`} prefetch={false}>
            Sensors
            <span className={`absolute left-0 bottom-0 w-full h-[3px] bg-lime-300 transition-transform duration-300 origin-left ${selected === 'Sensors' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link href="#" onClick={() => setSelected("User")} className={`relative px-3 py-2 rounded group ${selected === 'User' ? 'text-lime-300' : 'hover:text-lime-300'}`} prefetch={false}>
            User
            <span className={`absolute left-0 bottom-0 w-full h-[3px] bg-lime-300 transition-transform duration-300 origin-left ${selected === 'User' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;






























