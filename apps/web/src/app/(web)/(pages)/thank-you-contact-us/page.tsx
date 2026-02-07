'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ThankYouContactUs() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-10 overflow-hidden">
      <div className="absolute inset-0 opacity-20" />

      {/* Main Card */}
      <div
        className="relative w-full max-w-[520px] rounded-2xl border border-[#bfe8e6] px-6 sm:px-10 py-10 text-center shadow-sm"
        style={{
          background:
            'linear-gradient(93.5deg, rgb(255 255 255) 2.98%, rgb(15 176 164 / 15%) 50.95%, rgb(255 255 255) 100.87%)',
        }}
      >
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#7bcfcb] bg-white relative overflow-hidden">
          <Image
            src="/icons/thank-you.svg"
            alt="Thank You"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#168c87]">
          Thank You
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-[#4b6f6d] leading-relaxed">
          Thank you for contacting us.
          <br />
          Our team will get back to you shortly.
        </p>

        {/* Button */}
        <button
          onClick={() => router.push('/')}
          className="mt-8 inline-flex items-center justify-center rounded-md bg-[#168c87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#137b76] focus:outline-none focus:ring-2 focus:ring-[#168c87]/40"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
}
