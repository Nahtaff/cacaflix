'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>
      {/* Full-width container with padding and flexbox */}
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 w-full">
        {/* Left side: Logo and Primary Navigation */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold font-netflix text-red-600">
              CACAFLIX
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="ml-10 hidden md:block">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-gray-300 px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="/tv-shows" className="text-white hover:text-gray-300 px-3 py-2 text-base font-medium">
                TV Shows
              </Link>
              <Link href="/movies" className="text-white hover:text-gray-300 px-3 py-2 text-base font-medium">
                Movies
              </Link>
              <Link href="/new-popular" className="text-white hover:text-gray-300 px-3 py-2 text-base font-medium">
                New & Popular
              </Link>
              <Link href="/my-list" className="text-white hover:text-gray-300 px-3 py-2 text-base font-medium">
                My List
              </Link>
              <Link href="/browse-by-languages" className="text-white hover:text-gray-300 px-3 py-2 text-base font-medium">
                Browse by Languages
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Navigation / Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-white hover:text-gray-300 focus:outline-none" aria-label="Search">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Kids Profile (Optional) */}
          <span className="text-white text-sm hidden lg:block">Kids</span>

          {/* Notifications Icon (Optional) */}
          <button className="text-white hover:text-gray-300 focus:outline-none hidden lg:block" aria-label="Notifications">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
            </svg>
          </button>

          {/* Profile Dropdown (Placeholder) */}
          <div className="relative">
            <button className="flex items-center text-white focus:outline-none" aria-label="Profile menu">
              <Image
                className="rounded-md"
                src="/assets/images/netflix-avatar.png" // Placeholder image - replace with actual avatar if available
                alt="Profile Avatar"
                width={30}
                height={30}
              />
              {/* Dropdown arrow */}
              <svg className="w-4 h-4 text-white ml-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown content goes here (hidden by default) */}
          </div>
        </div>

        {/* Mobile menu button (remains for now) */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 