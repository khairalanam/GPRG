"use client";

import React, { useReducer, ChangeEvent, useEffect } from "react";

import { Field, ProjectAction, ProjectState } from "@/types/ReducerTypes";
import { FormState } from "@/types/NormalTypes";

const initialState: ProjectState[] = [
  { id: 1, title: "", link: "", desc: "" },
  { id: 2, title: "", link: "", desc: "" },
  { id: 3, title: "", link: "", desc: "" },
];

const projectsReducer = (
  state: ProjectState[],
  action: ProjectAction
): ProjectState[] => {
  switch (action.type) {
    case "SET_PROJECT":
      return state.map((project) =>
        project.id === action.payload.id ? action.payload : project
      );
    default:
      return state;
  }
};

const ProjectsInput: React.FC<FormState> = ({ formData, setFormData }) => {
  const [projects, dispatch] = useReducer(projectsReducer, initialState);

  useEffect(
    () => setFormData({ ...formData, projects }),
    [formData, setFormData, projects]
  );

  const handleProjectChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number,
    field: Field
  ) => {
    const value = event.target.value;
    dispatch({
      type: "SET_PROJECT",
      payload: {
        ...projects.find((project) => project.id === id)!,
        [field]: value,
      },
    });
  };

  return (
    <section className="flex flex-col mt-10 max-w-2xl">
      <label htmlFor="project" className="mb-8 md:text-xl lg:text-2xl">
        Mention your best GitHub projects that you have worked/are working on:
      </label>
      {projects.map((project: ProjectState) => (
        <div
          key={project.id}
          className="mb-6 text-sm lg:text-lg flex flex-col font-light"
        >
          <label htmlFor={`projectTitle${project.id}`} className="mb-2">
            Project {project.id} Title:
          </label>
          <input
            type="text"
            id={`projectTitle${project.id}`}
            placeholder={`Mention Project ${project.id} Title`}
            value={project.title}
            onChange={(event) =>
              handleProjectChange(event, project.id, "title")
            }
            className="mb-2 bg-dark-blue rounded-lg px-4 py-2 md:py-3 lg:py-4"
          />

          <label htmlFor={`projectLink${project.id}`}>
            Project {project.id} GitHub Link:
          </label>
          <input
            type="text"
            id={`projectLink${project.id}`}
            placeholder={`Mention Project ${project.id} GitHub Link`}
            value={project.link}
            onChange={(event) => handleProjectChange(event, project.id, "link")}
            className="mb-2 bg-dark-blue rounded-lg px-4 py-2 md:py-3 lg:py-4"
          />

          <label htmlFor={`projectDesc${project.id}`}>
            Project {project.id} Description (Max 160 chars):
          </label>
          <textarea
            id={`projectDesc${project.id}`}
            value={project.desc}
            onChange={(event) => handleProjectChange(event, project.id, "desc")}
            placeholder={`Mention Project ${project.id} Description`}
            maxLength={160}
            className="mb-2 bg-dark-blue rounded-lg px-4 py-2 md:py-3 lg:py-4 resize-none"
          />
        </div>
      ))}
    </section>
  );
};

export default ProjectsInput;
