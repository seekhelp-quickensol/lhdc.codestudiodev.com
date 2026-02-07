"use client";

import { useState } from "react";
import ClickablePaginationStepper from "@/src/components/admin/ClickablePaginationStepper";
import ContractQuotation from "./contract-quotation";
import AgreementDocumentStep from "./agreement-documents";
import SiteVisitStep from "./site-visit";

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
    <div className="space-y-6 min-w-0 overflow-hidden">
      <ClickablePaginationStepper
        steps={steps}
        activeStep={activeStep}
        onStepClick={(id) => setActiveStep(id)}
      />

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* STEP 1 */}
        {activeStep === 1 && (
          <div className="p-6 min-h-[260px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Applicant Information
            </h3>

            <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b last:border-b-0">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                      Applicant’s Name
                    </td>
                    <td className="px-4 py-3 text-gray-900">Adi Todmal</td>
                  </tr>

                  <tr className="border-b last:border-b-0">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Email
                    </td>
                    <td className="px-4 py-3 text-gray-900">
                      aditya@gmail.com
                    </td>
                  </tr>

                  <tr className="border-b last:border-b-0">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Phone
                    </td>
                    <td className="px-4 py-3 text-gray-900">9876543210</td>
                  </tr>

                  <tr>
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Address of Property
                    </td>
                    <td className="px-4 py-3 text-gray-900">
                      Pune, Maharashtra
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {activeStep === 2 && (
          <div className="p-6 min-h-[260px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Household Members
            </h3>

            <div className="space-y-4">
              {[
                { name: "Mahesh Ravat", age: 32 },
                { name: "Vikrant Rathod", age: 28 },
                { name: "Jaykant Kale", age: 5 },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden border border-gray-200 rounded-xl bg-white"
                >
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b last:border-b-0">
                        <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                          Name
                        </td>
                        <td className="px-4 py-3 text-gray-900">
                          {member.name}
                        </td>
                      </tr>

                      <tr>
                        <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                          Age
                        </td>
                        <td className="px-4 py-3 text-gray-900">
                          {member.age}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {activeStep === 3 && (
          <div className="p-6 min-h-[260px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Property Status
            </h3>

            <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b last:border-b-0">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                      Ownership
                    </td>
                    <td className="px-4 py-3 text-gray-900">Owned</td>
                  </tr>

                  <tr className="border-b last:border-b-0">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Years Owned
                    </td>
                    <td className="px-4 py-3 text-gray-900">6 Years</td>
                  </tr>

                  <tr>
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Taxes Paid
                    </td>
                    <td className="px-4 py-3 text-gray-900">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {activeStep === 4 && (
          <div className="p-6 min-h-[260px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Employment Details
            </h3>

            <div className="space-y-6">
              {/* Applicant Section */}
              <div>
                <p className="text-[10px] font-bold uppercase text-teal-600 mb-2 tracking-widest">
                  Applicant Section
                </p>

                <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b last:border-b-0">
                        <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                          Employer Name
                        </td>
                        <td className="px-4 py-3 text-gray-900">
                          Ganesh Mehata
                        </td>
                      </tr>

                      <tr>
                        <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                          Employer Address
                        </td>
                        <td className="px-4 py-3 text-gray-900">Wakad, Pune</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Co-Applicant Section */}
              <div>
                <p className="text-[10px] font-bold uppercase text-teal-600 mb-2 tracking-widest">
                  Co-Applicant Section
                </p>

                <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b last:border-b-0">
                        <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                          Employer Name
                        </td>
                        <td className="px-4 py-3 text-gray-900">Rahul Patil</td>
                      </tr>

                      <tr>
                        <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                          Employer Address
                        </td>
                        <td className="px-4 py-3 text-gray-900">
                          Karvenagar, Pune
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5 */}
        {activeStep === 5 && (
          <div className="p-6 min-h-[260px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Renovation & Maintenance
            </h3>

            <div className="space-y-4">
              {/* Improvements Requested */}
              <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                        Improvements Requested
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        Replace kitchen cabinets, repaint walls, and update
                        bathroom fixtures
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Maintenance Issues Selected - small heading */}
              <p className="text-[10px] font-bold uppercase text-red-500 tracking-widest mt-2">
                Maintenance Issues Selected
              </p>

              {/* Issues Table (same UI as Step 1) */}
              <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b last:border-b-0">
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                        Heating / Cooling
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </td>
                    </tr>

                    <tr className="border-b last:border-b-0">
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        Plumbing
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        Fix leaking pipes, replace bathroom faucets
                      </td>
                    </tr>

                    <tr className="border-b last:border-b-0">
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        Electrical
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        Replace old wiring, install additional sockets
                      </td>
                    </tr>

                    <tr className="border-b last:border-b-0">
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        Appliances
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        Replace kitchen oven and refrigerator
                      </td>
                    </tr>

                    <tr className="border-b last:border-b-0">
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        Doors / Windows
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        Repair main door hinges, replace broken window glass
                      </td>
                    </tr>

                    <tr className="border-b last:border-b-0">
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        Flooring / Walls
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        Repaint living room walls, fix cracked tiles
                      </td>
                    </tr>

                    <tr className="border-b last:border-b-0">
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        Pest Concerns
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        Termite treatment in basement
                      </td>
                    </tr>

                    <tr>
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        Safety Issue
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        Fix loose railing on staircase
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Other Requests */}
              <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                        Other Requests
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* STEP 6 */}
        {activeStep === 6 && (
          <div className="p-6 min-h-[260px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Household Income Details
            </h3>

            <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                      Gross Annual Household Income
                    </td>
                    <td className="px-4 py-3 text-gray-900 font-semibold">
                      $85,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* STEP 7 */}
        {activeStep === 7 && (
          <div className="p-6 min-h-[260px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Household Composition
            </h3>

            <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b last:border-b-0">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                      Total Persons in Dwelling
                    </td>
                    <td className="px-4 py-3 text-gray-900">4</td>
                  </tr>

                  <tr>
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Number of Children Under 18
                    </td>
                    <td className="px-4 py-3 text-gray-900">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* STEP 8 */}
        {activeStep === 8 && (
          <div className="p-6 min-h-[260px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Mortgage & Liabilities
            </h3>

            {/* Table 1: Mortgage Details */}
            <div className="overflow-hidden border border-gray-200 rounded-xl bg-white mb-4">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                      Mortgage Payment
                    </td>
                    <td className="px-4 py-3 text-gray-900">Yes</td>
                  </tr>

                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Monthly Amount
                    </td>
                    <td className="px-4 py-3 text-gray-900">$1,200</td>
                  </tr>

                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Balance
                    </td>
                    <td className="px-4 py-3 text-gray-900">$150,000</td>
                  </tr>

                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Status
                    </td>
                    <td className="px-4 py-3 text-gray-900">Current</td>
                  </tr>

                  <tr>
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Lender / Mortgagee
                    </td>
                    <td className="px-4 py-3 text-gray-900">ABC Bank</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Small heading for Monthly Liabilities */}
            <p className="text-[10px] font-bold uppercase text-red-500 tracking-widest mb-2">
              Monthly Liabilities
            </p>

            {/* Table 2: Monthly Liabilities */}
            <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                      Credit Card
                    </td>
                    <td className="px-4 py-3 text-gray-900">$500</td>
                  </tr>

                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Car Loan
                    </td>
                    <td className="px-4 py-3 text-gray-900">$300</td>
                  </tr>

                  <tr>
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Personal Loan
                    </td>
                    <td className="px-4 py-3 text-gray-900">$200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeStep === 9 && (
          <div className="p-6 min-h-[260px]">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-4 mb-4">
              Applicant Certification
            </h3>

            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Signature */}
              <div className="shrink-0 border-2 border-dashed border-gray-200 rounded-md bg-white p-2">
                <img
                  src="https://a.storyblok.com/f/191576/1176x882/0707bde47c/make_signature_hero_after.webp"
                  alt="Signature"
                  className="h-20 w-40 object-contain"
                />
              </div>

              {/* Table with signer details */}
              <div className="flex-1 overflow-hidden border border-gray-200 rounded-xl bg-white">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                        Legal Name of Signer
                      </td>
                      <td className="px-4 py-3 text-gray-900">Adi Todmal</td>
                    </tr>

                    <tr>
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        Date & Time
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        01/30/2026, 10:15 AM
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeStep === 10 && (
          <div className="p-6 min-h-[260px]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Uploaded Documents
            </h3>

            <div className="space-y-4 max-h-[510px] overflow-y-auto pr-2 custom-scrollbar">
              {DOCUMENT_LIST.map((doc, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden border border-gray-200 rounded-xl bg-white"
                >
                  <table className="w-full text-sm">
                    <tbody>
                      <tr>
                        {/* Left: Document Name + Tags */}
                        <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-2/3">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <span>{doc.label}</span>
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

                            {doc.uploadDisabled && (
                              <span className="text-[11px] text-gray-400">
                                Provided by employer
                              </span>
                            )}

                            {doc.requiresTwoUnit && (
                              <span className="text-[11px] text-gray-400">
                                Required only for 2-unit homes
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Right: View Button */}
                        <td className="px-4 py-3 text-right">
                          <button
                            type="button"
                            className="text-xs font-semibold bg-teal-600 text-white hover:bg-teal-700 px-4 py-1.5 rounded-lg shadow-sm transition"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>

            {/* Optional custom scrollbar CSS */}
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #e2e8f0;
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #cbd5e1;
              }
            `}</style>
          </div>
        )}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <ContractQuotation />
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <AgreementDocumentStep />
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <SiteVisitStep />
      </div>
    </div>
    
  );
}
