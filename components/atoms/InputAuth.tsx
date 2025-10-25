// components/atoms/Input.tsx
"use client";

import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, containerClassName = "", labelClassName = "", inputClassName = "", ...rest }, ref) => {
    return (
      <div className={`flex flex-col ${containerClassName}`}>
        {label && <label className={`block text-gray-700 text-sm mb-2 ${labelClassName}`}>{label}</label>}
        <input
          ref={ref}
          {...rest}
          className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClassName}`}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
