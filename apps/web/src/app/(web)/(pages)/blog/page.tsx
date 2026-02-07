"use client";

import { useEffect, useState } from "react";
import { getPaginatedBlogs } from "@/src/services/web/services";
import type { Blog } from "@/src/types/web/types";
import BlogCard from "./blog-card";
import NoBlogsCard from "./NoBlogsCard";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(6); // can be dynamic

  const fetchBlogs = async (page: number) => {
    setLoading(true);
    try {
      const res = await getPaginatedBlogs(page, limit);
      console.log("blog response " , res);
      if (res.data.success) {
        setBlogs(res.data.data);
        setTotalPages(res.data.meta.totalPages);
        // setLimit(res.data.meta.limit); // update limit dynamically from backend
      }
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  if (loading) return <p>Loading blogs...</p>;

  return (

    <>
    
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-6 md:py-10 px-5 lg:px-20 rounded-lg overflow-hidden mt-5"
        style={{ backgroundImage: "url('about/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <nav className="inline-flex items-center gap-4 px-8 py-2 rounded-full bg-teal-transperent backdrop-blur-sm mb-6">
            <Link
              href="/"
              className="text-[15px] md:text-[17px] text-white font-medium hover:underline"
            >
              Home
            </Link>
            <span className="text-white text-2xl leading-none">›</span>
            <p  className="text-[15px] md:text-[17px] text-white font-medium hover:underline">
              Blog
            </p>
          </nav>

          <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
            <span className="inline-flex items-center gap-3 relative pr-[25px]">
              Our Housing Program Services are
              <Image
                src="/icons/top-arrow.svg"
                alt="Top Arrow"
                width={36}
                height={36}
                className="absolute right-[0px] md:right-[-25px] lg:right-[-50px] top-[-15px]"
              />
            </span>
            <br />
            grounded in strong governance.
          </h1>
        </div>
      </section>

    
    
    <section className="blog relative w-full mt-0 px-0 lg:px-20 py-6 md:py-8 lg:py-12 rounded-2xl">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <NoBlogsCard />
          )}
        </div>

        {/* Pagination: show only if totalPages > 1 */}
        {totalPages > 1 && (
  <div className="flex justify-center mt-10">
    <div className="inline-flex items-center gap-1 rounded-full bg-white shadow-sm border px-2 py-1">
      
      {/* PREV */}
      <button 
        onClick={handlePrev}
        disabled={page === 1}
        className="flex items-center justify-center w-9 h-9 rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
        aria-label="Previous page"
      >
        ‹
      </button>
      

      {/* PAGE INFO */}
      <span className="px-4 text-sm font-medium text-gray-700">
        Page <span className="font-semibold">{page}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </span>

      {/* NEXT */}
      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="flex items-center justify-center w-9 h-9 rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
        aria-label="Next page"
      >
        ›
      </button>
    </div>
  </div>
)}

      </div>
    </section>

        </>
  );
}
