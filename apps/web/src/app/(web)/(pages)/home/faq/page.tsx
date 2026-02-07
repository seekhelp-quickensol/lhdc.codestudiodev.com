import Image from "next/image";
import { useState } from "react";
const faqs = [
  {
    question:
      "What Is Digital Transformation ? Why Is It Important For Businesses?",
    answer:
      "Digital transformation is the process of integrating digital technologies into all areas of a business to improve operations, enhance customer value, and drive innovation. It helps businesses stay competitive, improve efficiency, and adapt to changing market demands.",
  },
  {
    question:
      "What Are The Key Challenges Companies Face  Digital Transformation?",
    answer:
      "Common challenges include resistance to change, lack of digital skills, legacy systems, data security concerns, and unclear transformation strategies. Successful transformation requires strong leadership, proper planning, and employee engagement.",
  },
  {
    question: "How Does Digital Transformation Improve Customer Experience ?",
    answer:
      "Digital transformation enables businesses to automate processes, personalize customer interactions, and deliver faster services. This leads to improved customer satisfaction, reduced operational costs, and more efficient workflows.",
  },
  {
    question: "How Does Transformation Improve Business Decision-Making?",
    answer:
      "By leveraging data analytics, AI, and real-time reporting, digital transformation provides valuable insights into customer behavior and business performance, helping leaders make faster, smarter, and more informed decisions.",
  },
  {
    question:
      "How Can Small Businesses Start Their Digital Transformation Journey?",
    answer:
      "Small businesses can start by identifying key areas where technology adds the most value, such as automating routine tasks, improving customer engagement, or adopting cloud-based tools. Partnering with digital experts can ensure a smooth and cost-effective transition.",
  },
];

export default function Faq({}) {
  const [openIndex, setOpenIndex] = useState<number | null>(4);
  return (
    <>
      {/* FAQ */}
      <section className="bg-[#DEEBEB] w-full  py-5 px-4 md:px-4 lg:px-20 lg:py-16 rounded-2xl">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-5 lg:mb-14">
            <div className="flex justify-center items-center gap-2 text-teal-600 text-sm font-semibold uppercase">
              <Image
                src="/icons/home.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
              Common Question
            </div>
            <h2 className="text-[20px] lg:text-[35px] mt-3 leading-[1.15] font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-x-14 items-start">
            <div className="relative">
              <div className="relative w-full rounded-2xl overflow-hidden">
                <Image
                  src="/faq-person.png"
                  alt="FAQ"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />

                <div className="absolute bottom-0 right-0 bg-[#ecf0f0] rounded-tl-2xl pt-2 pl-2 md:pt-3 md:pl-3">
                  <div className="bg-teal-600 text-white p-3 md:p-6 w-[200px] h-[230px]  md:w-[250px] md:h-[280px] lg:w-[230px] lg:h-[250px] rounded-2xl shadow-xl flex flex-col justify-between">
                    <h3 className="text-[20px] lg:text-[24px] font-semibold leading-snug">
                      Everything You Need To Know Before Starting?
                    </h3>

                    <button className="inline-flex items-center justify-between px-4 py-2 rounded-full border border-white font-medium hover:bg-white/10 transition cursor-default">
                      <span>FAQ Overview</span>
                      <span className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center">
                        <Image
                          src="/icons/arrow.svg"
                          alt="Arrow"
                          width={14}
                          height={14}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT SECTION */}
            <div className="space-y-6 mt-5 md:mt-5 lg:mt-0">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`bg-white rounded-xl px-4 md:px-6 py-4 transition-all shadow-md`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="text-[14px] md:text-[16px] font-medium text-gray-900 w-[240px] md:w-full lg:w-full">
                        {item.question}
                      </span>
                     <div className="w-12 h-12 flex items-center justify-center ">
                      <span className="w-10 h-10 rounded-full border border-teal-600 text-teal-600 flex items-center justify-center text-lg">
                        {isOpen ? "−" : "+"}
                      </span>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300`}
                      style={{
                        maxHeight: isOpen ? "500px" : "0px",
                      }}
                    >
                      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
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
    </>
  );
}
