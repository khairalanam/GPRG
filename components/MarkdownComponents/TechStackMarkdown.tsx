import React from "react";
import techStackOptions from "@/data/techStacks";
import { TechStack } from "@/types/NormalTypes";

const TechStackMarkdown: React.FC<{ techStack: string[] }> = ({
  techStack,
}) => {
  return (
    <>
      <h2>My Tech Stack</h2>
      <ul className="list-none flex">
        {techStack.map((tech: string) => {
          if (techStack.includes(tech)) {
            const selectedTechStack: TechStack = techStackOptions.find(
              (t: TechStack) => t.value === tech
            )!;

            return (
              <li key={tech} className="w-4 md:w-5 lg:w-6">
                {selectedTechStack.icon}
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default TechStackMarkdown;
