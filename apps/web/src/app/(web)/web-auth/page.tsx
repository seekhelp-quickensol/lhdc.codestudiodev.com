'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function Otp() {
  const router = useRouter();

  return (
    <div className=" w-full p-5 bg-teal-500 relative overflow-hidden">

      
      <div
        className="absolute inset-0 "

      />

      {/* Content wrapper */}
      <div className=" relative z-10 min-h-[100vh] md:min-h-[95vh] bg-white flex items-center justify-center px-4 sm:px-6  rounded-[5px] bg-no-repeat bg-cover" style={{ backgroundImage: "url('/onbording-bg.png')" }}>

        <div className="w-full max-w-xl md:max-w-4xl lg:max-w-6xl mt-5 pb-4">


          {/* Logo */}
          <div className="flex justify-center mb-6 mt-5">
            <Image
              src="/lhdc-logo.png"
              alt="LHDC Logo"
              width={170}
              height={100}
              className="object-contain"
              priority
            />
          </div>

          {/* Header */}
          <div className="text-center p-4 mb-8 md:mb-10 lg:mb-12 xl:mb-12  service-hs">
            <h2 className="text-lg font-semibold text-gray-800">
              Community Housing Services
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-2xl mx-auto">
              Your centralized access to applications, maintenance requests & updates
            </p>
          </div>

          {/* Forms */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px border-l border-dashed border-teal-300" />

            {/* Sign In */}
            <div className="pe-0 lg:pe-[90px]">
              <h3 className="text-base font-semibold text-gray-800 mb-4">
                Sign In to Continue
              </h3>

              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <div className="flex items-start gap-2 mt-3">
                <input type="checkbox" className="mt-1 accent-teal-600 accent-teal" />
                <p className="text-xs text-gray-500">
                  A 6 digit security code will be sent via SMS to verify your Email ID
                </p>
              </div>

             <button
                onClick={() => router.push('/web-auth/create-account')}
                className="mt-5 w-full bg-teal-600 hover:bg-teal-700 
                  text-white text-sm font-medium py-2.5 rounded-md transition"
              >
                Send code
              </button>
            </div>

            {/* Create Account */}
            <div className="pl-0 md:pl-[90px] lg:pl-[90px]">
              <h3 className="text-base font-semibold text-gray-800 mb-4">
                Create Account
              </h3>

              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <label className="text-sm text-gray-600 mt-4 block">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <div className="flex items-start gap-2 mt-3">
                <input type="checkbox" className="mt-1 accent-teal-600" />
                <p className="text-xs text-gray-500">
                  A 6 digit security code will be sent via SMS to verify your Email ID
                </p>
              </div>

              <button
                onClick={() => router.push('/web-auth/create-account')}
                className="mt-5 w-full bg-teal-600 hover:bg-teal-700 
                  text-white text-sm font-medium py-2.5 rounded-md transition"
              >
                Send code
              </button>

            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-12">
            © 2025 LHCDC. All rights reserved
          </p>

        </div>
      </div>
    </div>
  );
}
