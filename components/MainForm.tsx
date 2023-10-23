"use client";

import React, { useEffect, useState } from "react";
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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   localStorage.setItem("formData", JSON.stringify(formData));
  //   router.push("/profile-readme");
  // };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateFormData(formData);

    if (validationErrors.length === 0) {
      localStorage.setItem("formData", JSON.stringify(formData));
      router.push("/profile-readme");
    } else {
      // Show validation errors using toast notifications
      validationErrors.forEach((error) => {
        toast.error(error);
      });
    }
  };
  
  const validateFormData = (formData: FormData) => {
    // Implement your validation logic for the entire form data here.
    const errors = [];
  
    if (formData.username.length < 5) {
      errors.push("GitHub username must be at least 5 characters long");
    }
    if(formData.name.length == 0){
      errors.push("please enter your Name");
    }
    if (formData.roles.every(role => role.value.trim() === "")){
      errors.push("Enter atleast one role");
    }
    formData.projects.forEach((project, index) => {
      if (project.desc.length > 160) {
        errors.push(`Project ${index + 1} description must not exceed 160 characters.`);
      }
    });
    if (formData.industryTags.length === 0) {
      errors.push("Please select at least one industry tag.");
    }
    // if()
  
    // Add more validation checks for other fields as needed
  
    return errors;
  };


  useEffect(() => {
    // Add a floating button for scrolling to the bottom of the page
    const scrollButton = document.getElementById("scroll-to-bottom-button");
    if (scrollButton) {
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 300) {
          scrollButton.style.display = "block";
        } else {
          scrollButton.style.display = "none";
        }
      });
    }
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  

  return (
    <div className=" flex flex-col justify-center items-center self-center">
    <ToastContainer />

    <form className="text-white px-6 py-10 md:px-10 md:py-12 lg:px-20  flex flex-col self-center">
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
    <button
        id="scroll-to-bottom-button"
        className="fixed bottom-4 right-4 p-4 bg-dark-blue text-white rounded-full cursor-pointer hover-bg-white hover-text-dark-blue transition-colors"
        onClick={scrollToBottom}
      >
        Scroll to Bottom
      </button>    
    </div>

  );
};

export default MainForm;
