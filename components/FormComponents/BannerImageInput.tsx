"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";

const BannerImageInput: React.FC = (): React.ReactElement => {
  const [bannerImage, setBannerImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBannerImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        setBannerImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBrowseClick = () => {
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
        className="flex gap-4 items-middle justify-center border-[1px] border-red-500 mt-2 w-full px-6 py-10 bg-dark-blue rounded-lg font-extralight max-w-2xl md:py-20 md:text-lg lg:py-40 lg:text-xl"
      >
        <button className="bg-white text-main-blue rounded-md px-2 font-light border-[0.0625rem] transition hover:bg-main-blue hover:text-white hover:border-white md:px-4 lg:py-1 active:bg-dark-blue">
          Browse
        </button>
        <p>or drag and drop an image here</p>
      </section>
      {bannerImage && <Image src={bannerImage} alt="Banner" />}
    </>
  );
};

export default BannerImageInput;
