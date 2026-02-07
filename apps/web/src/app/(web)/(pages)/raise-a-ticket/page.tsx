"use client";
import Image from "next/image";

import Link from "next/link";

export default function RaiseATicket() {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat 
              py-6 md:py-10  px-5 lg:px-20 rounded-lg overflow-hidden mt-5"
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
              What We Offer
            </Link>

            <span className="text-white text-2xl leading-none">›</span>

            <span className=" text-[15px] md:text-[17px]  text-white  font-medium">
              Raise Ticket
            </span>
          </nav>

          <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
            <span className="inline-flex items-center gap-3 relative pr-[25px]">
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
      <section className="w-full pt-9 px-0 md:px-10 ">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6 lg:p-10">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-8">
              We’re here to help share your concern or request.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question Type
                </label>
                <input
                  type="text"
                  placeholder="Enter Question Type "
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Application Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Application Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Document
                </label>
                <label className="flex items-center justify-between cursor-pointer rounded-lg border-2 border-dashed border-gray-300 px-4 py-3 text-sm text-teal-600 hover:border-teal-500">
                  <span>Upload Document</span>
                  <svg
                    className="w-5 h-5 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16v-8m0 0l-3 3m3-3l3 3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                    />
                  </svg>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                placeholder="Enter Description"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-end">
              <button className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-8 py-3 rounded-lg transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
