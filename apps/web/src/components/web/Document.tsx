"use client";
import Image from "next/image";
import Link from "next/link";


import {
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineAcademicCap,
  HiOutlineIdentification,
  HiOutlineHome,
  HiOutlineCash,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineLightningBolt,
  HiOutlineCreditCard,
  HiOutlineUsers,
  HiOutlineCake,
  HiOutlineFolder,
} from "react-icons/hi"
const documents = [
  { label: "Government-issued Photo ID", icon: HiOutlineIdentification },
  { label: "Residence Verification Letter", icon: HiOutlineHome },
  { label: "Recent Salary Slips", icon: HiOutlineCash },
  { label: "Proof of Address", icon: HiOutlineLocationMarker },
  { label: "Bank Statement", icon: HiOutlineOfficeBuilding },
  { label: "Employment Letter", icon: HiOutlineBriefcase },

  { label: "Tax Return Documents", icon: HiOutlineDocumentText },
  { label: "Social Security Card", icon: HiOutlineShieldCheck },
  { label: "Educational Certificates", icon: HiOutlineAcademicCap },
  { label: "Driver’s License", icon: HiOutlineIdentification },
  { label: "Passport Copy", icon: HiOutlineGlobeAlt },
  { label: "Health Insurance Card", icon: HiOutlineHeart },

  { label: "Lease Agreement", icon: HiOutlineDocumentText },
  { label: "Utility Bills", icon: HiOutlineLightningBolt },
  { label: "Credit Report", icon: HiOutlineCreditCard },
  { label: "Marriage Certificate", icon: HiOutlineUsers },
  { label: "Birth Certificate", icon: HiOutlineCake },
  { label: "Additional Documents", icon: HiOutlineFolder },
];

export default function Document({}) {
  return (
    <>
         <section className="w-full py-0 lg:py-20">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start">
           
            <div className="lg:col-span-3 md:px-4">
              <div className="flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-wider">
                <Image
                  src="/icons/home.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />

                <span className="text-[16px]">DOCUMENTS</span>
              </div>

              <h2 className="text-[20px] md:text-[25px] lg:text-[35px] font-semibold leading-tight text-gray-900 mt-4">
                Documents Required
              </h2>
            </div>

           
            <div className="lg:col-span-9">
              <div className="bg-white rounded-2xl p-6 my-5 lg:my-0 lg:p-8 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
                  {documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                     
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                        <doc.icon className="w-5 h-5 text-teal-700" />
                      </div>

                   
                      <span className="text-sm font-medium text-gray-900">
                        {doc.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
