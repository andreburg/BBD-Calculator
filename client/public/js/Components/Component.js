import Components from "./Components.js";

export default class Component {
    #RENDER;

    constructor(params) {
        this.comps = new Components();
        this.#RENDER = new Event("Render");
    }

    sideEffects() {
        this.comps.loadComponents();
    }

    RENDER() {
        dispatchEvent(this.#RENDER);
    }

    getHtml() {
        return "";
    }
}