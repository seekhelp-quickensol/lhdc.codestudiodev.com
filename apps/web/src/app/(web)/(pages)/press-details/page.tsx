"use client";
import Faq from "@/src/components/web/Faq";
import Image from "next/image";

import Link from "next/link";

export default function PressReleseDetails() {
  return (
    <>
      {/* title */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-10 px-5 lg:px-20 rounded-lg overflow-hidden mt-5"
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
              Press Relese Details
            </span>
          </nav>

          {/* Heading */}
          <h1 className="text-[25px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
            <span className="inline-flex items-center gap-3 relative">
              Our Housing Program Services are
              <Image
                src="/icons/top-arrow.svg"
                alt="Top Arrow"
                width={36}
                height={36}
                className="absolute right-[4px]  md:right-[-25px] lg:right-[-50px]  top-[-15px]"
              />
            </span>{" "}
            <br />
            grounded in strong governance.
          </h1>
        </div>
      </section>
      {/* end */}

     
           <section className=" py-10">
             <div className="max-w-7xl mx-auto px-0 md:px-4">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               
                 <div className="lg:col-span-8">
                   <div>
                     
                     <div className="relative h-[240px] sm:h-[450px] rounded-2xl overflow-hidden">
                       <Image
                         src="/profile3.png"
                         alt="Blog"
                         fill
                         className="object-cover"
                       />
                     </div>
     
                    
                     <div className="pt-6">
                       <span className="text-xs text-gray-500 uppercase">
                         By Sophia Grant
                       </span>
     
                       <h1 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
                         Building Brand Loyalty Through Data-Driven Storytelling
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
     
                 {/* RIGHT SIDEBAR */}
                 <div className="lg:col-span-4">
                   <div className="space-y-6 lg:sticky lg:top-24">
                     
                     <div className="bg-[#dfeceb] rounded-2xl p-6">
                       <h3 className="text-1xl font-bold text-[#0f2a2a] mb-4">
                         Search Here
                       </h3>
     
                       <div className="relative">
                         <input
                           type="text"
                           placeholder="Search Here"
                           className="w-full h-[48px] rounded-xl border border-[#8fa3a0] bg-white pl-6 pr-14 text-lg text-[#6f7f7c] placeholder:text-[#6f7f7c] focus:outline-none focus:ring-0"
                         />
     
                        
                         <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#6f7f7c]">
                           <svg
                             width="22"
                             height="22"
                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor"
                             strokeWidth="2"
                             strokeLinecap="round"
                             strokeLinejoin="round"
                           >
                             <circle cx="11" cy="11" r="8" />
                             <line x1="21" y1="21" x2="16.65" y2="16.65" />
                           </svg>
                         </div>
                       </div>
                     </div>
     
                     {/* Recent Post */}
                     <div className="bg-[#dfeceb] rounded-xl p-5">
                       <h3 className="font-semibold text-gray-800 mb-4">
                         Recent Post
                       </h3>
     
                       <div className="space-y-4">
                         {[1, 2, 3].map((_, i) => (
                           <div
                             key={i}
                             className="flex gap-3 bg-white rounded-lg p-3"
                           >
                             <div className="relative w-14 h-14 rounded-md overflow-hidden flex-shrink-0">
                               <Image
                                 src="/profile3.png"
                                 alt="Post"
                                 fill
                                 className="object-cover"
                               />
                             </div>
     
                             <div>
                               <p className="text-sm font-medium text-gray-800 leading-snug">
                                 Building Brand Loyalty Through Data-Driven
                                 Storytelling
                               </p>
                               <span className="text-xs text-gray-400">
                                 12 Nov, 2025
                               </span>
                             </div>
                           </div>
                         ))}
                       </div>
                     </div>
     
                     {/* Tags */}
                     <div className="bg-[#dfeceb] rounded-xl p-5">
                       <h3 className="font-semibold text-gray-800 mb-3">Tags</h3>
     
                       <div className="flex flex-wrap gap-2">
                         {[
                           "Building",
                           "Innovation",
                           "Consultation",
                           "Building",
                           "Innovation",
                           "Consultation",
                         ].map((tag, i) => (
                           <span
                             key={i}
                             className="bg-white px-3 py-1 rounded-[8px] text-sm text-gray-700 border"
                           >
                             {tag}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
     
             {/* FAQ */}
               <Faq />
              {/* end */}
    </>
  );
}
