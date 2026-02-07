"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onScroll?: (scrolled: boolean) => void;
  showFloated?: boolean;
}

export default function Header({ onScroll, showFloated = true }: HeaderProps) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHomepage, setIsHomepage] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const [closing, setClosing] = useState(false); // controls animation
  const closeSidebarSmooth = () => {
    setClosing(true);

    setTimeout(() => {
      setOpen(false);
      setProfileOpen(false);
      setClosing(false);
    }, 300); 
  };

  useEffect(() => {
    setOpen(false);
    setProfileOpen(false);
  }, [pathname]);

  /* --------------------------------
     PAGE & SCROLL DETECTION
  ---------------------------------*/
  useEffect(() => {
    setIsHomepage(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledNow = window.scrollY > 50;
      setScrolled(scrolledNow);
      onScroll?.(scrolledNow);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScroll]);

  /* --------------------------------
     CLOSE DROPDOWN ON OUTSIDE CLICK
  ---------------------------------*/
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* --------------------------------
     PROFILE DROPDOWN
  ---------------------------------*/
  const ProfileDropdown = () => (
    <div className="absolute right-0 mt-3 w-56 rounded-xl bg-white shadow-lg border z-50">
      <div className="px-4 py-3 border-b text-sm font-medium text-gray-700">
        Profile
      </div>

      <ul className="py-2 text-sm">
        <li>
          <Link
            href="/my-application"
            className="block px-4 py-2 hover:bg-gray-100 text-teal-600"
          >
            My Applications
          </Link>
        </li>
        <li>
          <Link
            href="/ticket-list"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Ticket List
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setProfileOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isHomepage && !scrolled && showFloated ? "px-5 mb:px-10 pt-6" : ""
      }`}
    >
      <div
        className={`bg-white shadow-sm transition-all duration-300 rounded-b-[16px] ${
          isHomepage && !scrolled && showFloated ? "rounded-[16px]" : ""
        }`}
      >
        {/* TOP BAR */}
        <div className="hidden md:block border-b border-gray-200">
          <div className="px-6 py-3 flex justify-between items-center text-xs text-gray-600">
            <div className="flex items-center gap-6">
              <span>support@lhdc.com</span>
              <span className="text-gray-400">|</span>
              <span>+1 (716) 823-5124</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <FaInstagram />
              <FaFacebookF />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <div className="px-4 lg:px-6">
          <div className="flex items-center justify-between py-4">
            {/* LOGO */}
            <Image
              src="/lhdc-logo.png"
              alt="LHDC Logo"
              width={100}
              height={50}
            />

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <Link href="/">Home</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/our-services">What We Offer</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/press-release">Press Release</Link>
              <Link href="/contact-us">Contact Us</Link>
            </nav>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex items-center gap-4">
              {/* SEARCH */}
              <div className="relative">
                <input
                  placeholder="Search Here"
                  className="w-[180px] rounded-full border px-4 py-2 text-sm"
                />
                <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* LOGIN / PROFILE */}
              {isLoggedIn ? (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setProfileOpen(!profileOpen);
                    }}
                    className="w-10 h-10 rounded-full border flex items-center justify-center"
                  >
                    <Image
                      src="/icons/user.svg"
                      alt="Profile"
                      width={40}
                      height={40}
                    />
                  </button>

                  {profileOpen && <ProfileDropdown />}
                </div>
              ) : (
                <Link
                  href="/get-started"
                  className="bg-teal-600 text-white px-5 py-2 rounded-full"
                >
                  Get Started
                </Link>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-2xl"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}

        <div
          className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300
    ${open && !closing ? "bg-black/30 opacity-100" : "opacity-0 pointer-events-none"}
  `}
        >
          <div
            className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl
      transform transition-transform duration-300 ease-in-out
      ${open && !closing ? "translate-x-0" : "translate-x-full"}
    `}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <Image src="/lhdc-logo.png" alt="Logo" width={120} height={40} />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="p-5 space-y-6">
              {isLoggedIn && (
                <div className="border rounded-xl p-4 bg-gray-50">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center justify-between w-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-white border flex items-center justify-center">
                        <Image
                          src="/icons/user.svg"
                          alt="Profile"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold">My Profile</p>
                        <p className="text-xs text-gray-500">View account</p>
                      </div>
                    </div>
                  </button>

                  {profileOpen && (
                    <div className="mt-4 space-y-3 text-sm">
                      <Link href="/my-application" className="block">
                        My Applications
                      </Link>
                      <Link href="/ticket-list" className="block">
                        Ticket List
                      </Link>
                      <button
                        onClick={() => setIsLoggedIn(false)}
                        className="block text-red-500"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}

              <nav className="space-y-4 text-sm font-medium">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about-us" },
                  { name: "What We Offer", href: "/our-services" },
                  { name: "Blog", href: "/blog" },
                  { name: "Press Release", href: "/press-release" },
                  { name: "Contact Us", href: "/contact-us" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block pb-3 border-b border-gray-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {!isLoggedIn && (
                <Link
                  href="/get-started"
                  className="block bg-teal-600 text-white text-center py-3 rounded-full font-medium"
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
