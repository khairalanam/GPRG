// pages/profile-readme.js
import React from "react";
import BannerImageMarkdown from "./MarkdownComponents/BannerImageMarkdown";
import { FormData } from "@/types/NormalTypes";
import NameMarkdown from "./MarkdownComponents/NameMarkdown";

const ProfileReadme: React.FC<{ formData: FormData }> = ({ formData }) => {
  return (
    <section>
      <BannerImageMarkdown bannerImage={formData.bannerImage} />
      <NameMarkdown name={formData.name} />
    </section>
  );
};

export default ProfileReadme;
