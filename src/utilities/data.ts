import { requestData } from "../services/requestData"
import { dispatch } from "../store/index"
import { Actions } from "../types/store"
import { addCharacter, addEpisodes } from "../store/actions"

export const arrangeEpisodes = async (url: string) => {
    const dataEpisodes = await requestData(url)
    dispatch(
        addEpisodes(JSON.stringify(dataEpisodes))
    )
    const charactersData: any = await arrangeCharacters(dataEpisodes)
    setTimeout( () => {
        storageCharacters(charactersData)
    }, 500)
    
}


const arrangeCharacters = async (dataEpisodes: any) => {
    const charactersLinks = createCharactersLinksArray(dataEpisodes)
    return fetchCharacters(charactersLinks)
}

const createCharactersLinksArray = (dataEpisodes: any) => {
    const charactersLinks: any = []
    dataEpisodes.forEach(async (episode: any) => {
        episode.characters.forEach(async (character: any) => {
            if (!charactersLinks.includes(character)) {
                charactersLinks.push(character)
            }
        });
    });
    return charactersLinks
}

const fetchCharacters = async (charactersLinks: any) => {
    const charactersArray: any = []
    charactersLinks.forEach(async (element: any) => {
        charactersArray.push(await requestData(element))
    });
    return charactersArray
}

const storageCharacters = async (charactersData: any) => {
    dispatch(
        addCharacter(JSON.stringify(charactersData))
    )
}

