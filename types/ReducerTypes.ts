export interface RoleState {
  id: number;
  value: string;
}

export interface ProjectState {
  id: number;
  title: string;
  link: string;
  desc: string;
}

export interface ProjectAction {
  type: string;
  payload: ProjectState;
}

export interface Action<T> {
  type: string;
  payload: {
    id: T;
    value: string;
  };
}

export interface BioState {
  placeholder: string;
  text: string;
  id: string;
  value: string;
}

export type Field = "title" | "link" | "desc";
