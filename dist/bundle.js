(()=>{"use strict";var e,t;(t=e||(e={})).ADD_EPISODES="ADD_EPISODES",t.ADD_CHARACTER="ADD_CHARACTER";const n=[];let o={episodes:[],characters:[]};const s=e=>{return t=void 0,n=void 0,s=function*(){const t=yield fetch(e),n=yield t.json();return n.hasOwnProperty("results")?n.results:n},new((o=void 0)||(o=Promise))((function(e,r){function i(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}c((s=s.apply(t,n||[])).next())}));var t,n,o,s};var r=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function i(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};const i=e=>{const t=[];return e.forEach((e=>r(void 0,void 0,void 0,(function*(){e.characters.forEach((e=>r(void 0,void 0,void 0,(function*(){t.includes(e)||t.push(e)}))))})))),t},a=e=>r(void 0,void 0,void 0,(function*(){const t=[];for(let n=0;n<e.length;n++){const o=e[n],r=yield s(o);t.push(r)}return t}));class c extends HTMLElement{static get observedAttributes(){return Object.keys({name:null,air_date:null,characters:null,episode:null})}constructor(){super(),this.properties={name:"",air_date:"",characters:"",episode:""},this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,n){switch(e){case"name":this.properties.name=n;break;case"air_date":this.properties.air_date=n;break;case"characters":this.properties.characters=n;break;case"episode":this.properties.episode=n}}connectedCallback(){this.render()}render(){var e,t;const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/episodeCard/episodeCard.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n);const s=this.ownerDocument.createElement("div");s.setAttribute("class","episodeCard"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s);const r=this.ownerDocument.createElement("h1");r.textContent=this.properties.name,s.appendChild(r);const i=this.ownerDocument.createElement("h2");i.textContent=`Serial: ${this.properties.episode}`,s.appendChild(i);const a=this.ownerDocument.createElement("p");a.textContent=`This episode was aired on ${this.properties.air_date}`,s.appendChild(a);const c=this.ownerDocument.createElement("p");c.textContent="These characters appeared in this episode:",s.appendChild(c);const d=this.ownerDocument.createElement("ul");JSON.parse(this.properties.characters).forEach((e=>{var t;null===(t=o.characters)||void 0===t||t.forEach((t=>{if(t.id===(e=>{let t=e.match(/(\d+)/);if(t)return parseInt(t[0])})(e)){const e=this.ownerDocument.createElement("li");d.appendChild(e);const n=this.ownerDocument.createElement("p");n.textContent=t.name,e.appendChild(n);const o=this.ownerDocument.createElement("img");o.setAttribute("src",t.image),e.appendChild(o)}}))})),s.appendChild(d)}}customElements.define("episode-card",c);r(void 0,void 0,void 0,(function*(){const t=yield s("https://rickandmortyapi.com/api/episode");var c;(t=>{const s=JSON.parse(JSON.stringify(o));o=((t,n)=>{switch(t.type){case e.ADD_EPISODES:return Object.assign(Object.assign({},n),{episodes:JSON.parse(t.payload)});case e.ADD_CHARACTER:return Object.assign(Object.assign({},n),{characters:JSON.parse(t.payload)});default:return n}})(t,s),n.forEach((e=>e.render())),console.log(o)})((c=JSON.stringify(t),{type:e.ADD_EPISODES,payload:c}));const d=yield(e=>r(void 0,void 0,void 0,(function*(){const t=i(e);return a(t)})))(t);console.log({charactersData:d})}));class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),n.push(this)}connectedCallback(){this.render()}render(){var e,t,n,s,r,i;return n=this,s=void 0,i=function*(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/index.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n),338!==(null===(t=o.characters)||void 0===t?void 0:t.length)?this.ownerDocument.createElement("h1").textContent="LOADING...":o.episodes.forEach((e=>{var t;const n=this.ownerDocument.createElement("episode-card");n.setAttribute("name",`${e.name}`),n.setAttribute("air_date",`${e.air_date}`),n.setAttribute("episode",`${e.episode}`),n.setAttribute("characters",`${JSON.stringify(e.characters)}`),null===(t=this.shadowRoot)||void 0===t||t.appendChild(n)}))}},new((r=void 0)||(r=Promise))((function(e,t){function o(e){try{c(i.next(e))}catch(e){t(e)}}function a(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,a)}c((i=i.apply(n,s||[])).next())}))}}customElements.define("app-container",d)})();