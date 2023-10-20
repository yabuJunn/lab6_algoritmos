export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: Actions;
  payload: string;
}

export enum Actions {
  "ADD_EPISODES" = "ADD_EPISODES",
  "ADD_CHARACTER" = "ADD_CHARACTER",
}

export interface AppState {
    episodes: any,
    characters: any
}
