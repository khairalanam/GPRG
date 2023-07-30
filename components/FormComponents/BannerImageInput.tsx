import Image from "next/image";
import React, { useState } from "react";

const BannerImageInput: React.FC = (): React.ReactElement => {
  const [bannerImage, setBannerImage] = useState<string>("");

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

  return (
    <>
      <label htmlFor="bannerImage">Banner Image:</label>
      <input
        type="file"
        id="bannerImage"
        accept="image/*"
        onChange={handleBannerImageChange}
      />
      <button onClick={() => document.getElementById("bannerImage")?.click()}>
        Browse
      </button>
      <p>Or drag and drop an image here</p>
      {bannerImage && <Image src={bannerImage} alt="Banner" />}
    </>
  );
};

export default BannerImageInput;
