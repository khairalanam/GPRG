"use client";

import React, { useState } from "react";

const NameInput = () => {
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col mt-4 max-w-2xl">
      <label htmlFor="name" className="mb-2 md:text-lg lg:text-xl">
        Name:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(() => e.target.value)}
        className="bg-dark-blue rounded-lg px-4 py-2 md:py-3 lg:py-4"
        placeholder="Your name"
      />
    </div>
  );
};

export default NameInput;
