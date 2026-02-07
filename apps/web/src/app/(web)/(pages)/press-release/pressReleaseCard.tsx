import Image from "next/image";
import Link from "next/link";
import { PressRelease } from "@/src/types/web/types";

const PressReleaseCard = ({ item }: { item: PressRelease }) => {
  return (
    <div className="mb-8">
      {/* IMAGE WRAPPER */}
      <div className="relative h-[240px] sm:h-[450px] rounded-2xl overflow-hidden">

        {/* Background Image */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: item?.press_release_image
              ? `url(${item.press_release_image})`
              : "url(/profile3.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* DATE BOX */}
        <div
          className="
            absolute top-4 left-4
            w-[110px] h-[140px]
            rounded-[6px]
            bg-white/20
            backdrop-blur-[1px]
            flex flex-col items-center justify-center
            gap-[6px]
            text-center
          "
        >
          <span className="text-[36px] font-semibold text-white leading-none">
            {new Date(item.createdAt).getDate()}
          </span>

          <span className="text-[14px] uppercase tracking-wide text-white">
            {new Date(item.createdAt).toLocaleString("en-US", {
              month: "short",
            })}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="pt-6">
        <span className="text-xs text-gray-500 uppercase">
          By{" "}
          <span className="text-sm text-gray-900 uppercase">
            {item.author || "Admin"}
          </span>
        </span>

        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900">
          {item.title}
        </h2>

        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          {item.short_description}
        </p>

        <div className="mt-4">
          <Link
            href={`/press-release/${item.meta_url}`}
            className="inline-flex items-center gap-2 text-sm font-medium"
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
};

export default PressReleaseCard;
