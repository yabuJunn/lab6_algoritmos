(()=>{"use strict";var t;!function(t){t.ADD_EPISODES="ADD_EPISODES",t.ADD_CHARACTER="ADD_CHARACTER"}(t||(t={}));const n=[];let e={episodes:[],characters:[]};const o=o=>{const i=JSON.parse(JSON.stringify(e));e=((n,e)=>{switch(n.type){case t.ADD_EPISODES:return Object.assign(Object.assign({},e),{episodes:JSON.parse(n.payload)});case t.ADD_CHARACTER:return Object.assign(Object.assign({},e),{characters:JSON.parse(n.payload)});default:return e}})(o,i),n.forEach((t=>t.render())),console.log(e)};const i=t=>{return n=void 0,e=void 0,i=function*(){const n=yield fetch(t),e=yield n.json();return e.hasOwnProperty("results")?e.results:e},new((o=void 0)||(o=Promise))((function(t,c){function r(t){try{a(i.next(t))}catch(t){c(t)}}function s(t){try{a(i.throw(t))}catch(t){c(t)}}function a(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,s)}a((i=i.apply(n,e||[])).next())}));var n,e,o,i};var c=function(t,n,e,o){return new(e||(e=Promise))((function(i,c){function r(t){try{a(o.next(t))}catch(t){c(t)}}function s(t){try{a(o.throw(t))}catch(t){c(t)}}function a(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(r,s)}a((o=o.apply(t,n||[])).next())}))};const r=t=>c(void 0,void 0,void 0,(function*(){const n=s(t);return a(n)})),s=t=>{const n=[];return t.forEach((t=>c(void 0,void 0,void 0,(function*(){t.characters.forEach((t=>c(void 0,void 0,void 0,(function*(){n.includes(t)||n.push(t)}))))})))),n},a=t=>c(void 0,void 0,void 0,(function*(){const n=[];return t.forEach((t=>c(void 0,void 0,void 0,(function*(){n.push(yield i(t))})))),n})),d=n=>c(void 0,void 0,void 0,(function*(){var e;o((e=JSON.stringify(n),{type:t.ADD_CHARACTER,payload:e}))}));class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n,s,a,u,v;return s=this,a=void 0,v=function*(){var s;s="https://rickandmortyapi.com/api/episode",c(void 0,void 0,void 0,(function*(){const n=yield i(s);var e;o((e=JSON.stringify(n),{type:t.ADD_EPISODES,payload:e}));const c=yield r(n);setTimeout((()=>{d(c)}),500)}));const a=this.ownerDocument.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("href","/src/index.css"),null===(n=this.shadowRoot)||void 0===n||n.appendChild(a),e.episodes.forEach((()=>{}))},new((u=void 0)||(u=Promise))((function(t,n){function e(t){try{i(v.next(t))}catch(t){n(t)}}function o(t){try{i(v.throw(t))}catch(t){n(t)}}function i(n){var i;n.done?t(n.value):(i=n.value,i instanceof u?i:new u((function(t){t(i)}))).then(e,o)}i((v=v.apply(s,a||[])).next())}))}}customElements.define("app-container",u)})();