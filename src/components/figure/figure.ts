export enum AttributeFigure {
    "name" = "name",
    "gender" = "gender",
    "eye_color" = "eye_color"
}

export default class Figure extends HTMLElement {
    name?: string;
    gender?: string;
    eye_color?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeFigure, null> = {
            name: null,
            gender: null,
            eye_color: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeFigure,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <section>
                <h1>${this.name}</h1>
                <p>${this.gender}</p>
                <p>${this.eye_color}</p>
                </section>
            `
        }
    }
}

customElements.define('app-figure',Figure);