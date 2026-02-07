"use client";
import React, { FC, ReactNode, FormEvent } from "react";
import Button from "../ui/button/Button";

interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  className?: string;
  isSubmitting?: boolean;
  isDisable?: boolean;
  cancelButton?: boolean;
  submitButtonText?: string;
  cancalButtonText?: string;
  submitButtonClassName?: string;
  cancalButtonClassName?: string;
  submitButtonLoadingText?: string;
  formLayout?: "vertical" | "horizontal";
  message?: { type: "success" | "error"; text: string };
}

const Form: FC<FormProps> = ({
  onSubmit,
  children,
  className,
  cancalButtonClassName,
  cancalButtonText,
  cancelButton = false,
  isSubmitting,
  isDisable = false,
  message,
  submitButtonText,
  submitButtonClassName,
  submitButtonLoadingText,
  formLayout,

}) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {formLayout === "horizontal" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-2">
          {children}
        </div>
      ) : (
        <div className="flex flex-col space-y-6">{children}</div>
      )}
      {message && (
        <div
          className={`mt-4 text-sm ${
            message.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {/* {message.text} */}
        </div>
      )}
      <div className="mt-0">
      
      <Button variant="primary" size="sm" className={`${submitButtonClassName}`} disabled={isDisable} >
      {isSubmitting
            ? submitButtonLoadingText || "Submitting..."
            : submitButtonText || "Submit"}

            
      </Button>
      
      {
        cancelButton && <Button variant="secondary" size="sm" className={`${cancalButtonClassName}`}>
        {cancalButtonText || "Cancel"}
      </Button>
      }
      
      </div>

      
    </form>
  );
};
export default Form;