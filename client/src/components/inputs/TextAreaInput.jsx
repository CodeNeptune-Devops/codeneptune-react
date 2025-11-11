"use client";
import { useState, useId } from "react";

function TextareaInput({ label, name, value, onChange, rows = 4 }) {
  const [isFocused, setIsFocused] = useState(false);
  const id = useId(); // unique id links label ↔ textarea

  return (
    <div className="relative w-full">
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== "")}
        placeholder={label}
        className={`peer w-full rounded-md border border-gray-300 bg-transparent px-3 pt-6 pb-2 text-white placeholder-transparent focus:border-white focus:ring-0 outline-none transition resize-none`}
      />

      <label
        htmlFor={id}
        className={`absolute left-3 top-4 text-white text-sm transition-all duration-200 font-semibold cursor-text
          ${isFocused || value
            ? "text-xs -translate-y-6 bg-blue-500 text-white px-1"
            : "translate-y-3 text-gray-500"}`}
      >
        {label}
      </label>
    </div>
  );
}

export default TextareaInput;
