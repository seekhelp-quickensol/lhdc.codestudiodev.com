"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/src/components/web/Faq";
import type { PressRelease } from "@/src/types/web/types";
import { getPaginatedPressRelease, getPressReleaseBySlug } from "@/src/services/web/services";

export default function PressReleseDetails() {
  const { slug } = useParams();
  const [data, setData] = useState<PressRelease | null>(null);
  const [loading, setLoading] = useState(true);
  const [recentPress, setRecentPress] = useState<PressRelease[]>([]);


  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    getPressReleaseBySlug(slug as string)
      .then((res) => {
        if (res.data.success) {
          setData(res.data.data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
  const fetchRecent = async () => {
    try {
      const res = await getPaginatedPressRelease(1, 3);
      if (res.data.success) {
        setRecentPress(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch recent press releases", err);
    }
  };

  fetchRecent();
}, []);

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!data) {
    return <p className="text-center py-10">Press release not found</p>;
  }

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
            <Link href="/press-release" className="text-white hover:underline">
              Press Release
            </Link>
            <span className="text-white text-2xl">›</span>
            <p  className="text-white hover:underline">
              Press Release Details
            </p>
            
          </nav>

          <h1 className="text-[22px] lg:text-[36px] font-semibold text-white">
            {data.title}
          </h1>

        
        </div>
      </section>


      {/* CONTENT */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-8">
            <div
  className="relative h-[240px] sm:h-[450px] rounded-2xl overflow-hidden bg-gray-200"
  style={{
    backgroundImage: data?.press_release_image
      ? `url(${data.press_release_image})`
      : "url('/profile3.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
              
            </div>

            

            <div className="pt-6">


              <span className="text-xs text-gray-500 uppercase">
                By{" "}
                <span className="text-md text-gray-900 uppercase">
                  {data.author || "Admin"}
                </span>
              </span>

              <h1 className="mt-3 text-4xl sm:text-3xl font-semibold">
                {data.title}
              </h1>

              <p className="mt-4 text-gray-600 text-md">
                {data.short_description}
              </p>

              <div
                className="mt-6 text-gray-700 text-md leading-relaxed prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: data.press_release_content || "",
                }}
              />
            </div>

            
          </div>

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

  <div className="space-y-4 ">
    {recentPress.slice(1).map((item) => (
      <Link
        key={item.id}
        href={`/press-release/${item.meta_url}`}
      >
        <div className="flex gap-3 bg-white rounded-lg p-3 hover:shadow-sm transition mb-4">
          <div
            className="w-[90px] h-[90px] rounded-lg bg-cover bg-center flex-shrink-0"
            style={{
              backgroundImage: item.press_release_image
                ? `url(${item.press_release_image})`
                : "none",
            }}
          />

          <div className="flex flex-col justify-between">
            <h2 className="text-sm font-medium text-gray-900 line-clamp-2">
              {item.title}
            </h2>

            <span className="text-xs text-gray-400">
              {new Date(item.createdAt).toLocaleDateString("en-IN")}
            </span>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>




                {/* TAGS */}
              <div className="bg-[#D8E5E5] rounded-md p-5">
                <h3 className="font-medium mb-3">Tags</h3>

                <div className="flex flex-wrap gap-2">
                  {(typeof data.tag === "string"
                    ? data.tag.replace(/[\[\]\"]/g, "").split(",")
                    : data.tag || []
                  )
                    .map((t) => t.trim())
                    .filter(Boolean)
                    .map((tag, i) => (
                      <span
                        key={i}
                        className="bg-white text-md px-3 py-2 rounded-xl"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
               
              </div>

              {/* keep your search, recent post, tags as-is */}
            </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
