import React from "react";

interface CheckboxProps {
  name: string;
  label?: string;
  checked: boolean;                 // Controlled value
  onChange: (val: boolean) => void; // Callback to update state
  disabled?: boolean;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  checked,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <label
      className={`flex items-center space-x-3 cursor-pointer ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      <div className="relative w-5 h-5">
        <input
          type="checkbox"
          className={`w-5 h-5 border border-gray-300 rounded-md checked:bg-teal-500 disabled:opacity-60 ${className}`}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        {checked && (
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
              stroke="white"
              strokeWidth="1.94437"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {label && <span className="text-sm font-medium text-gray-800">{label}</span>}
    </label>
  );
};

export default Checkbox;
