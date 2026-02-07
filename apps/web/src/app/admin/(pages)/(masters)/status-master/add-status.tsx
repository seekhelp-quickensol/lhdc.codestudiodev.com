"use client";

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/src/components/admin/form/input/InputField";
import Label from "@/src/components/admin/form/Label";
import Form from "@/src/components/admin/form/Form";
import FormGroup from "@/src/components/admin/form/FormGroup";
import Select from "@/src/components/admin/form/Select";

import { useToastMessage } from "@/src/hooks/admin/useToastMessage";
import { useStateContext } from "@/src/context/admin/StateContext";
import { useMultiUnique } from "@/src/hooks/admin/useMultiUnique";

import {
  submitStatus,
  uniqueStatus,
  getStatusById,
} from "@/src/services/admin/services";

import {
  statusSchema,
  StatusFormData,
} from "@/src/validation/admin/validation";

interface AddStatusFormProps {
  onFormSubmit?: () => void;
}


export default function AddStatusForm({ onFormSubmit }: AddStatusFormProps) {
  const { itemID, setItemID } = useStateContext();
  const { message, setMessage } = useToastMessage();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<StatusFormData>({
    resolver: zodResolver(statusSchema),
    defaultValues: {
      service_name: "",
      status_name: "",
    },
  });

 /* =======================
   Unique Check
======================= */
const {
  isUnique,
  nonUniqueFields,
  loading,
  error,
  checkUnique,
} = useMultiUnique(uniqueStatus, 800);

const serviceName = watch("service_name");
const statusName = watch("status_name");

useEffect(() => {
  if (!serviceName || !statusName) return;

  checkUnique({
    payload: {
      service_name: serviceName.trim(),
      status_name: statusName.trim(),
    },
    currentId: itemID,
  });
}, [serviceName, statusName, itemID, checkUnique]);



  /* =======================
     Fetch (Edit Mode)
  ======================= */
  useEffect(() => {
    if (!itemID) {
      reset({
        service_name: "",
        status_name: "",
      });
      return;
    }

    getStatusById(itemID)
      .then((res) => {
        if (res.data.success) {
          setValue("service_name", res.data.data.service_name, {
            shouldDirty: false,
            shouldTouch: false,
          });
          setValue("status_name", res.data.data.status_name, {
            shouldDirty: false,
            shouldTouch: false,
          });
        } else {
          setMessage({
            type: "error",
            text: res.data.message || "Failed to fetch status",
          });
        }
      })
      .catch((err) => {
        setMessage({
          type: "error",
          text: err?.response?.data?.message || "Failed to fetch status",
        });
      });
  }, [itemID, reset, setValue, setMessage]);

  /* =======================
     Submit
  ======================= */
  const onSubmit = async (data: StatusFormData) => {
    if (isUnique === false) {
      setMessage({
        type: "error",
        text: "Status already exists.",
      });
      return;
    }

    setMessage(null);

    try {
      const res = await submitStatus(itemID, {
        service_name: data.service_name.trim(),
        status_name: data.status_name.trim(),
      });

      if (!res.data.success) {
        throw new Error(res.data.message);
      }

      setMessage({
        type: "success",
        text: itemID
          ? "Status updated successfully!"
          : "Status added successfully!",
      });

      reset({
        service_name: "",
        status_name: "",
      });

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
     Static Service Options
  ======================= */
  const serviceOptions = [
    { label: "Home Improvement Program", value: "Home Improvement Program" },
    { label: "First-Time Home Buyer Assistance", value: "First-Time Home Buyer Assistance" },
    { label: "Tenant Maintenance Requests", value: "Tenant Maintenance Requests" },
  ];

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
      {/* Service Dropdown */}
      <FormGroup>
        <Label>Service Name *</Label>
        <Controller
          name="service_name"
          control={control}
          render={({ field }) => (
            <Select
              options={serviceOptions}
              placeholder="Select service"
              value={field.value}
              onChange={(val) => field.onChange(val)}
              error={!!errors.service_name}
              errorMessage={errors.service_name?.message?.toString()}
            />
          )}
        />
      </FormGroup>

      {/* Status Name */}
      <FormGroup>
        <Label>Status Name</Label>
        <Input
          placeholder="Enter status name"
          {...register("status_name")}
          error={!!errors.status_name || isUnique === false}
          errorMessage={
            errors.status_name?.message ||
            (isUnique === false ? "Status already exists" : undefined) ||
            (error ? "Error checking uniqueness" : undefined)
          }
          hint="e.g., Pending, Completed"
        />
      </FormGroup>
    </Form>
  );
}
