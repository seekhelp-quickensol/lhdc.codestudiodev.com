"use client";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/src/components/web/Faq";
import StepsApply from "@/src/components/web/StepsApply";
import Document from "@/src/components/web/Document";
import { useState } from "react";
import DatePicker from "@/src/components/admin/form/date-picker";

import PaginationStepper from "@/src/components/admin/PaginationStepper";
import SignatureBox from "@/src/components/admin/SignatureBox";
import Radio from "@/src/components/admin/form/input/Radio";
import { text } from "stream/consumers";
import TextArea from "@/src/components/admin/form/input/TextArea";
import { number, string } from "zod";


export default function ServiceDetails() {



  type FormErrors = {
    applicantName?: string;
    applicantProperty?: string;
    email?: string;
    phoneCell?: string;
    phoneWork?: string;
    phoneHome?: string;
    address?: string;

    // Step 2 fields
    householdMemberName?: string;
    householdMemberAge?: string;

    // Step 3 fields 
    resideAddress?: string;
    propertyOwnedDuration?: string;
    taxesPaid?: string;


    // Step 4 fields
    applicantEmployerName?: string;
    applicantEmployerAddress?: string;
    coApplicantEmployerName?: string;
    coApplicantEmployerAddress?: string;

    //step 5 fields
    renovationDetails?: string;


    // Step 6 fields
    grossAnnualIncome?: string;

    // Step 7 fields
    totalPersons?: string;
    childrenUnder18?: string;


    // Step 8 fields
    hasMortgage?: string;
    mortgageAmount?: string;
    mortgageBalance?: string;
    paymentStatus?: string;
    mortgagee?: string;
    monthlyLiabilityPayee?: string;
    monthlyLiabilityAmount?: string;

    // Step 9 fields
    certificationSignature?: string;
certificationDate?: string;


   
  };

  type ApplicantFormData = {
    applicantName: string;
    applicantProperty: string;
    email: string;
    phoneCell: string;
    phoneWork: string;
    phoneHome: string;
    address: string;

    // Step 2 fields
    householdMemberName: string;
    householdMemberAge: string;

    // Step 3 fields 
    resideAddress: string;
    propertyOwnedDuration: string;
    taxesPaid: string;

    // Step 4 fields
    applicantEmployerName: string;
    applicantEmployerAddress: string;
    coApplicantEmployerName: string;
    coApplicantEmployerAddress: string;


    //step 5 fields
    renovationDetails: string;

    // Step 6 fields
    grossAnnualIncome: string;

    // Step 7 fields
    totalPersons: string;
    childrenUnder18: string;

    // Step 8 fields
    hasMortgage: string;
    mortgageAmount: string;
    mortgageBalance: string;
    paymentStatus: string;
    mortgagee: string;
    monthlyLiabilityPayee: string;
    monthlyLiabilityAmount: string;


    // Step 9 fields
    certificationSignature: string;
    certificationDate: string;







  };




  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState<ApplicantFormData>({
    applicantName: "",
    applicantProperty: "",
    email: "",
    phoneCell: "",
    phoneWork: "",
    phoneHome: "",
    address: "",

    // Step 2 fields
    householdMemberName: "",
    householdMemberAge: "",


    // Step 3 fields
    resideAddress: "",
    propertyOwnedDuration: "",
    taxesPaid: "",

    // Step 4 fields
    applicantEmployerName: "",
    applicantEmployerAddress: "",
    coApplicantEmployerName: "",
    coApplicantEmployerAddress: "",


    //step 5 fields
    renovationDetails: "",

    // Step 6 fields
    grossAnnualIncome: "",

    // Step 7 fields
    totalPersons: "",
    childrenUnder18: "",


    // Step 8 fields
    hasMortgage: "",
    mortgageAmount: "",
    mortgageBalance: "",
    paymentStatus: "",
    mortgagee: "",
    monthlyLiabilityPayee: "",
    monthlyLiabilityAmount: "",

    // Step 9 fields
    certificationSignature: "",
    certificationDate: new Date().toISOString().split("T")[0],


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

    if (!formData.applicantName?.trim()) {
      newErrors.applicantName = "Applicant name is required";
    }

    if (!formData.applicantProperty?.trim()) {
      newErrors.applicantProperty = "Property address is required";
    }

    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phoneCell?.trim()) {
      newErrors.phoneCell = "Cell phone is required";
    }

    if (!formData.phoneWork?.trim()) {
      newErrors.phoneWork = "Work phone is required";
    }

    if (!formData.phoneHome?.trim()) {
      newErrors.phoneHome = "Home phone is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(2);
    }
  };


  const handleNextStep2 = () => {
    let newErrors: FormErrors = {};

    // Name of Household Member
    if (!formData.householdMemberName.trim()) {
      newErrors.householdMemberName = "Household member name is required";
    }

    // Age of Household Member
    if (!formData.householdMemberAge) {
      newErrors.householdMemberAge = "Age is required";
    } else if (Number(formData.householdMemberAge) <= 0) {
      newErrors.householdMemberAge = "Age must be greater than 0";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(3);
    }
  };


  const handleNextStep3 = () => {
    let newErrors: FormErrors = {};

    if (!formData.resideAddress) {
      newErrors.resideAddress = "Please select yes or no";
    }

    if (!formData.propertyOwnedDuration.trim()) {
      newErrors.propertyOwnedDuration = "Please enter how long you have owned the property";
    }

    if (!formData.taxesPaid) {
      newErrors.taxesPaid = "Please select yes or no";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(4);
    }
  };



  const handleNextStep4 = () => {
    let newErrors: FormErrors = {};

    if (!formData.applicantEmployerName.trim()) {
      newErrors.applicantEmployerName = "Employer name is required";
    }

    if (!formData.applicantEmployerAddress.trim()) {
      newErrors.applicantEmployerAddress = "Employer address is required";
    }

    if (!formData.coApplicantEmployerName.trim()) {
      newErrors.coApplicantEmployerName = "Employer name is required";
    }

    if (!formData.coApplicantEmployerAddress.trim()) {
      newErrors.coApplicantEmployerAddress = "Employer address is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(5); // move to Document Upload
    }
  };


  const handleNextStep5 = () => {
    let newErrors: FormErrors = {};

    if (!formData.renovationDetails.trim()) {
      newErrors.renovationDetails = "Renovation details are required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(6);
    }
  };


  const handleNextStep6 = () => {
    let newErrors: FormErrors = {};

    if (!formData.grossAnnualIncome) {
      newErrors.grossAnnualIncome = "Gross annual income is required";
    } else if (Number(formData.grossAnnualIncome) <= 0) {
      newErrors.grossAnnualIncome = "Income must be greater than 0";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(7); // move to next step
    }
  };


  const handleNextStep7 = () => {
    let newErrors: FormErrors = {};

    if (!formData.totalPersons) {
      newErrors.totalPersons = "Total persons is required";
    } else if (Number(formData.totalPersons) <= 0) {
      newErrors.totalPersons = "Must be greater than 0";
    }

    if (!formData.childrenUnder18) {
      newErrors.childrenUnder18 = "Number of children is required";
    } else if (Number(formData.childrenUnder18) < 0) {
      newErrors.childrenUnder18 = "Cannot be negative";
    } else if (
      Number(formData.childrenUnder18) > Number(formData.totalPersons)
    ) {
      newErrors.childrenUnder18 =
        "Children count cannot exceed total persons";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(8);
    }
  };


  const handleNextStep8 = () => {
    let newErrors: FormErrors = {};

    if (!formData.hasMortgage) {
      newErrors.hasMortgage = "Please select yes or no";
    }

    if (formData.hasMortgage === "yes") {
      if (!formData.mortgageAmount)
        newErrors.mortgageAmount = "Mortgage payment amount required";

      if (!formData.mortgageBalance)
        newErrors.mortgageBalance = "Mortgage balance required";

      if (!formData.paymentStatus.trim())
        newErrors.paymentStatus = "Payment status required";

      if (!formData.mortgagee.trim())
        newErrors.mortgagee = "Mortgagee is required";
    }

    if (!formData.monthlyLiabilityPayee.trim())
      newErrors.monthlyLiabilityPayee = "Payee required";

    if (!formData.monthlyLiabilityAmount)
      newErrors.monthlyLiabilityAmount = "Amount required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(9);
    }
  };

const handleNextStep9 = () => {
  let newErrors: FormErrors = {};

  if (!formData.certificationSignature) {
    newErrors.certificationSignature = "Signature is required";
  }

  if (!formData.certificationDate) {
    newErrors.certificationDate = "Date is required";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    setActiveStep(10); // or final submit
  }
};




  // ===== STEP 9 DOCUMENT LIST =====
  const DOCUMENT_LIST = [
    "Copy of deed to home",
    "Paid tax receipts",
    "Homeowner's insurance policy",
    "Federal and state tax returns",
    "Bank statements (last 3 months)",
    "Pay stubs",
    "Employment verification letter",
    "Benefits verification",
    "Land ownership verification",
    "Certificate of Deposit verification",
    "Annuity/insurance income verification",
    "Liability verification",
    "Proof of residency utility bill",
    "Tenant residency affidavit",
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
  const handleSubmitStep10 = () => {
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
    { id: 2, title: "Household Information", subtitle: "Lorem Ipsum is simply" },
    { id: 3, title: "Property Status", subtitle: "Lorem Ipsum is simply" },
    { id: 4, title: "Employment Information", subtitle: "Lorem Ipsum is simply" },
    { id: 5, title: "Renovation Details", subtitle: "Lorem Ipsum is simply" },
    { id: 6, title: "Income Summary", subtitle: "Lorem Ipsum is simply" },
    { id: 7, title: "Household Counts", subtitle: "Lorem Ipsum is simply" },
    { id: 8, title: "Liabilities", subtitle: "Lorem Ipsum is simply" },
    { id: 9, title: "Certifications", subtitle: "Lorem Ipsum is simply" },
    { id: 10, title: "Documents", subtitle: "Lorem Ipsum is simply" },


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

                  Home Improvement Program
                </span>
                <span className="text-white text-2xl leading-none">›</span>
                <span className="text-[15px] md:text-[17px] text-white font-medium">
                  Application form
                </span>
              </nav>

              <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
                <span className="inline-flex items-center gap-3 relative pr-[25px]">
                  Home Improvement Program
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
                  Applicant’s Name(s)
                </label>
                <input
                  type="text"
                  placeholder="Enter applicant name"
                  name="applicantName"
                  value={formData.applicantName}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.applicantName ? "border-red-500" : ""
                    }`}
                />
                {errors.applicantName && (
                  <p className="text-red-500 text-xs mt-1">{errors.applicantName}</p>
                )}
              </div>

              {/* Property Address */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Address of Property
                </label>
                <input
                  type="text"
                  placeholder="Enter property address"
                  name="applicantProperty"
                  value={formData.applicantProperty}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.applicantProperty ? "border-red-500" : ""
                    }`}
                />
                {errors.applicantProperty && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.applicantProperty}
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
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.email ? "border-red-500" : ""
                    }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Cell */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Phone # (Cell)
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Enter cell number"
                  name="phoneCell"
                  value={formData.phoneCell}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.phoneCell ? "border-red-500" : ""
                    }`}
                />
                {errors.phoneCell && (
                  <p className="text-red-500 text-xs mt-1">{errors.phoneCell}</p>
                )}
              </div>

              {/* Phone Work */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Phone # (Work)
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Enter work number"
                  name="phoneWork"
                  value={formData.phoneWork}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.phoneWork ? "border-red-500" : ""
                    }`}
                />
                {errors.phoneWork && (
                  <p className="text-red-500 text-xs mt-1">{errors.phoneWork}</p>
                )}
              </div>

              {/* Phone Home */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Phone # (Home)
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Enter home number"
                  name="phoneHome"
                  value={formData.phoneHome}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.phoneHome ? "border-red-500" : ""
                    }`}
                />
                {errors.phoneHome && (
                  <p className="text-red-500 text-xs mt-1">{errors.phoneHome}</p>
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
              {/* Name of Household Member */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Name of Household Member
                </label>
                <input
                  type="text"
                  placeholder="Placeholder..."
                  name="householdMemberName"
                  value={formData.householdMemberName}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.householdMemberName ? "border-red-500" : ""
                    }`}
                />
                {errors.householdMemberName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.householdMemberName}
                  </p>
                )}
              </div>

              {/* Age of Household Member */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Age of Household Member
                </label>
                <input
                  type="number"
                  placeholder="Placeholder..."
                  name="householdMemberAge"
                  value={formData.householdMemberAge}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.householdMemberAge ? "border-red-500" : ""
                    }`}
                />
                {errors.householdMemberAge && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.householdMemberAge}
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
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">

            {/* Do you currently reside at this address? */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Do you currently reside at this address?
              </label>
              <div className="flex gap-6">
                <Radio
                  id="resideYes"
                  name="resideAddress"
                  value="yes"
                  checked={formData.resideAddress === "yes"}
                  onChange={(val) => setFormData(p => ({ ...p, resideAddress: val }))}
                  label="Yes"
                />
                <Radio
                  id="resideNo"
                  name="resideAddress"
                  value="no"
                  checked={formData.resideAddress === "no"}
                  onChange={(val) => setFormData(p => ({ ...p, resideAddress: val }))}
                  label="No"
                />
              </div>
              {errors.resideAddress && (
                <p className="text-red-500 text-xs mt-1">{errors.resideAddress}</p>
              )}
            </div>

            {/* How long have you owned the property? */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                How long have you owned the property?
              </label>
              <input
                type="text"
                placeholder="Enter duration (e.g., 5 years)"
                name="propertyOwnedDuration"
                value={formData.propertyOwnedDuration}
                onChange={(e) =>
                  setFormData(p => ({ ...p, propertyOwnedDuration: e.target.value }))
                }
                className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 outline-none ${errors.propertyOwnedDuration ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-500"
                  }`}
              />
              {errors.propertyOwnedDuration && (
                <p className="text-red-500 text-xs mt-1">{errors.propertyOwnedDuration}</p>
              )}
            </div>

            {/* Are Town/County/School Taxes Paid to Date? */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Are Town/County/School Taxes Paid to Date?
              </label>
              <div className="flex gap-6">
                <Radio
                  id="taxesYes"
                  name="taxesPaid"
                  value="yes"
                  checked={formData.taxesPaid === "yes"}
                  onChange={(val) => setFormData(p => ({ ...p, taxesPaid: val }))}
                  label="Yes"
                />
                <Radio
                  id="taxesNo"
                  name="taxesPaid"
                  value="no"
                  checked={formData.taxesPaid === "no"}
                  onChange={(val) => setFormData(p => ({ ...p, taxesPaid: val }))}
                  label="No"
                />
              </div>
              {errors.taxesPaid && (
                <p className="text-red-500 text-xs mt-1">{errors.taxesPaid}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Employer Name (Applicant) */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Employer Name (Applicant)
                </label>
                <input
                  type="text"
                  placeholder="Enter employer name"
                  name="applicantEmployerName"
                  value={formData.applicantEmployerName}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.applicantEmployerName ? "border-red-500" : ""
                    }`}
                />
                {errors.applicantEmployerName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.applicantEmployerName}
                  </p>
                )}
              </div>

              {/* Employer Address (Applicant) */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Employer Address (Applicant)
                </label>
                <input
                  type="text"
                  placeholder="Enter employer address"
                  name="applicantEmployerAddress"
                  value={formData.applicantEmployerAddress}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.applicantEmployerAddress ? "border-red-500" : ""
                    }`}
                />
                {errors.applicantEmployerAddress && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.applicantEmployerAddress}
                  </p>
                )}
              </div>

              {/* Employer Name (Co-Applicant) */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Employer Name (Co-Applicant)
                </label>
                <input
                  type="text"
                  placeholder="Enter employer name"
                  name="coApplicantEmployerName"
                  value={formData.coApplicantEmployerName}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.coApplicantEmployerName ? "border-red-500" : ""
                    }`}
                />
                {errors.coApplicantEmployerName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.coApplicantEmployerName}
                  </p>
                )}
              </div>

              {/* Employer Address (Co-Applicant) */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Employer Address (Co-Applicant)
                </label>
                <input
                  type="text"
                  placeholder="Enter employer address"
                  name="coApplicantEmployerAddress"
                  value={formData.coApplicantEmployerAddress}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 focus:ring-teal-500 outline-none ${errors.coApplicantEmployerAddress ? "border-red-500" : ""
                    }`}
                />
                {errors.coApplicantEmployerAddress && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.coApplicantEmployerAddress}
                  </p>
                )}
              </div>

            </div>

            {/* Buttons */}
            {/* Buttons */}


            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setActiveStep(3)}
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
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
            <div className="grid grid-cols-1 gap-6">

              {/* Renovation Improvements Requested */}
              <TextArea
                label="Renovation Improvements Requested"
                placeholder="Describe all renovation improvements you are requesting..."
                name="renovationDetails"
                rows={6}
                value={formData.renovationDetails}
                onChange={handleChange}
                error={!!errors.renovationDetails}
                errorMessage={errors.renovationDetails}

                className="resize-none"
              />

            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setActiveStep(4)}
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Back
              </button>

              <button
                onClick={handleNextStep5}
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Next
              </button>
            </div>
          </div>
        )}




        {activeStep === 6 && (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Gross Annual Household Income */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Gross Annual Household Income
                </label>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  placeholder="Enter gross annual income"
                  name="grossAnnualIncome"
                  value={formData.grossAnnualIncome}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 outline-none
            ${errors.grossAnnualIncome
                      ? "border-red-500 focus:ring-red-500"
                      : "focus:ring-teal-500"
                    }`}
                />
                {errors.grossAnnualIncome && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.grossAnnualIncome}
                  </p>
                )}
              </div>

            </div>

            {/* Buttons (RIGHT ALIGNED as requested) */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setActiveStep(5)}
                className="px-6 py-2 border rounded-md hover:bg-gray-50"
              >
                Back
              </button>

              <button
                onClick={handleNextStep6}
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Next
              </button>
            </div>
          </div>
        )}


        {activeStep === 7 && (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Total Persons */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Total Persons in Dwelling
                </label>
                <input
                  type="number"
                  min="1"
                  name="totalPersons"
                  value={formData.totalPersons}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 outline-none
            ${errors.totalPersons
                      ? "border-red-500 focus:ring-red-500"
                      : "focus:ring-teal-500"
                    }`}
                />
                {errors.totalPersons && (
                  <p className="text-red-500 text-xs mt-1">{errors.totalPersons}</p>
                )}
              </div>

              {/* Children Under 18 */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Number of Children Under 18
                </label>
                <input
                  type="number"
                  min="0"
                  name="childrenUnder18"
                  value={formData.childrenUnder18}
                  onChange={handleChange}
                  className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 outline-none
            ${errors.childrenUnder18
                      ? "border-red-500 focus:ring-red-500"
                      : "focus:ring-teal-500"
                    }`}
                />
                {errors.childrenUnder18 && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.childrenUnder18}
                  </p>
                )}
              </div>

            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setActiveStep(6)}
                className="px-6 py-2 border rounded-md hover:bg-gray-50"
              >
                Back
              </button>

              <button
                onClick={handleNextStep7}
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Next
              </button>
            </div>
          </div>
        )}


        {activeStep === 8 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">

    {/* Mortgage Payment */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">
        Mortgage Payment
      </label>

      <div className="flex gap-6">
        <Radio
          id="mortgageYes"
          name="hasMortgage"
          label="Yes"
          value="yes"
          checked={formData.hasMortgage === "yes"}
          onChange={(val) =>
            setFormData({ ...formData, hasMortgage: val })
          }
        />
        <Radio
          id="mortgageNo"
          name="hasMortgage"
          label="No"
          value="no"
          checked={formData.hasMortgage === "no"}
          onChange={(val) =>
            setFormData({ ...formData, hasMortgage: val })
          }
        />
      </div>

      {errors.hasMortgage && (
        <p className="text-red-500 text-xs mt-1">{errors.hasMortgage}</p>
      )}
    </div>

    {/* Mortgage Details */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Mortgage Amount */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Mortgage Payment Amount
        </label>
        <input
          type="number"
          name="mortgageAmount"
          value={formData.mortgageAmount}
          onChange={handleChange}
          className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 outline-none
            ${
              errors.mortgageAmount
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-teal-500"
            }`}
        />
        {errors.mortgageAmount && (
          <p className="text-red-500 text-xs mt-1">
            {errors.mortgageAmount}
          </p>
        )}
      </div>

      {/* Mortgage Balance */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Mortgage Balance
        </label>
        <input
          type="number"
          name="mortgageBalance"
          value={formData.mortgageBalance}
          onChange={handleChange}
          className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 outline-none
            ${
              errors.mortgageBalance
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-teal-500"
            }`}
        />
        {errors.mortgageBalance && (
          <p className="text-red-500 text-xs mt-1">
            {errors.mortgageBalance}
          </p>
        )}
      </div>

      {/* Payment Status */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Payment Status
        </label>
        <input
          type="text"
          name="paymentStatus"
          value={formData.paymentStatus}
          onChange={handleChange}
          className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 outline-none
            ${
              errors.paymentStatus
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-teal-500"
            }`}
        />
        {errors.paymentStatus && (
          <p className="text-red-500 text-xs mt-1">
            {errors.paymentStatus}
          </p>
        )}
      </div>

      {/* Mortgagee */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Mortgagee
        </label>
        <input
          type="text"
          name="mortgagee"
          value={formData.mortgagee}
          onChange={handleChange}
          className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 outline-none
            ${
              errors.mortgagee
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-teal-500"
            }`}
        />
        {errors.mortgagee && (
          <p className="text-red-500 text-xs mt-1">
            {errors.mortgagee}
          </p>
        )}
      </div>

      {/* Monthly Liability Payee */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Monthly Liability Payee
        </label>
        <input
          type="text"
          name="monthlyLiabilityPayee"
          value={formData.monthlyLiabilityPayee}
          onChange={handleChange}
          className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 outline-none
            ${
              errors.monthlyLiabilityPayee
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-teal-500"
            }`}
        />
        {errors.monthlyLiabilityPayee && (
          <p className="text-red-500 text-xs mt-1">
            {errors.monthlyLiabilityPayee}
          </p>
        )}
      </div>

      {/* Monthly Liability Amount */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Monthly Liability Amount
        </label>
        <input
          type="number"
          name="monthlyLiabilityAmount"
          value={formData.monthlyLiabilityAmount}
          onChange={handleChange}
          className={`w-full h-[45px] border rounded-md px-4 py-2 focus:ring-1 outline-none
            ${
              errors.monthlyLiabilityAmount
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-teal-500"
            }`}
        />
        {errors.monthlyLiabilityAmount && (
          <p className="text-red-500 text-xs mt-1">
            {errors.monthlyLiabilityAmount}
          </p>
        )}
      </div>

    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-8">
      <button
        onClick={() => setActiveStep(7)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50"
      >
        Back
      </button>

      <button
        onClick={handleNextStep8}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
      >
        Next
      </button>
    </div>
  </div>
)}


  {activeStep === 9 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">

    <div className="space-y-10">

      {/* Applicant Signature */}
      <SignatureBox
        title="Applicant Signature"
        value={formData.certificationSignature}
        error={errors.certificationSignature}
        onChange={(val) =>
          setFormData((p) => ({ ...p, certificationSignature: val }))
        }
      />

      {/* Date */}
      <div className="mt-6 w-full max-w-xs mx-auto">
        <DatePicker
          id="certificationDate"
          label="Date"
          value={formData.certificationDate}
          onChange={(val) =>
            setFormData((p) => ({ ...p, certificationDate: val }))
          }
        />
        {errors.certificationDate && (
          <p className="text-xs text-red-500 mt-1">
            {errors.certificationDate}
          </p>
        )}
      </div>

    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-10">
      <button
        onClick={() => setActiveStep(8)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50"
      >
        Back
      </button>

      <button
        onClick={handleNextStep9}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
      >
        Next
      </button>
    </div>
  </div>
)}




        {activeStep === 10 && (
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
                onClick={handleSubmitStep10}
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
