import React from "react";
import Image from "next/image";

export const BannerImageMarkdown: React.FC<{ bannerImage: string }> = ({
  bannerImage,
}) => (
  <div className="w-full overflow-hidden max-h-[calc(100vw * 9 / 16)]">
    <Image
      src={bannerImage}
      alt="Banner"
      className="w-full object-cover h-full"
    />
  </div>
);
