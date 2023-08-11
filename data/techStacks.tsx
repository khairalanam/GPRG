import React from "react";
import { FaJava } from "react-icons/fa";

import {
  SiAlpinedotjs,
  SiAngular,
  SiBootstrap,
  SiBulma,
  SiC,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiDart,
  SiDjango,
  SiDotnet,
  SiExpress,
  SiFlask,
  SiFlutter,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPreact,
  SiPython,
  SiReact,
  SiRubyonrails,
  SiRust,
  SiSolid,
  SiSpringboot,
  SiSurrealdb,
  SiSvelte,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

interface TechStack {
  label: string;
  value: string;
  icon: React.JSX.Element;
}

const techStackOptions: TechStack[] = [
  { label: "React", value: "react", icon: <SiReact /> },
  { label: "Angular", value: "angular", icon: <SiAngular /> },
  { label: "Vue.js", value: "vuejs", icon: <SiVuedotjs /> },
  { label: "Svelte", value: "svelte", icon: <SiSvelte /> },
  { label: "Solid", value: "solid", icon: <SiSolid /> },
  { label: "Flutter", value: "flutter", icon: <SiFlutter /> },
  { label: "AlpineJS", value: "alpinejs", icon: <SiAlpinedotjs /> },
  { label: "Preact", value: "preact", icon: <SiPreact /> },

  { label: "Node.js", value: "nodejs", icon: <SiNodedotjs /> },
  { label: "Express", value: "expressjs", icon: <SiExpress /> },
  { label: "Django", value: "django", icon: <SiDjango /> },
  { label: "Ruby On Rails", value: "rubyonrails", icon: <SiRubyonrails /> },
  { label: "Springboot", value: "springboot", icon: <SiSpringboot /> },
  { label: "Flask", value: "flask", icon: <SiFlask /> },
  { label: ".NET", value: "dotnet", icon: <SiDotnet /> },

  { label: "Tailwind", value: "tailwind", icon: <SiTailwindcss /> },
  { label: "Bootstrap", value: "bootstrap", icon: <SiBootstrap /> },
  { label: "Bulma", value: "bulma", icon: <SiBulma /> },

  { label: "Python", value: "python", icon: <SiPython /> },
  { label: "Java", value: "java", icon: <FaJava /> },
  { label: "JavaScript", value: "javascript", icon: <SiJavascript /> },
  { label: "TypeScript", value: "typescript", icon: <SiTypescript /> },
  { label: "PHP", value: "php", icon: <SiPhp /> },
  { label: "HTML", value: "html", icon: <SiHtml5 /> },
  { label: "CSS", value: "css", icon: <SiCss3 /> },
  { label: "C++", value: "cplusplus", icon: <SiCplusplus /> },
  { label: "C", value: "c", icon: <SiC /> },
  { label: "C#", value: "csharp", icon: <SiCsharp /> },
  { label: "Rust", value: "rust", icon: <SiRust /> },
  { label: "Go", value: "golang", icon: <SiGo /> },
  { label: "Dart", value: "dart", icon: <SiDart /> },
  { label: "Kotlin", value: "kotlin", icon: <SiKotlin /> },
  { label: "Swift", value: "swift", icon: <SiSwift /> },

  { label: "MySQL", value: "mysql", icon: <SiMysql /> },
  { label: "PostgreSQL", value: "postgresql", icon: <SiPostgresql /> },
  { label: "MongoDB", value: "mongodb", icon: <SiMongodb /> },
  { label: "SurrealDB", value: "surrealdb", icon: <SiSurrealdb /> },
];

export default techStackOptions;
