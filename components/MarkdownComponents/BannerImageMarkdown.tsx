import React from "react";

const BannerImageMarkdown: React.FC<{ bannerImage: string }> = ({
  bannerImage,
}) => {
  if (!bannerImage) return null;

  return `![Banner Image](${bannerImage})`;
};

export default BannerImageMarkdown;
