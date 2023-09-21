import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class DataProviderElement extends LitElement {

    static get properties() {
        return {
            characters: {
                type: Array,
            },
        };
    }

    constructor() {
        super();
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.getAllCharacters();
    }

    getAllCharacters() {
        axios.get('https://rickandmortyapi.com/api/character').then(function (response) {
            this.characters = response.data.results;
            this.getCurrentElementObject(0);
        }.bind(this)).catch(function (error) {
            console.error(error.message);
        });
    }

    getCurrentElementObject(element) {
        const event = new CustomEvent('set-current-element', {
            detail: 0,
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(event);
    }
}

customElements.define('data-provider-element', DataProviderElement);