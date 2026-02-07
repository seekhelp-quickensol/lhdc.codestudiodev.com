"use client";

import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Form from "@/src/components/admin/form/Form";
import FormGroup from "@/src/components/admin/form/FormGroup";
import Label from "@/src/components/admin/form/Label";
import Input from "@/src/components/admin/form/input/InputField";
import Textarea from "@/src/components/admin/form/input/TextArea";
import TextEditorInput from "@/src/components/admin/form/input/TextEditor";
import FileInput from "@/src/components/admin/form/input/FileInput";
import TagInput from "@/src/components/admin/form/input/TagInput";

import { useToastMessage } from "@/src/hooks/admin/useToastMessage";
import { useFetchById } from "@/src/hooks/admin/useFetchById";

import {
  submitPressRelease,
  getPressReleaseById,
} from "@/src/services/admin/services";

import Button from "@/src/components/admin/ui/button/Button";
import { useStateContext } from "@/src/context/admin/StateContext";
import { useParams, useRouter } from "next/navigation";


import { getPressReleaseSchema, PressReleaseFormData } from "@/src/validation/admin/validation";
import { zodResolver } from "@hookform/resolvers/zod";

/* =========================
   SLUG GENERATOR
========================= */
const generateSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* =========================
   FORM TYPE
========================= */


export default function AddPressReleaseForm() {
  const { message, setMessage } = useToastMessage();
  const { refresh, setRefresh } = useStateContext();

  const params = useParams();
  const itemID = Array.isArray(params.id) ? params.id[0] : params.id;
  const isEdit = itemID !== undefined && itemID !== null;

  const router = useRouter();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
// getPressReleaseSchema
   const {
      register,
      handleSubmit,
      control,
      watch,
      setValue,
      formState: { errors, isSubmitting },
      reset,
    } = useForm({
      resolver: zodResolver(getPressReleaseSchema(isEdit)),
  defaultValues: {
    title: "",
    meta_url: "",
    meta_keyword: "",
    author: "",
    tag: [],                // good
    short_description: "",
    press_release_content: "",
    status: 1,
    is_draft: false,
    image: null,
  },
});

  const isDraft = watch("is_draft");

  /* =========================
     AUTO SLUG
  ========================= */
  const title = watch("title");
  useEffect(() => {
    if (title) setValue("meta_url", generateSlug(title));
  }, [title, setValue]);

  /* =========================
     EDIT MODE FETCH
  ========================= */
  const setFormData = useCallback(
    (data: any) => {
      setImagePreview(data.press_release_image || null);

      let tags: string[] = [];
      if (typeof data.tag === "string") {
        try {
          tags = JSON.parse(data.tag);
        } catch {}
      } else if (Array.isArray(data.tag)) {
        tags = data.tag;
      }

      reset({
        title: data.title ?? "",
        meta_url: data.meta_url ?? "",
        meta_keyword: data.meta_keyword ?? "",
        author: data.author ?? "",
        tag: tags,
        short_description: data.short_description ?? "",
        press_release_content: data.press_release_content ?? "",
        status: data.status ?? 1,
        is_draft: data.status === 0,
        image: null,
      });
    },
    [reset]
  );

  useFetchById({
    fetchService: async (id) => {
      const res = await getPressReleaseById(id);
      return res.data.data;
    },
    setFormData,
  });

  /* =========================
     SUBMIT
  ========================= */
  const onSubmit = async (
    data: Omit<PressReleaseFormData, "tag" | "status" | "is_draft"> & { tag?: string[]; status?: number; is_draft?: boolean }
  ) => {
    try {
      const formData = new FormData();
      const status = data.is_draft ? 0 : 1;

      Object.entries({ ...data, status }).forEach(([key, value]) => {
        if (key === "image" && value instanceof FileList && value.length > 0) {
          formData.append("image", value[0]);
        } else if (key === "tag") {
          formData.append("tag", JSON.stringify(value ?? []));
        } else if (key !== "is_draft" && value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });

      const res = await submitPressRelease(Number(itemID), formData);
      if (!res.data.success) throw new Error(res.data.message);

      setMessage({ type: "success", text: res.data.message });
      reset();
      setImagePreview(null);
      setRefresh(!refresh);

      setTimeout(() => {
        router.push("/admin/press-release-list");
      }, 800);
    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-1 border p-6 rounded-lg bg-white"
      isSubmitting={isSubmitting}
      message={message || undefined}
      submitButtonText={isDraft ? "Save Draft" : "Publish"}
      submitButtonClassName={isDraft ? "btn-secondary" : "btn-primary"}
    >
      {/* Title + Meta URL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-0 ">   
        <FormGroup>
          <Label>Title *</Label>
          <Input
            {...register("title")}
            error={!!errors.title}
            errorMessage={errors.title?.message}
            placeholder="Enter Title"
          />
        </FormGroup>

        <FormGroup>
          <Label>Meta URL</Label>
          <Input {...register("meta_url")} readOnly error={!!errors.author}
        errorMessage={errors.meta_url?.message?.toString()}
        placeholder="meta url"/>
        </FormGroup>
      </div>

      {/* Meta Keyword + Author */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-0">
        <FormGroup>
          <Label>Meta Keywords *</Label>
          <Input
            {...register("meta_keyword")}
            error={!!errors.meta_keyword}
            errorMessage={errors.meta_keyword?.message}
            placeholder="Enter Keywords"
          />
        </FormGroup>

        

        <FormGroup>
          <Label>Author</Label>
          <Input {...register("author")}
           error={!!errors.author}
        errorMessage={errors.author?.message?.toString()}
        placeholder="Enter Author Name" />
        </FormGroup>
      </div>

      

      {/* Tags */}
     {/* <FormGroup>
  <Label>Tags</Label>
  <Controller
    name="tag" // must match your schema key
    control={control}
    render={({ field }) => (
      <TagInput
        {...field}
        placeholder="Enter tags..."
        error={!!errors.tag} // show error border
        errorMessage={errors.tag?.message?.toString()} // show error text
      />
    )}
  />
</FormGroup> */}

 <FormGroup>
        <Label>Tags</Label>
        <TagInput name="tag" control={control} placeholder="Enter tags..." />
      </FormGroup>



      {/* Image */}
      <FormGroup>
        <Label>Press Release Image *</Label>
        <Controller
          name="image"
          control={control}
          rules={{
            validate: (files: FileList | null | undefined) =>
              isEdit || (files && files.length > 0)
                ? true
                : "Image is required",
          }}
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
          <img src={imagePreview} className="max-h-64 rounded-lg border mt-2" />
        )}
      </FormGroup>

      {/* Short Description */}
      <FormGroup>
        <Label>Short Description</Label>
        <Textarea
          {...register("short_description")}
          rows={4}
          error={!!errors.short_description}
          errorMessage={errors.short_description?.message}
          placeholder="Write Short Description"
        />
      </FormGroup>

      {/* Content */}
      <FormGroup>
        <Label>Press Release Content</Label>
        <Controller
          name="press_release_content"
          control={control}
          render={({ field }) => (
            <TextEditorInput
              value={field.value ?? ""}
              onChange={field.onChange}
              error={
                errors.press_release_content && errors.press_release_content.message
                  ? { message: errors.press_release_content.message }
                  : undefined
              }
              
            />
          )}
          
        />
      </FormGroup>

      {/* Draft */}
      <FormGroup>
        <label className="flex items-center gap-2">
          <input type="checkbox" {...register("is_draft")} />
          <span>Save as Draft</span>
        </label>
      </FormGroup>
    </Form>
  );
}
