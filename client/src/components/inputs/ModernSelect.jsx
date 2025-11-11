import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function ModernSelect({ label, name, value, onChange, options, placeholder = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
    setIsFocused(false);
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Select Button */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setIsFocused(!isOpen);
        }}
        className="peer w-full rounded-md border border-gray-300 bg-transparent px-3 pt-3 pb-2 text-left text-white focus:border-white focus:ring-0 outline-none transition flex items-center justify-between"
      >
        <span className={selectedOption ? "text-white" : "text-gray-300"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-300 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Floating Label */}
      <label
        className={`absolute left-3 top-0 text-white text-sm transition-all duration-200 font-semibold pointer-events-none ${
          isFocused || value
            ? "text-xs -translate-y-2 bg-blue-500 text-white px-1"
            : "translate-y-3 text-gray-300"
        }`}
      >
        {label}
      </label>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`px-4 py-3 cursor-pointer transition-colors flex items-center justify-between ${
                value === option.value
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span>{option.label}</span>
              {value === option.value && (
                <Check className="w-5 h-5 text-white" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}