"use client";

import React, { createContext, useContext, useState } from "react";


interface OptionContextType {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

/* ================= CONTEXT ================= */

const OptionContext = createContext<OptionContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const OptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [refresh, setRefresh] = useState(false);


  return (
    <OptionContext.Provider
      value={{
        refresh,
        setRefresh,

      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useOptionContext = (): OptionContextType => {
  const context = useContext(OptionContext);
  if (!context) {
    throw new Error("useOptionContext must be used within an OptionProvider");
  }
  return context;
};
