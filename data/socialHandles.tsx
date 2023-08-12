import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SocialHandle } from "@/types/NormalTypes";

const socialOptions: SocialHandle[] = [
  { label: "Twitter", icon: <FaTwitter /> },
  { label: "LinkedIn", icon: <FaLinkedin /> },
  { label: "GitHub", icon: <FaGithub /> },
];

export default socialOptions;
