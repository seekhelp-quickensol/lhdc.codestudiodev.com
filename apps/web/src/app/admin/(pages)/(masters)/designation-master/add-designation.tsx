"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/src/components/admin/form/input/InputField";
import Label from "@/src/components/admin/form/Label";
import Form from "@/src/components/admin/form/Form";
import FormGroup from "@/src/components/admin/form/FormGroup";

import { useToastMessage } from "@/src/hooks/admin/useToastMessage";
import { useStateContext } from "@/src/context/admin/StateContext";
import { useUniqueCheck } from "@/src/hooks/admin/useUniqueCheck";

import {
  submitDesignation,
  uniqueDesignation,
  getDesignationById,
} from "@/src/services/admin/services";

import {
  designationSchema,
  DesignationFormData,
} from "@/src/validation/admin/validation";

interface AddDesignationFormProps {
  onFormSubmit?: () => void;
}

export default function AddDesignationForm({
  onFormSubmit,
}: AddDesignationFormProps) {
  const { itemID, setItemID } = useStateContext();
  const { message, setMessage } = useToastMessage();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<DesignationFormData>({
    resolver: zodResolver(designationSchema),
    defaultValues: {
      designation_name: "",
    },
  });

  /* =======================
     Unique Check
  ======================= */
  const { isUnique, error, checkUnique } = useUniqueCheck(
    uniqueDesignation,
    800
  );

  const designationName = watch("designation_name");

  useEffect(() => {
    if (!designationName?.trim()) return;
    checkUnique(designationName.trim(), itemID);
  }, [designationName, itemID, checkUnique]);

  /* =======================
     Fetch (Edit Mode)
  ======================= */
  useEffect(() => {
    if (!itemID) {
      reset({ designation_name: "" });
      return;
    }

    getDesignationById(itemID)
      .then((res) => {
        if (res.data.success) {
          setValue("designation_name", res.data.data.designation_name, {
            shouldDirty: false,
            shouldTouch: false,
          });
        } else {
          setMessage({
            type: "error",
            text: res.data.message || "Failed to fetch designation",
          });
        }
      })
      .catch((err) => {
        setMessage({
          type: "error",
          text: err?.response?.data?.message || "Failed to fetch designation",
        });
      });
  }, [itemID, reset, setValue, setMessage]);

  /* =======================
     Submit
  ======================= */
  const onSubmit = async (data: DesignationFormData) => {
    if (isUnique === false) {
      setMessage({
        type: "error",
        text: "Designation name already exists.",
      });
      return;
    }

    setMessage(null);

    try {
      const res = await submitDesignation(itemID, {
        designation_name: data.designation_name.trim(),
      });

      if (!res.data.success) {
        throw new Error(res.data.message);
      }

      setMessage({
        type: "success",
        text: itemID
          ? "Designation updated successfully!"
          : "Designation added successfully!",
      });

      reset({ designation_name: "" });
      setItemID(undefined);

      onFormSubmit?.();
    } catch (err: any) {
      setMessage({
        type: "error",
        text: err?.response?.data?.message || err.message,
      });
    }
  };

  /* =======================
     Render
  ======================= */
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-1"
      message={message || undefined}
      isSubmitting={isSubmitting}
    >
      <FormGroup>
        <Label>Designation Name</Label>
        <Input
          placeholder="Enter designation name"
          {...register("designation_name")}
          error={!!errors.designation_name || isUnique === false}
          // unique={isUnique === true && !errors.designation_name}
          errorMessage={
            errors.designation_name?.message ||
            (isUnique === false
              ? "Designation already exists"
              : undefined) ||
            (error ? "Error checking uniqueness" : undefined)
          }
          hint="e.g., CEO, CTO, HR"
        />
      </FormGroup>
    </Form>
  );
}
