import React from "react";

const IndustryTagsMarkdown: React.FC<{ industryTags: string[] }> = ({
  industryTags,
}) => {
  return (
    <>
      <h2>My Industry Tags</h2>
      <ul className="list-none flex flex-wrap gap-2">
        {industryTags.map((tag) => (
          <li
            key={tag}
            className="bg-dark-blue text-white px-3 py-1 rounded-full"
          >
            {tag}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IndustryTagsMarkdown;
