import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class ContentElement extends LitElement {
    currentElement = 0;
    currentElementObject = {};

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

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
            <div id="content"
                 class="container py-5"
                 style="min-height: 30rem">
                <header></header>
                <main>
                    <div class="row mt-5">
                        <card-element/>
                    </div>
                    <div class="row mt-2">
                        <buttons-element @change-element-request="${this.handleChangeElement}"/>
                    </div>
                    <data-provider-element @set-current-element="${this.handleSetCurrentElement}"/>
                    <data-manager-element
                            @data-provider-element="${this.handleSetCurrentElement}"
                            @set-current-element="${this.handleSetCurrentElement}"/>
                </main>
                <footer></footer>
            </div>
        `;
    }

    handleChangeElement(event) {
        const dataManager = this.shadowRoot.querySelector('data-manager-element');
        dataManager.getCurrentElementChange(event.detail);
    }

    handleSetCurrentElement(event) {
        const cardElement = this.shadowRoot.querySelector('card-element');
        const dataProvider = this.shadowRoot.querySelector('data-provider-element');

        if (!dataProvider.characters) {
            return;
        }
        const newCurrentElement = dataProvider.characters[event.detail];
        cardElement.currentElement = newCurrentElement;
    }

}

customElements.define('content-element', ContentElement);