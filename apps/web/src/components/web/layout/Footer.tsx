import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";


const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/our-services" },
  { label: "Career Opportunities", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];
export default function Footer() {
  return (
    <footer
      className="relative mt-32  bg-cover bg-center bg-no-repeat rounded-[5px]"
      style={{ backgroundImage: "url('/ftr-bg.png')" }}
    >
      {/* ABSOLUTE QUOTE SECTION */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full px-4">
        <div
          className="
      max-w-7xl mx-auto
      rounded-[22px]
     
      relative
      overflow-hidden
    "
        >
          
          <div className="absolute inset-0 bg-teal-700/80"></div>

          <div className="relative z-10 flex flex-col md:flex-row lg:flex-row  items-center">
          
            <div className="w-full md:w-1/2 lg:w-1/2 p-6 sm:p-8 lg:p-10 md:p-10 text-white">
             

              <Image
                src="/about/quote.png"
                alt="quote"
                width={40}
                height={40}
                className="mb-4"
              />

              <h3 className="text-1xl sm:text-3xl md:text-2xl lg:text-3xl font-extrabold leading-tight text-white">
                <span className="block font-black">A Strong Community</span>
                Begins With A Secure <br />
                Home.
              </h3>

              <div className="mt-6 flex items-start gap-3">
                <span className="block w-12 h-[2px] bg-white mt-3"></span>

                <div>
                  <span className="block font-semibold text-white">
                    Elena Hart
                  </span>
                  <span className="block text-xs tracking-wide text-white/80">
                    Community Development Advocate
                  </span>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="hidden md:block w-full md:w-1/2 h-56 lg:h-[280px] md:h-[240px] relative">
              <Image
                src="/quote-people.jpg"
                alt="community discussion"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER CONTENT (PUSHED DOWN) */}
      <div className="pt-22 sm:pt-40 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-300">
          {/* LOGO & ABOUT */}
          <div>
            <Image
              src="/lhdc-logo-white.png"
              alt="LHDC"
              width={180}
              height={60}
            />

            <p className="mt-4 text-sm leading-relaxed">
              Providing reliable & affordable housing solutions with a
              commitment to quality, trust, & customer satisfaction.
            </p>

            <div className="flex gap-3 mt-5">
              {[FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
                <span
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full 
                     bg-[#3d4f4f] hover:bg-teal-500 transition cursor-pointer"
                >
                  <Icon />
                </span>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-3 pb-2 border-b border-teal-500">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
  {menuItems.map((item) => (
    <li key={item.label}>
      <Link
        href={item.href}
        className="flex items-center gap-2 hover:text-teal-400 cursor-pointer"
      >
        <Image
          src="/icons/double-arrow.svg"
          alt="arrow"
          width={12}
          height={12}
        />
        <span>{item.label}</span>
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-3 pb-2 border-b border-teal-500">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Home Improvement Program",
                "First Time Home Buyer",
                "Tenant Maintenance Request",
                "Information Request",
                "Information on Lackawanna Stakeholder’s Coalition",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 hover:text-teal-400 cursor-pointer"
                >
                  <Image
                    src="/icons/double-arrow.svg"
                    alt="arrow"
                    width={12}
                    height={12}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-3 pb-2 border-b border-teal-500">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-white" />
                <span>640 Ridge Road, Lackawanna, NY 14218</span>
              </li>
              <li className="flex gap-3">
                <FaPhoneAlt className="text-white" />
                <span>+1 (716) 823-5124</span>
              </li>
              <li className="flex gap-3">
                <FaClock className="text-white" />
                <span>Mon–Fri 10am–10pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ASSIST BAR */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#3f4d4d] rounded-lg px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center text-sm">
              {/* Title */}
              <div>
                <p className="text-white font-semibold leading-tight text-[18px]">
                  We’re Here to <br />
                  <span className="text-teal-400">Assist</span> You
                </p>
              </div>

              {/* Administrative */}
              <div className="pb-3 ">
                <p className="text-white mb-2 border-b border-white/20 pb-3">
                  Administrative / General Inquiry
                </p>
                <div className="flex items-center gap-2 text-gray-200">
                  <Image
                    src="/icons/mail.svg"
                    alt="mail"
                    width={16}
                    height={16}
                  />
                  <span>irizzo@lhdcorpwny.org</span>
                </div>
              </div>

              {/* Housing */}
              <div className="pb-3 ">
                <p className="text-white mb-2 border-b border-white/20 pb-3">
                  Housing Specialist
                </p>
                <div className="flex items-center gap-2 text-gray-200">
                 <Image
                    src="/icons/mail.svg"
                    alt="mail"
                    width={16}
                    height={16}
                  />
                  <span>dblowers@lhdcorpwny.org</span>
                </div>
              </div>

              {/* Executive */}
              <div className="pb-3 ">
                <p className="text-white mb-2 border-b border-white/20 pb-3">
                  Executive Director
                </p>
                <div className="flex items-center gap-2 text-gray-200">
                 <Image
                    src="/icons/mail.svg"
                    alt="mail"
                    width={16}
                    height={16}
                  />
                  <span>zejew@lhdcorpwny.org</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-600 mt-10">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between text-xs text-gray-400">
            <p>© 2025 LHDC. All rights reserved</p>
           <div className="flex gap-4 mt-2 md:mt-0">
  <Link
    href="/terms-and-conditions"
    className="hover:text-white cursor-pointer"
  >
    Terms & Conditions
  </Link>

  <Link
    href="/privacy-policy"
    className="hover:text-white cursor-pointer"
  >
    Privacy Policy
  </Link>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
