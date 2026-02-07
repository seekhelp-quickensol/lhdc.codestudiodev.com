"use client";

import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";

import Form from "@/src/components/admin/form/Form";
import FormGroup from "@/src/components/admin/form/FormGroup";
import Label from "@/src/components/admin/form/Label";
import Input from "@/src/components/admin/form/input/InputField";
import Textarea from "@/src/components/admin/form/input/TextArea";

import { useToastMessage } from "@/src/hooks/admin/useToastMessage";
import { useFetchById } from "@/src/hooks/admin/useFetchById";

import { submitFaq, getFaqById } from "@/src/services/admin/services";

import Button from "@/src/components/admin/ui/button/Button";
import { useStateContext } from "@/src/context/admin/StateContext";
import { useParams, useRouter } from "next/navigation";

import { getFaqSchema, FaqFormData } from "@/src/validation/admin/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { fa } from "zod/v4/locales";

export default function AddFaqForm() {
  const { message, setMessage } = useToastMessage();
  const { refresh, setRefresh } = useStateContext();

  const params = useParams();
  const itemID = Array.isArray(params.id) ? params.id[0] : params.id;
  const isEdit = itemID !== undefined && itemID !== null;

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FaqFormData & { is_draft: boolean }>({
    resolver: zodResolver(getFaqSchema(isEdit)),
    defaultValues: {
      question: "",
      answer: "",
      status: 1,
      is_draft: false, // needed for draft toggle
    },
  });

  const isDraft = watch("is_draft");

  /* =========================
     EDIT MODE FETCH
  ========================== */
  const setFormData = useCallback(
    (data: any) => {
      reset({
        question: data?.question || "",
        answer: data?.answer || "",
        status: data?.status || 1,
        is_draft: data?.status === 0,

      });
    },
    [reset]
  );

  useFetchById({
    fetchService: async (id) => {
      const res = await getFaqById(id);
      return res.data.data;
    },
    setFormData,
  });

  /* =========================
     SUBMIT
  ========================== */
 const onSubmit = async (data: FaqFormData & { is_draft: boolean }) => {
  try {
    const payload = {
      question: data.question,
      answer: data.answer,
      status: data.is_draft ? 0 : 1,
    };

    const res = await submitFaq(Number(itemID), payload);
    if (!res.data.success) throw new Error(res.data.message);

    setMessage({ type: "success", text: res.data.message });
    reset();
    setRefresh(!refresh);

    setTimeout(() => {
      router.push("/admin/faq-list");
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
      submitButtonText={isDraft ? "Save Draft" : "Save FAQ"}
      submitButtonClassName={isDraft ? "btn-secondary" : "btn-primary"}
    >
      {/* Question */}
      <FormGroup>
        <Label>Question *</Label>
        <Input
          {...register("question")} 
          error={!!errors.question}
          errorMessage={errors.question?.message}
          placeholder="Enter Question"
        />
      </FormGroup>

      {/* Answer */}
      <FormGroup>
        <Label>Answer *</Label>
        <Textarea
          {...register("answer")}
          rows={4}
          error={!!errors.answer}
          errorMessage={errors.answer?.message}
          placeholder="Enter Anster"
        />
      </FormGroup>

      {/* Draft */}
      
    </Form>
  );
}
