"use client";
import React from "react";

/**
 * TextArea Props
 * Fully compatible with react-hook-form
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
  hint?: string;
  errorMessage?: string;
}

const TextArea: React.FC<TextareaProps> = ({
  label,
  error = false,
  hint,
  errorMessage,
  className = "",
  ...props
}) => {
  const baseClasses = `
    w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs
    transition-colors focus:outline-hidden
    dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30
    ${
      error
        ? "border-error-500 focus:ring-3 focus:ring-error-500/10"
        : "border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
    }
    ${props.disabled ? "bg-gray-100 opacity-50 cursor-not-allowed dark:bg-gray-800" : ""}
    ${className}
  `;

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={props.id} className="mb-1 text-sm font-medium">
          {label}
        </label>
      )}

      <textarea
        {...props}
        className={baseClasses}
      />

      {errorMessage && (
        <p className="mt-1 text-xs text-error-500">{errorMessage}</p>
      )}

      {!errorMessage && hint && (
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {hint}
        </p>
      )}
    </div>
  );
};

export default TextArea;
