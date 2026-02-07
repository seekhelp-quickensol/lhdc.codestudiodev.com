"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

import { getPaginatedBlogs } from "@/src/services/web/services";
import type { Blog } from "@/src/types/web/types";
import BlogCard from "./blogCard";

export default function BlogSlider() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from backend
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await getPaginatedBlogs(1, 6); // get first 10 blogs or adjust limit
      if (res.data.success) {
        setBlogs(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center py-10">Loading blogs...</p>;
  if (!blogs.length) return <p className="text-center py-10">No blogs available</p>;

  return (
    <section className="blog relative w-full py-0 px-0 md:py-6 md:px-8 lg:px-20 lg:py-16">
      <div className="w-full py-5 lg:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p className="flex items-center gap-2 text-teal-700 uppercase text-xs tracking-widest mb-3 font-medium">
            <Image src="/icons/home.svg" alt="" width={16} height={16} />
            Read Blog
          </p>
          <h2 className="text-[25px] lg:text-[35px] leading-[1.15] font-semibold text-gray-900">
            Strategies & <span className="text-gray-400">Insights.</span>
          </h2>
        </div>

        <p className="max-w-md text-gray-600 text-base leading-relaxed">
          Developing personalized customer journeys to increase satisfaction & loyalty.
        </p>

        {/* Slider navigation buttons */}
        <div className="flex items-center gap-3">
          <button className="swiper-button-prev-blog w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center">
            <span className="text-gray-600 text-lg">‹</span>
          </button>

          <button className="swiper-button-next-blog w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-700 flex items-center justify-center">
            <span className="text-white text-lg">›</span>
          </button>
        </div>
      </div>

      {/* Blog slider */}
      <div className="relative max-w-7xl mx-auto">

     <style jsx global>{`
  .swiper {
    padding-bottom: 60px; /* space for pagination */
  }

  .swiper-pagination {
    bottom: 0px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    background: #d1d5db;
    border-radius: 999px;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    width: 32px;
    background: #0f766e;
  }
`}</style>



   <Swiper
  modules={[Autoplay, Navigation, Pagination]}
  spaceBetween={30}
  loop
  autoplay={{
    delay: 5000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  navigation={{
    nextEl: ".swiper-button-next-blog",
    prevEl: ".swiper-button-prev-blog",
  }}
  breakpoints={{
    0: { slidesPerView: 1 },
    1000: { slidesPerView: 1, slidesPerGroup: 1 },
    1024: { slidesPerView: 2, slidesPerGroup: 2 },
  }}
>

  {blogs.map((blog) => (
    <SwiperSlide key={blog.id}>
      <BlogCard blog={blog} />
    </SwiperSlide>
  ))}
</Swiper>



      </div>
    </section>
  );
}
