"use client";

import { FormData, FormState } from "@/types/NormalTypes";
import React from "react";

const GitHubUserNameInput: React.FC<FormState> = ({
  formData,
  setFormData,
}) => {
  return (
    <div className="flex flex-col mt-10 max-w-2xl">
      <label htmlFor="name" className="mb-2 md:text-lg lg:text-xl">
        GitHub Username:
      </label>
      <input
        id="name"
        type="text"
        value={formData.name}
        onChange={(e) =>
          setFormData((prev: FormData) => {
            return { ...prev, username: e.target.value };
          })
        }
        className="bg-dark-blue rounded-lg px-4 py-2 md:py-3 lg:py-4"
        placeholder="Your name"
      />
    </div>
  );
};

export default GitHubUserNameInput;
