"use client";

import React, { useRef } from "react";
import { FormData, FormState } from "@/types/NormalTypes";
import Image from "next/image";

const BannerImageInput: React.FC<FormState> = ({
  formData,
  setFormData,
}): React.ReactElement => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleBannerImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        setFormData((prev: FormData) => ({
          ...prev,
          bannerImage: imageUrl,
        }));
      };
      reader.onerror = () => {
        console.error("Error occurred while reading the image file.");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBrowseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <label htmlFor="bannerImage" className="md:text-lg lg:text-xl">
        Banner Image:
      </label>
      <input
        ref={fileInputRef}
        type="file"
        id="bannerImage"
        accept="image/*"
        onChange={handleBannerImageChange}
        className="hidden"
      />
      <section
        onClick={handleBrowseClick}
        className="flex flex-col justify-center border-[1px] border-none mt-2 w-full px-6 py-10 bg-dark-blue rounded-lg font-extralight max-w-2xl md:py-20 md:text-lg lg:py-40 lg:text-xl items-center"
      >
        <div className="flex items-center gap-4 w-full justify-center">
          <button className="bg-white text-main-blue rounded-md px-2 font-light border-[0.0625rem] transition hover:bg-main-blue hover:text-white hover:border-white md:px-4 lg:py-1 active:bg-dark-blue">
            Browse
          </button>
          <p>or drag and drop an image here</p>
        </div>
        {formData.bannerImage && (
          <div className="self-center mt-4 w-full overflow-hidden max-h-[calc(100vw*9/16)]">
            <Image
              src={formData.bannerImage}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </section>
    </>
  );
};

export default BannerImageInput;
