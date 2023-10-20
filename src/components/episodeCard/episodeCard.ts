import { extractNumbersFromString } from "../../utilities/extractNumbers";
import { state } from "../../store/index";

const enum episodeCardProperties {
    name = "name",
    air_date = "air_date",
    characters = "characters",
    episode = "episode"

}

export class episodeCard extends HTMLElement {
    properties: Record<episodeCardProperties, string> = {
        name: "",
        air_date: "",
        characters: "",
        episode: ""
    }

    static get observedAttributes() {
        const properties: Record<episodeCardProperties, null> = {
            name: null,
            air_date: null,
            characters: null,
            episode: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: episodeCardProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case episodeCardProperties.name:
                this.properties.name = newValue
                break;
            case episodeCardProperties.air_date:
                this.properties.air_date = newValue
                break;
            case episodeCardProperties.characters:
                this.properties.characters = newValue
                break;
            case episodeCardProperties.episode:
                this.properties.episode = newValue
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/episodeCard/episodeCard.css")
        this.shadowRoot?.appendChild(link)

        //Creation of main container
        const cardCotainer = this.ownerDocument.createElement("div")
        cardCotainer.setAttribute("class", "episodeCard")
        this.shadowRoot?.appendChild(cardCotainer)

        //Creation of childs
        const titleName = this.ownerDocument.createElement("h1")
        titleName.textContent = this.properties.name
        cardCotainer.appendChild(titleName)

        const serial = this.ownerDocument.createElement("h2")
        serial.textContent = `Serial: ${this.properties.episode}`
        cardCotainer.appendChild(serial)

        const airDateText = this.ownerDocument.createElement("p")
        airDateText.textContent = `This episode was aired on ${this.properties.air_date}`
        cardCotainer.appendChild(airDateText)

        const characterListTitle = this.ownerDocument.createElement("p")
        characterListTitle.textContent = "These characters appeared in this episode:"
        cardCotainer.appendChild(characterListTitle)

        const charactersList = this.ownerDocument.createElement("ul")
        

        const charactersJSON = JSON.parse(this.properties.characters)
        charactersJSON.forEach((character: string) => {
            state.characters?.forEach((comparationCharacter: any) => {
                if (comparationCharacter.id === extractNumbersFromString(character)) {
                    const listElement = this.ownerDocument.createElement("li")
                    charactersList.appendChild(listElement)
                    
                    const listText = this.ownerDocument.createElement("p")
                    listText.textContent = comparationCharacter.name
                    listElement.appendChild(listText)
                }

            })
        })

        cardCotainer.appendChild(charactersList)

    }
}

customElements.define("episode-card", episodeCard)