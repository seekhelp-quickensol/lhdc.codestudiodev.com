"use client";
import Image from "next/image";

import Link from "next/link";


export default function TermsAndConditions() {

  return (
    <>
      {/* title */}
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
            Terms And Conditions
            </span>
          </nav>
 

          {/* Heading */}
          <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
            <span className="inline-flex items-center gap-3 relative pr-[25px]">
            Our Housing Program Services are 
              <Image
                src="/icons/top-arrow.svg"
                alt="Top Arrow"
                width={36}
                height={36}
                className="absolute right-[0px] md:right-[-20px] lg:right-[-50px]  top-[-15px]"
              />
            </span>{" "}
            <br />
           grounded in strong governance.
          </h1>
        </div>
      </section>
      {/* end */}



     <section className="py-10 px-5 lg:px-0">
        <div className="max-w-7xl mx-auto px-0">
          <h1 className="text-[20px] md:text-[25px] font-semibold text-gray-900 leading-tight border-b border-gray-300 pb-5">
          Terms And Conditions
          </h1>

          <div className="mt-4 space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>
              Recognize that exceptional customer experiences are at the heart
              of every successful business. Our Customer Experience Solutions
              are crafted to help you transform every interaction your customers
              have with your brand into a meaningful & positive one. We believe
              that understanding the customer journey & delivering personalized,
              seamless experiences can significantly increase customer loyalty,
              satisfaction, & lifetime value
            </p>

            <p>
              Our approach to customer experience is comprehensive &
              data-driven. We start by evaluating your existing customer
              touchpoints, identifying areas that need improvement, & applying
              valuable insights to create strategies aligned with your
              customers’ evolving expectations. From optimizing digital
              platforms to enhancing service workflows, our goal is to ensure
              that every aspect of the customer journey feels intuitive,
              efficient, & engaging.
            </p>

            <p>
              At LHDC, we dont just focus on solving customer problems—we focus
              on building experiences that delight, connect, & cultivate
              long-lasting relationships. Whether its elevating customer service
              operations, leveraging innovative technologies, or designing more
              compelling digital experiences, our team is dedicated to helping
              you exceed customer expectations at every stage. We help you
              understand your customers deeply, optimize their experience, &
              create a journey that consistently drives trust, satisfaction, &
              growth. At LHDC, we dont just focus on solving customer
              problems—we focus on building experiences that delight, connect, &
              cultivate long-lasting relationships. Whether its elevating
              customer service operations, leveraging innovative technologies,
              or designing more compelling digital experiences, our team is
              dedicated to helping you exceed customer expectations at every
              stage. We help you understand your customers deeply, optimize
              their experience, & create a journey that consistently drives
              trust, satisfaction, & growth
            </p>

            <p>
              Our approach to customer experience is comprehensive &
              data-driven. We start by evaluating your existing customer
              touchpoints, identifying areas that need improvement, & applying
              valuable insights to create strategies aligned with your
              customers’ evolving expectations. From optimizing digital
              platforms to enhancing service workflows, our goal is to ensure
              that every aspect of the customer journey feels intuitive,
              efficient, & engaging.
            </p>

            <p>
              At LHDC, we dont just focus on solving customer problems—we focus
              on building experiences that delight, connect, & cultivate
              long-lasting relationships. Whether its elevating customer service
              operations, leveraging innovative technologies, or designing more
              compelling digital experiences, our team is dedicated to helping
              you exceed customer expectations at every stage. We help you
              understand your customers deeply, optimize their experience, &
              create a journey that consistently drives trust, satisfaction, &
              growth. At LHDC, we dont just focus on solving customer
              problems—we focus on building experiences that delight, connect, &
              cultivate long-lasting relationships. Whether its elevating
              customer service operations, leveraging innovative technologies,
              or designing more compelling digital experiences, our team is
              dedicated to helping you exceed customer expectations at every
              stage. We help you understand your customers deeply, optimize
              their experience, & create a journey that consistently drives
              trust, satisfaction, & growth. Our approach to customer experience
              is comprehensive & data-driven. We start by evaluating your
              existing customer touchpoints, identifying areas that need
              improvement, & applying valuable insights to create strategies
              aligned with your customers’ evolving expectations. From
              optimizing digital platforms to enhancing service workflows, our
              goal is to ensure that every aspect of the customer journey feels
              intuitive, efficient, & engaging. At LHDC, we dont just focus on
              solving customer problems—we focus on building experiences that
              delight, connect, & cultivate long-lasting relationships. Whether
              its elevating customer service operations, leveraging innovative
              technologies, or designing more compelling digital experiences,
              our team is dedicated to helping you exceed customer expectations
              at every stage. We help you understand your customers deeply,
              optimize their experience, & create a journey that consistently
              drives trust, satisfaction, & growth. At LHDC, we dont just focus
              on solving customer problems—we focus on building experiences that
              delight, connect, & cultivate long-lasting relationships. Whether
              its elevating customer service operations, leveraging innovative
              technologies, or designing more compelling digital experiences,
              our team is dedicated to helping you exceed customer expectations
              at every stage. We help you understand your customers deeply,
              optimize their experience, & create a journey that consistently
              drives trust, satisfaction, & growth.
            </p>

            <p>
              Our approach to customer experience is comprehensive &
              data-driven. We start by evaluating your existing customer
              touchpoints, identifying areas that need improvement, & applying
              valuable insights to create strategies aligned with your
              customers’ evolving expectations. From optimizing digital
              platforms to enhancing service workflows, our goal is to ensure
              that every aspect of the customer journey feels intuitive,
              efficient, & engaging.
            </p>
          </div>
        </div>
      </section>
   



       

     
    </>
  );
}
