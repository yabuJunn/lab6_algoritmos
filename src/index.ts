import { requestData } from "./services/requestData"
import { state, dispatch, addObserver } from "./store/index"
import { arrangeEpisodes } from "./utilities/data"
import "./components/export"

arrangeEpisodes("https://rickandmortyapi.com/api/episode")

export class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    async render() {
        if (this.shadowRoot) {
            this.innerHTML = ""

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/index.css")
            this.shadowRoot?.appendChild(link)

            if (state.episodes === null) {
                const state = this.ownerDocument.createElement("h1")
                state.textContent = "LOADING..."
            } else {
                state.episodes.forEach( (episode: any) => {
                    const episodeCard = this.ownerDocument.createElement("episode-card")
                    episodeCard.setAttribute("name", `${episode.name}`)
                    episodeCard.setAttribute("air_date", `${episode.air_date}`)
                    episodeCard.setAttribute("episode", `${episode.episode}`)
                    this.shadowRoot?.appendChild(episodeCard)
                })
            }
        }



    }
}

customElements.define("app-container", AppContainer)