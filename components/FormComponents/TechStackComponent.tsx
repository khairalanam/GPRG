"use client";

import React, { useState } from "react";
import techStackOptions from "@/data/techStacks";
import { FormState } from "@/types/NormalTypes";

const TechStackComponent: React.FC<FormState> = ({ formData, setFormData }) => {
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);

  const handleTechStackChange = (tech: string) => {
    const updatedTechStack = selectedTechStack.includes(tech)
      ? selectedTechStack.filter((t) => t !== tech)
      : [...selectedTechStack, tech];

    setSelectedTechStack(updatedTechStack);
    setFormData({ ...formData, techStacks: updatedTechStack });
  };

  return (
    <section className="max-w-2xl mt-10" aria-label='Tech Stack'>
      <fieldset>
      <legend className="mb-6 md:text-lg lg:text-xl">
        Select Your Tech Stack (Click on the icon to select)
      </legend>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {techStackOptions.map((tech) => (
          <label
            key={tech.value}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedTechStack.includes(tech.value)}
              onChange={() => handleTechStackChange(tech.value)}
              className="hidden"
              id={tech.label}
            />
            <div
              className={`w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 flex transition items-center justify-center rounded-lg md:text-xl lg:text-3xl ${
                selectedTechStack.includes(tech.value)
                  ? "bg-white text-dark-blue"
                  : "bg-dark-blue text-white"
              }`}

            >
               {tech.icon}
            </div>
            <span className="font-extralight text-sm md:text-lg lg:text-xl">
              {tech.label}
            </span>
          </label>
        ))}
      </div>
      </fieldset>
    </section>
  );
};

export default TechStackComponent;
