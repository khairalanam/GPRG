"use client";

import React, { useState } from "react";
import BannerImageInput from "./FormComponents/BannerImageInput";
import NameInput from "./FormComponents/NameInput";
import RolesInput from "./FormComponents/RolesInput";
import BioInputs from "./FormComponents/BioInputs";
import ProjectsInput from "./FormComponents/ProjectsInput";
import TechStackComponent from "./FormComponents/TechStackComponent";
import SocialsComponent from "./FormComponents/SocialsComponent";
import IndustryTagComponent from "./FormComponents/IndustryTagComponent";
import { FormData } from "@/types/NormalTypes";
import { RoleState } from "@/types/ReducerTypes";
import { useRouter } from "next/navigation";
import GitHubUserNameInput from "./FormComponents/GitHubUserNameInput";

const MainForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    bannerImage: "",
    name: "",
    roles: [],
    bios: [],
    projects: [],
    techStacks: [],
    socialHandles: {},
    industryTags: [],
  });

  const updateRoles = (updatedRoles: RoleState[]) => {
    setFormData({ ...formData, roles: updatedRoles });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    router.push("/profile-readme");
  };

  return (
    <form className="text-white px-6 py-10 md:px-10 md:py-12 lg:px-20">
      <h1 className="text-2xl font-semibold mb-4 md:text-3xl lg:text-4xl lg:mb-10">
        Fill in the details
      </h1>
      <GitHubUserNameInput formData={formData} setFormData={setFormData} />
      <BannerImageInput formData={formData} setFormData={setFormData} />
      <NameInput formData={formData} setFormData={setFormData} />
      <RolesInput
        formData={formData}
        setFormData={setFormData}
        updateRoles={updateRoles}
      />
      <BioInputs formData={formData} setFormData={setFormData} />
      <ProjectsInput formData={formData} setFormData={setFormData} />
      <TechStackComponent formData={formData} setFormData={setFormData} />
      <SocialsComponent formData={formData} setFormData={setFormData} />
      <IndustryTagComponent formData={formData} setFormData={setFormData} />
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-dark-blue text-white px-6 py-3 rounded-full cursor-pointer hover:bg-white hover:text-dark-blue transition-colors"
      >
        Generate Readme
      </button>
    </form>
  );
};

export default MainForm;
