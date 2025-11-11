"use client";
import { useState, useId } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

function InputField({ label, type = "text", name, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const id = useId();

  // Determine the input type dynamically
  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative w-full">
      <input
        id={id}
        type={inputType}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== "")}
        className="peer w-full rounded-md border border-gray-300 bg-transparent px-3 pt-3 pb-2 text-white placeholder-transparent focus:border-white focus:ring-0 outline-none transition"
        placeholder={label}
        autoComplete={type === "password" ? "new-password" : "off"}
      />

      <label
        htmlFor={id}
        className={`absolute left-3 top-0 text-white text-sm transition-all duration-200 font-semibold cursor-text ${
          isFocused || value
            ? "text-xs -translate-y-2 bg-blue-500 text-gray-800 px-1"
            : "translate-y-3 text-gray-500"
        }`}
      >
        {label}
      </label>

      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 cursor-pointer"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <IoEyeOff className="text-xl" /> : <IoEye className="text-xl" />}
        </button>
      )}
    </div>
  );
}

export default InputField;
