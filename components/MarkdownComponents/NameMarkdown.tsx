import React from "react";

const NameMarkdown: React.FC<{ name: string }> = ({ name }) => {
  return (
    <h1 className="text-center">
      Hi there! My name is {name}! Welcome to my GitHub Profile!
    </h1>
  );
};

export default NameMarkdown;
