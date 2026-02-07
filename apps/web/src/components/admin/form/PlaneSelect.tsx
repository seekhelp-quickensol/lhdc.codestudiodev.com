// components/filter/Select.tsx
"use client";

import React from "react";
import ReactSelect from "react-select";

type Option = {
  value: number | string;
  label: string;
};

interface SelectProps {
  options: Option[];
  value: number | string;              // Current selected value
  onChange: (value: number | string) => void;
  placeholder?: string;
  isDisabled?: boolean;
  isClearable?: boolean;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  isDisabled = false,
  isClearable = false,
  className = "",
}) => {
  const selectedOption = options.find((opt) => opt.value === value) || null;

  return (
    <ReactSelect
      options={options}
      value={selectedOption}
      onChange={(selected) => {
        onChange(selected ? selected.value : "");
      }}
      isDisabled={isDisabled}
      isClearable={isClearable}
      placeholder={placeholder}
      components={{
        IndicatorSeparator: () => null,
      }}
      className={`${className}`}
      classNamePrefix="plane-select"
      styles={{
        control: (base) => ({
          ...base,
          minHeight: "40px",
          // borderRadius: "0.5rem",
          // border: "1px solid #d1d5db",
          // backgroundColor: "transparent",
          // boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          fontSize: "14px",
          // "&:hover": {
          //   borderColor: "#9ca3af",
          // },
          // "&:focus-within": {
          //   borderColor: "#FFCC00",
          //   boxShadow: "0 0 0 3px rgba(255, 204, 0, 0.1)",
          // },
        }),
        placeholder: (base) => ({
          ...base,
          color: "#9ca3af",
        }),
        // singleValue: (base) => ({
        //   ...base,
        //   color: "#1f2937",
        // }),
        // menu: (base) => ({
        //   ...base,
        //   zIndex: 9999,
        //   marginTop: "4px",
        //   borderRadius: "0.5rem",
        //   overflow: "hidden",
        //   boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        //   border: "1px solid #e5e7eb",
        // }),
        // option: (base, state) => ({
        //   ...base,
        //   backgroundColor: state.isSelected
        //     ? "#FFCC00"
        //     : state.isFocused
        //     ? "#fffbeb"
        //     : "white",
        //   color: state.isSelected ? "#323223" : "#374151",
        //   fontWeight: state.isSelected ? "600" : "normal",
        //   cursor: "pointer",
        //   ":active": {
        //     backgroundColor: "#ffd428",
        //   },
        // }),
      }}
      // theme={(theme) => ({
      //   ...theme,
      //   colors: {
      //     ...theme.colors,
      //     primary: "#FFCC00",
      //     primary75: "#ffd428",
      //     primary50: "#ffed99",
      //     primary25: "#fffbeb",
      //   },
      // })}
    />
  );
};

export default Select;