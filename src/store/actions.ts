import { Action, Actions } from "../types/store";

export const addEpisodes = (payload: string): Action => ({
    type: Actions.ADD_EPISODES,
    payload,
});

export const addCharacter = (payload: string): Action => {
    return {
        type: Actions.ADD_CHARACTER,
        payload,
    };
};