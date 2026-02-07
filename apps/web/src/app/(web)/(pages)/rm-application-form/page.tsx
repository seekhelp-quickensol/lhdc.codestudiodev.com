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
import { email, number, string } from "zod";
import Checkbox from "@/src/components/admin/form/input/Checkbox";
import { useEffect } from "react";
import Input from "@/src/components/admin/form/input/InputField";

import { useSearchParams } from "next/navigation";

import { useForm, Controller } from "react-hook-form";

import Select from "@/src/components/admin/form/Select";


export default function ServiceDetails() {
  const searchParams = useSearchParams();
  const isReadOnly = searchParams.get("mode") === "view";

  type FormErrors = {
    applicantName?: string;
    phoneCell?: string;
    email?: string;
    country?: string; 
  state?: string;   
  city?: string;
    applicantProperty?: string;

    // Step 2 fields
    authorizeMaintenance?: string;
    contactToSchedule?: string;
    preferredPhone?: string;
    preferredText?: string;
    preferredEmail?: string;

    // Step 3 fields
    maintenanceHeatingCooling?: boolean;
    maintenancePlumbing?: boolean;
    maintenanceElectrical?: boolean;
    maintenanceAppliances?: boolean;
    maintenanceDoorsWindows?: boolean;
    maintenanceFlooringWalls?: boolean;
    maintenancePest?: boolean;
    maintenanceSafety?: boolean;
    maintenanceOtherText?: string;
    maintenanceHeatingCoolingText?: string;
    maintenancePlumbingText?: string;
    maintenanceElectricalText?: string;
    maintenanceAppliancesText?: string;
    maintenanceDoorsWindowsText?: string;
    maintenanceFlooringWallsText?: string;
    maintenancePestText?: string;
    maintenanceSafetyText?:string;
    maintenanceDescription?: string;


    // Step 4 fields
    issueStartTime?: string;
    isUrgent?: string;

    //step 5 fields
    photos?: string;

    // Step 6 fields
    petsInUnit?: string;
    petType?: string;
    petSecurityPlan?: string;


    // Step 7 fields
    tenantSignature?: string;
    tenantSignatureDateTime?: string;
    signerLegalName?: string;
  };

  type ApplicantFormData = {
    applicantName: string;
    phoneCell: string;
    email: string;
    country: string;
    state: string;
    city: string;
    applicantProperty: string;

    // Step 2 fields
    authorizeMaintenance: boolean;
    contactToSchedule: boolean;
    preferredPhone: boolean;
    preferredText: boolean;
    preferredEmail: boolean;

    // Step 3 fields
    maintenanceHeatingCooling: boolean;
    maintenancePlumbing: boolean;
    maintenanceElectrical: boolean;
    maintenanceAppliances: boolean;
    maintenanceDoorsWindows: boolean;
    maintenanceFlooringWalls: boolean;
    maintenancePest: boolean;
    maintenanceSafety: boolean;
    maintenanceHeatingCoolingText: string;
    maintenancePlumbingText: string;
    maintenanceElectricalText: string;
    maintenanceAppliancesText: string;
    maintenanceDoorsWindowsText: string;
    maintenanceFlooringWallsText: string;
    maintenancePestText: string;
    maintenanceSafetyText:string;
    maintenanceOtherText: string;
    maintenanceDescription: string;

    // Step 4 fields
    issueStartTime: string;
    isUrgent: string; // "yes" | "no"

    //step 5 fields
    photos: File[];

    // Step 6 fields
    petsInUnit: string;
    petType: string;
    petSecurityPlan: string;


    // Step 7 fields
    tenantSignature: string;
    tenantSignatureDateTime: string;
    
    signerLegalName: string;

  };


  type CountryKey = "India" | "United States" | "United Kingdom" | "Canada" | "Australia";
    type CityMap = Record<string, { label: string; value: string }[]>;
  
  const stateOptions: Record<CountryKey, { label: string; value: string }[]> = {
    India: [
      { label: "Maharashtra", value: "Maharashtra" },
      { label: "Gujarat", value: "Gujarat" },
    ],
    "United States": [
      { label: "California", value: "California" },
      { label: "Texas", value: "Texas" },
    ],
    "United Kingdom": [],
    Canada: [],
    Australia: [],
  };
  
  
  const { control, formState: { errors: rhfErrors } } = useForm();



  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState<ApplicantFormData>({
    applicantName: "",
    phoneCell: "",
    email: "",
    country: "",
    state: "",
    city: "",
    applicantProperty: "",

    // Step 2 fields
    authorizeMaintenance: false,
    contactToSchedule: false,
    preferredPhone: false,
    preferredText: false,
    preferredEmail: false,

    // Step 3 fields
    maintenanceHeatingCooling: false,
    maintenancePlumbing: false,
    maintenanceElectrical: false,
    maintenanceAppliances: false,
    maintenanceDoorsWindows: false,
    maintenanceFlooringWalls: false,
    maintenancePest: false,
    maintenanceSafety: false,
    maintenanceOtherText: "",
    maintenanceHeatingCoolingText: "",
    maintenancePlumbingText: "",
    maintenanceElectricalText: "",
    maintenanceAppliancesText: "",
    maintenanceDoorsWindowsText: "",
    maintenanceFlooringWallsText: "",
    maintenanceSafetyText:"",
    maintenancePestText: "",
  
    maintenanceDescription: "",

    // Step 4 fields
    issueStartTime: "",
    isUrgent: "",

    //step 5 fields
    photos: [],

    // Step 6 fields
    petsInUnit: "",
    petType: "",
    petSecurityPlan: "",


    // Step 7 fields
    tenantSignature: "",
    signerLegalName: "",
    tenantSignatureDateTime: ""

  });

// 1. Load Dummy Data if in View Mode
  useEffect(() => {
    if (isReadOnly) {
      setFormData((prev) => ({
        ...prev,
        applicantName: "John Doe",
        phoneCell: "(555) 123-4567",
        email: "john.doe@example.com",
        country: "india",
        state: "maharashtra",
        city:"pune",
        applicantProperty: "123 Maple Avenue, Suite 405",
        authorizeMaintenance: true,
        contactToSchedule: false,
        preferredPhone: true,
        preferredText: true,
        maintenancePlumbing: true,
        maintenanceDescription: "The kitchen sink pipe is leaking significantly when the water is running.",
        issueStartTime: "Started yesterday afternoon",
        isUrgent: "yes",
        petsInUnit: "yes",
        petType: "Cat",
        petSecurityPlan: "The cat will be kept in the bedroom during the repair.",
        tenantSignature: "data:image/png;base64,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",
        signerLegalName: "John Doe",
        tenantSignatureDateTime: "2/3/2026, 7:15:00 PM",
      }));
    }
  }, [isReadOnly]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedCountry, setSelectedCountry] = useState<string>("");
const [selectedState, setSelectedState] = useState<string>("");


  const getCurrentDateTime = () => {
  return new Date().toISOString();
};

const formatDateTime = (iso: string) => {
  return new Date(iso).toLocaleString();
};






useEffect(() => {
  // 🛑 STOP the clock if we are not on step 7 OR if we are in View Mode
  if (activeStep !== 7 || isReadOnly) return;

  const interval = setInterval(() => {
    setFormData((prev) => ({
      ...prev,
      tenantSignatureDateTime: new Date().toISOString(),
    }));
  }, 1000);

  return () => clearInterval(interval);
}, [activeStep, isReadOnly]); // Added isReadOnly to the dependency array




  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

    if (!formData.applicantName.trim()) {
      newErrors.applicantName = "Name is required";
    }

    if (!formData.phoneCell.trim()) {
      newErrors.phoneCell = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

     if (!formData.country?.trim()) {
    newErrors.country = "Country is required";
  }

  if (!formData.state?.trim()) {
    newErrors.state = "State is required";
  }

  if (!formData.city?.trim()) {
    newErrors.city = "City is required";
  }


    if (!formData.applicantProperty.trim()) {
      newErrors.applicantProperty = "Property address is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(2);
    }
  };


  
  
    const handleSave = () => {
    let newErrors: FormErrors = {};
  
    // ✅ Minimum required for draft save
    if (!formData.applicantName.trim()) {
      newErrors.applicantName = "Please enter applicant name to save";
    }
  
    setErrors(newErrors);
  
    // ❌ Stop if validation fails
    if (Object.keys(newErrors).length > 0) return;
  
    // ✅ SAVE LOGIC (API / localStorage)
    const draftData = {
      formData,
      activeStep,
      savedAt: new Date().toISOString(),
    };
  
    // Example: localStorage (replace with API later)
    localStorage.setItem("rmapplicationDraft", JSON.stringify(draftData));
  
    alert("Draft saved successfully!");
  };
  
  
  useEffect(() => {
    const savedDraft = localStorage.getItem("rmapplicationDraft");
    if (savedDraft) {
      const parsed = JSON.parse(savedDraft);
  
      setFormData(prev => ({
    ...prev,
    ...parsed.formData,
  }));
  
  
      setActiveStep(parsed.activeStep || 1);
    }
  }, []);
  
  

  const handleNextStep2 = () => {
    const newErrors: FormErrors = {};

    if (!formData.authorizeMaintenance && !formData.contactToSchedule) {
      newErrors.authorizeMaintenance = "At least one option must be selected";
    }

    if (
      !formData.preferredPhone &&
      !formData.preferredText &&
      !formData.preferredEmail
    ) {
      newErrors.preferredPhone = "Select at least one preferred contact method";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(3);
    }
  };

  const handleNextStep3 = () => {
    let newErrors: FormErrors = {};

    const anyChecked =
      formData.maintenanceHeatingCooling ||
      formData.maintenancePlumbing ||
      formData.maintenanceElectrical ||
      formData.maintenanceAppliances ||
      formData.maintenanceDoorsWindows ||
      formData.maintenanceFlooringWalls ||
      formData.maintenancePest ||
      formData.maintenanceSafety ||
      formData.maintenanceOtherText.trim();

    

    if (!formData.maintenanceDescription.trim()) {
      newErrors.maintenanceDescription =
        "Please describe the maintenance issue";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(4);
    }
  };

  const handleNextStep4 = () => {
    let newErrors: FormErrors = {};

    if (!formData.issueStartTime.trim()) {
      newErrors.issueStartTime = "Please specify when the issue began";
    }

    if (!formData.isUrgent) {
      newErrors.isUrgent = "Please select yes or no";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(5);
    }
  };

  const handleNextStep5 = () => {
  // 🔓 Skip validation if we are just viewing
  if (isReadOnly) {
    setActiveStep(6);
    return;
  }

  let newErrors: FormErrors = {};

  if (!formData.photos || formData.photos.length === 0) {
    newErrors.photos = "Please upload at least one photo";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    setActiveStep(6);
  }
};

  const handleNextStep6 = () => {
    let newErrors: FormErrors = {};

    if (!formData.petsInUnit) {
      newErrors.petsInUnit = "Please select Yes or No";
    }

    if (formData.petsInUnit === "yes") {
  if (!formData.petType.trim()) {
    newErrors.petType = "Type of pet is required";
  }

  if (!formData.petSecurityPlan.trim()) {
    newErrors.petSecurityPlan =
      "Please explain how the pet will be secured";
  }
}


    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(7);
    }
  };

const handleNextStep7 = () => {
  let newErrors: FormErrors = {};

  if (!formData.signerLegalName.trim()) {
    newErrors.signerLegalName = "Legal name is required";
  }

  if (!formData.tenantSignature) {
    newErrors.tenantSignature = "Signature is required";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    // 🔒 FINAL accurate timestamp
    setFormData((prev) => ({
      ...prev,
      tenantSignatureDateTime: getCurrentDateTime(),
    }));

    setActiveStep(10); // submit / final
  }
};



  const handlePhotoAdd = (files: FileList | null) => {
    if (!files) return;

    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...Array.from(files)],
    }));

    setErrors((prev) => ({ ...prev, photos: "" }));
  };

  const handlePhotoRemove = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const countryOptions = [
  { label: "India", value: "India" },
  { label: "United States", value: "United States" },
  { label: "United Kingdom", value: "United Kingdom" },
  { label: "Canada", value: "Canada" },
  { label: "Australia", value: "Australia" },
];


const cityOptions: CityMap = {
  Maharashtra: [
    { label: "Mumbai", value: "Mumbai" },
    { label: "Pune", value: "Pune" },
    { label: "Nagpur", value: "Nagpur" },
    { label: "Nashik", value: "Nashik" },
  ],
  Gujarat: [
    { label: "Ahmedabad", value: "Ahmedabad" },
    { label: "Surat", value: "Surat" },
    { label: "Vadodara", value: "Vadodara" },
    { label: "Rajkot", value: "Rajkot" },
  ],
  California: [
    { label: "Los Angeles", value: "Los Angeles" },
    { label: "San Francisco", value: "San Francisco" },
    { label: "San Diego", value: "San Diego" },
  ],
  Texas: [
    { label: "Houston", value: "Houston" },
    { label: "Austin", value: "Austin" },
    { label: "Dallas", value: "Dallas" },
  ],
};



  const steps = [
    { id: 1, title: "Tenant Information", subtitle: "Lorem Ipsum is simply" },
    { id: 2, title: "Access Permission", subtitle: "Lorem Ipsum is simply" },
    { id: 3, title: "Maintenance Issue", subtitle: "Lorem Ipsum is simply" },
    { id: 4, title: "Urgency & Timing", subtitle: "Lorem Ipsum is simply" },
    { id: 5, title: "Photos", subtitle: "Lorem Ipsum is simply" },
    { id: 6, title: "Pets", subtitle: "Lorem Ipsum is simply" },
    { id: 7, title: "Acknowledgment", subtitle: "Lorem Ipsum is simply" },
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

                <Link
                  href="/tenant-maintenance-requests"
                  className="text-[15px] md:text-[17px] text-white font-medium hover:underline"
                >
                  Tenant Maintenance Requests
                </Link>

                
                <span className="text-white text-2xl leading-none">›</span>
                <span className="text-[15px] md:text-[17px] text-white font-medium">
                  Application form
                </span>
              </nav>

              <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
                <span className="inline-flex items-center gap-3 relative pr-[25px]">
                  Tenant Maintenance Requests
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
          <PaginationStepper steps={steps} activeStep={activeStep} />
        </div>

        {/* Form */}
{activeStep === 1 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter full name"
          name="applicantName"
          value={formData.applicantName}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : errors.applicantName
              ? "border-red-500 focus:ring-1 focus:ring-red-500"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          }`}
        />
        {errors.applicantName && (
          <p className="text-red-500 text-xs mt-1">
            {errors.applicantName}
          </p>
        )}
      </div>

      {/* Phone Number */}
      {/* Phone Number */}
<div>
  <label className="text-sm font-medium text-gray-700 mb-1 block">
    Phone Number <span className="text-red-500">*</span>
  </label>
  <input
    type="text" // Changed from "number" to "text" to allow formatting/dummy data
    inputMode="numeric" // Keeps the number pad for mobile users
    placeholder="Enter phone number"
    name="phoneCell"
    value={formData.phoneCell}
    onChange={handleChange}
    disabled={isReadOnly}
    className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
      isReadOnly
        ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
        : errors.phoneCell
        ? "border-red-500 focus:ring-1 focus:ring-red-500"
        : "focus:ring-1 focus:ring-teal-500 border-gray-300"
    }`}
  />
  {errors.phoneCell && (
    <p className="text-red-500 text-xs mt-1">
      {errors.phoneCell}
    </p>
  )}
</div>

      {/* Email Address */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : errors.email
              ? "border-red-500 focus:ring-1 focus:ring-red-500"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

         {/* Property Address */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Country <span className="text-red-500">*</span>
        </label>
      
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <Select
            options={countryOptions}
            placeholder="Select country"
            value={field.value}
            onChange={(val) => {
        field.onChange(val);                     // RHF
        setSelectedCountry(String(val || ""));   // local filter
        setSelectedState("");                    // reset state
        setFormData((prev) => ({                 // ✅ update formData
          ...prev,
          country: String(val || ""),
          state: "",
          city: "",
        }));
      }}
            disabled={isReadOnly}
            className={`w-full h-[45px] ${
              isReadOnly
                ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
                : ""
            } ${errors.country ? "border-red-500" : ""}`}
            error={!!errors.country}
            errorMessage={errors.country}
          />
        )}
      />
      
      
       
      </div>
      
      
      
        {/* Property Address */}
      {/* State */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          State <span className="text-red-500">*</span>
        </label>
      
      <Controller
        name="state"
        control={control}
        render={({ field }) => (
          <Select
            options={stateOptions[selectedCountry as CountryKey] || []}
            placeholder="Select State"
            value={field.value}
            onChange={(val) => {
        field.onChange(val);
        setSelectedState(String(val || ""));
        setFormData((prev) => ({
          ...prev,
          state: String(val || ""),
          city: "",
        }));
      }}
            disabled={!selectedCountry || isReadOnly}
            className={`w-full h-[45px] ${
              isReadOnly || !selectedCountry
                ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
                : ""
            } ${errors.state ? "border-red-500" : ""}`}
            error={!!errors.state}
            errorMessage={errors.state}
          />
        )}
      />
      
      
        
      </div>
      
      
      {/* City */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          City <span className="text-red-500">*</span>
        </label>
      
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Select
              options={cityOptions[selectedState] || []}
              placeholder="Select City"
              value={field.value}
              onChange={(val) => {
        field.onChange(val);
        setFormData((prev) => ({
          ...prev,
          city: String(val || ""),
        }));
      }}
              disabled={!selectedState || isReadOnly}
              className={`w-full h-[45px] ${
                isReadOnly || !selectedState
                  ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
                  : ""
              } ${errors.city ? "border-red-500" : ""}`}
              error={!!errors.city}
              errorMessage={errors.city}
            />
          )}
        />
      
       
      </div>
      
      
      
      
      
      
            {/* Area */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Area <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Area"
                name="applicantProperty"
                value={formData.applicantProperty}
                onChange={handleChange}
                disabled={isReadOnly} // 🔒 Lock input
                className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
                  isReadOnly
                    ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
                    : "focus:ring-1 focus:ring-teal-500 border-gray-300"
                } ${errors.applicantProperty ? "border-red-500" : ""}`}
              />
              {errors.applicantProperty && (
                <p className="text-red-500 text-xs mt-1">{errors.applicantProperty}</p>
              )}
            </div>
      

      

      {/* Property Address */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Property Address <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter property address"
          name="applicantProperty"
          value={formData.applicantProperty}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : errors.applicantProperty
              ? "border-red-500 focus:ring-1 focus:ring-red-500"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          }`}
        />
        {errors.applicantProperty && (
          <p className="text-red-500 text-xs mt-1">
            {errors.applicantProperty}
          </p>
        )}
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-8">
      {/* 🛑 Hide Save button in View Mode */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNext}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

        {activeStep === 2 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
    {/* Authorize maintenance staff */}
    <div>
      <Checkbox
        name="authorizeMaintenance"
        label="Authorize maintenance staff to enter when not home tenant will receive notification when staff will be in home and when they complete the work and leave"
        checked={!!formData.authorizeMaintenance}
        disabled={isReadOnly} // 🔒 Lock checkbox
        onChange={(val) =>
          !isReadOnly && // 🛡️ Prevent changes in View Mode
          setFormData((prev) => ({
            ...prev,
            authorizeMaintenance: val,
          }))
        }
      />
      {errors.authorizeMaintenance && (
        <p className="text-red-500 text-xs mt-1">
          {errors.authorizeMaintenance}
        </p>
      )}
    </div>

    {/* Contact to schedule */}
    <div>
      <Checkbox
        name="contactToSchedule"
        label="Contact me to schedule appointment"
        checked={!!formData.contactToSchedule}
        disabled={isReadOnly} // 🔒 Lock checkbox
        onChange={(val) =>
          !isReadOnly &&
          setFormData((prev) => ({ ...prev, contactToSchedule: val }))
        }
      />
      {errors.contactToSchedule && (
        <p className="text-red-500 text-xs mt-1">
          {errors.contactToSchedule}
        </p>
      )}
    </div>

    {/* Preferred contact method */}
    <div className="mt-4">
      <p className="text-sm font-medium text-gray-700 mb-2">
        Preferred contact method:
      </p>
      <div className="flex flex-col gap-2">
        <Checkbox
          name="preferredPhone"
          label="Phone"
          checked={!!formData.preferredPhone}
          disabled={isReadOnly} // 🔒 Lock checkbox
          onChange={(val) =>
            !isReadOnly &&
            setFormData((prev) => ({ ...prev, preferredPhone: val }))
          }
        />
        <Checkbox
          name="preferredText"
          label="Text"
          checked={!!formData.preferredText}
          disabled={isReadOnly} // 🔒 Lock checkbox
          onChange={(val) =>
            !isReadOnly &&
            setFormData((prev) => ({ ...prev, preferredText: val }))
          }
        />
        <Checkbox
          name="preferredEmail"
          label="Email"
          checked={!!formData.preferredEmail}
          disabled={isReadOnly} // 🔒 Lock checkbox
          onChange={(val) =>
            !isReadOnly &&
            setFormData((prev) => ({ ...prev, preferredEmail: val }))
          }
        />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-8">
      <button
        type="button"
        onClick={() => setActiveStep(1)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
      >
        Back
      </button>

      {/* 🛑 Hide Save button in View Mode */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        type="button"
        onClick={handleNextStep2}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

        {activeStep === 3 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
    <h3 className="text-lg font-semibold text-gray-800">
      Maintenance Issue
    </h3>

    {/* CHECKBOX GRID */}
    <div className="grid grid-cols-1 gap-4">
      {[
        { id: "maintenanceHeatingCooling", label: "Heating / Cooling", textKey: "maintenanceHeatingCoolingText" },
        { id: "maintenancePlumbing", label: "Plumbing", textKey: "maintenancePlumbingText" },
        { id: "maintenanceElectrical", label: "Electrical", textKey: "maintenanceElectricalText" },
        { id: "maintenanceAppliances", label: "Appliances", textKey: "maintenanceAppliancesText" },
        { id: "maintenanceDoorsWindows", label: "Doors / Windows", textKey: "maintenanceDoorsWindowsText" },
        { id: "maintenanceFlooringWalls", label: "Flooring / Walls", textKey: "maintenanceFlooringWallsText" },
        { id: "maintenancePest", label: "Pest Concerns", textKey: "maintenancePestText" },
        { id: "maintenanceSafety", label: "Safety Issue", textKey: "maintenanceSafetyText" },
      ].map((item) => (
        <div key={item.id} className="space-y-2">
          <Checkbox
            name={item.label}
            label={item.label}
            checked={!!formData[item.id as keyof ApplicantFormData]}
            disabled={isReadOnly}
            onChange={(val) =>
              !isReadOnly && setFormData((p) => ({ ...p, [item.id]: val }))
            }
          />

          {formData[item.id as keyof ApplicantFormData] && (
            <Input
              name={item.textKey}
              placeholder={`Describe ${item.label} work`}
              value={formData[item.textKey as keyof ApplicantFormData] as string}
              onChange={handleChange}
              disabled={isReadOnly}
            />
          )}
        </div>
      ))}
    </div>

    {/* OTHER TEXT */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">
        Other (specify)
      </label>
      <input
        type="text"
        name="maintenanceOtherText"
        value={formData.maintenanceOtherText}
        onChange={handleChange}
        disabled={isReadOnly}
        className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
          isReadOnly
            ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
            : errors.maintenanceOtherText
            ? "border-red-500 focus:ring-1 focus:ring-red-500"
            : "focus:ring-1 focus:ring-teal-500 border-gray-300"
        }`}
        placeholder="Specify other issue"
      />
      {errors.maintenanceOtherText && (
        <p className="text-red-500 text-xs mt-1">
          {errors.maintenanceOtherText}
        </p>
      )}
    </div>

    {/* DESCRIPTION */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">
        Describe the Issue <span className="text-red-500">*</span>
      </label>
      <textarea
        name="maintenanceDescription"
        rows={4}
        value={formData.maintenanceDescription}
        onChange={handleChange}
        disabled={isReadOnly}
        className={`w-full border rounded-md px-4 py-2 outline-none transition-colors ${
          isReadOnly
            ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
            : errors.maintenanceDescription
            ? "border-red-500 focus:ring-1 focus:ring-red-500"
            : "focus:ring-1 focus:ring-teal-500 border-gray-300"
        }`}
        placeholder="Describe the maintenance issue in detail"
      />
      {errors.maintenanceDescription && (
        <p className="text-red-500 text-xs mt-1">
          {errors.maintenanceDescription}
        </p>
      )}
    </div>

    {/* BUTTONS */}
    <div className="flex justify-end gap-4 mt-8">
      <button
        onClick={() => setActiveStep(2)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
      >
        Back
      </button>

      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNextStep3}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

        {activeStep === 4 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
    <h3 className="text-lg font-semibold text-gray-800">
      Urgency & Timing 
    </h3>

    {/* WHEN DID ISSUE BEGIN */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">
        When did this issue begin? <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="issueStartTime"
        value={formData.issueStartTime}
        onChange={handleChange}
        disabled={isReadOnly} // 🔒 Lock input
        placeholder="e.g. 2 days ago"
        className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors
    ${
      isReadOnly
        ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
        : errors.issueStartTime
        ? "border-red-500 focus:ring-1 focus:ring-red-500"
        : "focus:ring-1 focus:ring-teal-500 border-gray-300"
    }`}
      />
      {errors.issueStartTime && (
        <p className="text-red-500 text-xs mt-1">
          {errors.issueStartTime}
        </p>
      )}
    </div>

    {/* URGENT YES / NO */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">
        Is this an urgent / emergency issue? <span className="text-red-500">*</span>
      </label>

      <div className={`flex gap-6 ${isReadOnly ? "pointer-events-none" : ""}`}>
        <label className={`flex items-center gap-2 ${isReadOnly ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}>
          <input
            type="radio"
            name="isUrgent"
            value="yes"
            checked={formData.isUrgent === "yes"}
            onChange={handleChange}
            disabled={isReadOnly} // 🔒 Lock radio
            className="accent-teal-600 w-4 h-4"
          />
          <span className="text-sm text-gray-700">Yes</span>
        </label>

        <label className={`flex items-center gap-2 ${isReadOnly ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}>
          <input
            type="radio"
            name="isUrgent"
            value="no"
            checked={formData.isUrgent === "no"}
            onChange={handleChange}
            disabled={isReadOnly} // 🔒 Lock radio
            className="accent-teal-600 w-4 h-4"
          />
          <span className="text-sm text-gray-700">No</span>
        </label>
      </div>

      {errors.isUrgent && (
        <p className="text-red-500 text-xs mt-1">{errors.isUrgent}</p>
      )}
    </div>

    {/* BUTTONS */}
    <div className="flex justify-end gap-4 mt-8">
      <button
        onClick={() => setActiveStep(3)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
      >
        Back
      </button>

      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNextStep4}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

        {activeStep === 5 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
    <h3 className="text-lg font-semibold text-gray-800">Photos</h3>

    {/* UPLOAD - Hidden in Read Only */}
    {!isReadOnly ? (
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">
          Upload Photos <span className="text-red-500">*</span>
        </label>

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handlePhotoAdd(e.target.files)}
          className="block w-full text-sm file:mr-4 file:py-2 file:px-4
             file:rounded-md file:border-0
             file:bg-teal-600 file:text-white
             hover:file:bg-teal-700 cursor-pointer"
        />

        {errors.photos && (
          <p className="text-red-500 text-xs mt-1">{errors.photos}</p>
        )}
      </div>
    ) : (
      <p className="text-sm text-gray-500 italic">
        Viewing uploaded attachments:
      </p>
    )}

    {/* PREVIEW LIST */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {isReadOnly ? (
        // 📸 VIEW MODE: Show placeholder images from Google/Source
        <>
          {[
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500", 
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500",
            "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=500"
          ].map((url, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-lg border bg-gray-100 shadow-sm">
              <img
                src={url}
                alt={`maintenance-view-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </>
      ) : (
        // 🛠️ EDIT MODE: Show uploaded files
        formData.photos.map((file, index) => {
          const previewUrl = URL.createObjectURL(file);
          return (
            <div
              key={index}
              className="relative aspect-square w-full overflow-hidden rounded-lg border group bg-gray-100"
            >
              <img
                src={previewUrl}
                alt={`upload-${index}`}
                className="w-full h-full object-cover object-center"
                onLoad={() => URL.revokeObjectURL(previewUrl)}
              />
              <button
                type="button"
                onClick={() => handlePhotoRemove(index)}
                className="absolute top-2 right-2 bg-white/90 text-red-600 text-xs px-2 py-1 rounded shadow
                 opacity-0 group-hover:opacity-100 transition"
              >
                ✕
              </button>
            </div>
          );
        })
      )}
    </div>

    {/* BUTTONS */}
    <div className="flex justify-end gap-4 mt-8">
      <button
        onClick={() => setActiveStep(4)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
      >
        Back
      </button>

      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNextStep5}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

        {activeStep === 6 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
    {/* Pets in Unit */}
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">
        Pets in Unit <span className="text-red-500">*</span>
      </p>

      <div className="flex gap-6">
        <Radio
          id="petsYes"
          name="petsInUnit"
          label="Yes"
          value="yes"
          disabled={isReadOnly} // 🔒 Lock Radio
          checked={formData.petsInUnit === "yes"}
          onChange={(val) =>
            !isReadOnly && setFormData((p) => ({ ...p, petsInUnit: val }))
          }
        />

        <Radio
          id="petsNo"
          name="petsInUnit"
          label="No"
          value="no"
          disabled={isReadOnly} // 🔒 Lock Radio
          checked={formData.petsInUnit === "no"}
          onChange={(val) =>
            !isReadOnly && setFormData((p) => ({ ...p, petsInUnit: val }))
          }
        />
      </div>

      {errors.petsInUnit && (
        <p className="text-xs text-red-500 mt-1">{errors.petsInUnit}</p>
      )}
    </div>

    {/* Conditional Pet Details */}
    {formData.petsInUnit === "yes" && (
      <div className="space-y-5">
        {/* Type of Pet */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Type of Pet <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="petType"
            placeholder="e.g. Dog, Cat"
            value={formData.petType}
            onChange={handleChange}
            disabled={isReadOnly} // 🔒 Lock Input
            className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors
              ${
                isReadOnly
                  ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
                  : errors.petType
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "focus:ring-1 focus:ring-teal-500 border-gray-300"
              }`}
          />

          {errors.petType && (
            <p className="text-xs text-red-500 mt-1">{errors.petType}</p>
          )}
        </div>

        {/* Pet Security Plan */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            How will your pet be secured during maintenance? <span className="text-red-500">*</span>
          </label>

          <textarea
            name="petSecurityPlan"
            rows={4}
            value={formData.petSecurityPlan}
            onChange={handleChange}
            disabled={isReadOnly} // 🔒 Lock Textarea
            className={`w-full border rounded-md px-4 py-2 outline-none transition-colors ${
              isReadOnly
                ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
                : errors.petSecurityPlan
                ? "border-red-500 focus:ring-1 focus:ring-red-500"
                : "focus:ring-1 focus:ring-teal-500 border-gray-300"
            }`}
            placeholder="Example: Pet will be kept in a separate locked room or crated."
          />

          {errors.petSecurityPlan && (
            <p className="text-red-500 text-xs mt-1">
              {errors.petSecurityPlan}
            </p>
          )}
        </div>
      </div>
    )}

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-8">
      <button
        type="button"
        onClick={() => setActiveStep(5)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
      >
        Back
      </button>

      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        type="button"
        onClick={() => isReadOnly ? setActiveStep(7) : handleNextStep6()}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

        {activeStep === 7 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <div className="space-y-10">
      {/* Signature Section */}
      <SignatureBox
        title="Tenant Signature"
        value={formData.tenantSignature}
        error={errors.tenantSignature}
        readOnly={isReadOnly} // 🔒 Pass read-only state to your signature component
        onChange={(val) =>
          !isReadOnly && setFormData((p) => ({ ...p, tenantSignature: val }))
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Legal Name of Signer */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Legal Name of Signer <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="signerLegalName"
            value={formData.signerLegalName}
            onChange={handleChange}
            disabled={isReadOnly} // 🔒 Lock name input
            placeholder="Enter full legal name"
            className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors
              ${
                isReadOnly
                  ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
                  : errors.signerLegalName
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "focus:ring-1 focus:ring-teal-500 border-gray-300"
              }`}
          />

          {errors.signerLegalName && (
            <p className="text-xs text-red-500 mt-1">
              {errors.signerLegalName}
            </p>
          )}
        </div>

        {/* Date & Time */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Date & Time of Signature
          </label>

          <input
            type="text"
            readOnly
            value={
              formData.tenantSignatureDateTime 
                ? formatDateTime(formData.tenantSignatureDateTime) 
                : "Not signed yet"
            }
            className="w-full h-[45px] border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
          />
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-10">
      <button
        onClick={() => setActiveStep(6)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
      >
        Back
      </button>

      {/* 🛑 Hide Save button in View Mode */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      {/* 🚀 Change label based on Mode */}
      <button
        type="button"
        onClick={() => isReadOnly ? alert("Viewing Finished") : handleNextStep7()}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        {isReadOnly ? "Finish" : "Submit Request"}
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
