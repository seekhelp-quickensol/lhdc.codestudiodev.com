"use client";

import { useState } from "react";
import ClickablePaginationStepper from "@/src/components/admin/ClickablePaginationStepper";
import ContractQuotationStep from "../../(hi-application)/home-improvement-program-details/contract-quotation";
import AgreementDocumentStep from "../../(hi-application)/home-improvement-program-details/agreement-documents";
import SiteVisitStep from "../../(hi-application)/home-improvement-program-details/site-visit";

export default function TenantMaintenanceRequestDetailList() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, title: "Tenant Information", subtitle: "Basic details" },
    { id: 2, title: "Access Permission", subtitle: "Entry authorization" },
    { id: 3, title: "Maintenance Issue", subtitle: "Problem description" },
    { id: 4, title: "Urgency & Timing", subtitle: "Priority level" },
    { id: 5, title: "Photos", subtitle: "Visual evidence" },
    { id: 6, title: "Pets", subtitle: "Security & safety" },
    { id: 7, title: "Acknowledgment", subtitle: "Final signature" },
  ];

  const DetailRow = ({ label, value, valueClass = "" }: { label: string; value: string | number; valueClass?: string }) => (
    <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm font-medium text-gray-500">{label}</span>
      <span className={`text-sm font-semibold text-gray-800 ${valueClass}`}>{value}</span>
    </div>
  );

  return (
    <div className="space-y-6">
      <ClickablePaginationStepper
        steps={steps}
        activeStep={activeStep}
        onStepClick={(id) => setActiveStep(id)}
      />

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        
        {/* STEP 1: Tenant Information */}
       {/* STEP 1: Tenant Information */}
{activeStep === 1 && (
  <div className="p-6 min-h-[260px]">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Tenant Information</h3>
    <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
      <table className="w-full text-sm">
        <tbody>
          <tr className="border-b last:border-b-0">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">Name</td>
            <td className="px-4 py-3 text-gray-900">Adi Todmal</td>
          </tr>
          <tr className="border-b last:border-b-0">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">Email</td>
            <td className="px-4 py-3 text-gray-900">johndoe@gmail.com</td>
          </tr>
          <tr className="border-b last:border-b-0">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">Phone</td>
            <td className="px-4 py-3 text-gray-900">9876543210</td>
          </tr>
          <tr>
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">Property Address</td>
            <td className="px-4 py-3 text-gray-900">123 Main St, Springfield, IL 62704</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}

{/* STEP 2: Access Permission */}
{activeStep === 2 && (
  <div className="p-6 min-h-[260px]">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Access Permission</h3>
    <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
      <table className="w-full text-sm">
        <tbody>
          <tr className="border-b last:border-b-0">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">Authorize Maintenance Staff</td>
            <td className="px-4 py-3 text-teal-600 font-bold">Yes</td>
          </tr>
          <tr className="border-b last:border-b-0">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">Contact Me to Schedule</td>
            <td className="px-4 py-3 text-gray-900">No</td>
          </tr>
          <tr>
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">Preferred Contact Method</td>
            <td className="px-4 py-3 text-gray-900">Phone, Email</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}

{/* STEP 3: Maintenance Issue */}
{activeStep === 3 && (
  <div className="p-6 min-h-[260px]">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Maintenance Issue</h3>
    <div className="space-y-4">
      <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">Heating / Cooling</td>
              <td className="px-4 py-3 text-gray-900 italic">The heater is not working properly</td>
            </tr>
            <tr className="border-b">
              <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">Plumbing</td>
              <td className="px-4 py-3 text-gray-900 italic">There is a minor leak in the bathroom sink</td>
            </tr>
            <tr>
              <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">Other Issues</td>
              <td className="px-4 py-3 text-gray-900">None</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-2">Detailed Description</p>
        <div className="overflow-hidden border border-gray-200 rounded-xl bg-gray-50 p-4 text-sm text-gray-700 italic leading-relaxed">
          "The heater is not working properly and there is a minor leak in the bathroom sink."
        </div>
      </div>
    </div>
  </div>
)}

{/* STEP 4: Urgency & Timing */}
{activeStep === 4 && (
  <div className="p-6 min-h-[260px]">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Urgency & Timing</h3>
    <p className="text-[10px] font-bold uppercase text-red-500 tracking-widest mb-2">Priority Status</p>
    <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
      <table className="w-full text-sm">
        <tbody>
          <tr className="border-b">
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">Is this an Emergency?</td>
            <td className="px-4 py-3 text-red-700 font-bold">Yes</td>
          </tr>
          <tr>
            <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">When did issue begin?</td>
            <td className="px-4 py-3 text-gray-900">2 days ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}

{/* STEP 5: Photos */}
{activeStep === 5 && (
  <div className="p-6 min-h-[260px]">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Photos</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
      {[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsPUVDMVcIe_NZRX-5TqQVSxEyDsQ2_ehOg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNm6-ipSFHbng799pxs9X9wCcOh5oaLz6x9A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEapFOPqI31xdbcuh3VcrKWTkl-ylS1mXfsg&s"
      ].map((src, idx) => (
        <div key={idx} className="relative group aspect-square">
          <img src={src} alt={`Maintenance ${idx}`} className="w-full h-full object-cover rounded-lg border border-gray-200 shadow-sm transition group-hover:opacity-90" />
        </div>
      ))}
    </div>
  </div>
)}

{/* STEP 6: Pets */}
{activeStep === 6 && (
  <div className="p-6 min-h-[260px]">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Pet Information</h3>
    <div className="space-y-4">
      <div className="overflow-hidden border border-gray-200 rounded-xl bg-white">
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">Pets in Unit</td>
              <td className="px-4 py-3 text-gray-900 font-semibold">Yes</td>
            </tr>
            <tr>
              <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">Type of Pet</td>
              <td className="px-4 py-3 text-gray-900">Dog</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase text-teal-600 tracking-widest mb-2">Pet Security Plan</p>
        <div className="overflow-hidden border border-teal-100 rounded-xl bg-teal-50/30 p-4 text-sm font-semibold text-gray-700">
          Pet will be kept in a separate locked room during maintenance.
        </div>
      </div>
    </div>
  </div>
)}

{/* STEP 7: Acknowledgment */}
{activeStep === 7 && (
  <div className="p-6 min-h-[260px]">
    <h3 className="text-xl font-bold text-gray-800 border-b pb-4 mb-4">Acknowledgment</h3>
    <div className="flex flex-col md:flex-row items-start gap-8">
      <div className="shrink-0 border-2 border-dashed border-gray-200 rounded-md bg-white p-2">
        <img src="https://a.storyblok.com/f/191576/1176x882/0707bde47c/make_signature_hero_after.webp" alt="Signature" className="h-20 w-40 object-contain" />
      </div>
      <div className="flex-1 overflow-hidden border border-gray-200 rounded-xl bg-white w-full">
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700 w-1/3">Legal Name of Signer</td>
              <td className="px-4 py-3 text-gray-900">Adi Todmal</td>
            </tr>
            <tr>
              <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">Date & Time</td>
              <td className="px-4 py-3 text-gray-900">01/30/2026 10:30 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}
      </div>

       {/* <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <ContractQuotationStep />
            </div> */}
      
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <AgreementDocumentStep />
            </div>
      
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <SiteVisitStep />
            </div>
    </div>
  );
}