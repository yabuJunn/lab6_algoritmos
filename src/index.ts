import { requestData } from "./services/requestData"
import { state, dispatch } from "./store/index"
import { arrangeEpisodes } from "./utilities/data"

export class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    async render() {

        arrangeEpisodes("https://rickandmortyapi.com/api/episode")

        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/index.css")
        this.shadowRoot?.appendChild(link)

        state.episodes.forEach(() => {
            
        })

    }
}

customElements.define("app-container", AppContainer)