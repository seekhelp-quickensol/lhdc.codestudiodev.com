

import { Suspense } from "react";
import SignInForm from "@/src/components/admin/auth/SignInForm";
import Image from "next/image";

export default function SignInPage() {


  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white shadow-sm px-8 py-10 ">
    
        <div className="text-center">
          <div className="image-container">
            <Image
              className="realtive relative top-0 mx-auto"
              src={`/logo.png`}
              alt="Logo"
              width={110}
              height={70}
            />
          </div>
          <h1 className="text-xl font-semibold mt-3">Welcome back</h1>
          <p className="mt-0 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>
        <div className="mt-8">
          <Suspense fallback={<div>Loading...</div>}>
            <SignInForm />
          </Suspense>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Dont have an account? </span>
            <a
              href="/auth/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}