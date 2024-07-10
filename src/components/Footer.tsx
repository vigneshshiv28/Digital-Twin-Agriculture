"use client";
import React from 'react';
import Link from 'next/link';  

function Footer() {
  return (
    <div>
      <footer className="border-t bg-black">
        <div className="container flex items-center justify-between px-4 py-4 md:px-6">
          <p className="text-sm text-gray-300 text-muted-foreground">&copy; 2024 Agri Twin. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-white hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm text-white hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-sm text-white hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
      
  )
}

export default Footer;

