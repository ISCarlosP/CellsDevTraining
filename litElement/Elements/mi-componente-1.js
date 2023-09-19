import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MiComponente1 extends LitElement {
    static get properties() {
        return {
            nombre: {
                type: String,
                attribiute: true,
                reflect: true
            },
            contador: {
                type: Number
            }
        };
    }

    constructor() {
        super();
        this.nombre = 'Saeh Cls';
        this.contador = 0;
    }

    render() {
        return html`
            <h1>Hola, ${this.nombre}!</h1>
            <p>Contador: ${this.contador}</p>
            <button @click="${this.incrementar}">Incrementar</button>`;
    }

    incrementar() {
        this.contador++;
    }
}

customElements.define('mi-componente-1', MiComponente1);