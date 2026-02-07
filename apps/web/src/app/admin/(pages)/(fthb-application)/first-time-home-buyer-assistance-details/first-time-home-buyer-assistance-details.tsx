"use client";

import { useState } from "react";
import ClickablePaginationStepper from "@/src/components/admin/ClickablePaginationStepper";
import ContractQuotationStep from "../../(hi-application)/home-improvement-program-details/contract-quotation";
import AgreementDocumentStep from "../../(hi-application)/home-improvement-program-details/agreement-documents";
import SiteVisitStep from "../../(hi-application)/home-improvement-program-details/site-visit";

export default function FirstTimeHomeBuyerAssistanceDetailList() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, title: "Applicant Information", subtitle: "Basic details" },
    { id: 2, title: "Current Employment", subtitle: "Job & income" },
    { id: 3, title: "Liabilities", subtitle: "Payee & amounts" },
    { id: 4, title: "Certifications", subtitle: "Legal authorizations" },
    { id: 5, title: "Document upload", subtitle: "Uploaded files" },
  ];

  const DOCUMENT_LIST = [
    { label: "Copy of Photo Identification", required: true },
    {
      label: "Mortgage Pre-Qualification or Pre-Approval Letter",
      required: true,
    },
    {
      label:
        "Proof of Homebuyer Education Workshop Completion (copy of certificate)",
      required: true,
    },
    {
      label: "Latest Federal & State Income Tax Filings (All Schedules & W-2s)",
      required: true,
    },
    {
      label: "Verification of Checking & Savings Accounts (Last 3 Months)",
      required: true,
    },
    { label: "Household Income Documents (All Members)", required: true },
    { label: "Employment Verification (4 Recent Pay Stubs)", required: true },
    { label: "Employment Verification Letter", required: true },

    // ✅ BENEFITS — OPTIONAL
    { label: "Social Security Benefits Verification", required: false },
    { label: "Pension Benefits Verification", required: false },
    { label: "SSI Verification", required: false },
    { label: "Disability Benefits Verification", required: false },
    { label: "Alimony / Child Support Verification", required: false },
    { label: "Food Stamps / HEAP / Assistance Proof", required: false },
    { label: "Veterans Benefits Verification", required: false },
    { label: "Unemployment Benefits Verification", required: false },
    { label: "Welfare Benefits Verification", required: false },

    // ✅ NOT EVERYONE HAS THESE — OPTIONAL
    { label: "Insurance Dividend Statements", required: false },
    { label: "Certificates of Deposit Verification", required: false },

    // REQUIRED
    { label: "Liability Verification (Loans / Credit Cards)", required: true },
    { label: "Student Loan Statements", required: true },
    { label: "Other Required Household Income Documentation", required: true },
  ];

  // Reusable component for professional rows
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
    <div className="space-y-6">
      {/* =======================
          STEPPER
      ======================= */}
      <ClickablePaginationStepper
        steps={steps}
        activeStep={activeStep}
        onStepClick={(id) => setActiveStep(id)}
      />

      {/* =======================
          CARD CONTENT
      ======================= */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* STEP 1: Applicant Information */}
       {/* STEP 1: Applicant Information */}
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
              Applicant’s Legal Name
            </td>
            <td className="px-4 py-3 text-gray-900">Adi Todmal</td>
          </tr>
          <tr className="border-b last:border-b-0">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
              Co-Applicant’s Legal Name
            </td>
            <td className="px-4 py-3 text-gray-900">Vikram Singh</td>
          </tr>
          <tr className="border-b last:border-b-0">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
              Email Address
            </td>
            <td className="px-4 py-3 text-gray-900">adi@gmail.com</td>
          </tr>
          <tr className="border-b last:border-b-0">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
              Phone # (Cell)
            </td>
            <td className="px-4 py-3 text-gray-900">9876543210</td>
          </tr>
          <tr className="border-b last:border-b-0">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
              Phone # (Work)
            </td>
            <td className="px-4 py-3 text-gray-900">1234567890</td>
          </tr>
          <tr className="border-b last:border-b-0">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
              Phone # (Home)
            </td>
            <td className="px-4 py-3 text-gray-900">1112223333</td>
          </tr>
          <tr>
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
              Property Address
            </td>
            <td className="px-4 py-3 text-gray-900">
              123 Main St, Springfield, IL 62704
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}

{/* STEP 2: Employment Details */}
{activeStep === 2 && (
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
              <tr>
                <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
                  Employer's Name
                </td>
                <td className="px-4 py-3 text-gray-900">ABC Corp</td>
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
                  Employer's Name
                </td>
                <td className="px-4 py-3 text-gray-900">XYZ Inc</td>
              </tr>
              <tr>
                <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                  Employer's Address
                </td>
                <td className="px-4 py-3 text-gray-900">
                  456 Work Ave, Springfield, IL
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)}

{/* STEP 3: Liabilities */}
{activeStep === 3 && (
  <div className="p-6 min-h-[260px]">
    <h3 className="text-xl font-bold text-gray-800 mb-4">
      Payee & Amount Details
    </h3>

    <p className="text-[10px] font-bold uppercase text-red-500 tracking-widest mb-2">
      Monthly Liabilities
    </p>

    <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
      <table className="w-full text-sm">
        <tbody>
          <tr className="border-b last:border-b-0">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">
              Payee 1: Utility Company
            </td>
            <td className="px-4 py-3 text-gray-900">$150</td>
          </tr>
          <tr className="border-b last:border-b-0">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
              Payee 2: Credit Card
            </td>
            <td className="px-4 py-3 text-gray-900">$300</td>
          </tr>
          <tr>
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
              Payee 3: Car Loan
            </td>
            <td className="px-4 py-3 text-gray-900">$250</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}

{/* STEP 4: Certifications */}
{activeStep === 4 && (
  <div className="p-6 min-h-[260px]">
    <h3 className="text-xl font-bold text-gray-800 border-b pb-4 mb-4">
      Certifications & Authorizations
    </h3>

    {/* SCROLLABLE CONTAINER */}
    <div className="max-h-[500px] overflow-y-auto pr-2 space-y-10 custom-scrollbar">
      
      {/* SECTION 1: Standard Certifications */}
      {[
        {
          title: "Home Improvement Program – Required Certification",
          signer: "Adi Todmal",
          date: "01/30/2026, 10:15 AM",
        },
        {
          title: "Authorization to Receive & Verify Employment Information",
          signer: "Adi Todmal",
          date: "01/30/2026, 10:15 AM",
        },
        {
          title: "Inspection Authorization",
          signer: "Adi Todmal",
          date: "01/30/2026, 10:15 AM",
        }
      ].map((cert, idx) => (
        <div key={idx} className="space-y-3">
          <p className="text-sm font-bold text-gray-700 uppercase tracking-tight">
            {cert.title}
          </p>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="shrink-0 border-2 border-dashed border-gray-200 rounded-md bg-white p-2">
              <img
                src="https://a.storyblok.com/f/191576/1176x882/0707bde47c/make_signature_hero_after.webp"
                alt="Signature"
                className="h-16 w-32 object-contain"
              />
            </div>
            <div className="flex-1 overflow-hidden border border-gray-200 rounded-xl bg-white w-full">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">Legal Name</td>
                    <td className="px-4 py-3 text-gray-900">{cert.signer}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">Date & Time</td>
                    <td className="px-4 py-3 text-gray-900">{cert.date}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}

      {/* SECTION 2: BID Responsibility (Dual Signatures) */}
      <div className="space-y-4">
        <p className="text-sm font-bold text-gray-700 uppercase tracking-tight border-t pt-6">
          BID Responsibility / Subordination of AHC Notes & Mortgages
        </p>
        
        <div className="grid grid-cols-1 gap-6">
          {/* Applicant Signature */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">Applicant</p>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0 border-2 border-dashed border-gray-200 rounded-md bg-white p-2">
                <img src="https://a.storyblok.com/f/191576/1176x882/0707bde47c/make_signature_hero_after.webp" alt="Signature" className="h-16 w-32 object-contain" />
              </div>
              <div className="flex-1 overflow-hidden border border-gray-200 rounded-xl bg-white w-full">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">Legal Name</td>
                      <td className="px-4 py-3 text-gray-900">Adi Todmal</td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">Date & Time</td>
                      <td className="px-4 py-3 text-gray-900">01/30/2026, 10:15 AM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Co-Applicant Signature */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">Co-Applicant</p>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0 border-2 border-dashed border-gray-200 rounded-md bg-white p-2">
                <img src="https://a.storyblok.com/f/191576/1176x882/0707bde47c/make_signature_hero_after.webp" alt="Signature" className="h-16 w-32 object-contain" />
              </div>
              <div className="flex-1 overflow-hidden border border-gray-200 rounded-xl bg-white w-full">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">Legal Name</td>
                      <td className="px-4 py-3 text-gray-900">Rahul Patil</td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">Date & Time</td>
                      <td className="px-4 py-3 text-gray-900">01/30/2026, 10:18 AM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .custom-scrollbar::-webkit-scrollbar { width: 6px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
      .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
    `}</style>
  </div>
)}
{/* STEP 5: Uploaded Documents */}
{activeStep === 5 && (
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
                {/* Left: Document Name + Status Tags */}
                <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-2/3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span>{doc.label}</span>
                      {doc.required ? (
                        <span className="text-[10px] px-2 py-0.5 rounded-lg bg-red-50 text-red-400 font-semibold border border-red-100">
                          Required
                        </span>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 rounded-lg bg-gray-50 text-gray-500 font-semibold border border-gray-200">
                          Optional
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                {/* Right: View Action */}
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
              <ContractQuotationStep />
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
