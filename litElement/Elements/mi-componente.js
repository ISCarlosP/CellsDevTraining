import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MiComponente extends LitElement {
    render() {
        return html`
            <h1> Hola, soy un componente de LitElement</h1>
            <p>Este es mi contenido</p>
        `;
    }
}

customElements.define('mi-componente', MiComponente);