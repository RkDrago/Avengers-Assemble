"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Leftbar = () => {
  const pathname = usePathname(); // Replaces useRouter()

  return (
    <div className="flex flex-col h-full gap-[3rem] md:gap-[6.5rem] w-[.9rem] justify-center items-center fixed rotate-90 md:rotate-0 md:left-0 left-[48%] md:top-0 bottom-[calc(50%-1rem)] z-10">
      <Link href="/" aria-label="Go to Home" className='w-2 h-[3.6rem] relative'>
        <div className={`w-[9rem] md:w-[10.2rem] pentagon-container ${pathname === '/' ? 'active' : ''}`}>
          <div className={`pentagon flex items-end justify-center font-bold text-base pb-1 bg-black text-white ${pathname === '/' ? '' : 'hover:bg-[#4a4a4a]'}` }>
            HOME
          </div>
        </div>
      </Link>
      <Link href="/about" aria-label="Go to About"  className='w-2 h-[3.6rem] relative'>
        <div className={`w-[9rem] md:w-[10.2rem] pentagon-container ${pathname === '/about' ? 'active' : ''}`}>
          <div className={`pentagon flex items-end justify-center font-bold text-base pb-1 bg-black text-white ${pathname === '/about' ? '' : 'hover:bg-[#4a4a4a]'}` }>
            ABOUT
          </div>
        </div>
      </Link>
      <Link href="/contact" aria-label="Go to Contact"  className='w-2 h-[3.6rem] relative'>
        <div className={`w-[9rem] md:w-[10.2rem] pentagon-container ${pathname === '/contact' ? 'active' : ''}`}>
          <div className={`pentagon flex items-end justify-center font-bold text-base pb-1 bg-black text-white ${pathname === '/contact' ? '' : 'hover:bg-[#4a4a4a]'}` }>
            CONTACT
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Leftbar;
