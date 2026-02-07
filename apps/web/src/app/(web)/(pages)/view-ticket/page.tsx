"use client";

import Image from "next/image";
import Link from "next/link";
import Faq from "@/src/components/web/Faq";

export default function ViewTicket() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-6 md:py-10 px-5 lg:px-20 rounded-xl overflow-hidden mt-5"
        style={{ backgroundImage: "url('/about/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <nav className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/20 backdrop-blur mb-6">
            <Link href="/" className="text-white text-sm md:text-base">
              Home
            </Link>
            <span className="text-white">›</span>
            <span className="text-white text-sm md:text-base">View Ticket</span>
          </nav>

          <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
            <span className="inline-flex items-center gap-3 pr-[25px] relative">
              Let us know what’s wrong  & we’ll
              <Image
                src="/icons/top-arrow.svg"
                alt="Top Arrow"
                width={36}
                height={36}
                className="absolute right-[0px] md:right-[-20px] lg:right-[-50px]  top-[-15px]"
              />
            </span>{" "}
            <br />
            take care of it. Housing & Development.
          </h1>
        </div>
      </section>

      <section className="w-full  py-10 px-0 md:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                View Ticket
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Track & manage your housing application
              </p>
            </div>
          </div>

          {/* TICKETS */}
          <div className="space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
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
                  will be notified via email or dashboard.The required documents
                  may vary depending on the type of application. Generally, we
                  need proof of residency, identification, proof of ownership or
                  lease, and any relevant supporting paperwork. If additional
                  documents are needed, you will be notified via email or
                  dashboard.
                </p>
              </div>
            ))}

            {/* SUBMIT REPLY */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Submit A Reply
              </h3>

              <label className="block text-sm text-gray-600 mb-2">
                Description
              </label>

              <textarea
                placeholder="Write your reply here..."
                rows={4}
                className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
              />

              <div className="flex justify-end mt-4">
                <button className="bg-[#1F8C8B] hover:bg-[#187C7B] transition text-white px-6 py-2 rounded-md text-sm">
                  Submit
                </button>
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
