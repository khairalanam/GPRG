"use client";

import React, { ChangeEvent, useEffect, useReducer } from "react";
import { BioState, Action } from "@/types/ReducerTypes";
import { FormState } from "@/types/NormalTypes";

const initialState: BioState[] = [
  {
    placeholder: "Mention your city",
    text: "I'm based in:",
    id: "place",
    value: "",
  },
  {
    placeholder: "Mention your project",
    text: "I'm currently working on:",
    id: "project",
    value: "",
  },
  {
    placeholder: "Mention what you are learning",
    text: "I'm learning:",
    id: "learning",
    value: "",
  },
];

const bioReducer = (state: BioState[], action: Action<string>) => {
  switch (action.type) {
    case "SET_BIO":
      return state.map((bio) =>
        bio.id === action.payload.id
          ? { ...bio, value: action.payload.value }
          : bio
      );
    default:
      return state;
  }
};

const BioInputs: React.FC<FormState> = ({ formData, setFormData }) => {
  const [bios, dispatch] = useReducer(bioReducer, initialState);

  const handleBioChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const value = event.target.value;
    dispatch({ type: "SET_BIO", payload: { id, value } });
  };

  useEffect(() => {
    if (JSON.stringify(bios) !== JSON.stringify(formData.bios))
      setFormData({ ...formData, bios });
  }, [bios, setFormData, formData]);

  return (
    <section className="flex flex-col mt-10 max-w-2xl">
      {bios.map((bio: BioState) => (
        <div
          key={bio.id}
          className="mb-3 md:mb-4 flex flex-col md:flex-row md:items-center md:gap-2 lg:gap-4"
        >
          <label
            htmlFor={bio.id}
            className="mb-2 md:mb-0 md:text-lg lg:text-xl"
          >
            {bio.text}
          </label>
          <input
            type="text"
            id={bio.id}
            placeholder={bio.placeholder}
            value={bio.value}
            onChange={(event) => handleBioChange(event, bio.id)}
            className="bg-dark-blue rounded-lg px-4 py-2 md:py-3 lg:py-4"
          />
        </div>
      ))}
    </section>
  );
};

export default BioInputs;
