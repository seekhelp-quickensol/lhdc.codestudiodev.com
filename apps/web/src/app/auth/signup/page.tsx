import SignUpForm from "@/src/components/admin/auth/SignUpForm"
import Image from "next/image";
import { Suspense } from "react";
export default function SignUpPage() {


  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-[500px] space-y-8 rounded-lg bg-white px-8 py-10 shadow-sm">

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
          <h1 className="text-xl font-semibold mt-3"> Create your account</h1>
          <p className="mt-0 text-sm text-gray-600">
            Get started with your free account
          </p>
        </div>
        <div className="mt-8">
          <Suspense fallback={<div>Loading...</div>}>
            <SignUpForm />
          </Suspense>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <a
              href="/auth/signin"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}