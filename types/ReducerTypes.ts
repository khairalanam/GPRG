export interface RoleState {
  id: number;
  value: string;
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
