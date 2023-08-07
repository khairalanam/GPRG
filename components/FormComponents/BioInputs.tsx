"use client";

import React, { ChangeEvent, useReducer } from "react";

interface Action {
  type: string;
  payload: {
    id: string;
    value: string;
  };
}

interface BioState {
  placeholder: string;
  text: string;
  id: string;
  value: string;
}

const initialState: BioState[] = [
  {
    placeholder: "Mention your city",
    text: "I'm based in ",
    id: "place",
    value: "",
  },
  {
    placeholder: "Mention your project",
    text: "I'm currently working on ",
    id: "project",
    value: "",
  },
  {
    placeholder: "Mention what you are learning",
    text: "I'm learning ",
    id: "learning",
    value: "",
  },
];

const bioReducer = (state: BioState[], action: Action) => {
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

const BioInputs = () => {
  const [bios, dispatch] = useReducer(bioReducer, initialState);

  const handleBioChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const value = event.target.value;
    dispatch({ type: "SET_BIO", payload: { id, value } });
  };

  return (
    <section>
      {bios.map((bio: BioState) => (
        <>
          <label htmlFor={bio.id}>{bio.text}</label>
          <input
            type="text"
            id={bio.id}
            placeholder={bio.placeholder}
            value={bio.value}
            onChange={(event) => handleBioChange(event, bio.id)}
          />
        </>
      ))}
    </section>
  );
};

export default BioInputs;
