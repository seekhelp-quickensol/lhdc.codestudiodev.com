"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onScroll?: (scrolled: boolean) => void;
  showFloated?: boolean;
}

export default function Header({ onScroll, showFloated = true }: HeaderProps) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHomepage, setIsHomepage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const profileRef = useRef<HTMLDivElement>(null);

  /* ---------------- ACTIVE LINK ---------------- */
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  /* ---------------- SMOOTH CLOSE ---------------- */
  const closeSidebarSmooth = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setProfileOpen(false);
      setClosing(false);
    }, 300);
  };

  const handleNavClick = () => {
    closeSidebarSmooth();
  };

  /* ---------------- ROUTE CHANGE ---------------- */
  useEffect(() => {
    setIsHomepage(pathname === "/");
  }, [pathname]);

  /* ---------------- SCROLL ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrolledNow = window.scrollY > 50;
      setScrolled(scrolledNow);
      onScroll?.(scrolledNow);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScroll]);

  /* ---------------- OUTSIDE CLICK ---------------- */
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

useEffect(() => {
  if (isMobile) return; 

  const handleClickOutside = (e: MouseEvent) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(e.target as Node)
    ) {
      setProfileOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
}, [isMobile]);


  const handleMobileNav = (href: string) => {
    setClosing(true);

    setTimeout(() => {
      setOpen(false);
      setProfileOpen(false);
      setClosing(false);
      window.location.href = href;
    }, 200);
  };

  /* ---------------- PROFILE DROPDOWN ---------------- */
  const ProfileDropdown = () => (
    <div className="absolute right-0 mt-3 w-56 rounded-xl bg-white shadow-lg border z-50">
      <ul className="py-2 text-sm">
        <li>
          <Link
            href="/my-application"
            onClick={handleNavClick}
            className={`block px-4 py-2 ${
              isActive("/my-application")
                ? "text-teal-600 font-medium"
                : "hover:bg-gray-100"
            }`}
          >
            My Applications
          </Link>
        </li>
        <li>
          <Link
            href="/ticket-list"
            onClick={handleNavClick}
            className={`block px-4 py-2 ${
              isActive("/ticket-list")
                ? "text-teal-600 font-medium"
                : "hover:bg-gray-100"
            }`}
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
  className={`sticky top-0 z-50 transition-all duration-300 w-full
    ${
      isHomepage && !scrolled && showFloated
        ? "container mx-auto px-6 lg:px-16 pt-6"
        : "px-0"
    }
  `}
>



      <div
        className={`bg-white shadow-sm transition-all duration-300 rounded-b-[16px] ${
          isHomepage && !scrolled && showFloated ? "rounded-[16px]" : ""
        }`}
      >
        {/* TOP BAR */}
        <div className="hidden md:block border-b">
  <div className="px-6 py-3 flex justify-between items-center text-xs text-gray-600">
    
    {/* LEFT: EMAIL + PHONE */}
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Image
          src="/icons/mail-black.svg"
          alt="Email"
          width={14}
          height={14}
          
        />
        <span>support@lhdc.com</span>
      </div>

      <span>|</span>

      <div className="flex items-center gap-2">
        <Image
          src="/icons/call.svg"
          alt="Phone"
          width={14}
          height={14}
        />
        <span>+1 (716) 823-5124</span>
      </div>
    </div>

    {/* RIGHT: SOCIAL ICONS */}
    <div className="flex items-center gap-4">
      <a href="#" aria-label="Instagram">
        <Image
          src="/icons/insta.svg"
          alt="Instagram"
          width={14}
          height={14}
        />
      </a>

      <a href="#" aria-label="Facebook">
        <Image
          src="/icons/facebook.svg"
          alt="Facebook"
          width={14}
          height={14}
        />
      </a>

      <a href="#" aria-label="LinkedIn">
        <Image
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          width={14}
          height={14}
        />
      </a>
    </div>
  </div>
</div>
        {/* <div className="hidden md:block border-b">
          <div className="px-6 py-3 flex justify-between text-xs text-gray-600">
            <div className="flex gap-4">
              <span>support@lhdc.com</span>
              <span>|</span>
              <span>+1 (716) 823-5124</span>
            </div>
            <div className="flex gap-3">
              <FaInstagram />
              <FaFacebookF />
              <FaLinkedinIn />
            </div>
          </div>
        </div> */}

        {/* MAIN HEADER */}
        <div className="px-4 lg:px-6">
          <div className="flex justify-between items-center py-4">
          
            <Link href="/" className="cursor-pointer">
  <Image
    src="/lhdc-logo.png"
    alt="Logo"
    width={100}
    height={40}
    priority
  />
</Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex gap-8 text-sm font-medium">
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
                  className={`${
                    isActive(item.href)
                      ? "text-teal-600 font-semibold"
                      : "hover:text-teal-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* RIGHT */}
            <div className="hidden lg:flex gap-4 items-center">
              <div className="relative">
                <input
                  placeholder="Search Here"
                  className="border rounded-full px-4 py-2 text-sm"
                />
                <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2" />
              </div>

              {isLoggedIn ? (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
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

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-2xl"
            >
              <FiMenu />
            </button>
          </div>
        </div>

        {/* MOBILE SIDEBAR */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
            open && !closing
              ? "bg-black/30 opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`absolute right-0 top-0 h-full w-[85%] bg-white shadow-xl
              transform transition-transform duration-300
              ${open && !closing ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <Image src="/lhdc-logo.png" alt="Logo" width={120} height={40} />
              <button onClick={closeSidebarSmooth}>
                <FiX />
              </button>
            </div>

            <div className="p-5 space-y-6">
              {isLoggedIn && (
                <div className="border rounded-xl p-4 bg-gray-50">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex gap-3 items-center"
                  >
                    <Image
                      src="/icons/user.svg"
                      alt="Profile"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="font-semibold">My Profile</p>
                      <p className="text-xs text-gray-500">View account</p>
                    </div>
                  </button>

                  {profileOpen && (
                    <div className="mt-4 space-y-3">
                      <button
                        onClick={() => handleMobileNav("/my-application")}
                        className="block w-full text-left"
                      >
                        My Applications
                      </button>

                      <button
                        onClick={() => handleMobileNav("/ticket-list")}
                        className="block w-full text-left"
                      >
                        Ticket List
                      </button>
                    </div>
                  )}
                </div>
              )}

              <nav className="space-y-4">
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
                    onClick={handleNavClick}
                    className={`block pb-3 border-b ${
                      isActive(item.href)
                        ? "text-teal-600 border-teal-600 font-semibold"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
