"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getPaginatedPressRelease } from "@/src/services/web/services";
import type { PressRelease } from "@/src/types/web/types";


const formatDate = (dateString?: string) => {
  if (!dateString) return { day: "--", month: "--" };

  const d = new Date(dateString);
  return {
    day: d.getDate().toString().padStart(2, "0"),
    month: d.toLocaleString("en-US", { month: "short" }),
  };
};

const PressReleaseHome = () => {
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const [loading, setLoading] = useState(true);

  // Home page → usually latest 3
  const page = 1;
  const limit = 3;

  const fetchPressReleases = async () => {
    setLoading(true);
    try {
      const res = await getPaginatedPressRelease(page, limit);
      if (res.data.success) {
        setPressReleases(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch press releases", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPressReleases();
  }, []);

  return (
    <section className="py-5 px-0 lg:py-20 lg:px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT INTRO */}
        <div className="lg:col-span-1 flex flex-col justify-start md:px-4 lg:px-0">
          <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold uppercase mb-3">
            <Image src="/icons/home.svg" alt="" width={16} height={16} />
            PRESS RELEASE
          </div>

          <h2 className="text-[25px] lg:text-[35px] leading-[1.15] font-semibold text-gray-900 mb-3">
            Stay informed with our recent updates.
          </h2>

          <button
  onClick={() => {
    window.location.href = "/press-release";
  }}
  className="inline-flex items-center gap-2 w-fit bg-teal-600 text-white pe-2 ps-3 py-1 rounded-full text-sm font-medium hover:bg-teal-700 transition"
>
  More Updates
  {/* <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
    <span
      className="relative  text-2xl  leading-none -rotate-45
     
"
    >
      →
    </span>
  </span> */}
  
  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <Image
                           
                            src="/icons/arrow.svg"
                            alt="Arrow"
                            width={13}
                            height={13}
                          />
                        </span>
                      
</button>

        </div>

        {/* RIGHT LIST */}
        <div className="lg:col-span-2 space-y-6">
          {loading && <p>Loading press releases...</p>}

          {!loading &&
            pressReleases.map((item) => {
              const { day, month } = formatDate(item.createdAt);

              return (
                <div
                  key={item.id}
                  className="bg-white relative rounded-2xl p-3 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition"
                >
                  {/* IMAGE */}
                  <div
                    className="relative w-full md:w-[280px] h-[229px] rounded-xl overflow-hidden flex-shrink-0 bg-gray-200"
                    style={{
                      backgroundImage: item?.press_release_image
                        ? `url(${item.press_release_image})`
                        : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {/* DATE BADGE */}
                    <div className="absolute top-3 left-3 bg-white/20 backdrop-blur text-white rounded-lg px-5 py-4 text-center">
                      <div className="text-2xl font-bold leading-none">
                        {day}
                      </div>
                      <div className="text-xs uppercase">{month}</div>
                    </div>

                    {/* FALLBACK */}
                    {!item?.press_release_image && (
                      <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 flex flex-col">
                    <div>
                      <p className="text-xs text-gray-500 mb-2 mt-4">
                        By <span className="text-md text-gray-900">{item.author || "Admin"}</span>
                      </p>

                      <h3 className="text-2xl  text-gray-900 line-clamp-2">
                        {item.title}
                      </h3>
                    </div>

                    {/* READ MORE */}
                    <div className="mt-auto pt-4 pb-4">
                      <Link
                        href={`/press-release/${item.meta_url}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-900"
                      >
                        Read More
                        <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">
                          <Image
                            src="/icons/arrow-white.svg"
                            alt="Arrow"
                            width={13}
                            height={13}
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PressReleaseHome;
