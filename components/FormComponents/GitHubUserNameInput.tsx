"use client";

import { FormData, FormState } from "@/types/NormalTypes";
import React from "react";

const GitHubUserNameInput: React.FC<FormState> = ({
  formData,
  setFormData,
}) => {
  return (
    <div className="flex flex-col mt-10 max-w-2xl" role="Github Username">
      <label htmlFor="username" className="mb-2 md:text-lg lg:text-xl">
        GitHub Username:
        <span id="desc-username" className="hidden">Enter your github username</span>
      </label>
      <input
        id="username"
        type="text"
        value={formData.username}
        onChange={(e) =>
          setFormData((prev: FormData) => {
            return { ...prev, username: e.target.value };
          })
        }
        className="bg-dark-blue rounded-lg px-4 py-2 md:py-3 lg:py-4"
        // placeholder="Your name"
        aria-required='true'
        aria-describedby="desc-username"
        required
        aria-live="polite"
        aria-atomic='true'
      />
    </div>
  );
};

export default GitHubUserNameInput;
