import { AttributeButton } from "../Button/Button";
import { AttributeFigure } from "../figure/figure";

export enum AttributeCard {
    "name" = "name",
    "gender" = "gender",
    "eye_color" = "eye_color",
    "btn_text" = "btn_text"
}

export default class Card extends HTMLElement{
    name: string = "";
    gender: string = "";
    eye_color: string = "";
    btn_text: string = "";

    static get observedAttributes(){
        const attrs: Record <AttributeCard,null> = {
            name: null,
            eye_color: null,
            gender: null, 
            btn_text: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCard,
        _: unknown,
        newValue: string
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        constructor(){
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback(){
            this.render();
        }

        render(){
            if(this.shadowRoot) this.shadowRoot.innerHTML = '';

            const container = this.ownerDocument.createElement('section');

            const figure = this.ownerDocument.createElement('app-figure');
            figure.setAttribute(AttributeFigure.name, this.name);
            figure.setAttribute(AttributeFigure.gender, this.gender);
            figure.setAttribute(AttributeFigure.eye_color, this.eye_color)

            const button = this.ownerDocument.createElement('app-button');
            button.setAttribute(AttributeButton.btn_text, this.btn_text);

            container.appendChild(figure);
            container.appendChild(button);

            this.shadowRoot?.appendChild(container)
        }
}

customElements.define('app-card', Card)