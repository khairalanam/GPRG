"use client";

import React, { useState } from "react";
import techStackOptions from "@/data/techStacks";

const TechStackComponent: React.FC = () => {
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);

  const handleTechStackChange = (tech: string) => {
    setSelectedTechStack((prevSelected) =>
      prevSelected.includes(tech)
        ? prevSelected.filter((t) => t !== tech)
        : [...prevSelected, tech]
    );
  };

  return (
    <section className="max-w-2xl mt-10">
      <h2 className="mb-6 md:text-lg lg:text-xl">
        Select Your Tech Stack (Click on the icon to select)
      </h2>
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
            />
            <div
              className={`w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 flex transition items-center justify-center  rounded-lg md:text-xl lg:text-3xl ${
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
    </section>
  );
};

export default TechStackComponent;
