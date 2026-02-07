"use client";

import Link from "next/link";
import Faq from "@/src/components/web/Faq";
import MyApplicationListPage from "./my-application-list/page";
import { useRouter } from "next/navigation";

export default function MyApplication() {

    const router = useRouter();
 

  return (
    <>
      {/* Banner */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-6 md:py-10 px-5 lg:px-20 rounded-lg overflow-hidden mt-5"
        style={{ backgroundImage: "url('about/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <nav className="inline-flex items-center gap-4 px-8 py-2 rounded-full bg-teal-transperent backdrop-blur-sm mb-6">
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
            <span className="text-white text-2xl">›</span>
            <span className="text-white font-medium">My Application</span>
          </nav>

          <h1 className="text-white text-[20px] lg:text-[35px] font-semibold">
            Applications List
          </h1>
        </div>
      </section>

      <MyApplicationListPage
        onViewFthb={() => router.push("/my-application/my-application-detail")}
        onViewHi={() => router.push("/my-application/my-application-detail-hi")}
        onViewTMR={() => router.push("/my-application/my-application-detail-tmr")}
      />


      <Faq />
    </>
  );
}
