import React from "react";
import Link from "next/link";

const NoBlogsCard = () => {
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="bg-white rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-sm border border-dashed border-gray-300">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-4">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0f766e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M8 8h8M8 12h8M8 16h5" />
          </svg>
        </div>

        {/* Text */}
        <h3 className="text-lg font-semibold text-gray-900">
          No blogs available
        </h3>
        <p className="text-sm text-gray-500 mt-2 max-w-md">
          We don’t have any blog posts to show right now.  
          Please check back later for updates.
        </p>

        {/* Optional CTA */}
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-700"
        >
          Go to Home
          <span className="w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NoBlogsCard;
