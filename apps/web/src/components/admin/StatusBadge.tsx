import React from "react";

interface StatusBadgeProps {
  isActive: boolean;
  activeText?: string;
  inactiveText?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  isActive,
  activeText = "Active",
  inactiveText = "Inactive",
}) => {
  const baseClasses =
    "px-4 py-1 rounded-full text-xs font-medium inline-block";

  const activeClasses = "bg-green-100 text-green-800";
  const inactiveClasses = "bg-red-100 text-red-800";

  return (
    <span
      className={`${baseClasses} ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      {isActive ? activeText : inactiveText}
    </span>
  );
};

export default StatusBadge;
