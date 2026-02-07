import React, { ReactNode } from "react";

interface ActionButtonProps {
  children: ReactNode;
  size?: "sm" | "md";
  variant?: "edit" | "delete" | "active" | "inactive" | "editOutline" | "deleteOutline" | "activeOutline" | "inactiveOutline" | "download" | "publish" |"view";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  title?: string; // Disabled state
  link ?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  size = "sm",
  variant = "edit",
  startIcon,
  endIcon,
  onClick,
  className = "",
  title = "",
  disabled = false,
  link,
}) => {

  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-5 py-2 text-md",
  };

  interface variantClassesType{
    edit: string;
    editOutline: string;
    delete: string;
    deleteOutline: string;
    active: string;
    activeOutline: string;
    inactive: string;
    inactiveOutline: string;
    download: string;
    publish: string;
    view: string;
}

  const variantClasses:variantClassesType = {
    edit:
      "border border-[#ccc] py-2 px-1 text-green-700 btn-edit hover:bg-[#f7f7f7]",
    editOutline:
      "border border-[#ccc] py-2 px-1 btn-edit-outline hover:bg-[#f7f7f7]",
    delete:
      "text-red-700 border border-[#ccc] py-2 px-1 btn-delete hover:bg-[#f7f7f7]",
    deleteOutline:
      "text-red-700 border border-[#ccc] py-2 px-1 btn-delete-outline hover:bg-[#f7f7f7]",
    active:
      "text-blue-700 border border-[#ccc] py-2 px-1 btn-active hover:bg-[#f7f7f7]",
    activeOutline:
      "text-blue-700 border border-[#ccc] py-2 px-1 btn-active-outline hover:bg-[#f7f7f7]",
    inactive:
      "border border-[#ccc] py-2 px-1 btn-inactive hover:bg-[#f7f7f7]",
    inactiveOutline:
      "border border-[#ccc] py-2 px-1 btn-inactive-outline hover:bg-[#f7f7f7]",
    download:
    "inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition shadow-sm",
    publish:
    "text-purple-700 border border-[#ccc] py-2 px-1 btn-publish hover:bg-[#f7f7f7]",
    view: // <-- new variant
      "text-teal-700 border border-[#ccc] py-2 px-2 btn-view hover:bg-[#f0fdfa] font-medium",


  };

  return (
    <div className="flex justify-center">
    {
      (variant === "download") ? (
        <a
        href={link ? link : '#'}
        download
        className= {`inline-flex items-center justify-center font-medium gap-2 rounded-lg transition ${className} ${sizeClasses[size]
          } ${variantClasses[variant]} ${disabled ? "cursor-not-allowed opacity-50" : ""
          }`}
      >
          {children}
       
       
      </a>
      ) : (
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
      )
    }
    
   </div>
  );
};

export default ActionButton;
