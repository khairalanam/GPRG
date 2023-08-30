// pages/profile-readme.js
import React from "react";
import BannerImageMarkdown from "./MarkdownComponents/BannerImageMarkdown";
import { FormData } from "@/types/NormalTypes";

const ProfileReadme: React.FC<{ formData: FormData }> = ({ formData }) => {
  return (
    <section>
      <BannerImageMarkdown bannerImage={formData.bannerImage} />
    </section>
  );
};

export default ProfileReadme;
