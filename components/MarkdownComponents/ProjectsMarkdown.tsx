import { ProjectState } from "@/types/ReducerTypes";
import React from "react";

const ProjectsMarkdown: React.FC<{ projects: ProjectState[] }> = ({
  projects,
}) => {
  return (
    <>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project: ProjectState) => (
          <li key={project.id}>
            <a href={project.link} className="font-bold underline text-white">
              {project.title}
            </a>
            <p>{project.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsMarkdown;
