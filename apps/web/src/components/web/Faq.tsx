"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllFaqs } from "@/src/services/web/services";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
  status: number;
};

export default function Faq() {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [loading, setLoading] = useState(true);

  /* =========================
     FETCH FAQS
  ========================= */
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await getAllFaqs();
        if (res.data?.success) {
          // only active FAQs
          setFaqs(res.data.data.filter((f: FaqItem) => f.status === 1));
        }
      } catch (error) {
        console.error("Failed to fetch FAQs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <section className="bg-[#DEEBEB] w-full py-5 px-4 md:px-4 lg:px-20 lg:py-16 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-5 lg:mb-14">
          <div className="flex justify-center items-center gap-2 text-teal-600 text-sm font-semibold uppercase">
            <Image src="/icons/home.svg" alt="" width={16} height={16} />
            Common Question
          </div>

          <h2 className="text-[20px] lg:text-[35px] mt-3 font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-x-14 items-start">
          {/* LEFT IMAGE */}
          <div className="relative">
            <Image
              src="/faq-person.png"
              alt="FAQ"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 mt-5 lg:mt-0">
            {loading && (
              <p className="text-center text-gray-500">Loading FAQs...</p>
            )}

            {!loading && faqs.length === 0 && (
              <p className="text-center text-gray-500">No FAQs found</p>
            )}

            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl px-4 md:px-6 py-4 shadow-md"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex justify-between w-full text-left"
                  >
                    <span className="text-[16px] md:text-[18px] font-medium text-gray-900 pt-1.5">
                      {item.question}
                    </span>

                    <span className="w-10 h-10 rounded-full border border-teal-600 text-teal-600 flex items-center justify-center text-lg">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? "500px" : "0px" }}
                  >
                    <p className="mt-2 text-md text-gray-600 leading-tight">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
