
'use client';

import TermsConditions from '@/src/components/web/TermsConditions';
import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';


export default function Login() {
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);
const router = useRouter();

  return (
    <div className="w-full p-5 bg-teal-500 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0" />

      {/* Main container */}
      <div
        className="pb-4 relative z-10 min-h-[100vh] lg:min-h-[95vh] bg-white flex items-center justify-center px-4 sm:px-6 rounded-[5px] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/onbording-bg.png')" }}
      >
        <div className="w-full max-w-xl md:max-w-4xl lg:max-w-6xl mt-5">
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
          <div className="text-center p-4 mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-lg font-semibold text-gray-800">
              Community Housing Services
            </h2>
         
            <p className="text-sm text-gray-500 mt-1 max-w-2xl mx-auto">
              Your centralized access to applications, maintenance requests &
              updates
            </p>
            
          </div>

          {/* Forms */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px border-l border-dashed border-teal-300" />


  {/* Create Account */}
             {/* Sign In */}
            <div className="pe-0  lg:pe-[90px]">
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
                onClick={() => router.push('/web-auth/welcome')}
                className="mt-5 w-full bg-teal-600 hover:bg-teal-700 
                  text-white text-sm font-medium py-2.5 rounded-md transition"
              >
                Send code
              </button>
            </div>
            {/* OTP Section */}
            <div className="max-w-md w-full ps-0  lg:ps-[90px]">
              <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
                Check your inbox for the code
              </h3>

              <p className="text-[13px] text-gray-500 leading-relaxed mb-6 max-w-sm">
                A 6-digit verification code has been sent. Enter the code below.
              </p>

              {/* OTP Inputs */}
              <div className="flex justify-between mb-6">
                {[...Array(6)].map((_, i) => (
                  <input
                    key={i}
                    ref={(el) => { otpRefs.current[i] = el; }}
                    type="text"
                    maxLength={1}
                    inputMode="numeric"
                    className="w-[12%] h-[45px] lg:h-[45px] rounded-[6px] border border-teal-400 text-center text-[16px] font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                    onChange={(e) => {
                      if (e.target.value && otpRefs.current[i + 1]) {
                        if (otpRefs.current[i + 1] !== null) {
                          otpRefs.current[i + 1]?.focus();
                        }
                      }
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key === 'Backspace' &&
                        !(e.target as HTMLInputElement).value &&
                        otpRefs.current[i - 1]
                      ) {
                        if (otpRefs.current[i - 1]) {
                          otpRefs.current[i - 1]?.focus();
                        }
                      }
                    }}
                  />
                ))}
              </div>

              {/* Verify Button */}
             
               <button
                onClick={() => router.push('/web-auth/wx`x`elcome')}
                className="mt-5 w-full bg-teal-600 hover:bg-teal-700 
                  text-white text-sm font-medium py-2.5 rounded-md transition mb-4"
              >
                Verify OTP
              </button>


              {/* Resend */}
              <p className="text-[12px] text-gray-500">
                Didn’t receive an email? Try checking your folder.
                <span className="text-teal-600 cursor-pointer ml-1 hover:underline">
                  Resend code
                </span>
              </p>
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
