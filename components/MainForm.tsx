import React from "react";
import BannerImageInput from "./FormComponents/BannerImageInput";
import NameInput from "./FormComponents/NameInput";
import RolesInput from "./FormComponents/RolesInput";
import BioInputs from "./FormComponents/BioInputs";
import ProjectsInput from "./FormComponents/ProjectsInput";

const MainForm = () => {
  return (
    <form className="text-white px-6 py-10 md:px-10 md:py-12 lg:px-20">
      <h1 className="text-2xl font-semibold mb-4 md:text-3xl lg:text-4xl lg:mb-10">
        Fill in the details
      </h1>
      <BannerImageInput />
      <NameInput />
      <RolesInput />
      <BioInputs />
      <ProjectsInput />
    </form>
  );
};

export default MainForm;
