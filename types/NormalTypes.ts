import { BioState, ProjectState, RoleState } from "./ReducerTypes";

export interface TechStack {
  label: string;
  value: string;
  icon: React.JSX.Element;
}

export interface SocialHandle {
  label: string;
  icon: React.JSX.Element;
}

export interface SocialLink {
  [key: string]: string;
}

export interface FormData {
  bannerImage: string;
  name: string;
  roles: RoleState[];
  bios: BioState[];
  projects: ProjectState[];
  techStacks: string[];
  socialHandles: SocialLink;
  industryTags: string[];
}

export interface FormState {
  formData: FormData;
  setFormData: Function;
}

export interface UpdateRoles {
  updateRoles: (roles: RoleState[]) => void;
}
