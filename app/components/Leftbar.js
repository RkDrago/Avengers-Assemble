"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Leftbar = () => {
  const pathname = usePathname(); // Replaces useRouter()

  return (
    <div className="flex flex-col h-full gap-[6.5rem] w-[7.3svw] justify-center fixed -left-[4.7rem] top-0 z-10">
      <Link href="/" aria-label="Go to Home">
        <div className={`pentagon-container ${pathname === '/' ? 'active' : ''}`}>
          <div className={`pentagon flex items-end justify-center font-bold text-base pb-1 bg-black text-white ${pathname === '/' ? '' : 'hover:bg-[#4a4a4a]'}` }>
            HOME
          </div>
        </div>
      </Link>
      <Link href="/about" aria-label="Go to About">
        <div className={`pentagon-container ${pathname === '/about' ? 'active' : ''}`}>
          <div className={`pentagon flex items-end justify-center font-bold text-base pb-1 bg-black text-white ${pathname === '/about' ? '' : 'hover:bg-[#4a4a4a]'}` }>
            ABOUT
          </div>
        </div>
      </Link>
      <Link href="/contact" aria-label="Go to Contact">
        <div className={`pentagon-container ${pathname === '/contact' ? 'active' : ''}`}>
          <div className={`pentagon flex items-end justify-center font-bold text-base pb-1 bg-black text-white ${pathname === '/contact' ? '' : 'hover:bg-[#4a4a4a]'}` }>
            CONTACT
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Leftbar;
