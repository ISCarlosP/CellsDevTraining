import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class ButtonsElement extends LitElement {
    static get styles() {
        const {cssRules} = document.styleSheets[0]
        const globalStyle = css([Object.values(cssRules).map(rule =>
            rule.cssText).join('\n')])
        return [
            globalStyle,
            css`
            `
        ];
    }

    render() {
        return html`
            <div id="buttons" class="col-4 mx-auto">
                <div class="card shadow">
                    <div class="card-body d-flex justify-content-around">
                        <button class="btn btn-sm btn-info fw-bolder"
                                @click="${() => this.changeElementRequest('prev')}">Regresar
                        </button>
                        <button class="btn btn-sm btn-info fw-bolder"
                                @click="${() => this.changeElementRequest('next')}">Siguiente
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    changeElementRequest(type) {
        const changeElementEvent = new CustomEvent('change-element-request', {
            detail: type,
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(changeElementEvent);
    }
}

customElements.define('buttons-element', ButtonsElement);