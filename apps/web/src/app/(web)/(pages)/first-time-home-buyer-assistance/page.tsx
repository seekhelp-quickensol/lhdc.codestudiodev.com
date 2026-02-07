"use client";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/src/components/web/Faq";
import StepsApply from "@/src/components/web/StepsApply";

import Document from "@/src/components/web/Document";



export default function ServiceDetails() {
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
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <nav className="inline-flex items-center gap-4 px-8 py-2 rounded-full bg-teal-transperent backdrop-blur-sm mb-6">
                <Link
                  href="/"
                  className="text-[15px] md:text-[17px] text-white font-medium hover:underline"
                >
                  Home
                </Link>
                <span className="text-white text-2xl leading-none">›</span>
                <span className="text-[15px] md:text-[17px] text-white font-medium">
                  First-Time Home Buyer Assistance
                </span>
              </nav>

              <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
                <span className="inline-flex items-center gap-3 relative pr-[25px]
">
                  First-Time Home Buyer Assistance
                  <Image
                    src="/icons/top-arrow.svg"
                    alt="Top Arrow"
                    width={36}
                    height={36}
                    className="absolute right-[0px]  md:right-[-25px] lg:right-[-50px]  top-[-15px]"
                  />
                </span>
                <br />
                
              </h1>
            </div>

            <div className="lg:self-start">
              <Link href="/first-time-home-buyer-application-form">
                <button
                  className="
            px-8  py-2 md:py-3
            rounded-full
            border border-white
            text-white
            text-sm md:text-base
            font-medium
            backdrop-blur-sm
            hover:bg-white hover:text-black
            transition-all duration-300
            w-fit
          "
                >
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* services*/}
      <section className=" py-10">
        <div className="max-w-7xl mx-auto px-0 md:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <div className="">
                <div className="bg-transparent ">
                  <div className="flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-wider mb-4">
                    <Image
                      src="/icons/home.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />

                    <span className="text-[16px]">SERVICE</span>
                  </div>

                  <h2 className="text-[20px] lg:text-[35px] font-semibold leading-tight text-gray-900">
                    We Support Improved Housing & Stronger Community Value.
                  </h2>
                </div>
              </div>
            </div>

            {/*right */}
            <div className="lg:col-span-9">
              <div>
                <div className="relative h-[240px] sm:h-[450px] rounded-2xl overflow-hidden">
                  <Image
                    src="/blog.jpg"
                    alt="Blog"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="pt-6">
                  <h1 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
                    The Must-Have Skill for Housing Programmed Success
                  </h1>

                  <div className="mt-4 space-y-4 text-gray-600 text-sm leading-relaxed">
                    <p>
                      Recognize that exceptional customer experiences are at the
                      heart of every successful business. Our Customer
                      Experience Solutions are crafted to help you transform
                      every interaction your customers have with your brand into
                      a meaningful & positive one.
                    </p>

                    <p>
                      Our approach to customer experience is comprehensive &
                      data-driven. We start by evaluating your existing customer
                      touchpoints, identifying areas that need improvement, and
                      applying valuable insights to create strategies aligned
                      with your customers’ evolving expectations.
                    </p>

                    <p>
                      At LHDC, we don’t just focus on solving customer
                      problems—we focus on building experiences that delight,
                      connect, and cultivate long-lasting relationships that
                      drive trust, satisfaction, and growth.
                    </p>

                    <p>
                      Our team is dedicated to helping you exceed customer
                      expectations at every stage. We help you understand your
                      customers deeply, optimize their experience, and create a
                      journey that consistently drives results.
                    </p>

                    <p>
                      Recognize that exceptional customer experiences are at the
                      heart of every successful business. Our Customer
                      Experience Solutions are crafted to help you transform
                      every interaction your customers have with your brand into
                      a meaningful & positive one. Our team is dedicated to
                      helping you exceed customer expectations at every stage.
                      We help you understand your customers deeply, optimize
                      their experience, and create a journey that consistently
                      drives results.
                    </p>

                    <p>
                      Our approach to customer experience is comprehensive &
                      data-driven. We start by evaluating your existing customer
                      touchpoints, identifying areas that need improvement, and
                      applying valuable insights to create strategies aligned
                      with your customers’ evolving expectations. At LHDC, we
                      don’t just focus on solving customer problems—we focus on
                      building experiences that delight, connect, and cultivate
                      long-lasting relationships that drive trust, satisfaction,
                      and growth.
                    </p>
                    <p>
                      Recognize that exceptional customer experiences are at the
                      heart of every successful business. Our Customer
                      Experience Solutions are crafted to help you transform
                      every interaction your customers have with your brand into
                      a meaningful & positive one. Our team is dedicated to
                      helping you exceed customer expectations at every stage.
                      We help you understand your customers deeply, optimize
                      their experience, and create a journey that consistently
                      drives results.
                    </p>

                    <p>
                      Our approach to customer experience is comprehensive &
                      data-driven. We start by evaluating your existing customer
                      touchpoints, identifying areas that need improvement, and
                      applying valuable insights to create strategies aligned
                      with your customers’ evolving expectations. At LHDC, we
                      don’t just focus on solving customer problems—we focus on
                      building experiences that delight, connect, and cultivate
                      long-lasting relationships that drive trust, satisfaction,
                      and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
       {/* Document */}
       <Document />

      {/* We apply */}
      <StepsApply />

      {/* FAQ */}
      <Faq />
    </>
  );
}
