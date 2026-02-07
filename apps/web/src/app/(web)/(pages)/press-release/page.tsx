"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/src/components/web/Faq";
import { getPaginatedPressRelease } from "@/src/services/web/services";
import type { PressRelease } from "@/src/types/web/types";
import PressReleaseCard from "./pressReleaseCard";
import gsap from "gsap";





export default function PressRelease() {
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 3;
  




  const fetchPressReleases = async (page: number) => {
    setLoading(true);
    try {
      const res = await getPaginatedPressRelease(page, limit);

      if (res.data.success) {
        setPressReleases(res.data.data);
        setTotalPages(res.data.meta.totalPages);
      }
    } catch (err) {
      console.error("Failed to fetch press releases", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPressReleases(page);
  }, [page]);

   useEffect(() => {
  gsap.to("#smooth-wrapper", {
    scrollTo: { y: 0 },
    duration: 0,
  });
}, []);


  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <>
      {/* HEADER SECTION (UNCHANGED) */}
        <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-6 md:py-10 px-5 lg:px-20 rounded-lg overflow-hidden mt-5"
        style={{ backgroundImage: "url('/about/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <nav className="inline-flex items-center gap-4 px-8 py-2 rounded-full bg-teal-transperent backdrop-blur-sm mb-6">
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
            <span className="text-white text-2xl">›</span>
            <span className="text-[15px] md:text-[17px] text-white font-medium">
              Press Release
            </span>
          
            
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

      <section className="py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-8">
              {loading && <p>Loading press releases...</p>}

              {!loading && pressReleases.length === 0 && (
                <p>No press releases found.</p>
              )}

             {!loading &&
  pressReleases.map((item) => (
    <PressReleaseCard key={item.id} item={item} />
  ))}

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white border px-4 py-2">
                    <button
                      onClick={handlePrev}
                      disabled={page === 1}
                      className="px-3 py-1 disabled:opacity-40"
                    >
                      ‹
                    </button>

                    <span className="text-sm">
                      Page <b>{page}</b> of <b>{totalPages}</b>
                    </span>

                    <button
                      onClick={handleNext}
                      disabled={page === totalPages}
                      className="px-3 py-1 disabled:opacity-40"
                    >
                      ›
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT SIDEBAR (UNCHANGED STATIC) */}
            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-4">
              <div className="space-y-6 lg:sticky lg:top-24">
                {/* SEARCH */}
                <div className="bg-[#D8E5E5] rounded-2xl p-6">
                  <h3 className="font-bold text-[#0f2a2a] mb-4">
                    Search Here
                  </h3>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here"
                      className="w-full h-[48px] rounded-xl border border-[#8fa3a0] bg-white pl-6 pr-14 text-[#6f7f7c] placeholder:text-sm focus:outline-none"
                    />
                  </div>
                </div>

                {/* RECENT POSTS */}
                {/* RECENT PRESS RELEASES */}
                {/* RECENT PRESS RELEASES */}
                <div className="bg-[#D8E5E5] rounded-xl p-5">
                  <h3 className="font-semibold text-gray-800 mb-4">
                    Recent Press Releases
                  </h3>

                  <div className="space-y-4">
                    {pressReleases
                      .slice(0, 3)
                      .map((item) => (
                        <Link
                          key={item.id}
                          href={`/press-release/${item.meta_url}`}
                        >
                          <div className="flex gap-3 bg-white rounded-lg p-3 hover:shadow-sm transition my-5">
                            {/* IMAGE (SAME SIZE AS BLOG UI) */}
                            <div
                              className="relative w-full md:w-[100px] h-[100px] rounded-xl overflow-hidden flex-shrink-0 bg-gray-200"
                              style={{
                                backgroundImage: item?.press_release_image
                                  ? `url(${item.press_release_image})`
                                  : "none",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                              }}
                            >
                              {!item?.press_release_image && (
                                <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                                  No Image
                                </div>
                              )}
                            </div>

                            {/* CONTENT */}
                            <div className="flex flex-col justify-between gap-3">
                              <h2 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">
                                {item.title}
                              </h2>

                              {item.createdAt && (
                                <span className="text-xs text-gray-400 whitespace-nowrap">
                                  {new Date(item.createdAt).toLocaleDateString("en-IN")}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>



                {/* TAGS */}
                {/* <div className="bg-[#D8E5E5] rounded-xl p-5">
                  <h3 className="font-semibold text-gray-800 mb-3">Tags</h3>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Building",
                      "Innovation",
                      "Consultation",
                      "Design",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="bg-white px-3 py-1 rounded-lg text-sm text-gray-700 border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div> */}
              </div>

              {/* keep your search, recent post, tags as-is */}
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
