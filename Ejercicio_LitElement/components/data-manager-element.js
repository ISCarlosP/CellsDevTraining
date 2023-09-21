import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class DataManagerElement extends LitElement {

    static get properties() {
        return {
            characterIndex: {
                type: Number,
            },
        }
    }

    constructor() {
        super();
        this.characterIndex = 0;
    }

    updated(changedProperties) {
        if (changedProperties.has('characterIndex')) {
            this.getNewCurrentElement();
        }
    }

    getCurrentElementChange(type) {
        switch (true) {
            case(type === 'next' && this.characterIndex === 19):
                this.characterIndex = 0;
                break;
            case(type === 'prev' && this.characterIndex === 0):
                this.characterIndex = 19;
                break;
            default:
                if (type === 'next') {
                    this.characterIndex++;
                    return
                }
                this.characterIndex--;
                break;
        }
    }

    getNewCurrentElement() {
        const setCurrentElementEvent = new CustomEvent('set-current-element', {
            detail: this.characterIndex,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(setCurrentElementEvent);
    }
}

customElements.define('data-manager-element', DataManagerElement);