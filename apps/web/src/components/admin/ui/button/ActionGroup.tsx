import React, { ReactNode } from "react";

interface ActionGroupProps {
  children: ReactNode;
  className?: string;
  
}

const ActionGroup: React.FC<ActionGroupProps> = ({
  children,
  className = "",
 
}) => {

   

  return (
    <div
      className={`flex justify-start gap-2 items-center w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default ActionGroup;
