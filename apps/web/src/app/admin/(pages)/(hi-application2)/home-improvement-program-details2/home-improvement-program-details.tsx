"use client";

import { useState } from "react";
import ClickablePaginationStepper from "@/src/components/admin/ClickablePaginationStepper";

export default function HomeImprovementProgramDetailList() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, title: "Applicant Information", subtitle: "Basic details" },
    { id: 2, title: "Household Information", subtitle: "Members & ages" },
    { id: 3, title: "Property Status", subtitle: "Ownership details" },
    { id: 4, title: "Employment", subtitle: "Job & income" },
    { id: 5, title: "Renovation Details", subtitle: "Work requested" },
    { id: 6, title: "Income Summary", subtitle: "Financial overview" },
    { id: 7, title: "Household Counts", subtitle: "Occupancy details" },
    { id: 8, title: "Liabilities", subtitle: "Mortgage & loans" },
    { id: 9, title: "Certifications", subtitle: "Legal signature" },
    { id: 10, title: "Documents", subtitle: "Uploaded files" },
  ];

  const DOCUMENT_LIST = [
    { label: "Copy of deed to home", required: true },

    { label: "Paid tax receipts (city, school and county)", required: true },

    { label: "Homeowner's insurance policy", required: true },

    { label: "Federal and state tax returns", required: true },

    { label: "Bank statements (last 3 months)", required: true },

    { label: "Pay stubs (last four pay periods)", required: true },

    {
      label: "Employment verification letter (sent directly by employer)",
      required: false,
      uploadDisabled: true,
    },

    // ❌ Benefits verification REMOVED
    // ❌ Land ownership verification REMOVED

    {
      label: "Certificate of Deposit verification",
      required: false, // optional if applicant doesn't have
    },

    {
      label: "Annuity / insurance income verification",
      required: false, // optional if applicant doesn't have
    },

    {
      label: "Liability verification (must match listed payees)",
      required: true,
      isLiability: true,
    },

    {
      label: "Proof of residency (utility bill, internet bill, etc.)",
      required: true,
    },

    {
      label: "Tenant residency affidavit (required only for 2-unit homes)",
      required: false,
      requiresTwoUnit: true,
    },
  ];

  const DetailRow = ({
    label,
    value,
    valueClass = "",
  }: {
    label: string;
    value: string | number;
    valueClass?: string;
  }) => (
    <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm font-medium text-gray-500">{label}</span>
      <span className={`text-sm font-semibold text-gray-800 ${valueClass}`}>
        {value}
      </span>
    </div>
  );

  return (
    <section className="space-y-6 min-w-0  ">
      <ClickablePaginationStepper
        steps={steps}
        activeStep={activeStep}
        onStepClick={(id) => setActiveStep(id)}
      />

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* STEP 1 */}
        {activeStep === 1 && (
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Applicant Information
            </h3>

            {/* Step content container */}
            <div className="min-h-[30vh] max-h-[30vh] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              <DetailRow label="Applicant’s Name" value="Adi Todmal" />
              <DetailRow label="Email" value="aditya@gmail.com" />
              <DetailRow label="Phone" value="9876543210" />
              <DetailRow
                label="Address of Property"
                value="Pune, Maharashtra"
              />
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {activeStep === 2 && (
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">
              Household Members
            </h3>

            <div className="min-h-[30vh] max-h-[30vh] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              {[
                { name: "Mahesh Ravat", age: 32 },
                { name: "Vikrant Rathod", age: 28 },
                { name: "Jaykant Kale", age: 5 },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b border-gray-100 py-1 text-sm"
                >
                  <div>
                    <span className="text-gray-500">Name :</span>{" "}
                    <span className="font-medium text-gray-800">
                      {member.name}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-500">Age :</span>{" "}
                    <span className="font-medium text-gray-800">
                      {member.age}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {activeStep === 3 && (
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Property Status</h3>
            <div className="min-h-[30vh] max-h-[30vh] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              <DetailRow label="Ownership" value="Owned" />
              <DetailRow label="Years Owned" value="6 Years" />
              <DetailRow label="Taxes Paid" value="Yes" />
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {activeStep === 4 && (
          <div className="p-6 space-y-6">
            <h3 className="text-xl font-bold text-gray-800">
              Employment Details
            </h3>
            <div className="min-h-[30vh] max-h-[30vh] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-[10px] font-bold uppercase text-teal-600 mb-2 tracking-widest">
                  Applicant Section
                </p>
                <DetailRow
                  label="Employer Name"
                  value="Ganesh Mehata"
                  valueClass=""
                />
                <DetailRow label="Employer Address" value="Wakad, Pune" />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-[10px] font-bold uppercase text-teal-600 mb-2 tracking-widest">
                  Co-Applicant Section
                </p>
                <DetailRow label="Employer Name" value="Rahul Patil" />
                <DetailRow label="Employer Address" value="Karvenagar, Pune" />
              </div>
            </div>
          </div>
        )}

        {/* STEP 5 */}
        {activeStep === 5 && (
          <div className="p-6 space-y-5">
            <h3 className="text-xl font-bold text-gray-800">
              Renovation & Maintenance
            </h3>

            <div className="min-h-[30vh] max-h-[30vh] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase ">
                  Improvements Requested
                </label>
                <p className="mt-1 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  Replace kitchen cabinets, repaint walls, and update bathroom
                  fixtures
                </p>
              </div>

              {/* ✅ Maintenance Issues as Chips (no outer box) */}
              <div>
                <label className="text-xs font-bold text-red-400 uppercase tracking-wider ">
                  Maintenance Issues Selected
                </label>

                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Heating / Cooling",
                    "Plumbing",
                    "Electrical",
                    "Appliances",
                    "Doors / Windows",
                    "Flooring / Walls",
                    "Pest Concerns",
                    "Safety Issue",
                  ].map((issue, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-xs font-semibold rounded-xl bg-red-50/40 text-gray-700 border border-red-100"
                    >
                      {issue}
                    </span>
                  ))}
                </div>
              </div>

              <DetailRow
                label="Other Requests"
                value="Replace backyard fence"
              />
            </div>
          </div>
        )}

        {/* STEP 6 */}
        {activeStep === 6 && (
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">
              Household Income Details
            </h3>
            <div className="min-h-[30vh] max-h-[30vh] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              <div className="bg-teal-50/30 p-4 rounded-lg border border-teal-100">
                <DetailRow
                  label="Gross Annual Household Income"
                  value="$85,000"
                  valueClass="text-teal-700 text-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 7 */}
        {activeStep === 7 && (
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">
              Household Composition
            </h3>
            <div className="min-h-[30vh] max-h-[30vh] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              <div className="space-y-1">
                <DetailRow label="Total Persons in Dwelling" value="4" />
                <DetailRow label="Number of Children Under 18" value="2" />
              </div>
            </div>
          </div>
        )}

        {/* STEP 8 */}
        {activeStep === 8 && (
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">
              Mortgage & Liabilities
            </h3>

            <div className="min-h-[30vh] max-h-[30vh] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              <DetailRow label="Mortgage Payment" value="Yes" />
              <DetailRow label="Monthly Amount" value="$1,200" />
              <DetailRow label="Balance" value="$150,000" />
              <DetailRow label="Status" value="Current" />
              <DetailRow label="Lender/Mortgagee" value="ABC Bank" />

              <div className="mt-4 p-4 bg-red-50/30 rounded-lg border border-red-100">
                <label className="text-xs font-bold text-red-400 uppercase tracking-tighter">
                  Monthly Liabilities
                </label>
                <p className="text-sm font-semibold text-gray-700 mt-1 italic">
                  Credit Card: $500, Car Loan: $300, Personal Loan: $200
                </p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 9 */}
        {activeStep === 9 && (
          <div className="p-6 space-y-6">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-4">
              Applicant Certification
            </h3>

            <div className="min-h-[30vh] max-h-[30vh] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-white p-2 border-2 border-dashed border-gray-200 rounded-md shrink-0">
                  <img
                    src="https://a.storyblok.com/f/191576/1176x882/0707bde47c/make_signature_hero_after.webp"
                    alt="Signature"
                    className="h-20 w-40 object-contain"
                  />
                </div>
                <div className="w-full space-y-1">
                  <DetailRow label="Legal Name of Signer" value="Adi Todmal" />
                  <DetailRow label="Date & Time" value="01/30/2026, 10:15 AM" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeStep === 10 && (
          <div className="p-6 space-y-5">
            <h3 className="text-xl font-bold text-gray-800">
              Uploaded Documents
            </h3>

            {/* SCROLLABLE CONTAINER START */}
            <div className="min-h-[30vh] max-h-[30vh] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              <div className="divide-y divide-gray-100">
                {DOCUMENT_LIST.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 text-sm gap-3"
                  >
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-gray-800 leading-tight">
                          {doc.label}
                        </span>
                        {doc.required ? (
                          <span className="text-[10px] px-2 py-0.5 rounded-lg bg-red-50 text-red-400 font-semibold">
                            Required
                          </span>
                        ) : (
                          <span className="text-[10px] px-2 py-0.5 rounded-lg bg-gray-50 text-gray-500 font-semibold">
                            Optional
                          </span>
                        )}
                      </div>
                      {(doc.uploadDisabled || doc.requiresTwoUnit) && (
                        <span className="text-[11px] text-gray-400 mt-1">
                          {doc.uploadDisabled
                            ? "Provided by employer"
                            : "Required only for 2-unit homes"}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      className="shrink-0 text-xs font-semibold bg-teal-600 text-white hover:bg-teal-700 px-4 py-1.5 rounded-lg shadow-sm transition w-full sm:w-auto text-center"
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* CSS for custom scrollbar (Add this to your globals.css or a <style> tag) */}
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 5px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #e2e8f0;
                border-radius: 10px;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
}
