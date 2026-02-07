"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/src/components/admin/form/input/InputField";
import Label from "@/src/components/admin/form/Label";
import Form from "@/src/components/admin/form/Form";
import FormGroup from "@/src/components/admin/form/FormGroup";
import { DesignationFormData, designationSchema } from "@/src/validation/admin/validation";
import { useToastMessage } from "@/src/hooks/admin/useToastMessage";
import { useCallback, useEffect } from "react";
import { getDesignationById, submitDesignation, uniqueDesignation } from "@/src/services/admin/services";
import { useFetchById } from "@/src/hooks/admin/useFetchById";
import { useUniqueCheck } from "@/src/hooks/admin/useUniqueCheck";
import { useStateContext } from "@/src/context/admin/StateContext";


export default function AddDesignationForm() {

  const { message, setMessage } = useToastMessage();
  const { setIsDrawerOpen, refresh, setRefresh, itemID, setItemID } = useStateContext();

  // =============================== Form Setup Config & Default Values ===========================

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<DesignationFormData>({
    resolver: zodResolver(designationSchema),
    defaultValues: {
      designation_name: "",
    },
  });




  // <=============================== Edit Form Get Data By ID ===========================>

  const setFormData = useCallback((data: any) => {
    reset({
      designation_name: data?.designation_name || "",
    });
  }, [reset]);

  const fetchService = useCallback(async (itemID: number) => {
    const res = await getDesignationById(itemID);
    return res.data.data;
  }, []);

  useFetchById({
    fetchService,
    setFormData,
    onError: (err) => console.error(err),
  });


  // <=============================== Unique Validation Logic  ===========================>

  const { isUnique, error, checkUnique } = useUniqueCheck(uniqueDesignation, 800);
  const designationName = watch("designation_name");

  useEffect(() => {
    checkUnique(designationName, itemID);

  }, [designationName, itemID, , checkUnique]);



  // <=============================== Form Submission Logic  ===========================>

  const onSubmit = async (data: DesignationFormData) => {

    if (isUnique === false) {
      setMessage({ type: "error", text: "Designation name must be unique." });
      return;
    }
    setMessage(null);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      const res = await submitDesignation(itemID, formData);
      const result = await res.data;
      if (!res.data.success) throw new Error(result.message || "Failed to add record");
      setMessage({ type: "success", text: "record added successfully!" });
      reset({
        designation_name: "",
      });

      setTimeout(() => {
        setRefresh(!refresh);
        setIsDrawerOpen(false);
        setItemID(undefined);
      }, 800);

    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
    }


  };

  // <=============================== After Form Submission Logic  ===========================>








  return (

    <Form onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      isSubmitting={isSubmitting}
      message={message || undefined}
      isDisable={!!errors.designation_name || isUnique === false}
    >
      {/* Designation Name */}
      <FormGroup>
        <Label>Designation Name</Label>
        <Input placeholder="Enter Designation name" {...register("designation_name")}
          error={!!errors.designation_name || isUnique === false}
          unique={isUnique === true && !errors.designation_name}
          errorMessage={
            errors.designation_name?.message ||
            (isUnique === false ? "Designation already exists" : undefined) ||
            (error ? "Error checking uniqueness" : undefined)

          }
          hint="e.g., CEO, CTO , HR"
        />
      </FormGroup>

    </Form>

  );
}
