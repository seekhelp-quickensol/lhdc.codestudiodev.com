import Image from "next/image";

export default function VisionMission({}) {
  return (
    <>
      <section
        className="relative w-full mt-5 py-10  lg:py-20  rounded-2xl mb-[105px] lg:mb-[165px] "
        style={{
          backgroundImage: "url('/apply-now.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0  rounded-2xl" />

        <div className="relative z-10">
          <div className="text-center mb-8 px-4">
            <div className="flex items-center justify-center gap-2 text-[14px] font-semibold tracking-[0.25em] text-[#2FA8A1] mb-3">
              <Image
                src="/icons/home.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
              OUR MISSION,VISION
            </div>

            <h2 className="text-[20px] md:text-[35px] font-semibold text-white">
              Transforming Vision Into Meaningful Action
            </h2>
          </div>

          <div className="max-w-7xl px-3  mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-dashed border-teal-400/50 bg-gradient-to-br from-[#344A4A]/80 to-[#223535]/80 backdrop-blur-md p-8">
                <h3
                  className="
            text-[35px] md:text-[40px] lg:text-[54px]
              font-extrabold
              mb-4
            bg-[linear-gradient(147.5deg,rgba(15,176,164,0.75)_14.28%,rgba(15,176,164,0.12)_80.54%)]
              bg-clip-text text-transparent
                 "
                >
                  Our Vision
                </h3>

                <p className="text-white/100 mb-6 text-[18px]">
                  Building stable futures through safe housing that empowers
                  families and strengthens communities.
                </p>

                <ul className="space-y-4 text-sm text-white/70">
                  <li className="flex gap-3 text-[16px]">
                    <span className="text-[#2FA8A1] mt-1">
                      <Image
                        src="/icons/circle-arrow.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </span>
                    To ensure every individual has access to safe, stable, and
                    affordable housing.
                  </li>
                  <li className="flex gap-3 text-[16px]">
                    <span className="text-[#2FA8A1] mt-1">
                      <Image
                        src="/icons/circle-arrow.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </span>
                    To strengthen communities through long-term housing support
                    systems.
                  </li>
                  <li className="flex gap-3 text-[16px]">
                    <span className="text-[#2FA8A1] mt-1">
                      <Image
                        src="/icons/circle-arrow.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </span>
                    To create a foundation where housing stability enables
                    growth.
                  </li>
                </ul>
              </div>

              {/* OUR MISSION */}
              <div className="rounded-2xl border border-dashed border-teal-400/50 bg-gradient-to-br from-[#344A4A]/80 to-[#223535]/80 backdrop-blur-md p-8">
                <h3
                  className="
                  text-[35px] md:text-[40px] lg:text-[54px]
               font-extrabold
             mb-4
              bg-[linear-gradient(147.5deg,rgba(15,176,164,0.75)_14.28%,rgba(15,176,164,0.12)_80.54%)]
           bg-clip-text text-transparent
               "
                >
                  Our Mission
                </h3>

                <p className="text-white/100 mb-6 text-[16px]">
                  Supporting families with care by securing dignified,
                  people-focused housing solutions.
                </p>

                <ul className="space-y-4 text-sm text-white/70">
                  <li className="flex gap-3 text-[16px]">
                    <span className="text-[#2FA8A1] mt-1">
                      <Image
                        src="/icons/circle-arrow.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </span>
                    To ensure every individual has access to safe, stable, and
                    affordable housing.
                  </li>
                  <li className="flex gap-3 text-[16px]">
                    <span className="text-[#2FA8A1] mt-1">
                      <Image
                        src="/icons/circle-arrow.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </span>
                    To strengthen communities through long-term housing support
                    systems.
                  </li>
                  <li className="flex gap-3 text-[16px]">
                    <span className="text-[#2FA8A1] mt-1">
                      <Image
                        src="/icons/circle-arrow.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </span>
                    To create a foundation where housing stability enables
                    growth.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
