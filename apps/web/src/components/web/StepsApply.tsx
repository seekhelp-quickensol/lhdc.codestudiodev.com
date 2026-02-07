import Image from "next/image";


export default function StepsApply({
   
}) {
   
    return(
        <>
          {/* steps apply */}
                 <section
        className="relative w-full mt-5 py-5  lg:py-16  rounded-2xl  mb-5 mt-5  m:mb-10 m:mt-10 "
        style={{
          backgroundImage: "url('/apply-now.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-[14px] font-semibold tracking-[0.25em] text-[#1A6F6B] mb-3">
            <Image
              src="/icons/home.svg"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            HOW TO APPLY
          </div>

          <h2 className="text-[25px] lg:text-[35px] font-semibold text-white">
            Streamlined Experience, Remarkable Outcomes
          </h2>
        </div>

        <div className="relative w-full px-4   overflow-hidden">
          <div className="hidden md:block absolute h-appy top-1/2 left-0 right-0  border-dashed border-teal border-[1px]" />

          <div className="max-w-7xl mx-auto relative">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-[20px] lg:gap-[160px]">
              <div className="relative flex flex-col items-start">
                <div
                  className="hidden md:hidden lg:block md:flex absolute left-line top-1/2 
          -translate-x-1/2 -translate-y-1/2
          px-5 py-1 text-xs rounded-full
          bg-[#2f3f3f] border border-dashed border-teal text-white z-10"
                >
                  Step 1
                </div>

                
                <div
                  className="w-full h-[300px] rounded-2xl border border-dashed border-teal-400/80
          bg-gradient-to-br from-[#344a4a]/80 to-[#223535]/80
          p-8 backdrop-blur-md flex flex-col justify-start text-left"
                >
                  <div className="text-6xl font-bold text-teal-400 mb-6">
                    01
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">
                    Strategy & Planning
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed">
                    We analyze your goals & create a comprehensive roadmap for
                    success.
                  </p>
                </div>

             
                <div className="hidden absolute left-1/2 -bottom-12 h-10 border-l border-dashed border-teal-400/40" />
              </div>

              <div className="relative flex flex-col items-start">
                <div
                  className="hidden md:hidden lg:block md:flex absolute left-line top-1/2 
          -translate-x-1/2 -translate-y-1/2
          px-5 py-1 text-xs rounded-full
          bg-[#2f3f3f] border border-dashed border-teal text-white z-10"
                >
                  Step 2
                </div>

                <div
                  className="w-full h-[300px] rounded-2xl border border-dashed border-teal-400/80
          bg-gradient-to-br from-[#344a4a]/80 to-[#223535]/80
          p-8 backdrop-blur-md flex flex-col justify-start text-left"
                >
                  <div className="text-6xl font-bold text-teal-400 mb-6">
                    02
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">
                    Strategy & Planning
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed">
                    We analyze your goals & create a comprehensive roadmap for
                    success.
                  </p>
                </div>

                <div className="hidden absolute left-1/2 -bottom-12 h-10 border-l border-dashed border-teal-400/40" />
              </div>

              <div className="relative flex flex-col items-start">
                <div
                  className="hidden md:hidden lg:block md:flex absolute left-line top-1/2 
                     -translate-x-1/2 -translate-y-1/2
                     px-5 py-1 text-xs rounded-full
                        bg-[#2f3f3f] border border-dashed border-teal text-white z-10"
                >
                  Step 3
                </div>

                <div
                  className="w-full h-[300px] rounded-2xl border border-dashed border-teal-400/80
                            bg-gradient-to-br from-[#344a4a]/80 to-[#223535]/80
                         p-8 backdrop-blur-md flex flex-col justify-start text-left"
                >
                  <div className="text-6xl font-bold text-teal-400 mb-6">
                    03
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">
                    Strategy & Planning
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed">
                    We analyze your goals & create a comprehensive roadmap for
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}