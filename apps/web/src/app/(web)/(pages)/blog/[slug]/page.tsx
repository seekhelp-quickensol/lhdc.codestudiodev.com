"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

import Faq from "@/src/components/web/Faq";
import type { Blog } from "@/src/types/web/types";
import { getAllBlogs, getBlogBySlug } from "@/src/services/web/services";

export default function BlogDetailsPage() {
  const { slug } = useParams(); // meta_url
  const searchParams = useSearchParams();

  const isAdminPreview = searchParams.get("preview") === "admin";

  const [blog, setBlog] = useState<Blog | null>(null);
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const res = await getBlogBySlug(
          slug as string,
          isAdminPreview
        );
        setBlog(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, isAdminPreview]);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const res = await getAllBlogs(
          isAdminPreview ? { preview: "admin" } : undefined
        );
        setAllBlogs(res.data.data || []);
      } catch (err) {
        console.error("Failed to load recent blogs", err);
      }
    };

    fetchRecentBlogs();
  }, [isAdminPreview]);


  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!blog) {
    return <p className="text-center py-10">Blog not found</p>;
  }

  return (
    <>
      {/* HERO */}
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
            <Link href="/blog" className="text-white hover:underline">
              Blog
            </Link>

             <span className="text-white text-2xl">›</span>
            <p  className="text-white hover:underline">
              Blog Detail
            </p>
          </nav>

          <h1 className="text-[22px] lg:text-[36px] font-semibold text-white">
            {blog.title}
          </h1>

          {isAdminPreview && (
            <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-yellow-400 text-black">
              Draft Preview
            </span>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-8">
            {blog.blog_image && (
              <div className="relative h-[260px] sm:h-[450px] rounded-2xl overflow-hidden">
                <img
                  src={blog.blog_image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {blog.createdAt && (
              <p className="text-xs uppercase tracking-wide text-gray-500 py-4">
                {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            )}

            <div className="pt-3">
              <h2 className="text-[22px] lg:text-[34px] font-semibold text-gray-900">
                {blog.title}
              </h2>

              <p className="mt-4 text-gray-600 text-sm">
                {blog.short_description}
              </p>

              <div
                className="mt-6 text-gray-700 text-sm leading-relaxed prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: blog.blog_content || "",
                }}
              />
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-24">
              {/* RECENT POSTS */}
              <div className="bg-[#D8E5E5] rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Recent Posts
                </h3>

                <div className="space-y-4">
                  {allBlogs
                    .filter((b) => b.id !== blog.id)
                    .slice(0, 3)
                    .map((b) => (
                      <Link key={b.id} href={`/blog/${b.meta_url}`}>
                        <div className="flex gap-3 bg-white rounded-lg p-3 hover:shadow-sm transition my-5">
                          {/* <div className="w-14 h-14 rounded-md overflow-hidden">
                            {b.blog_image ? (
                              <img
                                src={b.blog_image}
                                className="w-full h-full object-cover"
                                alt={b.title}
                              />
                            ) : (
                              <div className="bg-gray-200 w-full h-full flex items-center justify-center text-xs">
                                No Image
                              </div>
                            )}
                          </div> */}

                          <div
                            className="relative w-full md:w-[100px] h-[100px] rounded-xl overflow-hidden flex-shrink-0 bg-gray-200"
                            style={{
                              backgroundImage: blog?.blog_image
                                ? `url(${b.blog_image})`
                                : "none",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          >
                            {!blog?.blog_image && (
                              <div className="w-full h-full flex items-center justify-center text-gray-500">
                                No Image
                              </div>
                            )}
                          </div>

                          <div className=" justify-between gap-3">
                            <h2 className="text- font-medium">
                              {b.title}
                            </h2>

                            {b.createdAt && (
                              <span className="text-xs text-gray-400 whitespace-nowrap">
                                {new Date(b.createdAt).toLocaleDateString("en-IN")}
                              </span>
                            )}
                          </div>

                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              {/* TAGS */}
              <div className="bg-[#D8E5E5] rounded-md p-5">
                <h3 className="font-semibold mb-3">Tags</h3>

                <div className="flex flex-wrap gap-2">
                  {(typeof blog.tag === "string"
                    ? blog.tag.replace(/[\[\]\"]/g, "").split(",")
                    : blog.tag || []
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
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
