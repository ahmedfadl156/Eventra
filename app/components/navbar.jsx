'use client'
import { useState } from 'react';
import { Ticket, User, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="logo flex items-center gap-2 z-20">
            <Ticket className="bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF] text-white size-10 p-2 rounded-lg" />
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF]">
              Eventra
            </h1>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-6 lg:gap-8">
            <li>
              <Link href="/" className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/explore" className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                Explore Events
              </Link>
            </li>
            <li>
              <Link href="/create" className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                Create Event
              </Link>
            </li>
          </ul>

          {/* Desktop Account Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Link
                  href="/profile"
                  className="font-semibold bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <span className="flex items-center gap-2">
                    <Ticket className="size-5" />
                    My Tickets
                  </span>
                </Link>
                <Link href="/login" className="font-semibold text-gray-700 hover:text-gray-900">
                  <User className="size-6" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="font-semibold bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="font-semibold bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden z-20 p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-10 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col items-center gap-6">
              <li>
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="text-2xl font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/explore"
                  onClick={closeMobileMenu}
                  className="text-2xl font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Explore Events
                </Link>
              </li>
              <li>
                <Link
                  href="/create"
                  onClick={closeMobileMenu}
                  className="text-2xl font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Create Event
                </Link>
              </li>
            </ul>

            {/* Mobile Account Buttons */}
            <div className="flex flex-col items-center gap-4 w-full max-w-xs">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/profile"
                    onClick={closeMobileMenu}
                    className="w-full text-center font-semibold bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Ticket className="size-5" />
                      My Tickets
                    </span>
                  </Link>
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 font-semibold text-gray-700 hover:text-gray-900"
                  >
                    <User className="size-6" />
                    Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="w-full text-center font-semibold bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={closeMobileMenu}
                    className="w-full text-center font-semibold bg-gradient-to-r from-[#7C5CFF] to-[#23C3FF] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Demo Toggle */}
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700"
            >
              Toggle Login State (Demo)
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}