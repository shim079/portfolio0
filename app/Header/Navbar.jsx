import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SpotlightCard from './SpotlightCard';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // Scrolling down
            } else {
                setShowNavbar(true); // Scrolling up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
       <div>
    {/* LEFT: SHAIMA Logo */}
    <SpotlightCard
      className={`left-3 w-[23vw] sm:w-[220px] h-20 rounded-r-3xl fixed top-7 z-50 flex items-center px-6 sm:px-10 md:px-16 backdrop-blur-md bg-[#4e4e5a62] transition-transform duration-300 ease-in-out ${
        showNavbar ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="text-[rgba(255,_0,_182,_0.15)] text-[1rem] sm:text-[1rem] md:text-3xl lg:text-3xl font-light font-sans">
        SHAIMA
      </div>
    </SpotlightCard>

    {/* RIGHT: Navigation Links */}
    <SpotlightCard
      className={`right-3 w-[65vw] sm:w-[500px] h-20 rounded-l-3xl fixed top-7 z-50 flex items-center px-6 sm:px-6 md:px-9 backdrop-blur-md bg-[#4e4e5a62] transition-transform duration-300 ease-in-out ${
        showNavbar ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className=" md:flex ml-auto space-x-1 font-light font-sans text-[0.65rem] sm:text-[1rem] md:text-sm lg:text-base">
                    <a href='./' className='text-white  hover:text-black rounded-lg p-2'>
                        Home
                    </a>
                    <Link href='./Services' className='text-white  hover:text-black rounded-lg p-2'>
                        Services
                    </Link>
                    <a href='./Project' className='text-white  hover:text-black rounded-lg p-2'>
                        Projects
                    </a>
                    <a href='./About' className='text-white  hover:text-black rounded-lg p-2'>
                        About
                    </a>
                    <a href='./Contact' className='text-white  hover:text-black rounded-lg p-2'>
                        Contact
                    </a>
                </div>
            </SpotlightCard>
        </div>
    );
}
