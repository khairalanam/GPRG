import React from "react";

const NameMarkdown: React.FC<{ name: string }> = ({ name }) => {
  return `<div style="text-align: center;">
    <h1>Hi there! My name is ${name}! Welcome to my GitHub Profile!</h1>
  </div>
  `;
};

export default NameMarkdown;
