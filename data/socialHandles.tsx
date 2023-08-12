import { SocialHandle } from "@/types/NormalTypes";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

const socialOptions: SocialHandle[] = [
  { label: "Twitter", icon: <SiTwitter /> },
  { label: "LinkedIn", icon: <SiLinkedin /> },
  { label: "GitHub", icon: <SiGithub /> },
];

export default socialOptions;
