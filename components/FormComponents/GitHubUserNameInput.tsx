"use client";

import React from "react";
import { FormData, FormState } from "@/types/NormalTypes";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GitHubUserNameInput: React.FC<FormState> = ({
  formData,
  setFormData,
}) => {
  const handleGitHubUsernameChange = (e: { target: { value: any; }; }) => {
    const username = e.target.value;

    // Update the state with the new value
    setFormData((prev: FormData) => {
      return { ...prev, username: username };
    });
  };

  return (
    <section className="flex flex-col mt-10 max-w-2xl" role="Github Username">
      <label htmlFor="username" className="mb-2 md:text-lg lg:text-xl">
        GitHub Username:
        <span id="desc-username" className="sr-only">
          Enter your GitHub Username
        </span>
      </label>
      <input
        id="username"
        type="text"
        value={formData.username}
        onChange={handleGitHubUsernameChange}
        className="bg-dark-blue rounded-lg px-4 py-2 md:py-3 lg:py-4"
        aria-required="true"
        aria-describedby="desc-username"
        required
        aria-live="polite"
        aria-atomic="true"
      />
    </section>
  );
};

export default GitHubUserNameInput;
