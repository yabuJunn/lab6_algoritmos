import { Action, Actions, AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
    switch (action.type) {
        case Actions.ADD_EPISODES:
            return {
                ...currentState,
                episodes: JSON.parse(action.payload)
            };
        case Actions.ADD_CHARACTER:
            return {
                ...currentState,
                characters: JSON.parse(action.payload)
            };
        default:
            return currentState;
    }
};