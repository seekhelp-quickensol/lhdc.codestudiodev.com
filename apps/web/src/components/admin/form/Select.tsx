"use client";
import React from "react";
import ReactSelect from "react-select";
import { FieldError } from "react-hook-form";

interface Option {
  value: number | string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  value?: number | string;
  onChange: (value: number | string) => void;
  className?: string;
  disabled?: boolean;
  error?: FieldError | boolean;
  errorMessage?: string;
  onChangeCallback?: () => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select an option",
  value,
  onChange,
  className = "",
  disabled = false,
  error,
  errorMessage,
  onChangeCallback,
}) => {
  const hasError = Boolean(error);

  const selectedOption =
    options.find((opt) => opt.value === value) || null;

  return (
    <div className={className}>
      <ReactSelect
        components={{ IndicatorSeparator: () => null }}
        options={[
          { value: 0, label: placeholder },
          ...options,
        ]}
        value={selectedOption}
        onChange={(selected) => {
          onChange(selected ? selected.value : 0);
          onChangeCallback?.();
        }}
        isDisabled={disabled}
        placeholder={placeholder}

        /* 🔥 THIS FIXES THE BORDER ISSUE */
        styles={{
          control: (base, state) => ({
            ...base,
            minHeight: "44px",
            borderRadius: "8px",
            borderColor: hasError
              ? "#ef4444" // red-500
              : state.isFocused
              ? "#3b82f6" // blue-500
              : "#d1d5db", // gray-300
            boxShadow: state.isFocused
              ? hasError
                ? "0 0 0 1px #ef4444"
                : "0 0 0 1px #3b82f6"
              : "none",
            "&:hover": {
              borderColor: hasError ? "#ef4444" : "#9ca3af",
            },
          }),
        }}

        classNames={{
          control: () =>
            "text-sm dark:bg-gray-900 dark:text-white/90",
          placeholder: () =>
            "text-gray-400 dark:text-gray-400",
          singleValue: () =>
            "text-gray-800 dark:text-white/90",
          menu: () =>
            "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-md text-sm",
          option: (state) =>
            `cursor-pointer px-3 py-2 ${
              state.isFocused
                ? "bg-gray-100 dark:bg-gray-800"
                : ""
            }`,
        }}
      />

      {errorMessage && (
        <p className="mt-1 text-xs text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Select;
