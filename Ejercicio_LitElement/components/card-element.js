import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class CardElement extends LitElement {
    static properties = {
        currentElement: {type: Object},
    };

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
            <div id="card" class="col-4 mx-auto">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="w-100 d-flex justify-content-center">
                            ${(this.currentElement && Object.values(this.currentElement).length > 0) ? html`
                                <img class="img-fluid rounded-3"
                                     alt="img-character"
                                     src="${this.currentElement.image}">` : ''}
                        </div>
                        <div class="w-100 d-flex-justify-content-center text-center mt-2">
                            ${(this.currentElement && Object.values(this.currentElement).length > 0) ? html`
                                <span class="fw-bolder fs-2 rounded-3 px-2 shadow">${this.currentElement.name}</span>` : ''}
                        </div>
                        ${(this.currentElement && Object.values(this.currentElement).length > 0) ? html`
                            <div class="w-100 row row-cols-3 mt-3">
                                <div class="col shadow">
                                    <div class="text-center">
                                        <span class="fw-bolder">SPECIES</span>
                                    </div>
                                    <div class="text-center">
                                        <span class="fw-bold">${this.currentElement.species}</span>
                                    </div>
                                </div>
                                <div class="col shadow">
                                    <div class="text-center">
                                        <span class="fw-bolder">GENDER</span>
                                    </div>
                                    <div class="text-center">
                                        <span class="fw-bold">${this.currentElement.gender}</span>
                                    </div>
                                </div>
                                <div class="col shadow">
                                    <div class="text-center">
                                        <span class="fw-bolder">STATUS</span>
                                    </div>
                                    <div class="text-center">
                                        <span class="fw-bold">${this.currentElement.status}</span>
                                    </div>
                                </div>
                            </div>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('card-element', CardElement);