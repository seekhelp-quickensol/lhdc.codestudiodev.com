'use client';

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Input from "@/src/components/admin/form/input/InputField";
import Label from "@/src/components/admin/form/Label";
import Form from "@/src/components/admin/form/Form";
import FormGroup from "@/src/components/admin/form/FormGroup";
import { Button } from "@/shadcn/ui/button";

import { useToastMessage } from "@/src/hooks/admin/useToastMessage";
import { useStateContext } from "@/src/context/admin/StateContext";
import { useUniqueCheck } from "@/src/hooks/admin/useUniqueCheck";

import {
  submitBlogCategory,
  uniqueBlogCategory,
  getBlogCategoryById,
} from "@/src/services/admin/services";

/* =======================
   Schema
======================= */
const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
});

type CategoryFormData = z.infer<typeof categorySchema>;

interface AddCategoryFormProps {
  onFormSubmit?: () => void;
}

export default function AddCategoryForm({ onFormSubmit }: AddCategoryFormProps) {
  const { itemID, setItemID } = useStateContext();
  const { message, setMessage } = useToastMessage();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: { name: "" },
  });

  /* =======================
     Unique Name Check
  ======================= */
  const { isUnique, error, checkUnique } = useUniqueCheck(
    uniqueBlogCategory,
    800
  );

  const categoryName = watch("name");

  useEffect(() => {
    if (!categoryName?.trim()) return;

    checkUnique(categoryName.trim(), itemID);
  }, [categoryName, itemID, checkUnique]);

  /* =======================
     Fetch Category (Edit)
  ======================= */
  useEffect(() => {
    if (!itemID) {
      reset({ name: "" });
      return;
    }

    getBlogCategoryById(itemID)
      .then((res) => {
        if (res.data.success) {
          setValue("name", res.data.data.name, {
            shouldDirty: false,
            shouldTouch: false,
          });
        } else {
          setMessage({
            type: "error",
            text: res.data.message || "Failed to fetch category",
          });
        }
      })
      .catch((err) => {
        setMessage({
          type: "error",
          text: err?.response?.data?.message || "Failed to fetch category",
        });
      });
  }, [itemID, reset, setValue, setMessage]);

  /* =======================
     Submit Handler
  ======================= */
  const onSubmit = async (data: CategoryFormData) => {
    if (isUnique === false) {
      setMessage({
        type: "error",
        text: "Category name already exists.",
      });
      return;
    }

    setMessage(null);

    try {
      const res = await submitBlogCategory(itemID, {
        name: data.name.trim(),
      });

      if (!res.data.success) {
        throw new Error(res.data.message);
      }

      setMessage({
        type: "success",
        text: itemID
          ? "Category updated successfully!"
          : "Category added successfully!",
      });

      reset({ name: "" });
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
      className="space-y-1 "
      message={message || undefined}
    >
      <FormGroup>
        <Label>Category Name</Label>
        <Input
          placeholder="Enter category name"
          {...register("name")}
          error={!!errors.name || isUnique === false}
          unique={isUnique === true && !errors.name}
          errorMessage={
            errors.name?.message ||
            (isUnique === false ? "Category already exists" : undefined) ||
            (error ? "Error checking uniqueness" : undefined)
          }
          hint="Add one category at a time"
        />
      </FormGroup>

    </Form>
  );
}
