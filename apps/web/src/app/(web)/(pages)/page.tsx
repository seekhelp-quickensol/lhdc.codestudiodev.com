"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Faq from "@/src/components/web/Faq";
import StepsApply from "@/src/components/web/StepsApply";
import BlogSlider from "./home/page";
import PressReleaseHome from "./home/press-release/page";
import FaqList from "../../admin/(pages)/(faq)/faq-list/faq-list";
import SucessStory from "./sucess-story/page";


type Offer = {
  title: string;
  desc: string;
  icon: string;
  iconActive: string;
  bg: string;
  link: string;   
};


const slides = [
  {
    id: 1,
    image: "/banner1.jpg",
    title: "First time buyer ?",
    subtitle: "We are here to help you",
    button: "Apply Now",
  },
  {
    id: 2,
    image: "/banner2.png",
    title: "Affordable Housing",
    subtitle: "Designed for your future",
    button: "Apply Now",
  },
];

const offers :Offer[]= [
  {
    title: "Home Improvement Program",
    desc: "We integrate eco-friendly materials, solar energy solutions, rainwater harvesting, and green architecture principles to enhance living quality and sustainability.",
    icon: "/icons/home-hands.svg",
    iconActive: "/icons/house-hand-white.svg",
    bg: "/offer-bg.png",
    link: "/home-improvement-program"
  },
  {
    title: "First-Time Home Buyer Assistance",
    desc: "Guiding first-time buyers through planning, approvals, financing, construction, and final handover for a smooth and stress-free homeownership journey.",
    icon: "/icons/home-hands.svg",
    iconActive: "/icons/house-hand-white.svg",
    bg: "/offer-bg.png",
    link: "/first-time-home-buyer-assistance"
  },
  {
    title: "Tenant Maintenance Requests",
    desc: "Fast and reliable maintenance support for tenants, ensuring safety, comfort, and timely resolution of property-related issues.",
    icon: "/icons/home-hands.svg",
    iconActive: "/icons/house-hand-white.svg",
    bg: "/offer-bg.png",
    link: "/tenant-maintenance-requests"
  },
  // {
  //   title: "Property & Information Requests",
  //   desc: "Get accurate property details, documentation support, and expert guidance to help you make informed real estate decisions.",
  //   icon: "/icons/home-hands.svg",
  //   iconActive: "/icons/house-hand-white.svg",
  //   bg: "/offer-bg.png",
  //   link: "/tenant-maintenance-requests"
  // },
  // {
  //   title: "Lackawanna Stakeholder Coalition",
  //   desc: "Collaborating with community stakeholders to promote sustainable development, housing awareness, and long-term neighborhood growth.",
  //   icon: "/icons/home-hands.svg",
  //   iconActive: "/icons/house-hand-white.svg",
  //   bg: "/offer-bg.png",
  //   link: "/tenant-maintenance-requests"
  // },
];




const blogs = [
  {
    image: "/profile3.png",
    day: "01",
    month: "NOV",
    author: "Sophia Grant",
    title: "Building Brand Loyalty Through Data-Driven Storytelling",
  },
  {
    image: "/profile2.jpg",
    day: "01",
    month: "NOV",
    author: "David Kim",
    title: "The Rise of Remote Leadership Managing Teams Across Borders",
  },
  {
    image: "/profile3.png",
    day: "01",
    month: "NOV",
    author: "David Kim",
    title: "The Rise of Remote Leadership Managing Teams Across Borders",
  },
  {
    image: "/profile2.jpg",
    day: "01",
    month: "NOV",
    author: "David Kim",
    title: "The Rise of Remote Leadership Managing Teams Across Borders",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      {/* hero */}

      <section className="relative w-full h-[70vh] md:h-[60vh] lg:h-[90vh] overflow-hidden mt-[-124px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 rounded-[16px] transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* IMAGE */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover rounded-[16px]"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[linear-gradient(177.93deg,rgba(255,255,255,0.075)_1.72%,rgba(0,0,0,0.25)_98.25%)] rounded-[16px]" />

            <div className="absolute inset-0 flex items-end">
              <div className="relative w-full container mx-auto px-6 lg:px-16 pb-24 text-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                      {slide.subtitle}
                    </h1>
                  </div>

                  <Link
                    href="/application-form"
                    className="inline-block px-6 py-2 md:py-3 border border-white rounded-full hover:bg-[#3ea2a6] hover:text-white transition"
                  >
                    {slide.button}
                  </Link>
                </div>

                <div className="mt-6">
                  <div className="h-px w-full bg-white/60" />
                </div>

                <div className="absolute left-0 right-0 bottom-6 flex justify-between px-6 lg:px-16">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 lg:w-12 lg:h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 lg:w-12 lg:h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="w-full  py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-0 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 lg:gap-20">
            <div className="flex flex-col items-start justify-between w-full">
              <div
                className="
                              hidden lg:flex items-center gap-2
                             text-[11px] font-semibold tracking-[0.25em]
                             text-[#1A6F6B]
                                  mb-24
                                     "
              >
                <Image
                  src="/icons/home.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />

                <span className="text-[16px]">KNOW US BETTER</span>
              </div>

              <div className="w-full flex justify-center lg:justify-start">
                <div className=" relative w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] rounded-full overflow-hidden">
                  <Image
                    src="/about-video.png"
                    alt="About Video"
                    fill
                    className="w-full h-full object-cover"
                    priority
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                      <Image
                        src="/icons/play.svg"
                        alt="Play"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="max-w-[820px]">
              <div className="flex lg:hidden items-center gap-2 text-[11px] font-semibold tracking-[0.25em] text-[#1A6F6B] mb-6">
                <Image
                  src="/icons/home.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                KNOW US BETTER
              </div>

              <h2 className="text-[25px] sm:text-[32px] lg:text-[34px] leading-[1.3] font-semibold text-[#0F2A2A]">
                We have turn your dreams into living experiences rooted in trust
                & creativity.Our homes are designed
                <span className="font-normal text-[#A6B6B5]">
                  &nbsp;to last, inspire, & connect people for generations.
                </span>
              </h2>

              <div className="mt-6 border-t border-dotted border-[#C9D6D5]"></div>

              <div className="grid grid-cols-1 md:grid-cols-[auto_1px_1fr] gap-12 md:gap-6 lg:gap-12 items-center py-12">
                <div className="flex flex-col gap-3 items-start lg:items-start">
                  <h3 className="text-[64px] lg:text-[80px] font-bold text-[#0F2A2A] leading-none">
                    50
                    <span className="text-[28px] lg:text-[34px] align-top">
                      +
                    </span>
                  </h3>

                  <p className="text-sm leading-[1.6] text-[#5E7A78] max-w-[230px]">
                    Years of experience in housing development
                  </p>
                </div>

                <div className="hidden md:block self-stretch border-l border-dotted border-[#C9D6D5]"></div>

                <div className="flex flex-wrap gap-4 lg:gap-6  justify-start lg:justify-start">
                  {[1, 2, 3].map((i) => (
                    <Image
                      key={i}
                      src={`/premium-${i}.png`}
                      alt="Premium Badge"
                      width={120}
                      height={120}
                      className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] object-contain"
                    />
                  ))}
                </div>
              </div>

              <div className="border-t border-dotted border-[#C9D6D5]"></div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}

      {/* specializaton */}
      <section className="w-full  bg-[#ffffff] rounded-[16px]  py-4 lg:py-20 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* HEADER */}
          <div className="text-center mb-5 lg:mb-10 ">
            <div className="flex items-center justify-center gap-2 text-[14px] font-semibold tracking-[0.25em] text-[#1A6F6B] mb-3">
              <Image
                src="/icons/home.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
              OUR SPECIALIZATIONS
            </div>
            <h2 className="text-[25px] lg:text-[35px] font-semibold text-[#0F2A2A]">
              What We Offer ?
            </h2>
          </div>

          {/* LIST */}
          <div className="space-y-4">
            {offers.map((item, i) => {
              const isActive = activeIndex === i;

              return (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`
          relative rounded-xl overflow-hidden cursor-pointer
          transition-all duration-300
          ${isActive ? "text-white" : "bg-[#F2F2F2]"}
        `}
                >
                  {isActive && (
                    <>
                      <Image
                        src={item.bg}
                        alt=""
                        fill
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60"></div>
                    </>
                  )}

                  <div
                    className="relative z-10 grid grid-cols-1 gap-4 px-4 py-4 md:grid-cols-[60px_1fr_60px] md:gap-5 md:px-6 md:py-5

                                   lg:grid-cols-[60px_260px_1fr_60px]
                                       lg:gap-6 lg:px-10 lg:py-6
                                           "
                  >
                    <div className="w-[55px] md:w-[55px] rounded-lg flex items-center justify-center">
                      <Image
                        src={isActive ? item.iconActive : item.icon}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>

                    <h3 className="text-base md:text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p
                      className={`
                        text-sm leading-[1.6]
                           ${isActive ? "text-white/80" : "text-[#5E7A78]"}
                          md:col-span-2
                        lg:col-span-1
                        `}
                    >
                      {item.desc}
                    </p>

                   <Link href={item.link}>
  <div className="flex justify-end items-center">
    <div
      className="
        w-10 h-10 md:w-12 md:h-12
        rounded-full bg-white
        flex items-center justify-center
        transition
      "
    >
      <Image
        src="/icons/arrow.svg"
        alt="Arrow"
        width={16}
        height={16}
      />
    </div>
  </div>
</Link>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* end */}

      {/* How to apply */}
      <StepsApply />
      {/*  */}

      {/* blog */}
            <BlogSlider />
      {/* end */}

      {/* Testomonial */}
      <SucessStory/>
    
      {/* end */}

      {/* latest announcement  */}

      <PressReleaseHome/>
    

            <Faq/>

      {/* end */}
    </>
  );
}
