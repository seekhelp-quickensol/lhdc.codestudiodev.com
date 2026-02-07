
import { HiOutlineDocumentText } from "react-icons/hi";

export default function MyApplicationList({
  onViewFthb,
  onViewHi,
  onViewTMR
}: {
  onViewFthb: () => void;
  onViewHi: () => void;
  onViewTMR: () => void;

}) {
  return (
    <>
      <section className="w-full py-10 px-0 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Application Status List
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Track & manage your housing application
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <div className="flex flex-col sm:flex-col md:flex-row items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <HiOutlineDocumentText className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="text-gray-500">Applicant Name :</span>{" "}
                      <span className="font-medium">Adi Todmal</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-500">Application No :</span>{" "}
                      FTHB-2024-08472
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-500">Application Type :</span>{" "}
                      First Time Home Buyer
                    </p>
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 self-start md:self-center">
                  <button
                    type="button"
                    onClick={onViewFthb}
                    className="px-4 py-1.5 rounded-md border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition"
                  >
                    View
                  </button>

                  <span className="px-4 py-1.5 rounded-md border border-blue-400 text-blue-600 text-sm font-medium">
                    Submitted
                  </span>
                </div>
              </div>

              <div className="mt-4 bg-teal-50 text-teal-700 text-sm px-4 py-2 rounded-md">
                Your application is now submitted. It will move to “Under
                Review” in 24 hours.
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <div className="flex flex-col sm:flex-col md:flex-row items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <HiOutlineDocumentText className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="text-gray-500">Applicant Name :</span>{" "}
                      Ganesh Pawar
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-500">Application No :</span>{" "}
                      HI-2024-08472
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-500">Application Type :</span>{" "}
                      Home Improvement Program
                    </p>
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 self-start md:self-center">
                  <button
                    type="button"
                    onClick={onViewHi}
                    className="px-4 py-1.5 rounded-md border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition"
                  >
                    View
                  </button>

                  <span className="px-4 py-1.5 rounded-md border border-green-400 text-green-600 text-sm font-medium">
                    Under Review
                  </span>
                </div>
              </div>

              <div className="mt-4 bg-teal-50 text-teal-700 text-sm px-4 py-2 rounded-md">
                Needed: ID proof, Income statement. Please upload within 10
                days.
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <div className="flex flex-col sm:flex-col md:flex-row items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <HiOutlineDocumentText className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="text-gray-500">Applicant Name :</span>{" "}
                      Manoj Rawat
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-500">Application No :</span>{" "}
                      TMR-2024-90832
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-500">Application Type :</span>{" "}
                      Tenant Maintenance Request
                    </p>
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 self-start md:self-center">
                  <button
                    type="button"
                    onClick={onViewTMR}
                    className="px-4 py-1.5 rounded-md border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition"
                  >
                    View
                  </button>

                  <span className=" h-full px-4 py-1.5 rounded-md border border-cyan-400 text-cyan-600 text-sm font-medium w-fit">
                    Approved
                  </span>
                </div>
              </div>

              <div className="mt-4 bg-teal-50 text-teal-700 text-sm px-4 py-2 rounded-md">
                Staff will review your application within 7 business days &
                update your status accordingly.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
