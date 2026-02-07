"use client";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/src/components/web/Faq";

const services = [
  {
    image: "/service/service1.png",
    label: "Home Improvement Program",
    title: "Building Brand Loyalty Through Data-Driven Story telling",
   
  },
  {
    image: "/service/service2.png",
    label: "First Time Home Buyer",
    title: "Building Brand Loyalty Through Data-Driven Story telling",
   
  },
  {
    image: "/service/service3.png",
    label: "Tenant Maintenance Request",
    title: "Building Brand Loyalty Through Data-Driven Story telling",
   
  },
  {
    image: "/service/service4.png",
    label: "Information Request",
    title: "The Rise of Remote Leadership Managing Teams Across Borders",
    
  },
  {
    image: "/service/service5.png",
    label: "Information on Lackawanna Stakeholder’s Coalition",
    title: "Building Brand Loyalty Through Data-Driven Story telling",
    
  },
];
export default function OurServices() {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-6 md:py-10  px-5 lg:px-20 rounded-lg overflow-hidden mt-5"
        style={{
          backgroundImage: "url('about/about-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <nav className="inline-flex items-center gap-4 px-8 py-2 rounded-full bg-teal-transperent backdrop-blur-sm mb-6">
            <Link
              href="/"
              className="text-[15px] md:text-[17px]  text-white  font-medium cursor-pointer hover:underline"
            >
              Home
            </Link>

            <span className="text-white text-2xl leading-none">›</span>

            <span className=" text-[15px] md:text-[17px]  text-white  font-medium">
              Our Services
            </span>
          </nav>

          <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
            <span className="inline-flex items-center gap-3 relative pr-[25px]">
              Community Stories Insights On
              <Image
                src="/icons/top-arrow.svg"
                alt="Top Arrow"
                width={36}
                height={36}
                className="absolute right-[0px]  md:right-[-25px] lg:right-[-50px]  top-[-15px]"
              />
            </span>{" "}
            <br />
            Housing & Development.
          </h1>
        </div>
      </section>

      {/* services*/}
      <section className="blog relative w-full px-0 py-6 md:py-8 lg:py-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <Link key={idx} href="/ " className="group">
                <div className="bg-white rounded-2xl p-4 flex flex-col gap-4 h-full shadow-sm hover:shadow-md transition-all">
                 
                  <div className="relative w-full h-[180px] rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-xs text-gray-500 mb-2">
                        By {item.label}
                      </p>

                      <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-3">
                        {item.title}
                      </h3>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 inline-flex items-center gap-3 text-sm font-medium text-teal-700">
                      Know More
                      <span className="w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center transition group-hover:translate-x-1">
                        <Image
                          src="/icons/arrow-white.svg"
                          alt="Arrow"
                          width={12}
                          height={12}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <Faq />

    
    </>
  );
}
