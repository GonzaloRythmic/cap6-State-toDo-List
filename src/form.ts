import { state } from "./state";

class MyForm extends HTMLElement {
    shadow = this.attachShadow({mode:"open"});
    constructor(){
        super();
        this.render();
    }
    connectedCallBack () {
        const form = this.shadow.querySelector(".form");
        console.log(form);
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            const f = e.target as any;
            console.log(f.text.value)
            // state.addItem(f.text.value);
        });
    }
    render () {
        this.shadow.innerHTML = `
        <form class = "form">
        <input name = "text" />
        <button> + </button>
        </form>`;
    }
}
customElements.define ("my-form", MyForm)