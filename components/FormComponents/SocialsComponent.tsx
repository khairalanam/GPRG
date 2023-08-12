"use client";

import React, { useState } from "react";
import socialOptions from "@/data/socialHandles";
import { SocialLink } from "@/types/NormalTypes";

const SocialsComponent: React.FC = () => {
  const [socialHandles, setSocialHandles] = useState<SocialLink>({});

  const handleSocialInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setSocialHandles((prevHandles) => ({ ...prevHandles, [name]: value }));
  };

  return (
    <section className="max-w-2xl mt-10">
      <h2 className="mb-6 md:text-lg lg:text-xl">
        Enter your Social media handles:
      </h2>
      <ul className="grid grid-cols-1 gap-4 list-none">
        {socialOptions.map((social) => (
          <li key={social.label} className="flex items-center gap-4 w-full">
            <div className="w-8 h-8 flex text-xl justify-center items-center md:w-12 md:h-12 lg:w-16 lg:h-16 md:text-2xl lg:text-4xl">
              {social.icon}
            </div>
            <input
              type="text"
              name={social.label.toLowerCase()}
              value={socialHandles[social.label.toLowerCase()] || ""}
              onChange={handleSocialInputChange}
              placeholder={social.label}
              className="bg-dark-blue rounded-lg px-4 py-2 md:py-3 lg:py-4 md:mb-3 lg:mb-4 w-full"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialsComponent;
