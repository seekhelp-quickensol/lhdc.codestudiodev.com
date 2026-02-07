// components/filter/MultiSelect.tsx
"use client";

import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

type Option = { label: string; value: string };

interface MultiSelectProps {
  options: Option[];
  value: string[];                    // Array of selected values
  onChange: (selected: string[]) => void;
  placeholder?: string;
  isClearable?: boolean;
  isDisabled?: boolean;
  className?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value = [],
  onChange,
  placeholder = "Select options",
  isClearable = true,
  isDisabled = false,
  className = "",
}) => {
  // Convert value array to react-select format
  const selectedOptions = options.filter((opt) => value.includes(opt.value));

  const handleChange = (selected: any) => {
    const values = selected ? selected.map((item: any) => item.value) : [];
    onChange(values);
  };

  return (
    <Select
      isMulti
      options={options}
      value={selectedOptions}
      onChange={handleChange}
      placeholder={placeholder}
      
      isClearable={isClearable}
      isDisabled={isDisabled}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{
        IndicatorSeparator: () => null
      }}
      className={`basic-multi-select ${className}`}
      classNamePrefix="react-select"
      styles={{
        control: (base) => ({
          ...base,
          minHeight: "40px",
          borderRadius: "8px",
          // borderColor: "#d1d5db",
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
        // valueContainer: (base) => ({
        //   ...base,
        //   padding: "2px 8px",
        // }),
        // multiValue: (base) => ({
        //   ...base,
        //   backgroundColor: "#e0f2fe",
        //   borderRadius: "0.375rem",
        //   padding: "2px 6px",
        // }),
        // multiValueLabel: (base) => ({
        //   ...base,
        //   color: "#0369a1",
        //   fontSize: "0.875rem",
        // }),
        // multiValueRemove: (base) => ({
        //   ...base,
        //   color: "#0369a1",
        //   ":hover": {
        //     backgroundColor: "#bae6fd",
        //     color: "#024883",
        //   },
        // }),
        placeholder: (base) => ({
          ...base,
          color: "#9ca3af",
          fontSize:"14px"
        }),
        // menu: (base) => ({
        //   ...base,
        //   zIndex: 9999,
        //   borderRadius: "0.5rem",
        //   overflow: "hidden",
        //   boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
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

export default MultiSelect;