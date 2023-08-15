"use client";

import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import industryTags from "@/data/industryTags";
import { FormState } from "@/types/NormalTypes";

const IndustryTagComponent: React.FC<FormState> = ({
  formData,
  setFormData,
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleTagSelect = (tag: string) => {
    if (selectedTags.length < 10 && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  useEffect(
    () => setFormData({ ...formData, industryTags: selectedTags }),
    [setFormData, formData, selectedTags]
  );

  const handleTagRemove = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <section className="max-w-2xl mt-10 relative mb-80">
      <h2 className="mb-6 text-lg lg:text-xl font-semibold">
        Select Your Industry Tags
      </h2>
      <div className="relative">
        <div
          onClick={toggleDropdown}
          className="bg-dark-blue text-white px-4 py-2 w-full cursor-pointer focus:outline-none flex items-center justify-between mb-2 rounded-lg md:py-3 lg:py-4"
        >
          <span className="text-sm text-gray-400 ml-2 ">
            Click to {showDropdown ? "close" : "open"}
          </span>
          <span>{showDropdown ? <FaChevronUp /> : <FaChevronDown />}</span>
        </div>
        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 mb-2">
            {selectedTags.map((tag) => (
              <div
                key={tag}
                className="bg-white text-dark-blue px-3 py-1 rounded-full flex items-center space-x-1"
              >
                <span>{tag}</span>
                <button
                  onClick={() => handleTagRemove(tag)}
                  className="text-base focus:outline-none"
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        )}
        {showDropdown && (
          <div className="absolute z-10 mt-2 bg-dark-blue text-white p-2 rounded-md max-h-40 overflow-y-auto sm:max-h-60 md:max-h-80 w-full">
            {industryTags.map((tag) => (
              <div
                key={tag}
                onClick={() => handleTagSelect(tag)}
                className="cursor-pointer transition hover:bg-white hover:text-dark-blue rounded-md p-2"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustryTagComponent;
