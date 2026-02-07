"use client";

import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Form from "@/src/components/admin/form/Form";
import FormGroup from "@/src/components/admin/form/FormGroup";
import Label from "@/src/components/admin/form/Label";
import Input from "@/src/components/admin/form/input/InputField";
import TextEditorInput from "@/src/components/admin/form/input/TextEditor";
import FileInput from "@/src/components/admin/form/input/FileInput";

import { useToastMessage } from "@/src/hooks/admin/useToastMessage";
import { useFetchById } from "@/src/hooks/admin/useFetchById";

import { submitSuccessStory, getSuccessStoryById } from "@/src/services/admin/services";

import { useStateContext } from "@/src/context/admin/StateContext";
import { useParams, useRouter } from "next/navigation";

import { getSuccessStorySchema, SuccessStoryFormData } from "@/src/validation/admin/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "@/src/components/admin/form/input/TextArea";

export default function AddSuccessStoryForm() {
  const { message, setMessage } = useToastMessage();
  const { refresh, setRefresh } = useStateContext();

  const params = useParams();
  const itemID = Array.isArray(params.id) ? params.id[0] : params.id;
  const isEdit = !!itemID;

  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset } =
    useForm<SuccessStoryFormData>({
      resolver: zodResolver(getSuccessStorySchema(isEdit)),
      defaultValues: {
        name: "",
        organization: "",
        content: "",
        status: 1,
        image: null,
      },
    });

  const setFormData = useCallback((data: any) => {
    setImagePreview(data.sucess_story_image || null);

    reset({
      name: data.name ?? "",
      organization: data.organization ?? "",
      content: data.content ?? "",
      status: data.status ?? 1,
      image: null,
    });
  }, [reset]);

  useFetchById({
    fetchService: async (id) => {
      const res = await getSuccessStoryById(id);
      return res.data.data;
    },
    setFormData,
  });

const onSubmit = async (data: SuccessStoryFormData) => {
  try {
    const formData = new FormData();

    // Append each field correctly
    if (data.image && data.image instanceof FileList && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

    formData.append("name", data.name);
    formData.append("organization", data.organization || "");
    formData.append("content", data.content);
    formData.append("status", String(data.status)); // If backend expects number, some frameworks accept string

    const res = await submitSuccessStory(Number(itemID), formData);

    if (!res.data.success) throw new Error(res.data.message);

    setMessage({ type: "success", text: res.data.message });
    reset();
    setImagePreview(null);
    setRefresh(!refresh);

    setTimeout(() => {
      router.push("/admin/success-story-list");
    }, 800);
  } catch (err: any) {
    setMessage({ type: "error", text: err.message });
  }
};


  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 border p-6 rounded-lg bg-white"
      isSubmitting={isSubmitting}
      message={message || undefined}
      submitButtonText={isEdit ? "Update" : "Publish"}
      submitButtonClassName="btn-primary"
    >
      {/* Name */}
      <FormGroup>
        <Label>Name *</Label>
        <Input
          {...register("name")}
          error={!!errors.name}
          errorMessage={errors.name?.message}
          placeholder="Enter Name"
        />
      </FormGroup>

      {/* Organization */}
      <FormGroup>
        <Label>Organization / Designation</Label>
        <Input
          {...register("organization")}
          error={!!errors.organization}
          errorMessage={errors.organization?.message}
          placeholder="Enter Organization Name or Designation "
        />
      </FormGroup>

      {/* Image */}
      <FormGroup>
        <Label>Success Story Image *</Label>
        <Controller
          name="image"
          control={control}
          rules={{
            validate: (files) => isEdit || (files && files.length > 0) ? true : "Image is required",
          }}
          render={({ field }) => (
            <FileInput
              onChange={(e) => {
                field.onChange(e.target.files);
                if (e.target.files?.[0]) setImagePreview(URL.createObjectURL(e.target.files[0]));
              }}
              error={!!errors.image}
           
            />
          )}
        />
        {imagePreview && (
          <img src={imagePreview} className="max-h-64  rounded-lg border mt-2" />
        )}
      </FormGroup>

    {/* Success Story Content */}
<FormGroup>
  <Label>Success Story Content</Label>
  <TextArea
    {...register("content")}
    rows={6} // adjust height as needed
    error={!!errors.content}
    errorMessage={errors.content?.message}
    placeholder="Write the full success story here..."
  />
</FormGroup>

    </Form>
  );
}
