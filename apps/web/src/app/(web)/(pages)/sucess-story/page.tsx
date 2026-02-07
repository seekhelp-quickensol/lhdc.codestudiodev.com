"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import { getAllSucessStory } from "@/src/services/web/services";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SuccessStory = {
  id: number;
  name: string;
  organization?: string;
  content: string;
  image?: string;
};

<style jsx global>{`
  .testimonial .swiper {
    padding-bottom: 60px; /* space for bullets */
  }

  .testimonial .swiper-pagination {
    bottom: 0px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .testimonial .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    background: #d1d5db;
    border-radius: 999px;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .testimonial .swiper-pagination-bullet-active {
    width: 32px;
    background: #0f766e;
  }
`}</style>


const SuccessStorySlider = () => {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // Fetch success stories
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await getAllSucessStory();
        if (res.data.success) {
          setStories(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching success stories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading success stories...</p>;
  }

  if (!stories.length) {
    return <p className="text-center py-10 text-gray-500">No success stories found.</p>;
  }

  return (
    <section
      className="testimonial relative w-full mt-5 md:mt-10 py-5 px-4 md:px-8 lg:px-20 lg:py-16 rounded-2xl"
      style={{
        backgroundImage: "url('/teal-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <div className="w-full py-5 lg:py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-teal-700 uppercase text-xs tracking-widest mb-3 font-medium">
              <Image src="/icons/home.svg" alt="" width={16} height={16} className="w-4 h-4" />
              Testimonial
            </p>

            <h2 className="text-[25px] lg:text-[35px] leading-[1.15] font-semibold text-gray-900">
              Success <span className="text-teal-700">Stories</span> Fuel <br />
              our Innovation.
            </h2>
          </div>

          <p className="max-w-md text-gray-600 text-base leading-relaxed">
            Developing personalized customer journeys to increase satisfaction & loyalty.
          </p>

          {/* Navigation buttons */}
          <div className="flex items-center gap-3 mt-4 lg:mt-0">
            <button
              ref={prevRef}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <span className="text-gray-600 text-lg">‹</span>
            </button>

            <button
              ref={nextRef}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-700 flex items-center justify-center"
            >
              <span className="text-white text-lg">›</span>
            </button>
          </div>
        </div>
      </div>

      

      {/* Swiper */}
      <div className="relative max-w-7xl mx-auto mt-8">
        <Swiper
  modules={[Autoplay, Navigation, Pagination]}
  spaceBetween={30}
  loop={true}
  autoplay={{ delay: 5000 }}
  pagination={{ clickable: true }}
  navigation={true}
  onBeforeInit={(swiper) => {
    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  }}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>

        {stories.map((item) => (
  <SwiperSlide key={item.id}>
    <div
      className="
        bg-white rounded-2xl p-6
        flex flex-col justify-between
        shadow-sm hover:shadow-md
        transition-all duration-300
        min-h-[270px] md:min-h-[300px] lg:min-h-[300px]
      "
    >
      <span className="text-teal-700 text-3xl mb-4">
        <Image
          src="/icons/quote-green.svg"
          alt="quote"
          width={40}
          height={40}
        />
      </span>

      {/* Content */}
      <p className="text-gray-600 text-sm flex-1 ">
        {item.content}
      </p>

      {/* Footer */}
      <div className="mt-6 pt-4 flex items-center gap-3 border-t border-dotted border-gray-300">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full bg-gray-200 bg-center bg-cover flex-shrink-0"
          style={{
            backgroundImage: item.image ? `url(${item.image})` : "none",
          }}
        />

        {/* Text */}
        <div className="leading-tight">
          <p className="font-medium text-gray-900">{item.name}</p>
          <p className="text-gray-500 text-sm">
            {item.organization || ""}
          </p>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}

        </Swiper>
      </div>
    </section>
  );
};

export default SuccessStorySlider;
