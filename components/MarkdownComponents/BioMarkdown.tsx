import { BioState } from "@/types/ReducerTypes";
import React from "react";

const BioMarkdown: React.FC<{ bios: BioState[] }> = ({ bios }) => {
  return (
    <ul>
      {bios.map((bio: BioState, index) => (
        <li key={index}>
          {bio.text} <strong>{bio.value}</strong>
        </li>
      ))}
    </ul>
  );
};

export default BioMarkdown;
