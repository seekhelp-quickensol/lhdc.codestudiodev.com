

"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";


import {
  getContactSchema,
  ContactFormData,
} from "@/src/validation/admin/validation";

import { submitContactUs } from "@/src/services/web/services";





export default function ContactUs() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(getContactSchema()),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await submitContactUs({
        id: 0, // or generate a unique id if needed
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message, // note: 'messege' (typo?) instead of 'message'
        created_on: new Date().toISOString(),
      });
      if (!res.data.success) throw new Error(res.data.message);

      reset();
      router.push("/thank-you-contact-us");
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    }
  };

  return (
    <>
      {/* HEADER SECTION (unchanged) */}

      <section className="w-full py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT CONTENT (unchanged) */}

            <div className="px-5 lg:px-0">
              <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold uppercase mb-4">
                <Image src="/icons/home.svg" alt="Icon" width={20} height={20} />
                Contact Us
              </div>

              <h2 className="text-[20px] lg:text-[35px] font-semibold mb-6">
                Let’s Talk & Build a Stronger <br />
                Housing <span className="text-[#a3b6b3] font-normal">Journey Together.</span>
              </h2>

              <p className="text-[#6b7280] max-w-xl mb-8">
                We’re here to guide you at every step of your housing journey. Whether you need support, information, or clarification, our team is committed to helping you make confident, informed decisions.
              </p>

              <div className="inline-flex items-center bg-teal-600 text-white rounded-full px-2 py-2  gap-4">
                <span className="text-sm font-medium">+1 (716) 823-5124</span>
                <span className="bg-white text-teal-600 rounded-full w-9 h-9 flex items-center justify-center">
                  <Image
                    src="/icons/phone.svg"
                    alt="Phone Icon"
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-2xl shadow-sm p-5 md:p-10">
              <h3 className="text-xl font-semibold mb-6">
                Feel Free to Get in Touch Anytime
              </h3>

              <form
                className="space-y-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Name */}
                <div>
                  <label className="text-sm text-gray-600">
                    Full Name *
                  </label>
                  <input
                    {...register("name")}
                    className="w-full mt-1 px-4 py-3 border rounded-md"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full mt-1 px-4 py-3 border rounded-md"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm text-gray-600">
                      Phone *
                    </label>
                    <input type="tel"
                      {...register("phone")}
                      className="w-full mt-1 px-4 py-3 border rounded-md"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-gray-600">
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full mt-1 px-4 py-3 border rounded-md resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
