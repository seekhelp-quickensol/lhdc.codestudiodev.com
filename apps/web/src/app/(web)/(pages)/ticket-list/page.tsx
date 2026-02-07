"use client";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import Faq from "@/src/components/web/Faq";

export default function TicketList() {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-6 md:py-10 px-5 lg:px-20 rounded-lg overflow-hidden mt-5"
        style={{
          backgroundImage: "url('about/about-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <nav className="inline-flex items-center gap-4 px-8 py-2 rounded-full bg-teal-transperent backdrop-blur-sm mb-6">
            <Link
              href="/"
              className="text-[15px] md:text-[17px]  text-white  font-medium cursor-pointer hover:underline"
            >
              Home
            </Link>

            <span className="text-white text-2xl leading-none">›</span>

            <span className=" text-[15px] md:text-[17px]  text-white  font-medium">
              Tickets List
            </span>
          </nav>

          <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
            <span className="inline-flex items-center gap-3 pr-[25px] relative">
              Let us know what’s wrong & we’ll take care of it.
              <Image
                src="/icons/top-arrow.svg"
                alt="Top Arrow"
                width={36}
                height={36}
                className="absolute right-[0px]  md:right-[-25px] lg:right-[-50px]  top-[-15px]"
              />
            </span>{" "}
            <br />
            Housing & Development.
          </h1>
        </div>
      </section>
      <section className="w-full py-10 px-0 lg:px-10 ">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-[20px] md:text[35px] font-semibold text-gray-900">
                My Ticket Status
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Track & manage your housing application
              </p>
            </div>
              <Link
              href="/raise-a-ticket"
              className=" cursor-pointer"
            >
            <button
              className="
    flex items-center
    bg-[#1F8C8B]
    rounded-full
    pl-7 pr-2 py-2
    text-white
    font-medium
    text-base
    hover:bg-[#187C7B]
    transition
  "
            >
              <span className="mr-4 whitespace-nowrap">Raise New Ticket</span>

              <span
                className="
      flex items-center justify-center
      w-8 h-8
      bg-white
      rounded-full
    "
              >
                <HiArrowUpRight className="w-6 h-6 text-black" />
              </span>
            </button>
            </Link>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-3">
                <p className="text-sm font-medium text-gray-800">
                  Ticket# 2023-CS123
                </p>
                <p className="text-xs text-gray-400">Posted on 12:45 AM</p>
              </div>

              <h3 className="text-gray-900 font-medium mb-2">
                What documents are required for verification?
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                The required documents may vary depending on the type of
                application. Generally, we need proof of residency,
                identification, proof of ownership or lease, and any relevant
                supporting paperwork. If additional documents are needed, you
                will be specifically notified through email or within your
                application dashboard.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5 pt-4 border-t-x">
                <span className="px-3 py-1.5 rounded-md border border-green-400 bg-green-50 text-green-600 text-xs font-medium w-fit">
                  Solved
                </span>
               <Link
              href="/view-ticket"
              className=" cursor-pointer"
            >
                <button className="text-teal-600 text-sm font-medium hover:underline w-fit">
                  Open Ticket
                </button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-3">
                <p className="text-sm font-medium text-gray-800">
                  Ticket# 2023-CS123
                </p>
                <p className="text-xs text-gray-400">Posted on 12:45 AM</p>
              </div>

              <h3 className="text-gray-900 font-medium mb-2">
                What documents are required for verification?
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                The required documents may vary depending on the type of
                application. Generally, we need proof of residency,
                identification, proof of ownership or lease, and any relevant
                supporting paperwork.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5 pt-4 border-t-x">
                <span className="px-3 py-1.5 rounded-md border border-gray-300 bg-gray-50 text-gray-500 text-xs font-medium w-fit">
                  Closed
                </span>

  <Link
              href="/view-ticket"
              className=" cursor-pointer"
            >
                <button className="text-teal-600 text-sm font-medium hover:underline w-fit">
                  Open Ticket
                </button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-3">
                <p className="text-sm font-medium text-gray-800">
                  Ticket# 2023-CS123
                </p>
                <p className="text-xs text-gray-400">Posted on 12:45 AM</p>
              </div>

              <h3 className="text-gray-900 font-medium mb-2">
                What documents are required for verification?
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                The required documents may vary depending on the type of
                application. Generally, we need proof of residency,
                identification, proof of ownership or lease, and any relevant
                supporting paperwork. If additional documents are needed, you
                will be specifically notified through email or within your
                application dashboard.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5 pt-4 border-t-x">
                <span className="px-3 py-1.5 rounded-md border border-green-400 bg-green-50 text-green-600 text-xs font-medium w-fit">
                  Solved
                </span>
  <Link
              href="/view-ticket"
              className=" cursor-pointer"
            >
                <button className="text-teal-600 text-sm font-medium hover:underline w-fit">
                  Open Ticket
                </button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-3">
                <p className="text-sm font-medium text-gray-800">
                  Ticket# 2023-CS123
                </p>
                <p className="text-xs text-gray-400">Posted on 12:45 AM</p>
              </div>

              <h3 className="text-gray-900 font-medium mb-2">
                What documents are required for verification?
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                The required documents may vary depending on the type of
                application. Generally, we need proof of residency,
                identification, proof of ownership or lease, and any relevant
                supporting paperwork.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5 pt-4 border-t-x">
                <span className="px-3 py-1.5 rounded-md border border-gray-300 bg-gray-50 text-gray-500 text-xs font-medium w-fit">
                  Closed
                </span>
<Link
              href="/view-ticket"
              className=" cursor-pointer"
            >
                <button className="text-teal-600 text-sm font-medium hover:underline w-fit">
                  Open Ticket
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq />
    </>
  );
}
