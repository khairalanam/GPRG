import React from "react";
import BannerImageInput from "./FormComponents/BannerImageInput";

const MainForm = () => {
  return (
    <form className="text-white border-[2px] border-red-500 px-6 py-10 md:px-10 md:py-12 lg:px-20">
      <h1 className="text-2xl font-semibold mb-4 md:text-3xl lg:text-4xl lg:mb-10">
        Fill in the details
      </h1>
      <BannerImageInput />
    </form>
  );
};

export default MainForm;
