"use client";

import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Form from "@/src/components/admin/form/Form";
import FormGroup from "@/src/components/admin/form/FormGroup";
import Label from "@/src/components/admin/form/Label";
import Input from "@/src/components/admin/form/input/InputField";
import Select from "@/src/components/admin/form/Select";
import Textarea from "@/src/components/admin/form/input/TextArea";
import TextEditorInput from "@/src/components/admin/form/input/TextEditor";
import FileInput from "@/src/components/admin/form/input/FileInput";
import TagInput from "@/src/components/admin/form/input/TagInput";

import { useToastMessage } from "@/src/hooks/admin/useToastMessage";
import { useFetchById } from "@/src/hooks/admin/useFetchById";

import { submitBlog, getBlogById, getAllBlogCategories } from "@/src/services/admin/services";
import Button from "@/src/components/admin/ui/button/Button";
import { useStateContext } from "@/src/context/admin/StateContext";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { getBlogSchema } from "@/src/validation/admin/validation";

// Define BlogFormData to match the schema exactly
type BlogFormData = {
  title: string;
  meta_url: string;
  meta_keyword: string;
  meta_description: string;
  author: string;
  tag: string[];
  category_id: number;
  short_description: string;
  blog_content: string;
  status: number;
  is_draft: boolean;
  image: null;
};
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



export default function AddBlogForm() {
  const { message, setMessage } = useToastMessage();
  const { refresh, setRefresh } = useStateContext();
  const params = useParams();
  const itemID = Array.isArray(params.id) ? params.id[0] : params.id;

  const isEdit = itemID !== undefined && itemID !== null;
  const navigation = useRouter();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [categories, setCategories] = useState<{ label: string; value: number }[]>([]);

 const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(getBlogSchema(isEdit)),
    defaultValues: {
      title: "",
      meta_url: "",
      meta_keyword: "",
      meta_description: "",
      author: "",
      tag: [],
      category_id: 0,
      short_description: "",
      blog_content: "",
      status: 1,
      is_draft: false,
    },
  });

  const isDraft = watch("is_draft");

  // Load categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllBlogCategories();
        if (res.data.success) {
          setCategories(
            res.data.data
              .filter((c: any) => c.status === 1 && c.is_deleted === 0)
              .map((c: any) => ({ label: c.name, value: c.id }))
          );
        }
      } catch {
        setMessage({ type: "error", text: "Failed to load categories" });
      }
    };
    fetchCategories();
  }, [setMessage]);

  // Auto slug
  const title = watch("title");
  useEffect(() => {
    if (title) setValue("meta_url", title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
  }, [title, setValue]);

  // Edit mode data fetch
  const setFormData = useCallback((data: any) => {
    setImagePreview(data.blog_image || null);

    let tags: string[] = [];
    if (typeof data.tag === "string") {
      try {
        tags = JSON.parse(data.tag);
      } catch { }
    } else if (Array.isArray(data.tag)) {
      tags = data.tag;
    }

    reset({
      title: data.title ?? "",
      meta_url: data.meta_url ?? "",
      meta_keyword: data.meta_keyword ?? "",
      author: data.author ?? "",
      meta_description: data.meta_description ?? "",
      tag: tags,
      category_id: Number(data.category_id),
      short_description: data.short_description ?? "",
      blog_content: data.blog_content ?? "",
      status: data.status ?? 1,
      is_draft: data.status === 0,
      image: null,
    });
  }, [reset]);

  useFetchById({
    fetchService: async (id) => {
      const res = await getBlogById(id);
      return res.data.data;

    },
    setFormData,
  });
  console.log(itemID)

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      const status = data.is_draft ? 0 : 1;

      Object.entries({ ...data, status }).forEach(([key, value]) => {
        if (key === "image" && value instanceof FileList && value.length > 0) {
          formData.append("image", value[0]);
        } else if (key === "tag") {
  formData.append("tag", JSON.stringify(value));
}
else if (key !== "is_draft" && value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });

      const res = await submitBlog(Number(itemID), formData);

      if (!res.data.success) throw new Error(res.data.message);

      setMessage({ type: "success", text: res.data.message });
      reset();
      setImagePreview(null);
      setRefresh(!refresh);
      setTimeout(() => {
        navigation.push('/admin/blog-list');
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
    {/* Blog Title + Meta URL */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4  my-0">
  {/* Blog Title */}
  <FormGroup>
    <Label>Blog Title *</Label>
    <Input
      {...register("title")}
      error={!!errors.title}
      errorMessage={errors.title?.message?.toString()}
       placeholder="Enter Title"
    />
  </FormGroup>

  {/* Meta URL */}
  <FormGroup>
    <Label>Meta URL</Label>
    <Input
      {...register("meta_url")}
      readOnly error={!!errors.meta_url}
        errorMessage={errors.meta_url?.message?.toString()}  placeholder="meta url"
    />
  </FormGroup>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-0">

  <FormGroup>
        <Label>Meta Keywords *</Label>
        <Input
          {...register("meta_keyword")}
          error={!!errors.meta_keyword}
          errorMessage={errors.meta_keyword?.message?.toString()}
           placeholder="Enter Keywords"
        />
      </FormGroup>

 <FormGroup>
        <Label>Author</Label>
        <Input {...register("author")}
          error={!!errors.author}
  errorMessage={errors.author?.message?.toString()}
  placeholder="Enter author name"/>
      </FormGroup>
</div>

    
      

      {/* Meta Description */}
      <FormGroup>
        <Label>Meta Description *</Label>
        <Textarea
          {...register("meta_description")}
          rows={3}
          error={!!errors.meta_description}
          errorMessage={errors.meta_description?.message?.toString()}
           placeholder="Enter Description"
        />
      </FormGroup>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-0">

    {/* Tags */}
      <FormGroup>
        <Label>Tags</Label>
        <TagInput name="tag" control={control} placeholder="Enter tags..." />
      </FormGroup>


      {/* Category */}
      <FormGroup>
        <Label>Category *</Label>
        <Controller
          name="category_id"
          control={control}
          
          render={({ field }) => (
            <Select
              options={categories}
              placeholder="Select category"
              value={field.value}
              onChange={(val) => field.onChange(Number(val))}

              error={!!errors.category_id}
              errorMessage={errors.category_id?.message?.toString()}
            />
          )}
        />
      </FormGroup>
</div>
      

    


      {/* Blog Image */}
      <FormGroup>
        <Label>Blog Image *</Label>
        <Controller
          name="image"
          control={control}
          rules={{
            validate: (files) =>
              isEdit || (files && files.length > 0)
                ? true
                : "Blog image is required",
          }}
          render={({ field }) => (
            <FileInput
              onChange={(e) => {
                field.onChange(e.target.files);
                if (e.target.files?.[0]) setImagePreview(URL.createObjectURL(e.target.files[0]));
              }}
              error={!!errors.image}
              errorMessage={errors.image?.message?.toString()}
            />
          )}
        />

        {imagePreview && <img src={imagePreview} className="max-h-64 rounded-lg border mt-2" />}
      </FormGroup>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-0"></div>

      {/* Short Description */}
      <FormGroup>
        <Label>Short Description</Label>
        <Controller
          name="short_description"
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              error={!!errors.short_description}
              errorMessage={errors.short_description?.message?.toString()}
              rows={4}
            />
          )}
        />
      </FormGroup>

      {/* Blog Content */}
      <FormGroup>
        <Label>Blog Content</Label>
        <Controller
          name="blog_content"
          control={control}
          render={({ field }) => (
            <TextEditorInput 
              value={field.value ?? ""}
              error={errors.blog_content ? { message: errors.blog_content.message ?? "Blog content is required" } : undefined}
              onChange={field.onChange} 
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
