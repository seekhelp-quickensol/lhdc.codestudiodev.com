"use client";
import Faq from "@/src/components/web/Faq";
import VisionMission from "@/src/components/web/VisionMission";
import Image from "next/image";

import Link from "next/link";

export default function Careers() {
  return (
    <>
      {/* title */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-6 md:py-10  px-5 lg:px-20 rounded-lg overflow-hidden mt-5"
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

            <span className="text-[15px] md:text-[17px]  text-white  font-medium">
              Career
            </span>
          </nav>

          {/* Heading */}
          <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
            <span className="inline-flex items-center gap-3 relative pr-[25px]">
              Our Housing Program Services are
              <Image
                src="/icons/top-arrow.svg"
                alt="Top Arrow"
                width={36}
                height={36}
                className="absolute right-[0px]  md:right-[-25px] lg:right-[-50px]  top-[-15px]"
              />
            </span>{" "}
            <br />
            grounded in strong governance.
          </h1>
        </div>
      </section>
      {/* end */}

      {/* Career Section */}
      <section className="w-full py-6 md:py-12 px-0 md:px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-x-14 items-start">
            
            <div className="relative">
              <div className="relative w-full rounded-2xl overflow-hidden">
                <Image
                  src="/career.png"
                  alt="FAQ"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />

               
                <div className="absolute bottom-0 right-0 bg-[#ecf0f0] rounded-tl-2xl pt-2 pl-2 md:pt-5 md:pl-5">
                  <div className="bg-teal-600 text-white p-6 w-[200px] h-[230px] md:w-[345px] md:h-[345px] lg:w-[230px] lg:h-[250px] rounded-2xl shadow-xl flex flex-col justify-between">
                    <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                      Build Your Career With Us
                    </h3>

                    <button className="inline-flex items-center justify-between px-4 py-2 rounded-full border border-white font-medium hover:bg-white/10 transition">
                      <span>Join Us</span>
                      <span className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center">
                        <Image
                          src="/icons/arrow.svg"
                          alt="Arrow"
                          width={14}
                          height={14}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT SECTION */}
            <div className="space-y-6 mt-5 lg:mt-0">

  {/* CARD 1 */}
  <div className="bg-white rounded-2xl px-6 py-6 shadow-sm">
    {/* TOP ROW */}
    <div className="flex items-start justify-between gap-6 ">
      <h3 className="text-[20px] font-semibold text-[#0F1F1E]">
        Housing Program Coordinator
      </h3>

      <button className="w-[50%] md:w-[auto] px-3 md:px-5 py-2 rounded-full border border-[#0F1F1E] text-sm font-medium hover:bg-black hover:text-white transition">
        Apply Now
      </button>
    </div>

    {/* META */}
    <div className="flex gap-3 mb-4  mt-4 md:mt-0">
      <span className="px-3 py-1 rounded-full border text-xs font-medium">
        New York
      </span>
      <span className="px-3 py-1 rounded-full border text-xs font-medium">
        Full-time
      </span>
    </div>

    {/* DESCRIPTION */}
    <p className="text-[#6F7F7F] text-sm leading-relaxed max-w-[720px]">
      Due to growing workload, we are looking for experienced and talented
      Full-Stack Developers to join our fast-paced Engineering team. You will
      work closely with Product, Design and Marketing to analyze, develop,
      debug, test, roll-out and support new and existing product features.
    </p>
  </div>

  {/* CARD 2 */}
  <div className="bg-white rounded-2xl px-6 py-6 shadow-sm">
    <div className="flex items-start justify-between gap-6 ">
      <h3 className="text-[20px] font-semibold text-[#0F1F1E]">
        Community Outreach Specialist
      </h3>

     <button className="w-[50%] md:w-[auto] px-3 md:px-5 py-2 rounded-full border border-[#0F1F1E] text-sm font-medium hover:bg-black hover:text-white transition">
        Apply Now
      </button>
    </div>

    <div className="flex gap-3 mb-4  mt-4 md:mt-0">
      <span className="px-3 py-1 rounded-full border text-xs font-medium">
        New York
      </span>
      <span className="px-3 py-1 rounded-full border text-xs font-medium">
        Full-time
      </span>
    </div>

    <p className="text-[#6F7F7F] text-sm leading-relaxed max-w-[720px]">
      Due to growing workload, we are looking for experienced and talented
      Full-Stack Developers to join our fast-paced Engineering team. You will
      work closely with Product, Design and Marketing to analyze, develop,
      debug, test, roll-out and support new and existing product features.
    </p>
  </div>

  {/* CARD 3 */}
  <div className="bg-white rounded-2xl px-6 py-6 shadow-sm">
    <div className="flex items-start justify-between gap-6 ">
      <h3 className="text-[20px] font-semibold text-[#0F1F1E]">
        Project Manager – Housing Initiatives
      </h3>

      <button className="w-[50%] md:w-[auto] px-3 md:px-5 py-2 rounded-full border border-[#0F1F1E] text-sm font-medium hover:bg-black hover:text-white transition">
        Apply Now
      </button>
    </div>

    <div className="flex gap-3 mb-4 mt-4 md:mt-0">
      <span className="px-3 py-1 rounded-full border text-xs font-medium">
        New York
      </span>
      <span className="px-3 py-1 rounded-full border text-xs font-medium">
        Full-time
      </span>
    </div>

    <p className="text-[#6F7F7F] text-sm leading-relaxed max-w-[720px]">
      Due to growing workload, we are looking for experienced and talented
      Full-Stack Developers to join our fast-paced Engineering team. You will
      work closely with Product, Design and Marketing to analyze, develop,
      debug, test, roll-out and support new and existing product features.
    </p>
  </div>

</div>

          </div>
        </div>
      </section>

      {/* vision mission */}
      <VisionMission />

      {/* FAQ */}
      <Faq />

      {/* end */}
    </>
  );
}
