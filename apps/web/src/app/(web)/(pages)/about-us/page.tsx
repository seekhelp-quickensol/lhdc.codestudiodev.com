"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import {
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import { useRef, useEffect, useState } from "react";
import VisionMission from "@/src/components/web/VisionMission";
import { getAllTeamMembers } from "@/src/services/web/services";

export default function AboutUs() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [teamMembers, setTeamMembers] = useState<Array<any>>([]);

  // Fetch team members dynamically
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const res = await getAllTeamMembers();
        if (res.data?.success) {
          setTeamMembers(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch team members:", err);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <>
      {/* Title Section */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-5 md:py-10 px-5 lg:px-20 rounded-lg overflow-hidden mt-5"
        style={{ backgroundImage: "url('about/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <nav className="inline-flex items-center gap-4 px-8 py-2 rounded-full bg-teal-transperent backdrop-blur-sm mb-6">
            <Link
              href="/"
              className="text-[15px] md:text-[17px] text-white font-medium cursor-pointer hover:underline"
            >
              Home
            </Link>
            <span className="text-white text-2xl leading-none">›</span>
            <span className="text-[15px] md:text-[17px] text-white font-medium">
              About Us
            </span>
          </nav>

          <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
            <span className="inline-flex items-center gap-3 relative pr-[25px] ">
              Our Housing Program Services Are
              <Image
                src="/icons/top-arrow.svg"
                alt="Top Arrow"
                width={36}
                height={36}
                className="absolute right-[0px] md:right-[-20px] lg:right-[-50px] top-[-15px]"
              />
            </span>{" "}
            <br />
            Grounded In Strong Governance.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full px-0 pt-4 py-6 md:py-8 lg:py-12 lg:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-x-14 items-start">
            <div className="relative">
              <div className="relative w-full rounded-2xl overflow-hidden">
                <Image
                  src="/about.png"
                  alt="About Image"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />

                <div className="absolute bottom-0 right-0 bg-[#ecf0f0] rounded-tl-2xl pt-2 pl-2 md:pt-3 md:pl-3">
                  <div className="bg-teal-600 text-white p-3 md:p-6 w-[200px] h-[230px] md:w-[250px] md:h-[280px] lg:w-[230px] lg:h-[250px] rounded-2xl shadow-xl flex flex-col justify-between">
                    <h3 className="text-[20px] md:text-[25px] font-semibold leading-snug">
                      Everything You Need To Know Before Starting?
                    </h3>

                    <button className="inline-flex items-center justify-between px-4 py-2 rounded-full border border-white font-medium hover:bg-white/10 transition">
                      <span>Know More</span>
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

            {/* RIGHT CONTENT */}
            <div className="space-y-6 mt-5 md:lg-0">
              <div className="bg-white rounded-2xl px-4 py-4 md:px-12 md:py-12 shadow-sm">
                <h2 className="text-[20px] md:text-[25px] font-semibold text-[#0F1F1E] leading-[1.25] mb-6">
                  We have turn your dreams into living experiences rooted in
                  trust & creativity.
                </h2>
                <p className="text-[#9AA8A8] text-base md:text-lg leading-relaxed mb-10 max-w-[640px]">
                  Our homes are designed to last, inspire, & connect people for
                  generations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                  {[
                    {
                      text: "Tax Return Documents",
                      icon: HiOutlineDocumentText,
                    },
                    {
                      text: "Social Security Card",
                      icon: HiOutlineShieldCheck,
                    },
                    {
                      text: "Educational Certificates",
                      icon: HiOutlineAcademicCap,
                    },
                    {
                      text: "Tax Return Documents",
                      icon: HiOutlineDocumentText,
                    },
                    {
                      text: "Social Security Card",
                      icon: HiOutlineShieldCheck,
                    },
                    {
                      text: "Educational Certificates",
                      icon: HiOutlineAcademicCap,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 text-[15px] md:text-base font-semibold text-[#0F1F1E]"
                      >
                        <span className="w-8 h-8 rounded-lg bg-[#E6F4F2] text-teal-600 flex items-center justify-center">
                          <Icon size={18} />
                        </span>
                        {item.text}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <VisionMission />

      {/* Team Section */}
      <section
        className="testomonial relative w-full mt-5 py-5 px-4 md:px-8 lg:px-20 lg:py-16 rounded-2xl"
        style={{
          backgroundImage: "url('/teal-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute -top-20 md:-top-24 left-1/2 -translate-x-1/2 w-[92%] md:w-[90%] max-w-6xl">
          <div className="bg-[#1E8C8A] rounded-2xl px-3 md:px-6 py-6 md:py-8 shadow-lg">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: "100k+", label: "Beneficiaries Assisted" },
                { value: "200k+", label: "Program Participants" },
                { value: "50k+", label: "Counselors Traineds" },
                { value: "350k+", label: "Housing Placements" },
              ].map((item, i) => (
                <div key={i} className="relative rounded-2xl p-[2px]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0FB0A4] to-[#1E8A8A]" />
                  <div className="relative rounded-2xl bg-[#1E8C8A] py-6 px-5 text-center">
                    <h3 className="text-white text-3xl md:text-4xl font-bold">
                      {item.value}
                    </h3>
                    <p className="text-white/90 text-sm mt-2">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full py-5 lg:py-12 mt-10 md:mt-20 lg:mt-10">
          <div className="max-w-7xl mx-auto flex flex-col mt-[164px] md:mt-[5px] lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
            <div className="max-w-xl mt-8 md:mt-0">
              <p className="flex items-center gap-2 text-teal-700 uppercase text-xs tracking-widest mb-3 font-medium">
                <Image
                  src="/icons/home.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                OUR TEAM
              </p>

              <h2 className="text-[20px] md:text-[35px] leading-[1.15] font-semibold text-gray-900">
                Meet Our <span className="text-teal-700">Dedicated</span> Fuel{" "}
                <br />
                Housing Team
              </h2>
            </div>

            <p className="max-w-md text-gray-600 text-base leading-relaxed">
              Together, we ensure every beneficiary receives the support they
              deserve.
            </p>

            {/* Swiper Navigation Buttons */}
            <div className="flex items-center gap-3 mt-6">
              <button
                ref={prevRef}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <span className="text-gray-600 text-lg">‹</span>
              </button>

              <button
                ref={nextRef}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-700 flex items-center justify-center text-white"
              >
                <span className="text-white text-lg">›</span>
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative max-w-7xl mx-auto mt-6">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={teamMembers.length > 1} // loop only if >1
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              // Assign navigation refs safely
              const nav = swiper.params.navigation;
              if (nav && typeof nav !== "boolean") {
                nav.prevEl = prevRef.current;
                nav.nextEl = nextRef.current;
              }
            }}
          >
            {teamMembers.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-[420px] rounded-2xl overflow-hidden group border border-[#C9D1D1]">
                  <div
                    className="relative w-full h-[420px] rounded-2xl overflow-hidden group"
                    style={{
                      backgroundImage: `url(${item.image || "/about/abt-1.jpg"})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>

                  <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0F6F6B] via-[#0F6F6B]/80 to-transparent" />
                  <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                    <h4 className="text-white text-lg font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-white/80 text-sm">{item.designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
