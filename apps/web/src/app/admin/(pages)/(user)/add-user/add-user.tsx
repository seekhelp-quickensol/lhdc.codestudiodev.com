"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Form from "@/src/components/admin/form/Form";
import FormGroup from "@/src/components/admin/form/FormGroup";
import Label from "@/src/components/admin/form/Label";
import Input from "@/src/components/admin/form/input/InputField";

import { useToastMessage } from "@/src/hooks/admin/useToastMessage";
import { useStateContext } from "@/src/context/admin/StateContext";
import { useRouter } from "next/navigation";

const userInquirySchema = z.object({
  full_name: z.string().min(1, "Full Name is required"),
  contact_no: z.string().min(10, "Contact number must be at least 10 digits"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  address: z.string().min(1, "Address is required"),
});

type UserInquiryFormData = z.infer<typeof userInquirySchema>;

export default function UserInquiryForm() {
  const { message, setMessage } = useToastMessage();
  const { refresh, setRefresh } = useStateContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserInquiryFormData>({
    resolver: zodResolver(userInquirySchema),
    defaultValues: {
      full_name: "",
      contact_no: "",
      email: "",
      address:"",
    },
  });

  const onSubmit = async (data: UserInquiryFormData) => {
    try {
      setMessage({ type: "success", text: "Inquiry submitted successfully!" });
      reset();
      setRefresh(!refresh);
      setTimeout(() => {
        router.push("/");
      }, 800);
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Something went wrong" });
    }
  };

  return (
    <div className="w-full"> {/* Outer container stays full width */}
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 border p-6 rounded-lg bg-white w-full"
        isSubmitting={isSubmitting}
        message={message || undefined}
        submitButtonText="Submit"
        submitButtonClassName="btn-primary"
      >
        {/* Row with 2 fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-0">
          {/* Full Name */}
          <FormGroup>
            <Label>Full Name *</Label>
            <Input
              {...register("full_name")}
              error={!!errors.full_name}
              errorMessage={errors.full_name?.message}
              placeholder="Enter Full Name"
            />
          </FormGroup>

          {/* Contact No */}
          <FormGroup>
            <Label>Contact no *</Label>
            <Input
              {...register("contact_no")}
              error={!!errors.contact_no}
              errorMessage={errors.contact_no?.message}
              placeholder="Enter Contact no"
            />
          </FormGroup>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email - Stays on its own row below */}
        <FormGroup>
          <Label>Email *</Label>
          <Input
            {...register("email")}
            type="email"
            error={!!errors.email}
            errorMessage={errors.email?.message}
            placeholder="Enter Email Address"
          />
        </FormGroup>

        {/* Email - Stays on its own row below */}
        <FormGroup>
          <Label>Address *</Label>
          <Input
            {...register("address")}
            type="address"
            error={!!errors.address}
            errorMessage={errors.address?.message}
            placeholder="Enter Address Address"
          />
        </FormGroup>
        </div>
      </Form>
    </div>
  );
}