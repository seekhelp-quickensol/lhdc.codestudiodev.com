"use client";

import { useRouter } from "next/navigation";

import ApplicationTimeline from "../application-timeline";
import UploadQuotation from "../upload-quotation";
import AgreementDocument from "../agreement-document";
import Link from "next/link";

export default function MyApplicationDetail() {
  const router = useRouter();
  return (
    <>
    {/* Banner */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-6 md:py-10 px-5 lg:px-20 rounded-lg overflow-hidden mt-5"
        style={{ backgroundImage: "url('about/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <nav className="inline-flex items-center gap-4 px-8 py-2 rounded-full bg-teal-transperent backdrop-blur-sm mb-6">
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
            <span className="text-white text-2xl">›</span>

            <Link href="/my-application" className="text-white hover:underline">
              My Application
            </Link>
            <span className="text-white text-2xl">›</span>
            <span className="text-white font-sm">Application Status Detail </span>
          </nav>

          <h1 className="text-white text-[20px] lg:text-[35px] font-semibold">
            First Time Home Buyer Application Detail
          </h1>
        </div>
      </section>
      <section className="w-full py-10 px-0 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8  flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Application Status Detail
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Track & manage your housing application
              </p>
            </div>
            <button
              onClick={() => router.push("/my-application")}
              className="px-4 py-2 mt-4 border rounded-md text-sm bg-white whitespace-nowrap"
            >
              ← Back to Applications
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
            {/* 70% Section */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="min-h-[260px]">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-4">
                    Applicant Information
                  </h3>

                  <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b last:border-b-0">
                          <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                            Applicant Name
                          </td>
                          <td className="px-4 py-3 text-gray-900">
                            Adi Todmal
                          </td>
                        </tr>
                        <tr className="border-b last:border-b-0">
                          <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                            Application No
                          </td>
                          <td className="px-4 py-3 text-gray-900">
                            FTHB-2024-08472
                          </td>
                        </tr>
                        <tr className="border-b last:border-b-0">
                          <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                            Application Type
                          </td>
                          <td className="px-4 py-3 text-gray-900">
                            First Time Home Buyer
                          </td>
                        </tr>
                        <tr className="border-b last:border-b-0">
                          <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                            Email
                          </td>
                          <td className="px-4 py-3 text-gray-900">
                            adi@gmail.com
                          </td>
                        </tr>
                        <tr className="border-b last:border-b-0">
                          <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                            Phone
                          </td>
                          <td className="px-4 py-3 text-gray-900">
                            9876543210
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                            Address
                          </td>
                          <td className="px-4 py-3 text-gray-900">
                            123 Main St, Springfield, IL 62704
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-end justify-end gap-4 mt-4">
                    <button
                      onClick={() =>
                        router.push(
                          "/first-time-home-buyer-application-form?mode=view",
                        )
                      }
                      className="px-5 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
                    >
                      View Application
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <UploadQuotation />
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <AgreementDocument />
              </div>
            </div>

            {/* 30% Empty Section */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-6 pl-5  shadow-sm ">
                <ApplicationTimeline />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
