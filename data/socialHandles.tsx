import { SocialHandle } from "@/types/NormalTypes";
import {
  SiBehance,
  SiCodechef,
  SiCodeforces,
  SiDevdotto,
  SiDribbble,
  SiFacebook,
  SiGithub,
  SiHackerrank,
  SiHashnode,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiMedium,
  SiTwitter,
} from "react-icons/si";

const socialOptions: SocialHandle[] = [
  { label: "Facebook", icon: <SiFacebook /> },
  { label: "Twitter", icon: <SiTwitter /> },
  { label: "LinkedIn", icon: <SiLinkedin /> },
  { label: "GitHub", icon: <SiGithub /> },
  { label: "Instagram", icon: <SiInstagram /> },

  { label: "Dribbble", icon: <SiDribbble /> },
  { label: "Behance", icon: <SiBehance /> },

  { label: "Leetcode", icon: <SiLeetcode /> },
  { label: "Codechef", icon: <SiCodechef /> },
  { label: "Codeforces", icon: <SiCodeforces /> },
  { label: "HackerRank", icon: <SiHackerrank /> },

  { label: "Medium", icon: <SiMedium /> },
  { label: "Devto", icon: <SiDevdotto /> },
  { label: "Hashnode", icon: <SiHashnode /> },
];

export default socialOptions;
