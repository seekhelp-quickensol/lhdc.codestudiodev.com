"use client";

import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";

import Form from "@/src/components/admin/form/Form";
import FormGroup from "@/src/components/admin/form/FormGroup";
import Label from "@/src/components/admin/form/Label";
import Input from "@/src/components/admin/form/input/InputField";
import FileInput from "@/src/components/admin/form/input/FileInput";
import Select from "@/src/components/admin/form/Select";

import { useToastMessage } from "@/src/hooks/admin/useToastMessage";
import { useStateContext } from "@/src/context/admin/StateContext";
import { useFetchById } from "@/src/hooks/admin/useFetchById";

import {
  submitTeamMember,
  getTeamMemberById,
} from "@/src/services/admin/services";

import { getAllDesignations } from "@/src/services/admin/services";

import {
  getOurTeamSchema,
  OurTeamFormData,
} from "@/src/validation/admin/validation";

export default function AddTeamMemberForm() {
  const { message, setMessage } = useToastMessage();
  const { refresh, setRefresh } = useStateContext();
  const router = useRouter();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [designations, setDesignations] = useState<
    { label: string; value: number }[]
  >([]);

  const params = useParams();
  const itemID = Array.isArray(params.id) ? params.id[0] : params.id;
  const isEdit = Boolean(itemID);

  /* =========================
     FORM
  ========================= */
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OurTeamFormData>({
    resolver: zodResolver(getOurTeamSchema(isEdit)),
    defaultValues: {
      name: "",
      designation_id: undefined,
      status: 1,
      image: null,
    },
  });

  /* =========================
     FETCH DESIGNATIONS
  ========================= */
  useEffect(() => {
    const loadDesignations = async () => {
      try {
        const res = await getAllDesignations();

        setDesignations(
          res.data.data.map((d: any) => ({
            label: d.designation_name,
            value: d.id,
          }))
        );
      } catch (err) {
        console.error("Failed to load designations");
      }
    };

    loadDesignations();
  }, []);

  /* =========================
     SET FORM DATA (EDIT)
  ========================= */
  const setFormData = useCallback(
    (data: any) => {
      setImagePreview(data.our_team_image || null);

      reset({
        name: data.name ?? "",
        designation_id: Number(data.designation_id),
        status: data.status ?? 1,
        image: null,
      });
    },
    [reset]
  );

  useFetchById({
    fetchService: async (id) => {
      const res = await getTeamMemberById(id);
      return res.data.data;
    },
    setFormData,
  });

  /* =========================
     SUBMIT
  ========================= */
  const onSubmit = async (data: OurTeamFormData) => {
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (key === "image" && value instanceof FileList && value.length > 0) {
          formData.append("image", value[0]);
        } else if (value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });

      const res = await submitTeamMember(
        itemID ? Number(itemID) : undefined,
        formData
      );

      if (!res.data.success) throw new Error(res.data.message);

      setMessage({ type: "success", text: res.data.message });
      setRefresh(!refresh);

      reset();
      setImagePreview(null);

      setTimeout(() => {
        router.push("/admin/team-member-list");
      }, 800);
    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
    }
  };

  /* =========================
     UI
  ========================= */
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 border p-6 rounded-lg bg-white"
      isSubmitting={isSubmitting}
      message={message || undefined}
      submitButtonText={isEdit ? "Update Member" : "Add Member"}
      submitButtonClassName="btn-primary"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <FormGroup>
          <Label>Member Name *</Label>
          <Input
            {...register("name")}
            placeholder="Enter member name"
            error={!!errors.name}
            errorMessage={errors.name?.message}
          />
        </FormGroup>

        {/* Designation */}
        <FormGroup>
          <Label>Designation *</Label>
          <Controller
            name="designation_id"
            control={control}
            render={({ field }) => (
              <Select
                options={designations}
                placeholder="Select designation"
                value={field.value}
                onChange={(val) => field.onChange(Number(val))}
                error={!!errors.designation_id}
                errorMessage={errors.designation_id?.message}
              />
            )}
          />
        </FormGroup>
      </div>

      {/* Image */}
      <FormGroup>
        <Label>Profile Image *</Label>
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <FileInput
              onChange={(e) => {
                field.onChange(e.target.files);
                if (e.target.files?.[0]) {
                  setImagePreview(URL.createObjectURL(e.target.files[0]));
                }
              }}
              error={!!errors.image}
              errorMessage={typeof errors.image === "object" && errors.image !== null && "message" in errors.image ? (errors.image.message as string | undefined) : undefined}
            />
          )}
        />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="max-h-48 rounded-lg border mt-2"
          />
        )}
      </FormGroup>
    </Form>
  );
}