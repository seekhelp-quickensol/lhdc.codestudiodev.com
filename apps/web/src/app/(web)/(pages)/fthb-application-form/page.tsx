"use client";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/src/components/web/Faq";
import StepsApply from "@/src/components/web/StepsApply";
import Document from "@/src/components/web/Document";
import { useState} from "react";
import DatePicker from "@/src/components/admin/form/date-picker";

import PaginationStepper from "@/src/components/admin/PaginationStepper";
import SignatureBox from "@/src/components/admin/SignatureBox";


export default function ServiceDetails() {



  type FormErrors = {
    applicantName?: string;
    coApplicantName?: string;
    email?: string;
    phoneCell?: string;
    phoneWork?: string;
    phoneHome?: string;
    address?: string;
    employerApplicant?: string;
    employerCoApplicant?: string;
    employerAddressCoApplicant?: string;
    payees?: string;
    certificationSignature?: string;
    certificationDate?: string;
    authorizationSignature?: string;
    authorizationDate?: string;
    inspectionSignature?: string;
    inspectionDate?: string;
    bidApplicantSignature?: string;
    bidCoApplicantSignature?: string;
    bidApplicantDate?: string;
    bidCoApplicantDate?: string;
  };

  type ApplicantFormData = {
    applicantName: string;
    coApplicantName: string;
    email: string;
    phoneCell: string;
    phoneWork: string;
    phoneHome: string;
    address: string;
    employerApplicant: string;
    employerCoApplicant: string;
    employerAddressCoApplicant: string;
    payees: Payee[];
    certificationSignature: string;
    certificationDate: string;
    authorizationSignature: string;
    authorizationDate: string;
    inspectionSignature: string;
    inspectionDate: string;
    bidApplicantSignature: string;
    bidCoApplicantSignature: string;
    bidApplicantDate: string;
    bidCoApplicantDate: string;


  };

  type Payee = {
    payeeName: string;
    amount: number;
  };


  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState<ApplicantFormData>({
    applicantName: "",
    coApplicantName: "",
    email: "",
    phoneCell: "",
    phoneWork: "",
    phoneHome: "",
    address: "",
    employerApplicant: "",
    employerCoApplicant: "",
    employerAddressCoApplicant: "",
    payees: [{ payeeName: "", amount: 0 }],
    certificationSignature: "",
    certificationDate: new Date().toISOString().split("T")[0],
    authorizationSignature: "",
    authorizationDate: new Date().toISOString().split("T")[0],
    inspectionSignature: "",
    inspectionDate: new Date().toISOString().split("T")[0],
    bidApplicantSignature: "",
    bidCoApplicantSignature: "",
    bidApplicantDate: new Date().toISOString().split("T")[0],
    bidCoApplicantDate: new Date().toISOString().split("T")[0],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [step9Files, setStep9Files] = useState<Step9Files>({});
  const [step9Errors, setStep9Errors] = useState<Record<number, string>>({});


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (!name) return; // 🔒 production safety

    setFormData((prev) => ({
      ...prev,
      [name as keyof ApplicantFormData]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name as keyof FormErrors]: "",
    }));
  };

  const handleNext = () => {
    let newErrors: FormErrors = {};

    if (!formData.applicantName.trim())
      newErrors.applicantName = "Applicant name is required";

    if (!formData.coApplicantName.trim())
      newErrors.coApplicantName = "Co-applicant name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";

    if (!formData.phoneCell.trim())
      newErrors.phoneCell = "Cell phone is required";

    if (!formData.phoneWork.trim())
      newErrors.phoneWork = "Work phone is required";

    if (!formData.phoneHome.trim())
      newErrors.phoneHome = "Home phone is required";

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(2);
    }
  };


  const handleNextStep2 = () => {
    let newErrors: FormErrors = {};

    if (!formData.employerApplicant?.trim())
      newErrors.employerApplicant = "Employer name (Applicant) is required";

    if (!formData.employerCoApplicant?.trim())
      newErrors.employerCoApplicant = "Employer name (Co-Applicant) is required";

    if (!formData.employerAddressCoApplicant?.trim())
      newErrors.employerAddressCoApplicant = "Employer address (Co-Applicant) is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(3);
    }
  };

  const handleNextStep3 = () => {
    let newErrors: FormErrors = {};

    // ❌ No payees
    if (!formData.payees || formData.payees.length === 0) {
      newErrors.payees = "At least one payee is required";
    } else {
      // ❌ Validate each payee
      const hasInvalidPayee = formData.payees.some(
        (p) => !p.payeeName.trim() || p.amount <= 0
      );

      if (hasInvalidPayee) {
        newErrors.payees = "Each payee must have a name and amount greater than 0";
      }
    }

    setErrors(newErrors);

    // ✅ Move to next step
    if (Object.keys(newErrors).length === 0) {
      setActiveStep(4);
    }
  };

  const handlePayeeChange = (index: number, field: keyof Payee, value: string) => {
    const updatedPayees = [...formData.payees];
    updatedPayees[index] = {
      ...updatedPayees[index],
      [field]: field === "amount" ? Number(value) : value,
    };

    setFormData((prev) => ({
      ...prev,
      payees: updatedPayees,
    }));
  };

  const addMorePayee = () => {
    setFormData((prev) => ({
      ...prev,
      payees: [...prev.payees, { payeeName: "", amount: 0 }],
    }));
  };

  const removePayee = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      payees: prev.payees.filter((_, i) => i !== index),
    }));
  };


const handleNextStep4 = () => {
  let newErrors: FormErrors = {};

  // Certification
  if (!formData.certificationSignature)
    newErrors.certificationSignature = "Signature is required";

  if (!formData.certificationDate)
    newErrors.certificationDate = "Date is required";

  // Authorization
  if (!formData.authorizationSignature)
    newErrors.authorizationSignature = "Signature is required";

  if (!formData.authorizationDate)
    newErrors.authorizationDate = "Date is required";

  // Inspection
  if (!formData.inspectionSignature)
    newErrors.inspectionSignature = "Signature is required";

  if (!formData.inspectionDate)
    newErrors.inspectionDate = "Date is required";

  // BID RESPONSIBILITY — Applicant
  if (!formData.bidApplicantSignature)
    newErrors.bidApplicantSignature = "Applicant signature is required";

  if (!formData.bidApplicantDate)
    newErrors.bidApplicantDate = "Applicant date is required";

  // BID RESPONSIBILITY — Co-Applicant
  if (!formData.bidCoApplicantSignature)
    newErrors.bidCoApplicantSignature = "Co-Applicant signature is required";

  if (!formData.bidCoApplicantDate)
    newErrors.bidCoApplicantDate = "Co-Applicant date is required";

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    setActiveStep(5); // or submission
  }
};


  // ===== STEP 9 DOCUMENT LIST =====
  const DOCUMENT_LIST = [
    "Copy of Photo Identification",
    "Mortgage Pre-Qualification or Pre-Approval Letter",
    "Proof of Homebuyer Education Workshop Completion",
    "Latest Federal & State Income Tax Filings (All Schedules & W-2s)",
    "Verification of Checking & Savings Accounts (Last 3 Months)",
    "Household Income Documents (All Members)",
    "Employment Verification (4 Recent Pay Stubs)",
    "Employment Verification Letter",
    "Social Security Benefits Verification",
    "Pension Benefits Verification",
    "SSI Verification",
    "Disability Benefits Verification",
    "Alimony / Child Support Verification",
    "Food Stamps / HEAP / Assistance Proof",
    "Veterans Benefits Verification",
    "Unemployment Benefits Verification",
    "Welfare Benefits Verification",
    "Insurance Dividend Statements",
    "Certificates of Deposit Verification",
    "Liability Verification (Loans / Credit Cards)",
    "Student Loan Statements",
    "Other Required Household Income Documentation",
  ];

  // ===== TYPES =====
  type Step9Files = {
    [key: number]: File | null;
  };



  // FILE CHANGE
const handleStep9FileChange = (
  index: number,
  file: File | null
) => {
  setStep9Files(prev => ({
    ...prev,
    [index]: file,
  }));

  setStep9Errors(prev => {
    const copy = { ...prev };
    delete copy[index];
    return copy;
  });
};

// REMOVE FILE
const removeStep9File = (index: number) => {
  setStep9Files(prev => ({
    ...prev,
    [index]: null,
  }));
};

// SUBMIT STEP 9
const handleSubmitStep5 = () => {
  let errors: Record<number, string> = {};

  DOCUMENT_LIST.forEach((_, index) => {
    if (!step9Files[index]) {
      errors[index] = "This document is required";
    }
  });

  setStep9Errors(errors);

  if (Object.keys(errors).length === 0) {
    console.log("✅ ALL DOCUMENTS UPLOADED", step9Files);
    alert("Documents submitted successfully!");
    // final submission logic here
  }
};



  const steps = [
    { id: 1, title: "Applicant Information", subtitle: "Lorem Ipsum is simply" },
    { id: 2, title: "Current Employment", subtitle: "Lorem Ipsum is simply" },
    { id: 3, title: "Liabilities", subtitle: "Lorem Ipsum is simply" },
    { id: 4, title: "Certifications & Authorizations", subtitle: "Lorem Ipsum is simply" },   
    { id: 5, title: "Document upload", subtitle: "Lorem Ipsum is simply" },


  ];

  return (
    <>
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-6 md:py-10 px-5 lg:px-20 rounded-lg overflow-hidden mt-5"
        style={{
          backgroundImage: "url('about/about-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <nav className="inline-flex items-center gap-4 px-8 py-2 rounded-full bg-teal-transperent backdrop-blur-sm mb-6">
                <Link
                  href="/"
                  className="text-[15px] md:text-[17px] text-white font-medium hover:underline"
                >
                  Home
                </Link>
                <span className="text-white text-2xl leading-none">›</span>
                <span className="text-[15px] md:text-[17px] text-white font-medium">
                  First-Time Home Buyer Assistance
                </span>
                <span className="text-white text-2xl leading-none">›</span>
                <span className="text-[15px] md:text-[17px] text-white font-medium">
                  Application form
                </span>
              </nav>

              <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
                <span className="inline-flex items-center gap-3 relative pr-[25px]">
                  First-Time Home Buyer Assistance
                  <Image
                    src="/icons/top-arrow.svg"
                    alt="Top Arrow"
                    width={36}
                    height={36}
                    className="absolute right-[0px]  md:right-[-25px] lg:right-[-50px]  top-[-15px]"
                  />
                </span>
                <br />
  
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Stepper Form Section */}
      <section className="my-10 max-w-7xl mx-auto  ">
         {/* PAGINATION STYLE STEPPER */}
  <div className="bg-white rounded-xl shadow-sm border mb-8 px-4 py-4">
    <PaginationStepper
  steps={steps}
  activeStep={activeStep}

/>

 
  </div>

        {/* Form */}
        {activeStep === 1 && (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Applicant Name */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Applicant’s Legal Name(s)
                </label>
                <input
                  type="text"
                  placeholder="Applicant Name"
                  name="applicantName"
                  value={formData.applicantName}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.applicantName ? "border-red-500" : ""}`}

                />
                {errors.applicantName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.applicantName}
                  </p>
                )}
              </div>

              {/* Co-Applicant Name */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Co-Applicant’s Legal Name(s)
                </label>
                <input
                  type="text"
                  placeholder="Co-Applicant Name"
                  name="coApplicantName"
                  value={formData.coApplicantName}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.coApplicantName ? "border-red-500" : ""}`}

                />
                {errors.coApplicantName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.coApplicantName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.email ? "border-red-500" : ""}`}

                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Phone # (Cell)
                </label>
                <input
                  type="number"
                  placeholder="Phone No"
                  name="phoneCell"
                  value={formData.phoneCell}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.phoneCell ? "border-red-500" : ""}`}

                />
                {errors.phoneCell && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneCell}
                  </p>
                )}
              </div>

              {/* Phone work*/}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Phone # (Work)
                </label>
                <input
                  type="number"
                  placeholder="Phone Work"
                  name="phoneWork"
                  value={formData.phoneWork}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.phoneWork ? "border-red-500" : ""}`}

                />
                {errors.phoneWork && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneWork}
                  </p>
                )}
              </div>

              {/* Phone Home*/}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Phone # (Home)
                </label>
                <input
                  type="number"
                  placeholder="Phone Work"
                  name="phoneHome"
                  value={formData.phoneHome}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.phoneHome ? "border-red-500" : ""}`}

                />
                {errors.phoneHome && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneHome}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  rows={3}
                  className={`w-full min-h-[90px] resize-none border rounded-md px-4 py-2
    focus:ring-1 focus:ring-teal-500 outline-none
    ${errors.address ? "border-red-500" : ""}`}
                />

                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.address}
                  </p>
                )}
              </div>

             
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={handleNext}
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Next
              </button>
            </div>
          </div>
        )}



        {activeStep === 2 && (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Employer's Name (Applicant) */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Employer's Name (Applicant)
                </label>
                <input
                  type="text"
                  placeholder=" Employer's Name (Applicant)"
                  name="employerApplicant"
                  value={formData.employerApplicant}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.employerApplicant ? "border-red-500" : ""
                    }`}
                />
                {errors.employerApplicant && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.employerApplicant}
                  </p>
                )}
              </div>

              {/* Employer's Name (Co-Applicant) */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Employer's Name (Co-Applicant)
                </label>
                <input
                  type="text"
                  placeholder=" Employer's Name (Co-Applicant)"
                  name="employerCoApplicant"
                  value={formData.employerCoApplicant}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.employerCoApplicant ? "border-red-500" : ""
                    }`}
                />
                {errors.employerCoApplicant && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.employerCoApplicant}
                  </p>
                )}
              </div>

              {/* Employer's Address (Co-Applicant) */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Employer's Address (Co-Applicant)
                </label>
                <input
                  type="text"
                  placeholder="Employer's Address (Co-Applicant)"
                  name="employerAddressCoApplicant"
                  value={formData.employerAddressCoApplicant}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.employerAddressCoApplicant ? "border-red-500" : ""
                    }`}
                />
                {errors.employerAddressCoApplicant && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.employerAddressCoApplicant}
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setActiveStep(1)}
                className="px-6 py-2 border rounded-md hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleNextStep2}
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {activeStep === 3 && (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="space-y-6">
              {formData.payees.map((payee, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 items-end"
                >
                  {/* Payee Name */}
                  <div className="col-span-12 md:col-span-7">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Payee Name
                    </label>
                    <input
                      type="text"
                      placeholder="Payee name"
                      value={payee.payeeName}
                      onChange={(e) =>
                        handlePayeeChange(index, "payeeName", e.target.value)
                      }
                      className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 outline-none
                ${errors.payees && !payee.payeeName.trim()
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-teal-500"
                        }`}
                    />
                  </div>

                  {/* Amount */}
                  <div className="col-span-8 md:col-span-3">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Amount
                    </label>
                    <input
                      type="number"
                      min="0"
                      placeholder="0.00"
                      value={payee.amount === 0 ? "" : payee.amount}
                      onChange={(e) =>
                        handlePayeeChange(index, "amount", e.target.value)
                      }
                      className={`w-full h-[45px] border rounded-md px-3 py-2 focus:ring-1 outline-none
      ${errors.payees && payee.amount <= 0
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-teal-500"
                        }`}
                    />
                  </div>


                  {/* Remove Button */}
                  <div className="col-span-4 md:col-span-2 flex">
                    {formData.payees.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePayee(index)}
                        className="h-[45px] w-full border border-red-500 text-red-600 rounded-md text-sm hover:bg-red-50"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* GLOBAL PAYEE ERROR */}
              {errors.payees && (
                <p className="text-red-500 text-sm">{errors.payees}</p>
              )}

              {/* Add More Button */}
              <button
                type="button"
                onClick={addMorePayee}
                className="text-teal-600 text-sm font-medium hover:underline"
              >
                + Add More Payee
              </button>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setActiveStep(2)}
                className="px-6 py-2 border rounded-md hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleNextStep3}
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Next
              </button>
            </div>
          </div>
        )}


{activeStep === 4 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <h2 className="text-lg font-semibold mb-8 text-center">
      Certifications & Authorizations
    </h2>

    {/* TWO SIGNATURES GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT */}
      <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
        <SignatureBox
          title="Home Improvement Program – Required Certification"
          value={formData.certificationSignature}
          error={errors.certificationSignature}
          onChange={(val) =>
            setFormData(p => ({
              ...p,
              certificationSignature: val,
              certificationDate:
                p.certificationDate ||
                new Date().toISOString().split("T")[0],
            }))
          }
        />

        <div className="mt-6 w-full max-w-xs mx-auto">
          <DatePicker
            id="certificationDate"
            label="Date"
            value={formData.certificationDate}
            onChange={(val) =>
              setFormData(p => ({ ...p, certificationDate: val }))
            }
          />
          {errors.certificationDate && (
            <p className="text-xs text-red-500 mt-1">
              {errors.certificationDate}
            </p>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
        <SignatureBox
          title="Authorization to Receive & Verify Employment Information"
          value={formData.authorizationSignature}
          error={errors.authorizationSignature}
          onChange={(val) =>
            setFormData(p => ({
              ...p,
              authorizationSignature: val,
              authorizationDate:
                p.authorizationDate ||
                new Date().toISOString().split("T")[0],
            }))
          }
        />

        <div className="mt-6 w-full max-w-xs mx-auto">
          <DatePicker
            id="authorizationDate"
            label="Date"
            value={formData.authorizationDate}
            onChange={(val) =>
              setFormData(p => ({ ...p, authorizationDate: val }))
            }
          />
          {errors.authorizationDate && (
            <p className="text-xs text-red-500 mt-1">
              {errors.authorizationDate}
            </p>
          )}
        </div>
      </div>
    </div>

    {/* INSPECTION */}
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 mt-10">
      <SignatureBox
        title="Inspection Authorization"
        value={formData.inspectionSignature}
        error={errors.inspectionSignature}
        onChange={(val) =>
          setFormData(p => ({
            ...p,
            inspectionSignature: val,
            inspectionDate:
              p.inspectionDate ||
              new Date().toISOString().split("T")[0],
          }))
        }
      />

      <div className="mt-6 w-full max-w-xs mx-auto">
        <DatePicker
          id="inspectionDate"
          label="Date"
          value={formData.inspectionDate}
          onChange={(val) =>
            setFormData(p => ({ ...p, inspectionDate: val }))
          }
        />
        {errors.inspectionDate && (
          <p className="text-xs text-red-500 mt-1">
            {errors.inspectionDate}
          </p>
        )}
      </div>
    </div>

    {/* BID RESPONSIBILITY */}
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 mt-10">
      <h3 className="text-md font-medium text-center mb-8">
        BID RESPONSIBILITY / Subordination of AHC Notes & Mortgages
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* APPLICANT */}
        <div>
          <SignatureBox
            title="Applicant"
            value={formData.bidApplicantSignature}
            error={errors.bidApplicantSignature}
            onChange={(val) =>
              setFormData(p => ({
                ...p,
                bidApplicantSignature: val,
                bidApplicantDate:
                  p.bidApplicantDate ||
                  new Date().toISOString().split("T")[0],
              }))
            }
          />

          <div className="mt-4 w-full max-w-xs mx-auto">
            <DatePicker
              id="bidApplicantDate"
              label="Date"
              value={formData.bidApplicantDate}
              onChange={(val) =>
                setFormData(p => ({ ...p, bidApplicantDate: val }))
              }
            />
            {errors.bidApplicantDate && (
              <p className="text-xs text-red-500 mt-1">
                {errors.bidApplicantDate}
              </p>
            )}
          </div>
        </div>

        {/* CO-APPLICANT */}
        <div>
          <SignatureBox
            title="Co-Applicant"
            value={formData.bidCoApplicantSignature}
            error={errors.bidCoApplicantSignature}
            onChange={(val) =>
              setFormData(p => ({
                ...p,
                bidCoApplicantSignature: val,
                bidCoApplicantDate:
                  p.bidCoApplicantDate ||
                  new Date().toISOString().split("T")[0],
              }))
            }
          />

          <div className="mt-4 w-full max-w-xs mx-auto">
            <DatePicker
              id="bidCoApplicantDate"
              label="Date"
              value={formData.bidCoApplicantDate}
              onChange={(val) =>
                setFormData(p => ({ ...p, bidCoApplicantDate: val }))
              }
            />
            {errors.bidCoApplicantDate && (
              <p className="text-xs text-red-500 mt-1">
                {errors.bidCoApplicantDate}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* BUTTONS */}
    <div className="flex justify-end gap-4 mt-12">
      <button
        onClick={() => setActiveStep(3)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50"
      >
        Back
      </button>

      <button
        onClick={handleNextStep4}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
      >
        Next
      </button>
    </div>
  </div>
)}




     


      


        {activeStep === 5 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <h2 className="text-lg font-semibold mb-8 text-center">
      DOCUMENT UPLOAD
    </h2>

    <div className="space-y-6">
      {DOCUMENT_LIST.map((label, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 flex flex-col gap-3"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-sm font-medium text-gray-700">
              {index + 1}. {label}
            </p>

            <div className="flex items-center gap-3">
              <label className="px-4 py-2 bg-teal-600 text-white text-sm rounded-md cursor-pointer hover:bg-teal-700">
                Upload
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) =>
                    handleStep9FileChange(
                      index,
                      e.target.files?.[0] || null
                    )
                  }
                />
              </label>

              {step9Files[index] && (
                <button
                  type="button"
                  onClick={() => removeStep9File(index)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
          </div>

          {/* FILE NAME */}
          {step9Files[index] && (
            <p className="text-xs text-green-600">
              Uploaded: {step9Files[index]?.name}
            </p>
          )}

          {/* ERROR */}
          {step9Errors[index] && (
            <p className="text-xs text-red-500">
              {step9Errors[index]}
            </p>
          )}
        </div>
      ))}
    </div>

    {/* BUTTONS */}
    <div className="flex justify-end gap-4 mt-10">
      <button
        onClick={() => setActiveStep(4)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50"
      >
        Back
      </button>

      <button
        onClick={handleSubmitStep5}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
      >
        Submit Documents
      </button>
    </div>
  </div>
)}




      </section>

      <section className="relative w-full px-0 mb-10 md:mb-0 sm:px-6 lg:px-0 z-0">

        <div className="max-w-7xl mx-auto">
          <div
            className="
        relative overflow-hidden
        rounded-2xl
        bg-teal-700
        px-6 py-6
        sm:px-10 sm:py-8
        flex flex-col sm:flex-row
        items-start sm:items-center
        justify-between
        gap-6
      "
          >
            {/* LEFT CONTENT */}
            <div className="flex items-start gap-4 text-white">
              {/* ICON */}
              <div className="flex-shrink-0">
                <Image
                  src="/icons/ticket.svg"
                  alt="Raise Ticket"
                  width={48}
                  height={48}
                />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Raise A Ticket
                </h3>
                <p className="text-sm sm:text-base text-white/90">
                  Submit A Ticket & Our Support Team Will Reach Out.
                </p>
              </div>
            </div>

            <Link href="/raise-a-ticket" className="self-start sm:self-auto">
              <button
                className="
      flex items-center gap-3
      border border-white
      text-white
      rounded-full
      px-5 py-2
      sm:px-6 
      hover:bg-white hover:text-teal-700
      transition
    "
              >
                <span className="text-sm sm:text-base font-medium">
                  Raise A Ticket
                </span>

                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-teal-700">
                  <Image
                    src="/icons/arrow.svg"
                    alt="Arrow"
                    width={14}
                    height={14}
                  />
                </span>
              </button>
            </Link>

            <div className="pointer-events-none absolute inset-0 opacity-10 bg-[url('/patterns/abstract.svg')] bg-cover" />
          </div>
        </div>
      </section>

      {/* Document */}
      <Document />

      {/* We apply */}
      <StepsApply />

      {/* FAQ */}
      <Faq />
    </>
  );
}
