import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "sm" | "md"; // Button size
  variant?: "primary" | "primaryOutline" | "secondary" | "danger" | "dangerOutline" | "warning" | "warningOutline" |  "outline"; // Button variant
  startIcon?: ReactNode; // Icon before the text
  endIcon?: ReactNode; // Icon after the text
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
  title?: string; // Disabled state
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "sm",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  title = "",
  disabled = false,
}) => {
  // Size Classes
  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-5 py-2 text-md",
  };

  // Variant Classes
  const variantClasses = {
    primary:
      "btn-primary",
    primaryOutline:
      "btn-primary-outline",
    secondary:
      "btn-secondary",
    danger:
      "btn-danger",
    dangerOutline:
      "btn-danger-outline",
    warning:
      "btn-warning",
    warningOutline:
      "btn-warning-outline",
    outline:
      "btn-warning-outline",

  };

  return (
    <button
    title={title}
      className={`inline-flex items-center justify-center font-medium gap-2 rounded-lg transition ${className} ${sizeClasses[size]
        } ${variantClasses[variant]} ${disabled ? "cursor-not-allowed opacity-50" : ""
        }`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
