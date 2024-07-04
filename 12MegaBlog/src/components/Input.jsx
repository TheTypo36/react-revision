import { React, useId, forwardRef } from "react";

export const Input = forwardRef(function Input(
  { label, type = "text", clasname = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline=block mb-1 pl-1" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white
      text-black outline-none focus:bg-gray-200 w-full ${clasname}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
