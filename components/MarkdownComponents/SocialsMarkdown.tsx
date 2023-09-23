import socialOptions from "@/data/socialHandles";
import { SocialHandle, SocialLink } from "@/types/NormalTypes";
import React from "react";

const SocialsMarkdown: React.FC<{ socials: SocialLink[] }> = ({ socials }) => {
  return (
    <>
      <h2>My Socials</h2>
      <ul className="list-none flex">
        {socials.map((social: SocialLink) => {
          const selectedSocial: SocialHandle | undefined = socialOptions.find(
            (s: SocialHandle) => social.hasOwnProperty(s.label.toLowerCase())
          );

          if (selectedSocial) {
            return (
              <li key={selectedSocial.label} className="w-4 md:w-5 lg:w-6">
                <a href={social[selectedSocial.label.toLowerCase()]}>
                  {selectedSocial.icon}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default SocialsMarkdown;
